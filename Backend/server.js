const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));


const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// =======================
// DATABASE SETUP
// =======================

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    username TEXT UNIQUE,
    password TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS certificates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    certificate_code TEXT,
    username TEXT
  )
`);


// =======================
// PASSPORT GOOGLE STRATEGY
// =======================
// at the top of server.js
require('dotenv').config();

passport.use(new GoogleStrategy({
  // clientID: "GOOGLE_CLIENT_ID",
  // clientSecret: "GOOGLE_CLIENT_SECRET",
  // callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {

  
  let baseUsername = email.split("@")[0];
  
  // cek apakah username sudah ada, jika ada tambahkan angka
  function generateUniqueUsername(base, callback) {
    db.get("SELECT * FROM users WHERE username = ?", [base], (err, row) => {
      if (err) return callback(err);
      if (!row) return callback(null, base);
      // jika sudah ada, tambahkan random number
      const newUsername = base + Math.floor(Math.random() * 1000);
      generateUniqueUsername(newUsername, callback);
    });
  }

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) return done(err);
    if (row) return done(null, row); // user sudah ada

    generateUniqueUsername(baseUsername, (err, uniqueUsername) => {
      if (err) return done(err);

      db.run(
        "INSERT INTO users (email, username, fullName, password) VALUES (?, ?, ?, ?)",
        [email, uniqueUsername, fullName, null],
        function (err) {
          if (err) return done(err);
          db.get("SELECT * FROM users WHERE id = ?", [this.lastID], (err2, newUser) => {
            return done(null, newUser);
          });
        }
      );
    });
  });
}));

// =======================
// REGISTER API
// =======================
app.post("/api/register", (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (!fullName || !email || !username || !password)
    return res.status(400).json({ error: "Semua field harus diisi" });

  db.run(
    "INSERT INTO users (fullName, email, username, password) VALUES (?, ?, ?, ?)",
    [fullName, email, username, password],
    function(err) {
      if (err) return res.status(400).json({ error: "Email atau username sudah dipakai" });
      res.json({ message: "Register berhasil" });
    }
  );
});

// =======================
// LOGIN API
// =======================
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (!row) return res.status(404).json({ error: "User belum terdaftar" });
    if (row.password !== password) return res.status(400).json({ error: "Password salah" });

    res.json({ 
      message: "Login berhasil",
      user: { username: row.username, fullName: row.fullName, email: row.email }
    });
  });
});

// =======================
// GOOGLE AUTH ROUTES
// =======================
app.get("/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/api/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const user = req.user;
    const token = "dummy-token";
    res.redirect(`http://localhost:5173/login-success?username=${user.username}&fullName=${user.fullName}&email=${user.email}&token=${token}`);
  }
);

// =======================
// CERTIFICATE API
// =======================
app.post("/api/save-certificate", (req, res) => {
  const { certificateNumber, username } = req.body;

  if (!certificateNumber || !username) {
    return res.status(400).json({ error: "certificateNumber & username required" });
  }

  const sql = `INSERT INTO certificates (certificate_code, username) VALUES (?, ?)`;

  db.run(sql, [certificateNumber, username], function (err) {
    if (err) {
      console.error("DB Insert Error:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }

    res.json({ success: true, id: this.lastID });
  });
});

// Tambahkan di server.js sebelum app.listen
const query = `
  SELECT * FROM certificates
  WHERE certificate_code = ?
  AND username = ?
`;

app.post("/api/validate-certificate", (req, res) => {
  const { certificate_code, username } = req.body;
  if (!certificate_code || !username) return res.status(400).json({ valid: false });

  const query = `SELECT * FROM certificates WHERE certificate_code = ? AND username = ?`;
  db.get(query, [certificate_code, username], (err, row) => {
    if (err) return res.status(500).json({ valid: false });
    if (!row) return res.json({ valid: false });
    res.json({ valid: true, certificate: row });
  });
});

app.post("/api/check-user", (req, res) => {
  const { email, username } = req.body;
  if (!email || !username) return res.status(400).json({ error: "Email & username required" });

  db.get("SELECT * FROM users WHERE email = ? AND username = ?", [email, username], (err, row) => {
    if (err) return res.status(500).json({ error: "DB error" });
    if (!row) return res.status(404).json({ error: "User not found" });

    res.json({ success: true, userId: row.id });
  });
});

app.post("/api/reset-password/:id", (req, res) => {
  const userId = req.params.id;
  const { newPassword } = req.body;

  if (!newPassword) return res.status(400).json({ success: false, error: "Password baru diperlukan" });

  const sql = "UPDATE users SET password = ? WHERE id = ?";
  db.run(sql, [newPassword, userId], function(err) {
    if (err) return res.status(500).json({ success: false, error: "Gagal update password" });
    if (this.changes === 0) return res.status(404).json({ success: false, error: "User tidak ditemukan" });
    res.json({ success: true });
  });
});




// =======================
// START SERVER
// =======================
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

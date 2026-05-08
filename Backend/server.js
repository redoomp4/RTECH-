require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createClient } = require('@supabase/supabase-js');

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Inisialisasi Supabase (Kredensial akan dimasukkan di Vercel/env)
const supabaseUrl = process.env.SUPABASE_URL || 'https://xyz.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'dummy_key';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

// =======================
// ROOT API (Health Check)
// =======================
app.get("/", (req, res) => {
  res.json({ status: "Backend R-Tech berjalan normal!", version: "1.0.0" });
});

// =======================
// REGISTER API
// =======================
app.post("/api/register", async (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (!fullName || !email || !username || !password)
    return res.status(400).json({ error: "Semua field harus diisi" });

  const { error } = await supabase
    .from('users')
    .insert([{ fullName, email, username, password }]);

  if (error) {
    console.error("Register Error:", error);
    return res.status(400).json({ error: "Email atau username sudah dipakai" });
  }

  res.json({ message: "Register berhasil" });
});

// =======================
// LOGIN API
// =======================
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !user) return res.status(404).json({ error: "User belum terdaftar" });
  if (user.password !== password) return res.status(400).json({ error: "Password salah" });

  res.json({ 
    message: "Login berhasil",
    user: { username: user.username, fullName: user.fullName, email: user.email }
  });
});

// =======================
// CERTIFICATE API
// =======================
app.post("/api/save-certificate", async (req, res) => {
  const { certificateNumber, username } = req.body;

  if (!certificateNumber || !username) {
    return res.status(400).json({ error: "certificateNumber & username required" });
  }

  const { data, error } = await supabase
    .from('certificates')
    .insert([{ certificate_code: certificateNumber, username }])
    .select();

  if (error) {
    console.error("DB Insert Error:", error);
    return res.status(500).json({ error: "Database insert failed" });
  }

  res.json({ success: true, id: data[0].id });
});

app.post("/api/validate-certificate", async (req, res) => {
  const { certificate_code, username } = req.body;
  if (!certificate_code || !username) return res.status(400).json({ valid: false });

  const { data: row, error } = await supabase
    .from('certificates')
    .select('*')
    .eq('certificate_code', certificate_code)
    .eq('username', username)
    .single();

  if (error || !row) return res.json({ valid: false });
  res.json({ valid: true, certificate: row });
});

// =======================
// PASSWORD RESET API
// =======================
app.post("/api/check-user", async (req, res) => {
  const { email, username } = req.body;
  if (!email || !username) return res.status(400).json({ error: "Email & username required" });

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('username', username)
    .single();

  if (error || !user) return res.status(404).json({ error: "User not found" });

  res.json({ success: true, userId: user.id });
});

app.post("/api/reset-password/:id", async (req, res) => {
  const userId = req.params.id;
  const { newPassword } = req.body;

  if (!newPassword) return res.status(400).json({ success: false, error: "Password baru diperlukan" });

  const { data, error } = await supabase
    .from('users')
    .update({ password: newPassword })
    .eq('id', userId);

  if (error) return res.status(500).json({ success: false, error: "Gagal update password" });
  
  res.json({ success: true });
});

// =======================
// EXPORT UNTUK VERCEL (Serverless)
// =======================
module.exports = app;

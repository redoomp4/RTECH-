// Base URL untuk semua API request
// Otomatis switch antara localhost (dev) dan production (Vercel/Render)
export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");

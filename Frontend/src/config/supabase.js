import { createClient } from '@supabase/supabase-js'

// URL dan Key Supabase kamu (hardcoded agar tidak bergantung pada .env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://goboosguustacwoifkde.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_i7wfqBPcxF-HjgmyMkTYtQ_m3uKe7_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    detectSessionInUrl: false,  // Matikan deteksi otomatis agar tidak kena error "stale URL"
    autoRefreshToken: true,
    persistSession: true,
  }
})

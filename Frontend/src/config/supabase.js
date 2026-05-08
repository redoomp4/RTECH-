import { createClient } from '@supabase/supabase-js'

// TODO: Nanti ganti dengan URL dan Anon Key dari dashboard Supabase kamu
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyz.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rsbsgaiyohudwidjksrv.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYnNnYWl5b2h1ZHdpZGprc3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyODkwMDMsImV4cCI6MjAzNjg2NTAwM30.RP29YLSuXN6of0BVbCWMWvl31rwiHqvlFL4eJdD7L-k'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
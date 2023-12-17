
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fhobdmqhmjeasblkdpzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZob2JkbXFobWplYXNibGtkcHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1NjMzMzYsImV4cCI6MjAxODEzOTMzNn0.tZA4ZxFefeQKtQ11DAExNTcbnqQ8QSIrLpJreNO1aJs'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
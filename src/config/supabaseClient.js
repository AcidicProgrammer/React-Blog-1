// Code to connect to Supabase database

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://erjuowheczmjbwlicemt.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyanVvd2hlY3ptamJ3bGljZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0MDE0NjQsImV4cCI6MTk4Njk3NzQ2NH0.p6XNqxl7w0bHfjpDwVSlWhRNy-MFL_wOcMywa5LcJrg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jsvkwvgwumshegwkfgmp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzdmt3dmd3dW1zaGVnd2tmZ21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTgyMjcsImV4cCI6MjA1NTc5NDIyN30.5Eufoqaazj83FOeKPn6Ck1oPEYUIsOYABRPfxzi26OE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
config();

let supabaseInstance = null;
const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublicKey = process.env.SUPABASE_PUBLIC_KEY;

export function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabasePublicKey);
  }
  return supabaseInstance;
}

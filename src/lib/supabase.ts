import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_API_KEY env vars");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const CV_BUCKET = "cvs";

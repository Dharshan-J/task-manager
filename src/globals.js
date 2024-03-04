import { createClient } from "@supabase/supabase-js";

let supabaseUrl, supabaseKey;

// Access environment variables asynchronously
if (import.meta.env) {
  supabaseUrl = import.meta.env.VITE_SUPA_BASE_URL;
  supabaseKey = import.meta.env.VITE_SUPA_BASE_KEY;
}


console.log(import.meta.env)

const API = createClient(supabaseUrl, supabaseKey);

export { API, supabaseUrl, supabaseKey };

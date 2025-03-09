import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mwkracypvfhvwpzkivco.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);

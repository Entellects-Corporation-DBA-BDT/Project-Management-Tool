// Supabase client scaffold. Real keys live in env; do not commit secrets.
// Auth, Storage, and Postgres (with RLS) will replace mockWorkspace data.

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function getSupabaseConfig() {
  return {
    url: supabaseUrl,
    configured: isSupabaseConfigured,
    auth: "supabase-auth",
    storage: "supabase-storage",
    db: "postgresql",
  };
}

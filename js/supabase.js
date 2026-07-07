// =============================
// CONFIGURAÇÃO DO SUPABASE
// =============================

const SUPABASE_URL = "https://mmmiqqxienjeioxcnggu.supabase.co";

const SUPABASE_KEY = "sb_publishable_ZHE8lc4B6IgyqDLe_LRK7w_edpWgmSz";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

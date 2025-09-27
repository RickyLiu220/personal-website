const projID = import.meta.env.VITE_EDGE_FUNCTION_URL_MONTHLY;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY_MONTHLY;
const EDGE_FUNCTION_URL = `https://${projID}.supabase.co/functions/v1/getMostRecent`;
export async function fetchRecentLeetcode() {
  const res = await fetch(EDGE_FUNCTION_URL, {
    headers: {
      Authorization: `Bearer ${anonKey}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch recent submissions");
  return res.json();
}

export async function fetchRecentLeetcode() {
  const res = await fetch(
    "https://xiosafmpistqbnaaqbgv.functions.supabase.co/getMostRecent",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb3NhZm1waXN0cWJuYWFxYmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjYxNzksImV4cCI6MjA3NDQwMjE3OX0.DlUalHLhqkoe7FTQwHcXSAWmNV9uVHk3xW8-hOprPjo",
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch recent submissions");
  return res.json();
}

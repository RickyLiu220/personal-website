export interface LeetCodeStats {
  total_solved: number;
  solved_today: number;
  streak_days: number;
  difficulty_accepted: Record<string, number>;
  difficulty_attempted: Record<string, number>;
}

export async function fetchLCData(): Promise<LeetCodeStats> {
  const res = await fetch(
    "https://xiosafmpistqbnaaqbgv.supabase.co/functions/v1/fetchLCData",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb3NhZm1waXN0cWJuYWFxYmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjYxNzksImV4cCI6MjA3NDQwMjE3OX0.DlUalHLhqkoe7FTQwHcXSAWmNV9uVHk3xW8-hOprPjo",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch LeetCode stats");
  }

  const data: LeetCodeStats = await res.json();

  // Normalize keys from lowercase to capitalized
  const normalizedData: LeetCodeStats = {
    ...data,
    difficulty_accepted: {
      Easy: data.difficulty_accepted.easy ?? 0,
      Medium: data.difficulty_accepted.medium ?? 0,
      Hard: data.difficulty_accepted.hard ?? 0,
    },
    difficulty_attempted: {
      Easy: data.difficulty_attempted.easy ?? 0,
      Medium: data.difficulty_attempted.medium ?? 0,
      Hard: data.difficulty_attempted.hard ?? 0,
    },
  };
  console.log(normalizedData);
  return normalizedData;
}

export interface LeetCodeStats {
  total_solved: number;
  solved_today: number;
  streak_days: number;
  difficulty_accepted: Record<string, number>;
  difficulty_attempted: Record<string, number>;
}
const projID = import.meta.env.VITE_EDGE_FUNCTION_URL_MONTHLY;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY_MONTHLY;
const EDGE_FUNCTION_URL = `https://${projID}.supabase.co/functions/v1/fetchLCData`;

export async function fetchLCData(): Promise<LeetCodeStats> {
  const res = await fetch(EDGE_FUNCTION_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${anonKey}`,
    },
  });

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

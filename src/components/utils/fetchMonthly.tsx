// ./utils/fetchMonthly.tsx

export interface MonthlyProgress {
  month: string;
  solved: number;
}

export interface MonthlyProgressResponse {
  months: MonthlyProgress[];
  solvedThisMonth: number;
  changeFromLastMonth: number;
}

export async function fetchMonthlyProgress(): Promise<MonthlyProgressResponse> {
  try {
    const EDGE_FUNCTION_URL =
      "https://xiosafmpistqbnaaqbgv.supabase.co/functions/v1/fetchMonthly";
    const SUPABASE_ANON_KEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb3NhZm1waXN0cWJuYWFxYmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjYxNzksImV4cCI6MjA3NDQwMjE3OX0.DlUalHLhqkoe7FTQwHcXSAWmNV9uVHk3xW8-hOprPjo";

    const response = await fetch(EDGE_FUNCTION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching monthly progress: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(data);
    return {
      months: (data.months ?? []).map((m: any) => ({
        month: m.month_start.slice(0, 7),
        solved: m.total_solved ?? 0,
      })),
      solvedThisMonth: data.solvedThisMonth ?? 0,
      changeFromLastMonth: data.changeFromLastMonth ?? 0,
    };
  } catch (err) {
    console.error("Failed to fetch monthly progress:", err);
    return { months: [], solvedThisMonth: 0, changeFromLastMonth: 0 };
  }
}

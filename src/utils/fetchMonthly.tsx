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
const projID = import.meta.env.VITE_EDGE_FUNCTION_URL_MONTHLY;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY_MONTHLY;
const EDGE_FUNCTION_URL = `https://${projID}.supabase.co/functions/v1/fetchMonthly`;

export async function fetchMonthlyProgress(): Promise<MonthlyProgressResponse> {
  try {
    const response = await fetch(EDGE_FUNCTION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
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

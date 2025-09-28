import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { fetchRecentLeetcode } from "../utils/fetchRecentLC";
import { fetchLCData, LeetCodeStats } from "../utils/fetchLCData";
import {
  fetchMonthlyProgress,
  MonthlyProgressResponse,
} from "../utils/fetchMonthly";

function getLast12Months(): string[] {
  const months: string[] = [];
  const today = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
    );
  }
  return months;
}

function formatMonthLabel(ym: string) {
  const [year, month] = ym.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleString("default", { month: "short" });
}

export function LeetCodePage() {
  //Finding recent submissions
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecentLeetcode()
      .then((data) => setRecentSubmissions(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  //Fetching latest LC data
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await fetchLCData(); // your fetch function with Authorization
        setLcStats(data);
      } catch (err: any) {
        setStatsError(err.message || "Failed to fetch LeetCode stats");
      } finally {
        setStatsLoading(false);
      }
    };
    fetchStats();
  }, []);
  //Fetching Monthly Data
  const [monthlyStats, setMonthlyStats] =
    useState<MonthlyProgressResponse | null>(null);
  const [monthlyLoading, setMonthlyLoading] = useState(true);
  const [monthlyError, setMonthlyError] = useState<string | null>(null);

  useEffect(() => {
    fetchMonthlyProgress()
      .then((data) => setMonthlyStats(data))
      .catch((err) => setMonthlyError(err.message))
      .finally(() => setMonthlyLoading(false));
  }, []);
  // Mock data for demonstration

  const progressData = getLast12Months().map((month) => {
    const found = monthlyStats?.months.find((m) => {
      // Convert "2025-09-01" -> "2025-09"
      const normalized = m.month.slice(0, 7);
      return normalized === month;
    });

    return {
      month,
      solved: found ? found.solved : 0,
    };
  });

  const totalProblemsByDifficulty = {
    Easy: 873,
    Medium: 1829,
    Hard: 823,
  };

  const totalProblems = 3691;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl">LeetCode Progress</h1>
        <p className="text-muted-foreground">
          Tracking my algorithmic problem-solving journey
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Solved</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <p>Loading...</p>
            ) : statsError ? (
              <p className="text-red-500">{statsError}</p>
            ) : (
              <>
                <div className="text-2xl">{lcStats?.total_solved ?? 0}</div>
                <p className="text-xs text-muted-foreground">
                  out of {totalProblems} problems
                </p>
                <Progress
                  value={Math.round(
                    ((lcStats?.total_solved ?? 0) / totalProblems) * 100
                  )}
                  className="mt-3"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {Math.round(
                    ((lcStats?.total_solved ?? 0) / totalProblems) * 100
                  )}
                  % completion
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <p>Loading...</p>
            ) : statsError ? (
              <p className="text-red-500">{statsError}</p>
            ) : (
              <div className="text-2xl">
                {lcStats?.streak_days}{" "}
                {lcStats?.streak_days === 1 ? "Day" : "Days"}
              </div>
            )}
            <p className="text-xs text-muted-foreground">Keep it up! 🔥</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">
              Solved at Beginning of Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            {monthlyLoading ? (
              <div className="text-2xl">Loading...</div>
            ) : monthlyError ? (
              <p className="text-xs text-red-500">{monthlyError}</p>
            ) : monthlyStats ? (
              <>
                <div className="text-2xl">
                  {monthlyStats.solvedThisMonth} problems
                </div>
                <p className="text-xs text-muted-foreground">
                  {monthlyStats.changeFromLastMonth >= 0 ? "+" : ""}
                  {monthlyStats.changeFromLastMonth} from last month
                </p>
              </>
            ) : (
              <p className="text-xs">No data available</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Progress Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            {monthlyLoading ? (
              <p>Loading...</p>
            ) : monthlyError ? (
              <p className="text-red-500">{monthlyError}</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={progressData.map((d) => ({
                    ...d,
                    month: formatMonthLabel(d.month),
                  }))}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="solved"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Difficulty Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Problems by Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {lcStats &&
              (["Easy", "Medium", "Hard"] as const).map((level) => {
                const solved = lcStats.difficulty_accepted[level] ?? 0;
                const total = totalProblemsByDifficulty[level];
                return (
                  <div key={level} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              level === "Easy"
                                ? "#22c55e"
                                : level === "Medium"
                                ? "#f59e0b"
                                : "#ef4444",
                          }}
                        />
                        <span>{level}</span>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {solved}/{total}
                      </span>
                    </div>
                    <Progress value={(solved / total) * 100} className="h-2" />
                  </div>
                );
              })}
          </CardContent>
        </Card>
        {/* Top Topics */}
        <Card>
          <CardHeader>
            <CardTitle>Success Rate by Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {lcStats &&
              (["Easy", "Medium", "Hard"] as const).map((level) => {
                const solved = lcStats.difficulty_accepted[level] ?? 0;
                const total = lcStats.difficulty_attempted[level];
                return (
                  <div key={level} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              level === "Easy"
                                ? "#22c55e"
                                : level === "Medium"
                                ? "#f59e0b"
                                : "#ef4444",
                          }}
                        />
                        <span>{level}</span>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {((solved / total) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <Progress value={(solved / total) * 100} className="h-2" />
                  </div>
                );
              })}
          </CardContent>
        </Card>
      </div>

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <p>Loading submissions...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="space-y-3">
              {recentSubmissions.map((submission, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium">
                          {submission.title || submission.problem}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(
                            Number(submission.timestamp) * 1000
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={
                        submission.statusDisplay === "Accepted"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {submission.statusDisplay}
                    </Badge>
                    <Badge variant="secondary">{submission.langName}</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

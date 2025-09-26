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
  BarChart,
  Bar,
} from "recharts";
import { useState, useEffect } from "react";
import { fetchRecentLeetcode } from "./utils/fetchRecentLC";
import { fetchLCData, LeetCodeStats } from "./utils/fetchLCData";

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

  // Mock data for demonstration
  const progressData = [
    { month: "Jan", solved: 45, total: 2500 },
    { month: "Feb", solved: 62, total: 2520 },
    { month: "Mar", solved: 78, total: 2540 },
    { month: "Apr", solved: 95, total: 2560 },
    { month: "May", solved: 118, total: 2580 },
    { month: "Jun", solved: 142, total: 2600 },
    { month: "Jul", solved: 165, total: 2620 },
    { month: "Aug", solved: 189, total: 2640 },
    { month: "Sep", solved: 120, total: 2660 },
    { month: "Oct", solved: 120, total: 2660 },
    { month: "Nov", solved: 120, total: 2660 },
    { month: "Dec", solved: 120, total: 2660 },
  ];

  const totalProblemsByDifficulty = {
    Easy: 873,
    Medium: 1829,
    Hard: 823,
  };

  const topicData = [
    { topic: "Array", solved: 45 },
    { topic: "String", solved: 32 },
    { topic: "Dynamic Programming", solved: 28 },
    { topic: "Tree", solved: 25 },
    { topic: "Graph", solved: 18 },
    { topic: "Linked List", solved: 15 },
  ];

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
            <CardTitle className="text-sm">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">25 problems</div>
            <p className="text-xs text-muted-foreground">+8 from last month</p>
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
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
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
            <CardTitle>Problems by Topic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topicData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="topic" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="solved" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
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

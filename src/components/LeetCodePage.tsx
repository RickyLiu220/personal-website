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
  PieChart,
  Pie,
  Cell,
} from "recharts";

export function LeetCodePage() {
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
  ];

  const difficultyData = [
    { name: "Easy", solved: 89, total: 750, color: "#22c55e" },
    { name: "Medium", solved: 105, total: 1580, color: "#f59e0b" },
    { name: "Hard", solved: 20, total: 330, color: "#ef4444" },
  ];

  const topicData = [
    { topic: "Array", solved: 45 },
    { topic: "String", solved: 32 },
    { topic: "Dynamic Programming", solved: 28 },
    { topic: "Tree", solved: 25 },
    { topic: "Graph", solved: 18 },
    { topic: "Linked List", solved: 15 },
  ];

  const recentSubmissions = [
    {
      problem: "Two Sum",
      difficulty: "Easy",
      status: "Accepted",
      time: "2 hours ago",
    },
    {
      problem: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      status: "Accepted",
      time: "1 day ago",
    },
    {
      problem: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      status: "Time Limit Exceeded",
      time: "2 days ago",
    },
    {
      problem: "Add Two Numbers",
      difficulty: "Medium",
      status: "Accepted",
      time: "3 days ago",
    },
    {
      problem: "Palindromic Substrings",
      difficulty: "Medium",
      status: "Accepted",
      time: "4 days ago",
    },
  ];

  const totalSolved = 120;
  const totalProblems = 2660;
  const solveRate = Math.round((totalSolved / totalProblems) * 100);

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
            <div className="text-2xl">{totalSolved}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalProblems} problems
            </p>
            <Progress value={solveRate} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-1">
              {solveRate}% completion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">12 days</div>
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
            {difficultyData.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.solved}/{item.total}
                  </span>
                </div>
                <Progress
                  value={(item.solved / item.total) * 100}
                  className="h-2"
                />
              </div>
            ))}
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
          <div className="space-y-3">
            {recentSubmissions.map((submission, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium">{submission.problem}</p>
                      <p className="text-sm text-muted-foreground">
                        {submission.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    variant={
                      submission.difficulty === "Easy"
                        ? "default"
                        : submission.difficulty === "Medium"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {submission.difficulty}
                  </Badge>
                  <Badge
                    variant={
                      submission.status === "Accepted"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {submission.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

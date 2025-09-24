import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./components/AboutPage";
import { LeetCodePage } from "./components/LeetCodePage";
import { ClassesPage } from "./components/ClassesPage";
import { ProjectsPage } from "./components/ProjectsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/leetcode" element={<LeetCodePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

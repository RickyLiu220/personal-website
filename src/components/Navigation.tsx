import { Link, useLocation } from 'react-router-dom';
import { cn } from './ui/utils';
import { Button } from './ui/button';
import { User, BarChart3, GraduationCap, FolderOpen } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'About', icon: User },
    { href: '/leetcode', label: 'LeetCode Stats', icon: BarChart3 },
    { href: '/classes', label: 'Classes', icon: GraduationCap },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="font-medium">
              My Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                >
                  <Link to={item.href} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
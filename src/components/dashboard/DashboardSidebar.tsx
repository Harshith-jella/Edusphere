
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  BookOpen,
  Briefcase,
  Star,
  FileText,
  MessageSquare,
  Settings,
  ChevronRight,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink = ({ to, icon, children, isActive = false }: SidebarLinkProps) => (
  <Button
    variant="ghost"
    asChild
    className={cn(
      "w-full justify-start gap-2 pl-2 font-normal",
      isActive && "bg-edu-primary/10 text-edu-primary font-medium"
    )}
  >
    <Link to={to}>
      {icon}
      <span>{children}</span>
      {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
    </Link>
  </Button>
);

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 border-r bg-white">
      <div className="flex-1 py-6 px-4">
        <div className="space-y-1">
          <SidebarLink to="/dashboard" icon={<Home className="h-5 w-5" />} isActive>
            Dashboard
          </SidebarLink>
          <SidebarLink to="/opportunities" icon={<Search className="h-5 w-5" />}>
            Explore
          </SidebarLink>
          <SidebarLink to="/research" icon={<BookOpen className="h-5 w-5" />}>
            Research
          </SidebarLink>
          <SidebarLink to="/internships" icon={<Briefcase className="h-5 w-5" />}>
            Internships
          </SidebarLink>
          <SidebarLink to="/saved" icon={<Star className="h-5 w-5" />}>
            Saved
          </SidebarLink>
          <SidebarLink to="/applications" icon={<FileText className="h-5 w-5" />}>
            Applications
          </SidebarLink>
          <SidebarLink to="/messages" icon={<MessageSquare className="h-5 w-5" />}>
            Messages
          </SidebarLink>
        </div>

        <div className="mt-10">
          <h3 className="px-2 text-sm font-semibold text-slate-500 mb-2">Account</h3>
          <div className="space-y-1">
            <SidebarLink to="/profile" icon={<Home className="h-5 w-5" />}>
              Profile
            </SidebarLink>
            <SidebarLink to="/settings" icon={<Settings className="h-5 w-5" />}>
              Settings
            </SidebarLink>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-sm font-medium mb-1">Complete your profile</p>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-edu-primary rounded-full" style={{ width: "65%" }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-1">65% completed</p>
          <Button variant="link" size="sm" className="text-edu-primary p-0 mt-1" asChild>
            <Link to="/profile">Complete Now</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}

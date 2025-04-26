
import { Button } from "@/components/ui/button";
import { Bell, MessageSquare, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b sticky top-0 z-30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center lg:w-64">
          <span className="text-xl font-bold text-gradient">EduSphere</span>
        </div>

        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search opportunities, universities..."
              className="pl-8 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                <DropdownMenuItem className="p-4 cursor-pointer">
                  <div>
                    <p className="text-sm font-medium">Application Update</p>
                    <p className="text-xs text-slate-500">Your application to MIT Research Program has been received.</p>
                    <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-4 cursor-pointer">
                  <div>
                    <p className="text-sm font-medium">New Opportunity Match</p>
                    <p className="text-xs text-slate-500">We found a new research opportunity that matches your profile.</p>
                    <p className="text-xs text-slate-400 mt-1">1 day ago</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Messages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                <DropdownMenuItem className="p-4 cursor-pointer">
                  <div className="flex items-start">
                    <div className="h-9 w-9 rounded-full bg-slate-200 flex-shrink-0 mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Prof. Sarah Williams</p>
                      <p className="text-xs text-slate-500 truncate">I reviewed your application and would like to discuss...</p>
                      <p className="text-xs text-slate-400 mt-1">3 hours ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                  alt="User"
                  className="rounded-full object-cover h-8 w-8"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Applications</DropdownMenuItem>
              <DropdownMenuItem>Saved Opportunities</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}


import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardStats } from "./DashboardStats";
import { RecommendedOpportunities } from "./RecommendedOpportunities";
import { ApplicationStatus } from "./ApplicationStatus";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

const StudentDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex-1 flex">
        <DashboardSidebar />
        <main className="flex-1 py-6 px-4 lg:px-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {profile?.full_name || 'Student'}!</h1>
              <p className="text-slate-600">Here's what's happening with your applications and recommendations.</p>
            </div>

            <DashboardStats />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <RecommendedOpportunities />
              </div>
              <div className="md:col-span-1">
                <ApplicationStatus />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <div>
                        <p className="font-medium">MIT Summer Research</p>
                        <p className="text-sm text-slate-600">Application due</p>
                      </div>
                      <div className="text-amber-600 font-medium">3 days</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div>
                        <p className="font-medium">Cambridge Faculty Interview</p>
                        <p className="text-sm text-slate-600">Online meeting</p>
                      </div>
                      <div className="text-slate-600 font-medium">May 10</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Profile Completion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-medium">Basic Information</p>
                          <span className="text-xs font-medium text-green-600">Complete</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-medium">Education History</p>
                          <span className="text-xs font-medium text-green-600">Complete</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-medium">Research Interests</p>
                          <span className="text-xs font-medium text-amber-600">Partial</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-medium">Publications & Projects</p>
                          <span className="text-xs font-medium text-red-600">Missing</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;


import { DashboardHeader } from "./DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Users, FileText, Calendar, Award } from "lucide-react";

const ProfessorDashboard = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <DashboardHeader />
      <main className="flex-1 py-6 px-4 lg:px-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Professor {profile?.full_name || 'Professor'}!</h1>
            <p className="text-slate-600">Manage your research opportunities and review student applications.</p>
          </div>

          {/* Professor Stats */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm text-slate-600">Active Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-slate-600">Open Positions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-slate-600">Pending Reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-slate-600">Active Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-slate-600">Machine Learning Research Assistant</p>
                  </div>
                  <div className="text-blue-600 font-medium">New</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-slate-600">Computer Vision Project</p>
                  </div>
                  <div className="text-amber-600 font-medium">Review</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                  <div>
                    <p className="font-medium">Emily Davis</p>
                    <p className="text-sm text-slate-600">Data Science Internship</p>
                  </div>
                  <div className="text-green-600 font-medium">Approved</div>
                </div>
              </CardContent>
            </Card>

            {/* Active Research Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Research Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  <p className="font-medium">Neural Network Optimization</p>
                  <p className="text-sm text-slate-600 mb-2">4 students assigned</p>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  <p className="font-medium">Computer Vision for Healthcare</p>
                  <p className="text-sm text-slate-600 mb-2">2 students assigned</p>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  <p className="font-medium">Natural Language Processing</p>
                  <p className="text-sm text-slate-600 mb-2">3 students assigned</p>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <button className="p-4 text-left bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                  <div className="font-medium text-blue-900">Post New Position</div>
                  <div className="text-sm text-blue-600">Create research opportunities</div>
                </button>
                <button className="p-4 text-left bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors">
                  <div className="font-medium text-green-900">Review Applications</div>
                  <div className="text-sm text-green-600">Evaluate student applications</div>
                </button>
                <button className="p-4 text-left bg-amber-50 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors">
                  <div className="font-medium text-amber-900">Manage Projects</div>
                  <div className="text-sm text-amber-600">Update project status</div>
                </button>
                <button className="p-4 text-left bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors">
                  <div className="font-medium text-purple-900">View Analytics</div>
                  <div className="text-sm text-purple-600">Track engagement metrics</div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProfessorDashboard;

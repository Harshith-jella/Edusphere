
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { FileText, Calendar, Eye, Download } from "lucide-react";

interface Application {
  id: number;
  position: string;
  university: string;
  type: "Research" | "Internship";
  status: "pending" | "interview" | "accepted" | "rejected" | "withdrawn";
  dateApplied: string;
  deadline: string;
  nextStep?: string;
  documents: string[];
  progress: number;
}

const mockApplications: Application[] = [
  {
    id: 1,
    position: "AI Research Assistant",
    university: "Stanford University",
    type: "Research",
    status: "interview",
    dateApplied: "April 10, 2025",
    deadline: "May 30, 2025",
    nextStep: "Video interview scheduled for May 5, 2025 at 2:00 PM",
    documents: ["CV", "Cover Letter", "Transcripts"],
    progress: 75
  },
  {
    id: 2,
    position: "Data Science Internship",
    university: "UC Berkeley",
    type: "Internship",
    status: "pending",
    dateApplied: "March 25, 2025",
    deadline: "June 1, 2025",
    documents: ["CV", "Cover Letter"],
    progress: 60
  },
  {
    id: 3,
    position: "Quantum Computing Research",
    university: "NUS",
    type: "Research",
    status: "accepted",
    dateApplied: "April 2, 2025",
    deadline: "May 15, 2025",
    nextStep: "Submit acceptance documents by May 20, 2025",
    documents: ["CV", "Cover Letter", "Research Proposal"],
    progress: 100
  }
];

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [activeTab, setActiveTab] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Under Review</Badge>;
      case "interview":
        return <Badge className="bg-blue-500">Interview</Badge>;
      case "accepted":
        return <Badge className="bg-green-500">Accepted</Badge>;
      case "rejected":
        return <Badge variant="destructive">Not Selected</Badge>;
      case "withdrawn":
        return <Badge variant="outline" className="bg-gray-50 text-gray-600">Withdrawn</Badge>;
      default:
        return null;
    }
  };

  const filteredApplications = applications.filter(app => {
    if (activeTab === "all") return true;
    return app.status === activeTab;
  });

  const handleWithdraw = (id: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: "withdrawn" as const } : app
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">My Applications</h1>
              <p className="text-gray-600">Track and manage your application status</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">{applications.filter(a => a.status === "pending").length}</div>
                  <div className="text-sm text-gray-600">Under Review</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600">{applications.filter(a => a.status === "interview").length}</div>
                  <div className="text-sm text-gray-600">Interviews</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">{applications.filter(a => a.status === "accepted").length}</div>
                  <div className="text-sm text-gray-600">Accepted</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-gray-600">{applications.length}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </CardContent>
              </Card>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Under Review</TabsTrigger>
                <TabsTrigger value="interview">Interview</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                <div className="space-y-4">
                  {filteredApplications.map((app) => (
                    <Card key={app.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{app.position}</CardTitle>
                            <CardDescription>{app.university}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{app.type}</Badge>
                            {getStatusBadge(app.status)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Applied: {app.dateApplied}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Deadline: {app.deadline}
                              </div>
                            </div>

                            {app.nextStep && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                <h4 className="font-medium text-blue-900 mb-1">Next Step</h4>
                                <p className="text-sm text-blue-800">{app.nextStep}</p>
                              </div>
                            )}

                            <div>
                              <h4 className="font-medium mb-2">Application Progress</h4>
                              <Progress value={app.progress} className="mb-2" />
                              <p className="text-sm text-gray-600">{app.progress}% complete</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Submitted Documents</h4>
                            <div className="space-y-2 mb-4">
                              {app.documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span className="text-sm">{doc}</span>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button variant="ghost" size="sm">
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {app.status === "pending" && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleWithdraw(app.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  Withdraw
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Applications;

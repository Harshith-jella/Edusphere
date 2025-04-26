
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Application {
  id: number;
  position: string;
  university: string;
  dateApplied: string;
  status: "pending" | "interview" | "accepted" | "rejected";
  nextStep?: string;
}

const applications: Application[] = [
  {
    id: 1,
    position: "Research Assistant - Climate Science",
    university: "ETH Zurich",
    dateApplied: "April 10, 2025",
    status: "interview",
    nextStep: "Interview scheduled for May 5, 2025",
  },
  {
    id: 2,
    position: "Summer Internship - Data Science",
    university: "University of California, Berkeley",
    dateApplied: "March 25, 2025",
    status: "pending",
  },
  {
    id: 3,
    position: "Research Program - Quantum Computing",
    university: "National University of Singapore",
    dateApplied: "April 2, 2025",
    status: "accepted",
    nextStep: "Acceptance documents due by May 15, 2025",
  },
];

export function ApplicationStatus() {
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
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Your Applications</CardTitle>
          <Badge variant="outline">{applications.length} Total</Badge>
        </div>
        <CardDescription>Track the status of your applications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {applications.map((app) => (
            <div key={app.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">{app.position}</h4>
                {getStatusBadge(app.status)}
              </div>
              <p className="text-sm text-slate-600">{app.university}</p>
              <div className="flex justify-between items-center mt-2 text-xs">
                <span className="text-slate-500">Applied: {app.dateApplied}</span>
              </div>
              {app.nextStep && (
                <p className="text-sm text-edu-primary mt-2">
                  Next step: {app.nextStep}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

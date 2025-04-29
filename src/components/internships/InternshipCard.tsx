
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import type { Internship } from "@/pages/Internships";

export function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src={internship.logo}
            alt={internship.company}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{internship.title}</h3>
                <p className="text-slate-600">{internship.company}</p>
              </div>
              <Button variant="ghost" size="icon">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant={internship.paid ? "default" : "outline"} className={internship.paid ? "" : "bg-gray-100 text-gray-800"}>
                {internship.paid ? `Paid (${internship.stipend})` : "Unpaid"}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {internship.field}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {internship.duration}
              </Badge>
            </div>

            <p className="mt-3 text-sm text-slate-600 line-clamp-2">
              {internship.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-slate-500">
                <span>📍 {internship.location}</span>
                <span className="mx-2">•</span>
                <span>Deadline: {internship.deadline}</span>
              </div>
              <Button asChild>
                <Link to={`/internships/${internship.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

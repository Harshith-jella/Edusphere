
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import type { ResearchProject } from "@/pages/ResearchProjects";

export function ProjectCard({ project }: { project: ResearchProject }) {
  const getFundingColor = (funding: string) => {
    switch (funding) {
      case "Funded": return "bg-green-100 text-green-800 border-green-200";
      case "Partially Funded": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Unfunded": return "bg-red-100 text-red-800 border-red-200";
      default: return "";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src={project.logo}
            alt={project.institution}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-slate-600">{project.institution}</p>
                <p className="text-slate-500 text-sm">Prof. {project.professor}</p>
              </div>
              <Button variant="ghost" size="icon">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="outline" className={getFundingColor(project.funding)}>
                {project.funding}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {project.field}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {project.duration}
              </Badge>
            </div>

            <p className="mt-3 text-sm text-slate-600 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-slate-500">
                <span>📍 {project.location}</span>
                <span className="mx-2">•</span>
                <span>Deadline: {project.deadline}</span>
              </div>
              <Button asChild>
                <Link to={`/research/${project.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

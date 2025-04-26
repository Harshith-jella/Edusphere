
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import type { Opportunity } from "@/pages/Opportunities";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src={opportunity.logo}
            alt={opportunity.institution}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                <p className="text-slate-600">{opportunity.institution}</p>
              </div>
              <Button variant="ghost" size="icon">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant={opportunity.type === "Research" ? "default" : "outline"}>
                {opportunity.type}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {opportunity.field}
              </Badge>
              <Badge variant="outline" className="bg-slate-50">
                {opportunity.duration}
              </Badge>
            </div>

            <p className="mt-3 text-sm text-slate-600 line-clamp-2">
              {opportunity.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-slate-500">
                <span>📍 {opportunity.location}</span>
                <span className="mx-2">•</span>
                <span>Deadline: {opportunity.deadline}</span>
              </div>
              <Button asChild>
                <Link to={`/opportunities/${opportunity.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

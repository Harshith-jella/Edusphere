
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useState } from "react";

interface OpportunityProps {
  id: number;
  title: string;
  university: string;
  location: string;
  type: "Research" | "Internship";
  field: string;
  deadline: string;
  logo: string;
}

const opportunities: OpportunityProps[] = [
  {
    id: 1,
    title: "AI Research Assistant",
    university: "Stanford University",
    location: "California, USA",
    type: "Research",
    field: "Computer Science",
    deadline: "May 30, 2025",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    title: "Sustainable Energy Intern",
    university: "MIT",
    location: "Massachusetts, USA",
    type: "Internship",
    field: "Engineering",
    deadline: "June 15, 2025",
    logo: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    title: "Genomics Research Program",
    university: "Oxford University",
    location: "Oxford, UK",
    type: "Research",
    field: "Biology",
    deadline: "May 25, 2025",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

function OpportunityCard({ opportunity }: { opportunity: OpportunityProps }) {
  const [isSaved, setIsSaved] = useState(false);
  
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <img
              src={opportunity.logo}
              alt={opportunity.university}
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <CardTitle className="text-base">{opportunity.title}</CardTitle>
              <CardDescription className="mt-1">
                {opportunity.university}
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSave}>
            {isSaved ? (
              <BookmarkCheck className="h-5 w-5 text-edu-primary" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span className="mr-2">{opportunity.location}</span>
          <span>•</span>
          <span className="mx-2">{opportunity.field}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant={opportunity.type === "Research" ? "default" : "outline"}>
            {opportunity.type}
          </Badge>
          <div className="text-xs text-slate-500">
            Deadline: {opportunity.deadline}
          </div>
        </div>

        <div className="mt-4">
          <Button size="sm" className="w-full bg-edu-primary hover:bg-edu-primary/90">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecommendedOpportunities() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Recommended For You</h3>
        <Button variant="link" className="text-edu-primary">
          View All
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
}


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface University {
  id: number;
  name: string;
  country: string;
  type: string;
  ranking: string;
  image: string;
  opportunities: number;
}

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="h-44 overflow-hidden">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{university.name}</h3>
        <div className="text-sm text-slate-500 space-y-1 mb-4">
          <p>{university.country}</p>
          <p>{university.ranking}</p>
          <p>{university.type} University</p>
          <p className="text-edu-primary font-medium">{university.opportunities} Active Opportunities</p>
        </div>
        <div className="mt-auto pt-4">
          <Button className="w-full bg-edu-primary hover:bg-edu-primary/90" asChild>
            <Link to={`/universities/${university.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

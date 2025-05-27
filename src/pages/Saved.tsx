
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookmarkX, ExternalLink, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SavedOpportunity {
  id: number;
  title: string;
  university: string;
  location: string;
  type: "Research" | "Internship";
  field: string;
  deadline: string;
  savedDate: string;
  description: string;
}

const mockSavedOpportunities: SavedOpportunity[] = [
  {
    id: 1,
    title: "AI Research Assistant",
    university: "Stanford University",
    location: "California, USA",
    type: "Research",
    field: "Computer Science",
    deadline: "May 30, 2025",
    savedDate: "April 15, 2025",
    description: "Work on cutting-edge AI research projects with leading professors."
  },
  {
    id: 2,
    title: "Sustainable Energy Intern",
    university: "MIT",
    location: "Massachusetts, USA",
    type: "Internship",
    field: "Engineering",
    deadline: "June 15, 2025",
    savedDate: "April 12, 2025",
    description: "Join our team working on renewable energy solutions."
  },
  {
    id: 3,
    title: "Genomics Research Program",
    university: "Oxford University",
    location: "Oxford, UK",
    type: "Research",
    field: "Biology",
    deadline: "May 25, 2025",
    savedDate: "April 10, 2025",
    description: "Contribute to groundbreaking genomics research."
  }
];

const Saved = () => {
  const [savedItems, setSavedItems] = useState<SavedOpportunity[]>(mockSavedOpportunities);
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();

  const handleUnsave = (id: number) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from saved",
      description: "The opportunity has been removed from your saved list."
    });
  };

  const filteredItems = savedItems.filter(item => {
    if (activeTab === "all") return true;
    return item.type.toLowerCase() === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Saved Opportunities</h1>
              <p className="text-gray-600">Manage your saved research opportunities and internships</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All ({savedItems.length})</TabsTrigger>
                <TabsTrigger value="research">Research ({savedItems.filter(i => i.type === "Research").length})</TabsTrigger>
                <TabsTrigger value="internship">Internships ({savedItems.filter(i => i.type === "Internship").length})</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                {filteredItems.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <h3 className="text-lg font-medium mb-2">No saved opportunities</h3>
                      <p className="text-gray-500 mb-4">Start exploring and save opportunities you're interested in.</p>
                      <Button>Explore Opportunities</Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {filteredItems.map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{item.title}</CardTitle>
                              <CardDescription className="mt-1">{item.university}</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={item.type === "Research" ? "default" : "outline"}>
                                {item.type}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleUnsave(item.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <BookmarkX className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {item.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Deadline: {item.deadline}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Saved on {item.savedDate}</span>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Saved;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { OpportunityFilters } from "@/components/opportunities/OpportunityFilters";

export interface Opportunity {
  id: number;
  title: string;
  institution: string;
  location: string;
  type: "Research" | "Internship";
  field: string;
  duration: string;
  deadline: string;
  description: string;
  requirements: string[];
  logo: string;
}

const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "AI Research Assistant",
    institution: "Stanford University",
    location: "California, USA",
    type: "Research",
    field: "Computer Science",
    duration: "6 months",
    deadline: "May 30, 2025",
    description: "Join our AI research team to work on cutting-edge machine learning projects.",
    requirements: ["Python proficiency", "ML/AI experience", "Strong math background"],
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    title: "Quantum Computing Intern",
    institution: "MIT",
    location: "Massachusetts, USA",
    type: "Internship",
    field: "Physics",
    duration: "3 months",
    deadline: "June 15, 2025",
    description: "Summer internship position in quantum computing research lab.",
    requirements: ["Quantum mechanics knowledge", "Programming skills", "Linear algebra"],
    logo: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    title: "Renewable Energy Research",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Research",
    field: "Engineering",
    duration: "12 months",
    deadline: "May 25, 2025",
    description: "Research position focused on sustainable energy solutions.",
    requirements: ["Engineering background", "Renewable energy knowledge", "Data analysis"],
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.institution.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = !selectedField || selectedField === "all-fields" || opp.field === selectedField;
    const matchesType = !selectedType || selectedType === "all-types" || opp.type === selectedType;
    
    return matchesSearch && matchesField && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex-1 flex">
        <DashboardSidebar />
        <main className="flex-1 py-6 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
              <div>
                <h1 className="text-2xl font-bold">Research & Internship Opportunities</h1>
                <p className="text-slate-600">Discover and apply for opportunities worldwide</p>
              </div>
              <Button>Post Opportunity</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[300px,1fr]">
              <OpportunityFilters 
                onFieldChange={setSelectedField}
                onTypeChange={setSelectedType}
              />
              
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search opportunities..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="grid gap-4">
                  {filteredOpportunities.map(opportunity => (
                    <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Opportunities;

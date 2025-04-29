
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Briefcase } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { InternshipCard } from "@/components/internships/InternshipCard";
import { InternshipFilters } from "@/components/internships/InternshipFilters";

export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  field: string;
  duration: string;
  deadline: string;
  description: string;
  requirements: string[];
  logo: string;
  paid: boolean;
  stipend?: string;
}

const internships: Internship[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    field: "Computer Science",
    duration: "3 months (Summer)",
    deadline: "January 15, 2026",
    description: "Join our engineering team to work on real-world problems and contribute to Google's core products.",
    requirements: ["Strong CS fundamentals", "Programming experience", "Problem-solving skills"],
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    paid: true,
    stipend: "$8,000/month"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    field: "Data Science",
    duration: "6 months",
    deadline: "February 28, 2026",
    description: "Work with our data science team to extract insights from large datasets and build predictive models.",
    requirements: ["Statistics knowledge", "Python/R experience", "ML basics"],
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    paid: true,
    stipend: "$7,500/month"
  },
  {
    id: 3,
    title: "UX Design Intern",
    company: "Apple",
    location: "Cupertino, CA",
    field: "Design",
    duration: "3 months (Fall)",
    deadline: "April 15, 2026",
    description: "Join our design team to create intuitive and beautiful user experiences for Apple products.",
    requirements: ["Design portfolio", "UI/UX knowledge", "Prototyping skills"],
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    paid: true,
    stipend: "$7,000/month"
  },
  {
    id: 4,
    title: "Non-profit Management Intern",
    company: "UNICEF",
    location: "New York, NY",
    field: "Business",
    duration: "4 months",
    deadline: "March 10, 2026",
    description: "Support program management and operations for global children's initiatives.",
    requirements: ["Project management", "Communication skills", "Interest in non-profit work"],
    logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    paid: false
  }
];

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedPaid, setSelectedPaid] = useState<string>("");

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = !selectedField || selectedField === "all" || internship.field === selectedField;
    const matchesPaid = !selectedPaid || 
                      (selectedPaid === "all") || 
                      (selectedPaid === "paid" && internship.paid) ||
                      (selectedPaid === "unpaid" && !internship.paid);
    
    return matchesSearch && matchesField && matchesPaid;
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
                <h1 className="text-2xl font-bold flex items-center">
                  <Briefcase className="mr-2 h-6 w-6" />
                  Internship Opportunities
                </h1>
                <p className="text-slate-600">Find internships at top companies worldwide</p>
              </div>
              <Button>Post an Internship</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[300px,1fr]">
              <InternshipFilters 
                onFieldChange={setSelectedField}
                onPaidChange={setSelectedPaid}
              />
              
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search internships by title, company, or location..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {filteredInternships.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No internships found</h3>
                    <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredInternships.map(internship => (
                      <InternshipCard key={internship.id} internship={internship} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Internships;

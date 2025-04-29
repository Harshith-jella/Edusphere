
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ProjectCard } from "@/components/research/ProjectCard";
import { ProjectFilters } from "@/components/research/ProjectFilters";

export interface ResearchProject {
  id: number;
  title: string;
  institution: string;
  location: string;
  field: string;
  duration: string;
  deadline: string;
  description: string;
  requirements: string[];
  logo: string;
  professor: string;
  funding: "Funded" | "Unfunded" | "Partially Funded";
}

const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "Machine Learning for Climate Modeling",
    institution: "University of California, Berkeley",
    location: "California, USA",
    field: "Computer Science",
    duration: "12 months",
    deadline: "June 15, 2025",
    description: "Research project focused on applying machine learning techniques to improve climate change prediction models.",
    requirements: ["Python proficiency", "ML/AI experience", "Statistics background"],
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    professor: "Dr. Sarah Chen",
    funding: "Funded"
  },
  {
    id: 2,
    title: "Quantum Computing Algorithms",
    institution: "MIT",
    location: "Massachusetts, USA",
    field: "Physics",
    duration: "9 months",
    deadline: "May 30, 2025",
    description: "Development of novel quantum algorithms for optimization problems.",
    requirements: ["Quantum mechanics knowledge", "Algorithm design", "Linear algebra"],
    logo: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    professor: "Dr. Michael Wei",
    funding: "Partially Funded"
  },
  {
    id: 3,
    title: "Sustainable Materials Engineering",
    institution: "ETH Zurich",
    location: "Zurich, Switzerland",
    field: "Engineering",
    duration: "16 months",
    deadline: "July 10, 2025",
    description: "Research on developing sustainable and biodegradable materials for construction.",
    requirements: ["Materials science knowledge", "Laboratory experience", "Data analysis"],
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    professor: "Dr. Anna Schmidt",
    funding: "Funded"
  },
  {
    id: 4,
    title: "Neuroscience of Learning",
    institution: "Oxford University",
    location: "Oxford, UK",
    field: "Biology",
    duration: "24 months",
    deadline: "August 5, 2025",
    description: "Study of neural mechanisms behind learning and memory formation using advanced imaging techniques.",
    requirements: ["Neuroscience background", "fMRI experience", "Statistical analysis"],
    logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    professor: "Dr. James Wilson",
    funding: "Unfunded"
  }
];

const ResearchProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedFunding, setSelectedFunding] = useState<string>("");

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.professor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = !selectedField || selectedField === "all" || project.field === selectedField;
    const matchesFunding = !selectedFunding || selectedFunding === "all" || project.funding === selectedFunding;
    
    return matchesSearch && matchesField && matchesFunding;
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
                  <BookOpen className="mr-2 h-6 w-6" />
                  Research Projects
                </h1>
                <p className="text-slate-600">Discover and apply for research opportunities worldwide</p>
              </div>
              <Button>Submit a Project</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[300px,1fr]">
              <ProjectFilters 
                onFieldChange={setSelectedField}
                onFundingChange={setSelectedFunding}
              />
              
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search projects by title, institution, or professor..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {filteredProjects.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No projects found</h3>
                    <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
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

export default ResearchProjects;


import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { UniversityCard } from "@/components/universities/UniversityCard";
import { UniversityFilters } from "@/components/universities/UniversityFilters";

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  // Sample university data
  const universities = [
    {
      id: 1,
      name: "Massachusetts Institute of Technology",
      country: "United States",
      type: "Research",
      ranking: "#1 in Engineering",
      image: "https://images.unsplash.com/photo-1559135197-8a45e5896ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 156,
    },
    {
      id: 2,
      name: "Stanford University",
      country: "United States",
      type: "Research",
      ranking: "#2 in Computer Science",
      image: "https://images.unsplash.com/photo-1581362072978-14998d01fdbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 124,
    },
    {
      id: 3,
      name: "University of Oxford",
      country: "United Kingdom",
      type: "Research",
      ranking: "#1 in Arts & Humanities",
      image: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 98,
    },
    {
      id: 4,
      name: "ETH Zurich",
      country: "Switzerland",
      type: "Technical",
      ranking: "#3 in Engineering",
      image: "https://images.unsplash.com/photo-1535995762127-ff2e386835fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 87,
    },
    {
      id: 5,
      name: "National University of Singapore",
      country: "Singapore",
      type: "Comprehensive",
      ranking: "#1 in Asia",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 76,
    },
    {
      id: 6,
      name: "University of Tokyo",
      country: "Japan",
      type: "Research",
      ranking: "#2 in Asia",
      image: "https://images.unsplash.com/photo-1678483771757-d4372a22d11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      opportunities: 65,
    },
  ];

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         uni.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = !selectedCountry || selectedCountry === "all-countries" || uni.country === selectedCountry;
    const matchesType = !selectedType || selectedType === "all-types" || uni.type === selectedType;
    
    return matchesSearch && matchesCountry && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-slate-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Top Universities</h1>
              <p className="text-slate-700 mb-6">
                Discover world-class institutions and their research opportunities
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input 
                  placeholder="Search for universities..." 
                  className="pl-10 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Universities List Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <UniversityFilters 
                  onCountryChange={setSelectedCountry}
                  onTypeChange={setSelectedType}
                />
              </div>

              {/* Universities Grid */}
              <div className="flex-1">
                {filteredUniversities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUniversities.map((university) => (
                      <UniversityCard key={university.id} university={university} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No universities found matching your criteria.</p>
                    <Button 
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCountry("");
                        setSelectedType("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Universities;

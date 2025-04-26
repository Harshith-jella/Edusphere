
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32 bg-gradient-to-br from-edu-light via-white to-slate-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-edu-dark">Connect to Global </span>
            <span className="text-gradient">Research & Internships</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-xl">
            Discover opportunities at top universities worldwide. Build your academic profile and connect with institutions that match your interests.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-edu-primary hover:bg-edu-primary/90 font-medium" asChild>
              <Link to="/signup">Create Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="font-medium" asChild>
              <Link to="/opportunities">Browse Opportunities</Link>
            </Button>
          </div>

          <div className="mt-10 p-4 bg-white rounded-xl shadow-lg">
            <p className="text-slate-900 font-medium mb-3">Quick Search</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Search opportunities, universities..."
                className="w-full sm:flex-1"
              />
              <Button type="submit" className="bg-edu-primary hover:bg-edu-primary/90">
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center animate-fade-in">
          <div className="relative w-full max-w-md">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Student working in a global research environment"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg rotate-3 animate-pulse">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">120+ Universities</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg -rotate-2 animate-pulse">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-edu-primary rounded-full mr-2"></div>
                <span className="text-sm font-medium">5000+ Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-edu-primary to-edu-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/9ad3c9a3-cef8-4daa-9f2f-fcbc3c2c8171.png" 
              alt="EduSphere Logo" 
              className="h-20 w-20"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Global Academic Journey?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Join EduSphere today and connect with prestigious research opportunities and internships worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-edu-primary hover:bg-slate-100 font-medium" asChild>
              <Link to="/signup">Create Your Profile</Link>
            </Button>
            <Button size="lg" className="bg-edu-accent text-white hover:bg-edu-accent/90 font-medium" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

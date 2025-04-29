
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduSphere</h1>
              <p className="text-lg text-slate-700 mb-8">
                Connecting students with global research opportunities and academic excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-slate-700 mb-6">
                  At EduSphere, we believe that every student deserves access to transformative educational opportunities regardless of their background or location. Our mission is to democratize access to world-class research experiences, internships, and academic programs.
                </p>
                <p className="text-slate-700">
                  Through our innovative platform, we connect passionate students with leading universities and research institutions around the globe, fostering collaboration and excellence in education.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Student collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Daniel Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Daniel Johnson</h3>
                  <p className="text-edu-primary font-medium mb-3">CEO & Founder</p>
                  <p className="text-slate-600 text-sm">
                    Former university professor with a passion for making education accessible to all students globally.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Sarah Williams" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sarah Williams</h3>
                  <p className="text-edu-primary font-medium mb-3">CTO</p>
                  <p className="text-slate-600 text-sm">
                    Tech innovator with extensive experience in educational technology and AI-driven learning platforms.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                  <p className="text-edu-primary font-medium mb-3">COO</p>
                  <p className="text-slate-600 text-sm">
                    International education expert who has helped thousands of students find research opportunities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-edu-primary mb-2">500+</div>
                <p className="text-slate-600">Partner Universities</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-edu-primary mb-2">10,000+</div>
                <p className="text-slate-600">Research Opportunities</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-edu-primary mb-2">50,000+</div>
                <p className="text-slate-600">Student Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-edu-primary mb-2">75+</div>
                <p className="text-slate-600">Countries Represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                <p className="text-slate-600">
                  We believe that educational opportunities should be accessible to all students regardless of their socioeconomic background or geographic location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-slate-600">
                  We are committed to connecting students with high-quality research programs and educational institutions that promote academic excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-slate-600">
                  We continuously innovate our platform to better serve students and universities, leveraging technology to create meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-700 mb-8">
                Have questions about EduSphere? We'd love to hear from you.
              </p>
              <div className="flex justify-center">
                <Button className="bg-edu-primary hover:bg-edu-primary/90 font-medium" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

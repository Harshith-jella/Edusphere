
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  university: string;
  image: string;
}

function Testimonial({ content, name, role, university, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
      <div className="mb-6">
        <svg className="h-8 w-8 text-edu-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-slate-700 mb-6 flex-grow">{content}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{role}, {university}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "EduSphere helped me find a research opportunity at MIT that perfectly matched my interests in machine learning. The application process was smooth, and I received guidance every step of the way.",
      name: "Sarah Johnson",
      role: "Graduate Student",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      content: "As a professor looking for talented students, EduSphere has been invaluable. We've found excellent candidates for our research projects who bring fresh perspectives to our work.",
      name: "Dr. Michael Chen",
      role: "Professor",
      university: "University of California",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      content: "The personalized recommendations I received through EduSphere led me to an amazing internship opportunity that I wouldn't have found otherwise. It truly changed the trajectory of my career.",
      name: "David Rodriguez",
      role: "Undergraduate",
      university: "University of Toronto",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      content: "Our university has seen a significant increase in high-quality international applicants since we started posting our research positions on EduSphere. It's been a game-changer.",
      name: "Prof. Emma Wilson",
      role: "Department Head",
      university: "Oxford University",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Success Stories</span> from Our Community
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from students and universities who have found success through EduSphere.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 py-2">
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6 max-w-3xl">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-edu-primary/10 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-edu-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-edu-primary">Trusted by</p>
              <p className="text-2xl font-bold text-slate-900">200+ Universities & 50,000+ Students</p>
              <p className="text-slate-600 mt-1">Join our growing community of academic institutions and students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

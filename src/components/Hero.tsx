import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20"
      style={{
        backgroundImage: "url(/src/assets/hg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold text-gray-200 tracking-widest uppercase">
              More than a resume builder
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-inter tracking-tighter">
              Your resume should do more than look good
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto text-center leading-relaxed">
            As the first-ever AI-powered resume platform, Resume Flow lets job seekers create, manage, and optimize resumes that get results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-base h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:scale-105 transform transition-transform duration-200">
              Start building
            </Button>
            <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10">
              Create from existing Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

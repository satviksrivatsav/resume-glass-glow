import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-resume.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build your resume in{" "}
            <span className="gradient-text">minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Create a stunning, professional resume that gets you hired. Simple, fast, and ATS-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="gradient" size="lg" className="text-lg h-14 px-8">
              Build your resume now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 justify-center lg:justify-start pt-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">10k+</div>
              <div className="text-sm text-muted-foreground">Resumes Created</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>

        {/* Right content - Hero image */}
        <div className="relative">
          <div className="glass rounded-3xl p-8 shadow-2xl">
            <img 
              src={heroImage} 
              alt="Resume builder preview" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

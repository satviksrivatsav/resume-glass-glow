import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-accent/35 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-start/30 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-gradient-mid/30 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Center content */}
        <div className="space-y-8 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Build your resume in{" "}
            <span className="gradient-text">minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Create a stunning, professional resume that gets you hired. Simple, fast, and ATS-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="gradient" size="lg" className="text-lg h-14 px-8">
              Build your resume now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase">
              More than a resume builder
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1.1] font-inter tracking-tight">
              Your resume should do more than look good
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            As the first-ever AI-powered resume platform, Resume Flow lets job seekers create, manage, and optimize resumes that get results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="default" size="lg" className="text-base h-12 px-6">
              Start building
            </Button>
            <Button variant="ghost" size="lg" className="text-base h-12 px-6">
              Contact sales
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Sparkles, FileText, Download, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart suggestions and auto-formatting to make your resume shine",
  },
  {
    icon: FileText,
    title: "Modern Templates",
    description: "Choose from professionally designed, ATS-friendly templates",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build a complete resume in minutes, not hours",
  },
  {
    icon: Download,
    title: "Export Ready",
    description: "Download in PDF, DOCX, or share with a custom link",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to <span className="gradient-text">stand out</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create the perfect resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="mb-4 w-12 h-12 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

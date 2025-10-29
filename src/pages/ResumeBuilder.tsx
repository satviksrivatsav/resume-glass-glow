import { useState, useRef } from "react";
import { PersonalInfoForm } from "@/components/resume/PersonalInfoForm";
import { WorkExperienceForm } from "@/components/resume/WorkExperienceForm";
import { EducationForm } from "@/components/resume/EducationForm";
import { ProjectsForm } from "@/components/resume/ProjectsForm";
import { SkillsForm } from "@/components/resume/SkillsForm";
import { ResumeSettings } from "@/components/resume/ResumeSettings";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Eye, FileText, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
    onAfterPrint: () => toast.success("Resume downloaded successfully!"),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold">Resume Builder</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="gap-2"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? "Hide" : "Show"} Preview
              </Button>
              <Button
                onClick={handlePrint}
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="personal" className="text-xs sm:text-sm">Personal</TabsTrigger>
                <TabsTrigger value="work" className="text-xs sm:text-sm">Work</TabsTrigger>
                <TabsTrigger value="education" className="text-xs sm:text-sm">Education</TabsTrigger>
                <TabsTrigger value="projects" className="text-xs sm:text-sm">Projects</TabsTrigger>
                <TabsTrigger value="skills" className="text-xs sm:text-sm">Skills</TabsTrigger>
                <TabsTrigger value="settings" className="text-xs sm:text-sm">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <PersonalInfoForm />
              </TabsContent>

              <TabsContent value="work" className="mt-6">
                <WorkExperienceForm />
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <EducationForm />
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <ProjectsForm />
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <SkillsForm />
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <ResumeSettings />
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${showPreview ? 'block' : 'hidden lg:block'}`}
          >
            <div className="sticky top-24">
              <div className="bg-card rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Live Preview</h2>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handlePrint}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
                <div className="overflow-auto max-h-[calc(100vh-200px)] bg-gray-100 p-4 rounded-lg">
                  <div className="transform origin-top" style={{ transform: 'scale(0.7)' }}>
                    <ResumePreview ref={resumeRef} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden full-size preview for printing */}
      <div className="hidden print:block">
        <ResumePreview ref={resumeRef} />
      </div>
    </div>
  );
};

export default ResumeBuilder;

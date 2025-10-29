import { useState, useRef, useEffect } from "react";
import { PersonalInfoForm } from "@/components/resume/PersonalInfoForm";
import { WorkExperienceForm } from "@/components/resume/WorkExperienceForm";
import { EducationForm } from "@/components/resume/EducationForm";
import { ProjectsForm } from "@/components/resume/ProjectsForm";
import { SkillsForm } from "@/components/resume/SkillsForm";
import { CustomSectionsForm } from "@/components/resume/CustomSectionForm";
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

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowPreview(true);
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Resume",
    onAfterPrint: () => toast.success("Resume downloaded successfully!"),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
        <div className={`grid gap-8 ${showPreview ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="personal"><PersonalInfoForm /></TabsContent>
              <TabsContent value="work"><WorkExperienceForm /></TabsContent>
              <TabsContent value="education"><EducationForm /></TabsContent>
              <TabsContent value="projects"><ProjectsForm /></TabsContent>
              <TabsContent value="skills"><SkillsForm /></TabsContent>
              <TabsContent value="custom"><CustomSectionsForm /></TabsContent>
              <TabsContent value="settings"><ResumeSettings /></TabsContent>
            </Tabs>
          </motion.div>

          {showPreview && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="sticky top-24">
                <div className="bg-card rounded-lg border p-4">
                  <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
                  <div className="overflow-y-auto max-h-[calc(100vh-200px)] bg-gray-100 rounded-lg flex justify-center p-4">
                    <div ref={resumeRef} className="transform origin-top mx-auto" style={{ transform: 'scale(0.8)' }}>
                      <ResumePreview />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
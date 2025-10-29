import { useResumeStore } from "@/stores/resumeStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomSectionsForm = () => {
  const { resumeData, addCustomSection, updateCustomSection, deleteCustomSection } = useResumeStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Sections</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <AnimatePresence>
          {resumeData.customSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 border rounded-lg space-y-4"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor={`custom-title-${index}`} className="font-medium">Title</label>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => deleteCustomSection(section.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <Input
                  id={`custom-title-${index}`}
                  placeholder="e.g., Certifications, Awards"
                  value={section.title}
                  onChange={(e) => updateCustomSection(section.id, { title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor={`custom-description-${index}`} className="font-medium">Description</label>
                <Textarea
                  id={`custom-description-${index}`}
                  placeholder="Describe your custom section here..."
                  value={section.description}
                  onChange={(e) => updateCustomSection(section.id, { description: e.target.value })}
                  rows={5}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <Button onClick={addCustomSection} className="flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Custom Section
        </Button>
      </CardContent>
    </Card>
  );
};
import { useResumeStore } from "@/stores/resumeStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill-custom.css';

export const CustomSectionsForm = () => {
  const { resumeData, addCustomSection, updateCustomSection, deleteCustomSection } = useResumeStore();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (resumeData.customSections.length > 0) {
      setExpandedId(resumeData.customSections[resumeData.customSections.length - 1].id);
    }
  }, [resumeData.customSections]);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'bullet' }]
    ],
  };

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
                  <button
                    onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                    className="text-left flex-1 font-medium"
                  >
                    {section.title || `Custom Section ${index + 1}`}
                  </button>
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
                  placeholder="e.g., Certifications, Awards"
                  value={section.title}
                  onChange={(e) => updateCustomSection(section.id, { title: e.target.value })}
                />
              </div>
              <AnimatePresence>
                {expandedId === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="font-medium">Description</label>
                    <ReactQuill
                      value={section.description}
                      onChange={(value) => updateCustomSection(section.id, { description: value })}
                      modules={modules}
                      placeholder="Describe your custom section here..."
                    />
                  </motion.div>
                )}
              </AnimatePresence>
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

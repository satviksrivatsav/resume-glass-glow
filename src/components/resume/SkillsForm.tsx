import { useResumeStore } from "@/stores/resumeStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SkillsForm = () => {
  const { resumeData, addSkill, updateSkill, deleteSkill } = useResumeStore();

  const handleAdd = () => {
    addSkill({
      id: `skill-${Date.now()}`,
      category: '',
      items: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-lg border p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <Button onClick={handleAdd} size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Skill Category
        </Button>
      </div>

      <AnimatePresence mode="popLayout">
        {resumeData.skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border rounded-lg p-4 space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category *</Label>
                  <Input
                    value={skill.category}
                    onChange={(e) => updateSkill(skill.id, { category: e.target.value })}
                    placeholder="Programming Languages"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Skills *</Label>
                  <Input
                    value={skill.items}
                    onChange={(e) => updateSkill(skill.id, { items: e.target.value })}
                    placeholder="JavaScript, Python, Java"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteSkill(skill.id)}
                className="text-destructive hover:text-destructive self-end mb-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {resumeData.skills.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-8">
          No skills added yet. Click "Add Skill Category" to get started.
        </p>
      )}
    </motion.div>
  );
};

import { useResumeStore } from "@/stores/resumeStore";
import { forwardRef } from "react";
import { format } from "date-fns";
import { Phone, Mail, Globe, Github, Linkedin, MapPin } from "lucide-react";

const fontSizeMap = {
  compact: { base: '9pt', heading: '11pt', name: '18pt' },
  standard: { base: '11pt', heading: '13pt', name: '22pt' },
  large: { base: '13pt', heading: '15pt', name: '26pt' },
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{children}</div>
);

export const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const { resumeData } = useResumeStore();
  const { personalInfo, education, workExperience, projects, skills, customSections, settings } = resumeData;
  
  const sizes = fontSizeMap[settings.fontSize];
  const pageWidth = settings.documentSize === 'letter' ? '8.5in' : '210mm';
  const pageHeight = settings.documentSize === 'letter' ? '11in' : '297mm';

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const [year, month] = dateStr.split('-');
      return format(new Date(parseInt(year), parseInt(month) - 1), 'MMM yyyy');
    } catch {
      return dateStr;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width: pageWidth,
        minHeight: pageHeight,
        fontFamily: settings.fontFamily,
        fontSize: sizes.base,
        backgroundColor: 'white',
        color: '#000',
        padding: '0.5in',
        margin: '0 auto',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      }}
      className="print:shadow-none"
    >
      {/* Header */}
      <div style={{ marginBottom: '16px', borderBottom: `2px solid ${settings.themeColor}`, paddingBottom: '12px' }}>
        <h1 style={{ fontSize: sizes.name, fontWeight: 'bold', color: settings.themeColor, margin: '0 0 8px 0' }}>
          {personalInfo.name || 'Your Name'}
        </h1>
        <div style={{ fontSize: sizes.base, display: 'flex', flexWrap: 'wrap', gap: '8px 16px', color: '#374151' }}>
          {personalInfo.email && <IconWrapper><Mail size={12} /><span>{personalInfo.email}</span></IconWrapper>}
          {personalInfo.phone && <IconWrapper><Phone size={12} /><span>{personalInfo.phone}</span></IconWrapper>}
          {personalInfo.location && <IconWrapper><MapPin size={12} /><span>{personalInfo.location}</span></IconWrapper>}
          {personalInfo.linkedin && <IconWrapper><Linkedin size={12} /><span>{personalInfo.linkedin}</span></IconWrapper>}
          {personalInfo.website && <IconWrapper><Globe size={12} /><span>{personalInfo.website}</span></IconWrapper>}
          {personalInfo.github && <IconWrapper><Github size={12} /><span>{personalInfo.github}</span></IconWrapper>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-line' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            WORK EXPERIENCE
          </h2>
          {workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div>
                  <strong style={{ color: '#111827' }}>{exp.position}</strong>
                  {exp.company && <span style={{ color: '#374151' }}>, {exp.company}</span>}
                </div>
                <span style={{ fontSize: sizes.base, color: '#6B7280', whiteSpace: 'nowrap', paddingLeft: '16px' }}>
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              {exp.location && (
                <div style={{ fontSize: sizes.base, color: '#6B7280', marginBottom: '4px' }}>
                  {exp.location}
                </div>
              )}
              {exp.description && (
                <div style={{ color: '#374151', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div>
                  <strong style={{ color: '#111827' }}>{edu.degree}</strong>
                  {edu.field && <span style={{ color: '#374151' }}> in {edu.field}</span>}
                </div>
                <span style={{ fontSize: sizes.base, color: '#6B7280', whiteSpace: 'nowrap', paddingLeft: '16px' }}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
              <div style={{ color: '#374151' }}>
                {edu.school}
                {edu.gpa && <span style={{ color: '#6B7280' }}> • GPA: {edu.gpa}</span>}
              </div>
              {edu.description && (
                <div style={{ color: '#374151', lineHeight: '1.5', whiteSpace: 'pre-line', marginTop: '4px' }}>
                  {edu.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            PROJECTS
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ color: '#111827' }}>{proj.name}</strong>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: sizes.base, color: settings.themeColor }}>
                    {proj.link}
                  </a>
                )}
              </div>
              {proj.technologies && (
                <div style={{ fontSize: '0.9em', color: '#6B7280', marginBottom: '4px' }}>
                  <strong>Technologies:</strong> {proj.technologies}
                </div>
              )}
              {proj.description && (
                <div style={{ color: '#374151', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                  {proj.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            SKILLS
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill) => (
              <div key={skill.id} style={{ color: '#374151' }}>
                <strong style={{ color: '#111827' }}>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {customSections.map((section) => (
        <div key={section.id} style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            {section.title.toUpperCase()}
          </h2>
          <div style={{ color: '#374151', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
            {section.description}
          </div>
        </div>
      ))}

    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

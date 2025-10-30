import { useResumeStore } from "@/stores/resumeStore";
import { forwardRef, useMemo, useRef, useLayoutEffect, useState } from "react";
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

const PageBreak = () => <div style={{ pageBreakAfter: 'always' }}></div>;

const ResumeContent = ({
  personalInfo,
  education,
  workExperience,
  projects,
  skills,
  customSections,
  settings,
  sizes,
  formatDate
}: any) => {
  return (
    <>
      {/* Header */}
      <div className="resume-header" style={{ marginBottom: '16px', borderBottom: `2px solid ${settings.themeColor}`, paddingBottom: '12px' }}>
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
        <div className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            PROFESSIONAL SUMMARY
          </h2>
          <div className="resume-item" style={{ color: '#374151', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-line' }}>{personalInfo.summary}</div>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            WORK EXPERIENCE
          </h2>
          {workExperience.map((exp: any) => (
            <div key={exp.id} className="resume-item" style={{ marginBottom: '12px' }}>
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
        <div className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            EDUCATION
          </h2>
          {education.map((edu: any) => (
            <div key={edu.id} className="resume-item" style={{ marginBottom: '12px' }}>
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
        <div className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            PROJECTS
          </h2>
          {projects.map((proj: any) => (
            <div key={proj.id} className="resume-item" style={{ marginBottom: '12px' }}>
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
        <div className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            SKILLS
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill: any) => (
              <div key={skill.id} className="resume-item" style={{ color: '#374151' }}>
                <strong style={{ color: '#111827' }}>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {customSections.map((section: any) => (
        <div key={section.id} className="resume-section" style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: sizes.heading, fontWeight: 'bold', color: settings.themeColor, marginBottom: '8px' }}>
            {section.title.toUpperCase()}
          </h2>
          <div
            className="resume-item"
            style={{ color: '#374151', lineHeight: '1.5' }}
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
        </div>
      ))}
    </>
  )
}


export const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const { resumeData } = useResumeStore();
  const { personalInfo, education, workExperience, projects, skills, customSections, settings } = resumeData;
  const [pages, setPages] = useState<any[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const sizes = fontSizeMap[settings.fontSize];
  const pageWidth = settings.documentSize === 'letter' ? '8.5in' : '210mm';
  const pageHeight = settings.documentSize === 'letter' ? '11in' : '297mm';
  const pageMargin = '0.5in';

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const [year, month] = dateStr.split('-');
      return format(new Date(parseInt(year), parseInt(month) - 1), 'MMM yyyy');
    } catch {
      return dateStr;
    }
  };

  useLayoutEffect(() => {
    const measureAndPaginate = () => {
      if (!contentRef.current) return;

      const pageHeightPx = (parseFloat(pageHeight) * 96) - (parseFloat(pageMargin) * 2 * 96);
      const contentEl = contentRef.current;
      
      const allElements = Array.from(contentEl.children) as HTMLElement[];
      const header = allElements.find(el => el.classList.contains('resume-header'));
      const sections = allElements.filter(el => el.classList.contains('resume-section'));

      let currentPage: any[] = [];
      let currentPageHeight = 0;
      const newPages = [];
      
      const headerHeight = header?.offsetHeight || 0;
      currentPageHeight += headerHeight;

      if(header) currentPage.push(header.cloneNode(true));
      

      for (const section of sections) {
        const sectionItems = Array.from(section.querySelectorAll('.resume-item')) as HTMLElement[];
        const sectionTitle = section.querySelector('h2');
        
        let sectionHeight = sectionTitle?.offsetHeight || 0;

        if (currentPageHeight + sectionHeight > pageHeightPx) {
          newPages.push(currentPage);
          currentPage = [];
          currentPageHeight = 0;
        }

        const sectionClone = section.cloneNode(true) as HTMLElement;
        while (sectionClone.firstChild) {
          sectionClone.removeChild(sectionClone.firstChild);
        }
        if(sectionTitle) sectionClone.appendChild(sectionTitle.cloneNode(true));

        currentPageHeight += sectionHeight;
        currentPage.push(sectionClone)

        for(const item of sectionItems) {
          const itemHeight = item.offsetHeight;
          if (currentPageHeight + itemHeight > pageHeightPx) {
            newPages.push(currentPage);
            currentPage = [];
            currentPageHeight = 0;

            const newSectionClone = section.cloneNode(true) as HTMLElement;
            while (newSectionClone.firstChild) {
              newSectionClone.removeChild(newSectionClone.firstChild);
            }
            if(sectionTitle) newSectionClone.appendChild(sectionTitle.cloneNode(true));
            
            currentPage.push(newSectionClone);
            currentPageHeight += sectionTitle?.offsetHeight || 0;
          }
          currentPageHeight += itemHeight;
          const lastPageSection = currentPage[currentPage.length -1] as HTMLElement
          lastPageSection.appendChild(item.cloneNode(true));
        }
      }

      newPages.push(currentPage);
      setPages(newPages);
    };

    measureAndPaginate();
  }, [resumeData, settings, pageHeight, pageMargin]);


  const contentProps = {
    personalInfo,
    education,
    workExperience,
    projects,
    skills,
    customSections,
    settings,
    sizes,
    formatDate
  }

  return (
    <>
      <div style={{ opacity: 0, position: 'absolute', zIndex: -1, pointerEvents: 'none' }}>
        <div
          ref={contentRef}
          style={{
            width: pageWidth,
            padding: pageMargin,
            fontFamily: settings.fontFamily,
            fontSize: sizes.base,
          }}
        >
          <ResumeContent {...contentProps} />
        </div>
      </div>

      <div ref={ref}>
        {pages.map((pageContent, i) => (
          <div
            key={i}
            className="print:shadow-none"
            style={{
              width: pageWidth,
              height: pageHeight,
              fontFamily: settings.fontFamily,
              fontSize: sizes.base,
              backgroundColor: 'white',
              color: '#000',
              padding: pageMargin,
              margin: '0 auto',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              marginBottom: i < pages.length - 1 ? '16px' : '0',
            }}
          >
            {pageContent.map((el:any, j:number) => <div key={j} dangerouslySetInnerHTML={{ __html: el.outerHTML }} />)}
            {i < pages.length - 1 && <PageBreak />}
          </div>
        ))}
      </div>
    </>
  );
});

ResumePreview.displayName = 'ResumePreview';

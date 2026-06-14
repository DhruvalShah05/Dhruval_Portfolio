import { FiExternalLink, FiGithub } from "react-icons/fi";
import Section from "../Ui/Section";
import Card from "../Ui/Card";
import Tag from "../Ui/Tag";
import { PROJECTS } from "../../data/portfolio";
import { THEME } from "../../theme";

function ProjectLinks({ githubUrl, liveUrl }) {
  return (
    <div
      className={`flex items-center gap-5 pt-4 mt-auto border-t ${THEME.borderDefault}`}
    >
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm ${THEME.linkSecondary}`}
      >
        <FiGithub size={16} />
        Code
      </a>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm ${THEME.linkSecondary}`}
        >
          <FiExternalLink size={16} />
          Live
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-text-muted/50 cursor-not-allowed">
          <FiExternalLink size={16} />
          Live
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work — quality over quantity."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="p-0 overflow-hidden flex flex-col">
            <div
              className={`h-52 sm:h-60 md:h-72 lg:h-80 overflow-hidden border-b ${THEME.borderDefault} ${THEME.bgBase} flex items-center justify-center p-3 sm:p-4`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`w-full h-full object-contain object-center ${THEME.imgHoverZoom}`}
              />
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-text-primary">
                {project.title}
              </h3>
              {project.description && (
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {project.description}
                </p>
              )}
              {project.features?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent/80 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {project.impact && (
                <p className="mt-4 text-sm text-text-primary/90 leading-relaxed border-l-2 border-accent/40 pl-3">
                  <span className="text-accent font-medium">Impact — </span>
                  {project.impact}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-5 mb-2">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <ProjectLinks
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import Section from "../Ui/Section";
import Card from "../Ui/Card";
import { EXPERIENCE, EDUCATION } from "../../data/portfolio";
import { formatDateRange, getExperienceSummary } from "../../utils/experience";
import { THEME } from "../../theme";

export default function Experience() {
  const summary = getExperienceSummary(EXPERIENCE);

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internships and roles where I shipped real features."
    >
      <div className="flex flex-wrap gap-3 -mt-8 mb-8">
        <span
          className={`text-sm px-3 py-1.5 rounded-full border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.textSecondary}`}
        >
          <span className="text-accent font-medium">Internship: </span>
          {summary.internships}
        </span>
        <span
          className={`text-sm px-3 py-1.5 rounded-full border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.textSecondary}`}
        >
          <span className="text-accent font-medium">Work: </span>
          {summary.work}
        </span>
      </div>

      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <Card key={`${job.company}-${job.title}`} hover={false}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {job.title}
                  </h3>
                  {job.type && (
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${THEME.accentTag}`}
                    >
                      {job.type}
                    </span>
                  )}
                </div>
                <p className="text-accent text-sm font-medium">{job.company}</p>
              </div>
              <div
                className={`text-sm ${THEME.textSecondary} sm:text-right shrink-0`}
              >
                <p>{formatDateRange(job.startDate, job.endDate)}</p>
                <p>{job.location}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`flex items-start gap-3 text-sm ${THEME.textBodyMuted}`}
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className={`${THEME.subheadingAccent} mb-6`}>Education</h3>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <Card key={edu.degree} hover={false}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <p className="font-semibold text-text-primary">
                    {edu.degree}
                  </p>
                  <p className={`text-sm ${THEME.textSecondary} mt-1`}>
                    {edu.school}
                  </p>
                </div>
                <div
                  className={`text-sm ${THEME.textSecondary} sm:text-right shrink-0`}
                >
                  <p>{edu.period}</p>
                  {edu.location && <p>{edu.location}</p>}
                </div>
              </div>
              {edu.details?.length > 0 && (
                <ul
                  className={`space-y-2 border-t ${THEME.borderDefault} pt-4`}
                >
                  {edu.details.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm ${THEME.textBodyMuted}`}
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

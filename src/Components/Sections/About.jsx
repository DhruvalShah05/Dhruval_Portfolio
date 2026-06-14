import Section from "../Ui/Section";
import Card from "../Ui/Card";
import { ABOUT } from "../../data/portfolio";
import { THEME } from "../../theme";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Engineering student · MERN & Java · seeking entry-level SDE roles."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4">
          {ABOUT.paragraphs.map((text, i) => (
            <p key={i} className={THEME.textBodyMuted}>
              {text}
            </p>
          ))}
        </div>
        <Card className="lg:col-span-2" hover={false}>
          <h3 className={`${THEME.subheadingAccent} mb-4`}>
            Core strengths
          </h3>
          <ul className="space-y-3">
            {ABOUT.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-text-primary text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

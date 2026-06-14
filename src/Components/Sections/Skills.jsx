import Section from "../Ui/Section";
import Card from "../Ui/Card";
import Tag from "../Ui/Tag";
import { SKILL_GROUPS } from "../../data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies I use to ship reliable full-stack products."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title}>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

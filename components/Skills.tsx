import SkillBox from "./SkillBox";
import SectionTitle from "./SectionTitle";
import { data } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="wrapper text-center">
        <SectionTitle title="Skills" />
      </div>

      {/* SKILLS */}
      <div className="mt-20 wrapper flex gap-10 flex-wrap justify-center">
        {data.map((skill) => (
          <SkillBox key={skill.id} text={skill.text} delay={skill.delay}>
            {<skill.icon />}
          </SkillBox>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;

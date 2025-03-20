import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { m } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Frontend Development', level: 90, color: 'bg-blue-500' },
  { name: 'Backend Development', level: 85, color: 'bg-green-500' },
  { name: 'Database Design', level: 80, color: 'bg-purple-500' },
  { name: 'API Development', level: 88, color: 'bg-orange-500' },
  { name: 'UI/UX Design', level: 75, color: 'bg-pink-500' }
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                <m.div
                  className={`h-full ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
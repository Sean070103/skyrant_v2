'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'GRANT',
    title: 'CHIEF EXECUTIVE OFFICER',
    bio: 'Visionary leader driving the strategic vision of SKYRANT TECH. With extensive experience in building teams and scaling tech ventures, Grant ensures every project delivers exceptional value and innovation.',
    expertise: ['Strategy', 'Leadership', 'Vision'],
    image: '/grant.png',
  },
  {
    name: 'SEAN',
    title: 'TECH LEAD',
    bio: 'Full-stack engineer architecting robust, scalable solutions. Sean brings technical excellence and deep engineering expertise to every project, ensuring cutting-edge technology stacks and maintainable code.',
    expertise: ['Full-Stack', 'Architecture', 'Engineering'],
    image: '/sean-new.jpg',
  },
  {
    name: 'KYLE',
    title: 'DESIGN DIRECTOR',
    bio: 'Creative director crafting intuitive, stunning user experiences. Kyle bridges design and functionality, creating interfaces that are both beautiful and purposeful for modern web applications.',
    expertise: ['UI/UX Design', 'Design Systems', 'Brand'],
    image: '/kyle.png',
  },
];

export function Team() {
  return (
    <section id="team" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-text text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-3">The Team</h2>
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-10 sm:mb-12 max-w-xl">
          Driven by excellence. Led by experience. Built on code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="brutalist-border border-2 p-0 overflow-hidden hover:bg-secondary/5 transition group"
            >
              {/* Profile Photo */}
              <div className="bg-secondary/20 border-b-2 border-primary overflow-hidden h-96 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`w-full h-full object-cover object-center ${member.name === 'SEAN' ? 'grayscale' : ''}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-mono text-primary mb-2 sm:mb-3 uppercase tracking-wider">
                  {member.title}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed mb-4 text-foreground">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 border border-primary font-mono text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statement */}
        <div className="mt-10 sm:mt-12 brutalist-border border-2 p-5 sm:p-8">
          <p className="brutalist-text text-xs sm:text-sm mb-3">Why We Stand Out</p>
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-4xl">
            SKYRANT TECH brings together strategic vision, technical mastery, and design excellence. Grant leads with purpose, Sean engineers with precision, and Kyle designs with intention. Every project benefits from our collaborative approach—strategy meets code meets beauty. No compromise. No shortcuts. Just results that matter.
          </p>
        </div>
      </div>
    </section>
  );
}

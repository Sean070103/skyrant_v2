'use client';

const projects = [
  {
    name: 'ENTERPRISE PLATFORM',
    category: 'Full Stack',
    description: 'Large-scale SaaS platform for financial services. 500k+ DAU. Built with Next.js, PostgreSQL, and real-time WebSockets.',
    technologies: ['Next.js', 'PostgreSQL', 'WebSocket', 'Docker'],
  },
  {
    name: 'DESIGN SYSTEM',
    category: 'Frontend',
    description: '200+ component library. Used by 40+ teams across the organization. Accessibility certified (WCAG 2.1 AA).',
    technologies: ['React', 'TypeScript', 'Storybook', 'CSS Modules'],
  },
  {
    name: 'E-COMMERCE REBUILD',
    category: 'Full Stack',
    description: 'Complete redesign and rebuild. 300% increase in conversion rate. Performance score: 98/100.',
    technologies: ['Next.js', 'Headless CMS', 'Stripe', 'Vercel'],
  },
  {
    name: 'DATA DASHBOARD',
    category: 'Frontend',
    description: 'Real-time analytics dashboard handling 10M+ events per day. Sub-100ms query responses.',
    technologies: ['React', 'D3.js', 'TimescaleDB', 'GraphQL'],
  },
];

export function Work() {
  return (
    <section id="work" className="brutalist-section px-4 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-text text-4xl md:text-5xl font-black mb-16">Selected Work</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border-t-2 border-primary pt-8 hover:bg-secondary/5 px-8 md:px-12 py-8 transition group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="brutalist-text text-2xl md:text-3xl font-black">
                      {project.name}
                    </h3>
                    <span className="text-xs brutalist-text text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed mb-4 text-primary max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 font-mono border-b-2 border-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="brutalist-text text-sm hover:text-primary transition">
                    VIEW →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

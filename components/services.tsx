'use client';

const services = [
  {
    title: 'CUSTOM DEVELOPMENT',
    description: 'Bespoke web applications built from the ground up. React, Next.js, TypeScript. Full stack architecture.',
    features: ['React / Next.js', 'TypeScript', 'Full Stack', 'API Design'],
  },
  {
    title: 'FRONTEND ENGINEERING',
    description: 'High-performance user interfaces with accessibility-first thinking. Pixel perfect. Lightning fast.',
    features: ['UI Implementation', 'Performance Optimization', 'Accessibility', 'Animation'],
  },
  {
    title: 'INFRASTRUCTURE & DEVOPS',
    description: 'Deployment, scaling, monitoring. We keep your application running flawlessly 24/7.',
    features: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Database Design', 'Security'],
  },
  {
    title: 'CONSULTING',
    description: 'Technical strategy and architecture guidance. Helping teams build better products through sound engineering.',
    features: ['Code Review', 'Architecture Design', 'Team Training', 'Performance Audit'],
  },
];

export function Services() {
  return (
    <section id="services" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="brutalist-text text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-12">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="brutalist-border p-5 sm:p-6 lg:p-8 hover:bg-secondary/5 transition">
              <h3 className="brutalist-text text-base sm:text-lg lg:text-xl font-black mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 text-primary">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 sm:px-3 py-1 sm:py-2 border border-primary font-mono"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

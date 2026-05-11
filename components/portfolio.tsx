'use client';

import Image from 'next/image';

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: PortfolioProject[] = [
  {
    title: 'NOVAWALLET',
    category: 'Crypto Wallet Landing Page',
    description: 'A modern, futuristic landing page that simplifies complex blockchain concepts. Designed with security and trust at the forefront, featuring clean layouts and intuitive user flows for decentralized finance adoption.',
    image: '/novawallet-new.png',
    link: 'https://www.behance.net/gallery/233725683/NovaWallet-Crypto-Wallet-Landing-Page',
    tags: ['UI Design', 'Web Design', 'Fintech'],
  },
  {
    title: 'BEANY AVENUE',
    category: 'Coffee Shop Website',
    description: 'A vibrant cafe website bringing community and coffee culture online. Designed to capture the warm, inviting atmosphere of a local neighborhood coffee shop with engaging visuals and seamless user experience.',
    image: '/beanyavenue-new.png',
    link: 'https://www.beanyavenue.space/',
    tags: ['Web Design', 'Branding', 'E-Commerce'],
  },
  {
    title: 'SWEET HEARTH BAKERY',
    category: 'Bakery Landing Page Concept',
    description: 'A warm and inviting landing page concept for a neighborhood bakery. Balances playful food photography with soft, welcoming tones to create an online space as delightful as stepping into the bakery itself.',
    image: '/sweethearth.jpg',
    link: 'https://www.behance.net/gallery/233957459/Sweet-Hearth-Bakery-Landing-Page-Concept',
    tags: ['UI Design', 'Web Design', 'Brand Design'],
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-primary">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-widest text-primary mb-2 sm:mb-3">
            Our Work
          </h2>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground max-w-2xl">
            Strategic design. Technical excellence. Results that matter.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-primary overflow-hidden hover:border-accent transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-secondary/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="bg-card p-5 sm:p-6 border-t-2 border-primary">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-mono font-bold uppercase tracking-widest text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-accent">
                    {project.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 border border-primary text-xs font-mono uppercase tracking-widest text-primary bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <div className="flex items-center gap-2 text-primary group-hover:text-accent transition-colors">
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

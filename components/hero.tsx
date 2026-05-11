'use client';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          <div className="border-l-4 sm:border-l-6 lg:border-l-8 border-primary pl-4 sm:pl-6 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black brutalist-text leading-tight mb-3 sm:mb-4">
              BOLD DESIGN.<br />
              RAW CODE.<br />
              TECHNICAL EXCELLENCE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <p className="text-base sm:text-lg md:text-xl text-primary leading-relaxed max-w-md">
              Premium web development for companies that demand uncompromising quality. We build digital experiences that are as technically rigorous as they are visually striking.
            </p>
            <div className="border-2 border-primary p-4 sm:p-6 lg:p-8">
              <p className="brutalist-text text-xs sm:text-sm mb-3 sm:mb-4">No fluff. No trends.</p>
              <p className="text-xs sm:text-sm leading-relaxed">
                Just solid architecture, performance-first thinking, and interfaces that work perfectly. Every pixel. Every millisecond.
              </p>
            </div>
          </div>

          <div className="pt-3 sm:pt-4">
            <a href="#contact" className="inline-block brutalist-border bg-primary text-background px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-xs sm:text-sm font-black hover:bg-transparent hover:text-primary transition-all duration-300 whitespace-nowrap">
              START A PROJECT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

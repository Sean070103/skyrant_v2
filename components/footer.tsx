export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t-4 border-primary py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          <div>
            <h3 className="brutalist-text text-xs font-black mb-2">About</h3>
            <p className="text-xs text-primary leading-relaxed">
              Crafting digital experiences for companies that demand excellence.
            </p>
          </div>
          <div>
            <h3 className="brutalist-text text-xs font-black mb-2">Services</h3>
            <ul className="text-xs space-y-1 text-primary">
              <li><a href="#services" className="hover:underline">Custom Development</a></li>
              <li><a href="#services" className="hover:underline">Frontend Engineering</a></li>
              <li><a href="#services" className="hover:underline">Infrastructure</a></li>
              <li><a href="#services" className="hover:underline">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="brutalist-text text-xs font-black mb-2">Connect</h3>
            <ul className="text-xs space-y-1 text-primary">
              <li><a href="https://www.linkedin.com/in/skyrant-tech-a77635400/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://web.facebook.com/search/top?q=skyrant%20tech" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="mailto:skyranttt@gmail.com" className="hover:underline">Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className="brutalist-text text-xs font-black mb-2">Legal</h3>
            <ul className="text-xs space-y-1 text-primary">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-primary pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <p className="brutalist-text text-xs">
            © {currentYear} SKYRANT TECH. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed and built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

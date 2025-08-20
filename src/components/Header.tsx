import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

 const scrollToSection = (sectionId: string) => {
  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      const barInfoHeight = document.querySelector('#bar-info')?.clientHeight || 0;
      const offset = headerHeight + barInfoHeight;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 100); // petit délai pour le rendu du DOM
  } else {
    const element = document.getElementById(sectionId);
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    const barInfoHeight = document.querySelector('#bar-info')?.clientHeight || 0;
    const offset = headerHeight + barInfoHeight;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }

  setOpen(false); 
  };

 const handlePricingClick = () => {
  navigate('/tarifs');  
  setOpen(false);    

  setTimeout(() => {
    window.scrollTo({ top: 0});
  }, 50);
};

  return (
    <header className="fixed top-[30px] md:top-[40px] left-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo / Nom */}
        <div>
          <a href="/" className="text-3xl font-bold text-foreground">Johara BOUDJENANE </a>
          <br />
          <a href="/" className="text-2xl font-normal text-foreground">Psychologue et Sexologue</a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">À propos</button>
          <button onClick={handlePricingClick} className="text-foreground hover:text-primary transition-colors">Tarifs</button>
          <button onClick={() => scrollToSection('appointment')} className="text-foreground hover:text-primary transition-colors">Prendre RDV</button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
        </div>

           {/* Bouton Doctolib Desktop */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" onClick={() => window.open("https://www.doctolib.fr/psychologue/venissieux/johara-boudjenane", '_blank')}>
            Mon Doctolib
          </Button>
        </div>

        {/* Burger Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md w-full absolute top-full left-0 flex flex-col items-center space-y-4 py-4 border-t border-border">
          <button onClick={() => { scrollToSection('about'); setOpen(false); }} className="text-foreground hover:text-primary transition-colors">À propos</button>
          <button onClick={() => { handlePricingClick(); setOpen(false); }} className="text-foreground hover:text-primary transition-colors">Tarifs</button>
          <button onClick={() => { scrollToSection('appointment'); setOpen(false); }} className="text-foreground hover:text-primary transition-colors">Prendre RDV</button>
          <button onClick={() => { scrollToSection('contact'); setOpen(false); }} className="text-foreground hover:text-primary transition-colors">Contact</button>
          
          {/* Bouton Doctolib Mobile */}
          <Button variant="default" size="sm" onClick={() => { window.open("https://www.doctolib.fr/psychologue/venissieux/johara-boudjenane", '_blank'); setOpen(false); }}>
            Mon Doctolib
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
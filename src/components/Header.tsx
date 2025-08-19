import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePricingClick = () => {
    navigate('/tarifs');
  };

  return (
    <header className="fixed top-[32px] left-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          {/*<div className="w-8 h-8 bg-gradient-hero rounded-full"></div>*/}
          <div>
            <span className="text-3xl font-bold text-foreground">Johara BOUDJENANE</span>
            <br />
            <span className="text-2xl font-normal text-foreground">Psychologue et Sexologue</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={handlePricingClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Prendre RDV
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button variant="default" size="sm" className="hidden md:block" onClick={() => window.open("https://www.doctolib.fr/psychologue/venissieux/johara-boudjenane",'_blank')}>
            Mon Doctolib
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
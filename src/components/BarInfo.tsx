import { Mail, Phone, Instagram } from "lucide-react";

const BarInfo = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#f7aea3] border-b border-[#f7aea3] py-2 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6 text-sm text-[#f7aea3]-foreground/80">
          <a 
            href="tel:+33778519172" 
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>07 78 51 91 72</span>
          </a>
          
          <a 
            href="mailto:contact@johara-boudjenane-psychologue.fr" 
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>contact@johara-boudjenane-psychologue.fr</span>
          </a>
          
          <a 
            href="https://www.instagram.com/johara.psychologue" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@johara.psychologue</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BarInfo;
import { Mail, Phone, Instagram } from "lucide-react";

const BarInfo = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50  bg-[#E6B8A2] text-white">
  {/* Version Desktop */}
  <div className="hidden md:flex justify-center space-x-12 py-2">
    <a href="tel:+33778519172" className="hover:underline">📞 07 78 51 91 72</a>
    <a href="mailto:contact@johara-boudjenane-psychologue.fr" className="hover:underline">✉️ contact@johara-boudjenane-psychologue.fr</a>
    <a href="https://instagram.com/johara.psychologue" target="_blank" rel="noopener noreferrer" className="hover:underline">📸 Instagram</a>
  </div>

  {/* Version Mobile */}
  <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#E6B8A2] py-4">
    <div className="container mx-auto px-3 pt-1 flex justify-between items-center text-sm">
      <a href="tel:+33778519172" className="hover:underline flex items-center space-x-1">
        📞 <span>Tél</span>
      </a>
      <a href="mailto:contact@johara-boudjenane-psychologue.fr" className="hover:underline flex items-center space-x-1">
        ✉️ <span>Mail</span>
      </a>
      <a href="https://instagram.com/johara.psychologue" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
        📸 <span>Instagram</span>
      </a>
    </div>
  </div>
</div>
  );
};

export default BarInfo;
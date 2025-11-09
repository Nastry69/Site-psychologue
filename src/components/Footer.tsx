const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-11">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="mt-14">
            <p className="mb-4 text-s text-background/60">
              N° ADELI : 699 353 793
            </p>
            <p className=" mt-2 text-s text-background/60">
              SIRET : 830 749 487 000 13
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-background/80">
              <a href="mailto:contact@johara-boudjenane-psychologue.fr"><p className="hover:underline">📧 contact@johara-boudjenane-psychologue.fr</p></a>
              <a href="tel:+33778519172"><p className="hover:underline py-2">📞 07 78 51 91 72</p></a>
              <p>📍 91 Avenue Francis de Pressensé, 69200 Vénissieux</p>
              <p>📍 Téléconsultation où que tu sois</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-1 text-background/80">
              <p>Lundi - Mercredi : 10h00 - 20h00</p>
              <p>Vendredi : Fermé</p>
              <p>Samedi : Fermé</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-6 pt-6 text-center text-background/60">
          <p className="mb-3 text-m font-bold">
            Les consultations de psychologie ne sont pas remboursées par la Sécurité Sociale, 
            mais peuvent être prises en charge par certaines mutuelles.
          </p>
          <p>&copy; 2025 Johara BOUDJENANE Psychologue - Tous droits réservés - Site crée par Tristan DZIOCH.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
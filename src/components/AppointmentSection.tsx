import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

const AppointmentSection = () => {
  const openDoctolib = () => {
    window.open('https://www.doctolib.fr/psychologue/venissieux/johara-boudjenane', '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-subtle scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Prendre rendez-vous</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Réservez votre consultation en quelques clics via Doctolib
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="shadow-card border-0">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Au cabinet</h3>
              <p className="text-muted-foreground mb-6">
                91 Avenue Francis de Pressensé<br />
                69200 Vénissieux<br />
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Lundi au jeudi</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8h00 - 21h00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="p-8 text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">En visioconférence</h3>
              <p className="text-muted-foreground mb-6">
                Consultations à distance<br />
                Même qualité d'accompagnement<br />
                Plateforme sécurisée et confidentielle
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>4 jours sur 7</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>8h00 - 21h00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={openDoctolib}
            className="bg-trust hover:bg-trust/90 text-trust-foreground shadow-soft px-8 py-3"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Réserver sur Doctolib
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Réponse sous 24h • Annulation gratuite jusqu'à 24h avant
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
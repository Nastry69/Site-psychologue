import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tarifs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des tarifs transparents pour un accompagnement de qualité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-card border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-foreground">Consultation individuelle</CardTitle>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>50 minutes</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-6">90€</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Séance en cabinet</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Suivi personnalisé</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Outils thérapeutiques</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-primary text-primary-foreground relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </span>
            </div>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Consultation visio</CardTitle>
              <div className="flex items-center justify-center space-x-2 opacity-90">
                <Clock className="w-5 h-5" />
                <span>50 minutes</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-6">90€</div>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Consultation en ligne</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Même qualité d'écoute</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Flexibilité horaire</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-foreground">Première consultation</CardTitle>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>60 minutes</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-6">90€</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Bilan approfondi</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Plan thérapeutique</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Questions et objectifs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-sage rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-sage-foreground mb-3">
              Modalités de paiement
            </h3>
            <p className="text-sage-foreground/80">
              Paiement par CB ou espèces. <br/>
              Certaines mutuelles proposent un remboursement partiel des consultations de psychologie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
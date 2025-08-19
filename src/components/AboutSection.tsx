import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Mon approche</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Vous traversez une période difficile, vivez une situation douloureuse ou souhaitez mieux comprendre vos émotions ?
              Psychologue clinicienne et psychothérapeute diplômée d’État, je vous accompagne  pour retrouver équilibre et sérénité.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Je reçois enfants, adolescents et adultes en présentiel et en téléconsultation dans un cadre confidentiel et respectueux.
              Spécialisée en psychologie clinique, psycho-traumatologie, et sexologie, j’adapte ma méthode à vos besoins pour vous 
              offrir un espace sûr où explorer vos émotions, vos blocages et vos ressources.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prendre rendez-vous est un premier pas vers un mieux-être durable. Ensemble, nous créerons un espace unique d’écoute 
              et d’introspection, pour avancer en confiance vers vos objectifs.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-card border-0 bg-warm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-warm-foreground mb-2">Bienveillance</h4>
                    <p className="text-warm-foreground/80">Un accompagnement respectueux et sans jugement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-sage">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sage-foreground mb-2">Confidentialité</h4>
                    <p className="text-sage-foreground/80">Secret professionnel absolu garanti</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-foreground mb-2">Personnalisé</h4>
                    <p className="text-accent-foreground/80">Une thérapie adaptée à vos besoins uniques</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Mes formations</h3>

              <div className="space-y-6 text-muted-foreground">

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2025</h4>
                  <p>Test d'intelligence ( QI) pour adultes : le WAIS IV - Université de Rennes 2</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2024</h4>
                  <p>Trouble anxieux compulsif - Formationpsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2024</h4>
                  <p>Stress post-traumatique - Formationspsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2024</h4>
                  <p>Sexologie - AFPRO</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2024</h4>
                  <p>Le patte noire - Formationspsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2024</h4>
                  <p>Inceste et abus sexuel - Formationpsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2023</h4>
                  <p>Les troubles anxieux - Formationspsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2023</h4>
                  <p>Les thérapies familiales et de couple approches systémiques et psychanalytiques - formationpsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2023</h4>
                  <p>L'estime de soi - formationpsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2022</h4>
                  <p>Accompagner en pluridicilinarité l'obésité de l'enfant et de l'adolescent - REPPOP Lyrra</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2021</h4>
                  <p>Traumatisme et interventions précoces - Formationspsy</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2021</h4>
                  <p>Langage non verbal - Détecter le mensonge</p>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, GraduationCap, Microscope, BookOpen, Clipboard, Award, FileText, Star } from "lucide-react";


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* ✅ Image en forme de bulle */}
            <img
              src="../assets/image.jpg"   // 🔹 Mets ici le chemin de ta photo
              alt="Photo de profil"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-foreground mb-6"></h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Psychologue diplômée, je propose des consultations en visio pour les adultes et les couples.
              Les consultations en présentiel sont actuellement réservées aux bilans de QI et aux évaluations nécessitant la présence au cabinet.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
             J’accompagne principalement :<br />
              Les adultes souffrant d’anxiété, de stress ou de manque de confiance en eux.<br />
              Les couples souhaitant améliorer leur communication et leurs relations.<br />
              Les personnes en quête de sérénité et d’équilibre intérieur.<br />
              
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je propose également un accompagnement sur la sexualité, les traumatismes et les dynamiques familiales.
              Mon approche se veut bienveillante, claire et concrète, avec des outils adaptés à chaque personne.
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
          <h3 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            Mes Diplômes
          </h3>

          <div className="space-y-6 text-muted-foreground">

            <div className="flex items-baseline gap-4">
              <h4 className="font-semibold text-foreground">2022</h4>
              <p>Master en psychologie clinique, psychopathologie et psychologie de la santé - Université de Besançon</p>
            </div>

            <div className="flex items-baseline gap-4">
              <h4 className="font-semibold text-foreground">2020</h4>
              <p>Licence de psychologie - Université Rennes 2 - UFR Sciences humaines</p>
            </div>

            <h3 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              Mes formations
            </h3>

            <div className="space-y-6 text-muted-foreground">

              <div className="flex items-baseline gap-4">
                <h4 className="font-semibold text-foreground">2025</h4>
                <p>EMDR - IFEMDR - (En Cours)</p>
              </div>

              <div className="flex items-baseline gap-4">
                <h4 className="font-semibold text-foreground">2024</h4>
                <p>Bilan psychométrique/intellectuel pour adultes et enfants (QI) - Pearson FRANCE</p>
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


              <h3 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-6">
                <Microscope className="w-5 h-5 text-primary" />
                Mes Expériences</h3>



              <div className="space-y-6 text-muted-foreground">

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">Depuis 2023</h4>
                  <p>Cabinet libérale - Vénissieux </p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2022 - 2023</h4>
                  <p>Cabinet libérale - Lyon</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2021 - 2022</h4>
                  <p>Praticienne - Fédération des Aveugles Alsace Lorraine Grand Est - Strasbourg - ESAT atelier du petit prince</p>
                </div>

                <div className="flex items-baseline gap-4">
                  <h4 className="font-semibold text-foreground">2020 - 2021</h4>
                  <p>Praticienne - Métropole de Lyon - Lyon - l'adapt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
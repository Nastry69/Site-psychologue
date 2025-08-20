
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tarifs = [
  { title: "Thérapie en téléconsultation", duration: "50 minutes", price: "90€", features: ["Consultation en ligne", "Flexibilité", "Suivi personnalisé"], popular: true },
  { title: ["Consultation de thérapie", "individuelle"], duration: "50 minutes", price: "90€", features: ["Séance en cabinet", "Suivi personnalisé"], popular: false },
  { title: "Thérapie de couple", duration: "60 minutes", price: "130€", features: ["Bilan approfondi", "Plan thérapeutique", "Questions et objectifs"], popular: false },
  { title: "Thérapie Familiale", duration: "60 minutes", price: "130€", features: ["Bilan approfondi", "Plan thérapeutique", "Questions et objectifs"], popular: false },
  { title: "Test QI Adulte", duration: "60 minutes", price: "310€", features: ["Bilan approfondi", "Compte rendu détaillé"], popular: false },
  { title: "Test QI enfant", duration: "60 minutes", price: "310€", features: ["Bilan approfondi", "Compte rendu détaillé"], popular: false },
  { title: "Sexologie", duration: "60 minutes", price: "90€", features: ["Plan thérapeutique", "Questions et objectifs"], popular: false },
];

const TarifSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + tarifs.length) % tarifs.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % tarifs.length);

  const getPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0 || diff === tarifs.length) return 0; // centre
    if (diff === -1 || diff === tarifs.length - 1) return -1; // gauche
    if (diff === 1 || diff === -(tarifs.length - 1)) return 1; // droite
    return 2; // hors écran
  }; 

  return (
    <section id="pricing" className="py-11 bg-background pt-[75px] md:pt-16">
      <div className="container mx-auto px-4 pt-16">
        <div className="text-center mb-2 mt-2">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tarifs</h2>
        </div>

        <div className="relative flex justify-center items-center h-[420px] overflow-hidden max-w-5xl mx-auto">
          {tarifs.map((tarif, index) => {
            const pos = getPosition(index);
            if (Math.abs(pos) > 1) return null;

            const isCenter = pos === 0;

            return (
              <Card
                key={index}
                className={`min-w-[350px] md:min-w-[350px] shadow-card border-0 p-5 text-center absolute transition-transform duration-700 ease-in-out`}
                style={{
                  transform: `translateX(${pos * 320}px) scale(${isCenter ? 1 : 0.85}) rotateY(${pos * 15}deg)`,
                  zIndex: isCenter ? 10 : 5 - Math.abs(pos),
                  opacity: isCenter ? 1 : 0.6,
                  backgroundColor: isCenter ? "rgb(17, 115, 212)" : "white",
                  color: isCenter ? "white" : "black",
                }}
              >
                {tarif.popular && isCenter && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage text-sage-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">
                    {Array.isArray(tarif.title)
                      ? tarif.title.map((line, i) => <span key={i} className="block">{line}</span>)
                      : tarif.title
                    }
                  </CardTitle>
                  <div className={`flex items-center justify-center space-x-2 ${isCenter ? "text-white" : "text-black"}`}>
                    <Clock className="w-5 h-5" />
                    <span>{tarif.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <div className={`text-4xl font-bold mb-6 ${isCenter ? "text-white" : "text-black"}`}>
                    {tarif.price}
                  </div>
                  <ul className={`space-y-3 ${isCenter ? "text-white" : "text-black"}`}>
                    {tarif.features.map((f, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle className={`w-5 h-5 ${isCenter ? "text-white" : "text-primary"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          <button onClick={prevSlide} aria-label="Précédent" title="Précédent" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl z-20">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} aria-label="Suivant" title="Suivant" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl z-20">
            <FaChevronRight />
          </button>
        </div>
      </div>


      <div className="mt-4 mb-6 text-center">
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
    </section>
  );
};

export default TarifSection;

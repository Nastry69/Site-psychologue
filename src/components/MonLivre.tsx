import { Card, CardContent } from "@/components/ui/card";
import { Book, Globe, Calendar, User, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function MonLivre() {
  const product = {
    id: 1,
    title: "5 séances d'auto-thérapie pour se libérer de l'anxiété",
     description: [
    "Ce livre est une auto-thérapie guidée, construite pour t’accompagner pas à pas dans l’exploration et la transformation de ton anxiété.",
    "En tant que psychologue, j’ai conçu un parcours en 5 consultations, progressives, qui t’aident à travailler ton anxiété.",
    "Que tu sois adolescent, adulte ou plus avancé dans la vie, ce livre t’offre un chemin accessible, bienveillant et concret, pour reprendre confiance en toi et réduire durablement l’impact de l’anxiété.",
    "Tu n’es pas seul.",
    "Ce parcours t’aide à redevenir acteur de ton bien-être."
  ],
    price: "19.99€",
    image: "/assets/Couverture.png",
    paymentLink: "https://buy.stripe.com/dRmfZg3Lqfjq4019peaIM00",
  };

  return (
    <section className="min-h-screen pt-[200px] container mx-auto px-6">
      {/* Hero / Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {product.title}
        </h1>
      </div>

      {/* Produit + tunnel de vente */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <Card className="rounded-2xl shadow-soft overflow-hidden">
            <div className="h-150 bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="flex-1 flex flex-col gap-6 h-full">
          <Card className="rounded-2xl shadow-soft p-8 flex-1">
            <CardContent className="flex flex-col gap-4 h-full">
              <h2 className="text-3xl font-semibold">{product.title}</h2>

              {/* Affichage des paragraphes */}
              {product.description.map((para, index) => (
                <p key={index} className="text-base opacity-80 mb-4">
                  {para}
                </p>
              ))}

              {/* Prix + bouton */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-2xl font-bold text-primary">
                  {product.price}
                </span>

                <Button
                  size="lg"
                  asChild
                  className="rounded-xl flex items-center gap-2 shadow-soft"
                >
                  <a
                    href={product.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-4 h-4" /> Commander
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm opacity-70">
                Paiement sécurisé via Stripe. Vous recevrez votre ebook immédiatement après le paiement.
              </p>
              {/* Infos style "Amazon" */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center text-sm opacity-80">
                {/* Nombre de pages */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">Nombre de pages</span>
                  <Book className="w-8 h-8 text-primary" />
                  <span>77</span>
                </div>

                {/* Langue */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">Langue</span>
                  <Globe className="w-8 h-8 text-primary" />
                  <span>Français</span>
                </div>

                {/* Date de publication */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">Date de publication</span>
                  <Calendar className="w-8 h-8 text-primary" />
                  <span>2 décembre 2025</span>
                </div>

                {/* Âge de lecture */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">Âge de lecture</span>
                  <User className="w-8 h-8 text-primary" />
                  <span>15 - 18+</span>
                </div>

                {/* Dimensions */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">Dimensions</span>
                  <Ruler className="w-8 h-8 text-primary" />
                  <span>15.24 x 0.48 x 22.86 cm</span>
                </div>
              </div>
            </CardContent>
            <div className="mt-6 text-center">
              <span className="block mb-2">
                Vous voulez le e-Book en broché ?
              </span>
              <a
                href="https://www.amazon.fr/s%C3%A9ances-dauto-th%C3%A9rapie-pour-lib%C3%A9rer-lanxi%C3%A9t%C3%A9/dp/B0G4VZW6X4/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1J0KEC91H8QZO&dib=eyJ2IjoiMSJ9.dsvnfXFD46h2jSU4be0-bJby54Slpx5vxbm7S-7UkTgIhcgM4oOxu4kP2XnzHMi6s51jHdIVdn6qpbvChi8Cv0okhESP2pAsMGp1HYKfs5ePgK0bkjlf8Kau_Vc5gsP46XyNiX26VZppJVv2wxMkhWs7jvMJdzX3jm0RX0UlFTR9Kz886z0NW1kWZwgOCwiysHd1Bibun_6qohXGayrZhV5h2U9l2Blmm63fytSKVL8eAm-NlmplyVux_V65Yntvg4lGZla0xW2lDvhkL7O9zvGK3VDFLxRKo_4jOMsi4Fk.L3mpLXLP26_Z_8K_OhnPHLrOQJlnkQxMw9el3dx07m4&dib_tag=se&keywords=johara&qid=1765025351&sprefix=johara%2Caps%2C79&sr=8-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Cliquez ici
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Section témoignages / social proof (optionnel) */}
      <div className="mt-20 text-center">
       
      </div>
    </section>
  );
}

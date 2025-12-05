// components/Shop.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Shop() {
  const products = [
    {
      id: 1,
      title: "Apaiser l’anxiété – Le guide complet",
      description:
        "Un ebook pragmatique pour comprendre ses mécanismes internes et retrouver un équilibre durable.",
      price: "9.90€",
      image: "/public/assets/Cab.jpeg",
      link: "https://votre-domaine.store/ebook1",
    },
    {
      id: 2,
      title: "Reconstruire l’estime de soi",
      description:
        "Méthodes opérationnelles et exercices guidés pour renforcer votre stabilité émotionnelle.",
      price: "12.90€",
      image: "/public/assets/image.jpg",
      link: "https://votre-domaine.store/ebook2",
    },
  ];

  return (
    <section className="min-h-screen pt-[120px] container mx-auto px-6">
      <div className="text-4xl md:text-5xl font-bold mb-12"
      >
        Boutique
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id}>
            <Card className="rounded-2xl shadow-soft overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <p className="text-base opacity-80">{product.description}</p>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-primary">{product.price}</span>

                  <Button
                    size="lg"
                    asChild
                    className="rounded-xl flex items-center gap-2 shadow-soft"
                  >
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4" /> Acheter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

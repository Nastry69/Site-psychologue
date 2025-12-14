import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Lock,
  CheckCircle2,
  Info,
  ArrowRight,
} from "lucide-react";

export default function MonLivre() {
  const product = {
    title: "5 seances d'auto-therapie pour se liberer de l'anxiete",
    image: "/assets/Tablette.png",
    price: "19,99 EUR",
    paymentLink: "https://buy.stripe.com/dRmfZg3Lqfjq4019peaIM00",
    amazonLink:
      "https://www.amazon.fr/s%C3%A9ances-dauto-th%C3%A9rapie-pour-lib%C3%A9rer-lanxi%C3%A9t%C3%A9/dp/B0G4VZW6X4/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1J0KEC91H8QZO&dib=eyJ2IjoiMSJ9.dsvnfXFD46h2jSU4be0-bJby54Slpx5vxbm7S-7UkTgIhcgM4oOxu4kP2XnzHMi6s51jHdIVdn6qpbvChi8Cv0okhESP2pAsMGp1HYKfs5ePgK0bkjlf8Kau_Vc5gsP46XyNiX26VZppJVv2wxMkhWs7jvMJdzX3jm0RX0UlFTR9Kz886z0NW1kWZwgOCwiysHd1Bibun_6qohXGayrZhV5h2U9l2Blmm63fytSKVL8eAm-NlmplyVux_V65Yntvg4lGZla0xW2lDvhkL7O9zvGK3VDFLxRKo_4jOMsi4Fk.L3mpLXLP26_Z_8K_OhnPHLrOQJlnkQxMw9el3dx07m4&dib_tag=se&keywords=johara&qid=1765025351&sprefix=johara%2Caps%2C79&sr=8-4",
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col space-y-24">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-[2.90rem] font-bold leading-tight text-slate-900">
              Tu comprends ton anxiete...
              <br />
              mais tu continues a la subir ?
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl">
              Un parcours guide en 5 seances d'auto-therapie, concu par une
              psychologue, pour apaiser ton anxiete pas a pas, a ton rythme.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Button
                size="lg"
                asChild
                className="rounded-xl px-6 py-6 text-base font-semibold shadow-lg"
              >
                <a
                  href={product.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Commencer le parcours
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm text-slate-600 px-5">
                <Lock className="w-4 h-4 text-primary" />
                Paiement securise - Accès immediat
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Accès instantané
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Paiement via Stripe
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Ebook telechargeable
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="rounded-2xl shadow-2xl bg-white px-6 py-5 pt-6 border border-slate-100">
              <div className="relative flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-md object-contain drop-shadow-2xl rotate-3 mt-8"
                />
                <div className="absolute -bottom-4 left-4 rounded-full bg-white px-4 py-2 shadow-md text-sm font-semibold">
                  {product.price}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Arguments */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Tu n'es pas anxieux parce que tu es faible.
            </h3>
            <p className="text-slate-700">
              Ni parce que tu ne fais "pas assez d'efforts".
            </p>
            <p className="text-slate-700">
              Souvent, l'anxiete persiste parce que ton corps ne suit pas encore
              ce que tu comprends mentalement.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ce que ce n'est pas
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                une therapie
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                une solution instantanee
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                une obligation
              </li>
            </ul>
          </div>
        </div>

        {/* Infos courtes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Je m'appelle
              </p>
              <h4 className="text-lg font-semibold text-slate-900">
                Johara Boudjenane
              </h4>
              <p className="text-slate-700">
                Psychologue. Je t'accompagne pas a pas pour apaiser ton anxiete.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Support humain
              </p>
              <h4 className="text-lg font-semibold text-slate-900">
                Une question sur l'achat ou le telechargement ?
              </h4>
              <p className="text-slate-700">
                Ecris-moi, je reponds rapidement pour que tu puisses commencer
                ton parcours sans friction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bloc bas : paiement + prix */}
        <Card className="rounded-2xl shadow-md border border-slate-100 mt-16 mb-16">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">
                  Paiement 100 % securise via Stripe
                </p>
                <p className="text-sm text-slate-700">
                  Transactions chiffrees, aucune donnee bancaire stockee. Acces
                  immediat a l'ebook apres paiement.
                </p>
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Version brochee sur Amazon
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-slate-900">
                {product.price}
              </span>
              <Button
                size="lg"
                asChild
                className="rounded-xl px-5 py-6 text-base font-semibold shadow-lg"
              >
                <a
                  href={product.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Acheter
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

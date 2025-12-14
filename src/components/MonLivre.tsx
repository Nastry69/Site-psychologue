import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Lock,
  CheckCircle2,
  Info,
  ArrowRight,
  BookOpen,
  Globe,
  Calendar,
  FileText,
  Users,
  CheckCircle2Icon,
} from "lucide-react";

export default function MonLivre() {
  const product = {
    title: "5 seances d'auto-therapie pour se liberer de l'anxiete",
    image: "/assets/Tablette.png",
    price: "19,99 €",
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
              Si tu te reconnais, ce parcours a été conçu pour toi.
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
                Paiement securisé - Accès immediat
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Accès instantané
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Paiement via Stripe
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Ebook téléchargeable
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
              Un parcours guidé, pensé pour respecter ton rythme
            </h3>
            <p>Cet e-book propose un travail personnel guidé, structuré en 5 séances d’auto-thérapie, inspirées de ma pratique clinique.</p>
            <ul className="space-y-4 text-slate-700 list-disc list-inside">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                avancer en autonomie, à ton rythme
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                t’appuyer sur des repères clairs et structurants
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                réaliser des exercices concrets et accessibles
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                prendre des temps de réflexion guidés
              </li>
            </ul>

          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ce que tu trouveras dans ce parcours
            </h3>
            <p>Chaque séance t’invite à :</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                mieux comprendre ce qui se joue en toi
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                apaiser progressivement ton système nerveux
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                sortir du contrôle permanent
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                avancer sans pression, sans performance, sans injonction
              </li>
            </ul>
          </div>
        </div>

        {/* Infos courtes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Qui suis-je ?
              </p>
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <img
                  src="assets/jo.jpg"
                  alt="Johara Boudjenane, psychologue"
                  className="w-20 h-20 rounded-full object-cover border border-slate-200"
                />
          </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Je m’appelle Johara Boudjenane, je suis psychologue.
                </h4>
                <p className="text-slate-700">
                  Ce parcours est né de ce que j’observe chaque semaine en consultation :
                  des personnes intelligentes, sensibles, conscientes…
                  mais épuisées de lutter contre leur anxiété. <br />
                  <br />J’ai souhaité créer un support accessible, humain et structurant,
                  pour permettre d’avancer sans se brusquer,
                et sans se sentir seul face à ce que l’on traverse.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Infos pratiques
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <BookOpen className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Nombre de pages :</strong> 77
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Globe className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Langue :</strong> Français
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Calendar className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Date de publication :</strong> 2 Décembre 2025
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Format :</strong> eBook (PDF)
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Users className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Public :</strong> Adolescents & adultes
                  </span>
                </li>
              </ul>
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
                  Paiement 100 % sécurisé via Stripe
                </p>
                <p className="text-sm text-slate-700">
                  Transactions chiffrées. Accès
                  immediat a l'ebook après paiement.
                </p>
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Version brochée sur Amazon
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

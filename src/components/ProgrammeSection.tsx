import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Lock,
  CheckCircle2,
  Info,
  ArrowRight,
  Video,
  Clock,
  FileText,
  Users,
  ShieldCheck,
  Brain,
  Compass,
} from "lucide-react";

export default function Programme() {
  const product = {
    title: "Retrouver de la clarté dans une relation qui épuise",
    subtitle:
      "",
    image: "/assets/plage.png",
    price: "59 €",
    paymentLink: "https://buy.stripe.com/bJefZg5Ty1sAdABcBqaIM01",
    duration: "~52 minutes",
    modulesCount: 6,
    format: "Progamme vidéo en ligne",
    public: "Adolescents & adultes",
    access: "Accès immédiat après paiement",
    includes: "Guide d’accueil inclus (PDF)",
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col space-y-24">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-lg uppercase tracking-wide text-[#000000] font-semibold">
                Programme vidéo • {product.duration}
              </p>

              <h1 className="text-4xl md:text-[2.90rem] font-bold leading-tight text-slate-900">
                {product.title}
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl">
                {product.subtitle}
              </p>

              <p className="text-base text-slate-700 max-w-2xl">
                Un programme vidéo pour comprendre ce qui se joue dans une relation qui t’épuise,
                et retrouver de la clarté intérieure, sans te forcer à décider.
              </p>
            </div>

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
                  Accéder au programme — {product.price}
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm text-slate-600 px-5">
                <Lock className="w-4 h-4 text-primary" />
                Paiement sécurisé - Accès immédiat
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Accès immédiat
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                {product.modulesCount} modules
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Guide d’accueil inclus
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="rounded-2xl shadow-2xl bg-white px-6 py-5 pt-6 border border-slate-100">
              <div className="relative flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-md object-contain drop-shadow-2xl rotate-2 mt-8"
                />
                <div className="absolute -bottom-4 left-4 rounded-full bg-white px-4 py-2 shadow-md text-sm font-semibold">
                  {product.price}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 2 COLONNES — POUR QUI / CE QUE ÇA APPORTE */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ce programme s’adresse à toi si…
            </h3>
            <p className="text-slate-700">
              Si tu vis au moins 3 de ces éléments :
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                fatigue mentale persistante liée à la relation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                rumination, confusion, perte de clarté
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                sentiment de devoir constamment se justifier
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                difficulté à se positionner sans culpabilité
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                doute sur ses perceptions, ses émotions, sa légitimité
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                ambivalence forte : vouloir partir / vouloir rester
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                espoir de réparation malgré l’épuisement
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                sentiment que “quelque chose ne va pas” sans réussir à le nommer
              </li>
            </ul>

            <p className="text-slate-700 font-semibold">
              → Tu as surtout besoin de clarté intérieure.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ce que ce programme va t’apporter concrètement
            </h3>
            <p className="text-slate-700">
              Pas de recettes toutes faites. Pas d’injonction à agir. Un cadre structuré pour comprendre.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                comprendre pourquoi ta pensée se brouille dans cette relation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                repérer les mécanismes relationnels qui entretiennent le doute
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                différencier ce qui t’appartient de ce qui ne t’appartient pas
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                sortir progressivement de l’auto-accusation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] mt-1" />
                retrouver une cohérence intérieure, même sans décision immédiate
              </li>
            </ul>

            <div className="pt-3">
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
                  Accéder au programme — {product.price}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* INFOS PRATIQUES + QUI JE SUIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Qui suis-je ?
              </p>

              <div className="flex items-start gap-4">
                <img
                  src="assets/jo.jpg"
                  alt="Johara Boudjenane, psychologue"
                  className="w-20 h-20 rounded-full object-cover border border-slate-200"
                />
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Je m’appelle Johara Boudjenane, je suis psychologue.
                  </h4>
                  <p className="text-slate-700">
                    Ce programme est née de ce que j’observe régulièrement en consultation :
                    des personnes intelligentes, sensibles, réfléchies…
                    mais profondément désorientées par une relation qui les fait douter d’elles-mêmes.
                    <br />
                    <br />
                    J’ai créé ce parcours pour offrir un espace structuré, accessible et respectueux,
                    pour comprendre sans se brusquer, et retrouver des repères internes plus fiables.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-slate-700">
                <p className="font-semibold text-slate-900 mb-1">Cadre</p>
                <p className="text-sm">
                  Ce programme ne remplace pas un suivi thérapeutique.
                  Si ta souffrance est très intense ou envahissante, un accompagnement individuel sera plus adapté.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                Infos pratiques
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Durée :</strong> {product.duration}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Video className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Format :</strong> {product.format}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FileText className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Inclus :</strong> {product.includes}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Users className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Public :</strong> {product.public}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                  <span>
                    <strong>Accès :</strong> {product.access}
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <p className="text-slate-900 font-semibold text-lg">
                  Prix : {product.price}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* BLOC BAS : PAIEMENT + PRIX */}
        <Card className="rounded-2xl shadow-md border border-slate-100 mt-16 mb-16">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Info className="w-5 h-5 text-primary" />
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-slate-900">
                  Paiement 100 % sécurisé
                </p>
                <p className="text-sm text-slate-700">
                  Transactions chiffrées. Accès immédiat au programme après paiement.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <Lock className="w-4 h-4 text-primary" />
                  Paiement via Stripe
                </div>
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
                  Accéder
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Micro-ligne finale (optionnelle) */}
        <p className="text-center text-sm text-slate-500">
          Besoin d’un format plus adapté à ta situation ?{" "}
          <a href="contact" className="font-semibold text-primary hover:underline">
            Me contacter
            <ArrowRight className="inline w-4 h-4 ml-1" />
          </a>
        </p>
      </div>
    </section>
  );
}

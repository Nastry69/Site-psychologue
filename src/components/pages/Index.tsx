import { Helmet } from "react-helmet-async";

import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MonLivre from "@/components/MonLivre";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Psychologue à Lyon | Johara Boudjenane</title>
        <meta
          name="description"
          content="Psychologue à Lyon : thérapie individuelle, couple, familiale, sexologie et bilans QI (WISC-V, WAIS-IV). Consultations au cabinet et en visio."
        />
        <link rel="canonical" href="https://johara-boudjenane-psychologue.fr/" />

        {/* Open Graph */}
        <meta property="og:title" content="Psychologue à Lyon | Johara Boudjenane" />
        <meta
          property="og:description"
          content="Thérapie individuelle, couple, familiale, sexologie, bilans QI (WISC-V, WAIS-IV). Cabinet et visio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johara-boudjenane-psychologue.fr/" />
      </Helmet>

      <BarInfo />
      <Header />
      <main>
        <HeroSection />
        <MonLivre />
        <AboutSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

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
      <BarInfo/>
      <Header />
      <main>
        <MonLivre/>
        <HeroSection />
        <AboutSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

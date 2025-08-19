import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import PricingSection from "@/components/tarif";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <BarInfo />
      <Header />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
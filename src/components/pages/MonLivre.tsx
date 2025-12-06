import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import MonLivreSection from "@/components/MonLivre";
import Footer from "@/components/Footer";

const MonLivre = () => {
  return (
    <div className="min-h-screen">
      <BarInfo />
      <Header />
      <main className="pt-20">
        <MonLivreSection />
      </main>
      <Footer />
    </div>
  );
};

export default MonLivre;

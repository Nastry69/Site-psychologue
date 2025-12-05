// pages/shop.tsx
import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import ShopSection from "@/components/Shop";
import Footer from "@/components/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <BarInfo />
      <Header />
      <main className="pt-20">
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

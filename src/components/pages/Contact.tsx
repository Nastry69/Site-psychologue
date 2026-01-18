import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Contact = () => {
    return (
        <div className="min-h-screen">
            <BarInfo />
            <Header />
            <main className="pt-20 md:pt-24">
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
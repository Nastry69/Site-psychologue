import BarInfo from "@/components/BarInfo";
import Header from "@/components/Header";
import FormationSection from "@/components/ProgrammeSection";
import Footer from "@/components/Footer";

const Programme = () => {
    return (
        <div className="min-h-screen">
            <BarInfo />
            <Header />
            <main className="pt-20 md:pt-24">
                <FormationSection />
            </main>
            <Footer />
        </div>
    );
};

export default Programme;
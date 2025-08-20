import { Button } from "@/components/ui/button";
//import heroImage from "../assets/image.png";

const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[75px]">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/image.png" 
          alt="Cabinet de psychologie accueillant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 pt-[150px] relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Consultation au cabinet et <span className="inline text-primary">téléconsultation</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToAppointment}
              className="shadow-soft"
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
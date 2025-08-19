import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-background px-4">
        <Card className="max-w-lg w-full shadow-card border-0 text-center">
          <CardContent className="pt-12 pb-8 px-8">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Merci pour votre message !
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Votre demande a été envoyée avec succès.
              </p>
              <p className="text-muted-foreground">
                Je vous répondrai dans les 24 heures.
              </p>
            </div>
            
            <div className="bg-sage rounded-lg p-4 mb-6">
              <p className="text-sage-foreground/80 text-sm">
                <strong>Prochaines étapes :</strong><br />
                • Vérifiez votre boîte mail<br />
                • Consultez vos spams si nécessaire<br />
                • Je vous contacte rapidement
              </p>
            </div>

            <Button 
              onClick={() => navigate('/')}
              className="w-full shadow-soft"
            >
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
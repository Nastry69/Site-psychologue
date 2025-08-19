import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou demande d'information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="shadow-card border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Informations de contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@johara-boudjenane-psychologue.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Téléphone</h4>
                    <p className="text-muted-foreground">07 78 51 91 72</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">
                      91 Avenue Francis de Pressensé<br />
                      69200 Vénissieux<br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-sage rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sage-foreground mb-3">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-sage-foreground/80">
                <div className="flex justify-between">
                  <span>Lundi - Jeudi</span>
                  <span>8h00 - 21h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span>Fermé</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>Fermé</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>

              <form 
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6">
                
                <input type="hidden" name="access_key" aria-hidden="true" value="c43b3003-d51a-4717-891a-74daeefe8ec3" />
                <input type="hidden" name="redirect" value="http://localhost:8080/merci"/>
                <input type="checkbox" name="botcheck" aria-hidden="true" className="hidden" style={{ display: "none" }} />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      name = "name"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name = "email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input
                    name = "phone"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Objet de votre demande</Label>
                  <Select name = "subject" value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un objet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="question">Question</SelectItem>
                      <SelectItem value="devis">Devis</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name = "message"
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full shadow-soft">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
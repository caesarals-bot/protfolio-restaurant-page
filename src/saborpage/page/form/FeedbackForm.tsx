import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { StarRating } from "./component/StarRating";
import { toast } from "@/saborpage/hooks/use-toast";
import servicioBg from "@/assets/servicio.webp";

export const FeedbackForm = () => {
  const [ratings, setRatings] = useState({
    service: 0,
    attention: 0,
    food: 0,
    facilities: 0,
    cleanliness: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.contact) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingresa tu email o teléfono para recibir respuesta.",
        variant: "destructive",
      });
      return;
    }

    const hasRatings = Object.values(ratings).some(rating => rating > 0);
    if (!hasRatings && !formData.comments) {
      toast({
        title: "Feedback requerido",
        description: "Por favor califica al menos una categoría o deja un comentario.",
        variant: "destructive",
      });
      return;
    }

    // Success
    toast({
      title: "¡Gracias por tu feedback!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setRatings({
      service: 0,
      attention: 0,
      food: 0,
      facilities: 0,
      cleanliness: 0,
    });
    setFormData({ name: "", contact: "", comments: "" });
  };

  const handleGoogleSignIn = () => {
    toast({
      title: "Próximamente",
      description: "La autenticación con Google estará disponible pronto.",
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${servicioBg})` }}
    >
      <section className="flex-1 flex items-center justify-center pt-24 pb-12 md:pt-28 md:pb-20 bg-black/70 backdrop-blur-sm text-stone-100">
        <div className="container mx-auto px-4">
          <Card className="w-full max-w-lg mx-auto shadow-2xl bg-white/95 border border-yellow-500/20">
            <CardHeader className="space-y-2 pb-4">
              <h2 className="text-2xl font-bold text-stone-900 text-center">
                Tu opinión nos importa, y te responderemos.
              </h2>
              <p className="text-stone-600 text-center">
                Por favor, déjanos saber cómo fue tu experiencia.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
          {/* Google Sign In */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-stone-200 bg-white text-stone-900 hover:bg-yellow-500 hover:text-stone-900 hover:border-yellow-400"
            onClick={handleGoogleSignIn}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Identificarse con Google
          </Button>

          {/* Separator */}
          <div className="relative">
            <Separator className="bg-stone-200" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-stone-500">
              O déjanos tu feedback como invitado
            </span>
          </div>

          {/* Guest Info */}
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-stone-700">
                Nombre (Opcional)
              </Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact" className="text-stone-700">
                Email o Teléfono (para recibir respuesta)
              </Label>
              <Input
                id="contact"
                placeholder="correo@ejemplo.com o +1234567890"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
              />
            </div>
          </div>

          <Separator className="bg-stone-200" />

          {/* Ratings Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-stone-800">
              Califica tu experiencia (1 a 5 estrellas)
            </h3>

            {[
              { key: "service" as const, label: "Servicio" },
              { key: "attention" as const, label: "Atención" },
              { key: "food" as const, label: "Comida" },
              { key: "facilities" as const, label: "Instalaciones" },
              { key: "cleanliness" as const, label: "Aseo" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between gap-3">
                <Label className="min-w-[120px] text-stone-700">{label}</Label>
                <StarRating
                  value={ratings[key]}
                  onChange={(value) => setRatings({ ...ratings, [key]: value })}
                />
              </div>
            ))}
          </div>

          {/* Comments */}
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-stone-800">Comentarios adicionales</h3>
            <Textarea
              placeholder="Cuéntanos más sobre tu experiencia, qué te gustó o qué podemos mejorar..."
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows={3}
              className="resize-none bg-white"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            Enviar Mi Opinión
          </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

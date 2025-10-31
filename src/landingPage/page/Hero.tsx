import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Users } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [date, setDate] = useState<Date>();

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 tracking-tight">
          Experiencia Culinaria<br />Inolvidable
        </h1>

        <Card className="max-w-3xl mx-auto bg-card/10 backdrop-blur-xl border-border/20 shadow-2xl">
          <div className="p-6 md:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1.1fr_auto] gap-3 md:gap-4">
              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg bg-card/80 backdrop-blur-sm border-border/50 px-3 text-sm">
                  <SelectValue placeholder="Seleccionar Sucursal" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="centro">Centro</SelectItem>
                  <SelectItem value="terraza">Terraza</SelectItem>
                  <SelectItem value="clasica">Clásica</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg bg-card/80 backdrop-blur-sm border-border/50 px-3 text-sm">
                  <Users className="mr-2" aria-hidden="true" />
                  <SelectValue placeholder="N° de Personas" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="1">1 Persona</SelectItem>
                  <SelectItem value="2">2 Personas</SelectItem>
                  <SelectItem value="3">3 Personas</SelectItem>
                  <SelectItem value="4">4 Personas</SelectItem>
                  <SelectItem value="5">5+ Personas</SelectItem>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "h-10 w-full rounded-lg justify-start text-left font-normal bg-card/80 backdrop-blur-sm border-border/50 px-3 text-sm",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date ? format(date, "PPP", { locale: es }) : <span>Fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Button
                variant="gold"
                size="sm"
                className="h-10 w-full rounded-lg text-sm font-semibold md:w-auto md:px-6"
              >
                Buscar Mesa
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;

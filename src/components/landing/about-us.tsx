import Image from "next/image";
import { AnimatedSection } from "../animated-section";

export function AboutUs() {
  return (
    <AnimatedSection id="quienes-somos" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold bg-secondary py-1 px-3 rounded-full">Quiénes Somos</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              Pasión por Apple y por Sevilla
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nacimos de la pasión por la tecnología de Apple y el compromiso con la sostenibilidad. En Mac-Out, creemos que la calidad no tiene por qué ser cara ni perjudicial para el planeta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Seleccionamos, verificamos y ponemos a punto cada dispositivo para que disfrutes de la experiencia Apple como si fuera nuevo. Somos tu tienda de confianza en Sevilla.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/600/500"
              alt="Equipo de Mac-Out"
              width={600}
              height={500}
              data-ai-hint="team smiling"
              className="rounded-2xl shadow-lg aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

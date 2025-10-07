import Image from "next/image";
import { AnimatedSection } from "../animated-section";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative h-[80vh] md:h-screen min-h-[500px] w-full text-white">
      <Image
        src="https://iili.io/KlQyBmG.jpg" 
        alt="Logo de Macout sobre un fondo de cubos azules y negros"
        fill
        priority
        className="object-cover md:object-center"
        data-ai-hint="logo company background"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full pt-20 md:pt-0 md:pb-24">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Tu Apple reacondicionado.
              <span className="block text-primary mt-2">
                 Calidad y ahorro.
              </span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
              Equipos 100% verificados, con garantía y al mejor precio. Directamente desde el corazón de Sevilla.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

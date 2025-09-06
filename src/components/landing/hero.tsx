import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative h-[80vh] min-h-[500px] w-full text-white">
      <Image
        src="https://picsum.photos/1200/800"
        alt="Paisaje de colinas con niebla al atardecer"
        fill
        priority
        className="object-cover"
        data-ai-hint="misty hills sunset"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-end h-full py-24">
        <div className="max-w-3xl text-left">
          <p className="text-sm text-gray-300 mb-2">Dale una segunda vida a la tecnología</p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Tu Apple reacondicionado.
              <span className="block text-primary mt-2">
                 Calidad y ahorro.
              </span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
              Equipos 100% verificados, con garantía y al mejor precio. Directamente desde el corazón de Sevilla.
          </p>
          <div className="mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-full shadow-lg transition-transform hover:scale-105 hover:bg-primary/90">
                  <Link href="#productos">
                      Ver Productos &#8594;
                  </Link>
              </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

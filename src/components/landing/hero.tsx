import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative bg-card overflow-hidden">
        <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <p className="text-sm text-muted-foreground mb-2">Dale una segunda vida a la tecnología</p>
                    <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Tu Apple reacondicionado.
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-lime-400 mt-2">
                           Calidad y ahorro.
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
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
                <div className="relative h-64 lg:h-auto">
                    <Image
                      src="https://picsum.photos/800/600"
                      alt="Colección de productos Apple reacondicionados"
                      width={800}
                      height={600}
                      data-ai-hint="apple products"
                      priority
                      className="rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                    />
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
}

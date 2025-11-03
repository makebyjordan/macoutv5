import Image from "next/image";
import { AnimatedSection } from "../animated-section";
import Link from "next/link";
import { MacOutLogo } from "../icons";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative h-screen w-full text-white">
      <Image
        src="https://iili.io/Kk6Z9Rt.jpg"
        alt="Logo de Macout sobre un fondo de cubos azules y negros"
        fill
        priority
        className="object-cover object-center"
        data-ai-hint="logo company background"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl text-center">
           <Link href="/" className="flex items-center justify-center">
                <div className="relative h-24 w-24">
                    <Image
                        src="https://iili.io/KQ5UldN.png"
                        alt="Macout Logo Manzana"
                        fill
                        className="object-contain"
                    />
                </div>
              <div className="relative h-[138.24px] w-[552.96px]">
                <Image
                    src="https://iili.io/KQRAU9s.png"
                    alt="Macout Logotipo"
                    fill
                    className="object-contain"
                />
              </div>
            </Link>
          <h1 className="font-headline text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Tu Apple reacondicionado.
          </h1>
          <p className="font-bold text-lg md:text-xl text-primary mt-2">Calidad y Ahorro</p>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
              Equipos 100% verificados,
              <br />
              con garantía y al mejor precio.
              <br />
              Directamente desde el corazón de Sevilla.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

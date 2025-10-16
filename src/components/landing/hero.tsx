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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl text-center">
           <Link href="/" className="flex items-center justify-center gap-4 mb-8">
              <MacOutLogo className="h-24 w-24 text-white" />
              <div className="font-headline text-5xl font-bold">
                <div className="">MAC</div>
                <div className="h-1 bg-white w-full"></div>
                <div className="-mt-2">OUT</div>
              </div>
            </Link>
          <h1 className="font-headline text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              Tu Apple reacondicionado.
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-200">
              Equipos 100% verificados, con garantía y al mejor precio. Directamente desde el corazón de Sevilla.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

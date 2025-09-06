import Image from "next/image";
import { AnimatedSection } from "../animated-section";

const images = [
    { src: "https://iili.io/KnvmVYG.webp", className: "col-span-2 row-span-2" },
    { src: "https://iili.io/KnvmjTl.webp", className: "" },
    { src: "https://iili.io/KnvmWvf.webp", className: "" },
];

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
            <div className="grid grid-cols-3 grid-rows-2 gap-2 h-96">
                {images.map((image, index) => (
                    <div key={index} className={`relative overflow-hidden rounded-2xl group ${image.className}`}>
                        <Image
                            src={image.src}
                            alt={`Equipo de Mac-Out ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

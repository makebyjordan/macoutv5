"use client";

import { ProductCard } from "../product-card";
import { useDashboard } from "@/hooks/use-dashboard";
import { AnimatedSection } from "../animated-section";

export function Products() {
  const { products, loading } = useDashboard();

  if (loading) {
    return (
       <AnimatedSection id="productos" className="py-16 sm:py-24">
         <div className="container mx-auto px-4">
           <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">
             Cargando productos...
           </h2>
         </div>
       </AnimatedSection>
    )
  }

  return (
    <AnimatedSection id="productos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">
          Nuestros Equipos Estrella
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-muted-foreground">No hay equipos disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...products].reverse().slice(0, 8).map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

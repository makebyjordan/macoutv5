import { MacOutLogo } from "../icons";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
];

const footerLinks = {
  productos: [
    { href: "#productos", label: "MacBook" },
    { href: "#productos", label: "iPhone" },
    { href: "#productos", label: "iPad" },
    { href: "#productos", label: "Watch" },
  ],
  soporte: [
    { href: "#contacto", label: "Contacto" },
    { href: "#", label: "Preguntas Frecuentes" },
    { href: "#", label: "Garantía" },
  ],
  legal: [
    { href: "#", label: "Términos y Condiciones" },
    { href: "#", label: "Política de Privacidad" },
    { href: "#", label: "Política de Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-4 lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 mb-4">
              <MacOutLogo className="h-10 w-10 text-accent" />
              <span className="font-headline text-2xl font-semibold">Mac-Out</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Calidad y sostenibilidad en el corazón de Sevilla. Tu Apple reacondicionado de confianza.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Mac-Out. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                aria-label={link.name}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

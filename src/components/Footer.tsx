import { Mail, Instagram, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/55d2f91610201f8147c97f9da3d3abab95b0be3a.png";
import logoFooter from "../assets/footer-logo-new.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Logo/Brand */}
          <div className="mb-8">
            <ImageWithFallback
              src={logoFooter}
              alt="E3 Educação"
              className="h-16 w-auto mx-auto"
            />
          </div>

          <p className="text-2xl md:text-3xl text-neutral-200 leading-relaxed mb-6 max-w-3xl mx-auto">
            Crescimento não é sorte, é método.
          </p>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            A{" "}
            <span className="text-orange-400">E3 Educação</span>{" "}
            existe para que você pare de improvisar e comece a
            gerir sua advocacia como o negócio que ela é.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="group p-4 bg-neutral-800/50 hover:bg-orange-600 rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="group p-4 bg-neutral-800/50 hover:bg-orange-600 rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="group p-4 bg-neutral-800/50 hover:bg-orange-600 rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-500 text-sm">
            © 2025 E3 Educação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
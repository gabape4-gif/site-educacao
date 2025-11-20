import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/hero-new.jpg";
import logoImage from "../assets/logo-new.png";

export function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Logo no topo */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <ImageWithFallback
            src={logoImage}
            alt="E3 Educação"
            className="h-20 w-auto pt-[0px] pr-[0px] pb-[9px] pl-[0px] mx-[0px] my-[-15px]"
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Orange Accent Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-orange-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-orange-600/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-sm text-orange-700">Ecossistema de Crescimento Jurídico</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-black">
              <span className="block opacity-0" style={{
                animation: 'fadeInSlide 0.6s ease-out forwards',
                animationDelay: '0s'
              }}>
                A nova era da advocacia
              </span>
              <span className="block opacity-0" style={{
                animation: 'fadeInSlide 0.6s ease-out forwards',
                animationDelay: '0.6s'
              }}>
                começa com <span className="text-orange-600">gestão, método</span>
              </span>
              <span className="block opacity-0" style={{
                animation: 'fadeInSlide 0.6s ease-out forwards',
                animationDelay: '1.2s'
              }}>
                e <span className="text-orange-600">crescimento previsível</span>.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-neutral-600 leading-relaxed">
              Transforme seu escritório em um verdadeiro negócio jurídico: mais estratégia, cultura, liderança e clientes certos, sem depender de sorte ou indicação.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              {[
                "Clareza de direção: do diagnóstico ao plano de crescimento",
                "Gestão, cultura e comercial estruturados para o dia a dia",
                "Métodos aplicados por quem vive o jurídico na prática"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 p-1.5 bg-orange-600 rounded-full group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-neutral-700 flex-1">{item}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToCTA}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Quero crescer meu escritório
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToAbout}
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 text-neutral-700 hover:border-orange-600 hover:text-orange-600 px-8 py-6 text-lg transition-all duration-300"
              >
                Ver como funciona
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl text-orange-600">500+</p>
                <p className="text-sm text-neutral-600">assessorados</p>
              </div>
              <div>
                <p className="text-3xl text-orange-600">50M+</p>
                <p className="text-sm text-neutral-600">em honorários gerados</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <ImageWithFallback
                src={heroImage}
                alt="Escritório jurídico moderno"
                className="w-full h-full min-h-[800px] object-cover"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <p className="text-sm text-neutral-600 mb-3">Resultados comprovados</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl text-orange-600">12x</p>
                    <p className="text-sm text-neutral-700">crescimento médio</p>
                  </div>
                  <div>
                    <p className="text-2xl text-orange-600">85%</p>
                    <p className="text-sm text-neutral-700">taxa de sucesso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
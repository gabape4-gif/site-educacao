import { Quote, Star, Users, DollarSign, Compass } from "lucide-react";
import { Button } from "./ui/button";
import { StatCard } from "./shared/StatCard";
import { SectionBadge } from "./shared/SectionBadge";

export function SocialProof() {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      number: "+ de 500",
      label: "escritórios e advogados assessorados"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-orange-500" />,
      number: "+ de 50 milhões",
      label: "gerados em honorários"
    },
    {
      icon: <Compass className="w-10 h-10 text-orange-500" />,
      label: "Escritórios saindo da improvisação e construindo rotinas de gestão, cultura e crescimento previsível"
    }
  ];

  const testimonials = [
    {
      quote: "Antes eu tinha um escritório ocupado. Depois da metodologia, tenho um escritório em crescimento.",
      author: "[Nome do cliente]"
    },
    {
      quote: "Parar para olhar o escritório como empresa mudou nossa forma de decidir, de investir e de crescer.",
      author: "[Nome do cliente]"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Orange glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="mb-6">
            {/* Badge removed */}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Números e resultados que{" "}
            <span className="text-orange-400">sustentam o discurso</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              variant="dark"
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-3xl p-10 border border-neutral-700/50 hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <blockquote className="text-xl text-neutral-200 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-orange-400">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl text-neutral-300 mb-8 leading-relaxed">
            Faça parte da próxima geração de escritórios estruturados
          </p>
          <Button
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
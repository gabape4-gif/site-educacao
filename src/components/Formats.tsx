import { BookOpen, Calendar, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionBadge } from "./shared/SectionBadge";

export function Formats() {
  const formats = [
    {
      icon: BookOpen,
      title: "Playbooks estratégicos por área",
      description: "Mapas práticos dos produtos, serviços e estratégias que mais funcionam em cada segmento jurídico.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Calendar,
      title: "Planos de crescimento e planejamento anual para escritórios",
      description: "Estruturação macro de um ano, com foco em metas, campanhas, cultura e rotina de gestão.",
      gradient: "from-orange-600 to-orange-700"
    },
    {
      icon: GraduationCap,
      title: "Conteúdos e treinamentos focados em gestão, marketing, vendas e liderança jurídica",
      description: "Tudo o que a faculdade não te entregou, com foco em prática, números e decisão.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Acompanhamento e comunidade de crescimento jurídico",
      description: "Um ambiente pra trocar, ajustar rota e manter o crescimento vivo no dia a dia.",
      gradient: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-96 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="mb-6">
            <SectionBadge variant="light">Formatos</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8">
            O que você encontra dentro da{" "}
            <span className="text-orange-600">E3 Educação</span>
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            A E3 Educação foi pensada para atender diferentes momentos do escritório e da carreira jurídica. Entre nossos formatos, você encontrará:
          </p>
        </div>

        {/* Formats Grid */}
        <div className="space-y-6 mb-20 max-w-5xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 border-2 border-neutral-200 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className={`flex-shrink-0 p-5 bg-gradient-to-br ${format.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <format.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-3 text-neutral-900">
                    {format.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {format.description}
                  </p>
                </div>

                {/* Arrow - visible on hover */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </div>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${format.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
                Quer saber qual formato se encaixa no momento do seu escritório?
              </p>
              <Button
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-orange-600 hover:bg-neutral-100 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Falar com nosso time
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Compass, Users, Megaphone, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { SectionBadge } from "./shared/SectionBadge";

export function Pillars() {
  const pillars = [
    {
      icon: Compass,
      number: "01",
      title: "Diagnóstico e direção",
      items: [
        "Entendimento claro do momento do escritório",
        "Leitura de indicadores, funil, posicionamento e oportunidades",
        "Definição do plano: onde estamos e onde queremos chegar"
      ]
    },
    {
      icon: Users,
      number: "02",
      title: "Gestão, cultura e liderança",
      items: [
        "Alinhamento entre sócios",
        "Definição de cultura e responsabilidades",
        "Rotina de gestão e acompanhamento de números"
      ]
    },
    {
      icon: Megaphone,
      number: "03",
      title: "Marketing e posicionamento jurídico",
      items: [
        "Posicionamento estratégico nas redes",
        "Conteúdo com objetivo (não só 'postar por postar')",
        "Jornada do cliente e funis minimamente estruturados"
      ]
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Comercial e previsibilidade",
      items: [
        "Organização do fluxo de atendimento e fechamento",
        "Construção de previsibilidade de entrada de honorários",
        "Visão de crescimento sustentável, e não só 'picos' de faturamento"
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold">
            Como transformamos <span className="text-orange-600">escritórios jurídicos</span> em{" "}
            <span className="text-orange-600">negócios jurídicos</span>
          </h2>
          <p className="text-2xl text-neutral-600 mt-8 font-normal">
            Trabalhamos em pilares que sustentam o crescimento:
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 md:p-10 border border-neutral-200 hover:border-orange-600 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                {pillar.number}
              </div>

              {/* Icon */}
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:shadow-md transition-shadow">
                <pillar.icon className="w-8 h-8 text-orange-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl mb-6 text-neutral-900 font-semibold">
                {pillar.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0"></div>
                    <p className="text-neutral-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-neutral-600 mb-6 font-normal">
            Pronto para implementar esses pilares no seu escritório?
          </p>
          <Button
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            Começar minha transformação
          </Button>
        </div>
      </div>
    </section>
  );
}
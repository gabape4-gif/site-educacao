import { Target, TrendingUp, Users, Award, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { SectionBadge } from "./shared/SectionBadge";

export function About() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "escritórios e advogados assessorados"
    },
    {
      icon: TrendingUp,
      number: "50M+",
      label: "gerados em honorários para nossa comunidade"
    },
    {
      icon: Target,
      number: "15+",
      label: "anos de experiência no jurídico"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Diagnóstico preciso",
      description: "Entendemos seu momento e desafios únicos"
    },
    {
      icon: Target,
      title: "Método aplicado",
      description: "Ferramentas práticas para o dia a dia"
    },
    {
      icon: Zap,
      title: "Acompanhamento real",
      description: "Suporte constante na implementação"
    }
  ];

  return (
    <section id="about-section" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-1/3 h-96 bg-gradient-to-l from-orange-50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <SectionBadge variant="light">Quem Somos</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            <span className="text-orange-600">E3 Educação</span>: o ecossistema de crescimento jurídico
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A E3 Educação nasce como o braço educacional focado em crescimento jurídico, unindo visão de negócio, marketing, vendas e gestão aplicada.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-orange-50/30 border border-orange-200/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              
              <div className="relative">
                <div className="inline-flex p-4 bg-orange-600 rounded-2xl mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                {stat.number && (
                  <p className="text-4xl text-orange-600 mb-3">{stat.number}</p>
                )}
                <p className="text-neutral-700 leading-relaxed">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Focus statement */}
          <div className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-3xl p-12">
            <h3 className="text-3xl mb-6">
              Nosso foco é simples:
            </h3>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              tirar a advocacia da improvisação e levar para um modelo de negócio estruturado, previsível e escalável.
            </p>
            <div className="border-l-4 border-orange-500 pl-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Não vendemos "fórmulas mágicas" nem atalhos. Trabalhamos com diagnóstico, método, execução e acompanhamento.
              </p>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl text-neutral-900 mb-8">
              Como fazemos isso:
            </h3>
            {values.map((value, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-600 transition-colors">
                  <value.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-neutral-900 mb-2">{value.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-6 text-lg transition-all duration-300"
          >
            Conhecer o ecossistema E3
          </Button>
        </div>
      </div>
    </section>
  );
}
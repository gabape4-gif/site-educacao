import { Dices, TrendingDown, Clock, Target } from "lucide-react";
import { Button } from "./ui/button";
import { FeatureCard } from "./shared/FeatureCard";

export function Problem() {
  const problems = [
    {
      title: "Dependendo de indicação",
      description: "Dependendo apenas de indicação e sorte.",
      icon: <Dices className="w-10 h-10 text-orange-500" />
    },
    {
      title: "Sem clareza de números",
      description: "Sem clareza de números, metas e plano de crescimento.",
      icon: <TrendingDown className="w-10 h-10 text-orange-500" />
    },
    {
      title: "Afogados na operação",
      description: "Com sócios afogados na operação e sem tempo pra estratégia.",
      icon: <Clock className="w-10 h-10 text-orange-500" />
    },
    {
      title: "Sem posicionamento",
      description: "Produzindo conteúdo sem direção, sem posicionamento e sem funil.",
      icon: <Target className="w-10 h-10 text-orange-500" />
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Orange glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8">
            A maioria dos escritórios ainda é gerida como{" "}
            <span className="text-orange-500">profissão</span>, não como{" "}
            <span className="text-orange-500">empresa</span>.
          </h2>

          <p className="text-xl text-neutral-300 leading-relaxed">
            A faculdade te ensinou Direito. Mas ninguém te ensinou a gestão, cultura, liderança, marketing e vendas que constroem um escritório sólido, previsível e lucrativo.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mb-16">
          <p className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto text-center">
            Enquanto isso, muitos escritórios vivem:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <FeatureCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                variant="dark"
              />
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-transparent border-l-4 border-orange-500 rounded-2xl p-8 md:p-12">
            <p className="text-2xl text-center text-neutral-100 leading-relaxed mb-8">
              Se você sente que já poderia estar em outro nível, mas falta{" "}
              <span className="text-orange-400">método e direção</span>, é aqui que a{" "}
              <span className="text-orange-400">E3 Educação</span> entra.
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Quero estruturar meu crescimento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
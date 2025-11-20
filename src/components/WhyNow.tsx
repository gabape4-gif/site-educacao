import { Plus, ArrowRight, Zap, Scale, Smartphone, Target } from "lucide-react";
import { Button } from "./ui/button";
import { SectionBadge } from "./shared/SectionBadge";

export function WhyNow() {
  const combinations = [
    { left: "Direito", right: "gestão", icon: <Scale className="w-10 h-10 text-orange-600" /> },
    { left: "Conteúdo", right: "posicionamento", icon: <Smartphone className="w-10 h-10 text-orange-600" /> },
    { left: "Estratégia", right: "execução", icon: <Target className="w-10 h-10 text-orange-600" /> }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <SectionBadge variant="light">Por Que Agora</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8 max-w-4xl mx-auto">
            O mercado jurídico mudou.{" "}
            <span className="text-orange-600">A forma de gerir escritórios também precisa mudar.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-16">
          <p className="text-2xl text-neutral-700 text-center leading-relaxed max-w-3xl mx-auto">
            Advocacia não é mais só técnica. Quem cresce hoje une:
          </p>

          {/* Combinations */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {combinations.map((combo, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">{combo.icon}</div>
                
                {/* Combination */}
                <div className="flex flex-col items-center gap-3">
                  <span className="text-xl text-neutral-900 px-4 py-2 bg-orange-50 rounded-xl w-full text-center">
                    {combo.left}
                  </span>
                  <div className="p-2 bg-orange-600 rounded-full">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl text-neutral-900 px-4 py-2 bg-orange-50 rounded-xl w-full text-center">
                    {combo.right}
                  </span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Warning Message */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-neutral-900 to-black text-white rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex p-3 bg-orange-600/20 rounded-2xl mb-6">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Quem continuar operando no modo{" "}
                  <span className="text-orange-400">"apaga-incêndio"</span> e vivendo só de indicação,{" "}
                  <span className="text-orange-400">tende a ficar para trás</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-neutral-900 leading-relaxed mb-8">
              Se você sente que já passou da hora de estruturar o crescimento do seu escritório,{" "}
              <span className="text-orange-600">o próximo passo é seu</span>.
            </p>

            {/* CTA */}
            <Button
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Dar o próximo passo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
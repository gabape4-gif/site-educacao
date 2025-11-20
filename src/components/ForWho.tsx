import { Briefcase, TrendingUp, Users, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { SectionBadge } from "./shared/SectionBadge";

export function ForWho() {
  const profiles = [
    {
      icon: Briefcase,
      title: "Sócios e gestores",
      description: "de escritórios jurídicos",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Advogados estratégicos",
      description: "que entendem que crescimento é gestão, não sorte",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Users,
      title: "Times jurídicos",
      description: "que precisam de cultura, processo e direção clara",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Estudantes e jovens advogados",
      description: "que querem pensar como empresários desde cedo",
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="mb-6">
            <SectionBadge variant="light">Para Quem É</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8">
            Para quem é a <span className="text-orange-600">E3 Educação</span>
          </h2>
          <p className="text-2xl text-neutral-700 leading-relaxed">
            A E3 Educação é pra você que quer tratar seu escritório como empresa e sua carreira como um projeto de longo prazo.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-neutral-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity pointer-events-none`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`mb-6 p-4 bg-gradient-to-br ${profile.color} rounded-2xl w-fit shadow-lg`}>
                  <profile.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl mb-3 text-neutral-900">{profile.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-neutral-900 to-black text-white rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl leading-relaxed mb-8">
                Se você olha pro seu escritório e sente que{" "}
                <span className="text-orange-400">"dá pra muito mais"</span>, mas falta método e visão de negócio,{" "}
                <span className="text-orange-400">você está no lugar certo</span>.
              </p>
              <Button
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Quero fazer parte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
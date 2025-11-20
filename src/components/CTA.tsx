import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, User, Lock, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SectionBadge } from "./shared/SectionBadge";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    type: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.whatsapp || !formData.email || !formData.type) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gabriel.e3digital@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Novo Lead do Site - E3 Educação",
          _replyto: formData.email,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        toast.success("Formulário enviado com sucesso! Em breve entraremos em contato.");
        setFormData({
          name: "",
          whatsapp: "",
          email: "",
          type: ""
        });
      } else {
        toast.error("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar o formulário. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Diagnóstico personalizado do seu escritório",
    "Acesso a metodologias comprovadas",
    "Comunidade de crescimento jurídico"
  ];

  return (
    <section id="cta-section" className="relative py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Orange gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-600/20 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-sm text-orange-700">Comece Agora</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl">
              Dê o primeiro passo na{" "}
              <span className="text-orange-600">nova era da advocacia</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-neutral-700 leading-relaxed">
              Preencha seus dados e receba os próximos passos para conectar seu escritório a uma jornada de crescimento com método, gestão e acompanhamento.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-orange-600 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-neutral-700">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-neutral-200">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white">
                    {i === 4 ? '500+' : ''}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600">
                Junte-se a <span className="text-orange-600">500+ profissionais</span> que já transformaram seus escritórios
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-neutral-200">
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl -z-10 blur-xl opacity-50"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-neutral-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-600" />
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-lg border-2 border-neutral-200 focus:border-orange-600 focus:ring-orange-600 rounded-xl"
                    placeholder="Seu nome"
                    disabled={isSubmitting}
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-neutral-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="h-12 text-lg border-2 border-neutral-200 focus:border-orange-600 focus:ring-orange-600 rounded-xl"
                    placeholder="(00) 00000-0000"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-600" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-lg border-2 border-neutral-200 focus:border-orange-600 focus:ring-orange-600 rounded-xl"
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-neutral-700">
                    Tipo de atuação
                  </Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    required
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="h-12 text-lg border-2 border-neutral-200 focus:border-orange-600 focus:ring-orange-600 rounded-xl">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="escritorio">Escritório</SelectItem>
                      <SelectItem value="advogado">Advogado</SelectItem>
                      <SelectItem value="estudante">Estudante</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl mt-8 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Quero fazer parte do ecossistema E3
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-sm text-center text-neutral-500 mt-4 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4 text-orange-600" />
                  Seus dados estão seguros. Sem spam. Só conteúdo e oportunidades reais para estruturar o crescimento do seu escritório.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
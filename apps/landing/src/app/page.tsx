"use client";

import React, { useState } from "react";
import { Button, Card, Input } from "@cetose/ui";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  };

  const features = [
    {
      title: "🥑 Nutrição Keto Inteligente",
      desc: "Um assistente virtual alimentado por inteligência artificial pronto para responder qualquer dúvida sobre cetose e alimentação cetogênica.",
      badge: "IA Integrada",
    },
    {
      title: "📖 E-book Cetose Consciente",
      desc: "O guia completo e definitivo de introdução, transição e manutenção da cetose de forma saudável e fundamentada.",
      badge: "Exclusivo",
    },
    {
      title: "📊 Calculadora de Macros",
      desc: "Calcule com precisão cirúrgica a sua taxa metabólica, gasto energético e proporção ideal de macros para dieta cetogênica.",
      badge: "Gratuito",
    },
    {
      title: "🍽️ Banco de Receitas Cetogênicas",
      desc: "Acesso a 50+ receitas rápidas, saborosas, práticas e testadas, todas detalhadas com sua respectiva contagem de macros.",
      badge: "50+ Pratos",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-teal-500/10 blur-[130px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-black/30">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥑</span>
          <span className="font-display font-extrabold text-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            Cetose Consciente
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://localhost:3001"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Área de Membros
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("http://localhost:3001", "_blank")}
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
          🚀 Plataforma Completa de Transformação
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight">
          Alcance a queima de gordura de forma{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            inteligente e duradoura
          </span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl font-normal max-w-3xl mb-10 leading-relaxed">
          Esqueça as dietas restritivas e dolorosas. Conecte-se com nossa IA de
          nutrição, acesse e-books exclusivos, calcule seus macros com exatidão e
          saboreie deliciosas receitas cetogênicas.
        </p>

        {/* CTA Form / Email Capture */}
        <div className="w-full max-w-lg mb-16 relative z-20">
          {success ? (
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-center animate-fade-in">
              🎉 <strong>Cadastro efetuado!</strong> Entraremos em contato assim
              que liberarmos novas vagas. Fique de olho no seu e-mail.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-xl"
            >
              <div className="flex-1">
                <Input
                  id="cta-email"
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="bg-transparent border-none text-white focus:ring-0 py-2.5"
                />
              </div>
              <Button type="submit" variant="primary" loading={loading}>
                Quero Acessar
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Grid Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma abordagem completa construída com tecnologia moderna para guiar
            sua jornada cetogênica do início ao sucesso definitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <Card
              key={feat.title}
              variant="glass"
              hover={true}
              className="flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-0.5 rounded-full">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-sm text-gray-500 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>🥑</span>
            <span className="font-display font-bold text-gray-300">
              Cetose Consciente
            </span>
          </div>
          <p className="m-0 text-xs">
            © 2026 Cetose Consciente. Criado com React 19 & Tailwind CSS v4.
          </p>
        </div>
      </footer>
    </div>
  );
}

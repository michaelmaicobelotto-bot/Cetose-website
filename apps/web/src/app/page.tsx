
export default function MemberAreaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8 md:p-24 relative overflow-hidden select-none">
      {/* Background Neon Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="z-10 w-full max-w-md border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
        {/* Glow border line on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Área de Membros
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white mb-2">
            Cetose <span className="text-primary bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Consciente</span>
          </h1>
          <p className="text-zinc-400 text-sm font-sans max-w-xs mx-auto">
            Seu assistente inteligente de nutrição cetogênica e queima de gordura.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Status Box */}
          <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-5 flex flex-col gap-3">
            <h3 className="font-display font-bold text-white text-sm">Status da Instalação</h3>
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Status do PWA:</span>
              <span className="font-semibold text-emerald-400 bg-emerald-950/30 px-2.5 py-0.5 rounded-full border border-emerald-900/30">
                Ativo & Offline-Ready
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Dispositivo:</span>
              <span id="pwa-device-status">Instalável como Aplicativo</span>
            </div>
          </div>

          {/* Quick onboarding suggestion */}
          <div className="text-center p-4 border border-primary/10 bg-primary/[0.02] rounded-2xl">
            <p className="text-zinc-300 text-xs leading-relaxed">
              O ecossistema digital está em fase de fundação técnica. Em breve você poderá calcular seus macros e interagir com a IA Keto aqui!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-[10px] text-zinc-500 font-sans tracking-wide">
          © 2026 Cetose Consciente. Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
}

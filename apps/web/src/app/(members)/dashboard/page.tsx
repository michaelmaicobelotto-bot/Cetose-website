"use client";

import { useAuth } from "@/hooks/useAuth";

// ----- Dados simulados (futuramente virão do Supabase) -----
const mockStats = [
  { label: "Dias em Cetose", value: "7", unit: "streak 🔥", color: "emerald" },
  { label: "Receitas Feitas", value: "12", unit: "receitas 🍳", color: "emerald" },
  { label: "Capítulos Lidos", value: "4", unit: "de 10 📖", color: "emerald" },
  { label: "Pontos Keto", value: "240", unit: "pts ⭐", color: "emerald" },
];

const mockActivity = [
  { icon: "📚", text: "Leu o Capítulo 4: Jejum Intermitente", time: "Há 2 horas" },
  { icon: "🍳", text: "Preparou: Salmão com Brócolis", time: "Hoje, 12:30" },
  { icon: "🤖", text: "Consultou a IA Keto sobre cetose nutricional", time: "Ontem" },
  { icon: "⭐", text: "Conquistou: 7 dias de streak!", time: "Ontem" },
  { icon: "📊", text: "Atualizou macros do perfil", time: "3 dias atrás" },
];

const quickActions = [
  { href: "/biblioteca", icon: "📚", label: "Continuar Lendo", desc: "Capítulo 5: Dieta Cetogênica" },
  { href: "/receitas", icon: "🍳", label: "Nova Receita", desc: "Explore 100+ opções" },
  { href: "/ia-keto", icon: "🤖", label: "Perguntar à IA", desc: "Keto responde em segundos" },
  { href: "/plano-alimentar", icon: "📊", label: "Ver Plano", desc: "Seus macros de hoje" },
];

function StatCard({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all duration-200 group">
      <p className="text-xs font-medium text-neutral-400 mb-3">{label}</p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-neutral-100 group-hover:text-emerald-300 transition-colors">
          {value}
        </span>
      </div>
      <p className="text-xs text-neutral-500 mt-1">{unit}</p>
    </div>
  );
}

function MacroBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-neutral-400">
        <span>{label}</span>
        <span className="text-neutral-300 font-medium">{value}g / {max}g</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();

  const displayName =
    user?.user_metadata?.nome || user?.email?.split("@")[0] || "Membro";

  const greetingHour = new Date().getHours();
  const greeting =
    greetingHour < 12 ? "Bom dia" : greetingHour < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      {/* Welcome Banner */}
      <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-emerald-950/60 via-neutral-900 to-neutral-900 border border-emerald-900/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <p className="text-sm text-emerald-400 font-medium mb-1">{greeting}, {displayName}! 👋</p>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-100">
            Sua Jornada Cetogênica
          </h1>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            Você está há <strong className="text-emerald-400">7 dias consecutivos</strong> seguindo o protocolo. Continue assim — a cetose está trabalhando para você!
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {mockStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Middle row: Macros + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Progresso de Macros do Dia */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-neutral-200">Macros de Hoje</h2>
            <span className="text-xs text-neutral-500">Meta: 1.800 kcal</span>
          </div>
          <div className="space-y-3">
            <MacroBar label="🥩 Gorduras" value={85} max={130} color="emerald" />
            <MacroBar label="💪 Proteínas" value={62} max={90} color="emerald" />
            <MacroBar label="🌿 Carboidratos" value={18} max={25} color="emerald" />
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
            <span className="text-xs text-neutral-400">Calorias consumidas</span>
            <span className="text-sm font-bold text-emerald-400">1.234 / 1.800 kcal</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-sm font-semibold text-neutral-200 mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                className="flex flex-col gap-1.5 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-emerald-500/30 hover:bg-neutral-800 transition-all group"
              >
                <span className="text-xl">{action.icon}</span>
                <span className="text-xs font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors leading-tight">
                  {action.label}
                </span>
                <span className="text-[11px] text-neutral-500 leading-tight">{action.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
        <h2 className="text-sm font-semibold text-neutral-200 mb-4">Atividade Recente</h2>
        <ul className="space-y-3">
          {mockActivity.map((item, i) => (
            <li key={i} className="flex items-start gap-3 py-2 border-b border-neutral-800/60 last:border-0">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-base flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-300 leading-snug">{item.text}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

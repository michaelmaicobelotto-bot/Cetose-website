"use client";

import { useRouter } from "next/navigation";
import { Button, Card, Loading } from "@cetose/ui";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <Loading size="lg" label="Carregando Área de Membros..." />
      </div>
    );
  }

  const userDisplayName =
    user?.user_metadata?.nome || user?.email?.split("@")[0] || "Membro Keto";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Top Navbar */}
      <header className="border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-emerald-400">Cetose</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              PWA Membros
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-medium text-neutral-200">
                {userDisplayName}
              </span>
              <span className="text-xs text-neutral-400">{user?.email}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-xs border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Banner */}
        <Card variant="glass" className="p-6 md:p-8 border border-neutral-800 bg-gradient-to-r from-neutral-900 to-emerald-950/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-100">
                Bem-vindo(a), {userDisplayName}! 👋
              </h1>
              <p className="text-neutral-400 text-sm mt-1 max-w-2xl">
                Seu plano de Cetose Consciente está ativo. Acompanhe seu progresso, explore e-books e converse com a IA Keto.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                <p className="text-xs text-neutral-400">Streak de Cetose</p>
                <p className="text-lg font-bold text-emerald-400">🔥 7 Dias</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="glass" className="p-5 border border-neutral-800 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
              Biblioteca & E-book
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Leia o e-book interativo e materiais explicativos.
            </p>
          </Card>

          <Card variant="glass" className="p-5 border border-neutral-800 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              🍳
            </div>
            <h3 className="font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
              Receitas Cetogênicas
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Descubra 100+ receitas deliciosas com baixo carboidrato.
            </p>
          </Card>

          <Card variant="glass" className="p-5 border border-neutral-800 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
              Plano Alimentar
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Visualize suas refeições e meta diária de macronutrientes.
            </p>
          </Card>

          <Card variant="glass" className="p-5 border border-neutral-800 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
              Assistente IA Keto
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Tire dúvidas sobre alimentos e sintomas de cetose 24/7.
            </p>
          </Card>
        </div>

        {/* Resumo de Progresso */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card variant="glass" className="lg:col-span-2 p-6 border border-neutral-800 space-y-4">
            <h2 className="text-lg font-semibold text-neutral-200">
              Sua Meta Diária de Macros
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <p className="text-xs text-neutral-400">Gorduras</p>
                <p className="text-xl font-bold text-emerald-400 mt-1">70%</p>
                <p className="text-[11px] text-neutral-500">~120g</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <p className="text-xs text-neutral-400">Proteínas</p>
                <p className="text-xl font-bold text-emerald-400 mt-1">25%</p>
                <p className="text-[11px] text-neutral-500">~90g</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <p className="text-xs text-neutral-400">Carboidratos Líquidos</p>
                <p className="text-xl font-bold text-emerald-400 mt-1">5%</p>
                <p className="text-[11px] text-neutral-500">&lt;25g</p>
              </div>
            </div>
          </Card>

          <Card variant="glass" className="p-6 border border-neutral-800 space-y-4">
            <h2 className="text-lg font-semibold text-neutral-200">
              Atividade Recente
            </h2>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Capítulo 1 do E-book concluído</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Calculadora de Macros configurada</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Perfil cadastrado com sucesso</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}

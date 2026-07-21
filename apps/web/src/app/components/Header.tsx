"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const displayName =
    user?.user_metadata?.nome || user?.email?.split("@")[0] || "Membro";

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  const initials = displayName
    .split(" ")
    .map((n: string) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-30">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
        aria-label="Abrir menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile logo */}
      <div className="lg:hidden text-sm font-bold text-emerald-400">
        Cetose Consciente
      </div>

      {/* Spacer for desktop */}
      <div className="hidden lg:block flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Streak Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/60 border border-neutral-700/50 text-xs text-neutral-300">
          <span>🔥</span>
          <span>7 dias</span>
        </div>

        {/* User Avatar + Dropdown */}
        <div className="relative group">
          <button
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-neutral-800 transition-colors"
            aria-label="Menu do usuário"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400">
              {initials}
            </div>
            <span className="hidden md:block text-sm text-neutral-300 max-w-[120px] truncate">
              {displayName}
            </span>
            <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute right-0 top-full mt-2 w-48 rounded-xl bg-neutral-800 border border-neutral-700 shadow-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-neutral-700">
              <p className="text-xs text-neutral-400">Conectado como</p>
              <p className="text-sm text-neutral-200 font-medium truncate">{user?.email}</p>
            </div>
            <ul className="py-1">
              <li>
                <a href="/perfil" className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 transition-colors">
                  <span>👤</span> Meu Perfil
                </a>
              </li>
              <li>
                <a href="/configuracoes" className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 transition-colors">
                  <span>⚙️</span> Configurações
                </a>
              </li>
              <li className="border-t border-neutral-700 mt-1 pt-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                >
                  <span>🚪</span> Sair da conta
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "🏠" },
  { href: "/biblioteca", label: "Biblioteca", icon: "📚" },
  { href: "/receitas", label: "Receitas", icon: "🍳" },
  { href: "/plano-alimentar", label: "Plano Alimentar", icon: "📊" },
  { href: "/ia-keto", label: "IA Keto", icon: "🤖" },
  { href: "/perfil", label: "Meu Perfil", icon: "👤" },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-full bg-neutral-900 border-r border-neutral-800">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-neutral-800 flex-shrink-0">
        <Link href="/dashboard" onClick={onClose} className="flex items-center gap-2">
          <span className="text-lg font-bold text-emerald-400 tracking-tight">Cetose</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
            PWA
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-400 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]"
                      : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/80"
                  }`}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-neutral-800 flex-shrink-0">
        <Link
          href="/configuracoes"
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 transition-all"
        >
          <span>⚙️</span>
          <span>Configurações</span>
        </Link>
      </div>
    </aside>
  );
}

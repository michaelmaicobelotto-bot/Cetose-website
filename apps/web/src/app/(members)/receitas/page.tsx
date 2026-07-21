"use client";

import { useState } from "react";
import type { Receita } from "@cetose/types";

// ----- Dados simulados de receitas -----
const mockReceitas: Receita[] = [
  {
    id: "1",
    titulo: "Salmão Grelhado com Brócolis",
    descricao: "Salmão rico em ômega-3 com brócolis refogado no azeite e alho.",
    tempo_preparo_min: 20,
    porcoes: 2,
    dificuldade: "facil",
    categorias: ["almoço", "jantar", "proteína"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 420, proteina_g: 38, gordura_g: 28, carboidrato_g: 6, fibra_g: 2 },
    created_at: "2026-01-01",
  },
  {
    id: "2",
    titulo: "Omelete de Queijo e Espinafre",
    descricao: "Omelete cremoso com queijo derretido e espinafre salteado.",
    tempo_preparo_min: 10,
    porcoes: 1,
    dificuldade: "facil",
    categorias: ["café da manhã", "ovo"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 310, proteina_g: 22, gordura_g: 24, carboidrato_g: 3, fibra_g: 1 },
    created_at: "2026-01-01",
  },
  {
    id: "3",
    titulo: "Costela Bovina Assada",
    descricao: "Costela assada lentamente com ervas finas e manteiga.",
    tempo_preparo_min: 180,
    porcoes: 4,
    dificuldade: "medio",
    categorias: ["jantar", "proteína"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 580, proteina_g: 44, gordura_g: 45, carboidrato_g: 2, fibra_g: 0 },
    created_at: "2026-01-01",
  },
  {
    id: "4",
    titulo: "Mousse de Chocolate Keto",
    descricao: "Sobremesa cremosa de chocolate amargo com creme de leite.",
    tempo_preparo_min: 15,
    porcoes: 4,
    dificuldade: "facil",
    categorias: ["sobremesa", "lanche"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 220, proteina_g: 4, gordura_g: 22, carboidrato_g: 5, fibra_g: 2 },
    created_at: "2026-01-01",
  },
  {
    id: "5",
    titulo: "Frango no Leite de Coco",
    descricao: "Frango suculento cozido no leite de coco com especiarias.",
    tempo_preparo_min: 35,
    porcoes: 3,
    dificuldade: "medio",
    categorias: ["almoço", "jantar", "proteína"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 380, proteina_g: 32, gordura_g: 26, carboidrato_g: 5, fibra_g: 0 },
    created_at: "2026-01-01",
  },
  {
    id: "6",
    titulo: "Abacate Recheado com Atum",
    descricao: "Metades de abacate maduro recheadas com salada de atum temperada.",
    tempo_preparo_min: 10,
    porcoes: 2,
    dificuldade: "facil",
    categorias: ["almoço", "lanche"],
    ingredientes: [],
    modo_preparo: [],
    macros_por_porcao: { calorias: 290, proteina_g: 18, gordura_g: 24, carboidrato_g: 4, fibra_g: 6 },
    created_at: "2026-01-01",
  },
];

const DIFICULDADE_MAP: Record<string, string> = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil",
};

const DIFICULDADE_COLOR: Record<string, string> = {
  facil: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  medio: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  dificil: "text-red-400 bg-red-500/10 border-red-500/20",
};

const CATEGORIAS = ["todas", "café da manhã", "almoço", "jantar", "lanche", "sobremesa"];

function RecipeCard({ receita, favorito, onFavorite }: {
  receita: Receita;
  favorito: boolean;
  onFavorite: (id: string) => void;
}) {
  return (
    <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200 group flex flex-col">
      {/* Placeholder imagem */}
      <div className="h-36 bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center text-5xl relative">
        🍽️
        <button
          onClick={() => onFavorite(receita.id)}
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-neutral-900/70 backdrop-blur-sm hover:bg-neutral-900 transition-colors"
          aria-label="Favoritar receita"
        >
          <span className="text-base">{favorito ? "❤️" : "🤍"}</span>
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors leading-snug">
          {receita.titulo}
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
          {receita.descricao}
        </p>

        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-[11px] text-neutral-400">⏱ {receita.tempo_preparo_min} min</span>
          <span className="text-neutral-700">•</span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${DIFICULDADE_COLOR[receita.dificuldade]}`}
          >
            {DIFICULDADE_MAP[receita.dificuldade]}
          </span>
        </div>

        {/* Macros resumidos */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-neutral-800">
          <div className="text-center">
            <p className="text-xs font-bold text-emerald-400">{receita.macros_por_porcao.calorias}</p>
            <p className="text-[10px] text-neutral-500">kcal</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-emerald-400">{receita.macros_por_porcao.proteina_g}g</p>
            <p className="text-[10px] text-neutral-500">prot</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-emerald-400">{receita.macros_por_porcao.carboidrato_g}g</p>
            <p className="text-[10px] text-neutral-500">carbs</p>
          </div>
        </div>

        <button className="mt-2 w-full py-2 rounded-xl bg-neutral-800 hover:bg-emerald-500/10 text-neutral-300 hover:text-emerald-400 text-xs font-medium transition-all border border-transparent hover:border-emerald-500/20">
          Ver Receita Completa →
        </button>
      </div>
    </div>
  );
}

export default function ReceitasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("todas");
  const [selectedDificuldade, setSelectedDificuldade] = useState("todas");
  const [favoritos, setFavoritos] = useState<Set<string>>(new Set());

  const toggleFavorito = (id: string) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filtered = mockReceitas.filter((r) => {
    const matchesSearch =
      searchTerm === "" ||
      r.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria =
      selectedCategoria === "todas" ||
      r.categorias.includes(selectedCategoria);
    const matchesDificuldade =
      selectedDificuldade === "todas" || r.dificuldade === selectedDificuldade;
    return matchesSearch && matchesCategoria && matchesDificuldade;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-100">Receitas Cetogênicas</h1>
          <p className="text-sm text-neutral-400 mt-1">
            {filtered.length} receita{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Busca */}
        <div className="relative w-full md:w-72">
          <input
            type="search"
            placeholder="Buscar receita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">🔍</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3">
        {/* Categoria */}
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategoria(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                selectedCategoria === cat
                  ? "bg-emerald-500 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dificuldade */}
        <div className="flex gap-1.5 ml-auto">
          {["todas", "facil", "medio", "dificil"].map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDificuldade(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                selectedDificuldade === d
                  ? "bg-neutral-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700"
              }`}
            >
              {d === "todas" ? "Todas" : DIFICULDADE_MAP[d]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Receitas */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((receita) => (
            <RecipeCard
              key={receita.id}
              receita={receita}
              favorito={favoritos.has(receita.id)}
              onFavorite={toggleFavorito}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3">
          <p className="text-4xl">🍽️</p>
          <p className="text-neutral-300 font-medium">Nenhuma receita encontrada</p>
          <p className="text-neutral-500 text-sm">Tente ajustar seus filtros ou termo de busca</p>
          <button
            onClick={() => { setSearchTerm(""); setSelectedCategoria("todas"); setSelectedDificuldade("todas"); }}
            className="mt-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm rounded-lg transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}

    </div>
  );
}

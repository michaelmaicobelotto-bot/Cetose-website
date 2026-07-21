"use client";

import { useState } from "react";

// ----- Dados simulados dos capítulos -----
const chapters = [
  { id: 1, title: "O Que É a Dieta Cetogênica?", pages: 12, readTime: "15 min", completed: true, progress: 100 },
  { id: 2, title: "Como o Corpo Entra em Cetose", pages: 18, readTime: "22 min", completed: true, progress: 100 },
  { id: 3, title: "Os Alimentos Liberados", pages: 24, readTime: "30 min", completed: true, progress: 100 },
  { id: 4, title: "Alimentos a Evitar", pages: 14, readTime: "18 min", completed: true, progress: 100 },
  { id: 5, title: "Montando Seu Plano Alimentar", pages: 30, readTime: "38 min", completed: false, progress: 35 },
  { id: 6, title: "A Gripe Cetogênica e Como Superar", pages: 16, readTime: "20 min", completed: false, progress: 0 },
  { id: 7, title: "Jejum Intermitente + Cetose", pages: 22, readTime: "28 min", completed: false, progress: 0 },
  { id: 8, title: "Suplementação em Cetose", pages: 18, readTime: "23 min", completed: false, progress: 0 },
  { id: 9, title: "Exercício e Cetose", pages: 20, readTime: "25 min", completed: false, progress: 0 },
  { id: 10, title: "Manutenção e Longo Prazo", pages: 26, readTime: "32 min", completed: false, progress: 0 },
];

const totalChapters = chapters.length;
const completedChapters = chapters.filter((c) => c.completed).length;
const overallProgress = Math.round((completedChapters / totalChapters) * 100);
const inProgressChapter = chapters.find((c) => !c.completed && c.progress > 0) || chapters.find((c) => !c.completed);

export default function BibliotecaPage() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-100">Biblioteca & E-book</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Seu guia completo para uma vida cetogênica consciente
        </p>
      </div>

      {/* E-book Progress Card */}
      <div className="bg-gradient-to-br from-emerald-950/60 to-neutral-900 border border-emerald-900/40 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📗</span>
            <div>
              <h2 className="text-lg font-bold text-neutral-100">Cetose Consciente</h2>
              <p className="text-xs text-neutral-400">E-book completo • 10 capítulos • ~230 páginas</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>{completedChapters}/{totalChapters} capítulos concluídos</span>
              <span className="text-emerald-400 font-semibold">{overallProgress}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-700"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {inProgressChapter && (
          <button
            onClick={() => setActiveChapter(inProgressChapter.id)}
            className="flex-shrink-0 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>▶</span>
            {inProgressChapter.progress > 0 ? "Continuar Leitura" : "Iniciar Capítulo"}
          </button>
        )}
      </div>

      {/* Chapter List */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-800">
          <h3 className="text-sm font-semibold text-neutral-200">Índice do E-book</h3>
        </div>

        <ul className="divide-y divide-neutral-800/60">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <button
                onClick={() => setActiveChapter(chapter.id === activeChapter ? null : chapter.id)}
                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-neutral-800/40 transition-colors text-left group"
              >
                {/* Status icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                    chapter.completed
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : chapter.progress > 0
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                  }`}
                >
                  {chapter.completed ? "✓" : chapter.id}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-sm font-medium truncate ${
                        chapter.completed
                          ? "text-neutral-300"
                          : "text-neutral-200 group-hover:text-emerald-400"
                      }`}
                    >
                      Capítulo {chapter.id}: {chapter.title}
                    </p>
                    {chapter.progress > 0 && !chapter.completed && (
                      <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        {chapter.progress}%
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {chapter.pages} páginas • {chapter.readTime}
                  </p>
                  {chapter.progress > 0 && !chapter.completed && (
                    <div className="mt-1.5 h-1 rounded-full bg-neutral-800 w-32 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-yellow-500"
                        style={{ width: `${chapter.progress}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <svg
                  className={`w-4 h-4 text-neutral-600 flex-shrink-0 transition-transform ${
                    activeChapter === chapter.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded chapter detail */}
              {activeChapter === chapter.id && (
                <div className="px-6 pb-4 bg-neutral-900/30">
                  <div className="border border-neutral-800 rounded-xl p-4 space-y-3">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Este capítulo aborda os fundamentos de <strong className="text-neutral-100">{chapter.title.toLowerCase()}</strong>,
                      apresentando conceitos práticos e aplicações diretas no seu dia a dia cetogênico.
                    </p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors">
                        {chapter.completed
                          ? "🔄 Reler Capítulo"
                          : chapter.progress > 0
                          ? "▶ Continuar"
                          : "▶ Iniciar Leitura"}
                      </button>
                      {chapter.completed && (
                        <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold rounded-lg transition-colors">
                          🔖 Ver Notas
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

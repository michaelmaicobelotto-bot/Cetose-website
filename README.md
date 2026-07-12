# 🌿 Cetose Consciente

> Plataforma completa de transformação nutricional baseada em dieta cetogênica

**Status:** 🚧 Em Desenvolvimento (Fase 0)

---

## 🎯 Sobre o Projeto

Cetose Consciente é uma plataforma digital que combina educação científica, tecnologia (IA), gamificação e comunidade para transformar vidas através da dieta cetogênica.

**Tagline:** "Transforme seu corpo em uma máquina de queimar gordura"

---

## 🏗️ Estrutura do Projeto

Este é um monorepo que contém:

```
cetose-consciente/
├── apps/
│   ├── landing/          # Landing page (Next.js)
│   ├── web/              # PWA - Área de membros (Next.js)
│   └── admin/            # Dashboard administrativo (Next.js)
├── packages/
│   ├── ui/               # Componentes compartilhados
│   ├── config/           # Configurações compartilhadas
│   └── types/            # TypeScript types
└── docs/                 # Documentação completa
```

---

## 🚀 Setup Rápido

### Pré-requisitos

- Node.js 18+ 
- npm ou pnpm
- Git

### Instalação

```bash
# 1. Clone o repositório
git clone [url-do-repo]
cd cetose-consciente

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# 4. Rode o projeto
npm run dev
```

**Tempo esperado:** < 5 minutos ⏱️

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Rodar todos os apps em desenvolvimento
npm run build    # Build de produção
npm run lint     # Lint de todos os apps
npm test         # Rodar testes
npm run clean    # Limpar builds
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **IA:** OpenAI GPT-4, Anthropic Claude
- **Pagamento:** Kiwify
- **Deploy:** Vercel
- **Monorepo:** Turbo

---

## 📚 Documentação

A documentação completa está na pasta `/docs`:

- [`VISION.md`](VISION.md) - Visão, missão e objetivos
- [`PRODUCT.md`](PRODUCT.md) - Definição do produto
- [`ARCHITECTURE.md`](ARCHITECTURE.md) - Arquitetura técnica
- [`ROADMAP.md`](ROADMAP.md) - Plano de desenvolvimento
- [`PLANO-DE-EXECUCAO.md`](PLANO-DE-EXECUCAO.md) - Guia de execução
- [`REGRAS-DO-PROJETO.md`](REGRAS-DO-PROJETO.md) - Padrões e diretrizes

---

## 🎯 Status do Desenvolvimento

### Fase 0: Fundação (Em Andamento)
- [x] Estrutura do monorepo
- [x] Configuração Next.js (Landing & Web PWA)
- [ ] Configuração TypeScript
- [ ] Configuração Tailwind
- [ ] Configuração Supabase
- [ ] Autenticação
- [ ] CI/CD

### Próximas Fases
- Fase 1: MVP (4 semanas)
- Fase 2: Validação (2 semanas)
- Fase 3: Escala (contínuo)

---

## 👥 Equipe

- **Produto:** Avalon Bay
- **Desenvolvimento:** Em formação

---

## 📄 Licença

Proprietary - Todos os direitos reservados © 2026 Avalon Bay

---

## 🔗 Links Úteis

- [Documentação Completa](./docs)
- [Plano de Execução](./PLANO-DE-EXECUCAO.md)
- [Regras do Projeto](./REGRAS-DO-PROJETO.md)

---

**Última Atualização:** 2026-07-12  
**Versão:** 0.1.0 (Fase 0)

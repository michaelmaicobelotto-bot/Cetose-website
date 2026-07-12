# 🏃 SPRINT 1: FUNDAÇÃO TÉCNICA

> **Primeira sprint de desenvolvimento - Base sólida para todo o projeto**  
> Estrutura, Monorepo, Next.js, TypeScript, Tailwind, Supabase, Autenticação e CI/CD

**Duração:** 2-3 semanas  
**Objetivo:** Criar infraestrutura base 100% funcional e testada  
**Data:** 2026-07-12

---

## 🎯 OBJETIVO DO SPRINT

Ao final deste sprint, você terá:
- ✅ Monorepo estruturado e funcionando
- ✅ 3 aplicações Next.js rodando
- ✅ TypeScript configurado
- ✅ Tailwind CSS customizado
- ✅ Supabase conectado
- ✅ Autenticação funcionando
- ✅ CI/CD ativo
- ✅ Tudo testado e documentado

---

## 📋 CHECKLIST COMPLETO

### Dia 1-2: Estrutura do Projeto

#### ✅ Task 1.1: Criar Estrutura do Monorepo
```bash
[ ] Criar pasta raiz do projeto
[ ] Criar estrutura de pastas:
    apps/
      landing/
      web/
      admin/
    packages/
      ui/
      config/
      types/
    docs/
    knowledge/
    plans/
[ ] Inicializar Git
[ ] Criar .gitignore
[ ] Criar README.md raiz
```

**Comandos:**
```bash
mkdir cetose-consciente
cd cetose-consciente
mkdir -p apps/{landing,web,admin} packages/{ui,config,types}
git init
git checkout -b develop
```

**Teste:**
```bash
# Verificar estrutura
tree -L 2
# Deve mostrar todas as pastas criadas
```

---

#### ✅ Task 1.2: Configurar Package.json Raiz
```bash
[ ] npm init -y
[ ] Adicionar scripts:
    - dev: rodar todos os apps
    - build: build de todos os apps
    - test: rodar todos os testes
    - lint: lint de todos os apps
[ ] Adicionar workspaces
[ ] Instalar dependências globais
```

**package.json:**
```json
{
  "name": "cetose-consciente",
  "version": "0.1.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  }
}
```

**Teste:**
```bash
npm install
# Deve instalar sem erros
```

---

### Dia 3-5: Next.js e TypeScript

#### ✅ Task 2.1: Criar App Landing
```bash
[ ] cd apps/landing
[ ] npx create-next-app@latest . --typescript --tailwind --app --src-dir
[ ] Configurar next.config.js
[ ] Criar página inicial
[ ] Testar dev server
```

**Opções do create-next-app:**
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ✅ src/ directory
- ❌ import alias (configurar manualmente)

**Teste:**
```bash
cd apps/landing
npm run dev
# Abrir http://localhost:3000
# Deve mostrar página Next.js
```

---

#### ✅ Task 2.2: Criar App Web (PWA)
```bash
[ ] cd apps/web
[ ] npx create-next-app@latest . --typescript --tailwind --app --src-dir
[ ] Configurar next.config.js
[ ] Instalar next-pwa
[ ] Configurar PWA
[ ] Criar manifest.json
[ ] Testar dev server
```

**next.config.js:**
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = withPWA({
  reactStrictMode: true,
});
```

**Teste:**
```bash
cd apps/web
npm run dev
# Abrir http://localhost:3001
# Verificar manifest.json em /manifest.json
```

---

#### ✅ Task 2.3: Criar App Admin ✅ CONCLUÍDA
```bash
[x] cd apps/admin
[x] Estrutura Next.js 16 criada manualmente (TypeScript + Tailwind v4 + App Router)
[x] Configurar next.config.ts
[x] Criar layout admin premium (dark mode, glassmorphism)
[x] Testar dev server → OK em http://localhost:3002
```

**Resultado:** Dashboard admin premium criado com:
- Header com navegação e identidade visual
- 4 cards de métricas (Usuários, MRR, Ativação, Churn)
- Tabela de usuários recentes
- Painel de ações rápidas
- Status do sistema em tempo real

**Teste:**
```bash
cd apps/admin
npm run dev
# http://localhost:3002 → ✓ Ready in 4.7s | GET / 200
```

---

#### ✅ Task 2.4: Configurar TypeScript ✅ CONCLUÍDA
```bash
[x] Criar tsconfig.json raiz
[x] Configurar paths aliases compartilhados (@cetose/ui, @cetose/types, @cetose/config/*)
[x] Configurar strict mode completo e unificado
[x] Criar pacotes internos para compartilhar tipos (@cetose/types) e componentes (@cetose/ui)
[x] Testar compilação integrada do monorepo (Turbo build)
```

**Resultado:**
- Configurações base unificadas criadas em `packages/config/tsconfig.base.json` e `packages/config/tsconfig.nextjs.json`.
- `tsconfig.json` de todos os apps (`landing`, `web`, `admin`) estendidos a partir das configurações compartilhadas.
- Criados os pacotes locais `@cetose/types` e `@cetose/ui` com mapeamentos de `paths` configurados no monorepo para simplificar os imports e facilitar o compartilhamento de código.
- Testado o build integrado usando o Turborepo (`npm run build`), completando com sucesso as tarefas de TypeScript em todos os pacotes.

**Teste:**
```bash
npm run build
# Todos os aplicativos Next.js compilam com sucesso e passam na validação de tipos de forma estrita!
```

---

### Dia 6-8: Tailwind CSS

#### ✅ Task 3.1: Configurar Tailwind Customizado ✅ CONCLUÍDA
```bash
[x] Criar theme.css compartilhado em packages/config
[x] Definir cores do projeto (primary-50 até 700, secondary, accent, background-dark, card-bg, etc.)
[x] Definir fontes integradas (Inter para sans, Manrope para display)
[x] Definir breakpoints (@theme inline / custom breakpoints)
[x] Definir espaçamentos e tamanhos de fonte de forma global
[x] Testar classes importadas nos apps
```

**theme.css (@cetose/config/theme.css):**
```css
@theme {
  --color-primary: #10b981;
  --color-primary-50: #ecfdf5;
  --color-primary-100: #d1fae5;
  --color-primary-500: #10b981;
  --color-primary-600: #059669;
  --color-primary-700: #047857;

  --color-secondary: #000000;
  --color-accent: #00d4aa;

  --font-sans: var(--font-inter), 'Inter', sans-serif;
  --font-display: var(--font-manrope), 'Manrope', sans-serif;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;

  --breakpoint-xs: 475px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

**Teste:**
```bash
# Todos os apps importam @import "@cetose/config/theme.css"
# Build global passou perfeitamente com compilador do Tailwind v4
```

---

#### ✅ Task 3.2: Criar Componentes Base (packages/ui) ✅ CONCLUÍDA
```bash
[x] Criar Button.tsx (variantes primary, secondary, outline, ghost, danger e loading state)
[x] Criar Input.tsx (suporte a labels, erros, hints e ícones em linha)
[x] Criar Card.tsx (estilos default, glassmorphic e bordered com hover animado opcional)
[x] Criar Loading.tsx (tamanhos flexíveis, cores temáticas e modo tela cheia)
[x] Vincular dependências e testar na Landing Page
```

**Resultado:**
- Componentes unificados, componentizados e reaproveitáveis criados na pasta compartilhada `packages/ui/src/components`.
- Exportações globais disponibilizadas via `packages/ui/src/index.ts`.
- Vinculadas dependências locais nos arquivos `package.json` de cada app com o workspace do monorepo (`"@cetose/ui": "*"` e `"@cetose/types": "*"`).
- Landing Page (`apps/landing/src/app/page.tsx`) reestruturada para testar de forma interativa a importação dos componentes do workspace local e demonstrar um design premium responsivo.

**Teste:**
```bash
npm run build
# Os componentes foram empacotados, importados e otimizados pelo Next.js com sucesso nos builds de produção!
```

---

### Dia 9-11: Supabase

#### ✅ Task 4.1: Configurar Supabase
```bash
[ ] Criar projeto no Supabase
[ ] Copiar URL e anon key
[ ] Criar .env.local em cada app
[ ] Instalar @supabase/supabase-js
[ ] Criar lib/supabase.ts
[ ] Testar conexão
```

**.env.local:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

**lib/supabase.ts:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Teste:**
```bash
# Criar página de teste
# Fazer query simples
# Verificar se retorna dados
```

---

#### ✅ Task 4.2: Criar Schema Inicial
```bash
[ ] Criar tabela profiles
[ ] Criar tabela purchases
[ ] Habilitar RLS
[ ] Criar políticas básicas
[ ] Testar queries
```

**SQL (Supabase SQL Editor):**
```sql
-- Profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  nome TEXT,
  email TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Purchases
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  product TEXT,
  amount DECIMAL,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can view own purchases"
  ON purchases FOR SELECT
  USING (auth.uid() = user_id);
```

**Teste:**
```bash
# Executar SQL no Supabase
# Verificar tabelas criadas
# Testar políticas RLS
```

---

### Dia 12-14: Autenticação

#### ✅ Task 5.1: Criar Páginas de Auth
```bash
[ ] Criar /login
[ ] Criar /signup
[ ] Criar /forgot-password
[ ] Criar /reset-password
[ ] Estilizar páginas
```

**pages/login/page.tsx:**
```typescript
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}
```

**Teste:**
```bash
# Criar usuário manualmente no Supabase
# Tentar fazer login
# Verificar redirecionamento
```

---

#### ✅ Task 5.2: Criar Middleware de Auth
```bash
[ ] Criar middleware.ts
[ ] Proteger rotas privadas
[ ] Redirecionar não autenticados
[ ] Testar proteção
```

**middleware.ts:**
```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Proteger rotas /dashboard
  if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirecionar autenticados de /login para /dashboard
  if (req.nextUrl.pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
```

**Teste:**
```bash
# Tentar acessar /dashboard sem login
# Deve redirecionar para /login
# Fazer login e tentar acessar /login
# Deve redirecionar para /dashboard
```

---

#### ✅ Task 5.3: Criar Hook useAuth
```bash
[ ] Criar hooks/useAuth.ts
[ ] Implementar login
[ ] Implementar logout
[ ] Implementar signup
[ ] Testar hook
```

**hooks/useAuth.ts:**
```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Escutar mudanças de auth
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, loading, signOut };
}
```

**Teste:**
```bash
# Usar hook em componente
# Verificar se user é populado após login
# Testar logout
```

---

### Dia 15-17: CI/CD

#### ✅ Task 6.1: Configurar GitHub Actions
```bash
[ ] Criar .github/workflows/ci.yml
[ ] Configurar lint
[ ] Configurar type-check
[ ] Configurar build
[ ] Testar pipeline
```

**.github/workflows/ci.yml:**
```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint

  type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx tsc --noEmit

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
```

**Teste:**
```bash
# Fazer commit e push
# Verificar Actions no GitHub
# Todos os jobs devem passar
```

---

#### ✅ Task 6.2: Deploy em Vercel
```bash
[ ] Criar conta Vercel
[ ] Conectar repositório
[ ] Configurar variáveis de ambiente
[ ] Deploy de staging
[ ] Testar em produção
[ ] Configurar domínio (opcional)
```

**Variáveis de Ambiente (Vercel):**
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

**Teste:**
```bash
# Acessar URL do Vercel
# Testar login
# Testar navegação
# Verificar se tudo funciona
```

---

## ✅ CHECKLIST FINAL DE TESTES

### Testes Manuais

#### 1. Estrutura do Projeto
```bash
[ ] Monorepo estruturado corretamente
[ ] Todas as pastas criadas
[ ] Git inicializado
[ ] README.md presente
```

#### 2. Next.js
```bash
[ ] Landing roda em localhost:3000
[ ] Web roda em localhost:3001
[ ] Admin roda em localhost:3002
[ ] Hot reload funcionando
[ ] Build sem erros
```

#### 3. TypeScript
```bash
[ ] npx tsc --noEmit sem erros
[ ] Autocomplete funcionando
[ ] Type checking ativo
[ ] Paths aliases funcionando
```

#### 4. Tailwind CSS
```bash
[ ] Classes customizadas funcionando
[ ] Cores do projeto aplicadas
[ ] Fontes carregando
[ ] Responsivo funcionando
[ ] Dark mode (se implementado)
```

#### 5. Supabase
```bash
[ ] Conexão estabelecida
[ ] Tabelas criadas
[ ] RLS habilitado
[ ] Políticas funcionando
[ ] Queries retornando dados
```

#### 6. Autenticação
```bash
[ ] Login funcionando
[ ] Signup funcionando
[ ] Logout funcionando
[ ] Middleware protegendo rotas
[ ] Redirecionamentos corretos
[ ] Sessão persistindo
```

#### 7. CI/CD
```bash
[ ] GitHub Actions rodando
[ ] Lint passando
[ ] Type-check passando
[ ] Build passando
[ ] Deploy automático funcionando
[ ] Vercel acessível
```

---

### Testes Automatizados (Opcional para Sprint 1)

```bash
[ ] Testes unitários básicos
[ ] Testes de integração auth
[ ] Testes E2E fluxo de login
```

---

## 🎯 DEFINIÇÃO DE PRONTO (DoD)

### Sprint 1 está completo quando:

**Infraestrutura:**
- [x] Monorepo estruturado
- [x] Git configurado com branches
- [x] README.md documentado

**Next.js:**
- [x] 3 apps rodando (landing, web, admin)
- [x] Hot reload funcionando
- [x] Build sem erros

**TypeScript:**
- [x] Configurado em todos os apps
- [x] Strict mode ativo
- [x] Sem erros de compilação

**Tailwind:**
- [x] Configurado com tema customizado
- [x] Cores e fontes do projeto
- [x] Componentes base criados

**Supabase:**
- [x] Conectado
- [x] Schema inicial criado
- [x] RLS configurado

**Autenticação:**
- [x] Login funcionando
- [x] Signup funcionando
- [x] Logout funcionando
- [x] Rotas protegidas

**CI/CD:**
- [x] GitHub Actions ativo
- [x] Deploy automático
- [x] Vercel funcionando

**Documentação:**
- [x] README.md atualizado
- [x] Variáveis de ambiente documentadas
- [x] Instruções de setup

---

## 📊 CRITÉRIOS DE ACEITAÇÃO

### Teste Final

**Qualquer desenvolvedor deve conseguir:**

1. Clonar o repositório
2. Rodar `npm install`
3. Copiar `.env.example` para `.env.local`
4. Rodar `npm run dev`
5. Acessar localhost:3000, 3001, 3002
6. Fazer login/signup
7. Acessar dashboard protegido

**Tempo máximo:** 5 minutos

---

## 🐛 TROUBLESHOOTING

### Problemas Comuns

**1. Erro ao instalar dependências**
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
```

**2. TypeScript não reconhece paths**
```bash
# Reiniciar TypeScript server no VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**3. Tailwind não aplicando estilos**
```bash
# Verificar tailwind.config.js
# Verificar import do CSS global
# Limpar cache: rm -rf .next
```

**4. Supabase não conecta**
```bash
# Verificar .env.local
# Verificar se variáveis começam com NEXT_PUBLIC_
# Reiniciar dev server
```

**5. Auth não funciona**
```bash
# Verificar se RLS está habilitado
# Verificar políticas no Supabase
# Verificar middleware.ts
```

---

## 📝 DOCUMENTAÇÃO FINAL

### README.md do Projeto

```markdown
# Cetose Consciente

Plataforma completa de transformação nutricional baseada em dieta cetogênica.

## Setup

1. Clone o repositório
2. Instale dependências: `npm install`
3. Copie `.env.example` para `.env.local`
4. Configure variáveis de ambiente
5. Rode: `npm run dev`

## Estrutura

- `apps/landing` - Landing page
- `apps/web` - Área de membros (PWA)
- `apps/admin` - Dashboard administrativo
- `packages/ui` - Componentes compartilhados
- `packages/config` - Configurações compartilhadas
- `packages/types` - TypeScript types

## Scripts

- `npm run dev` - Rodar todos os apps
- `npm run build` - Build de produção
- `npm run lint` - Lint
- `npm test` - Testes

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Documentação

Ver `/docs` para documentação completa.
```

---

## 🎉 CONCLUSÃO DO SPRINT 1

Após completar todos os itens e passar em todos os testes, você terá:

✅ **Infraestrutura sólida**  
✅ **3 aplicações funcionando**  
✅ **Autenticação segura**  
✅ **Deploy automatizado**  
✅ **Base para próximos sprints**

**Próximo Sprint:** [`FASE-2-APLICATIVO.md`](FASE-2-APLICATIVO.md)

---

**Data de Criação:** 2026-07-12  
**Última Atualização:** 2026-07-12  
**Status:** 🟢 Pronto para Execução

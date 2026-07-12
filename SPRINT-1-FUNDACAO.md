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

#### ✅ Task 2.3: Criar App Admin
```bash
[ ] cd apps/admin
[ ] npx create-next-app@latest . --typescript --tailwind --app --src-dir
[ ] Configurar next.config.js
[ ] Criar layout admin
[ ] Testar dev server
```

**Teste:**
```bash
cd apps/admin
npm run dev
# Abrir http://localhost:3002
# Deve mostrar página Next.js
```

---

#### ✅ Task 2.4: Configurar TypeScript
```bash
[ ] Criar tsconfig.json raiz
[ ] Configurar paths aliases
[ ] Configurar strict mode
[ ] Testar compilação
```

**tsconfig.json (raiz):**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./src/*"],
      "@/ui": ["../../packages/ui/src"],
      "@/config": ["../../packages/config/src"],
      "@/types": ["../../packages/types/src"]
    }
  }
}
```

**Teste:**
```bash
# Em cada app
npx tsc --noEmit
# Não deve ter erros
```

---

### Dia 6-8: Tailwind CSS

#### ✅ Task 3.1: Configurar Tailwind Customizado
```bash
[ ] Criar tailwind.config.js compartilhado
[ ] Definir cores do projeto
[ ] Definir fontes (Manrope, Inter)
[ ] Definir breakpoints
[ ] Definir espaçamentos
[ ] Testar classes
```

**tailwind.config.js (packages/config):**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        secondary: {
          DEFAULT: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
```

**Teste:**
```bash
# Criar componente de teste com classes customizadas
# Verificar se cores e fontes estão aplicadas
```

---

#### ✅ Task 3.2: Criar Componentes Base (packages/ui)
```bash
[ ] Criar Button.tsx
[ ] Criar Input.tsx
[ ] Criar Card.tsx
[ ] Criar Loading.tsx
[ ] Testar componentes
```

**Button.tsx:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

**Teste:**
```bash
# Importar e usar em uma página
# Verificar estilos e interatividade
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

# 📱 FASE 2: APLICATIVO (PWA - Área de Membros)

> **Desenvolvimento da experiência completa do produto digital**  
> Login, Cadastro, Dashboard, Biblioteca, Receitas, Plano Alimentar e IA Keto

**Duração:** 4-6 semanas  
**Pré-requisito:** Fase 1 (Fundação Técnica) concluída  
**Data:** 2026-07-12

---

## 🎯 OBJETIVO DA FASE 2

Criar a área de membros completa (PWA) com todas as funcionalidades core do produto:
- Autenticação segura
- Dashboard personalizado
- E-book interativo
- Biblioteca de receitas
- Plano alimentar personalizado
- IA especialista em cetose

---

## 📋 CHECKLIST COMPLETO

### Semana 1-2: Autenticação e Área de Membros

#### 1. Login (/login)
```bash
[ ] Criar página de login
[ ] Formulário com email/senha
[ ] Validação de campos (Zod)
[ ] Integração Supabase Auth
[ ] Mensagens de erro amigáveis
[ ] Loading states
[ ] Redirect após login (/dashboard)
[ ] Link para "Esqueci minha senha"
[ ] Link para cadastro
[ ] Responsivo mobile
```

**Componentes:**
- `LoginForm.tsx`
- `Input.tsx`
- `Button.tsx`
- `ErrorMessage.tsx`

---

#### 2. Cadastro (/signup)
```bash
[ ] Criar página de cadastro
[ ] Formulário completo:
  - Nome completo
  - Email
  - Senha (com requisitos)
  - Confirmação de senha
[ ] Validação de senha forte:
  - Mínimo 8 caracteres
  - Letra maiúscula
  - Letra minúscula
  - Número
  - Caractere especial
[ ] Checkbox termos de uso
[ ] Checkbox política de privacidade
[ ] Confirmação de email (Supabase)
[ ] Onboarding inicial após cadastro
[ ] Responsivo mobile
```

**Componentes:**
- `SignupForm.tsx`
- `PasswordStrength.tsx`
- `Checkbox.tsx`

---

#### 3. Área de Membros (Layout)
```bash
[ ] Criar layout principal (/dashboard)
[ ] Sidebar de navegação:
  - Dashboard
  - Biblioteca
  - Receitas
  - Plano Alimentar
  - IA Keto
  - Perfil
  - Configurações
  - Logout
[ ] Header com:
  - Logo
  - Busca global
  - Notificações
  - Avatar do usuário
[ ] Menu mobile (hamburger)
[ ] Proteção de rotas (middleware)
[ ] Logout funcional
[ ] Transições suaves
[ ] Dark mode toggle
```

**Componentes:**
- `Sidebar.tsx`
- `Header.tsx`
- `MobileMenu.tsx`
- `UserAvatar.tsx`
- `AuthGuard.tsx` (middleware)

---

### Semana 3: Dashboard e Biblioteca

#### 4. Dashboard (/dashboard)
```bash
[ ] Criar página inicial do aluno
[ ] Cards de progresso:
  - Dias em cetose (streak)
  - Receitas feitas
  - Capítulos lidos
  - Pontos acumulados
[ ] Gráfico de progresso semanal
[ ] Últimas atividades (feed)
[ ] Próximos passos sugeridos
[ ] CTAs para ações principais:
  - "Continuar lendo"
  - "Fazer uma receita"
  - "Conversar com IA"
[ ] Mensagem de boas-vindas personalizada
[ ] Responsivo mobile
```

**Componentes:**
- `ProgressCard.tsx`
- `StatsCard.tsx`
- `ActivityFeed.tsx`
- `QuickActions.tsx`
- `ProgressChart.tsx`

---

#### 5. Biblioteca (/biblioteca)
```bash
[ ] Criar página de biblioteca
[ ] E-book principal (PWA):
  - Navegação por capítulos
  - Índice clicável
  - Progresso de leitura (%)
  - Barra de progresso visual
[ ] Funcionalidades de leitura:
  - Marcadores (bookmarks)
  - Anotações (highlights)
  - Busca no conteúdo
  - Compartilhar trechos
[ ] Configurações de leitura:
  - Modo escuro/claro
  - Ajuste de fonte (tamanho)
  - Ajuste de espaçamento
  - Fonte serifada/sans-serif
[ ] Navegação:
  - Capítulo anterior/próximo
  - Voltar ao índice
  - Ir para capítulo específico
[ ] Sincronização de progresso
[ ] Funciona offline (Service Worker)
```

**Componentes:**
- `ChapterList.tsx`
- `Reader.tsx`
- `Bookmark.tsx`
- `Highlight.tsx`
- `SearchBar.tsx`
- `ProgressBar.tsx`
- `ReadingSettings.tsx`

---

### Semana 4: Receitas

#### 6. Receitas (/receitas)
```bash
[ ] Criar página de receitas
[ ] Grid de cards de receitas:
  - Foto
  - Título
  - Tempo de preparo
  - Dificuldade
  - Macros resumidos
  - Botão favoritar
[ ] Filtros:
  - Por refeição (café, almoço, jantar, lanche, sobremesa)
  - Por ingrediente principal
  - Por tempo de preparo (< 15min, 15-30min, > 30min)
  - Por dificuldade (fácil, média, difícil)
  - Por calorias (< 300, 300-500, > 500)
  - Apenas favoritas
[ ] Busca por nome
[ ] Ordenação:
  - Mais recentes
  - Mais populares
  - Menor tempo
  - Menor calorias
[ ] Paginação ou infinite scroll
[ ] Loading skeleton
[ ] Empty state (sem resultados)
```

**Componentes:**
- `RecipeCard.tsx`
- `RecipeGrid.tsx`
- `RecipeFilters.tsx`
- `SearchBar.tsx`
- `FavoriteButton.tsx`

---

#### 6.1 Detalhes da Receita (/receitas/[id])
```bash
[ ] Criar página de detalhes
[ ] Foto em destaque
[ ] Título e descrição
[ ] Informações gerais:
  - Tempo de preparo
  - Dificuldade
  - Porções
  - Tipo de refeição
[ ] Ingredientes:
  - Lista completa
  - Checkbox para marcar
  - Botão "Adicionar à lista de compras"
[ ] Modo de preparo:
  - Passo a passo numerado
  - Checkbox para marcar
  - Timer integrado (opcional)
[ ] Informações nutricionais:
  - Calorias
  - Proteína
  - Gordura
  - Carboidratos
  - Fibras
  - Gráfico visual de macros
[ ] Botão favoritar
[ ] Botão compartilhar
[ ] Avaliações (estrelas)
[ ] Comentários de usuários
[ ] Receitas similares
```

**Componentes:**
- `RecipeDetail.tsx`
- `IngredientList.tsx`
- `InstructionList.tsx`
- `NutritionInfo.tsx`
- `MacroChart.tsx`
- `RatingStars.tsx`
- `CommentSection.tsx`

---

#### 6.2 Lista de Compras (/receitas/lista-compras)
```bash
[ ] Criar página de lista de compras
[ ] Ingredientes agrupados por seção:
  - Proteínas
  - Vegetais
  - Laticínios
  - Gorduras
  - Temperos
  - Outros
[ ] Checkbox para marcar comprados
[ ] Quantidades calculadas automaticamente
[ ] Adicionar item manualmente
[ ] Remover item
[ ] Limpar lista
[ ] Exportar:
  - PDF
  - WhatsApp
  - Email
[ ] Sincronização em tempo real
```

**Componentes:**
- `ShoppingList.tsx`
- `ShoppingItem.tsx`
- `ExportButtons.tsx`

---

### Semana 5: Plano Alimentar

#### 7. Plano Alimentar (/plano)

**7.1 Calculadora de Macros (/plano/calculadora)**
```bash
[ ] Criar página de calculadora
[ ] Formulário de dados:
  - Peso atual (kg)
  - Peso desejado (kg)
  - Altura (cm)
  - Idade (anos)
  - Sexo (M/F)
  - Nível de atividade:
    * Sedentário
    * Levemente ativo
    * Moderadamente ativo
    * Muito ativo
    * Extremamente ativo
  - Objetivo:
    * Perda de peso
    * Manutenção
    * Ganho de massa
[ ] Cálculo automático:
  - TMB (Taxa Metabólica Basal)
  - TDEE (Total Daily Energy Expenditure)
  - Déficit/superávit calórico
  - Macros cetogênicos:
    * Proteína: 20-25%
    * Gordura: 70-75%
    * Carboidratos: 5-10%
[ ] Resultado visual:
  - Calorias diárias
  - Proteína (g)
  - Gordura (g)
  - Carboidratos (g)
  - Gráfico de pizza
[ ] Salvar perfil
[ ] Recalcular quando necessário
```

**Componentes:**
- `MacroCalculator.tsx`
- `MacroForm.tsx`
- `MacroResult.tsx`
- `MacroChart.tsx`

---

**7.2 Cardápio Semanal (/plano/cardapio)**
```bash
[ ] Criar página de cardápio
[ ] Gerador automático de cardápio:
  - Baseado nos macros calculados
  - Preferências alimentares
  - Restrições (alergias, intolerâncias)
  - Variedade de receitas
  - Reaproveitamento de ingredientes
[ ] Visualização semanal:
  - Segunda a domingo
  - Café, almoço, jantar, lanches
  - Macros de cada refeição
  - Macros totais do dia
[ ] Funcionalidades:
  - Substituir refeição
  - Trocar dia completo
  - Regenerar cardápio
  - Salvar cardápio
  - Imprimir cardápio
[ ] Gerar lista de compras automática
[ ] Sincronização com receitas
```

**Componentes:**
- `MealPlan.tsx`
- `WeekView.tsx`
- `DayView.tsx`
- `MealCard.tsx`
- `SwapMealButton.tsx`

---

**7.3 Registro de Refeições (/plano/registro)**
```bash
[ ] Criar página de registro
[ ] Log diário de refeições:
  - Data e hora
  - Tipo de refeição
  - Descrição
  - Foto (upload)
  - Macros (manual ou calculado)
[ ] Funcionalidades:
  - Adicionar refeição
  - Editar refeição
  - Excluir refeição
  - Copiar para outro dia
[ ] Análise diária:
  - Total de calorias
  - Total de macros
  - Comparação com meta
  - Gráfico de progresso
[ ] Histórico completo:
  - Filtrar por data
  - Filtrar por refeição
  - Buscar por alimento
[ ] Estatísticas:
  - Média semanal
  - Média mensal
  - Dias em cetose
  - Streak de registro
```

**Componentes:**
- `MealLog.tsx`
- `MealEntry.tsx`
- `MealForm.tsx`
- `ImageUpload.tsx`
- `DailyAnalysis.tsx`
- `HistoryView.tsx`
- `StatsView.tsx`

---

### Semana 6: IA Keto

#### 8. IA Keto (/ia)
```bash
[ ] Criar página de chat
[ ] Interface de chat:
  - Lista de mensagens
  - Input de mensagem
  - Botão enviar
  - Typing indicator ("Keto está digitando...")
  - Scroll automático
  - Mensagens formatadas (markdown)
[ ] Integração OpenAI GPT-4:
  - System prompt (conforme IA.md)
  - Contexto do usuário:
    * Nome
    * Objetivos
    * Dias em cetose
    * Peso atual/meta
    * Restrições alimentares
  - Histórico de conversas
  - Referências científicas
  - Temperatura: 0.7
  - Max tokens: 500
[ ] Funcionalidades especiais:
  - Upload de foto de refeição
  - Análise nutricional automática
  - Sugestões de receitas
  - Respostas sobre alimentos
  - Motivação e suporte
  - Alertas sobre erros comuns
[ ] Sugestões rápidas (quick replies):
  - "Posso comer [alimento]?"
  - "Sugerir receita para [refeição]"
  - "Estou com fome, o que fazer?"
  - "Analisar minha refeição"
[ ] Salvamento de conversas
[ ] Histórico de conversas
[ ] Avaliação de respostas (👍 👎)
[ ] Compartilhar resposta
[ ] Copiar resposta
```

**Componentes:**
- `ChatInterface.tsx`
- `MessageList.tsx`
- `Message.tsx`
- `MessageInput.tsx`
- `TypingIndicator.tsx`
- `QuickReplies.tsx`
- `ImageUpload.tsx`
- `FoodAnalysis.tsx`
- `RatingButtons.tsx`

---

**8.1 Análise de Fotos (/ia/analisar)**
```bash
[ ] Integração GPT-4 Vision
[ ] Upload de foto:
  - Câmera (mobile)
  - Galeria
  - Drag & drop (desktop)
[ ] Análise automática:
  - Identificação de alimentos
  - Estimativa de porções
  - Cálculo de macros
  - Indicador cetogênico:
    * ✅ Permitido
    * ⚠️ Moderação
    * ❌ Evitar
[ ] Sugestões:
  - Substituições cetogênicas
  - Ajustes de porção
  - Complementos
[ ] Salvar análise
[ ] Adicionar ao registro de refeições
```

**Componentes:**
- `FoodAnalyzer.tsx`
- `ImageUploader.tsx`
- `AnalysisResult.tsx`
- `FoodIdentification.tsx`
- `MacroEstimation.tsx`
- `Suggestions.tsx`

---

## 🗂️ ESTRUTURA DE ROTAS

```
apps/web/src/app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
│
├── (dashboard)/
│   ├── layout.tsx              # Layout com Sidebar
│   ├── dashboard/
│   │   └── page.tsx
│   ├── biblioteca/
│   │   ├── page.tsx
│   │   └── [capitulo]/
│   │       └── page.tsx
│   ├── receitas/
│   │   ├── page.tsx
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── lista-compras/
│   │       └── page.tsx
│   ├── plano/
│   │   ├── page.tsx
│   │   ├── calculadora/
│   │   │   └── page.tsx
│   │   ├── cardapio/
│   │   │   └── page.tsx
│   │   └── registro/
│   │       └── page.tsx
│   ├── ia/
│   │   ├── page.tsx
│   │   └── analisar/
│   │       └── page.tsx
│   ├── perfil/
│   │   └── page.tsx
│   └── configuracoes/
│       └── page.tsx
│
└── api/
    ├── recipes/
    │   ├── route.ts
    │   ├── [id]/
    │   │   └── route.ts
    │   └── favorite/
    │       └── route.ts
    ├── meal-plan/
    │   ├── calculate/
    │   │   └── route.ts
    │   ├── generate/
    │   │   └── route.ts
    │   └── current/
    │       └── route.ts
    ├── meal-log/
    │   └── route.ts
    ├── ai/
    │   ├── chat/
    │   │   └── route.ts
    │   ├── analyze-food/
    │   │   └── route.ts
    │   └── conversations/
    │       └── route.ts
    └── progress/
        ├── route.ts
        └── reading/
            └── route.ts
```

---

## 🗄️ BANCO DE DADOS (Supabase Schema)

```sql
-- Profiles (já existe da Fase 1)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  nome TEXT,
  email TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User Goals
CREATE TABLE user_goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) UNIQUE,
  peso_atual DECIMAL,
  peso_meta DECIMAL,
  altura INTEGER,
  idade INTEGER,
  sexo TEXT,
  nivel_atividade TEXT,
  objetivo TEXT,
  macros JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Recipes
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  prep_time INTEGER,
  difficulty TEXT,
  meal_type TEXT,
  servings INTEGER,
  ingredients JSONB,
  instructions JSONB,
  nutrition JSONB,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Favorites
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  recipe_id UUID REFERENCES recipes(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, recipe_id)
);

-- Recipe Ratings
CREATE TABLE recipe_ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  recipe_id UUID REFERENCES recipes(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, recipe_id)
);

-- Meal Plans
CREATE TABLE meal_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  week_start DATE,
  meals JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Meal Logs
CREATE TABLE meal_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  meal_type TEXT,
  description TEXT,
  image_url TEXT,
  macros JSONB,
  logged_at TIMESTAMP DEFAULT NOW()
);

-- Shopping Lists
CREATE TABLE shopping_lists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  items JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AI Conversations
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  messages JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AI Message Ratings
CREATE TABLE ai_message_ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES ai_conversations(id),
  message_index INTEGER,
  rating TEXT CHECK (rating IN ('positive', 'negative')),
  feedback TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reading Progress
CREATE TABLE reading_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  chapter_id TEXT,
  progress INTEGER,
  bookmarks JSONB,
  highlights JSONB,
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, chapter_id)
);

-- User Activity
CREATE TABLE user_activity (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  activity_type TEXT,
  activity_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_message_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;

-- RLS Policies (exemplo para profiles)
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Repetir políticas similares para outras tabelas
```

---

## 🔌 APIs A CRIAR

### Receitas
```typescript
// GET /api/recipes
// Listar receitas com filtros
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mealType = searchParams.get('mealType');
  const difficulty = searchParams.get('difficulty');
  // ... implementação
}

// GET /api/recipes/[id]
// Detalhes da receita
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // ... implementação
}

// POST /api/recipes/favorite
// Favoritar receita
export async function POST(request: Request) {
  const { recipeId } = await request.json();
  // ... implementação
}
```

### Plano Alimentar
```typescript
// POST /api/meal-plan/calculate
// Calcular macros
export async function POST(request: Request) {
  const userData = await request.json();
  // Calcular TMB, TDEE, macros
  // ... implementação
}

// POST /api/meal-plan/generate
// Gerar cardápio semanal
export async function POST(request: Request) {
  const { macros, preferences } = await request.json();
  // Gerar cardápio baseado em receitas
  // ... implementação
}

// POST /api/meal-log
// Registrar refeição
export async function POST(request: Request) {
  const mealData = await request.json();
  // ... implementação
}
```

### IA
```typescript
// POST /api/ai/chat
// Enviar mensagem para IA
export async function POST(request: Request) {
  const { message, conversationId } = await request.json();
  
  // Buscar contexto do usuário
  const userContext = await getUserContext();
  
  // Chamar OpenAI
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: "user", content: message }
    ]
  });
  
  // Salvar conversa
  // ... implementação
}

// POST /api/ai/analyze-food
// Analisar foto de refeição
export async function POST(request: Request) {
  const { imageUrl } = await request.json();
  
  // Chamar GPT-4 Vision
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "image_url", image_url: imageUrl },
          { type: "text", text: "Analise esta refeição..." }
        ]
      }
    ]
  });
  
  // ... implementação
}
```

---

## 🧩 COMPONENTES PRINCIPAIS

### Shared Components (packages/ui)
```typescript
// Button
export const Button = ({ children, variant, ...props }) => { }

// Input
export const Input = ({ label, error, ...props }) => { }

// Card
export const Card = ({ children, ...props }) => { }

// Modal
export const Modal = ({ isOpen, onClose, children }) => { }

// Toast
export const Toast = ({ message, type }) => { }

// Loading
export const Loading = ({ size }) => { }

// Avatar
export const Avatar = ({ src, name, size }) => { }

// Badge
export const Badge = ({ children, variant }) => { }

// Progress
export const Progress = ({ value, max }) => { }

// Tabs
export const Tabs = ({ tabs, activeTab, onChange }) => { }

// Dropdown
export const Dropdown = ({ options, value, onChange }) => { }
```

---

## 🔧 INTEGRAÇÕES NECESSÁRIAS

### 1. OpenAI
```bash
npm install openai
```

```typescript
// lib/openai.ts
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const SYSTEM_PROMPT = `
Você é Keto, a IA especialista em cetose do Cetose Consciente.
[... conforme IA.md]
`;
```

### 2. Supabase Storage
```typescript
// lib/storage.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function uploadImage(file: File, bucket: string) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(`${Date.now()}-${file.name}`, file);
  
  if (error) throw error;
  return data;
}
```

### 3. Supabase Realtime (opcional)
```typescript
// Para chat em tempo real
const channel = supabase
  .channel('ai-chat')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'ai_conversations'
  }, (payload) => {
    // Atualizar UI
  })
  .subscribe();
```

---

## ✅ CHECKLIST DE QUALIDADE

### Performance
```bash
[ ] Lighthouse Performance > 90
[ ] First Contentful Paint < 1.5s
[ ] Time to Interactive < 3.5s
[ ] Cumulative Layout Shift < 0.1
[ ] Largest Contentful Paint < 2.5s
[ ] Images otimizadas (WebP, lazy loading)
[ ] Code splitting implementado
[ ] Bundle size < 200KB (gzipped)
```

### Acessibilidade
```bash
[ ] Lighthouse Accessibility > 95
[ ] Navegação por teclado funcional
[ ] Screen reader friendly
[ ] Contraste de cores adequado (WCAG AA)
[ ] Labels em todos os inputs
[ ] Alt text em todas as imagens
[ ] Focus indicators visíveis
[ ] ARIA labels onde necessário
```

### SEO
```bash
[ ] Meta tags em todas as páginas
[ ] Open Graph tags
[ ] Twitter Card tags
[ ] Sitemap.xml
[ ] Robots.txt
[ ] Canonical URLs
[ ] Structured data (Schema.org)
```

### PWA
```bash
[ ] Service Worker configurado
[ ] Manifest.json completo
[ ] Instalável (Add to Home Screen)
[ ] Funciona offline
[ ] Push notifications (opcional)
[ ] Ícones em todos os tamanhos
[ ] Splash screens
```

### Segurança
```bash
[ ] HTTPS obrigatório
[ ] Headers de segurança (CSP, HSTS)
[ ] Sanitização de inputs
[ ] Proteção contra XSS
[ ] Proteção contra CSRF
[ ] Rate limiting em APIs
[ ] Validação server-side
[ ] Secrets em variáveis de ambiente
```

### Testes
```bash
[ ] Testes unitários (> 80% cobertura)
[ ] Testes de integração
[ ] Testes E2E (fluxos principais)
[ ] Testes de acessibilidade
[ ] Testes de performance
```

---

## 🎯 DEFINIÇÃO DE PRONTO (DoD)

### Fase 2 está completa quando:

**Autenticação:**
- [ ] Login funcionando
- [ ] Cadastro funcionando
- [ ] Recuperação de senha funcionando
- [ ] Logout funcionando
- [ ] Rotas protegidas

**Dashboard:**
- [ ] Estatísticas exibidas corretamente
- [ ] Gráficos funcionando
- [ ] Feed de atividades atualizado
- [ ] CTAs funcionais

**Biblioteca:**
- [ ] E-book navegável
- [ ] Progresso salvo
- [ ] Marcadores funcionando
- [ ] Busca funcionando
- [ ] Funciona offline

**Receitas:**
- [ ] 50+ receitas cadastradas
- [ ] Filtros funcionando
- [ ] Busca funcionando
- [ ] Favoritos funcionando
- [ ] Detalhes completos
- [ ] Lista de compras gerada

**Plano Alimentar:**
- [ ] Calculadora precisa
- [ ] Cardápio gerado automaticamente
- [ ] Lista de compras automática
- [ ] Registro de refeições com foto
- [ ] Histórico completo

**IA Keto:**
- [ ] Chat funcionando
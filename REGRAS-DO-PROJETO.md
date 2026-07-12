# 📜 REGRAS DO PROJETO - Cetose Consciente

> **Diretrizes permanentes e princípios fundamentais do projeto**  
> Todo desenvolvedor, designer ou IA deve ler e seguir estas regras.

**Versão:** 1.0  
**Data:** 2026-07-12  
**Status:** 🔴 OBRIGATÓRIO - Leitura obrigatória antes de qualquer desenvolvimento

---

## 🎯 VISÃO FUNDAMENTAL

### ⚠️ NUNCA ESQUEÇA

**Este NÃO é apenas um e-book.**

Este é um **ecossistema digital completo** de transformação nutricional que inclui:
- E-book interativo (PWA)
- Plataforma de membros
- IA especialista em cetose
- Sistema de gamificação
- Comunidade ativa
- Automações inteligentes
- Dashboard de métricas

**A landing page é apenas a porta de entrada**, não o produto final.

---

## 🏗️ PRINCÍPIOS DE ARQUITETURA

### 1. Arquitetura Escalável

```yaml
Sempre considere:
  - Crescimento de 100 → 10.000 usuários
  - Múltiplos módulos integrados
  - Microserviços quando apropriado
  - Cache e otimização de performance
  - CDN para assets estáticos
```

**❌ Nunca:**
- Criar soluções "quick and dirty"
- Hardcodar valores que podem mudar
- Ignorar limites de API
- Esquecer tratamento de erros

**✅ Sempre:**
- Usar variáveis de ambiente
- Implementar rate limiting
- Preparar para escala horizontal
- Documentar decisões arquiteturais

---

### 2. Ecossistema Integrado

```yaml
Todo módulo deve:
  - Ter API bem definida
  - Ser preparado para integração futura
  - Compartilhar dados via eventos
  - Manter consistência de dados
  - Ter versionamento claro
```

**Integrações Obrigatórias:**
- Supabase (banco de dados central)
- Kiwify (pagamentos e webhooks)
- OpenAI/Claude (IA)
- Google Analytics 4
- Meta Pixel + Conversions API
- Email marketing (futuro)

---

### 3. Automação em Primeiro Lugar

```yaml
Automatize tudo que for possível:
  - Onboarding de novos usuários
  - Envio de e-mails transacionais
  - Atualização de métricas
  - Backup de dados
  - Deploy e CI/CD
  - Testes automatizados
  - Monitoramento e alertas
```

**Regra de Ouro:**
> "Se você fizer manualmente mais de 2 vezes, automatize."

---

## 💻 PADRÕES DE DESENVOLVIMENTO

### 4. Código Documentado

```typescript
// ❌ ERRADO - Sem documentação
function calc(a, b) {
  return a * 0.75 + b * 0.25;
}

// ✅ CORRETO - Bem documentado
/**
 * Calcula os macros diários baseado no peso e objetivo
 * @param currentWeight - Peso atual em kg
 * @param targetWeight - Peso desejado em kg
 * @returns Calorias diárias recomendadas
 */
function calculateDailyMacros(
  currentWeight: number,
  targetWeight: number
): number {
  const baseCalories = currentWeight * 0.75;
  const targetAdjustment = targetWeight * 0.25;
  return baseCalories + targetAdjustment;
}
```

**Documentação Obrigatória:**
- Funções públicas (JSDoc/TSDoc)
- Componentes React (PropTypes/TypeScript)
- APIs (OpenAPI/Swagger)
- Fluxos complexos (diagramas Mermaid)
- Decisões arquiteturais (ADRs)

---

### 5. TypeScript Sempre

```yaml
Regras TypeScript:
  - Nunca usar 'any' (use 'unknown' se necessário)
  - Sempre tipar props de componentes
  - Criar interfaces para dados da API
  - Usar enums para constantes
  - Ativar strict mode
```

---

### 6. Testes Automatizados

```yaml
Cobertura Mínima:
  - Funções críticas: 100%
  - Componentes: 80%
  - Integrações: 70%
  - E2E (fluxos principais): 100%

Tipos de Teste:
  - Unitários (Jest/Vitest)
  - Integração (Testing Library)
  - E2E (Playwright/Cypress)
  - Performance (Lighthouse)
```

---

## 📱 MOBILE FIRST

### 7. Prioridade Mobile

```yaml
Ordem de Desenvolvimento:
  1. Mobile (320px - 768px)
  2. Tablet (768px - 1024px)
  3. Desktop (1024px+)

Sempre testar em:
  - iPhone SE (375px)
  - iPhone 12/13/14 (390px)
  - Samsung Galaxy (360px)
  - iPad (768px)
  - Desktop (1920px)
```

**Regras Mobile:**
- Touch targets mínimo: 44x44px
- Fonte mínima: 16px (evitar zoom)
- Imagens otimizadas (WebP)
- Lazy loading obrigatório
- Service Worker para offline

---

## 🚀 PERFORMANCE

### 8. Otimização Obrigatória

```yaml
Métricas Alvo (Lighthouse):
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 95
  - SEO: > 95

Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
```

**Técnicas Obrigatórias:**
- Code splitting
- Tree shaking
- Image optimization (WebP, AVIF)
- Font optimization (subset, preload)
- CSS crítico inline
- Lazy loading de componentes
- Prefetch de rotas

---

## 🔍 SEO

### 9. SEO em Todas as Páginas

```yaml
Obrigatório em Cada Página:
  - Title único e descritivo (50-60 chars)
  - Meta description (150-160 chars)
  - Open Graph tags (Facebook)
  - Twitter Card tags
  - Canonical URL
  - Schema.org markup
  - Sitemap.xml
  - Robots.txt

Estrutura HTML:
  - Apenas um H1 por página
  - Hierarquia correta (H1 → H2 → H3)
  - Alt text em todas as imagens
  - Links descritivos (não "clique aqui")
```

---

## 🔒 SEGURANÇA

### 10. Segurança em Primeiro Lugar

```yaml
Checklist de Segurança:
  - ✅ HTTPS obrigatório
  - ✅ Headers de segurança (CSP, HSTS)
  - ✅ Sanitização de inputs
  - ✅ Proteção contra XSS
  - ✅ Proteção contra CSRF
  - ✅ Rate limiting em APIs
  - ✅ Validação server-side
  - ✅ Secrets em variáveis de ambiente
  - ✅ Logs sem dados sensíveis
  - ✅ Backup automático diário
```

**Nunca Commitar:**
- API keys
- Senhas
- Tokens
- Certificados
- Dados de usuários

---

## 📊 RASTREAMENTO AVANÇADO

### 11. Analytics Completo

```yaml
Implementação Obrigatória:

Google Analytics 4:
  - Pageviews
  - Events customizados
  - User properties
  - E-commerce tracking
  - Conversões

Meta Pixel:
  - PageView
  - ViewContent
  - AddToCart
  - InitiateCheckout
  - Purchase
  - Lead

Meta Conversions API:
  - Server-side tracking
  - Deduplicação de eventos
  - Dados enriquecidos
  - Backup do pixel
```

**Eventos Customizados:**
```typescript
// Exemplo de evento bem estruturado
trackEvent({
  event: 'ebook_chapter_completed',
  category: 'engagement',
  label: 'chapter_3_science',
  value: 3,
  user_id: userId,
  timestamp: new Date().toISOString(),
  metadata: {
    reading_time: 420, // segundos
    scroll_depth: 95, // porcentagem
    device: 'mobile'
  }
});
```

---

## 🎨 DESIGN SYSTEM

### 12. Consistência Visual

```yaml
Sempre usar:
  - Tailwind CSS (utility-first)
  - Componentes reutilizáveis
  - Design tokens (cores, espaçamentos)
  - Ícones do Lucide React
  - Fontes: Manrope (títulos), Inter (corpo)

Paleta de Cores:
  - Primary: #10b981 (verde esmeralda)
  - Secondary: #000000 (preto)
  - Accent: #ffffff (branco)
  - Gray: zinc-400

Tema:
  - Dark mode por padrão
  - Glassmorphism (efeitos de vidro)
  - Neon glow sutil
  - Minimalista e científico
```

---

## 🔄 VERSIONAMENTO

### 13. Git Flow

```yaml
Branches:
  - main: Produção (sempre estável)
  - develop: Desenvolvimento
  - feature/*: Novas funcionalidades
  - fix/*: Correções
  - hotfix/*: Correções urgentes

Commits Semânticos:
  - feat: Nova funcionalidade
  - fix: Correção de bug
  - docs: Documentação
  - style: Formatação
  - refactor: Refatoração
  - test: Testes
  - chore: Manutenção

Exemplo:
  feat(landing): adiciona seção de depoimentos
  fix(auth): corrige erro de login no Safari
  docs(readme): atualiza instruções de instalação
```

---

## 📦 ESTRUTURA DE PASTAS

### 14. Organização Padrão

```
📁 cetose-consciente/
├── 📄 VISAO.md
├── 📄 PRODUTO.md
├── 📄 ARQUITETURA.md
├── 📄 ROADMAP.md
├── 📄 PROJECT_INDEX.md
├── 📄 REGRAS-DO-PROJETO.md
│
├── 📁 docs/              # Documentação técnica
├── 📁 knowledge/         # Base de conhecimento
├── 📁 landing/           # Landing page
├── 📁 app/               # Aplicativo PWA
├── 📁 backend/           # APIs e serviços
├── 📁 dashboard/         # Dashboard admin
├── 📁 automacoes/        # Scripts de automação
├── 📁 criativos/         # Assets de marketing
└── 📁 assets/            # Recursos estáticos
```

---

## ✅ CHECKLIST PRÉ-DEPLOY

### 15. Antes de Fazer Deploy

```yaml
[ ] Testes passando (100%)
[ ] Lighthouse > 90 em todas as métricas
[ ] SEO completo (meta tags, schema)
[ ] Analytics configurado (GA4 + Meta)
[ ] Variáveis de ambiente configuradas
[ ] Secrets não commitados
[ ] Documentação atualizada
[ ] Changelog atualizado
[ ] Backup do banco de dados
[ ] Monitoramento configurado
[ ] Rollback plan definido
[ ] Testes em staging
[ ] Aprovação do cliente/stakeholder
```

---

## 🚫 ANTI-PADRÕES

### O Que NUNCA Fazer

```yaml
❌ Desenvolver sem ler a documentação
❌ Commitar código não testado
❌ Ignorar warnings do TypeScript
❌ Usar console.log em produção
❌ Hardcodar URLs ou API keys
❌ Criar componentes gigantes (> 300 linhas)
❌ Ignorar acessibilidade
❌ Não otimizar imagens
❌ Esquecer tratamento de erros
❌ Não documentar decisões importantes
❌ Desenvolver sem considerar mobile
❌ Ignorar performance
❌ Não versionar mudanças
❌ Fazer deploy direto em produção
❌ Não fazer backup antes de mudanças críticas
```

---

## 🎓 RECURSOS OBRIGATÓRIOS

### Leitura Obrigatória Antes de Começar

1. [`PROJECT_INDEX.md`](PROJECT_INDEX.md) - Navegação
2. [`VISAO.md`](VISAO.md) - Visão do projeto
3. [`PRODUTO.md`](PRODUTO.md) - Definição do produto
4. [`ARQUITETURA.md`](ARQUITETURA.md) - Arquitetura técnica
5. [`ROADMAP.md`](ROADMAP.md) - Plano de desenvolvimento

### Documentação Técnica

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Supabase: https://supabase.com/docs

---

## 🔄 MANUTENÇÃO DESTAS REGRAS

### Atualização

Estas regras devem ser revisadas:
- **Mensalmente:** Pequenos ajustes
- **Trimestralmente:** Revisão completa
- **Quando necessário:** Novas tecnologias ou padrões

### Proposta de Mudanças

Para propor mudanças nestas regras:
1. Abra uma issue explicando o motivo
2. Discuta com a equipe
3. Documente a decisão (ADR)
4. Atualize este documento
5. Comunique a todos

---

## 📞 DÚVIDAS

Se tiver dúvidas sobre estas regras:
1. Consulte a documentação relacionada
2. Pergunte no canal da equipe
3. Documente a resposta para futuros desenvolvedores

---

**Última Atualização:** 2026-07-12  
**Próxima Revisão:** 2026-08-12

---

> **💡 Lembre-se:** Estas regras existem para garantir qualidade, consistência e escalabilidade. Não são burocracias, são fundamentos para o sucesso do projeto.

> **🎯 Objetivo Final:** Criar um produto excepcional que transforma vidas através da tecnologia e ciência.

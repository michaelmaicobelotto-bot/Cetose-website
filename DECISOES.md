# 🎯 DECISÕES ARQUITETURAIS - Cetose Consciente

> **Registro de todas as decisões importantes do projeto**  
> ADR (Architecture Decision Records) - Por que fizemos o que fizemos

**Versão:** 1.0  
**Data:** 2026-07-12  
**Propósito:** Documentar decisões para evitar rediscussões futuras

---

## 📋 ÍNDICE DE DECISÕES

| ID | Data | Decisão | Status |
|----|------|---------|--------|
| [ADR-001](#adr-001) | 2026-07-12 | Next.js como framework principal | ✅ Aprovado |
| [ADR-002](#adr-002) | 2026-07-12 | Supabase como backend | ✅ Aprovado |
| [ADR-003](#adr-003) | 2026-07-12 | PWA em vez de app nativo | ✅ Aprovado |
| [ADR-004](#adr-004) | 2026-07-12 | Meta Ads como canal principal | ✅ Aprovado |
| [ADR-005](#adr-005) | 2026-07-12 | Kiwify para pagamentos | ✅ Aprovado |
| [ADR-006](#adr-006) | 2026-07-12 | OpenAI + Claude para IA | ✅ Aprovado |
| [ADR-007](#adr-007) | 2026-07-12 | Preço inicial R$ 27,90 | ✅ Aprovado |
| [ADR-008](#adr-008) | 2026-07-12 | Dark mode como padrão | ✅ Aprovado |

---

## ADR-001: Next.js como Framework Principal

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe Técnica

### Contexto

Precisávamos escolher um framework para desenvolver a landing page, e-book interativo (PWA) e área de membros.

### Decisão

Escolhemos **Next.js 14** com App Router.

### Razões

**Vantagens:**
- ✅ SSR (Server-Side Rendering) para SEO
- ✅ SSG (Static Site Generation) para performance
- ✅ API Routes integradas
- ✅ Otimização automática de imagens
- ✅ Code splitting automático
- ✅ Suporte nativo a TypeScript
- ✅ Ecossistema React maduro
- ✅ Vercel deploy otimizado
- ✅ Middleware para autenticação
- ✅ Suporte a PWA com next-pwa

**Alternativas Consideradas:**
- ❌ **Gatsby:** Mais focado em blogs, menos flexível
- ❌ **Remix:** Menos maduro, menor comunidade
- ❌ **Create React App:** Sem SSR, pior SEO
- ❌ **Vue/Nuxt:** Equipe mais familiarizada com React

### Consequências

**Positivas:**
- Performance excelente (Lighthouse > 90)
- SEO otimizado desde o início
- Deploy simplificado na Vercel
- Facilidade de contratar desenvolvedores React

**Negativas:**
- Curva de aprendizado do App Router
- Vendor lock-in moderado com Vercel
- Bundle size maior que frameworks menores

### Referências
- [Next.js Documentation](https://nextjs.org/docs)
- [Why Next.js?](https://nextjs.org/learn/foundations/about-nextjs)

---

## ADR-002: Supabase como Backend

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe Técnica

### Contexto

Precisávamos de um backend escalável para gerenciar usuários, conteúdo, receitas, gamificação e dados do CRM.

### Decisão

Escolhemos **Supabase** (PostgreSQL + Auth + Storage + Realtime).

### Razões

**Vantagens:**
- ✅ PostgreSQL (banco relacional robusto)
- ✅ Autenticação integrada (email, OAuth)
- ✅ Row Level Security (RLS) nativo
- ✅ Storage para arquivos (e-book, imagens)
- ✅ Realtime subscriptions
- ✅ API REST e GraphQL automáticas
- ✅ Edge Functions (Deno)
- ✅ Preço acessível (free tier generoso)
- ✅ Open source (sem vendor lock-in total)
- ✅ Dashboard admin intuitivo

**Alternativas Consideradas:**
- ❌ **Firebase:** NoSQL menos adequado para dados relacionais
- ❌ **AWS Amplify:** Mais complexo, curva de aprendizado maior
- ❌ **Backend custom:** Mais tempo de desenvolvimento
- ❌ **PlanetScale:** Apenas banco, sem auth/storage

### Consequências

**Positivas:**
- Desenvolvimento rápido (backend pronto)
- Escalabilidade automática
- Segurança robusta (RLS)
- Custo previsível

**Negativas:**
- Dependência de serviço terceiro
- Limitações do free tier (500MB storage)
- Menos controle sobre infraestrutura

### Referências
- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL vs NoSQL](https://supabase.com/blog/postgres-vs-nosql)

---

## ADR-003: PWA em vez de App Nativo

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe Técnica + Produto

### Contexto

Precisávamos decidir entre desenvolver um PWA (Progressive Web App) ou aplicativos nativos (iOS + Android).

### Decisão

Escolhemos **PWA** para o e-book interativo e área de membros.

### Razões

**Vantagens:**
- ✅ Um código para todas as plataformas
- ✅ Sem aprovação de App Store/Play Store
- ✅ Atualizações instantâneas
- ✅ Menor custo de desenvolvimento
- ✅ Funciona offline (Service Worker)
- ✅ Instalável no celular
- ✅ Push notifications
- ✅ Acesso via browser também
- ✅ SEO (indexável pelo Google)

**Alternativas Consideradas:**
- ❌ **App Nativo (Swift/Kotlin):** 2x o custo, 2x o tempo
- ❌ **React Native:** Complexidade adicional, bugs específicos de plataforma
- ❌ **Flutter:** Equipe não familiarizada com Dart

### Consequências

**Positivas:**
- Time-to-market mais rápido
- Custo de desenvolvimento 50% menor
- Manutenção simplificada
- Atualizações sem aprovação

**Negativas:**
- Acesso limitado a APIs nativas
- Performance ligeiramente inferior
- Menos "nativo" na experiência
- Limitações em iOS (notificações)

### Plano Futuro

Se o produto validar (> 10.000 usuários ativos), considerar app nativo para:
- Melhor performance
- Acesso a APIs nativas (câmera, sensores)
- Presença nas lojas de apps

### Referências
- [PWA vs Native Apps](https://web.dev/progressive-web-apps/)
- [Next.js PWA](https://github.com/shadowwalker/next-pwa)

---

## ADR-004: Meta Ads como Canal Principal

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe de Marketing

### Contexto

Precisávamos definir o canal principal de aquisição de clientes.

### Decisão

Escolhemos **Meta Ads (Facebook + Instagram)** como canal principal (70% do budget).

### Razões

**Vantagens:**
- ✅ Público-alvo bem definido (mulheres 30-50 anos)
- ✅ Segmentação avançada (interesses, comportamento)
- ✅ Formatos visuais (antes/depois, vídeos)
- ✅ Remarketing poderoso
- ✅ Conversions API para rastreamento preciso
- ✅ Lookalike audiences
- ✅ Custo por lead competitivo (R$ 5-10)

**Alternativas Consideradas:**
- ⚠️ **Google Ads:** Complementar (20% do budget)
  - Bom para busca ativa ("dieta cetogênica")
  - Menor para descoberta
- ❌ **TikTok Ads:** Público mais jovem (não nosso avatar)
- ❌ **LinkedIn Ads:** Muito caro (CPL > R$ 50)
- ❌ **YouTube Ads:** Requer produção de vídeo profissional

### Consequências

**Positivas:**
- CAC alvo alcançável (R$ 30)
- ROAS esperado > 3.0
- Escala rápida possível
- Dados ricos para otimização

**Negativas:**
- Dependência de uma plataforma
- Mudanças frequentes no algoritmo
- Necessidade de criativos constantes
- Restrições de anúncios de saúde

### Estratégia

**Fase 1 (Meses 1-3):**
- 70% Meta Ads
- 20% Google Ads
- 10% Orgânico

**Fase 2 (Meses 4-6):**
- Adicionar YouTube Ads
- Testar TikTok Ads
- Expandir orgânico (SEO)

### Referências
- [Meta Ads Best Practices](https://www.facebook.com/business/ads)
- [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)

---

## ADR-005: Kiwify para Pagamentos

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe de Produto + Financeiro

### Contexto

Precisávamos de uma plataforma de pagamentos para vender o e-book e gerenciar assinaturas.

### Decisão

Escolhemos **Kiwify** como plataforma de pagamentos e checkout.

### Razões

**Vantagens:**
- ✅ Focado em infoprodutos brasileiros
- ✅ Checkout otimizado (conversão alta)
- ✅ Suporte a PIX, cartão, boleto
- ✅ Webhooks para integração
- ✅ Gestão de afiliados integrada
- ✅ Área de membros básica
- ✅ Suporte em português
- ✅ Taxa competitiva (4,99% + R$ 1)
- ✅ Sem mensalidade

**Alternativas Consideradas:**
- ❌ **Hotmart:** Taxa mais alta (9,9%)
- ❌ **Eduzz:** Interface menos intuitiva
- ❌ **Stripe:** Requer empresa no exterior
- ❌ **Mercado Pago:** Checkout menos otimizado
- ❌ **PagSeguro:** Taxas altas, UX ruim

### Consequências

**Positivas:**
- Checkout otimizado (conversão 2-6%)
- Integração simples via webhooks
- Programa de afiliados pronto
- Suporte responsivo

**Negativas:**
- Menos controle sobre checkout
- Dependência de plataforma brasileira
- Limitações de customização
- Dados de clientes na Kiwify

### Plano Futuro

Se escalar muito (> R$ 100k/mês), considerar:
- Checkout próprio com Stripe
- Maior controle sobre dados
- Menor taxa (2,9% + $0,30)

### Referências
- [Kiwify Documentation](https://kiwify.com.br/docs)
- [Kiwify Webhooks](https://kiwify.com.br/docs/webhooks)

---

## ADR-006: OpenAI + Claude para IA

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe Técnica

### Contexto

Precisávamos escolher qual(is) modelo(s) de IA usar para o assistente especialista em cetose.

### Decisão

Escolhemos **OpenAI GPT-4** como principal e **Anthropic Claude** como backup/complementar.

### Razões

**OpenAI GPT-4:**
- ✅ Melhor para conversação natural
- ✅ Conhecimento médico/nutricional robusto
- ✅ API estável e documentada
- ✅ Suporte a function calling
- ✅ Custo previsível ($0.03/1K tokens)

**Anthropic Claude:**
- ✅ Melhor para textos longos (100K tokens)
- ✅ Mais "seguro" (menos alucinações)
- ✅ Bom para análise de documentos
- ✅ Backup se OpenAI cair

**Alternativas Consideradas:**
- ❌ **Google Gemini:** Menos maduro, API instável
- ❌ **Llama 2 (open source):** Requer infraestrutura própria
- ❌ **Cohere:** Menos conhecido, menor comunidade

### Consequências

**Positivas:**
- Qualidade de resposta excelente
- Redundância (dois provedores)
- Flexibilidade de escolha por caso de uso

**Negativas:**
- Custo variável (depende do uso)
- Dependência de APIs externas
- Necessidade de moderação de conteúdo

### Casos de Uso

**GPT-4:**
- Chat com usuários
- Sugestões de receitas
- Análise de fotos de refeições
- Respostas rápidas

**Claude:**
- Análise de e-book completo
- Geração de planos alimentares
- Resumos de estudos científicos
- Conteúdo longo

### Referências
- [OpenAI API](https://platform.openai.com/docs)
- [Anthropic Claude](https://www.anthropic.com/claude)

---

## ADR-007: Preço Inicial R$ 27,90

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe de Produto + Marketing

### Contexto

Precisávamos definir o preço do e-book para maximizar conversão e receita.

### Decisão

Escolhemos **R$ 27,90** como preço de entrada (tripwire).

### Razões

**Análise de Mercado:**
- E-books similares: R$ 19,90 - R$ 47,00
- Cursos online: R$ 97,00 - R$ 497,00
- Consultorias: R$ 300,00 - R$ 1.500,00

**Estratégia de Preço:**
- ✅ Baixo o suficiente para conversão alta (2-6%)
- ✅ Alto o suficiente para ser levado a sério
- ✅ Permite upsells lucrativos
- ✅ CAC recuperável na primeira venda
- ✅ Psicologia: R$ 27,90 < R$ 30 (barreira mental)

**Cálculo:**
```
CAC alvo: R$ 30
Preço: R$ 27,90
Margem: ~90% (produto digital)
Lucro por venda: R$ 25,11
Break-even: 1,2 vendas por lead
```

**Alternativas Consideradas:**
- ❌ **R$ 19,90:** Muito barato, desvaloriza
- ❌ **R$ 47,00:** Conversão menor, CAC não recupera
- ❌ **R$ 9,90:** Não cobre CAC

### Consequências

**Positivas:**
- Conversão esperada: 2-6%
- Break-even rápido
- Permite testar mercado
- Facilita upsells

**Negativas:**
- Margem baixa na primeira venda
- Depende de upsells para lucro
- Pode atrair clientes menos qualificados

### Estratégia de Upsells

**Funil de Valor:**
1. E-book: R$ 27,90 (entrada)
2. Plano Alimentar: +R$ 47 (upsell imediato)
3. Clube Premium: R$ 47/mês (recorrente)
4. Curso em Vídeo: R$ 197 (upsell futuro)
5. Consultoria 1:1: R$ 497 (premium)

**LTV Esperado:**
- Conservador: R$ 37,30
- Realista: R$ 60,80
- Otimista: R$ 152,80

### Testes Futuros

Após validação inicial, testar:
- A/B test: R$ 27,90 vs R$ 37,00
- Desconto por tempo limitado
- Bundle (e-book + plano): R$ 67,00

### Referências
- [Pricing Psychology](https://www.nickkolenda.com/psychological-pricing-strategies/)
- [Tripwire Pricing](https://www.digitalmarketer.com/blog/tripwire-offer/)

---

## ADR-008: Dark Mode como Padrão

**Data:** 2026-07-12  
**Status:** ✅ Aprovado  
**Decisores:** Equipe de Design + Produto

### Contexto

Precisávamos definir o tema visual padrão da plataforma.

### Decisão

Escolhemos **Dark Mode** como tema padrão, com opção de Light Mode.

### Razões

**Vantagens:**
- ✅ Moderno e premium
- ✅ Menos cansativo para leitura longa
- ✅ Economia de bateria (OLED)
- ✅ Destaque para conteúdo visual
- ✅ Diferenciação da concorrência
- ✅ Alinhado com identidade "científica"
- ✅ Verde neon (#10b981) se destaca melhor

**Dados:**
- 70% dos usuários preferem dark mode à noite
- E-book será lido principalmente à noite (20h-23h)
- Público-alvo: 30-50 anos (conforto visual importante)

**Alternativas Consideradas:**
- ❌ **Light Mode padrão:** Mais comum, menos diferenciado
- ❌ **Apenas Dark Mode:** Acessibilidade (alguns preferem light)
- ❌ **Auto (sistema):** Menos controle, pode confundir

### Consequências

**Positivas:**
- Identidade visual única
- Conforto para leitura noturna
- Destaque para elementos importantes
- Economia de bateria mobile

**Negativas:**
- Contraste pode ser difícil para alguns
- Mais trabalho de design (dois temas)
- Impressão pode ficar ruim (se alguém imprimir)

### Implementação

**Paleta Dark Mode:**
```css
--background: #000000
--foreground: #ffffff
--primary: #10b981 (verde esmeralda)
--secondary: #zinc-800
--accent: #zinc-400
```

**Paleta Light Mode:**
```css
--background: #ffffff
--foreground: #000000
--primary: #059669 (verde mais escuro)
--secondary: #zinc-200
--accent: #zinc-600
```

**Toggle:**
- Botão visível no header
- Preferência salva no localStorage
- Transição suave (300ms)

### Referências
- [Dark Mode Best Practices](https://web.dev/prefers-color-scheme/)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)

---

## 📝 TEMPLATE PARA NOVAS DECISÕES

```markdown
## ADR-XXX: [Título da Decisão]

**Data:** YYYY-MM-DD  
**Status:** 🟡 Em Discussão / ✅ Aprovado / ❌ Rejeitado / 🔄 Revisado  
**Decisores:** [Quem participou da decisão]

### Contexto
[Descreva o problema ou situação que levou à decisão]

### Decisão
[Qual foi a decisão tomada]

### Razões
[Por que essa decisão foi tomada]

**Vantagens:**
- ✅ [Vantagem 1]
- ✅ [Vantagem 2]

**Alternativas Consideradas:**
- ❌ [Alternativa 1]: [Por que foi rejeitada]
- ❌ [Alternativa 2]: [Por que foi rejeitada]

### Consequências

**Positivas:**
- [Consequência positiva 1]
- [Consequência positiva 2]

**Negativas:**
- [Consequência negativa 1]
- [Consequência negativa 2]

### Referências
- [Link 1]
- [Link 2]
```

---

## 🔄 REVISÃO DE DECISÕES

### Quando Revisar

Uma decisão deve ser revisada quando:
- Contexto mudou significativamente
- Nova tecnologia/alternativa surgiu
- Problemas não previstos apareceram
- Escala do projeto mudou
- Feedback dos usuários indica necessidade

### Como Revisar

1. Criar nova ADR com status "🔄 Revisão de ADR-XXX"
2. Documentar o que mudou
3. Reavaliar alternativas
4. Tomar nova decisão
5. Atualizar ADR original com link para revisão

---

**Última Atualização:** 2026-07-12  
**Próxima Revisão:** Trimestral ou quando necessário

---

> **💡 Lembre-se:** Decisões não são permanentes, mas devem ser documentadas. É melhor mudar uma decisão documentada do que manter uma decisão ruim por inércia.

# 🎛️ FASE 3: PLATAFORMA ADMINISTRATIVA

> **Dashboard administrativo completo para gestão do negócio**  
> CRM, Financeiro, Criativos, Meta Ads, Automações e Analytics

**Duração:** 4-6 semanas  
**Pré-requisito:** Fase 2 (Aplicativo) concluída  
**Data:** 2026-07-12

---

## 🎯 OBJETIVO DA FASE 3

Criar a plataforma administrativa completa para gerenciar todos os aspectos do negócio:
- CRM para gestão de leads e clientes
- Dashboard financeiro
- Biblioteca de criativos
- Integração com Meta Ads
- Automações de marketing
- Analytics avançado

---

## 📋 CHECKLIST COMPLETO

### Semana 1: CRM

#### 1. Dashboard CRM (/admin/crm)
```bash
[ ] Criar layout admin
[ ] Sidebar de navegação admin
[ ] Dashboard principal do CRM:
  - Total de leads
  - Taxa de conversão
  - Receita total
  - Gráficos de funil
[ ] Filtros por período
[ ] Exportar relatórios
```

#### 2. Gestão de Leads (/admin/crm/leads)
```bash
[ ] Lista de leads:
  - Nome
  - Email
  - Telefone
  - Origem (Meta Ads, Google, Orgânico)
  - Status (Novo, Qualificado, Convertido, Perdido)
  - Data de cadastro
  - Última interação
[ ] Filtros avançados:
  - Por status
  - Por origem
  - Por período
  - Por tags
[ ] Busca por nome/email
[ ] Ordenação
[ ] Paginação
[ ] Ações em massa:
  - Adicionar tag
  - Mudar status
  - Exportar
  - Deletar
```

#### 3. Detalhes do Lead (/admin/crm/leads/[id])
```bash
[ ] Informações do lead:
  - Dados pessoais
  - Origem
  - UTM parameters
  - Histórico de interações
  - Emails enviados
  - Páginas visitadas
  - Tempo no site
[ ] Timeline de atividades
[ ] Adicionar notas
[ ] Adicionar tags
[ ] Enviar email
[ ] Mudar status
[ ] Atribuir responsável
```

#### 4. Pipeline de Vendas (/admin/crm/pipeline)
```bash
[ ] Visualização Kanban:
  - Novo Lead
  - Qualificado
  - Oportunidade
  - Negociação
  - Ganho
  - Perdido
[ ] Drag & drop entre estágios
[ ] Valor da oportunidade
[ ] Probabilidade de fechamento
[ ] Tempo no estágio
[ ] Filtros por responsável
[ ] Métricas do pipeline:
  - Taxa de conversão por estágio
  - Tempo médio por estágio
  - Valor total do pipeline
```

---

### Semana 2: Dashboard Financeiro

#### 5. Dashboard Financeiro (/admin/financeiro)
```bash
[ ] Métricas principais:
  - Receita total
  - Receita recorrente (MRR)
  - Ticket médio
  - LTV (Lifetime Value)
  - CAC (Custo de Aquisição)
  - LTV/CAC ratio
  - Churn rate
  - ROAS (Return on Ad Spend)
[ ] Gráficos:
  - Receita mensal (linha)
  - Receita por produto (pizza)
  - Receita por canal (barras)
  - Crescimento MoM (%)
[ ] Filtros por período
[ ] Comparação com período anterior
[ ] Exportar relatórios
```

#### 6. Transações (/admin/financeiro/transacoes)
```bash
[ ] Lista de transações:
  - ID da transação
  - Cliente
  - Produto
  - Valor
  - Status (Pago, Pendente, Reembolsado)
  - Método de pagamento
  - Data
[ ] Filtros:
  - Por status
  - Por produto
  - Por período
  - Por método de pagamento
[ ] Busca por cliente/ID
[ ] Detalhes da transação
[ ] Processar reembolso
[ ] Exportar para Excel/CSV
```

#### 7. Assinaturas (/admin/financeiro/assinaturas)
```bash
[ ] Lista de assinaturas:
  - Cliente
  - Plano
  - Valor mensal
  - Status (Ativa, Cancelada, Pausada)
  - Data de início
  - Próxima cobrança
  - Tempo de vida
[ ] Métricas:
  - MRR (Monthly Recurring Revenue)
  - ARR (Annual Recurring Revenue)
  - Churn rate
  - Retenção
[ ] Filtros por status/plano
[ ] Cancelar assinatura
[ ] Pausar assinatura
[ ] Alterar plano
```

---

### Semana 3: Biblioteca de Criativos

#### 8. Biblioteca de Criativos (/admin/criativos)
```bash
[ ] Upload de criativos:
  - Imagens (PNG, JPG, WebP)
  - Vídeos (MP4, MOV)
  - GIFs
  - Drag & drop
  - Upload múltiplo
[ ] Organização:
  - Pastas/categorias
  - Tags
  - Favoritos
[ ] Visualização:
  - Grid view
  - List view
  - Preview modal
[ ] Informações:
  - Dimensões
  - Tamanho do arquivo
  - Data de upload
  - Usado em (campanhas)
[ ] Ações:
  - Editar (crop, resize)
  - Duplicar
  - Deletar
  - Download
  - Compartilhar link
[ ] Busca e filtros
```

#### 9. Editor de Criativos (/admin/criativos/editor)
```bash
[ ] Editor integrado:
  - Crop
  - Resize
  - Filtros
  - Texto
  - Stickers
  - Ajustes (brilho, contraste, saturação)
[ ] Templates pré-definidos:
  - Stories Instagram (1080x1920)
  - Feed Instagram (1080x1080)
  - Facebook Ad (1200x628)
  - Google Display (300x250, 728x90)
[ ] Salvar como novo
[ ] Exportar em múltiplos formatos
```

---

### Semana 4: Meta Ads

#### 10. Dashboard Meta Ads (/admin/meta-ads)
```bash
[ ] Integração Meta Business API
[ ] Métricas principais:
  - Impressões
  - Cliques
  - CTR (Click-Through Rate)
  - CPC (Cost Per Click)
  - CPM (Cost Per Mille)
  - Conversões
  - CPA (Cost Per Acquisition)
  - ROAS
  - Gasto total
[ ] Gráficos:
  - Performance diária
  - Comparação de campanhas
  - Funil de conversão
[ ] Filtros por período
[ ] Comparação com período anterior
```

#### 11. Campanhas (/admin/meta-ads/campanhas)
```bash
[ ] Lista de campanhas:
  - Nome
  - Status (Ativa, Pausada, Encerrada)
  - Budget diário
  - Gasto
  - Impressões
  - Cliques
  - Conversões
  - ROAS
[ ] Criar nova campanha:
  - Objetivo
  - Público-alvo
  - Orçamento
  - Programação
  - Criativos
[ ] Editar campanha
[ ] Pausar/Ativar
[ ] Duplicar
[ ] Arquivar
[ ] Relatório detalhado
```

#### 12. Conjuntos de Anúncios (/admin/meta-ads/conjuntos)
```bash
[ ] Lista de conjuntos:
  - Campanha pai
  - Nome
  - Status
  - Budget
  - Público
  - Posicionamentos
  - Performance
[ ] Criar conjunto:
  - Público-alvo (Lookalike, Custom, Saved)
  - Posicionamentos (Feed, Stories, Reels)
  - Otimização (Conversões, Cliques, Impressões)
  - Budget e programação
[ ] Editar conjunto
[ ] Testes A/B
```

#### 13. Anúncios (/admin/meta-ads/anuncios)
```bash
[ ] Lista de anúncios:
  - Conjunto pai
  - Nome
  - Status
  - Criativo
  - Copy
  - CTA
  - Performance
[ ] Criar anúncio:
  - Selecionar criativo
  - Escrever copy
  - Adicionar CTA
  - Preview (Feed, Stories, Reels)
[ ] Editar anúncio
[ ] Testes A/B de copy
[ ] Testes A/B de criativo
[ ] Histórico de versões
```

---

### Semana 5: Automações

#### 14. Automações de Email (/admin/automacoes/email)
```bash
[ ] Sequências de email:
  - Onboarding (7 dias)
  - Engajamento (14 dias)
  - Reativação (30 dias)
  - Upsell (60 dias)
[ ] Editor de sequência:
  - Adicionar email
  - Definir delay
  - Condições (if/else)
  - Testes A/B
[ ] Templates de email:
  - Biblioteca de templates
  - Editor visual (drag & drop)
  - Variáveis dinâmicas
  - Preview
[ ] Métricas:
  - Taxa de abertura
  - Taxa de clique
  - Taxa de conversão
  - Descadastros
```

#### 15. Webhooks (/admin/automacoes/webhooks)
```bash
[ ] Configurar webhooks:
  - Kiwify (compra, reembolso, assinatura)
  - Supabase (novos usuários)
  - Meta Ads (conversões)
[ ] Logs de webhooks:
  - Timestamp
  - Origem
  - Payload
  - Status (sucesso/erro)
  - Retry automático
[ ] Testar webhook
[ ] Documentação
```

#### 16. Fluxos de Automação (/admin/automacoes/fluxos)
```bash
[ ] Editor visual de fluxos:
  - Trigger (evento inicial)
  - Ações (enviar email, adicionar tag, etc.)
  - Condições (if/else)
  - Delays
  - Loops
[ ] Triggers disponíveis:
  - Novo lead
  - Nova compra
  - Abandono de carrinho
  - Inatividade (X dias)
  - Aniversário
  - Meta atingida
[ ] Ações disponíveis:
  - Enviar email
  - Enviar SMS
  - Adicionar tag
  - Mudar status
  - Criar tarefa
  - Webhook
[ ] Testar fluxo
[ ] Ativar/Desativar
[ ] Métricas do fluxo
```

---

### Semana 6: Analytics

#### 17. Dashboard Analytics (/admin/analytics)
```bash
[ ] Integração Google Analytics 4
[ ] Métricas principais:
  - Usuários
  - Sessões
  - Pageviews
  - Bounce rate
  - Tempo médio no site
  - Páginas por sessão
[ ] Gráficos:
  - Usuários ao longo do tempo
  - Páginas mais visitadas
  - Origem do tráfego
  - Dispositivos
  - Localização geográfica
[ ] Funil de conversão:
  - Landing page
  - Checkout
  - Compra
  - Taxa de conversão por etapa
[ ] Eventos customizados:
  - Clique em CTA
  - Scroll depth
  - Tempo de leitura
  - Vídeo assistido
```

#### 18. Relatórios Customizados (/admin/analytics/relatorios)
```bash
[ ] Criar relatório:
  - Selecionar métricas
  - Selecionar dimensões
  - Filtros
  - Período
  - Visualização (tabela, gráfico)
[ ] Salvar relatório
[ ] Agendar envio por email
[ ] Exportar (PDF, Excel, CSV)
[ ] Compartilhar link
```

#### 19. Experimentos A/B (/admin/analytics/experimentos)
```bash
[ ] Criar experimento:
  - Nome
  - Hipótese
  - Variante A (controle)
  - Variante B (teste)
  - Métrica de sucesso
  - Tráfego (% split)
  - Duração
[ ] Monitorar experimento:
  - Visitantes por variante
  - Conversões por variante
  - Significância estatística
  - Gráfico de evolução
[ ] Finalizar experimento:
  - Declarar vencedor
  - Aplicar vencedor
  - Arquivar
[ ] Histórico de experimentos
```

---

## 🗂️ ESTRUTURA DE ROTAS

```
apps/admin/src/app/
├── (auth)/
│   └── login/
│       └── page.tsx
│
├── (dashboard)/
│   ├── layout.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── crm/
│   │   ├── page.tsx
│   │   ├── leads/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── pipeline/
│   │       └── page.tsx
│   ├── financeiro/
│   │   ├── page.tsx
│   │   ├── transacoes/
│   │   │   └── page.tsx
│   │   └── assinaturas/
│   │       └── page.tsx
│   ├── criativos/
│   │   ├── page.tsx
│   │   └── editor/
│   │       └── page.tsx
│   ├── meta-ads/
│   │   ├── page.tsx
│   │   ├── campanhas/
│   │   │   └── page.tsx
│   │   ├── conjuntos/
│   │   │   └── page.tsx
│   │   └── anuncios/
│   │       └── page.tsx
│   ├── automacoes/
│   │   ├── email/
│   │   │   └── page.tsx
│   │   ├── webhooks/
│   │   │   └── page.tsx
│   │   └── fluxos/
│   │       └── page.tsx
│   └── analytics/
│       ├── page.tsx
│       ├── relatorios/
│       │   └── page.tsx
│       └── experimentos/
│           └── page.tsx
│
└── api/
    ├── crm/
    ├── financeiro/
    ├── criativos/
    ├── meta-ads/
    ├── automacoes/
    └── analytics/
```

---

## 🗄️ BANCO DE DADOS (Extensões)

```sql
-- Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT,
  email TEXT UNIQUE,
  telefone TEXT,
  origem TEXT,
  status TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  tags TEXT[],
  responsavel_id UUID REFERENCES profiles(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lead Activities
CREATE TABLE lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id),
  activity_type TEXT,
  description TEXT,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  product TEXT,
  amount DECIMAL,
  status TEXT,
  payment_method TEXT,
  kiwify_transaction_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  plan TEXT,
  amount DECIMAL,
  status TEXT,
  started_at TIMESTAMP,
  next_billing TIMESTAMP,
  canceled_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Creatives
CREATE TABLE creatives (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  type TEXT,
  url TEXT,
  thumbnail_url TEXT,
  dimensions JSONB,
  file_size INTEGER,
  tags TEXT[],
  folder TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Meta Ads Campaigns
CREATE TABLE meta_campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meta_campaign_id TEXT UNIQUE,
  name TEXT,
  status TEXT,
  objective TEXT,
  budget DECIMAL,
  metrics JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Email Sequences
CREATE TABLE email_sequences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  trigger TEXT,
  emails JSONB,
  status TEXT,
  metrics JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Automation Flows
CREATE TABLE automation_flows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  trigger TEXT,
  actions JSONB,
  status TEXT,
  metrics JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- A/B Tests
CREATE TABLE ab_tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  hypothesis TEXT,
  variant_a JSONB,
  variant_b JSONB,
  metric TEXT,
  traffic_split INTEGER,
  status TEXT,
  results JSONB,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔌 INTEGRAÇÕES

### 1. Meta Business API
```typescript
// lib/meta-api.ts
import { FacebookAdsApi } from 'facebook-nodejs-business-sdk';

const api = FacebookAdsApi.init(process.env.META_ACCESS_TOKEN);

export async function getCampaigns() {
  // ... implementação
}

export async function createCampaign(data) {
  // ... implementação
}
```

### 2. Google Analytics 4
```typescript
// lib/ga4.ts
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const analyticsDataClient = new BetaAnalyticsDataClient();

export async function getReport(metrics, dimensions) {
  // ... implementação
}
```

### 3. SendGrid (Email)
```typescript
// lib/sendgrid.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(to, template, data) {
  // ... implementação
}
```

---

## 🎯 DEFINIÇÃO DE PRONTO (DoD)

### Fase 3 está completa quando:

**CRM:**
- [ ] Leads sendo capturados automaticamente
- [ ] Pipeline funcionando
- [ ] Notas e tags funcionando
- [ ] Relatórios exportáveis

**Financeiro:**
- [ ] Transações sincronizadas com Kiwify
- [ ] MRR calculado corretamente
- [ ] Relatórios precisos
- [ ] Reembolsos processáveis

**Criativos:**
- [ ] Upload funcionando
- [ ] Organização por pastas
- [ ] Editor básico funcionando
- [ ] Templates disponíveis

**Meta Ads:**
- [ ] Integração funcionando
- [ ] Métricas atualizadas
- [ ] Campanhas gerenciáveis
- [ ] Relatórios precisos

**Automações:**
- [ ] Sequências de email ativas
- [ ] Webhooks configurados
- [ ] Fluxos funcionando
- [ ] Logs disponíveis

**Analytics:**
- [ ] GA4 integrado
- [ ] Métricas atualizadas
- [ ] Funil de conversão rastreado
- [ ] Experimentos A/B funcionando

---

**Próxima Fase:** [`FASE-4-ESCALA.md`](FASE-4-ESCALA.md)

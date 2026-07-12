# 💻 Aplicativo Web - Dashboard Admin

> Especificações do dashboard administrativo e aplicativo web.

---

## 🎯 Visão Geral

### Objetivo
Plataforma web para gestão completa de leads, campanhas, métricas e automações.

### Usuários
- Administradores
- Gestores de marketing
- Equipe de vendas

---

## 🏗️ Arquitetura

### Stack Tecnológica
- **Framework:** Next.js 14+ (App Router)
- **UI:** shadcn/ui + Tailwind CSS
- **State:** Zustand + React Query
- **Gráficos:** Recharts
- **Tabelas:** TanStack Table
- **Forms:** React Hook Form + Zod

### Estrutura de Rotas
```
/dashboard
├── /                    # Overview
├── /leads              # Gestão de leads
├── /leads/[id]         # Detalhes do lead
├── /pages              # Gestão de páginas
├── /pages/new          # Criar página
├── /pages/[slug]       # Editar página
├── /analytics          # Métricas e gráficos
├── /campaigns          # Campanhas Meta Ads
├── /emails             # Email marketing
├── /experiments        # A/B Testing
├── /payments           # Transações
├── /crm                # CRM e pipeline
└── /settings           # Configurações
```

---

## 📊 Páginas Principais

### 1. Dashboard Overview (`/dashboard`)
**Métricas:**
- Total de leads (hoje, semana, mês)
- Taxa de conversão
- Receita total
- Páginas mais visitadas

**Gráficos:**
- Leads por dia (últimos 30 dias)
- Funil de conversão
- Origem de tráfego

**Tabela:**
- Últimos 10 leads capturados

### 2. Gestão de Leads (`/dashboard/leads`)
**Funcionalidades:**
- Tabela com filtros (status, data, página)
- Busca por email/nome
- Exportação CSV
- Ações em massa
- Detalhes do lead (timeline)

### 3. Analytics (`/dashboard/analytics`)
**Métricas:**
- Funil de conversão
- Origem de tráfego (UTM)
- Dispositivos
- Navegadores
- Taxa de rejeição

### 4. Campanhas (`/dashboard/campaigns`)
**Funcionalidades:**
- Criar campanha Meta Ads
- Editar campanha
- Pausar/ativar
- Relatórios de performance
- ROI e ROAS

---

## 🎨 Design System

### Paleta de Cores
- **Primary:** Emerald (#10b981)
- **Background:** Zinc-950
- **Cards:** Zinc-900
- **Borders:** Zinc-800
- **Text:** White/Zinc-400

### Componentes shadcn/ui
- Button
- Card
- Table
- Dialog
- Select
- Input
- Textarea
- Badge
- Tabs
- Chart

---

## 🔐 Autenticação

### NextAuth.js
- Login com email/senha
- JWT tokens
- Session management
- Protected routes

---

## 📱 Responsividade

- Mobile-first
- Sidebar colapsável
- Tabelas responsivas
- Gráficos adaptáveis

---

**Última Atualização:** 2026-07-11  
**Versão:** 1.0

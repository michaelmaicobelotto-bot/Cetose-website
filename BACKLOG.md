# 📋 BACKLOG - Cetose Consciente

> **Lista completa de funcionalidades a serem desenvolvidas**  
> Organizado por prioridade e status

**Versão:** 1.0  
**Data:** 2026-07-12  
**Atualização:** Semanal

---

## 📊 VISÃO GERAL

### Status Atual

| Prioridade | Total | Concluído | Em Progresso | Pendente |
|------------|-------|-----------|--------------|----------|
| 🔴 Alta | 15 | 3 | 2 | 10 |
| 🟡 Média | 22 | 0 | 0 | 22 |
| 🟢 Baixa | 18 | 0 | 0 | 18 |
| **Total** | **55** | **3** | **2** | **50** |

### Legenda de Status

- ✅ **Concluído** - Implementado e em produção
- 🚧 **Em Progresso** - Sendo desenvolvido
- 📋 **Pendente** - Aguardando desenvolvimento
- ⏸️ **Pausado** - Desenvolvimento pausado temporariamente
- ❌ **Cancelado** - Não será implementado

---

## 🔴 PRIORIDADE ALTA

### Landing Page e Conversão

- [x] ✅ **LP-001** - Landing page inicial criada
  - Status: Concluído
  - Data: 2026-07-10
  - Responsável: Equipe Frontend

- [x] ✅ **LP-002** - Design dark mode implementado
  - Status: Concluído
  - Data: 2026-07-10
  - Responsável: Equipe Design

- [x] 🚧 **LP-003** - Otimização Lighthouse (> 90)
  - Status: Em Progresso (80/100)
  - Prazo: 2026-07-15
  - Responsável: Equipe Frontend
  - Bloqueios: Otimização de imagens pendente

- [ ] 📋 **LP-004** - Integração Kiwify (checkout)
  - Status: Pendente
  - Prazo: 2026-07-18
  - Responsável: Equipe Backend
  - Dependências: Conta Kiwify aprovada

- [ ] 📋 **LP-005** - Rastreamento GA4 + Meta Pixel
  - Status: Pendente
  - Prazo: 2026-07-18
  - Responsável: Equipe Analytics
  - Dependências: Contas criadas

- [ ] 📋 **LP-006** - Meta Conversions API (server-side)
  - Status: Pendente
  - Prazo: 2026-07-20
  - Responsável: Equipe Backend
  - Dependências: LP-005 concluído

### Infraestrutura Base

- [x] 🚧 **INF-001** - Configuração Supabase
  - Status: Em Progresso (70%)
  - Prazo: 2026-07-15
  - Responsável: Equipe Backend
  - Tarefas:
    - [x] Projeto criado
    - [x] Tabelas principais definidas
    - [ ] RLS (Row Level Security) configurado
    - [ ] Storage configurado

- [ ] 📋 **INF-002** - Sistema de autenticação
  - Status: Pendente
  - Prazo: 2026-07-22
  - Responsável: Equipe Backend
  - Dependências: INF-001
  - Requisitos:
    - Email + senha
    - OAuth (Google, Facebook)
    - Recuperação de senha
    - Verificação de email

- [ ] 📋 **INF-003** - Deploy em produção (Vercel)
  - Status: Pendente
  - Prazo: 2026-07-25
  - Responsável: DevOps
  - Requisitos:
    - Domínio configurado
    - SSL ativo
    - CI/CD configurado
    - Monitoramento ativo

### E-book Interativo (PWA)

- [ ] 📋 **EBOOK-001** - Estrutura base do PWA
  - Status: Pendente
  - Prazo: 2026-08-01
  - Responsável: Equipe Frontend
  - Requisitos:
    - Service Worker
    - Manifest.json
    - Instalável
    - Funciona offline

- [ ] 📋 **EBOOK-002** - Leitor de e-book
  - Status: Pendente
  - Prazo: 2026-08-05
  - Responsável: Equipe Frontend
  - Funcionalidades:
    - Navegação por capítulos
    - Marcadores
    - Busca no conteúdo
    - Ajuste de fonte
    - Modo escuro/claro

- [ ] 📋 **EBOOK-003** - Rastreamento de progresso
  - Status: Pendente
  - Prazo: 2026-08-08
  - Responsável: Equipe Backend
  - Métricas:
    - % lido
    - Tempo de leitura
    - Capítulos completados
    - Última posição

### Área de Membros

- [ ] 📋 **MEMBER-001** - Dashboard do aluno
  - Status: Pendente
  - Prazo: 2026-08-10
  - Responsável: Equipe Frontend
  - Seções:
    - Biblioteca de conteúdos
    - Progresso geral
    - Próximos passos
    - Conquistas

- [ ] 📋 **MEMBER-002** - Perfil do usuário
  - Status: Pendente
  - Prazo: 2026-08-12
  - Responsável: Equipe Frontend
  - Campos:
    - Dados pessoais
    - Objetivos
    - Preferências alimentares
    - Foto de perfil

- [ ] 📋 **MEMBER-003** - Sistema de notificações
  - Status: Pendente
  - Prazo: 2026-08-15
  - Responsável: Equipe Backend
  - Tipos:
    - Push notifications
    - Email
    - In-app
    - SMS (futuro)

---

## 🟡 PRIORIDADE MÉDIA

### Receitas

- [ ] 📋 **REC-001** - Banco de dados de receitas
  - Status: Pendente
  - Prazo: 2026-08-20
  - Responsável: Equipe Backend
  - Meta: 100 receitas iniciais

- [ ] 📋 **REC-002** - Interface de busca de receitas
  - Status: Pendente
  - Prazo: 2026-08-22
  - Responsável: Equipe Frontend
  - Filtros:
    - Por ingrediente
    - Por refeição
    - Por tempo de preparo
    - Por dificuldade
    - Por calorias

- [ ] 📋 **REC-003** - Página de detalhes da receita
  - Status: Pendente
  - Prazo: 2026-08-25
  - Responsável: Equipe Frontend
  - Elementos:
    - Foto
    - Ingredientes
    - Modo de preparo
    - Informações nutricionais
    - Avaliações
    - Comentários

- [ ] 📋 **REC-004** - Sistema de favoritos
  - Status: Pendente
  - Prazo: 2026-08-27
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Adicionar/remover favoritos
    - Lista de favoritos
    - Sincronização entre dispositivos

- [ ] 📋 **REC-005** - Sistema de avaliações
  - Status: Pendente
  - Prazo: 2026-08-29
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Estrelas (1-5)
    - Comentários
    - Fotos de usuários
    - Moderação

### Plano Alimentar

- [ ] 📋 **PLAN-001** - Calculadora de macros
  - Status: Pendente
  - Prazo: 2026-09-01
  - Responsável: Equipe Frontend
  - Inputs:
    - Peso atual/desejado
    - Altura
    - Idade
    - Sexo
    - Nível de atividade
    - Objetivo

- [ ] 📋 **PLAN-002** - Gerador de cardápio semanal
  - Status: Pendente
  - Prazo: 2026-09-05
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Baseado em macros
    - Preferências alimentares
    - Substituições automáticas
    - Variedade de receitas

- [ ] 📋 **PLAN-003** - Lista de compras automática
  - Status: Pendente
  - Prazo: 2026-09-08
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Gerada do cardápio
    - Organizada por seção
    - Quantidades calculadas
    - Exportável (PDF/WhatsApp)

- [ ] 📋 **PLAN-004** - Registro de refeições
  - Status: Pendente
  - Prazo: 2026-09-10
  - Responsável: Equipe Frontend
  - Funcionalidades:
    - Log diário
    - Cálculo de macros
    - Fotos de refeições
    - Histórico completo

### IA Especialista

- [ ] 📋 **IA-001** - Chat básico com IA
  - Status: Pendente
  - Prazo: 2026-09-15
  - Responsável: Equipe IA
  - Funcionalidades:
    - Perguntas e respostas
    - Contexto do usuário
    - Histórico de conversas
    - Referências científicas

- [ ] 📋 **IA-002** - Análise de fotos de refeições
  - Status: Pendente
  - Prazo: 2026-09-20
  - Responsável: Equipe IA
  - Funcionalidades:
    - Upload de foto
    - Identificação de alimentos
    - Estimativa de macros
    - Sugestões de ajustes

- [ ] 📋 **IA-003** - Sugestões personalizadas
  - Status: Pendente
  - Prazo: 2026-09-25
  - Responsável: Equipe IA
  - Baseado em:
    - Progresso do usuário
    - Preferências
    - Objetivos
    - Histórico

- [ ] 📋 **IA-004** - Geração de receitas customizadas
  - Status: Pendente
  - Prazo: 2026-09-30
  - Responsável: Equipe IA
  - Inputs:
    - Ingredientes disponíveis
    - Restrições alimentares
    - Tempo disponível
    - Macros desejados

### Gamificação

- [ ] 📋 **GAME-001** - Sistema de pontos
  - Status: Pendente
  - Prazo: 2026-10-01
  - Responsável: Equipe Backend
  - Ações pontuadas:
    - Ler e-book
    - Fazer receitas
    - Completar desafios
    - Streak diário
    - Ajudar comunidade

- [ ] 📋 **GAME-002** - Badges e conquistas
  - Status: Pendente
  - Prazo: 2026-10-05
  - Responsável: Equipe Frontend
  - Tipos:
    - Por tempo (1 semana, 1 mês, etc.)
    - Por ações (100 receitas, etc.)
    - Por progresso (10kg perdidos, etc.)
    - Especiais (eventos, desafios)

- [ ] 📋 **GAME-003** - Desafios semanais
  - Status: Pendente
  - Prazo: 2026-10-08
  - Responsável: Equipe Backend
  - Tipos:
    - Receitas
    - Hidratação
    - Exercícios
    - Sono
    - Mindfulness

- [ ] 📋 **GAME-004** - Ranking de membros
  - Status: Pendente
  - Prazo: 2026-10-10
  - Responsável: Equipe Frontend
  - Categorias:
    - Semanal
    - Mensal
    - Anual
    - Por categoria
    - Recompensas top 10

- [ ] 📋 **GAME-005** - Programa de fidelidade
  - Status: Pendente
  - Prazo: 2026-10-12
  - Responsável: Equipe Backend
  - Níveis:
    - Bronze (0-1000 pts)
    - Prata (1001-5000 pts)
    - Ouro (5001-10000 pts)
    - Platina (10001+ pts)

### Comunidade

- [ ] 📋 **COMM-001** - Fórum da comunidade
  - Status: Pendente
  - Prazo: 2026-10-15
  - Responsável: Equipe Backend
  - Categorias:
    - Dúvidas gerais
    - Receitas
    - Transformações
    - Desabafos
    - Celebrações

- [ ] 📋 **COMM-002** - Sistema de moderação
  - Status: Pendente
  - Prazo: 2026-10-18
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Denúncias
    - Banimentos
    - Regras claras
    - Moderadores

- [ ] 📋 **COMM-003** - Perfis públicos
  - Status: Pendente
  - Prazo: 2026-10-20
  - Responsável: Equipe Frontend
  - Elementos:
    - Foto
    - Bio
    - Conquistas
    - Transformação
    - Receitas compartilhadas

---

## 🟢 PRIORIDADE BAIXA

### Dashboard Admin

- [ ] 📋 **ADMIN-001** - Dashboard de métricas
  - Status: Pendente
  - Prazo: 2026-11-01
  - Responsável: Equipe Frontend
  - Métricas:
    - Usuários ativos
    - Conversões
    - Receita
    - Engajamento
    - Churn

- [ ] 📋 **ADMIN-002** - Gestão de usuários
  - Status: Pendente
  - Prazo: 2026-11-05
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Buscar usuários
    - Editar perfis
    - Banir/desbanir
    - Ver histórico

- [ ] 📋 **ADMIN-003** - Gestão de conteúdo
  - Status: Pendente
  - Prazo: 2026-11-08
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Adicionar receitas
    - Editar e-book
    - Criar desafios
    - Gerenciar badges

- [ ] 📋 **ADMIN-004** - Sistema de suporte
  - Status: Pendente
  - Prazo: 2026-11-10
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Tickets
    - Chat ao vivo
    - Base de conhecimento
    - FAQ

### CRM e Automações

- [ ] 📋 **CRM-001** - Pipeline de vendas
  - Status: Pendente
  - Prazo: 2026-11-12
  - Responsável: Equipe Backend
  - Estágios:
    - Lead
    - Qualificado
    - Oportunidade
    - Cliente
    - Churn

- [ ] 📋 **CRM-002** - Segmentação de leads
  - Status: Pendente
  - Prazo: 2026-11-15
  - Responsável: Equipe Backend
  - Critérios:
    - Comportamento
    - Engajamento
    - Fonte
    - Perfil

- [ ] 📋 **AUTO-001** - Email marketing
  - Status: Pendente
  - Prazo: 2026-11-18
  - Responsável: Equipe Marketing
  - Sequências:
    - Onboarding
    - Engajamento
    - Reativação
    - Upsell

- [ ] 📋 **AUTO-002** - Webhooks Kiwify
  - Status: Pendente
  - Prazo: 2026-11-20
  - Responsável: Equipe Backend
  - Eventos:
    - Compra
    - Reembolso
    - Assinatura
    - Cancelamento

### Programa de Afiliados

- [ ] 📋 **AFIL-001** - Sistema de afiliados
  - Status: Pendente
  - Prazo: 2026-12-01
  - Responsável: Equipe Backend
  - Funcionalidades:
    - Cadastro de afiliados
    - Links rastreáveis
    - Comissões automáticas
    - Dashboard de afiliado

- [ ] 📋 **AFIL-002** - Materiais de divulgação
  - Status: Pendente
  - Prazo: 2026-12-05
  - Responsável: Equipe Marketing
  - Materiais:
    - Banners
    - Emails prontos
    - Posts para redes sociais
    - Vídeos

### Melhorias e Otimizações

- [ ] 📋 **OPT-001** - Testes A/B de copy
  - Status: Pendente
  - Prazo: Contínuo
  - Responsável: Equipe Marketing
  - Elementos:
    - Headlines
    - CTAs
    - Preços
    - Garantias

- [ ] 📋 **OPT-002** - Otimização de imagens
  - Status: Pendente
  - Prazo: 2026-07-15
  - Responsável: Equipe Frontend
  - Formatos:
    - WebP
    - AVIF
    - Lazy loading
    - Responsive images

- [ ] 📋 **OPT-003** - Cache e CDN
  - Status: Pendente
  - Prazo: 2026-08-01
  - Responsável: DevOps
  - Implementações:
    - Cloudflare CDN
    - Cache de API
    - Service Worker cache

- [ ] 📋 **OPT-004** - Monitoramento e alertas
  - Status: Pendente
  - Prazo: 2026-08-05
  - Responsável: DevOps
  - Ferramentas:
    - Sentry (erros)
    - Vercel Analytics
    - Uptime monitoring
    - Performance monitoring

### Integrações Futuras

- [ ] 📋 **INT-001** - WhatsApp Business API
  - Status: Pendente
  - Prazo: 2026-12-10
  - Responsável: Equipe Backend
  - Uso:
    - Notificações
    - Suporte
    - Lembretes

- [ ] 📋 **INT-002** - Zapier/Make
  - Status: Pendente
  - Prazo: 2026-12-15
  - Responsável: Equipe Backend
  - Automações:
    - CRM externo
    - Planilhas
    - Email marketing

- [ ] 📋 **INT-003** - Apple Health / Google Fit
  - Status: Pendente
  - Prazo: 2027-01-01
  - Responsável: Equipe Mobile
  - Dados:
    - Peso
    - Atividade física
    - Sono
    - Calorias queimadas

---

## 📊 MÉTRICAS DE PROGRESSO

### Por Fase

| Fase | Itens | Concluídos | % |
|------|-------|------------|---|
| Fase 1 - Fundação | 15 | 3 | 20% |
| Fase 2 - E-book PWA | 12 | 0 | 0% |
| Fase 3 - Receitas | 10 | 0 | 0% |
| Fase 4 - IA | 8 | 0 | 0% |
| Fase 5 - Gamificação | 10 | 0 | 0% |

### Por Equipe

| Equipe | Itens Atribuídos | Concluídos | Em Progresso |
|--------|------------------|------------|--------------|
| Frontend | 18 | 2 | 1 |
| Backend | 22 | 0 | 1 |
| IA | 4 | 0 | 0 |
| Marketing | 5 | 1 | 0 |
| DevOps | 4 | 0 | 0 |
| Design | 2 | 1 | 0 |

---

## 🔄 PROCESSO DE ATUALIZAÇÃO

### Quando Atualizar

- **Diariamente:** Atualizar status de itens em progresso
- **Semanalmente:** Revisar prioridades e adicionar novos itens
- **Mensalmente:** Análise completa e replanejamento

### Como Adicionar Novo Item

```markdown
- [ ] 📋 **CATEGORIA-XXX** - Título da funcionalidade
  - Status: Pendente
  - Prazo: YYYY-MM-DD
  - Responsável: Equipe/Pessoa
  - Descrição: Breve descrição
  - Dependências: Outros itens (se houver)
  - Requisitos: Lista de requisitos
```

---

## 🔗 LINKS RELACIONADOS

- **Roadmap:** [`ROADMAP.md`](ROADMAP.md)
- **Changelog:** [`CHANGELOG.md`](CHANGELOG.md)
- **Ideias:** [`IDEIAS.md`](IDEIAS.md)
- **Decisões:** [`DECISOES.md`](DECISOES.md)

---

**Última Atualização:** 2026-07-12  
**Próxima Revisão:** 2026-07-19

---

> **💡 Dica:** Use este backlog como fonte única de verdade para o que precisa ser desenvolvido. Mantenha-o sempre atualizado!

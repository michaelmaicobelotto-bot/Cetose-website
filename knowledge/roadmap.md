# 🗺️ Roadmap - Cetose Consciente

> Cronograma de desenvolvimento e evolução da plataforma.

---

## 📅 Visão Geral

### Horizonte de Planejamento
**18 meses** (Agosto 2026 - Janeiro 2028)

### Fases Principais
1. **Fundação** (Meses 1-2)
2. **Analytics** (Mês 3)
3. **Automação** (Mês 4)
4. **Vendas** (Mês 5)
5. **Expansão** (Mês 6)
6. **Otimização** (Meses 7-12)
7. **Escala** (Meses 13-18)

---

## 📊 Cronograma Detalhado

### FASE 1: Fundação (Meses 1-2)

#### Mês 1: Backend & API
**Objetivo:** Criar infraestrutura base

**Entregas:**
- [x] Projeto Node.js + TypeScript configurado
- [x] PostgreSQL e Prisma configurados
- [x] Autenticação JWT implementada
- [x] Endpoints de CRUD para Leads
- [x] Endpoints de CRUD para Pages
- [x] Middleware de segurança
- [x] Testes unitários (>80% cobertura)
- [x] Documentação Swagger
- [x] Deploy em staging (Railway/Render)

**KPIs:**
- Uptime > 99%
- Response time < 200ms
- Cobertura de testes > 80%

#### Mês 2: Dashboard Admin
**Objetivo:** Interface de gestão

**Entregas:**
- [x] Projeto Next.js configurado
- [x] shadcn/ui instalado
- [x] Layout do dashboard
- [x] Página de overview
- [x] Gestão de leads (CRUD)
- [x] Gestão de páginas (CRUD)
- [x] Gráficos de métricas
- [x] Autenticação (NextAuth.js)
- [x] Deploy em Vercel

**KPIs:**
- Performance Lighthouse > 90
- Todas operações CRUD funcionando
- Tempo de carregamento < 2s

---

### FASE 2: Analytics (Mês 3)

#### Semanas 1-2: Rastreamento Avançado
**Entregas:**
- [ ] Google Analytics 4 configurado
- [ ] Google Tag Manager implementado
- [ ] Facebook Pixel instalado
- [ ] Eventos customizados criados
- [ ] API de analytics no backend
- [ ] Dashboard de métricas

**KPIs:**
- 100% dos eventos rastreados
- Funil de conversão visível

#### Semanas 3-4: Meta Ads Integration
**Entregas:**
- [ ] Meta Business Manager configurado
- [ ] Marketing API integrada
- [ ] Conversions API implementada
- [ ] Interface de campanhas
- [ ] Webhook configurado
- [ ] Relatórios de performance

**KPIs:**
- Campanhas criadas via API
- Conversões rastreadas server-side
- ROAS > 2.0

---

### FASE 3: Automação (Mês 4)

#### Semanas 1-2: Email Marketing
**Entregas:**
- [ ] SendGrid configurado
- [ ] Templates React Email criados
- [ ] Bull Queue implementado
- [ ] Automação de boas-vindas
- [ ] Automação de carrinho abandonado
- [ ] Automação pós-compra
- [ ] Interface de gestão

**KPIs:**
- Taxa de entrega > 95%
- Taxa de abertura > 25%
- Taxa de clique > 5%

#### Semanas 3-4: A/B Testing
**Entregas:**
- [ ] Sistema de experimentos
- [ ] Algoritmo de atribuição
- [ ] Cálculo estatístico
- [ ] Interface de testes
- [ ] 3 testes rodando

**KPIs:**
- Sistema funcional
- Significância estatística (p < 0.05)
- Pelo menos 1 teste com winner

---

### FASE 4: Vendas (Mês 5)

#### Semanas 1-2: Gateways de Pagamento
**Entregas:**
- [ ] Stripe integrado
- [ ] Mercado Pago integrado
- [ ] Webhooks implementados
- [ ] Sistema de reconciliação
- [ ] Relatórios de transações

**KPIs:**
- 3 gateways funcionais
- Taxa de sucesso > 95%
- Webhooks processando corretamente

#### Semanas 3-4: CRM
**Entregas:**
- [ ] Schema do CRM criado
- [ ] Pipeline de vendas
- [ ] Lead scoring automático
- [ ] WhatsApp integrado
- [ ] Interface de CRM

**KPIs:**
- CRM funcional
- Lead scoring calculado
- Tempo de resposta < 2h

---

### FASE 5: Expansão (Mês 6)

#### Semanas 1-2: PWA & Mobile
**Entregas:**
- [ ] Manifest.json criado
- [ ] Service Worker implementado
- [ ] Push notifications
- [ ] Ícones criados
- [ ] Testes em dispositivos

**KPIs:**
- PWA instalável
- Funciona offline
- Push notifications entregues

#### Semanas 3-4: Webhooks
**Entregas:**
- [ ] Sistema de webhooks
- [ ] Zapier integrado
- [ ] Slack integrado
- [ ] Google Sheets integrado
- [ ] Documentação de API

**KPIs:**
- Sistema funcional
- Taxa de entrega > 99%
- 3+ integrações ativas

---

### FASE 6: Otimização (Meses 7-12)

#### Mês 7-8: Performance
**Foco:** Otimizar velocidade e escalabilidade

**Entregas:**
- [ ] Implementar CDN
- [ ] Otimizar queries do banco
- [ ] Implementar caching avançado
- [ ] Lazy loading de componentes
- [ ] Code splitting

**KPIs:**
- Lighthouse > 95
- TTFB < 100ms
- Suporta 10.000 usuários simultâneos

#### Mês 9-10: Conversão
**Foco:** Aumentar taxa de conversão

**Entregas:**
- [ ] 10+ testes A/B rodando
- [ ] Otimização de copy
- [ ] Otimização de design
- [ ] Implementar chat ao vivo
- [ ] Melhorar prova social

**KPIs:**
- Conversão: 5% → 7%
- Taxa de reembolso < 3%
- NPS > 60

#### Mês 11-12: Automação Avançada
**Foco:** Reduzir trabalho manual

**Entregas:**
- [ ] Segmentação automática
- [ ] Campanhas de reengajamento
- [ ] Upsell automático
- [ ] Relatórios automatizados
- [ ] Alertas inteligentes

**KPIs:**
- 80% das tarefas automatizadas
- Tempo de gestão < 2h/dia
- LTV aumentado em 50%

---

### FASE 7: Escala (Meses 13-18)

#### Mês 13-15: Novos Produtos
**Foco:** Expandir portfólio

**Entregas:**
- [ ] Curso em vídeo
- [ ] Comunidade premium
- [ ] App mobile nativo
- [ ] Programa de afiliados
- [ ] Certificação profissional

**KPIs:**
- 3 novos produtos lançados
- LTV > R$ 300
- Receita recorrente > 50%

#### Mês 16-18: Internacionalização
**Foco:** Expandir para outros mercados

**Entregas:**
- [ ] Versão em inglês
- [ ] Versão em espanhol
- [ ] Pagamentos internacionais
- [ ] Marketing internacional
- [ ] Suporte multilíngue

**KPIs:**
- 20% da receita internacional
- 3 idiomas suportados
- Presença em 5+ países

---

## 📊 Métricas de Progresso

### Mês a Mês

| Mês | Módulos | Leads | Conversão | Receita | Status |
|-----|---------|-------|-----------|---------|--------|
| 0 | 0/10 | 500 | 2% | R$ 2.790 | ✅ Atual |
| 1 | 1/10 | 600 | 2% | R$ 3.348 | 🔄 Em progresso |
| 2 | 2/10 | 800 | 2.5% | R$ 5.580 | 📅 Planejado |
| 3 | 4/10 | 1.200 | 3% | R$ 10.044 | 📅 Planejado |
| 4 | 6/10 | 2.000 | 3.5% | R$ 19.530 | 📅 Planejado |
| 5 | 8/10 | 3.000 | 4% | R$ 33.480 | 📅 Planejado |
| 6 | 10/10 | 5.000 | 5% | R$ 69.750 | 📅 Planejado |
| 12 | 10/10 | 10.000 | 6% | R$ 167.400 | 🎯 Meta |
| 18 | 10/10 | 20.000 | 7% | R$ 391.300 | 🚀 Visão |

---

## 🎯 Milestones Principais

### Q3 2026 (Meses 1-3)
- ✅ **M1:** Backend API funcional
- ✅ **M2:** Dashboard admin lançado
- ✅ **M3:** Rastreamento completo implementado

### Q4 2026 (Meses 4-6)
- ✅ **M4:** Automações de email ativas
- ✅ **M5:** CRM operacional
- ✅ **M6:** Plataforma completa (10 módulos)

### Q1 2027 (Meses 7-9)
- ✅ **M7:** Performance otimizada
- ✅ **M8:** Conversão > 6%
- ✅ **M9:** Break-even atingido

### Q2 2027 (Meses 10-12)
- ✅ **M10:** Automação avançada
- ✅ **M11:** LTV > R$ 150
- ✅ **M12:** Receita > R$ 150k/mês

### Q3-Q4 2027 (Meses 13-18)
- ✅ **M13:** Novos produtos lançados
- ✅ **M14:** Programa de afiliados
- ✅ **M15:** Internacionalização iniciada

---

## 🔄 Processo de Revisão

### Revisões Semanais
- **Segunda-feira:** Planejamento da semana
- **Sexta-feira:** Retrospectiva e ajustes

### Revisões Mensais
- Análise de KPIs
- Ajuste de prioridades
- Atualização do roadmap

### Revisões Trimestrais
- Revisão estratégica
- Planejamento do próximo trimestre
- Ajuste de metas

---

## 🔗 Recursos Relacionados

- **Planos Detalhados:** [`/plans`](../plans/)
- **Arquitetura:** [`arquitetura-geral.md`](./arquitetura-geral.md)
- **Produto:** [`produto.md`](./produto.md)

---

**Última Atualização:** 2026-07-11  
**Versão:** 1.0  
**Responsável:** Equipe de Produto

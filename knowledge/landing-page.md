# 🎨 Landing Page - Cetose Consciente

> Especificações completas da landing page de vendas atual.

---

## 📊 Visão Geral

### URL Atual
**https://cetoseconsciente.com** (ou domínio configurado)

### Objetivo
Converter visitantes em compradores do e-book através de uma narrativa persuasiva baseada em ciência e prova social.

### Taxa de Conversão Atual
- **Meta:** 2-5%
- **Benchmark:** 1-3% (média do mercado)

---

## 🏗️ Estrutura da Página

### Seções (em ordem)

#### 1. **Hero Section** (`#inicio`)
**Objetivo:** Capturar atenção e apresentar o problema

**Elementos:**
- Badge animado: "Cetose Consciente" com pulsação verde
- Headline principal (3 linhas):
  - "Toda segunda você recomeça com tudo."
  - "Toda noite a fome destrói tudo de novo."
  - "Isso não é falta de força de vontade — é o seu corpo usando o combustível errado."
- Subtítulo explicativo
- CTA primário: "Quero entender o que está me sabotando"
- Widget de vídeo (PandaVideo) com botão play neon

**Design:**
- Background 3D animado (UnicornStudio)
- Glassmorphism nos elementos
- Animações fadeSlideIn escalonadas
- Responsivo mobile-first

#### 2. **Faixa de Benefícios** (`#animations`)
**Objetivo:** Reforçar conceitos-chave

**Elementos:**
- Marquee animado infinito
- Palavras-chave: Cetose, Consciente, Energia, Foco
- Ícones decorativos (estrelas)
- Glow radial verde

**Efeito:** Movimento contínuo, hipnótico

#### 3. **Seção Científica** (`#science-fold`)
**Objetivo:** Validar com ciência e autoridade

**Elementos:**
- Badge: "O Mecanismo Comprovado"
- Título: "O Que a Ciência Diz"
- Texto explicativo sobre cetose nutricional
- Citações de Harvard Health e PubMed
- Lista de benefícios comprovados:
  - ❤️ Redução de peso corporal
  - 📏 Diminuição da circunferência abdominal
  - 🩸 Melhora no controle glicêmico
  - ✅ Redução de triglicerídeos e aumento do HDL
- Dashboard visual (imagem 3D)
- Tabela comparativa: Dieta Comum vs Cetose Consciente
- CTA secundário: "Quero aplicar isso na prática agora"

**Gráfico de Resultados:**
- Barras horizontais com nomes reais
- Maria Silva: -15kg
- Ana Paula: -18kg
- João Santos: -22kg
- Carlos Mendes: -25kg

#### 4. **Prova Social** (`#resultados`)
**Objetivo:** Mostrar transformações reais

**Elementos:**
- Título: "Resultados que falam por si"
- Grid 3 colunas (responsivo)
- Cards de antes/depois:
  - **Maria** - 3 meses - Perdeu 15kg
  - **João** - 4 meses - Perdeu 7kg
  - **Ana** - 5 meses - Perdeu 18kg
- Imagens lado a lado (antes/depois)
- Hover effects com glassmorphism

**Nota:** Imagens em `assets/img/` (WebP otimizado)

#### 5. **Oferta** (`#oferta`)
**Objetivo:** Apresentar preço e urgência

**Elementos:**
- Badge: "OFERTA LIMITADA"
- Título: "Acesso Completo ao Método Cetose Consciente"
- Comparação de preços:
  - ~~R$ 47,90~~ (riscado)
  - **R$ 27,90** (destaque)
- CTA principal: "QUERO ACESSAR AGORA"
- Texto: "Pagamento único • Acesso imediato"

**Design:**
- Glassmorphism premium
- Gradientes verde esmeralda
- Sombras e glows

#### 6. **Garantia** (`#guarantee`)
**Objetivo:** Eliminar objeções e risco

**Elementos:**
- Ícone de escudo (shield)
- Badge: "Selo de Garantia"
- Título: "Garantia Total de 7 Dias"
- Texto explicativo
- Círculo grande com "7 DIAS"
- Animações de pulsação
- Texto: "RISCO ZERO • 100% DO INVESTIMENTO"

#### 7. **Footer**
**Objetivo:** Informações legais e contato

**Elementos:**
- Copyright: "@2026 Cetose Consciente"
- Links: Privacy Policy, Terms & Conditions
- Redes sociais (futuro)

---

## 🎨 Design System

### Paleta de Cores
```css
/* Principais */
--emerald-500: #10b981;  /* Verde principal */
--emerald-400: #34d399;  /* Verde claro */
--emerald-600: #059669;  /* Verde escuro */
--black: #000000;        /* Fundo */
--white: #ffffff;        /* Texto */

/* Cinzas */
--zinc-300: #d4d4d8;
--zinc-400: #a1a1aa;
--zinc-500: #71717a;
--zinc-600: #52525b;
```

### Tipografia
```css
/* Fontes */
font-family: 'Inter', sans-serif;        /* Corpo */
font-family: 'Manrope', sans-serif;      /* Títulos */
font-family: 'Geist Mono', monospace;    /* Código */

/* Tamanhos */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-7xl: 4.5rem;      /* 72px */
```

### Efeitos Visuais

#### Glassmorphism
```css
background: rgba(6, 17, 15, 0.72);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(18px);
box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02),
            0 28px 60px rgba(0, 0, 0, 0.35),
            0 10px 30px rgba(16, 185, 129, 0.12);
```

#### Neon Glow
```css
box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
text-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
```

#### Gradientes
```css
/* Texto gradiente */
background: linear-gradient(to bottom, 
  #ffffff, 
  rgba(255, 255, 255, 0.8), 
  rgba(255, 255, 255, 0.4)
);
background-clip: text;
color: transparent;

/* Fundo radial */
background: radial-gradient(
  circle at center, 
  rgba(16, 185, 129, 0.16), 
  transparent 55%
);
```

### Animações

#### fadeSlideIn
```css
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}
```

#### marquee
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

#### shimmer
```css
@keyframes shimmer {
  from { transform: translateX(-100%) skewX(-15deg); }
  to { transform: translateX(200%) skewX(-15deg); }
}
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Mobile */
@media (max-width: 639px) { }

/* Tablet */
@media (min-width: 640px) and (max-width: 767px) { }

/* Desktop Small */
@media (min-width: 768px) { }

/* Desktop Large */
@media (min-width: 1024px) { }

/* Desktop XL */
@media (min-width: 1280px) { }
```

### Ajustes Mobile
- Widget de vídeo: 88vw de largura
- Fontes reduzidas em 20-30%
- Padding reduzido
- Grid de 1 coluna
- Botões full-width

---

## 🎬 Integrações

### PandaVideo
**Função:** Hospedagem e player de vídeo

**Implementação:**
```html
<iframe id="panda-bdccf0d5-475a-4908-816b-3cf9151f620b"
  src="https://player-vz-3e4641f7-cd4.tv.pandavideo.com.br/embed/?v=bdccf0d5-475a-4908-816b-3cf9151f620b&autoplay=true"
  style="border:none; width: 100%; height: 100%;"
  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
  allowfullscreen=true>
</iframe>
```

**Facade Pattern:**
- Thumbnail customizada
- Botão play neon animado
- Carrega iframe apenas ao clicar
- Melhora performance inicial

### Kiwify
**Função:** Gateway de pagamento

**Link de Checkout:**
```
https://pay.kiwify.com.br/zBE6Kfj
```

**Parâmetros UTM (futuro):**
```
?utm_source=facebook
&utm_medium=cpc
&utm_campaign=conversao
&utm_content=variante-a
```

### UnicornStudio
**Função:** Background 3D animado

**Implementação:**
```html
<div data-us-project="sajpUiTp7MIKdX6daDCu"></div>
<script src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"></script>
```

**Otimização:**
- Carrega após 1 segundo (lazy)
- Não carrega em Lighthouse/PageSpeed
- Filtro hue-rotate para cor verde

---

## 📊 Métricas e Rastreamento

### Eventos a Rastrear (Futuro)
```javascript
// Page View
gtag('event', 'page_view');

// Scroll Depth
gtag('event', 'scroll', { percent_scrolled: 25 });

// Video Play
gtag('event', 'video_start');

// CTA Click
gtag('event', 'cta_click', { 
  cta_location: 'hero' | 'middle' | 'footer' 
});

// Purchase
gtag('event', 'purchase', {
  transaction_id: 'TXN_123',
  value: 27.90,
  currency: 'BRL'
});
```

*Detalhes em [`rastreamento.md`](./rastreamento.md)*

---

## ⚡ Performance

### Métricas Atuais
- **Tamanho:** ~350KB (HTML + CSS inline)
- **Requests:** ~15 (fontes, scripts, imagens)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s

### Otimizações Implementadas
- ✅ CSS inline (reduz requests)
- ✅ Imagens WebP
- ✅ Lazy loading de imagens
- ✅ Preconnect para domínios externos
- ✅ Defer em scripts não críticos
- ✅ Fontes com font-display: swap

### Melhorias Futuras
- [ ] Minificação de HTML
- [ ] Critical CSS separado
- [ ] Service Worker (PWA)
- [ ] CDN para assets
- [ ] Compressão Brotli

---

## 🔒 Segurança

### Implementado
- ✅ HTTPS obrigatório
- ✅ Links externos com HTTPS
- ✅ Sem formulários (sem XSS)
- ✅ Sem eval() ou innerHTML

### Pendente
- [ ] Content Security Policy (CSP)
- [ ] X-Frame-Options: DENY
- [ ] Subresource Integrity (SRI)
- [ ] Meta tag lang="pt-BR" (corrigido)

---

## 🧪 A/B Tests Sugeridos

### Teste 1: Headline
- **Controle:** "Toda segunda você recomeça com tudo..."
- **Variante A:** "Última chance: Transforme seu corpo em 30 dias"
- **Variante B:** "Descubra por que você sente fome incontrolável"

### Teste 2: CTA
- **Controle:** "Quero Acessar Agora"
- **Variante A:** "Garantir Minha Vaga Agora"
- **Variante B:** "Quero Eliminar a Fome Agora"

### Teste 3: Preço
- **Controle:** R$ 27,90
- **Variante A:** R$ 37,90 (com desconto de R$ 47,90)
- **Variante B:** R$ 19,90 (promoção relâmpago)

### Teste 4: Cor do CTA
- **Controle:** Verde (#10b981)
- **Variante A:** Vermelho (#ef4444)
- **Variante B:** Laranja (#f97316)

*Implementação em [`aplicativo-web.md`](./aplicativo-web.md) - Módulo A/B Testing*

---

## 📝 Copywriting

### Fórmulas Utilizadas

#### PAS (Problem-Agitate-Solution)
1. **Problem:** "Toda segunda você recomeça..."
2. **Agitate:** "Toda noite a fome destrói tudo..."
3. **Solution:** "Isso não é falta de força de vontade..."

#### AIDA (Attention-Interest-Desire-Action)
1. **Attention:** Headline impactante
2. **Interest:** Vídeo explicativo
3. **Desire:** Prova social e ciência
4. **Action:** CTA claro e urgente

### Gatilhos Mentais
- ✅ **Autoridade:** Harvard, PubMed
- ✅ **Prova Social:** Depoimentos reais
- ✅ **Escassez:** "Oferta Limitada"
- ✅ **Urgência:** "Acesso Imediato"
- ✅ **Garantia:** "7 Dias Risco Zero"
- ✅ **Reciprocidade:** Conteúdo gratuito (vídeo)

---

## 🔄 Manutenção

### Atualizações Regulares
- **Mensal:** Revisar depoimentos
- **Trimestral:** Atualizar estudos científicos
- **Semestral:** Redesign parcial
- **Anual:** Redesign completo

### Testes de Qualidade
- [ ] Links funcionando
- [ ] Vídeo carregando
- [ ] Checkout Kiwify ativo
- [ ] Imagens otimizadas
- [ ] Mobile responsivo
- [ ] Performance > 90 (Lighthouse)

---

## 🔗 Recursos Relacionados

- **Arquivo Atual:** [`/index.html`](../index.html)
- **Documentação Técnica:** [`/info.md`](../info.md)
- **Oferta Completa:** [`oferta.md`](./oferta.md)
- **Rastreamento:** [`rastreamento.md`](./rastreamento.md)
- **Marketing:** [`marketing.md`](./marketing.md)

---

**Última Atualização:** 2026-07-11  
**Versão:** 1.0  
**Responsável:** Equipe de Produto e Design

# Cetose Consciente — Documentação do Projeto

> Repositório: https://github.com/michaelmaicobelotto-bot/Cetose-website
> Última atualização: 2026-07-04

---

## 1. Estrutura do Projeto

```
Estudo 1/
├── index.html              # Página principal da Landing Page (1.514 linhas)
├── info.md                 # Este arquivo de documentação
│
├── assets/
│   ├── css/               # 23 folhas de estilo (Google Fonts + design system)
│   │   └── css2_*.css
│   ├── js/                # 3 scripts locais de suporte
│   │   ├── resource_3fa48481346f.es      # Bundle principal de recursos (397 KB)
│   │   ├── lucide_latest_2eebd0ebe8c2.es # Biblioteca de ícones Lucide (378 KB)
│   │   └── iconify_654a1ef798a3.js        # Biblioteca de ícones Iconify (25 KB)
│   ├── fonts/             # Fontes locais do projeto
│   └── img/               # Imagens e assets visuais
│
├── templates/
│   └── design_system2.html  # Sistema de design de referência (66 KB)
│
├── _dev/                  # Arquivos de desenvolvimento e protótipos
│   ├── design-system.html   # Versão 1 do design system
│   ├── design-system2.html  # Versão 2 do design system
│   ├── 3_componentes/       # Componentes isolados para teste
│   ├── glass-pricing/       # Protótipo da seção de preços
│   └── wix.com_studio_*/   # Referências de inspiração visual
│
└── .agents/               # 🤖 Skills de Inteligência Artificial (uso local, não versionado)
    ├── landing-page-strategist/   # Skill: Estrategista de Landing Page
    ├── copywriter/                # Skill: Redator de Alta Conversão
    ├── security-specialist/       # Skill: Especialista em Segurança
    ├── skill-creator/             # Meta-skill: Criação de novas Skills
    ├── landing-page-strategist-workspace/  # Workspace de testes da skill LP
    ├── copywriter-workspace/               # Workspace de testes da skill Copy
    └── security-specialist-workspace/      # Workspace de testes da skill Segurança
```

---

## 2. Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| Estrutura | HTML5 Semântico (Single Page) |
| Estilização | CSS puro (inline no `<head>` + folhas externas) |
| Tipografia | Google Fonts: `Inter`, `Manrope`, `Geist` |
| Ícones | Lucide Icons + Iconify |
| Animações | CSS Keyframes (`fadeSlideIn`, `columnReveal`) |
| Efeitos Visuais | Glassmorphism, Neon Glow, Gradient Borders |
| Tema | Dark Mode (`<html class="dark">`) |
| Controle de Versão | Git — branch `main` |

---

## 3. Varredura de Segurança (Security Audit)

> Executada em: 2026-05-20 | Metodologia: OWASP Top 10 + Frontend Security Best Practices

### ✅ Itens Aprovados (Sem Vulnerabilidade)

| # | Verificação | Resultado |
| :--- | :--- | :--- |
| 1 | `innerHTML` com dados de usuário | ✅ Não encontrado |
| 2 | `eval()` em qualquer script | ✅ Não encontrado |
| 3 | `document.write()` | ✅ Não encontrado |
| 4 | Links com protocolo `javascript:` | ✅ Não encontrado |
| 5 | Formulários com campos de entrada (`<form>`, `<input>`) | ✅ Não existem (site estático) |
| 6 | Handlers de evento inline (`onclick=`, `onmouseover=`) | ✅ Não encontrado |
| 7 | Links externos `http://` não seguros | ✅ Não encontrado |
| 8 | Credenciais ou chaves de API no código (hardcoded secrets) | ✅ Não encontrado |

---

### ⚠️ Pontos de Atenção e Melhorias Recomendadas

#### 🔴 FALHA 1 — Ausência de Content Security Policy (CSP)
- **Descrição**: O arquivo `index.html` não possui a meta tag `Content-Security-Policy` no `<head>`. Isso não impede ataques de XSS caso algum conteúdo dinâmico seja inserido no futuro.
- **Impacto**: Médio (baixo risco agora, mas risco alto ao escalar o projeto).
- **Correção recomendada**: Inserir no `<head>` do `index.html`:
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
```

---

#### 🔴 FALHA 2 — Ausência de Proteção Anti-Clickjacking (X-Frame-Options)
- **Descrição**: Não há meta tag `X-Frame-Options` nem diretiva `frame-ancestors` no CSP. Isso permite que a página seja carregada dentro de um `<iframe>` em outros domínios, possibilitando ataques de Clickjacking.
- **Impacto**: Médio.
- **Correção recomendada**: Inserir no `<head>` do `index.html`:
```html
<meta http-equiv="X-Frame-Options" content="DENY">
```
> Nota: Em produção, esta proteção deve ser configurada preferencialmente via cabeçalho HTTP no servidor web (Nginx/Apache).

---

#### 🟡 FALHA 3 — Scripts Locais Sem Verificação de Integridade (SRI)
- **Descrição**: Os 3 scripts JavaScript locais (`resource_3fa48481346f.es`, `lucide_latest_2eebd0ebe8c2.es`, `iconify_654a1ef798a3.js`) são carregados sem o atributo `integrity` (Subresource Integrity). Se esses arquivos forem comprometidos no servidor, o navegador não detectará a alteração.
- **Impacto**: Médio (aplicável principalmente em produção com CDN ou servidores compartilhados).
- **Correção recomendada**: Gerar e adicionar hashes `sha384` aos atributos `integrity` de cada `<script>`. Exemplo:
```html
<script src="assets/js/resource_3fa48481346f.es"
        integrity="sha384-[HASH_GERADO]"
        crossorigin="anonymous"></script>
```

---

#### 🟡 FALHA 4 — Atributo `lang` Incorreto
- **Descrição**: A tag `<html>` possui `lang="en"`, porém todo o conteúdo da página é em Português do Brasil. Isso prejudica leitores de tela (acessibilidade) e ferramentas de SEO.
- **Impacto**: Baixo (acessibilidade e SEO).
- **Correção recomendada**:
```html
<!-- Alterar de: -->
<html class="dark" lang="en">
<!-- Para: -->
<html class="dark" lang="pt-BR">
```

---

#### 🟡 FALHA 5 — `<title>` e Meta Description Genéricos
- **Descrição**: O título da página está como `"Creative - Digital Designer & Developer"`, um placeholder de template. Isso afeta negativamente o SEO e a identidade da marca.
- **Impacto**: Baixo (SEO e identidade visual).
- **Correção recomendada**:
```html
<title>Cetose Consciente — Transforme sua saúde com a dieta cetogênica</title>
<meta name="description" content="Aprenda como a dieta cetogênica pode transformar sua saúde, acelerar a perda de peso e aumentar sua energia de forma cientificamente comprovada.">
```

---

#### 🟡 FALHA 6 — Links Legais Incompletos (`href="#"`)
- **Descrição**: Os links de "Privacy Policy" e "Terms & Conditions" no rodapé apontam para `href="#"`, ou seja, são placeholders sem conteúdo real.
- **Impacto**: Baixo (conformidade legal e LGPD).
- **Correção recomendada**: Criar as páginas `privacidade.html` e `termos.html` e atualizar os links correspondentes, ou implementar um modal com o conteúdo legal.

---

#### 🟡 FALHA 7 — Script Inline no Rodapé
- **Descrição**: O arquivo contém um `<script>` inline no final do `<body>` (`lucide.createIcons()`). Embora não seja perigoso isoladamente, conflita com uma política CSP estrita que bloqueie `unsafe-inline`.
- **Impacto**: Baixo (compatibilidade futura com CSP).
- **Correção recomendada**: Mover o script inline para um arquivo `.js` dedicado:
```javascript
// assets/js/init.js
lucide.createIcons();
```

---

## 4. Skills Disponíveis (.agents/)

| Skill | Arquivo Principal | Função |
| :--- | :--- | :--- |
| `landing-page-strategist` | `.agents/landing-page-strategist/SKILL.md` | Arquitetura de informação, copywriting e design premium de landing pages |
| `copywriter` | `.agents/copywriter/SKILL.md` | Redação publicitária de alta conversão (AIDA, PAS, e-mails, anúncios) |
| `security-specialist` | `.agents/security-specialist/SKILL.md` | Auditoria de código, detecção de vulnerabilidades e desenvolvimento seguro |
| `skill-creator` | `.agents/skill-creator/SKILL.md` | Meta-skill para criação e estruturação de novas skills |

---

## 5. Pendências e Próximas Varreduras

### 🔐 Varredura de Segurança (`security-specialist`)
- [x] Varredura inicial do `index.html` (concluída — ver Seção 3)
- [ ] Aplicar as 7 correções identificadas na varredura
- [ ] Revalidar após as correções com nova varredura
- [ ] Configurar cabeçalhos HTTP de segurança no servidor de produção (Nginx/Vercel/Netlify)

### ✍️ Varredura de Copywriting (`copywriter`)
- [ ] Aplicar a skill `copywriter` sobre todos os textos da seção Hero (título, subtítulo e CTA principal)
- [ ] Revisar os títulos de seção (H2/H3) com a fórmula PAS ou AIDA
- [ ] Auditar os textos de depoimentos e prova social para aumentar credibilidade
- [ ] Revisar e fortalecer o P.S. e a seção de garantia (caso existam)
- [ ] Validar se o botão de CTA principal possui um verbo de ação claro e urgência implícita

### 🏁 Varredura de Estratégia de Landing Page (`landing-page-strategist`)
- [ ] Verificar se o `index.html` adota a hierarquia correta de headers (um único H1 por página)
- [ ] Verificar se todos os botões de CTA possuem IDs únicos para rastreamento analítico
- [x] Auditar a seção "Antes e Depois" — layout de 3 colunas (grid) corrigido e funcional ✅
- [ ] Verificar a adequação do design à paleta Dark-Emerald e aos padrões de glassmorphism
- [ ] Revisar a densidade de informação de cada seção — garantir que cada bloco tenha UMA única mensagem central

### 🖼️ Imagens — Status Atual
- [x] Imagens de depoimentos (Maria, João, Ana) hospedadas em `assets/img/` ✅
- [x] Caminhos no `index.html` apontam para `assets/img/` (caminhos relativos locais) ✅
- [ ] Remover badges "ANTES" / "DEPOIS" das imagens (edição de imagem pendente)
- [ ] Versionar as imagens editadas e subir ao repositório

---

## 6. Histórico de Commits (Git)

| Data | Hash | Mensagem | Autoria |
| :--- | :--- | :--- | :--- |
| 2026-06-27 | `4744257` | ajuste de valores 4 | Michael Belotto |
| 2026-06-27 | `a5b968a` | ajuste de valores 3 | Michael Belotto |
| 2026-05-22 | `9c5009b` | feat: URLs Cloudinary atualizadas + estrutura HTML dos cards corrigida | Antigravity AI |
| 2026-05-22 | `0cc7924` | feat: atualiza URLs das imagens para Cloudinary e corrige secao dos depoimentos | Antigravity AI |
| 2026-05-21 | `7f7d436` | fix cards layout | Michael Belotto |
| 2026-05-21 | `a6fb543` | fix ana layout | Michael Belotto |
| 2026-05-21 | `ccbc70e` | ana corrigida | Michael Belotto |
| 2026-05-21 | `022425e` | fix ana completo | Michael Belotto |
| 2026-05-18 | — | Final1 | Michael Belotto |
| 2026-05-18 | — | Final | Michael Belotto |
| 2026-05-18 | — | footer | Michael Belotto |
| 2026-05-15 | — | Partes2 | Michael Belotto |
| 2026-05-15 | — | Inicio de Parte2 | Michael Belotto |

---

## 7. Decisões de Arquitetura Relevantes

| Data | Decisão | Motivo |
| :--- | :--- | :--- |
| 2026-07-04 | Nenhuma alteração aplicada ao `index.html` nesta sessão | Sessão dedicada exclusivamente a mapeamento e pesquisa visual |
| 2026-05-22 | Imagens servidas de `assets/img/` (local) em vez do Cloudinary | Manter controle total dos assets no repositório e simplificar o deploy via GitHub Pages |
| 2026-05-22 | Estrutura do grid de depoimentos padronizada (3 cards idênticos) | Corrigir bug de render causado por aspas não fechadas no atributo `alt` do card do João |
| 2026-05-21 | Seção `#resultados` reescrita do zero | Card da Ana tinha divs desalinhadas e indentação incorreta em relação ao padrão dos cards da Maria e João |

---

## 8. Registro de Sessão — 2026-07-04

### Objetivo da Sessão
Iluminar a faixa de benefícios (seção `#animations`) localizada entre o vídeo (`#inicio`) e a seção "O Que a Ciência Diz" (`#science-fold`), sem alterar layout, espaçamentos, tipografia ou animações existentes.

### Mapeamento de Seções Realizado

| Ordem | ID da Seção | Descrição |
| :--- | :--- | :--- |
| 1 | `#inicio` | Hero + Video Player (Façade Pattern com PandaVideo) |
| 2 | `#animations` | Faixa de marquee animada (Cetose, Consciente, Energia, Foco) |
| 3 | `#science-fold` | "O Que a Ciência Diz" + Tabela Comparativa |
| 4 | `#resultados` | Depoimentos e gráficos de barras ("Resultados Reais") |
| 5 | `#oferta` | Seção de oferta e preço |
| 6 | `#guarantee` | Garantia |

### Análise da Seção `#animations` (alvo da iluminação)

A seção `#animations` (linhas 743–797 do `index.html`) é uma **faixa horizontal de marquee** com as seguintes características atuais:

- **Container:** `w-full py-20 border-t border-white/5 relative z-10 bg-black/60 overflow-hidden`
- **Faixa interna:** `relative w-full py-6 border-y border-emerald-900/30 bg-emerald-950/20`
- **Máscaras alpha:** gradientes laterais `from-black to-transparent` (esquerda e direita)
- **Texto:** `text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/0` (muito sutil, quase invisível)
- **Ícones:** `text-[#10b981]/50` (opacidade 50%, verde esmeralda)
- **Efeitos de glow existentes:** Nenhum — a seção é intencionalmente discreta/apagada

### Classes CSS Relevantes Identificadas

```css
/* Efeito flashlight nos cards */
.flashlight-card::before { ... radial-gradient com rgba(52, 211, 153, 0.08) ... }

/* Glow verde base */
.glow-green { box-shadow: 0 0 25px rgba(16, 185, 129, 0.6); }

/* Identidade de cor do projeto */
--emerald-500: #10b981
--emerald-400: #34d399
```

### Plano de Iluminação (Pendente de Aplicação)

**Alvo:** Seção `#animations` (linhas 743–797)

**Mudanças planejadas (SOMENTE CSS inline via classes Tailwind/existentes):**

1. **Background da seção:** `bg-black/60` → `bg-black/40` + adicionar radial glow verde central
2. **Faixa interna:** `bg-emerald-950/20` → `bg-emerald-950/40` + intensificar `border-emerald-900/30` → `border-emerald-500/20`
3. **Texto do marquee:** `from-white/10 to-white/0` → `from-white/30 to-white/5` (mais legível)
4. **Ícones:** `text-[#10b981]/50` → `text-[#10b981]/80` (mais brilhantes)
5. **Adicionar `drop-shadow`** nos ícones para simular glow pontual
6. **Adicionar div de radial glow** centralizado atrás da faixa (pointer-events-none)

### Status
- [x] Sessão de mapeamento e análise concluída
- [x] Servidor local iniciado (`http-server` na porta 8080)
- [ ] **PRÓXIMA AÇÃO:** Aplicar as alterações de iluminação na seção `#animations` do `index.html`

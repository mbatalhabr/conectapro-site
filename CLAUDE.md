# CLAUDE.md — Site Conectapro (landing page)

Contexto e regras para o Claude Code trabalhar neste projeto.

## O que é
Landing page **estática** (uma página) do Conectapro — plataforma de monitoramento IoT de temperatura e umidade para laboratórios de análises clínicas, com foco em conformidade com a **RDC 978/2025** da ANVISA.

## Stack e princípios (NÃO violar)
- **HTML + CSS + JS puro.** Sem framework, sem build, sem Node em produção.
- **Não usar Spring Boot / backend** aqui. É conteúdo estático; hospedagem em GitHub Pages.
- **Mobile-first** e responsivo. O público abre no celular (link via WhatsApp).
- **Acessibilidade**: manter `:focus-visible`, `prefers-reduced-motion`, textos `alt`/`aria`, contraste.
- Performance: imagens leves, sem libs desnecessárias.

## Marca (derivar TODA cor/tipo daqui)
- Paleta: petróleo `#0A3742` (ink), teal `#0E7C86`, ciano `#2BB3C0`, âmbar `#E8911C` (acento/alerta), gelo `#EAF6F8`/`#F4FAFB`, borda `#D8E6E9`, texto `#33414B`.
- Tipografia: **Poppins** (títulos/marca) + **Inter** (corpo), via Google Fonts.
- Logo: ícone "escudo + termômetro + sensor". Está como `assets/favicon.svg` e como sprite SVG inline no `index.html` (`<symbol id="logo-icon">`, gradiente `lg1`). A palavra "Conectapro" é texto HTML (`.brand-name`), com "pro" em teal/ciano.

## Copy e honestidade comercial
- Use **"ambientes críticos"** (cobre frio e calor: freezers, geladeiras, câmaras frias, estufas, incubadoras). **Não** use "cadeia fria".
- WhatsApp como canal de alerta está **"em implantação"** — não apresentar como pronto.
- **Nunca** afirmar "certificado pela ANVISA". O sistema **apoia** o atendimento à RDC 978; manter o aviso no rodapé.

## Onde mexer
- **Contatos** (telefone/e-mail/texto do WhatsApp): `js/main.js`, constantes `PHONE`, `EMAIL`, `WA_TEXT`. É o único lugar.
- **Seções**: `index.html` (hero, O que é, Dores, RDC 978, Funcionalidades, Diferenciais, Público, CTA, footer).
- **Estilos**: `css/styles.css` (tokens no `:root`).
- **Ícones**: sprite `<symbol id="i-*">` no topo do `index.html`; usar via `<use href="#i-...">`.

## Rodar localmente
Abrir `index.html` no navegador, ou usar um servidor estático (no IntelliJ: botão de preview / "Open in Browser", ou a extensão Live Server). Não há passo de build.

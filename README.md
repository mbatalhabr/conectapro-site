# Conectapro — Landing page

Site estático (uma página) do Conectapro: monitoramento de temperatura e umidade de ambientes críticos para laboratórios de análises clínicas, com foco na conformidade com a **RDC 978/2025** da ANVISA.

## Estrutura
```
conectapro-site/
├── index.html              # a página (todas as seções)
├── css/styles.css          # estilos (tokens da marca no :root)
├── js/main.js              # menu mobile, animações e CONTATOS (editar aqui)
├── assets/
│   ├── favicon.svg         # ícone do logo
│   ├── favicon-64.png
│   ├── og-image.png        # imagem do card de compartilhamento (WhatsApp/LinkedIn)
│   └── checklist-rdc-978.pdf
├── CLAUDE.md               # instruções de marca para o Claude Code
└── README.md
```

## 1. Antes de publicar — ajuste seus contatos
Abra **`js/main.js`** e edite só estas três linhas no topo:
```js
const PHONE = "55SEUNUMERO";   // DDI 55 + DDD + número, só dígitos. Ex.: 5511990078668
const EMAIL = "contato@conectapro.com.br";
const WA_TEXT = "Olá! Vim pelo site do Conectapro...";
```
> Use o número do **WhatsApp Business** do Conectapro (não o pessoal). Todos os botões de WhatsApp e e-mail do site passam a apontar para esses valores.

Confira também, no `index.html`, as URLs em `<meta property="og:...">` e `<link rel="canonical">` quando tiver o domínio definitivo.

## 2. Ver localmente
- No IntelliJ: clique com o botão direito no `index.html` → **Open in Browser** (ou use o plugin/Live Server).
- Ou simplesmente dê duplo clique no `index.html`.
- Não há etapa de build.

## 3. Publicar no GitHub Pages (grátis, com HTTPS)
1. Crie um repositório no GitHub (ex.: `conectapro-site`) e suba estes arquivos:
   ```bash
   git init
   git add .
   git commit -m "Landing page Conectapro"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/conectapro-site.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages**.
3. Em *Build and deployment* → *Source*: **Deploy from a branch**.
4. *Branch*: **main** / **/ (root)** → **Save**.
5. Aguarde ~1 min. O endereço aparece no topo da página (algo como `https://SEU_USUARIO.github.io/conectapro-site/`).

A cada `git push`, o site atualiza sozinho.

## 4. (Opcional) Domínio próprio
1. Registre `conectapro.com.br` (ex.: registro.br).
2. No GitHub **Settings → Pages → Custom domain**, informe o domínio (isso cria um arquivo `CNAME`).
3. No DNS do domínio, aponte para o GitHub Pages (registro `CNAME`/`A` conforme a doc do GitHub) e marque **Enforce HTTPS**.

## 5. Trocar materiais
- **OG image** (card de compartilhamento): substitua `assets/og-image.png` (1200×630).
- **Checklist**: substitua `assets/checklist-rdc-978.pdf` se atualizar o documento.

---
Feito com HTML/CSS/JS puro. Sem framework, sem backend — de propósito.

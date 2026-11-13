# Santo Recheio — direção visual

## Conceito

Editorial gastronômico acolhedor. Fotos reais permanecem protagonistas. A composição combina espaço generoso, tipografia serifada expressiva e detalhes finos inspirados na marca. Referência visual do usuário: página clara, produto em destaque e ornamentos discretos.

## Cores

Paleta extraída visualmente da logo e das fotos fornecidas. Tokens implementados em `src/app/globals.css`.

- Creme principal `#f7f1e8` e papel `#fffaf3`.
- Creme profundo `#efe1cd`.
- Marrom cacau `#3f2417` para texto e CTA.
- Marrom suave `#674531` para texto secundário.
- Caramelo `#955f34` para ênfase, com contraste AA sobre creme.
- Dourado suave `#c5a47b` para detalhes.
- Linha `#d8c6af` para divisórias.

## Tipografia e layout

- Títulos: Cormorant Garamond com fallback Georgia.
- Interface e textos: DM Sans com fallback Arial.
- Seções ocupam 100% da largura da viewport, com respiros laterais responsivos; mobile usa 18 px.
- Hierarquia com títulos grandes, parágrafos curtos e CTA marrom de alto contraste.
- Botões e controles de ação usam `border-radius: 50%`.

## Movimento

O hero usa `hero-santo-recheio.png` em telas a partir de 900 px e `hero-responsive.PNG` em telas menores. Ambas ocupam toda a largura e altura do hero, com textos e botões alinhados à esquerda e gradiente para leitura. GSAP anima os textos e revela conteúdo no scroll, mantendo a fotografia sempre visível. Three.js desenha dois aros finos sobre a imagem. A cena carrega apenas em telas de pelo menos 900 px sem preferência por movimento reduzido. O render pausa fora da viewport e limita pixel ratio a 1,5.

## Acessibilidade

Links e menu com foco visível; imagens com texto alternativo; áreas de toque confortáveis; HTML semântico; suporte a `prefers-reduced-motion`. SVG do WhatsApp permanece fixo no canto inferior direito durante o scroll, em todas as telas.

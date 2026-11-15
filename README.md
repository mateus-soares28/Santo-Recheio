# Santo Recheio

Landing page em Next.js, TypeScript, GSAP e Three.js.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Dados de contato, links e produtos ficam em `src/lib/site.ts`. As fotos originais permanecem em `img/`; cópias em `public/img/` são servidas pelo Next.js. Atualize disponibilidade e informações comerciais somente após confirmação da Santo Recheio.

O domínio canônico atual é `https://santo-recheio.vercel.app/`. A URL é usada na tag canônica, no Open Graph, em `/sitemap.xml` e em `/robots.txt`. Se o domínio público mudar, atualize `NEXT_PUBLIC_SITE_URL` na Vercel. Sem essa variável, o projeto usa `VERCEL_PROJECT_PRODUCTION_URL` e, localmente, o domínio atual. Consulte `.env.example`.

Após publicar, verifique `/robots.txt` e `/sitemap.xml` no domínio final e envie o sitemap no Google Search Console. Deploys de preview recebem `noindex` e bloqueio em `robots.txt`.

## Verificar

```bash
npm run typecheck
npm run build
```

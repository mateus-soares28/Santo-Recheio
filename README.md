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

Antes da publicação, defina `NEXT_PUBLIC_SITE_URL` com o domínio real para ativar URL canônica e imagem Open Graph absoluta. Consulte `.env.example`.

## Verificar

```bash
npm run typecheck
npm run build
```

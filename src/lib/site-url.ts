const fallbackSiteUrl = "https://santo-recheio.vercel.app";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const siteUrl = configuredUrl || (productionDomain ? `https://${productionDomain}` : fallbackSiteUrl);

  return new URL("/", siteUrl).toString();
}

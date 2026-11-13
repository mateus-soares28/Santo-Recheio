import Image, { getImageProps } from "next/image";
import { Arrow } from "@/components/Arrow";
import { Header } from "@/components/Header";
import { FlavorCarouselControls } from "@/components/FlavorCarouselControls";
import { HeroSceneLoader } from "@/components/HeroSceneLoader";
import { MotionController } from "@/components/MotionController";
import { categories, getOrderLink, potCakes, site } from "@/lib/site";

function ValueIcon({ kind }: { kind: "artisan" | "choice" | "taste" }) {
  return (
    <svg className="value-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {kind === "artisan" && <><circle cx="20" cy="20" r="12" /><path d="M20 4v7m0 18v7M4 20h7m18 0h7M9 9l5 5m12 12 5 5M31 9l-5 5M14 26l-5 5" /></>}
      {kind === "choice" && <><circle cx="20" cy="20" r="14" /><path d="M20 6v28M7 20h26" /></>}
      {kind === "taste" && <><path d="M20 5c3.1 7.3 7.7 11.9 15 15-7.3 3.1-11.9 7.7-15 15-3.1-7.3-7.7-11.9-15-15C12.3 16.9 16.9 12.3 20 5Z" /></>}
    </svg>
  );
}

function OrderButton({ children, product, light = false }: { children: React.ReactNode; product?: string; light?: boolean }) {
  return (
    <a className={`button button-primary${light ? " button-light" : ""}`} href={getOrderLink(product)} target="_blank" rel="noopener noreferrer">
      {children}<Arrow diagonal />
    </a>
  );
}

export default function Home() {
  const { props: { srcSet: desktopHero } } = getImageProps({
    src: "/img/hero-santo-recheio.png",
    alt: "",
    width: 1672,
    height: 940,
    sizes: "100vw",
  });
  const { props: mobileHero } = getImageProps({
    src: "/img/hero-responsive.PNG",
    alt: "Bolo de pote Santo Recheio sobre bancada em cena acolhedora",
    width: 941,
    height: 1672,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
    className: "cover-image",
  });

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-photo">
            <picture>
              <source media="(min-width: 900px)" srcSet={desktopHero} sizes="100vw" />
              <img {...mobileHero} />
            </picture>
          </div>
          <div className="hero-visual" aria-hidden="true"><HeroSceneLoader /></div>
          <div className="hero-inner container">
            <div className="hero-copy">
              <div className="hero-brand-line"><span /> Confeitaria artesanal <span /></div>
              <h1 id="hero-title"><span>Recheios que</span><span><em>conquistam.</em></span><span>Sabores que encantam.</span></h1>
              <p>Bolos de pote e empadões artesanais para saborear com carinho.</p>
              <div className="hero-actions">
                <OrderButton>Quero fazer meu pedido</OrderButton>
                <a className="button button-text" href="#produtos">Conhecer os produtos <Arrow /></a>
              </div>
              <p className="hero-footnote">Do doce ao salgado, feito com carinho.</p>
            </div>
          </div>
          <div className="hero-bottom container"><span>Bolos de pote</span><span className="hero-bottom-dot" /><span>Empadões artesanais</span><span className="hero-bottom-line" /></div>
        </section>

        <section className="products section-pad" id="produtos" aria-labelledby="products-title">
          <div className="container">
            <div className="section-intro" data-reveal>
              <h2 id="products-title">Uma delícia para <em>cada momento.</em></h2>
              <p>Do doce ao salgado, encontre aquele sabor especial para deixar seu dia ainda melhor.</p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <article className={`category-card ${category.className}`} key={category.title} data-reveal>
                  <div className="category-image">
                    <Image src={category.image} alt={category.alt} fill sizes="(max-width: 767px) 92vw, 50vw" className="cover-image" />
                  </div>
                  <div className="category-content">
                    <div><h3>{category.title}</h3><p>{category.description}</p></div>
                    <a href={getOrderLink(category.title)} target="_blank" rel="noopener noreferrer" aria-label={`Quero pedir ${category.title}`}><Arrow diagonal /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="flavors section-pad" aria-labelledby="flavors-title">
          <div className="container">
            <div className="flavors-heading" data-reveal>
              <h2 id="flavors-title">Cada pote, uma <em>descoberta.</em></h2>
              <p>Explore os sabores fotografados pela Santo Recheio. Consulte disponibilidade ao fazer seu pedido.</p>
            </div>
            <FlavorCarouselControls />
            <div className="flavor-grid" id="flavor-grid" role="region" aria-label="Sabores de bolos de pote" tabIndex={0}>
              {potCakes.map((cake) => (
                <article className="flavor-card" key={cake.name}>
                  <div className="flavor-image"><Image src={cake.image} alt={cake.alt} fill sizes="(max-width: 600px) 62vw, (max-width: 900px) 30vw, 18vw" className="cover-image" loading="lazy" /></div>
                  <div className="flavor-meta"><h3>{cake.name}</h3><a href={getOrderLink(`o bolo de pote de ${cake.name}`)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar bolo de pote ${cake.name}`}><Arrow diagonal /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="values section-pad" aria-labelledby="values-title">
          <div className="container values-inner">
            <div className="values-intro" data-reveal><h2 id="values-title">Pequenos detalhes.<br /><em>Grandes sabores.</em></h2><p>Um cardápio para quem aprecia o prazer de escolher bem, seja na hora do doce ou do salgado.</p></div>
            <div className="values-list">
              <div className="value-row" data-reveal><ValueIcon kind="artisan" /><div><h3>Sabor artesanal</h3><p>Confeitaria artesanal em cada escolha da Santo Recheio.</p></div></div>
              <div className="value-row" data-reveal><ValueIcon kind="choice" /><div><h3>Doce ou salgado</h3><p>Bolos de pote, tortas salgadas e empadões para diferentes momentos.</p></div></div>
              <div className="value-row" data-reveal><ValueIcon kind="taste" /><div><h3>Feito para saborear</h3><p>Uma experiência que começa no olhar e continua a cada pedaço.</p></div></div>
            </div>
          </div>
        </section>

        <section className="about section-pad" id="sobre" aria-labelledby="about-title">
          <div className="container about-inner">
            <div className="about-media" data-reveal>
              <Image src="/img/logo-2.jpg" alt="Identidade visual Santo Recheio, Confeitaria Artesanal, Feito com carinho" fill sizes="(max-width: 899px) 92vw, 48vw" className="cover-image" loading="lazy" />
            </div>
            <div className="about-copy" data-reveal>
              <h2 id="about-title">Por trás de cada sabor, <em>uma paixão.</em></h2>
              <p>A Santo Recheio reúne o prazer da confeitaria artesanal em opções doces e salgadas para acompanhar seus momentos.</p>
              <p>Dos bolos de pote aos empadões, nosso convite é simples: escolha o que desperta sua vontade e venha conhecer nossos produtos.</p>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-link">Acompanhe no Instagram <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="order section-pad" id="como-pedir" aria-labelledby="order-title">
          <div className="container">
            <div className="order-heading" data-reveal><h2 id="order-title">Seu próximo momento delicioso <em>começa aqui.</em></h2><p>Pedir é simples. A Santo Recheio ajuda você a escolher.</p></div>
            <ol className="steps">
              <li data-reveal><span>01</span><h3>Escolha seus favoritos</h3><p>Explore nossos bolos de pote, tortas salgadas e empadões.</p></li>
              <li data-reveal><span>02</span><h3>Entre em contato</h3><p>Fale diretamente com a Santo Recheio pelo WhatsApp.</p></li>
              <li data-reveal><span>03</span><h3>Combine seu pedido</h3><p>Consulte opções, disponibilidade e condições no atendimento.</p></li>
            </ol>
            <div className="order-action" data-reveal><OrderButton>Fazer pedido pelo WhatsApp</OrderButton><span>Atendimento direto, sem formulários.</span></div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="container final-inner">
            <div className="final-copy" data-reveal><h2 id="final-title">Bateu aquela vontade de algo <em>delicioso?</em></h2><p>Seu próximo sabor favorito pode estar a uma mensagem de distância.</p><OrderButton light>Quero pedir agora</OrderButton></div>
            <div className="final-photo" data-reveal><Image src="/img/Bolo-pote-morango.jpg" alt="Bolo de pote de morango Santo Recheio" fill sizes="(max-width: 899px) 75vw, 28vw" className="cover-image" loading="lazy" /></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand"><Image src="/img/logo.jpg" alt="Logo Santo Recheio" width={90} height={90} /><div><strong>Santo Recheio</strong><p>Confeitaria artesanal para saborear com carinho.</p></div></div>
          <nav aria-label="Navegação do rodapé"><a href="#inicio">Início</a><a href="#produtos">Produtos</a><a href="#sobre">Sobre nós</a><a href="#como-pedir">Como pedir</a></nav>
          <div className="footer-social"><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <Arrow diagonal /></a><a href={getOrderLink()} target="_blank" rel="noopener noreferrer">WhatsApp <Arrow diagonal /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Santo Recheio. Todos os direitos reservados.</span><span>Feito com carinho.</span></div>
      </footer>
        </div>
      </div>
      <a
        className="whatsapp-float"
        href={getOrderLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp"
        title="Fazer pedido pelo WhatsApp"
      >
        <Image src="/img/whatsapp-original.svg" alt="" width={64} height={64} unoptimized />
      </a>
      <MotionController />
    </>
  );
}

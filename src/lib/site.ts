export const site = {
  name: "Santo Recheio",
  description: "Confeitaria artesanal com bolos de pote, tortas salgadas e empadões.",
  instagram: "https://www.instagram.com/santo.recheio1/",
  whatsappNumber: "5547999027029",
  defaultMessage:
    "Olá! Conheci a Santo Recheio pelo site e gostaria de saber mais sobre os produtos e fazer um pedido.",
} as const;

export function getOrderLink(product?: string) {
  const message = product
    ? `Olá! Conheci a Santo Recheio pelo site e gostaria de saber mais sobre ${product} e fazer um pedido.`
    : site.defaultMessage;
  const phone = site.whatsappNumber.replace(/\D/g, "");

  return phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : site.instagram;
}

export const hasWhatsApp = Boolean(site.whatsappNumber.replace(/\D/g, ""));

export const categories = [
  {
    title: "Bolos de pote",
    description: "Camadas de sabor e cremosidade para transformar qualquer pausa em um momento especial.",
    image: "/img/bolo-pote-ninho-com-nutella.jpg",
    alt: "Bolo de pote Santo Recheio com camadas claras e de chocolate",
    className: "category-sweet",
  },
  {
    title: "Empadões e tortas salgadas",
    description: "O lado salgado da Santo Recheio, feito para dividir ou saborear sem pressa.",
    image: "/img/empadao.jpg",
    alt: "Empadão Santo Recheio com cobertura dourada em embalagem de alumínio",
    className: "category-savory",
  },
] as const;

export const potCakes = [
  { name: "Morango", image: "/img/Bolo-pote-morango.jpg", alt: "Bolo de pote de morango Santo Recheio" },
  { name: "Brigadeiro", image: "/img/bolo-pote-brigadeiro.jpg", alt: "Bolo de pote de brigadeiro Santo Recheio" },
  { name: "Dois amores", image: "/img/bolo-pote-doisa-amores.jpg", alt: "Bolo de pote dois amores Santo Recheio" },
  { name: "Ninho com Nutella", image: "/img/bolo-pote-ninho-com-nutella.jpg", alt: "Bolo de pote Ninho com Nutella Santo Recheio" },
  { name: "Ninho", image: "/img/bolo-pote-ninho.jpg", alt: "Bolo de pote Ninho Santo Recheio" },
] as const;

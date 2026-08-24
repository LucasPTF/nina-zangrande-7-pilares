import LandingPage, { type HeroVariant } from "../LandingPage";

const hero: HeroVariant = {
  eyebrow: "TRABALHAR MAIS NÃO FAZ UMA EMPRESA FUNCIONAR MELHOR",
  title: "Você não abriu seu negócio",
  highlight: "para virar funcionária dele.",
  lead: "Pare de carregar atendimento, mensagens, compras, conteúdo e decisões sozinha. Construa uma empresa com estrutura para crescer sem consumir você.",
  button: "Quero tirar o negócio das minhas costas",
};

export default function AngleTwoPage() {
  return <LandingPage hero={hero} />;
}

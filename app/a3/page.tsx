import LandingPage, { type HeroVariant } from "../LandingPage";

const hero: HeroVariant = {
  angle: "Ângulo 3",
  eyebrow: "AGENDA CHEIA NÃO É O MESMO QUE EMPRESA LUCRATIVA",
  title: "Você trabalha o mês inteiro.",
  highlight: "Mas o dinheiro não acompanha.",
  lead: "Descubra onde preço, finanças, posicionamento e processos estão fazendo seu esforço escapar — e faça o resultado finalmente permanecer.",
  button: "Quero fazer meu esforço virar resultado",
};

export default function AngleThreePage() {
  return <LandingPage hero={hero} />;
}

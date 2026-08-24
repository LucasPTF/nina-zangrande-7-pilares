import LandingPage, { type HeroVariant } from "../LandingPage";

const hero: HeroVariant = {
  eyebrow: "O MÉTODO PARA UMA BELEZA QUE LUCRA E TRANSFORMA",
  title: "Você já domina a beleza.",
  highlight: "Agora é hora de dominar o negócio.",
  lead: "Construa uma empresa organizada, valorizada e preparada para crescer — sem continuar sustentando tudo apenas no seu esforço.",
  button: "Quero entrar para os 7 Pilares",
};

export default function AngleOnePage() {
  return <LandingPage hero={hero} />;
}

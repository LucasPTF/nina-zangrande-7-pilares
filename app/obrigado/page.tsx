import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscrição confirmada | Os 7 Pilares",
  description: "Próximos passos para participar dos encontros ao vivo de Os 7 Pilares da Empresária da Beleza.",
};

const nextSteps = [
  {
    number: "01",
    title: "Confira o canal usado na inscrição",
    text: "É por ele que você receberá as orientações da equipe da Nina.",
  },
  {
    number: "02",
    title: "Acompanhe o calendário",
    text: "As datas e as informações de acesso aos encontros ao vivo serão enviadas antes de cada aula.",
  },
  {
    number: "03",
    title: "Chegue com a sua realidade",
    text: "Separe as dúvidas e os desafios que hoje mais travam o crescimento da sua empresa.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="thanks-page">
      <header className="thanks-header shell">
        <a href="/" aria-label="Os 7 Pilares — página inicial">
          <img className="thanks-logo" src="/logo-7-pilares.png" alt="7 Pilares da Empresária da Beleza" />
        </a>
        <span>PLANEJE • ORGANIZE • FATURE • CRESÇA</span>
      </header>

      <section className="thanks-hero">
        <div className="shell thanks-grid">
          <div className="thanks-copy">
            <div className="thanks-confirmation"><span>✓</span> Inscrição confirmada</div>
            <p className="eyebrow eyebrow--light">BEM-VINDA AOS 7 PILARES</p>
            <h1>Você parou de adiar.<span>Agora começa a construir.</span></h1>
            <p className="thanks-lead">Seu próximo passo é transformar talento em empresa — ao vivo, com direção e ao lado de Nina Zangrande.</p>
            <div className="thanks-message">
              <strong>Importante:</strong>
              <p>Fique de olho nas orientações enviadas pela equipe. É nelas que você encontrará o calendário e o acesso aos encontros ao vivo.</p>
            </div>
          </div>

          <aside className="thanks-panel">
            <p className="eyebrow">O QUE ACONTECE AGORA</p>
            <h2>Três passos para chegar preparada.</h2>
            <div className="thanks-steps">
              {nextSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
            <a className="button button--gold" href="https://www.ninazangrande.com.br" target="_blank" rel="noreferrer">Ir para o site oficial</a>
          </aside>
        </div>
      </section>

      <footer className="thanks-footer">
        <div className="shell"><p>© 2026 Nina Zangrande. Todos os direitos reservados.</p></div>
      </footer>
    </main>
  );
}

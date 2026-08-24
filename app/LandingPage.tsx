const pillars = [
  { number: "01", title: "Mentalidade", text: "Saia do modo sobrevivência e comece a decidir como empresária." },
  { number: "02", title: "Posicionamento", text: "Faça seu valor ser percebido antes mesmo de falar o preço." },
  { number: "03", title: "Experiência", text: "Transforme cada contato em cuidado, confiança e profissionalismo." },
  { number: "04", title: "Finanças", text: "Entenda o que entra, o que sai e quanto realmente fica." },
  { number: "05", title: "Marketing", text: "Pare de postar por obrigação e comunique uma marca com direção." },
  { number: "06", title: "Processos", text: "Tire a rotina do improviso e ganhe mais previsibilidade." },
  { number: "07", title: "Crescimento", text: "Fortaleça a estrutura antes de colocar mais volume sobre ela." },
];

const experience = [
  { number: "01", title: "Comece pela base gravada", text: "Acesse as aulas no seu ritmo e construa uma visão completa dos 7 Pilares." },
  { number: "02", title: "Leve sua realidade para o ao vivo", text: "Nos encontros com Nina, tire dúvidas, debata desafios e trabalhe o momento atual da sua empresa." },
  { number: "03", title: "Aplique entre os encontros", text: "Use os materiais e desafios para transformar clareza em decisões dentro do negócio." },
  { number: "04", title: "Evolua em ciclos", text: "Quem entra continuamente começa pela base e participa dos ciclos ao vivo conforme a agenda da experiência." },
];

const bonuses = [
  { label: "Material 01", title: "Diagnóstico Empresária da Beleza", text: "Visualize os pontos fortes e os gargalos que hoje limitam o seu negócio." },
  { label: "Material 02", title: "Planner da Empresária da Beleza", text: "Transforme clareza em ações organizadas para a sua rotina real." },
  { label: "Material 03", title: "Kit Premium de Planilhas", text: "Comece a colocar mais controle e visão empresarial no dia a dia." },
];

const faqs = [
  { question: "O curso é gravado ou ao vivo?", answer: "Os dois. Você recebe acesso ao conteúdo gravado para estudar no seu ritmo e também participa de encontros ao vivo com Nina dentro da experiência." },
  { question: "Como funciona para quem entra continuamente?", answer: "Você começa pelas aulas gravadas e entra nos ciclos ao vivo conforme o calendário da experiência. Assim, chega aos encontros com base para trabalhar dúvidas, desafios e o momento atual do seu negócio." },
  { question: "Preciso ter salão próprio?", answer: "Não. O método foi pensado para profissionais da beleza que querem organizar o trabalho como negócio, com ou sem espaço próprio." },
  { question: "Serve para quem trabalha sozinha?", answer: "Sim. A realidade de atender, responder, comprar, postar e resolver tudo sozinha é um dos pontos centrais do curso." },
  { question: "É um curso técnico?", answer: "Não. O foco é a empresa por trás do serviço: mentalidade, posicionamento, experiência, finanças, marketing, processos e crescimento." },
  { question: "Vou precisar entender de gestão?", answer: "Não. A proposta é tornar a gestão simples, prática e conectada à rotina real da profissional da beleza." },
];

export type HeroVariant = {
  angle?: string;
  eyebrow: string;
  title: string;
  highlight: string;
  lead: string;
  button: string;
};

function BrandLogo({ className = "" }: { className?: string }) {
  return <img className={`brand-logo ${className}`} src="/logo-7-pilares.png" alt="7 Pilares da Empresária da Beleza" />;
}

function NinaPhoto({ kind }: { kind: "hero" | "profile" }) {
  const isHero = kind === "hero";
  return (
    <div className={`nina-photo nina-photo--${kind}`}>
      <img
        src={isHero ? "/nina-headline.png" : "/nina-apresentacao.png"}
        alt={isHero ? "Nina Zangrande, criadora dos 7 Pilares" : "Nina Zangrande, mentora de empresárias da beleza"}
        loading={isHero ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}

export default function LandingPage({ hero }: { hero: HeroVariant }) {
  return (
    <main>
      <div className="announcement"><span>Curso online</span><span className="announcement__dot" /><span>Aulas gravadas + encontros ao vivo</span></div>

      <div className="header-wrap">
        <header className="site-header shell">
          <a href="#inicio" aria-label="7 Pilares da Empresária da Beleza — início"><BrandLogo className="brand-logo--header" /></a>
          <a className="header-cta" href="#inscricao">Quero conhecer o método</a>
        </header>
      </div>

      <section className="hero" id="inicio">
        <div className="shell hero__grid">
          <div className="hero__copy">
            {hero.angle ? <span className="hero__angle">{hero.angle}</span> : null}
            <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
            <h1>{hero.title}<span>{hero.highlight}</span></h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="hero__actions">
              <a className="button button--gold" href="#inscricao">{hero.button}</a>
              <p>Aprenda no seu ritmo. Evolua com direção ao vivo.</p>
            </div>
            <div className="hero__trust">
              <div><strong>26+</strong><span>anos no mercado da beleza</span></div>
              <div><strong>7</strong><span>pilares que trabalham juntos</span></div>
              <div><strong>1</strong><span>método que olha a empresa inteira</span></div>
            </div>
          </div>
          <div className="hero__visual"><div className="hero__arch" aria-hidden="true" /><NinaPhoto kind="hero" /></div>
        </div>
      </section>

      <section className="section recognition">
        <div className="shell recognition__grid">
          <div><p className="eyebrow eyebrow--light">SE ISSO PARECE A SUA ROTINA...</p><h2>Você trabalha muito. Mas a empresa ainda não devolve o que seu talento merece.</h2></div>
          <div className="recognition__list">
            {["Atende, responde WhatsApp, compra material, posta e resolve tudo.", "Sabe que entrega um bom serviço, mas trava na hora de cobrar.", "Vê dinheiro entrando e termina o mês sem saber quanto realmente sobrou.", "Busca mais clientes, mesmo sentindo que a estrutura atual já está no limite."].map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="reveal__intro"><p className="eyebrow">A VERDADE QUE MUDA A CONVERSA</p><h2>Agenda cheia não é a mesma coisa que empresa forte.</h2><p>Quando preço, posicionamento, experiência, finanças, marketing e processos não conversam entre si, mais movimento entra em uma estrutura que continua perdendo força.</p></div>
        <div className="analogy-card"><span>Não é falta de talento.</span><strong>É a estrutura que ainda não acompanha a profissional que você se tornou.</strong><p>Antes de fazer mais, você precisa enxergar o negócio inteiro e saber onde agir primeiro.</p></div>
      </section>

      <section className="section pillars" id="pilares">
        <div className="shell">
          <div className="section-heading section-heading--center"><p className="eyebrow">MÉTODO ZANGRANDE®</p><h2>Sete pilares. Uma empresa que trabalha a seu favor.</h2><p>Porque nenhuma parte do negócio cresce sozinha por muito tempo.</p></div>
          <div className="pillars__grid">{pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section experience">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">UMA EXPERIÊNCIA CONTÍNUA</p><h2>Você aprende no seu ritmo. E evolui ao vivo, em ciclos.</h2><p>O conteúdo gravado entrega a base. Os encontros com Nina transformam essa base em decisões para a sua realidade.</p></div>
          <div className="experience__grid">{experience.map((item) => <article className="experience-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section transformation">
        <div className="shell transformation__grid">
          <div><p className="eyebrow eyebrow--light">O QUE MUDA NA PRÁTICA</p><h2>Você deixa de apagar incêndios e começa a conduzir a empresa.</h2></div>
          <ul className="check-list check-list--light"><li>Enxerga onde o dinheiro, o tempo e a energia estão escapando.</li><li>Entende o que sustenta um posicionamento mais valorizado.</li><li>Define prioridades sem tentar consertar tudo de uma vez.</li><li>Cria uma rotina com mais clareza, controle e direção.</li><li>Toma decisões como empresária — sem perder sua excelência profissional.</li></ul>
        </div>
      </section>

      <section className="section materials"><div className="shell"><div className="section-heading"><p className="eyebrow">MATERIAIS DE APLICAÇÃO</p><h2>Conhecimento que sai da tela e entra no seu negócio.</h2></div><div className="materials__grid">{bonuses.map((bonus) => <article className="material-card" key={bonus.label}><span>{bonus.label}</span><h3>{bonus.title}</h3><p>{bonus.text}</p></article>)}</div></div></section>

      <section className="section about"><div className="shell about__grid"><div className="about__visual"><NinaPhoto kind="profile" /></div><div className="about__copy"><p className="eyebrow">QUEM VAI GUIAR VOCÊ</p><h2>Nina Zangrande</h2><p className="about__lead">Da prática no atendimento à formação de profissionais que querem ocupar o lugar de empresárias.</p><p>Ao longo de mais de 26 anos, Nina transformou vivência real em cursos, treinamentos e mentorias, com atuação também ao lado de instituições como SENAC e SEBRAE.</p><p>O Método ZANGRANDE® nasce dessa visão integrada: técnica, posicionamento premium, gestão empresarial e crescimento estratégico.</p><blockquote>“Por trás do serviço existe uma empresa — e ela também precisa ser cuidada.”</blockquote></div></div></section>

      <section className="section audience"><div className="shell audience__grid"><div><p className="eyebrow eyebrow--light">OS 7 PILARES SÃO PARA VOCÊ QUE...</p><h2>Já sabe fazer. Agora quer planejar, organizar, faturar e crescer.</h2></div><ul className="audience__list"><li>Sente que o dinheiro não acompanha o esforço.</li><li>Tem medo de aumentar o preço e perder clientes.</li><li>Não sabe exatamente quanto sobra no fim do mês.</li><li>Fez cursos técnicos, mas o negócio não cresceu na mesma proporção.</li><li>Quer liderar a própria empresa com mais segurança e liberdade.</li></ul></div></section>

      <section className="section offer" id="inscricao"><div className="shell offer__wrap"><div className="offer__copy"><p className="eyebrow eyebrow--light">INSCRIÇÕES CONTÍNUAS</p><h2>Entre agora. Comece pela base. Evolua a cada ciclo.</h2><p>Você recebe acesso às aulas gravadas e avança com Nina nos encontros ao vivo, levando para a mesa as dúvidas e os desafios do momento atual da sua empresa.</p><div className="offer__details"><span>Conteúdo gravado</span><span>Encontros ao vivo</span><span>Desafios de aplicação</span><span>Materiais de apoio</span><span>Método ZANGRANDE®</span></div></div><div className="enrollment-card"><BrandLogo className="brand-logo--card" /><span>OS 7 PILARES DA EMPRESÁRIA DA BELEZA</span><h3>Seu talento já trouxe você até aqui. A estrutura leva você adiante.</h3><p>Conheça a experiência e receba as informações para entrar.</p><a className="button button--gold" href="https://www.ninazangrande.com.br" target="_blank" rel="noreferrer">Quero conhecer os 7 Pilares</a><small>Você será direcionada ao canal oficial de Nina Zangrande.</small></div></div></section>

      <section className="section faq shell"><div className="section-heading section-heading--center"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Antes de começar</h2></div><div className="faq__list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="final-cta"><div className="shell final-cta__inner"><span>PLANEJE • ORGANIZE • FATURE • CRESÇA</span><h2>Construa uma beleza que lucra e transforma.</h2><p>Você não precisa correr mais. Precisa de uma empresa capaz de acompanhar o seu talento.</p><a className="button button--gold" href="#inscricao">Quero entrar para os 7 Pilares</a></div></section>

      <footer><div className="shell footer__inner"><BrandLogo className="brand-logo--footer" /><p>© 2026 Nina Zangrande. Todos os direitos reservados.</p></div></footer>
      <a className="mobile-cta" href="#inscricao">Quero conhecer os 7 Pilares</a>
    </main>
  );
}

const pillars = [
  { number: "01", title: "Mentalidade", text: "Saia do modo sobrevivência e comece a decidir como empresária." },
  { number: "02", title: "Posicionamento", text: "Faça seu valor ser percebido antes mesmo de falar o preço." },
  { number: "03", title: "Experiência", text: "Transforme cada contato em cuidado, confiança e profissionalismo." },
  { number: "04", title: "Finanças", text: "Entenda o que entra, o que sai e quanto realmente fica." },
  { number: "05", title: "Marketing", text: "Pare de postar por obrigação e comunique uma marca com direção." },
  { number: "06", title: "Processos", text: "Tire a rotina do improviso e ganhe mais previsibilidade." },
  { number: "07", title: "Crescimento", text: "Fortaleça a estrutura antes de colocar mais volume sobre ela." },
];

const bonuses = [
  { label: "Bônus 01", title: "Diagnóstico Empresária da Beleza", text: "Visualize os pontos fortes e os gargalos que hoje limitam o seu negócio." },
  { label: "Bônus 02", title: "Planner da Empresária da Beleza", text: "Transforme clareza em ações organizadas para a sua rotina real." },
  { label: "Bônus 03", title: "Kit Premium de Planilhas", text: "Comece a colocar mais controle e visão empresarial no dia a dia." },
];

const faqs = [
  { question: "Preciso ter salão próprio?", answer: "Não. O workshop foi pensado para profissionais da beleza que já atendem e querem organizar o trabalho como negócio, com ou sem espaço próprio." },
  { question: "Serve para quem trabalha sozinha?", answer: "Sim. A realidade de atender, responder, comprar, postar e resolver tudo sozinha é um dos pontos centrais do encontro." },
  { question: "É um curso técnico?", answer: "Não. O foco é a estrutura empresarial por trás do serviço: mentalidade, posicionamento, experiência, finanças, marketing, processos e crescimento." },
  { question: "Vou precisar entender de gestão?", answer: "Não. A proposta é apresentar uma visão simples, prática e conectada à realidade da profissional da beleza." },
  { question: "O encontro fica gravado?", answer: "Sim. O replay fica disponível por 3 dias." },
];

function PhotoPlaceholder({ kind }: { kind: "hero" | "profile" }) {
  const isHero = kind === "hero";
  return (
    <div className={`photo-placeholder photo-placeholder--${kind} photo-placeholder--image`}>
      <div className="photo-placeholder__frame">
        <img
          className="photo-placeholder__image"
          src={isHero ? "/nina-headline.png" : "/nina-apresentacao.png"}
          alt={isHero ? "Nina Zangrande, criadora do Método ZANGRANDE" : "Nina Zangrande, especialista em negócios da beleza"}
          loading={isHero ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement"><span>Workshop online e ao vivo</span><span className="announcement__dot" /><span>2h30 de clareza e direção</span></div>

      <header className="site-header shell">
        <a className="brand" href="#inicio" aria-label="Nina Zangrande — início">
          <span className="brand__monogram">NZ</span>
          <span className="brand__text"><strong>Nina Zangrande</strong><small>Método ZANGRANDE®</small></span>
        </a>
        <a className="header-cta" href="#inscricao">Quero participar</a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero__copy">
          <p className="eyebrow">OS 7 PILARES DA EMPRESÁRIA DA BELEZA</p>
          <h1>Você sabe fazer seu trabalho.<span>Agora falta fazer o negócio funcionar.</span></h1>
          <p className="hero__lead">Mais uma técnica não resolve preço, gestão, marketing, fidelização e processos. Em 2h30, você vai enxergar qual dessas áreas está segurando seu crescimento e sair sabendo o que atacar primeiro.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#inscricao">Quero descobrir onde meu negócio trava</a>
            <p>Ao vivo no Zoom • Replay por 3 dias • 3 bônus incluídos</p>
          </div>
          <div className="hero__trust">
            <div><strong>26+</strong><span>anos no mercado da beleza</span></div>
            <div><strong>7</strong><span>pilares que trabalham juntos</span></div>
            <div><strong>1</strong><span>plano inicial com prioridade</span></div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__halo" aria-hidden="true" />
          <PhotoPlaceholder kind="hero" />
          
        </div>
      </section>

      <section className="recognition section section--ink">
        <div className="shell recognition__grid">
          <div><p className="eyebrow eyebrow--light">SE ISSO PARECE A SUA ROTINA...</p><h2>Você trabalha demais para o dinheiro que fica.</h2></div>
          <div className="recognition__list">
            {["Atende, responde WhatsApp, compra material, posta e resolve tudo.", "Sabe que entrega um bom serviço, mas trava na hora de cobrar.", "Vê dinheiro entrando e termina o mês sem saber quanto realmente sobrou.", "Busca mais clientes, mesmo sentindo que a estrutura atual já está no limite."].map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section shell reveal">
        <div className="reveal__intro"><p className="eyebrow">A VERDADE QUE MUDA A CONVERSA</p><h2>Trabalho e lucro não são a mesma coisa.</h2><p>Quando preço, posicionamento, experiência, finanças, marketing e processos não conversam entre si, mais movimento entra em uma estrutura que continua perdendo força.</p></div>
        <div className="analogy-card"><span>É como tentar encher um balde furado.</span><strong>Colocar mais água não fecha o buraco.</strong><p>Antes de fazer mais, você precisa enxergar onde o negócio está travando.</p></div>
      </section>

      <section className="section pillars" id="pilares">
        <div className="shell">
          <div className="section-heading section-heading--center"><p className="eyebrow">MÉTODO ZANGRANDE®</p><h2>Uma empresa forte não depende de uma única área.</h2><p>Os 7 pilares mostram o que precisa funcionar junto para o seu talento deixar de depender apenas do seu braço.</p></div>
          <div className="pillars__grid">{pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section workshop">
        <div className="shell workshop__grid">
          <div className="workshop__copy"><p className="eyebrow">EM UMA ÚNICA AULA</p><h2>2h30 para parar de adivinhar o que falta no seu negócio.</h2><p>Você não sai com mais uma lista enorme. Sai com uma visão clara do negócio, identifica o pilar mais fraco e entende qual movimento precisa começar primeiro.</p><ul className="check-list"><li>Por que agenda cheia e empresa lucrativa são coisas diferentes.</li><li>Onde o seu esforço pode estar escapando.</li><li>Por que baixar o preço não corrige falta de posicionamento.</li><li>Como experiência, marca e valor percebido se conectam.</li><li>Por que mais clientes podem aumentar um problema existente.</li></ul></div>
          <aside className="workshop__card"><span className="workshop__card-label">VOCÊ LEVA COM VOCÊ</span>{[["Clareza", "Para enxergar o negócio além da agenda."], ["Diagnóstico", "Para identificar qual pilar está mais fraco."], ["Prioridade", "Para saber onde concentrar energia primeiro."], ["Plano inicial", "Para transformar visão em movimento."]].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</aside>
        </div>
      </section>

      <section className="section bonuses"><div className="shell"><div className="section-heading"><p className="eyebrow">MATERIAIS PARA CONTINUAR</p><h2>Você não recebe apenas a aula.</h2></div><div className="bonuses__grid">{bonuses.map((bonus) => <article className="bonus-card" key={bonus.label}><span>{bonus.label}</span><h3>{bonus.title}</h3><p>{bonus.text}</p></article>)}</div></div></section>

      <section className="section about"><div className="shell about__grid"><div className="about__visual"><PhotoPlaceholder kind="profile" /></div><div className="about__copy"><p className="eyebrow">QUEM VAI GUIAR VOCÊ</p><h2>Nina Zangrande</h2><p className="about__lead">Experiência construída no atendimento, na gestão e na formação de profissionais da beleza.</p><p>Ao longo de mais de 26 anos, Nina transformou a vivência prática em cursos, treinamentos e mentorias, com atuação também ao lado de instituições como SENAC e SEBRAE.</p><p>O Método ZANGRANDE® nasce dessa visão integrada: técnica, posicionamento premium, gestão empresarial e crescimento estratégico.</p><blockquote>“Por trás do serviço existe uma empresa — e ela também precisa ser cuidada.”</blockquote></div></div></section>

      <section className="section audience"><div className="shell audience__grid"><div><p className="eyebrow">ESTE WORKSHOP É PARA VOCÊ QUE...</p><h2>Já sabe trabalhar, mas quer parar de sustentar tudo sozinha.</h2></div><ul className="audience__list"><li>Sente que o dinheiro não acompanha o esforço.</li><li>Tem medo de aumentar o preço e perder clientes.</li><li>Não sabe exatamente quanto sobra no fim do mês.</li><li>Fez cursos técnicos, mas o negócio não cresceu na mesma proporção.</li><li>Quer começar a pensar como empresária sem perder a excelência profissional.</li></ul></div></section>

      <section className="section offer" id="inscricao"><div className="shell offer__wrap"><div className="offer__copy"><p className="eyebrow eyebrow--light">OS 7 PILARES DA EMPRESÁRIA DA BELEZA</p><h2>Primeiro, enxergue o negócio. Depois, escolha o próximo passo.</h2><p>Um encontro ao vivo para identificar onde sua empresa perde força e sair com uma direção prática para começar.</p><div className="offer__details"><span>Ao vivo no Zoom</span><span>Duração de 2h30</span><span>Replay por 3 dias</span><span>Grupo de WhatsApp</span><span>3 bônus incluídos</span></div></div><div className="price-card"><span>INVESTIMENTO ÚNICO</span><div className="price-card__price"><small>R$</small><strong>97</strong></div><p>Acesso à aula, replay, grupo e todos os materiais.</p><a className="button button--gold" href="#inicio">Quero meu diagnóstico</a><small>Vagas para a próxima turma ao vivo.</small></div></div></section>

      <section className="section faq shell"><div className="section-heading section-heading--center"><p className="eyebrow">PERGUNTAS FREQUENTES</p><h2>Antes de tomar sua decisão</h2></div><div className="faq__list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="final-cta"><div className="shell final-cta__inner"><span>Seu problema pode não ser falta de clientes.</span><h2>Pode ser falta de empresa.</h2><p>Você não precisa correr mais antes de descobrir onde está o vazamento.</p><a className="button button--primary" href="#inscricao">Quero descobrir onde meu negócio trava</a></div></section>

      <footer><div className="shell footer__inner"><div className="brand brand--footer"><span className="brand__monogram">NZ</span><span className="brand__text"><strong>Nina Zangrande</strong><small>Método ZANGRANDE®</small></span></div><p>© 2026 Nina Zangrande. Todos os direitos reservados.</p></div></footer>
      <a className="mobile-cta" href="#inscricao">Quero participar por R$ 97</a>
    </main>
  );
}



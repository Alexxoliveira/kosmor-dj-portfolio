"use client";

import { useEffect, useMemo, useState } from "react";

const services = [
  {
    id: "01",
    title: "AI Customer Service",
    text: "Agentes inteligentes para atender, qualificar e encaminhar clientes com contexto, consistência e escala.",
    tag: "24/7 · OMNICHANNEL",
  },
  {
    id: "02",
    title: "Sales Automation",
    text: "Fluxos automatizados para organizar leads, acelerar follow-ups e aumentar eficiência comercial.",
    tag: "LEADS · CRM · FOLLOW-UP",
  },
  {
    id: "03",
    title: "AI Operations",
    text: "Automação de tarefas internas, documentos, relatórios e rotinas operacionais repetitivas.",
    tag: "WORKFLOWS · OPS",
  },
  {
    id: "04",
    title: "Custom AI Systems",
    text: "Soluções sob medida com agentes, integrações, regras e inteligência aplicada ao processo real.",
    tag: "CUSTOM · API · AGENTS",
  },
];

const flow = [
  ["01", "INPUT", "Captura de entrada em canais como WhatsApp, site, CRM ou operação interna."],
  ["02", "INTERPRET", "Leitura de contexto, intenção, prioridade e classificação automática."],
  ["03", "EXECUTE", "Resposta, registro, acionamento de ferramentas e automação de tarefas."],
  ["04", "ESCALATE", "Encaminhamento inteligente quando o caso exige validação humana."],
  ["05", "OPTIMIZE", "Métricas, aprendizado e melhoria contínua do sistema operacional."],
];

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span className="mark-core" />
      <span className="mark-ring mark-ring-a" />
      <span className="mark-ring mark-ring-b" />
    </span>
  );
}

function ProcessModel() {
  return (
    <div className="process-model" aria-hidden="true">
      <div className="model-platform" />
      <div className="model-column model-column-a" />
      <div className="model-column model-column-b" />
      <div className="model-card model-card-center">
        <span>AI AGENTS</span>
        <strong>Orquestração inteligente</strong>
      </div>
      <div className="model-card model-card-left">
        <span>INPUTS</span>
        <strong>Leads · Dados · Solicitações</strong>
      </div>
      <div className="model-card model-card-right">
        <span>OUTPUTS</span>
        <strong>Atendimento · Automação · Insights</strong>
      </div>
      <div className="model-connector model-connector-left" />
      <div className="model-connector model-connector-right" />
      <div className="model-node model-node-a" />
      <div className="model-node model-node-b" />
      <div className="model-node model-node-c" />
      <div className="model-glow" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const interval = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % flow.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="page-noise" aria-hidden="true" />

      <nav className="nav-shell">
        <button className="brand" onClick={() => go("top")} aria-label="Ir para o início">
          <Mark />
          <span>AURION <b>AI</b></span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => go("solutions")}>SOLUTIONS</button>
          <button onClick={() => go("visual-system")}>VISUAL SYSTEM</button>
          <button onClick={() => go("automation")}>AUTOMATION</button>
          <button onClick={() => go("contact")}>CONTACT</button>
        </div>

        <button className="nav-cta" onClick={() => go("contact")}>
          START A PROJECT <span>↗</span>
        </button>
      </nav>

      <section id="top" className="hero cinematic-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />
        <div className="hero-shine" aria-hidden="true" />

        <div className="hero-copy reveal fade-up is-visible" data-reveal>
          <p className="eyebrow"><span className="status-dot" /> INTELLIGENT SYSTEMS FOR BUSINESS</p>
          <h1>
            CLASSIC DESIGN.<br />
            SMART <em>MOTION.</em><br />
            REAL AUTOMATION.
          </h1>
          <p className="hero-text">
            AURION AI transforma atendimento, vendas e operações em sistemas mais claros, elegantes e eficientes — com inteligência aplicada ao fluxo real do negócio.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go("solutions")}>
              EXPLORE SOLUTIONS <span>↓</span>
            </button>
            <button className="btn-secondary" onClick={() => go("visual-system")}>
              SEE THE 3D SYSTEM
            </button>
          </div>
        </div>

        <div className="hero-visual reveal scale-in is-visible" data-reveal>
          <div className="orbital-card premium-frame">
            <div className="orbital-top"><span>AURION CORE</span><span>ONLINE</span></div>
            <div className="orbital-stage">
              <div className="planet cinematic-planet">
                <span className="planet-core" />
                <span className="orbit orbit-1" />
                <span className="orbit orbit-2" />
                <span className="orbit orbit-3" />
                <span className="node node-1" />
                <span className="node node-2" />
                <span className="node node-3" />
                <span className="node node-4" />
                <span className="core-label core-label-a">INPUT</span>
                <span className="core-label core-label-b">MODEL</span>
                <span className="core-label core-label-c">ACTION</span>
                <span className="light-sweep" />
              </div>
            </div>
            <div className="orbital-metrics">
              <div><span>MODE</span><b>AUTONOMOUS</b></div>
              <div><span>STYLE</span><b>CLASSIC MOTION</b></div>
              <div><span>FLOW</span><b>ORCHESTRATED</b></div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>AI AGENTS</span><i />
          <span>AUTOMATION</span><i />
          <span>INTEGRATIONS</span><i />
          <span>OPERATIONAL INTELLIGENCE</span>
        </div>
      </section>

      <section className="proof-strip classic-strip">
        <p>CLARITY IN DESIGN</p>
        <p>CONSISTENCY IN MOTION</p>
        <p>INTELLIGENCE IN OPERATION</p>
      </section>

      <section id="solutions" className="section services-section">
        <div className="section-heading reveal fade-up" data-reveal>
          <div><p className="eyebrow">01 / SOLUTIONS</p><span className="section-index">A—01</span></div>
          <h2>BUILT FOR <br /><em>REAL BUSINESS.</em></h2>
          <p className="section-lead">
            Criamos sistemas com propósito operacional: reduzir fricção, acelerar resposta, escalar atendimento e dar mais inteligência ao fluxo comercial e interno.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className={`service-card reveal fade-up delay-${(index % 4) + 1}`} key={service.id} data-reveal>
              <div className="service-top"><span>{service.id}</span><span className="service-arrow">↗</span></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <small>{service.tag}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="visual-system" className="section visual-system-section">
        <div className="section-heading compact reveal fade-up" data-reveal>
          <div><p className="eyebrow">02 / VISUAL SYSTEM</p><span className="section-index">A—02</span></div>
          <h2>A 3D VIEW OF<br /><em>WHAT WE DELIVER.</em></h2>
          <p className="section-lead">
            Uma representação tridimensional do ecossistema da AURION AI: entradas, processamento inteligente, automações e saídas conectadas em uma mesma estrutura de operação.
          </p>
        </div>

        <div className="visual-system-layout">
          <div className="visual-system-copy reveal slide-in-left" data-reveal>
            <div className="stack-note">AGENTS · AUTOMATION · ANALYTICS · INTEGRATION</div>
            <h3>Uma base visual para o mercado em que atuamos.</h3>
            <p>
              Essa composição 3D ilustra como a AURION conecta diferentes pontos do negócio em um núcleo inteligente: o sistema recebe entradas, interpreta contexto, executa ações e devolve resultado operacional.
            </p>
            <ul className="feature-list">
              <li>Atendimento automatizado com contexto</li>
              <li>Fluxos comerciais e operacionais integrados</li>
              <li>Camada inteligente entre dados, canais e equipes</li>
            </ul>
          </div>

          <div className="visual-system-art reveal scale-in" data-reveal>
            <div className="three-d-shell">
              <ProcessModel />
            </div>
          </div>
        </div>
      </section>

      <section id="automation" className="section automation-section">
        <div className="section-heading compact reveal fade-up" data-reveal>
          <div><p className="eyebrow">03 / AUTOMATION FLOW</p><span className="section-index">A—03</span></div>
          <h2>SIMPLE MOTION.<br /><em>WELL-DESIGNED FLOW.</em></h2>
        </div>

        <div className="automation-layout">
          <div className="automation-board reveal slide-in-left" data-reveal>
            <div className="automation-topbar">
              <span>OPERATIONAL FLOW</span>
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(flow.length).padStart(2, "0")}</span>
            </div>
            <div className="automation-progress">
              <span style={{ width: `${((activeStep + 1) / flow.length) * 100}%` }} />
            </div>
            <div className="automation-steps">
              {flow.map(([id, title, text], index) => (
                <button
                  type="button"
                  key={id}
                  className={`automation-step ${activeStep === index ? "active" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="step-id">{id}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="automation-panel reveal slide-in-right" data-reveal>
            <div className="automation-panel-card">
              <span className="panel-kicker">ACTIVE STAGE</span>
              <h3>{flow[activeStep][1]}</h3>
              <p>{flow[activeStep][2]}</p>
              <div className="panel-pills">
                <span>CLASSIC EASING</span>
                <span>SMOOTH TRANSITION</span>
                <span>LOW VISUAL NOISE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div className="reveal fade-up" data-reveal><span>01</span><b>24/7</b><p>Disponibilidade operacional</p></div>
        <div className="reveal fade-up delay-1" data-reveal><span>02</span><b>1→N</b><p>Escala de atendimento</p></div>
        <div className="reveal fade-up delay-2" data-reveal><span>03</span><b>API</b><p>Integração entre sistemas</p></div>
        <div className="reveal fade-up delay-3" data-reveal><span>04</span><b>LIVE</b><p>Decisão em tempo real</p></div>
      </section>

      <section className="vision-section">
        <div className="vision-grid" />
        <div className="vision-copy reveal fade-up" data-reveal>
          <p className="eyebrow">04 / VISION</p>
          <h2>TECHNOLOGY SHOULD<br /><em>FEEL NATURAL.</em></h2>
          <p>
            O objetivo não é parecer complexo. O objetivo é transmitir solidez, clareza e confiança — com movimento suficiente para valorizar a experiência, sem gerar excesso visual.
          </p>
        </div>
        <div className="vision-mark reveal scale-in" data-reveal><Mark /></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-head reveal fade-up" data-reveal>
          <p className="eyebrow">05 / START</p>
          <h2>BUILD YOUR<br /><em>INTELLIGENCE LAYER.</em></h2>
          <p>Conte onde sua operação precisa de inteligência, automação ou integração.</p>
        </div>

        <form className="contact-form reveal fade-up" onSubmit={handleSubmit} data-reveal>
          <label>
            <span>NAME / COMPANY</span>
            <input required name="name" placeholder="Seu nome ou empresa" />
          </label>
          <label>
            <span>CONTACT</span>
            <input required name="contact" placeholder="E-mail ou WhatsApp" />
          </label>
          <label className="full">
            <span>WHAT SHOULD WE AUTOMATE?</span>
            <textarea required name="message" rows="4" placeholder="Descreva o processo, volume ou gargalo..." />
          </label>
          <button className="submit-btn" type="submit">SEND BRIEF <span>↗</span></button>
          {submitted && (
            <p className="form-note" role="status">
              Protótipo recebido. Na versão de produção, este formulário será conectado ao canal comercial da AURION AI.
            </p>
          )}
        </form>
      </section>

      <footer>
        <div className="footer-brand"><Mark /><span>AURION <b>AI</b></span></div>
        <p>INTELLIGENT SYSTEMS FOR BUSINESS</p>
        <span>© {year} AURION AI</span>
        <button onClick={() => go("top")}>BACK TO TOP ↑</button>
      </footer>
    </main>
  );
}

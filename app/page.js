"use client";

import { useEffect, useMemo, useState } from "react";

const services = [
  {
    id: "01",
    title: "AI Customer Service",
    text: "Agentes inteligentes para atender, qualificar e encaminhar clientes em escala, com contexto e padrão de marca.",
    tag: "24/7 · OMNICHANNEL",
  },
  {
    id: "02",
    title: "Sales Automation",
    text: "Fluxos para capturar leads, enriquecer dados, priorizar oportunidades e acelerar follow-ups sem perder personalização.",
    tag: "LEADS · CRM · FOLLOW-UP",
  },
  {
    id: "03",
    title: "AI Operations",
    text: "Automação de tarefas internas, triagem, documentos, relatórios e rotinas repetitivas conectando sistemas e equipes.",
    tag: "WORKFLOWS · DATA · OPS",
  },
  {
    id: "04",
    title: "Custom AI Systems",
    text: "Soluções sob medida para processos específicos, com agentes, ferramentas, integrações e camadas de controle.",
    tag: "CUSTOM · API · AGENTS",
  },
];

const flow = [
  ["01", "MAP", "Mapeamos gargalos, volume, dados e objetivos de negócio."],
  ["02", "DESIGN", "Desenhamos o fluxo, regras, integrações e experiência do agente."],
  ["03", "BUILD", "Construímos o sistema e conectamos os canais necessários."],
  ["04", "OPTIMIZE", "Medimos, ajustamos e evoluímos com base no uso real."],
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
          <button onClick={() => go("services")}>SOLUTIONS</button>
          <button onClick={() => go("system")}>SYSTEM</button>
          <button onClick={() => go("process")}>PROCESS</button>
          <button onClick={() => go("contact")}>CONTACT</button>
        </div>

        <button className="nav-cta" onClick={() => go("contact")}>
          START A PROJECT <span>↗</span>
        </button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />

        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="status-dot" /> INTELLIGENT BUSINESS INFRASTRUCTURE</p>
          <h1>
            INTELLIGENCE<br />
            THAT <em>MOVES</em><br />
            BUSINESS.
          </h1>
          <p className="hero-text">
            Criamos agentes de IA, automações e sistemas inteligentes que transformam atendimento,
            vendas e operações em fluxos mais rápidos, escaláveis e mensuráveis.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go("services")}>EXPLORE SOLUTIONS <span>↓</span></button>
            <button className="btn-secondary" onClick={() => go("contact")}>BUILD WITH AURION</button>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="orbital-card">
            <div className="orbital-top"><span>AURION CORE</span><span>ONLINE</span></div>
            <div className="orbital-stage">
              <div className="planet">
                <span className="planet-core" />
                <span className="orbit orbit-1" />
                <span className="orbit orbit-2" />
                <span className="orbit orbit-3" />
                <span className="node node-1" />
                <span className="node node-2" />
                <span className="node node-3" />
                <span className="node node-4" />
              </div>
            </div>
            <div className="orbital-metrics">
              <div><span>MODE</span><b>AUTONOMOUS</b></div>
              <div><span>LATENCY</span><b>REAL-TIME</b></div>
              <div><span>SCALE</span><b>ADAPTIVE</b></div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>AI AGENTS</span><i />
          <span>AUTOMATION</span><i />
          <span>DATA SYSTEMS</span><i />
          <span>BUSINESS INTELLIGENCE</span>
        </div>
      </section>

      <section className="proof-strip">
        <p>AUTOMATE THE REPETITIVE.</p>
        <p>AUGMENT THE IMPORTANT.</p>
        <p>MEASURE WHAT MATTERS.</p>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">01 / SOLUTIONS</p><span className="section-index">A—01</span></div>
          <h2>AI BUILT AROUND<br /><em>REAL BUSINESS.</em></h2>
          <p className="section-lead">
            Não vendemos “IA por IA”. Projetamos sistemas em torno de gargalos concretos: demanda,
            velocidade de resposta, conversão, capacidade operacional e experiência do cliente.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id} data-reveal>
              <div className="service-top"><span>{service.id}</span><span className="service-arrow">↗</span></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <small>{service.tag}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="section system-section">
        <div className="system-visual" data-reveal>
          <div className="terminal">
            <div className="terminal-bar"><span>AURION / ORCHESTRATION LAYER</span><span>● LIVE</span></div>
            <div className="terminal-body">
              <div className="terminal-line active"><span>01</span><b>INPUT</b><em>Lead enters through WhatsApp / Web / CRM</em></div>
              <div className="terminal-line"><span>02</span><b>UNDERSTAND</b><em>Intent, context, profile and priority are interpreted</em></div>
              <div className="terminal-line"><span>03</span><b>ACT</b><em>Agent answers, updates systems and triggers workflows</em></div>
              <div className="terminal-line"><span>04</span><b>ESCALATE</b><em>Human handoff when context or policy requires it</em></div>
              <div className="terminal-line"><span>05</span><b>LEARN</b><em>Metrics feed continuous operational improvement</em></div>
            </div>
            <div className="terminal-footer"><span>SECURE BY DESIGN</span><span>HUMAN-IN-THE-LOOP</span><span>API READY</span></div>
          </div>
        </div>

        <div className="system-copy" data-reveal>
          <p className="eyebrow">02 / SYSTEM</p>
          <h2>ONE LAYER.<br /><em>MANY ACTIONS.</em></h2>
          <p>
            AURION conecta canais, dados e ferramentas em uma camada inteligente de decisão e execução.
            O agente não apenas conversa: ele pode classificar, buscar, registrar, disparar e acompanhar.
          </p>
          <div className="capability-list">
            <span>01 <b>CONVERSATION</b></span>
            <span>02 <b>QUALIFICATION</b></span>
            <span>03 <b>INTEGRATION</b></span>
            <span>04 <b>AUTOMATION</b></span>
            <span>05 <b>ANALYTICS</b></span>
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div data-reveal><span>01</span><b>24/7</b><p>Disponibilidade operacional</p></div>
        <div data-reveal><span>02</span><b>1→N</b><p>Escala de atendimento</p></div>
        <div data-reveal><span>03</span><b>API</b><p>Integração entre sistemas</p></div>
        <div data-reveal><span>04</span><b>LIVE</b><p>Decisões em tempo real</p></div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading compact" data-reveal>
          <div><p className="eyebrow">03 / PROCESS</p><span className="section-index">A—03</span></div>
          <h2>FROM FRICTION<br /><em>TO FLOW.</em></h2>
        </div>

        <div className="process-grid">
          {flow.map(([id, title, text]) => (
            <article key={id} data-reveal>
              <span className="process-id">{id}</span>
              <div className="process-line" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-grid" />
        <div className="vision-copy" data-reveal>
          <p className="eyebrow">04 / VISION</p>
          <h2>YOUR COMPANY<br />SHOULD <em>THINK FASTER.</em></h2>
          <p>
            A próxima vantagem operacional não será apenas ter mais software — será conectar software,
            dados e inteligência em sistemas que conseguem agir.
          </p>
        </div>
        <div className="vision-mark" data-reveal><Mark /></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-head" data-reveal>
          <p className="eyebrow">05 / START</p>
          <h2>BUILD YOUR<br /><em>INTELLIGENCE LAYER.</em></h2>
          <p>Conte onde sua operação trava hoje. A primeira versão começa pelo problema certo.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
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

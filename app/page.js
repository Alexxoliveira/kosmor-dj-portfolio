"use client";

import { useEffect, useMemo, useState } from "react";

const services = [
  { id: "01", title: "AI Customer Service", text: "Agentes inteligentes para atender, qualificar e encaminhar clientes em escala, com contexto e padrão de marca.", tag: "24/7 · OMNICHANNEL" },
  { id: "02", title: "Sales Automation", text: "Fluxos para capturar leads, enriquecer dados, priorizar oportunidades e acelerar follow-ups sem perder personalização.", tag: "LEADS · CRM · FOLLOW-UP" },
  { id: "03", title: "AI Operations", text: "Automação de tarefas internas, triagem, documentos, relatórios e rotinas repetitivas conectando sistemas e equipes.", tag: "WORKFLOWS · DATA · OPS" },
  { id: "04", title: "Custom AI Systems", text: "Soluções sob medida para processos específicos, com agentes, ferramentas, integrações e camadas de controle.", tag: "CUSTOM · API · AGENTS" },
];

const flow = [
  ["01", "MAP", "Mapeamos gargalos, volume, dados e objetivos de negócio."],
  ["02", "DESIGN", "Desenhamos o fluxo, regras, integrações e experiência do agente."],
  ["03", "BUILD", "Construímos o sistema e conectamos os canais necessários."],
  ["04", "OPTIMIZE", "Medimos, ajustamos e evoluímos com base no uso real."],
];

const automation = [
  ["01", "INPUT", "WhatsApp / Web / CRM"],
  ["02", "UNDERSTAND", "Intent + context + priority"],
  ["03", "ACT", "Answer + update + trigger"],
  ["04", "ESCALATE", "Human handoff when needed"],
  ["05", "LEARN", "Metrics + continuous improvement"],
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
  const [automationStage, setAutomationStage] = useState(0);
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
    const timer = window.setInterval(() => {
      setAutomationStage((value) => (value + 1) % automation.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const hero = document.querySelector(".hero");
    if (!hero) return;
    let raf = 0;
    const handleMove = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        hero.style.setProperty("--parallax-x", x.toFixed(3));
        hero.style.setProperty("--parallax-y", y.toFixed(3));
      });
    };
    hero.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", handleMove);
    };
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
      <div className="ambient-film" aria-hidden="true" />

      <nav className="nav-shell">
        <button className="brand" onClick={() => go("top")} aria-label="Ir para o início">
          <Mark />
          <span>AURION <b>AI</b></span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={menuOpen}><span /><span /></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => go("services")}>SOLUTIONS</button>
          <button onClick={() => go("system")}>SYSTEM</button>
          <button onClick={() => go("process")}>PROCESS</button>
          <button onClick={() => go("contact")}>CONTACT</button>
        </div>
        <button className="nav-cta" onClick={() => go("contact")}>START A PROJECT <span>↗</span></button>
      </nav>

      <section id="top" className="hero cinematic-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />
        <div className="cinematic-vignette" aria-hidden="true" />

        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="status-dot" /> INTELLIGENT BUSINESS INFRASTRUCTURE</p>
          <h1>AI THAT<br /><em>MOVES</em><br />BUSINESS.</h1>
          <p className="hero-text cinematic-lead">Agentes, automações e sistemas inteligentes transformando demanda em ação — com contexto, velocidade e escala.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go("system")}>SEE THE SYSTEM <span>↓</span></button>
            <button className="btn-secondary" onClick={() => go("contact")}>BUILD WITH AURION</button>
          </div>
          <div className="hero-proofline" aria-label="Capacidades principais"><span>CONVERSE</span><i /><span>DECIDE</span><i /><span>ACT</span><i /><span>LEARN</span></div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="core-cinema">
            <div className="core-aura" aria-hidden="true" />
            <div className="core-sweep" aria-hidden="true" />
            <div className="core-header"><span>AURION CORE / LIVE</span><span className="live-pill">ONLINE</span></div>
            <div className="core-scene">
              <div className="core-orbit core-orbit-a" /><div className="core-orbit core-orbit-b" /><div className="core-orbit core-orbit-c" />
              <div className="core-globe"><span className="core-globe-shine" /><span className="core-pulse" /></div>
              <span className="core-node n1" /><span className="core-node n2" /><span className="core-node n3" /><span className="core-node n4" />
              <div className="core-chip chip-a"><span>INPUT</span><b>CONNECTED</b></div>
              <div className="core-chip chip-b"><span>MODEL</span><b>REASONING</b></div>
              <div className="core-chip chip-c"><span>ACTION</span><b>EXECUTING</b></div>
            </div>
            <div className="core-footer"><div><span>MODE</span><b>AUTONOMOUS</b></div><div><span>RESPONSE</span><b>REAL-TIME</b></div><div><span>CONTROL</span><b>HUMAN READY</b></div></div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => go("services")} aria-label="Explorar soluções"><span>SCROLL TO EXPLORE</span><i /></button>
      </section>

      <section className="proof-strip cinematic-strip"><p>AUTOMATE THE REPETITIVE.</p><p>AUGMENT THE IMPORTANT.</p><p>MEASURE WHAT MATTERS.</p></section>

      <section id="services" className="section services-section cinematic-section">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow">01 / SOLUTIONS</p><span className="section-index">A—01</span></div>
          <h2>LESS FRICTION.<br /><em>MORE FLOW.</em></h2>
          <p className="section-lead">Sistemas desenhados em torno de gargalos reais: resposta, conversão, capacidade operacional e experiência do cliente.</p>
        </div>
        <div className="services-grid cinematic-services">
          {services.map((service) => (
            <article className="service-card" key={service.id} data-reveal>
              <div className="service-top"><span>{service.id}</span><span className="service-arrow">↗</span></div>
              <div className="service-visual" aria-hidden="true"><span /><i /><b /></div>
              <h3>{service.title}</h3><p>{service.text}</p><small>{service.tag}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="section system-section automation-section">
        <div className="system-visual" data-reveal>
          <div className="automation-console" aria-live="polite">
            <div className="automation-header"><div><span className="automation-dot" /> AURION ORCHESTRATION</div><b>LIVE AUTOMATION</b></div>
            <div className="automation-rail" aria-hidden="true"><span style={{ "--stage": automationStage }} /></div>
            <div className="automation-body">
              {automation.map(([id, title, text], index) => (
                <button type="button" key={id} className={`automation-row ${automationStage === index ? "is-active" : ""}`} onClick={() => setAutomationStage(index)} aria-pressed={automationStage === index}>
                  <span>{id}</span><b>{title}</b><em>{text}</em><i aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="automation-output"><span>NOW EXECUTING</span><b>{automation[automationStage][1]}</b><em>{automation[automationStage][2]}</em></div>
          </div>
        </div>
        <div className="system-copy" data-reveal>
          <p className="eyebrow">02 / AUTOMATION</p><h2>ONE SIGNAL.<br /><em>MANY ACTIONS.</em></h2>
          <p>AURION transforma uma entrada — mensagem, lead, evento ou dado — em um fluxo coordenado de entendimento, decisão e execução.</p>
          <div className="capability-list cinematic-capabilities">
            <span>01 <b>CONVERSATION</b><i>Natural language</i></span><span>02 <b>QUALIFICATION</b><i>Context + scoring</i></span><span>03 <b>INTEGRATION</b><i>CRM + APIs + tools</i></span><span>04 <b>AUTOMATION</b><i>Actions + workflows</i></span><span>05 <b>ANALYTICS</b><i>Measure + optimize</i></span>
          </div>
        </div>
      </section>

      <section className="numbers-section cinematic-numbers"><div data-reveal><span>01</span><b>24/7</b><p>Disponibilidade operacional</p></div><div data-reveal><span>02</span><b>1→N</b><p>Escala de atendimento</p></div><div data-reveal><span>03</span><b>API</b><p>Integração entre sistemas</p></div><div data-reveal><span>04</span><b>LIVE</b><p>Decisões em tempo real</p></div></section>

      <section id="process" className="section process-section cinematic-process">
        <div className="section-heading compact" data-reveal><div><p className="eyebrow">03 / PROCESS</p><span className="section-index">A—03</span></div><h2>FROM FRICTION<br /><em>TO FLOW.</em></h2></div>
        <div className="process-grid">{flow.map(([id, title, text]) => (<article key={id} data-reveal><span className="process-id">{id}</span><div className="process-line" /><h3>{title}</h3><p>{text}</p></article>))}</div>
      </section>

      <section className="vision-section cinematic-vision">
        <div className="vision-grid" />
        <div className="vision-copy" data-reveal><p className="eyebrow">04 / VISION</p><h2>SOFTWARE THAT<br />CAN <em>ACT.</em></h2><p>A próxima vantagem operacional é conectar software, dados e inteligência em sistemas que não apenas informam — executam.</p></div>
        <div className="vision-core" data-reveal aria-hidden="true"><span className="vision-ring r1" /><span className="vision-ring r2" /><span className="vision-ring r3" /><Mark /></div>
      </section>

      <section id="contact" className="contact-section cinematic-contact">
        <div className="contact-head" data-reveal><p className="eyebrow">05 / START</p><h2>BUILD YOUR<br /><em>INTELLIGENCE LAYER.</em></h2><p>Conte onde sua operação trava hoje. A primeira versão começa pelo problema certo.</p></div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <label><span>NAME / COMPANY</span><input required name="name" placeholder="Seu nome ou empresa" /></label><label><span>CONTACT</span><input required name="contact" placeholder="E-mail ou WhatsApp" /></label><label className="full"><span>WHAT SHOULD WE AUTOMATE?</span><textarea required name="message" rows="4" placeholder="Descreva o processo, volume ou gargalo..." /></label><button className="submit-btn" type="submit">SEND BRIEF <span>↗</span></button>{submitted && <p className="form-note" role="status">Protótipo recebido. Na produção, este formulário será conectado ao canal comercial da AURION AI.</p>}
        </form>
      </section>

      <footer><div className="footer-brand"><Mark /><span>AURION <b>AI</b></span></div><p>INTELLIGENT SYSTEMS FOR BUSINESS</p><span>© {year} AURION AI</span><button onClick={() => go("top")}>BACK TO TOP ↑</button></footer>
    </main>
  );
}

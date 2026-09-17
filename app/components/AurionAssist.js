"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const ui = {
  pt: {
    title: "AURION ASSIST",
    subtitle: "Concierge de IA",
    online: "ONLINE",
    greeting: "Olá. Sou o AURION Assist. Posso explicar nossas soluções, identificar oportunidades de automação e ajudar você a definir o próximo passo.",
    placeholder: "Pergunte sobre agentes, automações ou integrações...",
    send: "Enviar",
    thinking: "Analisando",
    error: "Não consegui concluir esta resposta agora. Você pode tentar novamente ou iniciar um diagnóstico com a equipe.",
    start: "Iniciar diagnóstico",
    close: "Fechar assistente",
    open: "Abrir AURION Assist",
    ask: "PERGUNTE À AURION",
    privacy: "Não envie senhas, dados bancários ou informações confidenciais.",
    contexts: {
      overview: ["Visão geral", "O que a AURION pode automatizar?", ["O que a AURION pode automatizar?", "Como funciona um agente de IA?", "Onde a IA teria mais impacto na minha empresa?"]],
      solutions: ["Soluções", "Qual solução faz sentido para minha empresa?", ["Qual solução faz sentido para minha empresa?", "Quero automatizar meu atendimento", "Como funciona automação comercial?"]],
      system: ["AURION Core", "Como o AURION Core funciona?", ["Como o AURION Core funciona?", "Ele pode se conectar ao meu CRM?", "Quais ações um agente pode executar?"]],
      cases: ["Casos de uso", "Mostre um caso parecido com minha operação", ["Mostre um exemplo de automação comercial", "Como seria no atendimento?", "Como automatizar processos internos?"]],
      trust: ["Controle e confiança", "Como vocês mantêm controle humano?", ["Como funciona o human-in-the-loop?", "Como funcionam permissões?", "As ações do agente podem ser rastreadas?"]],
      contact: ["Diagnóstico", "Ajude a estruturar meu diagnóstico", ["Ajude a estruturar meu diagnóstico", "Que informações vocês precisam?", "Quero falar sobre um projeto"]],
    },
  },
  en: {
    title: "AURION ASSIST",
    subtitle: "AI Concierge",
    online: "ONLINE",
    greeting: "Hello. I’m AURION Assist. I can explain our solutions, identify automation opportunities and help you define the next step.",
    placeholder: "Ask about agents, automation or integrations...",
    send: "Send",
    thinking: "Analyzing",
    error: "I couldn’t complete this response right now. Please try again or start a diagnostic with our team.",
    start: "Start diagnostic",
    close: "Close assistant",
    open: "Open AURION Assist",
    ask: "ASK AURION",
    privacy: "Do not send passwords, banking data or confidential information.",
    contexts: {
      overview: ["Overview", "What can AURION automate?", ["What can AURION automate?", "How does an AI agent work?", "Where could AI create the most impact?"]],
      solutions: ["Solutions", "Which solution fits my company?", ["Which solution fits my company?", "I want to automate customer service", "How does sales automation work?"]],
      system: ["AURION Core", "How does AURION Core work?", ["How does AURION Core work?", "Can it connect to my CRM?", "What actions can an agent execute?"]],
      cases: ["Use cases", "Show me a use case for my operation", ["Show me a sales automation example", "What would this look like in customer service?", "How can internal operations be automated?"]],
      trust: ["Control & trust", "How do you keep humans in control?", ["How does human-in-the-loop work?", "How do permissions work?", "Can agent actions be traced?"]],
      contact: ["Diagnostic", "Help me prepare a diagnostic", ["Help me prepare a diagnostic", "What information do you need?", "I want to discuss a project"]],
    },
  },
  es: {
    title: "AURION ASSIST",
    subtitle: "Concierge de IA",
    online: "ONLINE",
    greeting: "Hola. Soy AURION Assist. Puedo explicar nuestras soluciones, identificar oportunidades de automatización y ayudarte a definir el siguiente paso.",
    placeholder: "Pregunta sobre agentes, automatización o integraciones...",
    send: "Enviar",
    thinking: "Analizando",
    error: "No pude completar esta respuesta ahora. Inténtalo de nuevo o inicia un diagnóstico con nuestro equipo.",
    start: "Iniciar diagnóstico",
    close: "Cerrar asistente",
    open: "Abrir AURION Assist",
    ask: "PREGUNTA A AURION",
    privacy: "No envíes contraseñas, datos bancarios ni información confidencial.",
    contexts: {
      overview: ["Visión general", "¿Qué puede automatizar AURION?", ["¿Qué puede automatizar AURION?", "¿Cómo funciona un agente de IA?", "¿Dónde tendría más impacto la IA?"]],
      solutions: ["Soluciones", "¿Qué solución encaja con mi empresa?", ["¿Qué solución encaja con mi empresa?", "Quiero automatizar la atención", "¿Cómo funciona la automatización comercial?"]],
      system: ["AURION Core", "¿Cómo funciona AURION Core?", ["¿Cómo funciona AURION Core?", "¿Puede conectarse a mi CRM?", "¿Qué acciones puede ejecutar un agente?"]],
      cases: ["Casos de uso", "Muéstrame un caso para mi operación", ["Muéstrame un ejemplo de automatización comercial", "¿Cómo sería en atención?", "¿Cómo automatizar operaciones internas?"]],
      trust: ["Control y confianza", "¿Cómo mantienen el control humano?", ["¿Cómo funciona human-in-the-loop?", "¿Cómo funcionan los permisos?", "¿Se pueden rastrear las acciones?"]],
      contact: ["Diagnóstico", "Ayúdame a preparar un diagnóstico", ["Ayúdame a preparar un diagnóstico", "¿Qué información necesitan?", "Quiero hablar de un proyecto"]],
    },
  },
  zh: {
    title: "AURION ASSIST",
    subtitle: "AI 智能顾问",
    online: "在线",
    greeting: "您好，我是 AURION Assist。我可以介绍我们的解决方案、识别自动化机会，并帮助您确定下一步。",
    placeholder: "咨询 AI 智能体、自动化或系统集成...",
    send: "发送",
    thinking: "分析中",
    error: "暂时无法完成本次回复。您可以重试，或与我们的团队开始业务诊断。",
    start: "开始诊断",
    close: "关闭助手",
    open: "打开 AURION Assist",
    ask: "咨询 AURION",
    privacy: "请勿发送密码、银行信息或机密数据。",
    contexts: {
      overview: ["概览", "AURION 可以自动化哪些工作？", ["AURION 可以自动化哪些工作？", "AI 智能体如何工作？", "AI 在我的企业中哪里最有价值？"]],
      solutions: ["解决方案", "哪种方案适合我的企业？", ["哪种方案适合我的企业？", "我想自动化客户服务", "销售自动化如何运行？"]],
      system: ["AURION Core", "AURION Core 如何工作？", ["AURION Core 如何工作？", "它可以连接我的 CRM 吗？", "智能体可以执行哪些操作？"]],
      cases: ["应用场景", "展示适合我的业务场景", ["展示一个销售自动化案例", "客户服务中会如何运行？", "如何自动化内部运营？"]],
      trust: ["控制与可信", "如何保持人工控制？", ["Human-in-the-loop 如何工作？", "权限如何设置？", "智能体的操作可以追踪吗？"]],
      contact: ["业务诊断", "帮助我准备业务诊断", ["帮助我准备业务诊断", "你们需要哪些信息？", "我想讨论一个项目"]],
    },
  },
};

function Mark() {
  return <span className="aa-mark" aria-hidden="true"><span /><i /><b /></span>;
}

export default function AurionAssist({ language = "en", context = "overview", openSignal = 0, initialPrompt = "", onStartProject }) {
  const lang = ui[language] ? language : "en";
  const t = ui[lang];
  const contextual = t.contexts[context] || t.contexts.overview;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: t.greeting }]);
  const endRef = useRef(null);
  const lastSignal = useRef(openSignal);

  const suggestions = useMemo(() => contextual[2], [contextual]);

  useEffect(() => {
    setMessages((current) => current.length <= 1 ? [{ role: "assistant", content: t.greeting }] : current);
  }, [lang, t.greeting]);

  useEffect(() => {
    if (openSignal !== lastSignal.current) {
      lastSignal.current = openSignal;
      setOpen(true);
      if (initialPrompt) setInput(initialPrompt);
    }
  }, [openSignal, initialPrompt]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);

  async function ask(text) {
    const clean = text.trim();
    if (!clean || loading) return;

    const next = [...messages, { role: "user", content: clean }].slice(-12);
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: lang, context, messages: next }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.text) throw new Error("assist_request_failed");
      setMessages((current) => [...current, { role: "assistant", content: data.text }].slice(-14));
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }].slice(-14));
    } finally {
      setLoading(false);
    }
  }

  function submit(event) {
    event.preventDefault();
    ask(input);
  }

  function startProject() {
    setOpen(false);
    if (onStartProject) onStartProject();
  }

  return (
    <div className={`aa-root ${open ? "is-open" : ""}`}>
      {open && (
        <section className="aa-panel" aria-label={t.title}>
          <header className="aa-header">
            <div className="aa-identity"><Mark /><div><strong>{t.title}</strong><span>{t.subtitle}</span></div></div>
            <div className="aa-status"><i />{t.online}</div>
            <button type="button" className="aa-close" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
          </header>

          <div className="aa-context"><span>{contextual[0]}</span><b>AURION CORE · LIVE</b></div>

          <div className="aa-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`aa-message ${message.role === "user" ? "is-user" : "is-assistant"}`} key={`${message.role}-${index}`}>
                {message.role === "assistant" && <span className="aa-avatar"><Mark /></span>}
                <p>{message.content}</p>
              </div>
            ))}
            {loading && <div className="aa-message is-assistant"><span className="aa-avatar"><Mark /></span><div className="aa-thinking"><span>{t.thinking}</span><i /><i /><i /></div></div>}
            <div ref={endRef} />
          </div>

          {messages.length <= 2 && (
            <div className="aa-suggestions">
              {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => ask(suggestion)}>{suggestion}<span>↗</span></button>)}
            </div>
          )}

          <form className="aa-form" onSubmit={submit}>
            <textarea
              rows="2"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 1000))}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  ask(input);
                }
              }}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
            />
            <button type="submit" disabled={!input.trim() || loading} aria-label={t.send}>↑</button>
          </form>

          <footer className="aa-footer"><span>{t.privacy}</span><button type="button" onClick={startProject}>{t.start}<b>↗</b></button></footer>
        </section>
      )}

      <button type="button" className="aa-launcher" onClick={() => setOpen((value) => !value)} aria-label={open ? t.close : t.open} aria-expanded={open}>
        <Mark />
        {open ? <span className="aa-launcher-close">×</span> : <span className="aa-launcher-copy"><b>{t.ask}</b><small>{contextual[0]}</small></span>}
        {!open && <i />}
      </button>
    </div>
  );
}

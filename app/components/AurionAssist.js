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
      overview: ["Visão geral", "O que a AURION pode automatizar?", ["Analise onde IA teria mais impacto na minha operação", "Quando usar agente de IA ou automação tradicional?", "Como a AURION transformaria um processo manual?"]],
      solutions: ["Soluções", "Qual solução faz sentido para minha empresa?", ["Ajude a escolher a arquitetura certa para meu processo", "Como automatizar atendimento sem perder controle humano?", "Como desenhar uma automação comercial conectada ao CRM?"]],
      system: ["AURION Core", "Como o AURION Core funciona?", ["Como o AURION Core decide entre responder e executar?", "Como conectar IA a CRM, APIs e sistemas internos?", "Quando usar RAG, memória e ferramentas em um agente?"]],
      cases: ["Casos de uso", "Mostre um caso parecido com minha operação", ["Desenhe um fluxo de automação comercial completo", "Compare IA no atendimento com um fluxo tradicional", "Qual processo operacional seria melhor automatizar primeiro?"]],
      trust: ["Controle e confiança", "Como vocês mantêm controle humano?", ["Quando uma ação deveria exigir aprovação humana?", "Como limitar permissões de um agente de IA?", "Como medir e auditar a qualidade das decisões do agente?"]],
      contact: ["Diagnóstico", "Ajude a estruturar meu diagnóstico", ["Faça um diagnóstico inicial do meu processo", "Que dados mudam a decisão de automatizar ou não?", "Como sair de um protótipo para uma automação em produção?"]],
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
      overview: ["Overview", "What can AURION automate?", ["Analyze where AI could create the most impact in my operation", "When should I use an AI agent vs. traditional automation?", "How would AURION transform a manual process?"]],
      solutions: ["Solutions", "Which solution fits my company?", ["Help me choose the right architecture for my process", "How can I automate support without losing human control?", "How would you design CRM-connected sales automation?"]],
      system: ["AURION Core", "How does AURION Core work?", ["How does AURION Core decide between answering and acting?", "How do you connect AI to CRM, APIs and internal systems?", "When should an agent use RAG, memory and tools?"]],
      cases: ["Use cases", "Show me a use case for my operation", ["Design a complete sales automation flow", "Compare AI customer service with a traditional workflow", "Which operational process should I automate first?"]],
      trust: ["Control & trust", "How do you keep humans in control?", ["When should an action require human approval?", "How do you constrain an AI agent’s permissions?", "How can agent decisions be measured and audited?"]],
      contact: ["Diagnostic", "Help me prepare a diagnostic", ["Run an initial diagnostic on my process", "Which data changes the automate-or-not decision?", "How do you move from prototype to production automation?"]],
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
      overview: ["Visión general", "¿Qué puede automatizar AURION?", ["Analiza dónde la IA tendría más impacto en mi operación", "¿Cuándo usar un agente de IA o automatización tradicional?", "¿Cómo transformaría AURION un proceso manual?"]],
      solutions: ["Soluciones", "¿Qué solución encaja con mi empresa?", ["Ayúdame a elegir la arquitectura correcta para mi proceso", "¿Cómo automatizar atención sin perder control humano?", "¿Cómo diseñar automatización comercial conectada al CRM?"]],
      system: ["AURION Core", "¿Cómo funciona AURION Core?", ["¿Cómo decide AURION Core entre responder y ejecutar?", "¿Cómo conectar IA con CRM, APIs y sistemas internos?", "¿Cuándo usar RAG, memoria y herramientas?"]],
      cases: ["Casos de uso", "Muéstrame un caso para mi operación", ["Diseña un flujo completo de automatización comercial", "Compara atención con IA y un flujo tradicional", "¿Qué proceso operativo conviene automatizar primero?"]],
      trust: ["Control y confianza", "¿Cómo mantienen el control humano?", ["¿Cuándo debería una acción requerir aprobación humana?", "¿Cómo limitar los permisos de un agente?", "¿Cómo medir y auditar las decisiones del agente?"]],
      contact: ["Diagnóstico", "Ayúdame a preparar un diagnóstico", ["Haz un diagnóstico inicial de mi proceso", "¿Qué datos cambian la decisión de automatizar?", "¿Cómo pasar de prototipo a automatización en producción?"]],
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
      overview: ["概览", "AURION 可以自动化哪些工作？", ["分析 AI 在我的业务中最有价值的环节", "什么时候应使用 AI 智能体而不是传统自动化？", "AURION 会如何改造一个人工流程？"]],
      solutions: ["解决方案", "哪种方案适合我的企业？", ["帮助我选择适合业务流程的架构", "如何自动化客服同时保留人工控制？", "如何设计连接 CRM 的销售自动化？"]],
      system: ["AURION Core", "AURION Core 如何工作？", ["AURION Core 如何判断应回答还是执行操作？", "如何连接 CRM、API 与内部系统？", "智能体什么时候应使用 RAG、记忆和工具？"]],
      cases: ["应用场景", "展示适合我的业务场景", ["设计一个完整的销售自动化流程", "比较 AI 客服与传统客服流程", "应该优先自动化哪个运营流程？"]],
      trust: ["控制与可信", "如何保持人工控制？", ["哪些操作应该要求人工批准？", "如何限制 AI 智能体的权限？", "如何衡量和审计智能体的决策？"]],
      contact: ["业务诊断", "帮助我准备业务诊断", ["先对我的业务流程做一个初步诊断", "哪些数据会影响是否自动化的判断？", "如何从原型走向生产级自动化？"]],
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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function ask(text) {
    const clean = text.trim();
    if (!clean || loading) return;

    const next = [...messages, { role: "user", content: clean }].slice(-12);
    setMessages(next);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 32000);

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: lang, context, messages: next }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.text) throw new Error("assist_request_failed");
      setMessages((current) => [...current, { role: "assistant", content: data.text }].slice(-14));
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }].slice(-14));
    } finally {
      window.clearTimeout(timeout);
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
        <section className="aa-panel" role="dialog" aria-label={t.title}>
          <header className="aa-header">
            <div className="aa-identity"><Mark /><div><strong>{t.title}</strong><span>{t.subtitle}</span></div></div>
            <div className="aa-status"><i />{t.online}</div>
            <button type="button" className="aa-close" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
          </header>

          <div className="aa-context"><span>{contextual[0]}</span><b>AURION CORE · LIVE</b></div>

          <div className="aa-messages" aria-live="polite" aria-busy={loading}>
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
              maxLength={1000}
              autoComplete="off"
              enterKeyHint="send"
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

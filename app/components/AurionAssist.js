"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const ui = {
  pt: {
    title: "AURION ASSIST",
    subtitle: "Consultor de IA para negócios",
    online: "ONLINE",
    greeting: "Olá. Sou o AURION Assist. Posso analisar processos, explicar arquiteturas de IA e automação, identificar oportunidades e ajudar você a estruturar o próximo passo.",
    placeholder: "Descreva um processo, desafio ou ideia de automação...",
    send: "Enviar",
    error: "Não consegui concluir esta análise agora. Tente novamente ou, se preferir, prepare um diagnóstico com a equipe.",
    start: "Preparar diagnóstico",
    close: "Fechar assistente",
    open: "Abrir AURION Assist",
    privacy: "Não envie senhas, dados bancários ou informações confidenciais.",
    grounded: "BASE AURION",
    contextAware: "CONTEXTO ATIVO",
    handoff: "Existe material suficiente para aprofundar este cenário.",
    handoffText: "Leve este contexto para o diagnóstico comercial sem precisar recomeçar do zero.",
    analysisStages: ["Analisando contexto", "Consultando conhecimento AURION", "Estruturando recomendação"],
    modes: { general: "ANÁLISE", technical: "ARQUITETURA", diagnostic: "DIAGNÓSTICO", commercial: "PROJETO" },
    contexts: {
      overview: ["Visão geral", ["Analise onde IA teria mais impacto na minha operação", "Quando usar agente de IA ou automação tradicional?", "Como a AURION transformaria um processo manual?"]],
      solutions: ["Soluções", ["Ajude a escolher a arquitetura certa para meu processo", "Como automatizar atendimento sem perder controle humano?", "Como desenhar uma automação comercial conectada ao CRM?"]],
      system: ["AURION Core", ["Como o AURION Core decide entre responder e executar?", "Como conectar IA a CRM, APIs e sistemas internos?", "Quando usar RAG, memória e ferramentas em um agente?"]],
      cases: ["Casos de uso", ["Desenhe um fluxo de automação comercial completo", "Compare IA no atendimento com um fluxo tradicional", "Qual processo operacional seria melhor automatizar primeiro?"]],
      trust: ["Controle e confiança", ["Quando uma ação deveria exigir aprovação humana?", "Como limitar permissões de um agente de IA?", "Como medir e auditar a qualidade das decisões do agente?"]],
      contact: ["Diagnóstico", ["Faça um diagnóstico inicial do meu processo", "Que dados mudam a decisão de automatizar ou não?", "Como sair de um protótipo para uma automação em produção?"]],
    },
  },
  en: {
    title: "AURION ASSIST",
    subtitle: "AI Business Advisor",
    online: "ONLINE",
    greeting: "Hello. I’m AURION Assist. I can analyze workflows, explain AI and automation architectures, identify opportunities and help you structure the next step.",
    placeholder: "Describe a workflow, challenge or automation idea...",
    send: "Send",
    error: "I couldn’t complete this analysis right now. Try again or prepare a diagnostic with our team.",
    start: "Prepare diagnostic",
    close: "Close assistant",
    open: "Open AURION Assist",
    privacy: "Do not send passwords, banking data or confidential information.",
    grounded: "AURION KNOWLEDGE",
    contextAware: "ACTIVE CONTEXT",
    handoff: "There is enough context to deepen this scenario.",
    handoffText: "Carry this context into a commercial diagnostic without starting over.",
    analysisStages: ["Analyzing context", "Consulting AURION knowledge", "Structuring recommendation"],
    modes: { general: "ANALYSIS", technical: "ARCHITECTURE", diagnostic: "DIAGNOSTIC", commercial: "PROJECT" },
    contexts: {
      overview: ["Overview", ["Analyze where AI could create the most impact in my operation", "When should I use an AI agent vs. traditional automation?", "How would AURION transform a manual process?"]],
      solutions: ["Solutions", ["Help me choose the right architecture for my process", "How can I automate support without losing human control?", "How would you design CRM-connected sales automation?"]],
      system: ["AURION Core", ["How does AURION Core decide between answering and acting?", "How do you connect AI to CRM, APIs and internal systems?", "When should an agent use RAG, memory and tools?"]],
      cases: ["Use cases", ["Design a complete sales automation flow", "Compare AI customer service with a traditional workflow", "Which operational process should I automate first?"]],
      trust: ["Control & trust", ["When should an action require human approval?", "How do you constrain an AI agent’s permissions?", "How can agent decisions be measured and audited?"]],
      contact: ["Diagnostic", ["Run an initial diagnostic on my process", "Which data changes the automate-or-not decision?", "How do you move from prototype to production automation?"]],
    },
  },
  es: {
    title: "AURION ASSIST",
    subtitle: "Consultor de IA para negocios",
    online: "ONLINE",
    greeting: "Hola. Soy AURION Assist. Puedo analizar procesos, explicar arquitecturas de IA y automatización, identificar oportunidades y ayudarte a estructurar el siguiente paso.",
    placeholder: "Describe un proceso, desafío o idea de automatización...",
    send: "Enviar",
    error: "No pude completar este análisis ahora. Inténtalo de nuevo o prepara un diagnóstico con nuestro equipo.",
    start: "Preparar diagnóstico",
    close: "Cerrar asistente",
    open: "Abrir AURION Assist",
    privacy: "No envíes contraseñas, datos bancarios ni información confidencial.",
    grounded: "BASE AURION",
    contextAware: "CONTEXTO ACTIVO",
    handoff: "Ya existe suficiente contexto para profundizar este escenario.",
    handoffText: "Lleva esta conversación al diagnóstico comercial sin empezar desde cero.",
    analysisStages: ["Analizando contexto", "Consultando conocimiento AURION", "Estructurando recomendación"],
    modes: { general: "ANÁLISIS", technical: "ARQUITECTURA", diagnostic: "DIAGNÓSTICO", commercial: "PROYECTO" },
    contexts: {
      overview: ["Visión general", ["Analiza dónde la IA tendría más impacto en mi operación", "¿Cuándo usar un agente de IA o automatización tradicional?", "¿Cómo transformaría AURION un proceso manual?"]],
      solutions: ["Soluciones", ["Ayúdame a elegir la arquitectura correcta para mi proceso", "¿Cómo automatizar atención sin perder control humano?", "¿Cómo diseñar automatización comercial conectada al CRM?"]],
      system: ["AURION Core", ["¿Cómo decide AURION Core entre responder y ejecutar?", "¿Cómo conectar IA con CRM, APIs y sistemas internos?", "¿Cuándo usar RAG, memoria y herramientas?"]],
      cases: ["Casos de uso", ["Diseña un flujo completo de automatización comercial", "Compara atención con IA y un flujo tradicional", "¿Qué proceso operativo conviene automatizar primero?"]],
      trust: ["Control y confianza", ["¿Cuándo debería una acción requerir aprobación humana?", "¿Cómo limitar los permisos de un agente?", "¿Cómo medir y auditar las decisiones del agente?"]],
      contact: ["Diagnóstico", ["Haz un diagnóstico inicial de mi proceso", "¿Qué datos cambian la decisión de automatizar?", "¿Cómo pasar de prototipo a automatización en producción?"]],
    },
  },
  zh: {
    title: "AURION ASSIST",
    subtitle: "AI 业务顾问",
    online: "在线",
    greeting: "您好，我是 AURION Assist。我可以分析业务流程、解释 AI 与自动化架构、识别机会，并帮助您规划下一步。",
    placeholder: "描述一个业务流程、挑战或自动化想法...",
    send: "发送",
    error: "暂时无法完成本次分析。您可以重试，或与团队准备业务诊断。",
    start: "准备业务诊断",
    close: "关闭助手",
    open: "打开 AURION Assist",
    privacy: "请勿发送密码、银行信息或机密数据。",
    grounded: "AURION 知识库",
    contextAware: "上下文已启用",
    handoff: "当前对话已经具备进一步分析的上下文。",
    handoffText: "可以将这些信息带入业务诊断，无需从头说明。",
    analysisStages: ["分析上下文", "查询 AURION 知识", "构建建议"],
    modes: { general: "分析", technical: "架构", diagnostic: "诊断", commercial: "项目" },
    contexts: {
      overview: ["概览", ["分析 AI 在我的业务中最有价值的环节", "什么时候应使用 AI 智能体而不是传统自动化？", "AURION 会如何改造一个人工流程？"]],
      solutions: ["解决方案", ["帮助我选择适合业务流程的架构", "如何自动化客服同时保留人工控制？", "如何设计连接 CRM 的销售自动化？"]],
      system: ["AURION Core", ["AURION Core 如何判断应回答还是执行操作？", "如何连接 CRM、API 与内部系统？", "智能体什么时候应使用 RAG、记忆和工具？"]],
      cases: ["应用场景", ["设计一个完整的销售自动化流程", "比较 AI 客服与传统客服流程", "应该优先自动化哪个运营流程？"]],
      trust: ["控制与可信", ["哪些操作应该要求人工批准？", "如何限制 AI 智能体的权限？", "如何衡量和审计智能体的决策？"]],
      contact: ["业务诊断", ["先对我的业务流程做一个初步诊断", "哪些数据会影响是否自动化的判断？", "如何从原型走向生产级自动化？"]],
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
  const [loadingStage, setLoadingStage] = useState(0);
  const [responseMeta, setResponseMeta] = useState({ mode: "general", knowledgeUsed: false, handoffRecommended: false });
  const [messages, setMessages] = useState([{ role: "assistant", content: t.greeting }]);
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const lastSignal = useRef(openSignal);

  const suggestions = useMemo(() => contextual[1], [contextual]);
  const userTurns = useMemo(() => messages.filter((message) => message.role === "user").length, [messages]);
  const showHandoff = responseMeta.handoffRecommended || userTurns >= 3;

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
    if (!open) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 180);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open, showHandoff]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!loading) {
      setLoadingStage(0);
      return;
    }
    setLoadingStage(0);
    const timer = window.setInterval(() => {
      setLoadingStage((current) => Math.min(current + 1, t.analysisStages.length - 1));
    }, 1150);
    return () => window.clearInterval(timer);
  }, [loading, t.analysisStages.length]);

  async function ask(text) {
    const clean = text.trim();
    if (!clean || loading) return;

    const next = [...messages, { role: "user", content: clean }].slice(-16);
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
      setMessages((current) => [...current, { role: "assistant", content: data.text }].slice(-18));
      setResponseMeta({
        mode: data?.meta?.mode || "general",
        knowledgeUsed: Boolean(data?.meta?.knowledgeUsed),
        handoffRecommended: Boolean(data?.meta?.handoffRecommended),
      });
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }].slice(-18));
      setResponseMeta({ mode: "general", knowledgeUsed: false, handoffRecommended: false });
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
        <section className="aa-panel" role="dialog" aria-modal="false" aria-label={t.title}>
          <header className="aa-header">
            <div className="aa-identity"><Mark /><div><strong>{t.title}</strong><span>{t.subtitle}</span></div></div>
            <div className="aa-status"><i />{t.online}</div>
            <button type="button" className="aa-close" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
          </header>

          <div className="aa-context">
            <span>{contextual[0]}</span>
            <b>{t.contextAware}</b>
          </div>

          {userTurns > 0 && (
            <div className="aa-intelbar" aria-label="AURION Assist response mode">
              <span>{t.modes[responseMeta.mode] || t.modes.general}</span>
              {responseMeta.knowledgeUsed && <b>{t.grounded}</b>}
            </div>
          )}

          <div className="aa-messages" aria-live="polite" aria-busy={loading}>
            {messages.map((message, index) => (
              <div className={`aa-message ${message.role === "user" ? "is-user" : "is-assistant"}`} key={`${message.role}-${index}`}>
                {message.role === "assistant" && <span className="aa-avatar"><Mark /></span>}
                <p>{message.content}</p>
              </div>
            ))}
            {loading && (
              <div className="aa-message is-assistant aa-analysis">
                <span className="aa-avatar"><Mark /></span>
                <div className="aa-thinking">
                  <span>{t.analysisStages[loadingStage]}</span>
                  <div className="aa-thinking-track"><i /><i /><i /></div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length <= 2 && !loading && (
            <div className="aa-suggestions">
              {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => ask(suggestion)}>{suggestion}<span>↗</span></button>)}
            </div>
          )}

          {showHandoff && !loading && (
            <div className="aa-handoff">
              <div><strong>{t.handoff}</strong><span>{t.handoffText}</span></div>
              <button type="button" onClick={startProject}>{t.start}<b>↗</b></button>
            </div>
          )}

          <form className="aa-form" onSubmit={submit}>
            <textarea
              ref={inputRef}
              rows="2"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 1200))}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  ask(input);
                }
              }}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              maxLength={1200}
              autoComplete="off"
              enterKeyHint="send"
            />
            <button type="submit" disabled={!input.trim() || loading} aria-label={t.send}>↑</button>
          </form>

          <footer className="aa-footer aa-footer-v3"><span>{t.privacy}</span><span className="aa-secure">AURION · CONTEXTUAL AI</span></footer>
        </section>
      )}

      <button type="button" className="aa-launcher" onClick={() => setOpen((value) => !value)} aria-label={open ? t.close : t.open} aria-expanded={open}>
        <Mark />
        {open ? <span className="aa-launcher-close">×</span> : <span className="aa-launcher-copy" />}
        {!open && <i />}
      </button>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

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
    suggestions: ["O que a AURION pode automatizar?", "Como funciona um agente de IA?", "Quero automatizar meu atendimento"],
    privacy: "Não envie senhas, dados bancários ou informações confidenciais.",
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
    suggestions: ["What can AURION automate?", "How does an AI agent work?", "I want to automate customer service"],
    privacy: "Do not send passwords, banking data or confidential information.",
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
    suggestions: ["¿Qué puede automatizar AURION?", "¿Cómo funciona un agente de IA?", "Quiero automatizar la atención"],
    privacy: "No envíes contraseñas, datos bancarios ni información confidencial.",
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
    suggestions: ["AURION 可以自动化哪些工作？", "AI 智能体如何工作？", "我想自动化客户服务"],
    privacy: "请勿发送密码、银行信息或机密数据。",
  },
};

function Mark() {
  return <span className="aa-mark" aria-hidden="true"><span /><i /><b /></span>;
}

export default function AurionAssist({ language = "en", onStartProject }) {
  const lang = ui[language] ? language : "en";
  const t = ui[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: t.greeting }]);
  const endRef = useRef(null);

  useEffect(() => {
    setMessages((current) => current.length <= 1 ? [{ role: "assistant", content: t.greeting }] : current);
  }, [lang, t.greeting]);

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
        body: JSON.stringify({ language: lang, messages: next }),
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

          <div className="aa-context"><span>AURION CORE</span><b>PT · EN · ES · 中文</b></div>

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
              {t.suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => ask(suggestion)}>{suggestion}<span>↗</span></button>)}
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
        <span>{open ? "×" : "ASSIST"}</span>
        {!open && <i />}
      </button>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

const copy = {
  pt: {
    lang: "Português",
    nav: { solutions: "Soluções", cases: "Casos de uso", system: "Sistema", trust: "Confiança", contact: "Contato" },
    cta: { primary: "Agendar diagnóstico", secondary: "Ver como funciona", contact: "Iniciar projeto" },
    hero: {
      eyebrow: "INFRAESTRUTURA GLOBAL DE IA PARA NEGÓCIOS",
      titleA: "INTELIGÊNCIA QUE",
      titleB: "TRANSFORMA DEMANDA",
      titleC: "EM AÇÃO.",
      text: "Agentes de IA, automações e integrações para atendimento, vendas e operações — conectados aos sistemas que sua empresa já utiliza.",
      proof: ["AGENTES DE IA", "AUTOMAÇÃO", "INTEGRAÇÕES", "CONTROLE HUMANO"],
    },
    value: {
      eyebrow: "01 / SOLUÇÕES",
      title: "Menos fricção. Mais capacidade operacional.",
      lead: "AURION conecta pessoas, canais, dados e ferramentas para transformar tarefas repetitivas em fluxos inteligentes e mensuráveis.",
      cards: [
        ["Atendimento com IA", "Agentes que atendem, qualificam, respondem e encaminham clientes com contexto e padrão de marca."],
        ["Automação comercial", "Captação, qualificação, atualização de CRM e follow-up organizados em um fluxo contínuo."],
        ["Operações inteligentes", "Triagem, documentos, relatórios, tarefas internas e rotinas operacionais automatizadas."],
        ["Sistemas sob medida", "Agentes, integrações, regras e APIs desenhados ao redor do processo real da sua empresa."],
      ],
    },
    architecture: {
      eyebrow: "02 / AURION CORE",
      title: "Uma camada inteligente entre demanda e execução.",
      lead: "O AURION Core recebe sinais do negócio, entende contexto e transforma intenção em ação controlada.",
      tabs: ["Entradas", "Inteligência", "Ações"],
      inputTitle: "Entradas conectadas",
      inputText: "WhatsApp, website, CRM, e-mail, formulários, APIs e sistemas internos.",
      coreTitle: "Núcleo inteligente",
      coreText: "Contexto, regras, memória, agentes especializados e orquestração de decisões.",
      actionTitle: "Ações executáveis",
      actionText: "Responder, atualizar sistemas, criar tarefas, gerar documentos, agendar e escalar para humanos.",
      labels: ["INPUTS", "AURION CORE", "ACTIONS"],
    },
    cases: {
      eyebrow: "03 / CASOS DE USO",
      title: "Aplicações que o cliente reconhece imediatamente.",
      items: [
        ["Atendimento", "Cliente entra pelo WhatsApp → IA entende a solicitação → consulta dados → responde → registra → encaminha quando necessário."],
        ["Comercial", "Lead entra → IA qualifica → coleta informações → atualiza CRM → agenda contato → executa follow-up."],
        ["Operações", "Documento ou dado entra → IA classifica → extrai informações → atualiza sistema → aciona fluxo → gera relatório."],
      ],
    },
    demo: {
      eyebrow: "04 / SEE AURION WORK",
      title: "Veja a automação acontecer.",
      lead: "Uma demonstração simples de como uma solicitação pode virar uma sequência de decisões e ações.",
      customer: "Cliente",
      message: "Olá, gostaria de saber sobre o plano empresarial e falar com alguém do comercial.",
      run: "Executar automação",
      reset: "Reiniciar",
      stages: [
        ["Mensagem recebida", "Entrada capturada pelo canal de atendimento."],
        ["Intenção identificada", "Consulta comercial detectada e prioridade definida."],
        ["Lead qualificado", "Dados essenciais coletados e contexto estruturado."],
        ["CRM atualizado", "Registro criado ou atualizado automaticamente."],
        ["Follow-up agendado", "Próxima ação comercial programada com controle humano disponível."],
      ],
    },
    trust: {
      eyebrow: "05 / CONTROLE E CONFIANÇA",
      title: "Inteligência com governança.",
      lead: "Automação empresarial precisa ser útil, observável e controlável. Por isso, a arquitetura considera supervisão humana desde o início.",
      items: [
        ["Human-in-the-loop", "Escalonamento para pessoas quando contexto, política ou risco exigem decisão humana."],
        ["Permissões", "Cada agente acessa apenas as ferramentas, dados e ações autorizadas para sua função."],
        ["Rastreabilidade", "Fluxos e ações podem ser estruturados para manter registro operacional e facilitar auditoria."],
        ["Regras e guardrails", "Limites de comportamento e regras de negócio definidos de acordo com cada implementação."],
      ],
    },
    process: {
      eyebrow: "06 / IMPLEMENTAÇÃO",
      title: "Do problema real ao sistema em operação.",
      steps: [
        ["Mapear", "Identificamos gargalos, volume, canais, dados e objetivo de negócio."],
        ["Projetar", "Definimos experiência, regras, integrações, controles e métricas."],
        ["Construir", "Implementamos agentes, automações e conexões necessárias."],
        ["Otimizar", "Medimos uso, refinamos fluxos e evoluímos conforme a operação real."],
      ],
    },
    contact: {
      eyebrow: "07 / COMEÇAR",
      title: "Vamos encontrar o primeiro processo certo para automatizar.",
      lead: "Conte onde sua operação perde tempo, velocidade ou capacidade. AURION começa pelo problema com maior valor operacional.",
      company: "Empresa",
      name: "Nome",
      contact: "E-mail ou WhatsApp",
      region: "País / Região",
      area: "Área principal",
      message: "O que você gostaria de automatizar?",
      options: ["Atendimento", "Vendas", "Operações", "Integrações", "Projeto personalizado"],
      submit: "Enviar diagnóstico",
      note: "Estrutura comercial pronta. O canal final de recebimento será conectado ao endpoint comercial definido para produção.",
      success: "Briefing preparado com sucesso.",
    },
    footer: "Sistemas inteligentes para negócios globais",
  },
  en: {
    lang: "English",
    nav: { solutions: "Solutions", cases: "Use cases", system: "System", trust: "Trust", contact: "Contact" },
    cta: { primary: "Book a diagnostic", secondary: "See how it works", contact: "Start a project" },
    hero: {
      eyebrow: "GLOBAL AI INFRASTRUCTURE FOR BUSINESS",
      titleA: "INTELLIGENCE THAT",
      titleB: "TURNS DEMAND",
      titleC: "INTO ACTION.",
      text: "AI agents, automations and integrations for customer service, sales and operations — connected to the systems your company already uses.",
      proof: ["AI AGENTS", "AUTOMATION", "INTEGRATIONS", "HUMAN CONTROL"],
    },
    value: {
      eyebrow: "01 / SOLUTIONS",
      title: "Less friction. More operational capacity.",
      lead: "AURION connects people, channels, data and tools to turn repetitive work into intelligent, measurable workflows.",
      cards: [
        ["AI Customer Service", "Agents that respond, qualify and route customers with context and brand consistency."],
        ["Sales Automation", "Lead capture, qualification, CRM updates and follow-up organized into one continuous flow."],
        ["Intelligent Operations", "Triage, documents, reporting, internal tasks and recurring operational workflows automated."],
        ["Custom AI Systems", "Agents, integrations, rules and APIs designed around your company’s real process."],
      ],
    },
    architecture: {
      eyebrow: "02 / AURION CORE",
      title: "An intelligent layer between demand and execution.",
      lead: "AURION Core receives business signals, understands context and turns intent into controlled action.",
      tabs: ["Inputs", "Intelligence", "Actions"],
      inputTitle: "Connected inputs",
      inputText: "WhatsApp, website, CRM, email, forms, APIs and internal systems.",
      coreTitle: "Intelligent core",
      coreText: "Context, rules, memory, specialized agents and decision orchestration.",
      actionTitle: "Executable actions",
      actionText: "Respond, update systems, create tasks, generate documents, schedule and escalate to humans.",
      labels: ["INPUTS", "AURION CORE", "ACTIONS"],
    },
    cases: {
      eyebrow: "03 / USE CASES",
      title: "Applications clients can recognize immediately.",
      items: [
        ["Customer Service", "Customer enters through WhatsApp → AI understands the request → checks data → responds → logs → escalates when needed."],
        ["Sales", "Lead enters → AI qualifies → collects information → updates CRM → schedules contact → runs follow-up."],
        ["Operations", "Document or data enters → AI classifies → extracts information → updates system → triggers workflow → generates report."],
      ],
    },
    demo: {
      eyebrow: "04 / SEE AURION WORK",
      title: "Watch the automation happen.",
      lead: "A simple demonstration of how one request can become a sequence of decisions and actions.",
      customer: "Customer",
      message: "Hi, I’d like to learn about the business plan and speak with someone in sales.",
      run: "Run automation",
      reset: "Reset",
      stages: [
        ["Message received", "Input captured from the customer channel."],
        ["Intent detected", "Commercial inquiry identified and priority assigned."],
        ["Lead qualified", "Essential data collected and context structured."],
        ["CRM updated", "Record created or updated automatically."],
        ["Follow-up scheduled", "Next sales action scheduled with human control available."],
      ],
    },
    trust: {
      eyebrow: "05 / CONTROL & TRUST",
      title: "Intelligence with governance.",
      lead: "Business automation must be useful, observable and controllable. Human supervision is considered from the start.",
      items: [
        ["Human-in-the-loop", "Escalation to people when context, policy or risk requires human judgment."],
        ["Permissions", "Each agent accesses only the tools, data and actions authorized for its role."],
        ["Traceability", "Flows and actions can be structured to preserve operational records and support auditing."],
        ["Rules & guardrails", "Behavior limits and business rules defined for each implementation."],
      ],
    },
    process: {
      eyebrow: "06 / IMPLEMENTATION",
      title: "From a real problem to a system in operation.",
      steps: [
        ["Map", "We identify bottlenecks, volume, channels, data and business goals."],
        ["Design", "We define experience, rules, integrations, controls and metrics."],
        ["Build", "We implement agents, automations and required connections."],
        ["Optimize", "We measure usage, refine flows and evolve with real operations."],
      ],
    },
    contact: {
      eyebrow: "07 / START",
      title: "Let’s find the right first process to automate.",
      lead: "Tell us where your operation loses time, speed or capacity. AURION starts with the problem that creates the most operational value.",
      company: "Company",
      name: "Name",
      contact: "Email or WhatsApp",
      region: "Country / Region",
      area: "Primary area",
      message: "What would you like to automate?",
      options: ["Customer service", "Sales", "Operations", "Integrations", "Custom project"],
      submit: "Send diagnostic",
      note: "Commercial structure is ready. The final receiving channel will be connected to the production sales endpoint.",
      success: "Brief prepared successfully.",
    },
    footer: "Intelligent systems for global business",
  },
  es: {
    lang: "Español",
    nav: { solutions: "Soluciones", cases: "Casos de uso", system: "Sistema", trust: "Confianza", contact: "Contacto" },
    cta: { primary: "Agendar diagnóstico", secondary: "Ver cómo funciona", contact: "Iniciar proyecto" },
    hero: {
      eyebrow: "INFRAESTRUCTURA GLOBAL DE IA PARA EMPRESAS",
      titleA: "INTELIGENCIA QUE",
      titleB: "CONVIERTE DEMANDA",
      titleC: "EN ACCIÓN.",
      text: "Agentes de IA, automatizaciones e integraciones para atención, ventas y operaciones — conectados a los sistemas que tu empresa ya utiliza.",
      proof: ["AGENTES DE IA", "AUTOMATIZACIÓN", "INTEGRACIONES", "CONTROL HUMANO"],
    },
    value: {
      eyebrow: "01 / SOLUCIONES",
      title: "Menos fricción. Más capacidad operativa.",
      lead: "AURION conecta personas, canales, datos y herramientas para convertir tareas repetitivas en flujos inteligentes y medibles.",
      cards: [
        ["Atención con IA", "Agentes que responden, califican y derivan clientes con contexto y consistencia de marca."],
        ["Automatización comercial", "Captura, calificación, actualización de CRM y seguimiento organizados en un flujo continuo."],
        ["Operaciones inteligentes", "Clasificación, documentos, informes, tareas internas y rutinas operativas automatizadas."],
        ["Sistemas de IA a medida", "Agentes, integraciones, reglas y APIs diseñados alrededor del proceso real de tu empresa."],
      ],
    },
    architecture: {
      eyebrow: "02 / AURION CORE",
      title: "Una capa inteligente entre la demanda y la ejecución.",
      lead: "AURION Core recibe señales del negocio, entiende contexto y convierte intención en acción controlada.",
      tabs: ["Entradas", "Inteligencia", "Acciones"],
      inputTitle: "Entradas conectadas",
      inputText: "WhatsApp, sitio web, CRM, correo, formularios, APIs y sistemas internos.",
      coreTitle: "Núcleo inteligente",
      coreText: "Contexto, reglas, memoria, agentes especializados y orquestación de decisiones.",
      actionTitle: "Acciones ejecutables",
      actionText: "Responder, actualizar sistemas, crear tareas, generar documentos, programar y escalar a personas.",
      labels: ["ENTRADAS", "AURION CORE", "ACCIONES"],
    },
    cases: {
      eyebrow: "03 / CASOS DE USO",
      title: "Aplicaciones que el cliente reconoce de inmediato.",
      items: [
        ["Atención", "El cliente entra por WhatsApp → la IA entiende la solicitud → consulta datos → responde → registra → escala cuando es necesario."],
        ["Ventas", "Entra un lead → la IA califica → recopila información → actualiza CRM → agenda contacto → ejecuta seguimiento."],
        ["Operaciones", "Entra un documento o dato → la IA clasifica → extrae información → actualiza sistema → activa flujo → genera informe."],
      ],
    },
    demo: {
      eyebrow: "04 / SEE AURION WORK",
      title: "Mira la automatización en acción.",
      lead: "Una demostración simple de cómo una solicitud puede convertirse en una secuencia de decisiones y acciones.",
      customer: "Cliente",
      message: "Hola, quisiera conocer el plan empresarial y hablar con alguien del equipo comercial.",
      run: "Ejecutar automatización",
      reset: "Reiniciar",
      stages: [
        ["Mensaje recibido", "Entrada capturada desde el canal del cliente."],
        ["Intención identificada", "Consulta comercial detectada y prioridad definida."],
        ["Lead calificado", "Datos esenciales recopilados y contexto estructurado."],
        ["CRM actualizado", "Registro creado o actualizado automáticamente."],
        ["Seguimiento programado", "Próxima acción comercial programada con control humano disponible."],
      ],
    },
    trust: {
      eyebrow: "05 / CONTROL Y CONFIANZA",
      title: "Inteligencia con gobernanza.",
      lead: "La automatización empresarial debe ser útil, observable y controlable. La supervisión humana se considera desde el inicio.",
      items: [
        ["Human-in-the-loop", "Escalamiento a personas cuando el contexto, la política o el riesgo requieren criterio humano."],
        ["Permisos", "Cada agente accede solo a las herramientas, datos y acciones autorizadas para su función."],
        ["Trazabilidad", "Los flujos y acciones pueden estructurarse para conservar registros y facilitar auditorías."],
        ["Reglas y guardrails", "Límites de comportamiento y reglas de negocio definidos para cada implementación."],
      ],
    },
    process: {
      eyebrow: "06 / IMPLEMENTACIÓN",
      title: "Del problema real al sistema en operación.",
      steps: [
        ["Mapear", "Identificamos cuellos de botella, volumen, canales, datos y objetivos."],
        ["Diseñar", "Definimos experiencia, reglas, integraciones, controles y métricas."],
        ["Construir", "Implementamos agentes, automatizaciones y conexiones necesarias."],
        ["Optimizar", "Medimos uso, refinamos flujos y evolucionamos con la operación real."],
      ],
    },
    contact: {
      eyebrow: "07 / EMPEZAR",
      title: "Encontremos el primer proceso correcto para automatizar.",
      lead: "Cuéntanos dónde tu operación pierde tiempo, velocidad o capacidad. AURION comienza por el problema de mayor valor operativo.",
      company: "Empresa",
      name: "Nombre",
      contact: "Email o WhatsApp",
      region: "País / Región",
      area: "Área principal",
      message: "¿Qué te gustaría automatizar?",
      options: ["Atención", "Ventas", "Operaciones", "Integraciones", "Proyecto personalizado"],
      submit: "Enviar diagnóstico",
      note: "La estructura comercial está lista. El canal final de recepción se conectará al endpoint comercial de producción.",
      success: "Brief preparado correctamente.",
    },
    footer: "Sistemas inteligentes para negocios globales",
  },
  zh: {
    lang: "中文",
    nav: { solutions: "解决方案", cases: "应用场景", system: "系统", trust: "可信与治理", contact: "联系" },
    cta: { primary: "预约诊断", secondary: "了解运行方式", contact: "启动项目" },
    hero: {
      eyebrow: "面向全球企业的 AI 基础设施",
      titleA: "让智能",
      titleB: "把业务需求",
      titleC: "转化为行动。",
      text: "面向客户服务、销售与运营的 AI 智能体、自动化与系统集成，并连接企业现有工具与业务系统。",
      proof: ["AI 智能体", "自动化", "系统集成", "人工控制"],
    },
    value: {
      eyebrow: "01 / 解决方案",
      title: "减少摩擦，提升运营能力。",
      lead: "AURION 连接人员、渠道、数据与工具，将重复工作转化为智能、可衡量的业务流程。",
      cards: [
        ["AI 客户服务", "智能体可基于上下文完成回复、资格判断与客户转接，并保持品牌一致性。"],
        ["销售自动化", "将线索获取、资格判断、CRM 更新与后续跟进组织成连续流程。"],
        ["智能运营", "自动化分类、文档、报告、内部任务与重复运营流程。"],
        ["定制 AI 系统", "围绕企业真实流程设计智能体、集成、规则与 API。"],
      ],
    },
    architecture: {
      eyebrow: "02 / AURION CORE",
      title: "连接业务需求与执行的智能层。",
      lead: "AURION Core 接收业务信号、理解上下文，并将意图转化为可控行动。",
      tabs: ["输入", "智能", "行动"],
      inputTitle: "连接多种输入",
      inputText: "WhatsApp、网站、CRM、电子邮件、表单、API 与内部系统。",
      coreTitle: "智能核心",
      coreText: "上下文、规则、记忆、专业智能体与决策编排。",
      actionTitle: "可执行行动",
      actionText: "回复、更新系统、创建任务、生成文档、安排日程，并在需要时升级给人工处理。",
      labels: ["输入", "AURION CORE", "行动"],
    },
    cases: {
      eyebrow: "03 / 应用场景",
      title: "让客户立即理解价值的真实应用。",
      items: [
        ["客户服务", "客户从 WhatsApp 发起咨询 → AI 理解需求 → 查询数据 → 回复 → 记录 → 必要时升级给人工。"],
        ["销售", "线索进入 → AI 完成资格判断 → 收集信息 → 更新 CRM → 安排联系 → 自动跟进。"],
        ["运营", "文档或数据进入 → AI 分类 → 提取信息 → 更新系统 → 触发流程 → 生成报告。"],
      ],
    },
    demo: {
      eyebrow: "04 / SEE AURION WORK",
      title: "查看自动化如何运行。",
      lead: "通过一个简单示例展示，一条业务请求如何转化为连续的判断与行动。",
      customer: "客户",
      message: "您好，我想了解企业方案，并与销售团队沟通。",
      run: "运行自动化",
      reset: "重置",
      stages: [
        ["收到消息", "从客户渠道捕获输入。"],
        ["识别意图", "检测到商业咨询并设置优先级。"],
        ["完成线索资格判断", "收集关键信息并结构化上下文。"],
        ["更新 CRM", "自动创建或更新客户记录。"],
        ["安排后续跟进", "安排下一步销售动作，并保留人工控制。"],
      ],
    },
    trust: {
      eyebrow: "05 / 控制与可信",
      title: "有治理的智能。",
      lead: "企业自动化必须有价值、可观察、可控制。因此，人工监督从系统设计阶段就被纳入架构。",
      items: [
        ["Human-in-the-loop", "当上下文、政策或风险需要人工判断时，系统可升级给人员处理。"],
        ["权限控制", "每个智能体仅访问其角色所授权的工具、数据与操作。"],
        ["可追踪性", "流程与行动可被设计为保留运营记录，并支持审计需求。"],
        ["规则与护栏", "根据每个项目定义行为边界与业务规则。"],
      ],
    },
    process: {
      eyebrow: "06 / 实施流程",
      title: "从真实问题到实际运行的系统。",
      steps: [
        ["梳理", "识别瓶颈、业务量、渠道、数据与商业目标。"],
        ["设计", "定义体验、规则、系统集成、控制机制与指标。"],
        ["构建", "实施智能体、自动化与必要连接。"],
        ["优化", "基于真实使用情况衡量效果、改进流程并持续迭代。"],
      ],
    },
    contact: {
      eyebrow: "07 / 开始合作",
      title: "一起找到最值得优先自动化的第一个流程。",
      lead: "告诉我们您的运营在哪些环节损失时间、速度或处理能力。AURION 会从最具运营价值的问题开始。",
      company: "公司",
      name: "姓名",
      contact: "邮箱或 WhatsApp",
      region: "国家 / 地区",
      area: "主要领域",
      message: "您希望自动化什么？",
      options: ["客户服务", "销售", "运营", "系统集成", "定制项目"],
      submit: "提交诊断",
      note: "商业接待结构已就绪。正式上线时将连接到最终销售接收端点。",
      success: "需求简报已准备完成。",
    },
    footer: "面向全球企业的智能系统",
  },
};

const languages = [
  ["pt", "PT", "Português"],
  ["en", "EN", "English"],
  ["es", "ES", "Español"],
  ["zh", "中文", "中文"],
];

const contactAreaValues = ["customer_service", "sales", "operations", "integrations", "custom_project"];

function Mark() {
  return <span className="g-mark" aria-hidden="true"><span /><i /><b /></span>;
}

function ArchitectureVisual({ labels, active }) {
  return (
    <div className="g-architecture-visual" aria-hidden="true">
      <div className="g-architecture-floor" />
      <div className={`g-architecture-module g-input ${active === 0 ? "is-active" : ""}`}><span>{labels[0]}</span><i /><i /><i /></div>
      <div className={`g-architecture-module g-core ${active === 1 ? "is-active" : ""}`}><span>{labels[1]}</span><div className="g-core-sphere"><em /></div></div>
      <div className={`g-architecture-module g-action-module ${active === 2 ? "is-active" : ""}`}><span>{labels[2]}</span><i /><i /><i /></div>
      <div className="g-link g-link-a" /><div className="g-link g-link-b" />
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [archTab, setArchTab] = useState(1);
  const [demoStage, setDemoStage] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const t = copy[language];
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    let saved = null;
    try { saved = window.localStorage.getItem("aurion-language"); } catch {}
    const browser = navigator.language.toLowerCase();
    const detected = browser.startsWith("pt") ? "pt" : browser.startsWith("es") ? "es" : browser.startsWith("zh") ? "zh" : "en";
    setLanguage(saved && copy[saved] ? saved : detected);
  }, []);

  useEffect(() => {
    try { window.localStorage.setItem("aurion-language", language); } catch {}
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  }, [language]);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    if (demoStage < 0 || demoStage >= t.demo.stages.length - 1) return;
    const timer = window.setTimeout(() => setDemoStage((v) => v + 1), 850);
    return () => window.clearTimeout(timer);
  }, [demoStage, t.demo.stages.length]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const archContent = [
    [t.architecture.inputTitle, t.architecture.inputText],
    [t.architecture.coreTitle, t.architecture.coreText],
    [t.architecture.actionTitle, t.architecture.actionText],
  ];

  return (
    <main className={`g-site ${language === "zh" ? "is-zh" : ""}`}>
      <div className="g-noise" aria-hidden="true" />

      <nav className="g-nav">
        <button className="g-brand" onClick={() => go("top")}><Mark /><span>AURION <b>AI</b></span></button>
        <div className={`g-nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => go("solutions")}>{t.nav.solutions}</button>
          <button onClick={() => go("cases")}>{t.nav.cases}</button>
          <button onClick={() => go("system")}>{t.nav.system}</button>
          <button onClick={() => go("trust")}>{t.nav.trust}</button>
          <button onClick={() => go("contact")}>{t.nav.contact}</button>
        </div>
        <div className="g-nav-actions">
          <div className="g-language" role="group" aria-label="Language">
            {languages.map(([code, short, label]) => <button key={code} title={label} aria-pressed={language === code} className={language === code ? "active" : ""} onClick={() => setLanguage(code)}>{short}</button>)}
          </div>
          <button className="g-nav-cta" onClick={() => go("contact")}>{t.cta.contact} <span>↗</span></button>
          <button className={`g-menu ${menuOpen ? "open" : ""}`} aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}><span /><span /></button>
        </div>
      </nav>

      <section id="top" className="g-hero">
        <div className="g-grid" aria-hidden="true" /><div className="g-glow g-glow-a" /><div className="g-glow g-glow-b" />
        <div className="g-hero-copy g-reveal" data-reveal>
          <p className="g-eyebrow"><span />{t.hero.eyebrow}</p>
          <h1>{t.hero.titleA}<br /><em>{t.hero.titleB}</em><br />{t.hero.titleC}</h1>
          <p className="g-lead">{t.hero.text}</p>
          <div className="g-hero-actions"><button className="g-btn-primary" onClick={() => go("contact")}>{t.cta.primary}<span>↗</span></button><button className="g-btn-secondary" onClick={() => go("system")}>{t.cta.secondary}</button></div>
          <div className="g-proof">{t.hero.proof.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="g-hero-art g-reveal" data-reveal>
          <div className="g-core-card">
            <div className="g-core-top"><span>AURION CORE</span><b>GLOBAL / LIVE</b></div>
            <div className="g-core-stage"><div className="g-orbit o1" /><div className="g-orbit o2" /><div className="g-orbit o3" /><div className="g-sphere"><i /></div><span className="g-node n1" /><span className="g-node n2" /><span className="g-node n3" /><div className="g-chip c1">INPUT</div><div className="g-chip c2">REASON</div><div className="g-chip c3">ACT</div></div>
            <div className="g-core-bottom"><div><span>MODE</span><b>AUTONOMOUS</b></div><div><span>CONTROL</span><b>HUMAN READY</b></div><div><span>SCALE</span><b>GLOBAL</b></div></div>
          </div>
        </div>
      </section>

      <section id="solutions" className="g-section">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.value.eyebrow}</p><h2>{t.value.title}</h2><p>{t.value.lead}</p></div>
        <div className="g-card-grid">{t.value.cards.map(([title, text], index) => <article className="g-card g-reveal" data-reveal key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div>
      </section>

      <section id="system" className="g-section g-architecture">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.architecture.eyebrow}</p><h2>{t.architecture.title}</h2><p>{t.architecture.lead}</p></div>
        <div className="g-architecture-layout">
          <div className="g-architecture-copy g-reveal" data-reveal>
            <div className="g-tabs" role="tablist" aria-label={t.architecture.eyebrow}>{t.architecture.tabs.map((tab, index) => <button type="button" role="tab" aria-selected={archTab === index} className={archTab === index ? "active" : ""} key={tab} onClick={() => setArchTab(index)}>{tab}</button>)}</div>
            <div className="g-tab-copy"><span>0{archTab + 1}</span><h3>{archContent[archTab][0]}</h3><p>{archContent[archTab][1]}</p></div>
          </div>
          <div className="g-architecture-art g-reveal" data-reveal><ArchitectureVisual labels={t.architecture.labels} active={archTab} /></div>
        </div>
      </section>

      <section id="cases" className="g-section g-cases">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.cases.eyebrow}</p><h2>{t.cases.title}</h2></div>
        <div className="g-case-list">{t.cases.items.map(([title, text], index) => <article className="g-case g-reveal" data-reveal key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="g-section g-demo">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.demo.eyebrow}</p><h2>{t.demo.title}</h2><p>{t.demo.lead}</p></div>
        <div className="g-demo-layout">
          <div className="g-message-panel g-reveal" data-reveal><div className="g-message-label">{t.demo.customer}</div><div className="g-message">{t.demo.message}</div><div className="g-demo-actions"><button className="g-btn-primary" onClick={() => setDemoStage(0)}>{t.demo.run}<span>▶</span></button><button className="g-btn-secondary" onClick={() => setDemoStage(-1)}>{t.demo.reset}</button></div></div>
          <div className="g-flow-panel g-reveal" data-reveal>{t.demo.stages.map(([title, text], index) => <div key={title} className={`g-flow-row ${demoStage >= index ? "done" : ""} ${demoStage === index ? "active" : ""}`}><span>{index + 1}</span><div><b>{title}</b><p>{text}</p></div><i /></div>)}</div>
        </div>
      </section>

      <section id="trust" className="g-section g-trust">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.trust.eyebrow}</p><h2>{t.trust.title}</h2><p>{t.trust.lead}</p></div>
        <div className="g-trust-grid">{t.trust.items.map(([title, text], index) => <article className="g-trust-card g-reveal" data-reveal key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="g-section g-process">
        <div className="g-heading g-reveal" data-reveal><p className="g-eyebrow">{t.process.eyebrow}</p><h2>{t.process.title}</h2></div>
        <div className="g-process-grid">{t.process.steps.map(([title, text], index) => <article className="g-reveal" data-reveal key={title}><span>0{index + 1}</span><i /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="contact" className="g-contact">
        <div className="g-contact-copy g-reveal" data-reveal><p className="g-eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.lead}</p><div className="g-global-note"><span>GLOBAL DELIVERY</span><b>PT · EN · ES · 中文</b></div></div>
        <form className="g-form g-reveal" data-reveal onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <label><span>{t.contact.company}</span><input required name="company" autoComplete="organization" maxLength={120} /></label><label><span>{t.contact.name}</span><input required name="name" autoComplete="name" maxLength={120} /></label><label><span>{t.contact.contact}</span><input required name="contact" autoComplete="email" autoCapitalize="none" maxLength={180} /></label><label><span>{t.contact.region}</span><input required name="region" autoComplete="country-name" maxLength={120} /></label><label className="full"><span>{t.contact.area}</span><select required name="area" defaultValue=""><option value="" disabled>—</option>{t.contact.options.map((item, index) => <option value={contactAreaValues[index]} key={contactAreaValues[index]}>{item}</option>)}</select></label><label className="full"><span>{t.contact.message}</span><textarea required name="message" rows="4" maxLength={1200} /></label><button className="g-submit" type="submit">{t.contact.submit}<span>↗</span></button>{submitted && <p className="g-success" role="status">{t.contact.success} <small>{t.contact.note}</small></p>}
        </form>
      </section>

      <footer className="g-footer"><div className="g-footer-brand"><Mark /><span>AURION <b>AI</b></span></div><p>{t.footer}</p><span>© {year} AURION AI</span><div className="g-footer-langs">PT · EN · ES · 中文</div></footer>
    </main>
  );
}

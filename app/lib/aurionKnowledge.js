const knowledge = [
  {
    id: "positioning",
    title: "AURION positioning",
    tags: ["aurion","company","services","global","strategy","overview","empresa","serviços","global"],
    content: "AURION AI is positioned as a global business AI and automation company. Its core offer is to design AI agents, automations, integrations and custom intelligent systems for customer service, sales and operations. The website should describe capabilities and implementation approaches without inventing clients, certifications, prices, SLAs, offices, partnerships or case-study results that have not been provided."
  },
  {
    id: "agent-architecture",
    title: "AI agent architecture",
    tags: ["agent","agents","agente","agentes","architecture","arquitetura","tools","memory","context","contexto","orchestration","orquestração"],
    content: "A practical business AI agent combines a language model with context, business rules, authorized tools, short-term conversation state and human escalation. The model interprets intent; context grounds the answer; tools connect the agent to systems; permissions constrain what it may do; observability records what happened. More autonomy should be added only where the business process and controls justify it."
  },
  {
    id: "customer-service",
    title: "AI customer service",
    tags: ["customer service","support","atendimento","suporte","whatsapp","ticket","faq","intent","intenção"],
    content: "A customer-service agent can answer recurring questions, identify intent, gather qualification details, consult approved company information, create or update service records and escalate to a person. High-value designs define confidence thresholds, escalation triggers, tone guidelines, privacy boundaries and what data sources the agent is allowed to consult."
  },
  {
    id: "sales-automation",
    title: "Sales automation",
    tags: ["sales","vendas","lead","leads","crm","pipeline","follow-up","qualification","qualificação","commercial","comercial"],
    content: "A sales automation flow can capture leads, ask qualification questions, classify intent, enrich the record with conversation context, update a CRM, schedule a next step and trigger follow-up. The best qualification flow asks only for information that changes routing or prioritization. AI should assist sales judgment rather than fabricate fit, urgency or budget."
  },
  {
    id: "operations",
    title: "Intelligent operations",
    tags: ["operations","operações","document","documento","triage","triagem","report","relatório","workflow","process","processo"],
    content: "Operational automation is suited to repetitive flows such as triage, document classification, structured extraction, routing, report generation and internal task creation. A sound design separates deterministic business rules from probabilistic AI judgment, and requires human review for ambiguous or high-impact decisions."
  },
  {
    id: "integrations",
    title: "Integrations and system connectivity",
    tags: ["integration","integrations","integração","integrações","api","webhook","crm","erp","database","banco","calendar","calendário","email"],
    content: "AURION-style systems can be designed around APIs, webhooks and approved connectors to CRM, calendars, email, websites, forms and internal systems. Integration feasibility depends on the target system's API, authentication model, rate limits and data permissions. Never promise a specific integration until those constraints are verified."
  },
  {
    id: "knowledge-rag",
    title: "Knowledge and retrieval",
    tags: ["rag","retrieval","knowledge","base","conhecimento","documents","documentos","faq","grounding","grounded"],
    content: "For company-specific answers, the preferred pattern is retrieval over a curated knowledge source rather than relying only on the model's general memory. Relevant passages should be loaded just in time for the current question. This improves grounding and makes it easier to update policies, services, FAQs and documentation without rewriting the entire system prompt."
  },
  {
    id: "governance",
    title: "Governance and control",
    tags: ["governance","governança","security","segurança","permissions","permissões","audit","auditoria","guardrails","human","humano","privacy","privacidade"],
    content: "Business agents should use least-privilege access, explicit tool boundaries, human-in-the-loop escalation, traceability and implementation-specific guardrails. Sensitive actions should require stronger controls than informational answers. The agent must not request passwords, banking details, authentication secrets or unnecessary sensitive personal information."
  },
  {
    id: "implementation",
    title: "Implementation approach",
    tags: ["implementation","implementação","project","projeto","map","mapear","design","build","construir","optimize","otimizar"],
    content: "A practical implementation sequence is: map the real process and bottleneck; define success metrics and boundaries; design the conversation/workflow; identify data and integrations; build a constrained first version; test with representative cases; observe failures; then expand autonomy. Starting narrow reduces risk and produces clearer evidence of value."
  },
  {
    id: "metrics",
    title: "Business measurement",
    tags: ["roi","metric","metrics","métrica","métricas","kpi","performance","desempenho","conversion","conversão","cost","custo"],
    content: "Useful AI automation metrics depend on the workflow. Examples include response time, resolution rate, escalation rate, qualified-lead rate, follow-up completion, manual touches avoided, processing time and error/rework rate. Do not invent ROI percentages. Establish a baseline first, then compare the automated flow against the same business process."
  },
  {
    id: "multilingual",
    title: "Multilingual and global operation",
    tags: ["language","languages","idioma","idiomas","portuguese","english","spanish","chinese","global","localization","localização"],
    content: "AURION's site and Assist are designed around Portuguese, English, Spanish and Simplified Chinese. Good multilingual service is not only translation: terminology, tone, local expectations, date/number formats and escalation language should be validated. For regulated or contractual content, locale-specific review may be required."
  },
  {
    id: "current-stage",
    title: "Current product-stage boundaries",
    tags: ["current","today","agora","hoje","ready","pronto","prototype","protótipo","production","produção"],
    content: "The current AURION project is an evolving prototype moving toward production. The website, multilingual experience and Assist architecture exist, but production claims must stay conservative until each external integration, data store, CRM connection, messaging channel and operational SLA has been implemented and verified."
  },
  {
    id: "discovery",
    title: "Discovery questions",
    tags: ["diagnostic","diagnóstico","discover","discovery","question","pergunta","volume","workflow","fluxo","tools","ferramentas"],
    content: "When diagnosing an automation opportunity, useful questions are: What process is currently manual? What triggers it? What volume occurs daily or monthly? Which channels and systems are involved? What information is needed to make a decision? What actions are safe to automate? When must a human take over? What outcome would define success? Ask one question at a time and only when the answer materially changes the recommendation."
  }
];

const stopWords = new Set(["the","a","an","and","or","to","of","in","for","with","on","is","are","as","at","de","da","do","das","dos","e","ou","para","com","em","um","uma","o","a","os","as","que","la","el","los","las","y","en","con","para"]);

function terms(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9\u4e00-\u9fff]+/)
    .filter((term) => term.length > 1 && !stopWords.has(term));
}

export function retrieveAurionKnowledge(query, area = "auto", limit = 4) {
  const queryTerms = new Set(terms(query));
  const areaTerms = area && area !== "auto" ? new Set(terms(area)) : new Set();

  const ranked = knowledge.map((item) => {
    const haystack = terms([item.title, item.tags.join(" "), item.content].join(" "));
    let score = 0;
    for (const term of haystack) {
      if (queryTerms.has(term)) score += 3;
      if (areaTerms.has(term)) score += 2;
    }
    if (item.id === area) score += 8;
    return { ...item, score };
  }).sort((a, b) => b.score - a.score);

  const selected = ranked.filter((item) => item.score > 0).slice(0, limit);
  if (selected.length) return selected;

  return knowledge
    .filter((item) => ["positioning", "agent-architecture", "implementation", "discovery"].includes(item.id))
    .slice(0, limit);
}

export function getAurionKnowledgeSummary() {
  return knowledge.map(({ id, title }) => ({ id, title }));
}

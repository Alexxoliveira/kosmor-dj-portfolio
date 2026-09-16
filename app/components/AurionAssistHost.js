"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AurionAssist from "./AurionAssist";

function normalizeLanguage(value) {
  const language = String(value || "en").toLowerCase();
  if (language.startsWith("pt")) return "pt";
  if (language.startsWith("es")) return "es";
  if (language.startsWith("zh")) return "zh";
  return "en";
}

const sectionContext = {
  top: "overview",
  solutions: "solutions",
  system: "system",
  cases: "cases",
  trust: "trust",
  contact: "contact",
};

const bridgeCopy = {
  pt: { nav: "AURION ASSIST", hero: "Perguntar à AURION", prompt: "Quero entender como a AURION pode ajudar minha empresa." },
  en: { nav: "AURION ASSIST", hero: "Ask AURION", prompt: "I want to understand how AURION could help my company." },
  es: { nav: "AURION ASSIST", hero: "Preguntar a AURION", prompt: "Quiero entender cómo AURION puede ayudar a mi empresa." },
  zh: { nav: "AURION ASSIST", hero: "咨询 AURION", prompt: "我想了解 AURION 如何帮助我的企业。" },
};

export default function AurionAssistHost() {
  const [language, setLanguage] = useState("en");
  const [context, setContext] = useState("overview");
  const [openSignal, setOpenSignal] = useState(0);
  const [initialPrompt, setInitialPrompt] = useState("");
  const [navTarget, setNavTarget] = useState(null);
  const [heroTarget, setHeroTarget] = useState(null);

  const labels = bridgeCopy[language] || bridgeCopy.en;

  useEffect(() => {
    const sync = () => setLanguage(normalizeLanguage(document.documentElement.lang || navigator.language));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setNavTarget(document.querySelector(".g-nav-links"));
    setHeroTarget(document.querySelector(".g-hero-actions"));
  }, []);

  useEffect(() => {
    const sections = Object.keys(sectionContext)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const visibility = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target.id, entry.intersectionRatio));
      let bestId = "top";
      let bestRatio = 0;
      visibility.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestRatio > 0) setContext(sectionContext[bestId] || "overview");
    }, { rootMargin: "-24% 0px -48% 0px", threshold: [0.05, 0.15, 0.3, 0.5, 0.7] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const openAssistant = (nextContext = context, prompt = "") => {
    setContext(nextContext || "overview");
    setInitialPrompt(prompt);
    setOpenSignal((value) => value + 1);
  };

  useEffect(() => {
    const handleOpen = (event) => {
      const detail = event?.detail || {};
      openAssistant(detail.context || context, typeof detail.prompt === "string" ? detail.prompt : "");
    };

    window.addEventListener("aurion-assist:open", handleOpen);
    return () => window.removeEventListener("aurion-assist:open", handleOpen);
  }, [context]);

  const startProject = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {navTarget && createPortal(
        <button type="button" className="aa-nav-entry" onClick={() => openAssistant(context)}>
          <span className="aa-nav-dot" />{labels.nav}
        </button>,
        navTarget
      )}

      {heroTarget && createPortal(
        <button type="button" className="aa-hero-entry" onClick={() => openAssistant("overview", labels.prompt)}>
          <span className="aa-mini-orb" />{labels.hero}<b>↗</b>
        </button>,
        heroTarget
      )}

      <AurionAssist
        language={language}
        context={context}
        openSignal={openSignal}
        initialPrompt={initialPrompt}
        onStartProject={startProject}
      />
    </>
  );
}

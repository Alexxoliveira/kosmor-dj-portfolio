"use client";

import { useEffect, useState } from "react";
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

export default function AurionAssistHost() {
  const [language, setLanguage] = useState("en");
  const [context, setContext] = useState("overview");
  const [openSignal, setOpenSignal] = useState(0);
  const [initialPrompt, setInitialPrompt] = useState("");

  useEffect(() => {
    const sync = () => setLanguage(normalizeLanguage(document.documentElement.lang || navigator.language));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
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

  useEffect(() => {
    const handleOpen = (event) => {
      const detail = event?.detail || {};
      if (detail.context) setContext(detail.context);
      setInitialPrompt(typeof detail.prompt === "string" ? detail.prompt : "");
      setOpenSignal((value) => value + 1);
    };

    window.addEventListener("aurion-assist:open", handleOpen);
    return () => window.removeEventListener("aurion-assist:open", handleOpen);
  }, []);

  const startProject = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AurionAssist
      language={language}
      context={context}
      openSignal={openSignal}
      initialPrompt={initialPrompt}
      onStartProject={startProject}
    />
  );
}

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

export default function AurionAssistHost() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const sync = () => setLanguage(normalizeLanguage(document.documentElement.lang || navigator.language));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);

  const startProject = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <AurionAssist language={language} onStartProject={startProject} />;
}

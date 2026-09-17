"use client";

import { useEffect, useState } from "react";

const sectionIds = ["solutions", "system", "cases", "trust", "contact"];

export default function SitePolish() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("g-enhanced");

    let raf = 0;
    const nav = document.querySelector(".g-nav");
    const menuButton = document.querySelector(".g-menu");
    const navPanel = document.querySelector(".g-nav-links");
    const navButtons = Array.from(document.querySelectorAll(".g-nav-links button"));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    navButtons.forEach((button, index) => {
      const target = sectionIds[index];
      if (target) button.dataset.target = target;
    });

    const updateScrollState = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));

      const marker = window.scrollY + Math.min(window.innerHeight * 0.38, 360);
      let activeId = "";
      sections.forEach((section) => {
        if (section.offsetTop <= marker) activeId = section.id;
      });

      navButtons.forEach((button) => {
        const active = button.dataset.target === activeId;
        button.classList.toggle("g-active", active);
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      });

      nav?.classList.toggle("g-scrolled", window.scrollY > 24);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const closeMobileMenu = () => {
      if (navPanel?.classList.contains("open")) menuButton?.click();
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    const onPointerDown = (event) => {
      if (navPanel?.classList.contains("open") && nav && !nav.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const precisePointer = window.matchMedia("(pointer: fine)").matches;
    const tiltTargets = precisePointer && !reducedMotion
      ? Array.from(document.querySelectorAll(".g-core-card, .g-architecture-visual"))
      : [];

    const tiltCleanups = tiltTargets.map((element) => {
      element.classList.add("g-tilt-ready");

      const onMove = (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty("--tilt-x", `${(-y * 3.2).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
        element.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        element.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
        element.classList.add("g-tilt-active");
      };

      const onLeave = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
        element.classList.remove("g-tilt-active");
      };

      element.addEventListener("pointermove", onMove);
      element.addEventListener("pointerleave", onLeave);

      return () => {
        element.removeEventListener("pointermove", onMove);
        element.removeEventListener("pointerleave", onLeave);
      };
    });

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".g-reveal").forEach((item) => item.classList.add("is-visible"));
    } else {
      const fallbackTimer = window.setTimeout(() => {
        document.querySelectorAll(".g-reveal").forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.1) item.classList.add("is-visible");
        });
      }, 1200);
      root.dataset.revealFallbackTimer = String(fallbackTimer);
    }

    return () => {
      root.classList.remove("g-enhanced");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      tiltCleanups.forEach((cleanup) => cleanup());
      if (raf) window.cancelAnimationFrame(raf);
      const timer = Number(root.dataset.revealFallbackTimer || 0);
      if (timer) window.clearTimeout(timer);
      delete root.dataset.revealFallbackTimer;
    };
  }, []);

  return (
    <div className="g-scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

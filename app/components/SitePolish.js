"use client";

import { useEffect, useRef } from "react";

const navTargets = ["solutions", "cases", "system", "trust", "contact"];
const scrollTargets = ["solutions", "system", "cases", "trust", "contact"];

export default function SitePolish() {
  const progressRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("g-enhanced");

    let raf = 0;
    let fallbackTimer = 0;
    const nav = document.querySelector(".g-nav");
    const menuButton = document.querySelector(".g-menu");
    const navPanel = document.querySelector(".g-nav-links");
    const navButtons = Array.from(document.querySelectorAll(".g-nav-links button"));
    const sections = scrollTargets
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    navButtons.forEach((button, index) => {
      const target = navTargets[index];
      if (target) button.dataset.target = target;
    });

    const updateScrollState = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

      const marker = window.scrollY + Math.min(window.innerHeight * 0.38, 360);
      let activeId = "";
      sections.forEach((section) => {
        if (section.offsetTop <= marker) activeId = section.id;
      });

      navButtons.forEach((button) => {
        const active = button.dataset.target === activeId;
        button.classList.toggle("g-active", active);
        if (active) button.setAttribute("aria-current", "location");
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

    const closeMobileMenu = (returnFocus = false) => {
      if (!navPanel?.classList.contains("open")) return;
      menuButton?.click();
      if (returnFocus) window.requestAnimationFrame(() => menuButton?.focus());
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu(true);
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
      let tiltRaf = 0;
      let pointerEvent = null;

      const paintTilt = () => {
        tiltRaf = 0;
        if (!pointerEvent) return;
        const rect = element.getBoundingClientRect();
        const x = (pointerEvent.clientX - rect.left) / rect.width - 0.5;
        const y = (pointerEvent.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty("--tilt-x", `${(-y * 3.2).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
        element.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        element.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
        element.classList.add("g-tilt-active");
      };

      const onMove = (event) => {
        pointerEvent = event;
        if (!tiltRaf) tiltRaf = window.requestAnimationFrame(paintTilt);
      };

      const onLeave = () => {
        pointerEvent = null;
        if (tiltRaf) window.cancelAnimationFrame(tiltRaf);
        tiltRaf = 0;
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
        element.classList.remove("g-tilt-active");
      };

      element.addEventListener("pointermove", onMove);
      element.addEventListener("pointerleave", onLeave);

      return () => {
        element.removeEventListener("pointermove", onMove);
        element.removeEventListener("pointerleave", onLeave);
        if (tiltRaf) window.cancelAnimationFrame(tiltRaf);
      };
    });

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".g-reveal").forEach((item) => item.classList.add("is-visible"));
    } else {
      fallbackTimer = window.setTimeout(() => {
        document.querySelectorAll(".g-reveal").forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.1) item.classList.add("is-visible");
        });
      }, 1200);
    }

    return () => {
      root.classList.remove("g-enhanced");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      tiltCleanups.forEach((cleanup) => cleanup());
      if (raf) window.cancelAnimationFrame(raf);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="g-scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}

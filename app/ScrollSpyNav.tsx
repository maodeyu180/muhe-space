"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "首页" },
  { id: "about", label: "关于" },
  { id: "work", label: "作品" },
  { id: "journey", label: "经历" },
  { id: "stack", label: "能力" },
  { id: "contact", label: "联系" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 4) {
        setActiveSection("contact");
        return;
      }

      const readingLine = window.scrollY + window.innerHeight * 0.42;
      let currentSection: SectionId = "home";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= readingLine) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="返回首页">
          <span className="brand-mark">木禾</span>
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-sub">SPACE</span>
        </a>
        <nav className="primary-nav" aria-label="主导航">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                className={isActive ? "is-active" : undefined}
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
        <a className="header-cta" href="mailto:maodeyu180@gmail.com">
          一起聊聊 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <aside className="section-dots" aria-label="页面章节导航">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              className={isActive ? "is-active" : undefined}
              href={`#${section.id}`}
              aria-label={section.label}
              aria-current={isActive ? "location" : undefined}
            />
          );
        })}
      </aside>
    </>
  );
}

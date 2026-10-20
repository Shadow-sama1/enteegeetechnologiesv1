"use client";

import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { Icon } from "@/components/Icon";
import { getWhatsAppLink } from "@/lib/whatsapp";

const PROJECT_MESSAGE = "Hi Enteegee, I saw your projects and I'd like something similar.";
const INTENT_DELAY = 600;

function openProjectChat(key: string) {
  let openedThisSession = false;
  try {
    openedThisSession = sessionStorage.getItem(`enteegee-project-${key}`) === "opened";
    if (!openedThisSession) sessionStorage.setItem(`enteegee-project-${key}`, "opened");
  } catch (error) {
    console.warn("Project chat session tracking is unavailable; continuing to WhatsApp.", error);
  }
  if (openedThisSession) return;
  window.open(getWhatsAppLink(PROJECT_MESSAGE), "_blank", "noopener,noreferrer");
}

export function Projects() {
  const sectionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const cancelSectionTimer = () => {
    if (sectionTimer.current) clearTimeout(sectionTimer.current);
    sectionTimer.current = null;
  };

  return (
    <section
      id="projects"
      className="section section-anchor projects-section"
      onMouseEnter={() => {
        sectionTimer.current = setTimeout(() => openProjectChat("section"), INTENT_DELAY);
      }}
      onMouseLeave={cancelSectionTimer}
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow"><span /> A look at what’s possible and what can be yours</p>
          <h2>Good ideas deserve an <span>awesome avenue to thrive online</span></h2>
          <p>Explore a few of our past projects. Have something in mind? Let’s make it yours.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const key = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <a
                className="project-card"
                href={getWhatsAppLink(PROJECT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                aria-label={`${project.title}, ${project.category}. Chat about this project`}
                onMouseEnter={() => {
                  cancelSectionTimer();
                  const timer = setTimeout(() => openProjectChat(key), INTENT_DELAY);
                  cardTimers.current.set(key, timer);
                }}
                onMouseLeave={() => {
                  const timer = cardTimers.current.get(key);
                  if (timer) clearTimeout(timer);
                  cardTimers.current.delete(key);
                }}
                onClick={(event) => {
                  event.preventDefault();
                  openProjectChat(key);
                }}
                onKeyDown={(event) => {
                  if (event.key === " ") {
                    event.preventDefault();
                    openProjectChat(key);
                  }
                }}
              >
                <div className="project-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={720}
                    height={490}
                    sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 31vw"
                    className="project-image"
                  />
                  <span className="project-action">Chat about this project <Icon name="arrow" size={17} /></span>
                </div>
                <div className="project-details">
                  <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
                  <span className="project-number">0{index + 1}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

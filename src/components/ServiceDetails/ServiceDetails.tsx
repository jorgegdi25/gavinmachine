"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./ServiceDetails.module.css";

type ContentSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ServiceTab = {
  id: string;
  label: string;
  sections: ContentSection[];
};

const serviceTabs: ServiceTab[] = [
  {
    id: "cnc-milling",
    label: "CNC Milling",
    sections: [
      {
        title: "CNC Milling",
        paragraphs: [
          "We offer advanced CNC milling services utilizing 3, 4, and 5-axis machining technology to manufacture complex components with tight tolerances.",
          "Our milling capabilities include:",
        ],
        bullets: [
          "Pocketing",
          "Profiling",
          "Complex contour machining",
          "Multi-axis machining",
          "Precision feature creation",
          "Prototype and production machining",
        ],
      },
      {
        paragraphs: [
          "Our flexible machining processes allow us to efficiently produce both simple and highly complex parts.",
        ],
      },
    ],
  },
  {
    id: "cnc-turning",
    label: "CNC Turning",
    sections: [
      {
        title: "CNC Turning",
        paragraphs: [
          "Our CNC turning capabilities produce accurate and repeatable cylindrical components for a wide range of applications. We machine parts from small diameters up to 3-inch bar stock and perform a variety of turning operations, including:",
        ],
        bullets: [
          "External and internal threading",
          "Precision turning",
          "Knurling",
          "Reaming",
          "Tapping",
          "Custom turned components",
        ],
      },
      {
        paragraphs: [
          "Whether you require a single prototype or recurring production runs, we deliver consistent quality and precision.",
        ],
      },
    ],
  },
  {
    id: "prototype-production",
    label: "Prototype & Production",
    sections: [
      {
        title: "Prototype & Production Manufacturing",
        paragraphs: [
          "Gavin Machine specializes in low-to-medium quantity, high-mix manufacturing. We support customers throughout every stage of production, from initial prototypes and product development to ongoing production requirements.",
          "Our team works closely with customers to ensure manufacturability, quality, and on-time delivery.",
        ],
      },
      {
        title: "Custom Fixtures & Tooling",
        paragraphs: [
          "To improve efficiency, consistency, and part quality, we design and manufacture custom fixtures and tooling in-house. This capability allows us to optimize setups and provide cost-effective machining solutions for complex projects.",
        ],
      },
    ],
  },
  {
    id: "secondary-services",
    label: "Secondary Services",
    sections: [
      {
        title: "Secondary Services",
        paragraphs: [
          "To provide complete manufacturing solutions, we coordinate a variety of finishing and value-added services, including:",
        ],
        bullets: [
          "Anodizing",
          "Heat Treating",
          "Plating",
          "Inspection Services",
          "Grinding",
        ],
      },
      {
        paragraphs: [
          "These services help ensure that components meet customer specifications and are ready for final assembly or use.",
        ],
      },
    ],
  },
  {
    id: "quality-assurance",
    label: "Quality Assurance",
    sections: [
      {
        title: "Quality Commitment",
        paragraphs: [
          "Quality is integrated into every stage of our manufacturing process. Through careful inspection, process control, and attention to detail, we ensure that every component meets the requirements of our customers and the demands of their applications.",
        ],
      },
    ],
  },
];

const equipmentCapacity = [
  "3, 4, and 5-Axis CNC Machining",
  "Maximum Part Weight: 150 lbs",
  "Prototype to Production Capability",
  "Low-to-Medium Volume Manufacturing",
  "High-Mix Production Environment",
];

export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = serviceTabs[activeTab];

  return (
    <section className={styles.section} id="service-details">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>SERVICES</span>
          <h2 className={styles.title}>Services</h2>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Gavin Machine services">
          {serviceTabs.map((service, index) => (
            <button
              key={service.id}
              id={`${service.id}-tab`}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`${service.id}-panel`}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {service.label}
            </button>
          ))}
        </div>

        <div
          key={currentService.id}
          id={`${currentService.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${currentService.id}-tab`}
          className={styles.panel}
        >
          {currentService.sections.map((section, sectionIndex) => (
            <div key={`${currentService.id}-${sectionIndex}`} className={styles.contentSection}>
              {section.title && <h3>{section.title}</h3>}
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.capacity}>
          <h3>Equipment &amp; Capacity</h3>
          <ul>
            {equipmentCapacity.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

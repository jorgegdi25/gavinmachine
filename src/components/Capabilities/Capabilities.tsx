"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Wrench, 
  RotateCcw, 
  Settings, 
  Target,
  CalendarDays,
  Cog,
  Microscope,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import styles from "./Capabilities.module.css";

const tabsData = [
  {
    id: "milling",
    label: "CNC Milling",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "3, 4 & 5-Axis CNC Milling",
    description: "High-precision CNC milling for complex geometries and tight tolerances. From prototypes to production runs, we deliver consistent quality every time.",
    bullets: [
      "Multi-axis machining for complex parts",
      "Tight tolerance capability",
      "Wide range of materials",
      "Prototype to production volume"
    ],
    image: "/images/service1.png",
    link: "/cnc-milling-services"
  },
  {
    id: "turning",
    label: "CNC Turning",
    icon: <RotateCcw size={24} strokeWidth={1.5} />,
    title: "Precision CNC Turning",
    description: "Advanced CNC turning services for cylindrical components. Our turning centers are equipped to handle high-volume production with exceptional accuracy.",
    bullets: [
      "High-speed turning centers",
      "Live tooling capabilities",
      "Superior surface finishes",
      "Automated bar feeding"
    ],
    image: "/images/cnc-turning.png",
    link: "/cnc-turning-services"
  },
  {
    id: "grinding",
    label: "Grinding",
    icon: <Settings size={24} strokeWidth={1.5} />,
    title: "Surface & Cylindrical Grinding",
    description: "When extremely tight tolerances and ultra-smooth surface finishes are required, our precision grinding services deliver results that standard machining cannot.",
    bullets: [
      "Ultra-tight tolerance control",
      "Superior surface finishes (Ra)",
      "Flatness and parallelism",
      "Hardened materials processing"
    ],
    image: "/images/grinding.png",
    link: "/grinding-services"
  },
  {
    id: "inspection",
    label: "Inspection & QC",
    icon: <Target size={24} strokeWidth={1.5} />,
    title: "Rigorous Quality Control",
    description: "Quality is built into every step of our process. Our climate-controlled inspection lab is equipped with advanced CMMs to verify every critical dimension.",
    bullets: [
      "State-of-the-art CMM equipment",
      "Climate-controlled QA lab",
      "First Article Inspection (FAI)",
      "Full material traceability"
    ],
    image: "/images/service2.png",
    link: "/quality-control"
  }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabsData[activeTab];

  return (
    <section className={styles.capabilitiesSection} id="capabilities">
      <div className={`container ${styles.container}`}>
        
        {/* Top Header & Tabs */}
        <div className={styles.topRow}>
          
          <div className={styles.headerContent}>
            <div className={styles.labelWrapper}>
              <span className={styles.label}>CAPABILITIES</span>
              <div className={styles.labelLine}></div>
            </div>
            
            <h2 className={styles.title}>
              <span className={styles.titleDark}>Advanced Manufacturing</span><br />
              <span className={styles.titleLight}>Built for Precision.</span>
            </h2>
            
            <p className={styles.subtitle}>
              Our state-of-the-art equipment and experienced team<br />
              allow us to deliver high-quality components with<br />
              accuracy, efficiency, and reliability.
            </p>
          </div>

          <div className={styles.tabsNav}>
            {tabsData.map((tab, index) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === index ? styles.activeTabBtn : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Main Content Box */}
        <div className={styles.contentBox}>
          
          {/* Left: Image */}
          <div className={styles.imageColumn}>
            <div 
              key={currentTab.id} // Forces re-render for animation
              className={styles.imageWrapper}
              style={{ backgroundImage: `url(${currentTab.image})` }}
            >
            </div>
          </div>

          {/* Right: Text & Bullets */}
          <div className={styles.textColumn}>
            <div className={styles.iconWrapper}>
              {currentTab.icon}
            </div>
            
            <h3 className={styles.contentTitle}>{currentTab.title}</h3>
            <p className={styles.contentDesc}>{currentTab.description}</p>
            
            <ul className={styles.bulletList}>
              {currentTab.bullets.map((bullet, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} strokeWidth={2} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            
            <Link href={currentTab.link} className={styles.learnMoreBtn}>
              LEARN MORE <ArrowRight size={16} />
            </Link>
          </div>

        </div>

        {/* Bottom Stats Banner */}
        <div className={styles.statsBanner}>
          <div className={styles.statItem}>
            <CalendarDays size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>FOUNDED</div>
              <div className={styles.statValue}>1990</div>
              <div className={styles.statDesc}>Family-Owned<br/>& Operated</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <Cog size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>3, 4 & 5-AXIS</div>
              <div className={styles.statValue}>CNC MACHINING</div>
              <div className={styles.statDesc}>Advanced Technology<br/>& Precision</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <Microscope size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>CMM</div>
              <div className={styles.statValue}>INSPECTION</div>
              <div className={styles.statDesc}>Quality You Can<br/>Measure</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <BarChart3 size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>LOW TO MEDIUM</div>
              <div className={styles.statValue}>PRODUCTION</div>
              <div className={styles.statDesc}>From Prototypes to<br/>Production</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

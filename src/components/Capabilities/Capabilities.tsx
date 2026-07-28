"use client";

import { useState } from "react";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Cog,
  Factory,
  Microscope,
  RotateCcw,
  Ruler,
  Settings,
  Wrench,
} from "lucide-react";
import styles from "./Capabilities.module.css";

type CapabilitySection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type CapabilityTab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  image: string;
  sections: CapabilitySection[];
};

const tabsData: CapabilityTab[] = [
  {
    id: "milling",
    label: "CNC Milling Capabilities",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    image: "/images/service1.png",
    sections: [
      {
        title: "CNC Milling & Turning Capabilities",
        paragraphs: [
          "Gavin Machine delivers precision CNC machining services for customers requiring high-quality components, dependable lead times, and manufacturing flexibility. Our facility is equipped with advanced CNC milling and turning technology capable of supporting prototype development, low-to-medium volume production, and high-mix manufacturing.",
        ],
      },
      {
        title: "CNC Milling",
        paragraphs: [
          "Our milling department utilizes modern 3, 4, and 5-axis machining centers to produce complex components with exceptional accuracy and repeatability.",
          "Capabilities include:",
        ],
        bullets: [
          "3, 4, and 5-axis machining",
          "Multi-sided machining",
          "Pocketing and profiling",
          "Precision hole-making",
          "Complex surface machining",
          "Prototype and production machining",
          "Custom fixtures and tooling",
        ],
      },
    ],
  },
  {
    id: "turning",
    label: "CNC Turning Capabilities",
    icon: <RotateCcw size={24} strokeWidth={1.5} />,
    image: "/images/cnc-turning.png",
    sections: [
      {
        title: "CNC Turning",
        paragraphs: [
          "Our CNC Lathes are capable of multi-axis machining, our machining centers can hold tolerances to within .0001 and turn parts up to 10.00” x 36.00” long",
          "is equipped to manufacture precision shafts, bushings, housings, fittings, and custom cylindrical components.",
          "Capabilities include:",
        ],
        bullets: [
          "Turning up to 3\" bar and 10” diameter",
          "External and internal threading",
          "Knurling",
          "Tapping",
          "Grooving",
          "Multi-operation machining",
          "Production turning",
          "Prototype turning",
        ],
      },
      {
        paragraphs: [
          "The addition of live-tool and Y-axis turning capabilities allows us to perform milling operations directly on the lathe, reducing setups and improving part accuracy.",
        ],
      },
    ],
  },
  {
    id: "quality",
    label: "Quality Assurance & Inspection",
    icon: <Microscope size={24} strokeWidth={1.5} />,
    image: "/images/service2.png",
    sections: [
      {
        title: "Quality Assurance & Inspection",
        paragraphs: [
          "Quality is at the core of everything we manufacture. Gavin Machine utilizes advanced inspection equipment and proven quality control processes to verify that every component meets customer specifications and performance requirements.",
          "From prototype development through production manufacturing, our inspection capabilities help ensure accuracy, consistency, and repeatability throughout the machining process.",
        ],
      },
      {
        title: "Inspection Capabilities",
        paragraphs: [
          "Our quality department is equipped with precision measurement systems capable of verifying complex geometries and tight-tolerance components.",
        ],
      },
      {
        title: "Coordinate Measuring Machines (CMM)",
        paragraphs: ["Helmel PHOENIX 216-162 CMM", "Measuring Range:"],
        bullets: ["X-Axis: 20\"", "Y-Axis: 16\"", "Z-Axis: 16\""],
      },
      {
        title: "Performance Specifications",
        bullets: [
          "X-Axis Accuracy: 0.00008\"",
          "Y-Axis Accuracy: 0.00012\"",
          "Z-Axis Accuracy: 0.00012\"",
          "Repeatability: 0.00013\"",
          "Volumetric Accuracy: 0.00038\"",
        ],
      },
      {
        title: "Helmel Coordinate Measuring Machine",
        paragraphs: ["Measuring Capacity:"],
        bullets: ["25\" × 24\" × 18\""],
      },
      {
        paragraphs: [
          "These systems provide accurate dimensional verification for complex machined components and critical features.",
        ],
      },
      {
        title: "Precision Inspection Equipment",
        bullets: [
          "14\" Optical Comparator with Metrology Display",
          "24\" Mitutoyo Electronic Vertical Gauge System",
          "Full Complement of Precision Pin Gauges",
          "Precision Measuring Instruments and Inspection Accessories",
        ],
      },
      {
        title: "Quality Commitment",
        paragraphs: [
          "Our inspection processes are integrated throughout production to ensure that parts conform to customer drawings, specifications, and quality requirements. By combining advanced measurement technology with experienced machinists and inspectors, we provide customers with confidence that every component is manufactured to the highest standards.",
          "Whether producing a single prototype or recurring production orders, Gavin Machine is committed to delivering precision-machined parts with verified quality and consistent performance.",
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering & CAD/CAM",
    icon: <Ruler size={24} strokeWidth={1.5} />,
    image: "/images/service3.png",
    sections: [
      {
        title: "Engineering & Programming Capabilities",
        paragraphs: [
          "Gavin Machine utilizes advanced CAD/CAM technology and integrated manufacturing systems to streamline production, improve accuracy, and reduce lead times.",
        ],
      },
      {
        title: "CAD/CAM Programming",
        paragraphs: [
          "Our machining operations are programmed using Mastercam, one of the industry's leading CAD/CAM software platforms for CNC milling and turning.",
          "Capabilities include:",
        ],
        bullets: [
          "3-Axis CNC Programming",
          "4-Axis CNC Programming",
          "5-Axis CNC Programming",
          "CNC Turning Programming",
          "Complex Surface Machining",
          "Production Process Optimization",
          "Fixture and Tooling Design Support",
        ],
      },
      {
        paragraphs: [
          "We can work directly from customer-supplied CAD models and engineering data, including:",
        ],
        bullets: [
          "SOLIDWORKS (.SLDPRT)",
          "STEP Files (.STP, .STEP)",
          "IGES Files",
          "DXF Files",
          "PDF Drawings",
          "Other Industry-Standard 3D Formats",
        ],
      },
      {
        title: "Digital Manufacturing Workflow",
        paragraphs: [
          "Our facility operates on a networked manufacturing system that connects programming, engineering, and machining operations throughout the shop floor.",
          "Benefits include:",
        ],
        bullets: [
          "Rapid program distribution to machining centers",
          "Reduced setup times",
          "Improved revision control",
          "Faster job processing",
          "Enhanced production efficiency",
          "Consistent manufacturing documentation",
        ],
      },
      {
        paragraphs: [
          "This integrated workflow allows Gavin Machine to respond quickly to engineering changes, accelerate production schedules, and maintain the accuracy required for precision-machined components.",
        ],
      },
      {
        title: "From CAD Model to Finished Part",
        paragraphs: [
          "Whether customers provide detailed engineering drawings or complete 3D models, our team can efficiently convert design data into production-ready machining programs, supporting both prototype development and ongoing manufacturing requirements.",
        ],
      },
    ],
  },
  {
    id: "secondary",
    label: "Secondary Services",
    icon: <Settings size={24} strokeWidth={1.5} />,
    image: "/images/about-summary-img.png",
    sections: [
      {
        title: "Secondary Services",
        bullets: ["Anodizing", "Heat Treating", "Plating", "Inspection Services"],
      },
      {
        paragraphs: [
          "At Gavin Machine, we combine advanced machining technology with experienced craftsmanship to deliver precision components that meet demanding customer specifications and production schedules.",
        ],
      },
    ],
  },
  {
    id: "equipment",
    label: "Equipment List",
    icon: <Factory size={24} strokeWidth={1.5} />,
    image: "/images/hero-bg.png",
    sections: [
      {
        title: "Milling Centers",
        bullets: [
          "Fanuc RoboDrill T21iFL with Pallet Changer",
          "Mazak Nexus VCN-570C with Smooth Technology",
          "(2) Mazak Nexus 510C",
          "(2) Haas VF-2 SSYT with 5-Axis Trunnions",
          "Haas VF-2 equipped with Rotary 4th Axis Indexer",
          "Hass VF4 SS",
          "Haas VF-3",
          "TRAK DPM AGE Three-Axis Bed Mill",
          "Lagun FTV-2 with ProtoTRAK MX2 Control",
        ],
      },
      {
        title: "Turning Centers",
        bullets: [
          "Mazak Quick Turn Nexus 250-II",
          "Haas ST-20Y CNC Lathe with Y-Axis and Live Tooling",
          "CNC Lathe with ProtoTRAK LX2 Control (17\" Swing × 48\" Capacity)",
        ],
      },
      {
        title: "Additional Equipment",
        bullets: [
          "W.F. Wells Horizontal Saw",
          "Grob Bandsaw",
          "Sullair 1100e Compressor",
        ],
      },
      {
        title: "Production Capabilities",
        bullets: [
          "Prototype Development",
          "Low-to-Medium Volume Production",
          "High-Mix Manufacturing",
          "Precision Machined Components",
          "Custom Fixtures & Tooling",
          "Secondary Processing Coordination",
          "Quality Inspection",
        ],
      },
    ],
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabsData[activeTab];

  return (
    <section className={styles.capabilitiesSection} id="capabilities">
      <div className={`container ${styles.container}`}>
        <div className={styles.topRow}>
          <div className={styles.headerContent}>
            <div className={styles.labelWrapper}>
              <span className={styles.label}>CAPABILITIES</span>
              <div className={styles.labelLine}></div>
            </div>

            <h2 className={styles.title}>
              <span className={styles.titleDark}>CNC Milling &amp; Turning</span><br />
              <span className={styles.titleLight}>Capabilities</span>
            </h2>
          </div>

          <div className={styles.tabsNav} role="tablist" aria-label="Gavin Machine capabilities">
            {tabsData.map((tab, index) => (
              <button
                key={tab.id}
                id={`${tab.id}-capability-tab`}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`${tab.id}-capability-panel`}
                className={`${styles.tabBtn} ${activeTab === index ? styles.activeTabBtn : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          key={currentTab.id}
          id={`${currentTab.id}-capability-panel`}
          role="tabpanel"
          aria-labelledby={`${currentTab.id}-capability-tab`}
          className={styles.contentBox}
        >
          <div className={styles.imageColumn}>
            <div
              className={styles.imageWrapper}
              style={{ backgroundImage: `url(${currentTab.image})` }}
            />
          </div>

          <div className={styles.textColumn}>
            <div className={styles.iconWrapper}>{currentTab.icon}</div>

            {currentTab.sections.map((section, sectionIndex) => (
              <div key={`${currentTab.id}-${sectionIndex}`} className={styles.detailSection}>
                {section.title && <h3 className={styles.contentTitle}>{section.title}</h3>}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className={styles.contentDesc}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className={styles.bulletList}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className={styles.bulletItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} strokeWidth={2} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statsBanner}>
          <div className={styles.statItem}>
            <CalendarDays size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>FOUNDED</div>
              <div className={styles.statValue}>1990</div>
              <div className={styles.statDesc}>Family-Owned<br />&amp; Operated</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <Cog size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>3, 4 &amp; 5-AXIS</div>
              <div className={styles.statValue}>CNC MACHINING</div>
              <div className={styles.statDesc}>Advanced Technology<br />&amp; Precision</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <Microscope size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>CMM</div>
              <div className={styles.statValue}>INSPECTION</div>
              <div className={styles.statDesc}>Quality You Can<br />Measure</div>
            </div>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.statItem}>
            <BarChart3 size={36} className={styles.statIcon} strokeWidth={1.5} />
            <div className={styles.statText}>
              <div className={styles.statLabel}>LOW TO MEDIUM</div>
              <div className={styles.statValue}>PRODUCTION</div>
              <div className={styles.statDesc}>From Prototypes to<br />Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Cpu, HeartPulse, Radio, Microscope, Bot, Wind, CircuitBoard, Shield, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Industries.module.css";

export default function Industries() {
  return (
    <section className={styles.industriesSection} id="industries">
      
      {/* Background Image on Right */}
      <div className={styles.bgWrapper}>
        <div className={styles.bgImage}></div>
        <div className={styles.bgGradient}></div>
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* Header Section */}
        <Reveal as="div" className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>INDUSTRIES SERVED</span>
          </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Precision Machining</span><br />
            <span className={styles.titleLight}>Across High-Tech Industries.</span>
          </h2>
          
          <p className={styles.subtitle}>
            We partner with companies in some of the world's most demanding<br />
            industries, delivering high-quality components with accuracy,<br />
            consistency, and on-time performance.
          </p>
        </Reveal>

        {/* 8 Cards Grid */}
        <Reveal as="div" className={styles.grid} stagger>

          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/ind-semiconductor.png')" }}></div>
              <div className={styles.iconBox}>
                <Cpu size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Semiconductors</h3>
              <p className={styles.cardDesc}>
                High-precision components for critical semiconductor equipment.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/ind-biomedical.png')" }}></div>
              <div className={styles.iconBox}>
                <HeartPulse size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Biomedical</h3>
              <p className={styles.cardDesc}>
                Precision parts for medical devices and life-saving technologies.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/ind-microwave.png')" }}></div>
              <div className={styles.iconBox}>
                <Radio size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Microwave</h3>
              <p className={styles.cardDesc}>
                Complex components for RF, microwave, and telecom systems.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/ind-scientific.png')" }}></div>
              <div className={styles.iconBox}>
                <Microscope size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Scientific</h3>
              <p className={styles.cardDesc}>
                Accurate parts for laboratory instruments and research equipment.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/ind-automation.png')" }}></div>
              <div className={styles.iconBox}>
                <Bot size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Lab Automation</h3>
              <p className={styles.cardDesc}>
                Reliable components for automated testing and analysis systems.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/cnc-turning.png')" }}></div>
              <div className={styles.iconBox}>
                <Wind size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Renewable Energy</h3>
              <p className={styles.cardDesc}>
                Engineered parts for power generation and clean energy solutions.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/service3.png')" }}></div>
              <div className={styles.iconBox}>
                <CircuitBoard size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>OEMs</h3>
              <p className={styles.cardDesc}>
                Custom components for original equipment manufacturers.
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
              <div className={styles.iconBox}>
                <Shield size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Defense</h3>
              <p className={styles.cardDesc}>
                Mission-critical parts built to meet rigorous performance standards.
              </p>
            </div>
          </div>

        </Reveal>

        {/* Bottom CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaAccentLine}></div>
            <div className={styles.ctaTextGroup}>
              <h3 className={styles.ctaTitle}>Serving high-tech industries with precision and reliability.</h3>
              <p className={styles.ctaSubtitle}>Let's build the right solution for your next project.</p>
            </div>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className={styles.ctaBtn}>
              REQUEST A QUOTE <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

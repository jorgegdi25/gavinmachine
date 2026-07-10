import Link from "next/link";
import { Award, Target, Users, Settings, Truck, ShieldCheck, ClipboardList, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseSection} id="why-choose">
      
      {/* Background fading effect */}
      <div className={styles.bgWrapper}>
        <div className={styles.bgImage}></div>
        <div className={styles.bgGradient}></div>
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* Left Column: Text */}
        <Reveal as="div" className={styles.textColumn} direction="left">
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>WHY CHOOSE GAVIN MACHINE</span>
          </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Precision is our</span><br />
            <span className={styles.titleLight}>promise. Quality</span><br />
            <span className={styles.titleDark}>is our standard.</span>
          </h2>
          
          <div className={styles.divider}></div>
          
          <div className={styles.textContent}>
            <p>
              For more than 30 years, customers have trusted us to deliver precision-machined parts with exceptional quality, reliable lead times, and personal service. We're committed to your success—every step of the way.
            </p>
          </div>
        </Reveal>

        {/* Right Column: Grid Cards */}
        <div className={styles.gridColumn}>
          <Reveal as="div" className={styles.cardsGrid} stagger>

            {/* Card 1 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>30+ YEARS OF EXPERIENCE</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>Decades of precision machining expertise you can count on.</p>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>PRECISION & QUALITY</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>Tight tolerances, advanced equipment, and rigorous quality control.</p>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>CUSTOMER FOCUSED</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>We listen, collaborate, and deliver solutions tailored to your needs.</p>
            </div>

            {/* Card 4 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <Settings size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>ADVANCED TECHNOLOGY</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>3, 4 & 5-axis CNC machines and modern inspection equipment.</p>
            </div>

            {/* Card 5 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <Truck size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>RELIABLE LEAD TIMES</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>On-time delivery and clear communication from quote to completion.</p>
            </div>

            {/* Card 6 */}
            <div className={styles.card}>
              <div className={styles.iconCircle}>
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>BUILT ON INTEGRITY</h3>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardDesc}>Honest, transparent, and committed to doing what's right.</p>
            </div>

          </Reveal>
        </div>

      </div>

    </section>
  );
}

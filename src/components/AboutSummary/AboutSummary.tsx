import Link from "next/link";
import { Wrench, Factory, Layers, Box, ArrowRight } from "lucide-react";
import CountUp from "@/components/CountUp/CountUp";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./AboutSummary.module.css";

export default function AboutSummary() {
  return (
    <section className={styles.aboutSection} id="about">
      {/* Main Content Area */}
      <div className={`container ${styles.mainContainer}`}>
        
        {/* Left Column: Image with Experience Box */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.experienceBox}>
              <span className={styles.expNumber}>1990</span>
              <span className={styles.expTitle}>YEAR<br />FOUNDED</span>
              <span className={styles.expSubtitle}>MASSACHUSETTS</span>
            </div>
            
            {/* New Button over the image */}
            <div className={styles.imageAction}>
              <Link href="/about-us" className={styles.imageBtn}>
                MORE ABOUT US <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Text and Features */}
        <div className={styles.textColumn}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>ABOUT GAVIN MACHINE</span>
          </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Built on Precision.</span><br />
            <span className={styles.titleLight}>Focused on Results.</span>
          </h2>
          
          <div className={styles.divider}></div>
          
          <div className={styles.textContent}>
            <p>
              Founded in 1990, Gavin Machine is a family-owned precision machining company based in Hingham, Massachusetts.
            </p>
            <p>
              At Gavin Machine, we specialize in CNC milling and CNC turning services for customers who demand precision manufacturing and dependable results. From prototypes to production runs, our team is committed to producing quality parts that meet the most demanding specifications.
            </p>
            <p>
              Our mission is simple: deliver accurate, reliable, and cost-effective machined parts while building long-term partnerships through quality, service, and integrity.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Wrench size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Prototyping</h3>
              <p className={styles.featureDesc}>From single custom parts to functional engineering prototypes.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Factory size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Production Runs</h3>
              <p className={styles.featureDesc}>Scalable low-to-medium volume manufacturing capabilities.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Mechanical Assembly</h3>
              <p className={styles.featureDesc}>Turnkey solutions including hardware installation and assembly.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Box size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Diverse Materials</h3>
              <p className={styles.featureDesc}>Machining aluminum, stainless steel, titanium, and plastics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Banner */}
      <div className={styles.bottomBanner}>
        <div className={`container ${styles.statsContainer}`}>
          <Reveal className={styles.statBox} delay={0}>
            <span className={styles.statBig}><CountUp value={30} suffix="+" /></span>
            <span className={styles.statMedium}>YEARS EXPERIENCE</span>
            <span className={styles.statSmall}>Family owned & operated</span>
          </Reveal>

          <Reveal className={styles.statBox} delay={100}>
            <span className={styles.statBig}><CountUp value={100} suffix="%" /></span>
            <span className={styles.statMedium}>MADE IN USA</span>
            <span className={styles.statSmall}>Manufactured in Massachusetts</span>
          </Reveal>

          <Reveal className={styles.statBox} delay={200}>
            <span className={styles.statBig}><CountUp value={15} suffix="k+" /></span>
            <span className={styles.statMedium}>SQ FT FACILITY</span>
            <span className={styles.statSmall}>State of the art equipment</span>
          </Reveal>

          <Reveal className={styles.statBox} delay={300}>
            <span className={styles.statBig}>ISO</span>
            <span className={styles.statMedium}>9001 COMPLIANT</span>
            <span className={styles.statSmall}>Strict quality standards</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, Box, Layers, 
  Wrench, ShieldCheck, Cpu
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Materials We Machine | Gavin Machine",
  description: "Gavin Machine manufactures precision components from a wide range of metals and engineering-grade plastics including aluminum, stainless steel, and PEEK.",
};

export default function Materials() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>MATERIALS WE MACHINE</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Metals & </span>
              <span className={styles.heroTitleLight}>Engineering Plastics.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              We manufacture precision components from a wide range of materials, supporting customers across aerospace, medical, industrial, and defense sectors.
            </p>
            
            <div className={styles.heroButtons}>
              <Link href="/get-a-quote" className="btn btn--primary">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className={styles.statsBanner}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statItem}>
            <Box size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Aluminum &<br />Steel Alloys</span>
          </div>
          <div className={styles.statItem}>
            <Layers size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Engineering<br />Plastics</span>
          </div>
          <div className={styles.statItem}>
            <Wrench size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Exotic & Hardened<br />Materials</span>
          </div>
          <div className={styles.statItem}>
            <ShieldCheck size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Material<br />Traceability</span>
          </div>
        </div>
      </div>

      {/* Capabilities / Equipment Cards */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Material Expertise</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              Our equipment and tooling are optimized to achieve excellent surface finishes, tight tolerances, and consistent quality across a variety of metals and polymers.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Wrench size={24} />
                </div>
                <h3 className={styles.capTitle}>Metals</h3>
              </div>
              <p className={styles.capDesc}>
                We routinely machine a variety of metals, from common alloys to hardened materials.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Aluminum (6061, 7075, etc.)</li>
                <li className={styles.capListItem}>Stainless Steel (303, 304, 316, 17-4)</li>
                <li className={styles.capListItem}>Carbon & Alloy Steels</li>
                <li className={styles.capListItem}>Brass & Bronze Alloys</li>
                <li className={styles.capListItem}>Copper & Cast Iron</li>
                <li className={styles.capListItem}>Titanium</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Layers size={24} />
                </div>
                <h3 className={styles.capTitle}>Engineering Plastics</h3>
              </div>
              <p className={styles.capDesc}>
                Ideal for applications requiring chemical resistance, wear resistance, or low weight.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Delrin® (Acetal)</li>
                <li className={styles.capListItem}>PEEK</li>
                <li className={styles.capListItem}>Nylon</li>
                <li className={styles.capListItem}>Polycarbonate</li>
                <li className={styles.capListItem}>ABS & Acrylic</li>
                <li className={styles.capListItem}>Other Engineering Polymers</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Cpu size={24} />
                </div>
                <h3 className={styles.capTitle}>Material Selection</h3>
              </div>
              <p className={styles.capDesc}>
                Our team can assist customers in selecting materials that best meet performance and cost requirements.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Performance Optimization</li>
                <li className={styles.capListItem}>Manufacturability Consulting</li>
                <li className={styles.capListItem}>Cost-Reduction Strategies</li>
                <li className={styles.capListItem}>Full Certification & Traceability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              READY TO START YOUR NEXT PROJECT?
            </div>
            <h2 className={styles.ctaTitle}>
              Have a Specific <span className={styles.ctaTitleHighlight}>Material Need?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Whether your project requires a lightweight aluminum component or a high-performance engineered plastic part, Gavin Machine delivers.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import IndustriesComponent from "@/components/Industries/Industries";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Industries Served | Gavin Machine",
  description: "Precision CNC machining for aerospace, medical, industrial, automation, defense, and commercial manufacturing.",
};

export default function IndustriesServed() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/industries-bg.png')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>INDUSTRIES SERVED</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Partnering with </span>
              <br />
              <span className={styles.heroTitleLight}>Global Leaders.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              We support customers across aerospace, medical, industrial, automation, defense, and commercial manufacturing applications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Existing Industries Component */}
      <div style={{ paddingTop: "2rem" }}>
        <IndustriesComponent />
      </div>

      {/* 3. Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              LOOKING FOR MATERIAL INFORMATION?
            </div>
            <h2 className={styles.ctaTitle}>
              Explore our <span className={styles.ctaTitleHighlight}>Material Capabilities.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Gavin Machine manufactures precision components from a wide range of metals and engineering-grade plastics. Our experience allows us to achieve excellent surface finishes and tight tolerances.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/materials" className="btn btn--outline" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              VIEW MATERIALS WE MACHINE
            </Link>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

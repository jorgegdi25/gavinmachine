import { Metadata } from "next";
import Capabilities from "@/components/Capabilities/Capabilities";
import Services from "@/components/Services/Services";
import Link from "next/link";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "What We Offer | Precision Machining Services | Gavin Machine",
  description: "Explore our comprehensive CNC machining services including 3, 4 & 5-axis milling, precision turning, and grinding for critical components.",
};

export default function WhatWeOffer() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>WHAT WE OFFER</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Comprehensive </span>
              <br />
              <span className={styles.heroTitleLight}>Machining Solutions.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              High-precision CNC machining services from prototyping to high-volume production, designed to meet your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Hub */}
      <div style={{ padding: "4rem 0 0" }}>
        <Services />
      </div>
      
      {/* 3. Capabilities Detailed Hub */}
      <Capabilities />

      {/* 4. Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              READY TO START YOUR PROJECT?
            </div>
            <h2 className={styles.ctaTitle}>
              Contact our <span className={styles.ctaTitleHighlight}>Engineering Team.</span>
            </h2>
            <p className={styles.ctaDesc}>
              We are ready to review your specifications and provide a competitive quote with accurate lead times. Let's build something exceptional together.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              REQUEST A QUOTE TODAY
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

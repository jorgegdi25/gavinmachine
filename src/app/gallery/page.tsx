import { Metadata } from "next";
import Gallery from "@/components/Gallery/Gallery";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Gallery | Precision Machining Projects | Gavin Machine",
  description: "View our gallery of completed precision machining projects, showcasing our capabilities in CNC milling, CNC turning, inspection, and assembly.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>PROJECT GALLERY</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>A Showcase of </span>
              <br />
              <span className={styles.heroTitleLight}>Precision Work.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              View our gallery of completed precision machining projects across various demanding industries.
            </p>
          </div>
        </div>
      </section>

      <div style={{ paddingTop: "2rem" }}>
        <Gallery />
      </div>
    </>
  );
}

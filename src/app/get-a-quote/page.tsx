import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";
import { media } from "@/lib/media";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Request a Quote | Gavin Machine",
  description: "Request a quote for your precision machining project. Upload your drawings and specifications for a rapid response.",
};

export default function GetAQuote() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${media.heroBackground})`, backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>REQUEST A QUOTE</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Let's Build </span>
              <br />
              <span className={styles.heroTitleLight}>Precision Together.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Upload your drawing, CAD file, or project specifications, and our team will review your requirements promptly.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

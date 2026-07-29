import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileCheck2, Mail, Microscope, Phone, Search, Target } from "lucide-react";
import { media } from "@/lib/media";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Quality Assurance & Inspection | Gavin Machine",
  description: "Advanced inspection equipment and proven quality control processes for precision CNC machining.",
};

const inspectionEquipment = [
  "14\" Optical Comparator with Metrology Display",
  "24\" Mitutoyo Electronic Vertical Gauge System",
  "Full Complement of Precision Pin Gauges",
  "Precision Measuring Instruments and Inspection Accessories",
];

export default function QualityControl() {
  return (
    <>
      <section className={styles.hero} style={{ backgroundImage: `url(${media.service3})` }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>QUALITY ASSURANCE &amp; INSPECTION</span>
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Quality Assurance </span>
              <span className={styles.heroTitleLight}>&amp; Inspection.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Quality is at the core of everything we manufacture. Gavin Machine utilizes advanced inspection equipment and proven quality control processes to verify that every component meets customer specifications and performance requirements.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/get-a-quote" className="btn btn--primary">
                REQUEST A QUOTE
              </Link>
              <Link href="#equipment" className="btn btn--outline">
                VIEW EQUIPMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statsBanner}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statItem}>
            <Search size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Quality Assurance<br />&amp; Inspection</span>
          </div>
          <div className={styles.statItem}>
            <Microscope size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>CMM<br />Inspection</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>0.00008&quot; X-Axis<br />Accuracy</span>
          </div>
          <div className={styles.statItem}>
            <FileCheck2 size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Verified Quality &amp;<br />Consistent Performance</span>
          </div>
        </div>
      </div>

      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Quality Assurance &amp; Inspection</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              From prototype development through production manufacturing, our inspection capabilities help ensure accuracy, consistency, and repeatability throughout the machining process.
            </p>
          </div>

          <div className={styles.capabilitiesGrid2Col}>
            <div className={styles.capabilityCard}>
              <h3 className={styles.capTitle}>Inspection Capabilities</h3>
              <p className={styles.capDesc}>
                Our quality department is equipped with precision measurement systems capable of verifying complex geometries and tight-tolerance components.
              </p>
            </div>

            <div className={styles.capabilityCard}>
              <h3 className={styles.capTitle}>Quality Commitment</h3>
              <p className={styles.capDesc}>
                Our inspection processes are integrated throughout production to ensure that parts conform to customer drawings, specifications, and quality requirements. By combining advanced measurement technology with experienced machinists and inspectors, we provide customers with confidence that every component is manufactured to the highest standards.
              </p>
              <p className={styles.capDesc}>
                Whether producing a single prototype or recurring production orders, Gavin Machine is committed to delivering precision-machined parts with verified quality and consistent performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionWrapper} id="equipment">
        <div className="container">
          <div className={styles.equipmentContainer}>
            <div className={styles.equipmentImageWrapper}>
              <img src={media.scientific} alt="Precision Inspection Equipment" className={styles.equipmentImage} />
            </div>

            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Coordinate Measuring Machines (CMM)</h2>
              <div className={styles.sectionTitleLine} style={{ margin: "0 0 2rem 0" }}></div>

              <h3 className={styles.capTitle}>Helmel PHOENIX 216-162 CMM</h3>
              <ul className={styles.equipmentList}>
                {[
                  "X-Axis: 20\"",
                  "Y-Axis: 16\"",
                  "Z-Axis: 16\"",
                  "X-Axis Accuracy: 0.00008\"",
                  "Y-Axis Accuracy: 0.00012\"",
                  "Z-Axis Accuracy: 0.00012\"",
                  "Repeatability: 0.00013\"",
                  "Volumetric Accuracy: 0.00038\"",
                ].map((item) => (
                  <li key={item} className={styles.equipmentItem}>
                    <CheckCircle2 size={20} className={styles.equipmentCheck} />
                    <span className={styles.equipmentText}>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className={styles.capTitle}>Helmel Coordinate Measuring Machine</h3>
              <ul className={styles.equipmentList}>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Measuring Capacity: 25&quot; × 24&quot; × 18&quot;</span>
                </li>
              </ul>

              <p className={styles.capDesc}>
                These systems provide accurate dimensional verification for complex machined components and critical features.
              </p>

              <h3 className={styles.capTitle}>Precision Inspection Equipment</h3>
              <ul className={styles.equipmentList}>
                {inspectionEquipment.map((item) => (
                  <li key={item} className={styles.equipmentItem}>
                    <CheckCircle2 size={20} className={styles.equipmentCheck} />
                    <span className={styles.equipmentText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              READY TO START YOUR NEXT PROJECT?
            </div>
            <h2 className={styles.ctaTitle}>
              Quality <span className={styles.ctaTitleHighlight}>Assurance &amp; Inspection.</span>
            </h2>
          </div>

          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginBottom: "1rem" }}>
              REQUEST A QUOTE
            </Link>

            <a href="mailto:Paddy@gqmachine.com" className={styles.ctaInfoBox}>
              <Mail size={20} className={styles.ctaIcon} />
              <span>Paddy@gqmachine.com</span>
            </a>

            <a href="tel:6174628536" className={styles.ctaInfoBox}>
              <Phone size={20} className={styles.ctaIcon} />
              <span>(617) 462-8536</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

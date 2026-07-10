import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, Search, Target, ShieldCheck, FileCheck2, 
  Settings, Layers, Microscope, Wrench,
  FileCode2, FileBox, FileDigit, FileText, Blocks, Box,
  Mail, Phone
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Quality Control & Inspection | Gavin Machine",
  description: "Advanced precision measurement and quality control for CNC machining. ISO-compliant inspection with Coordinate Measuring Machines (CMM) and precision gauges.",
};

export default function QualityControl() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/service3.png')" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>QUALITY CONTROL</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Quality Assurance </span>
              <span className={styles.heroTitleLight}>& Inspection.</span>
            </h1>
          
            <p className={styles.heroSubtitle}>
              Quality is at the core of everything we manufacture. We verify that every component meets customer specifications and performance requirements.
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

      {/* Stats Banner */}
      <div className={styles.statsBanner}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statItem}>
            <Search size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Advanced<br />Metrology</span>
          </div>
          <div className={styles.statItem}>
            <Microscope size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>CMM<br />Inspection</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>0.00008" CMM<br />Accuracy</span>
          </div>
          <div className={styles.statItem}>
            <FileCheck2 size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>100% Quality<br />Verification</span>
          </div>
        </div>
      </div>

      {/* Quality Commitment Cards */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Quality Commitment</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              By combining advanced measurement technology with experienced inspectors, we provide customers with confidence that every component is manufactured to the highest standards.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.capTitle}>Process Integration</h3>
              </div>
              <p className={styles.capDesc}>
                Our inspection processes are integrated throughout production to ensure that parts conform strictly to customer drawings.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>In-process measurement checks</li>
                <li className={styles.capListItem}>First article inspection (FAI)</li>
                <li className={styles.capListItem}>Final dimensional verification</li>
                <li className={styles.capListItem}>Conformity to specifications</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Target size={24} />
                </div>
                <h3 className={styles.capTitle}>Precision & Accuracy</h3>
              </div>
              <p className={styles.capDesc}>
                From prototype development through production manufacturing, our inspection capabilities help ensure absolute accuracy.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Sub-micron CMM measurement</li>
                <li className={styles.capListItem}>Tight-tolerance verification</li>
                <li className={styles.capListItem}>Complex geometry analysis</li>
                <li className={styles.capListItem}>Consistent repeatability</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Layers size={24} />
                </div>
                <h3 className={styles.capTitle}>Consistent Performance</h3>
              </div>
              <p className={styles.capDesc}>
                Gavin Machine is committed to delivering precision-machined parts with verified quality, regardless of the order volume.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Single prototype verification</li>
                <li className={styles.capListItem}>Recurring production QC</li>
                <li className={styles.capListItem}>Traceable documentation</li>
                <li className={styles.capListItem}>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* File Formats - Shared Section */}
      <section className={`${styles.sectionWrapper} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: "2.5rem" }}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "1.8rem" }}>Accepted File Formats</h2>
          </div>

          <div className={styles.formatsGrid}>
            <div className={styles.formatBox}>
              <Box size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>SOLIDWORKS</div>
              <div className={styles.formatExt}>(.SLDPRT)</div>
            </div>
            
            <div className={styles.formatBox}>
              <FileCode2 size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>STEP</div>
              <div className={styles.formatExt}>(.STP, .STEP)</div>
            </div>
            
            <div className={styles.formatBox}>
              <FileBox size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>IGES</div>
              <div className={styles.formatExt}>(.IGS)</div>
            </div>
            
            <div className={styles.formatBox}>
              <FileDigit size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>DXF</div>
              <div className={styles.formatExt}>(.DXF)</div>
            </div>
            
            <div className={styles.formatBox}>
              <FileText size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>PDF</div>
              <div className={styles.formatExt}>(Drawings)</div>
            </div>
            
            <div className={styles.formatBox}>
              <Blocks size={32} strokeWidth={1.5} className={styles.formatIcon} />
              <div className={styles.formatTitle}>Other 3D</div>
              <div className={styles.formatExt}>Formats</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className={styles.sectionWrapper} id="equipment">
        <div className="container">
          <div className={styles.equipmentContainer}>
            <div className={styles.equipmentImageWrapper}>
              <img src="/images/ind-scientific.png" alt="Precision Inspection Equipment" className={styles.equipmentImage} />
            </div>
            
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Inspection Equipment</h2>
              <div className={styles.sectionTitleLine} style={{ margin: '0 0 2rem 0' }}></div>
              
              <ul className={styles.equipmentList}>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <div>
                    <span className={styles.equipmentText} style={{ display: 'block', fontWeight: '700', color: 'var(--color-dark)' }}>Helmel PHOENIX 216-162 CMM</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '4px' }}>Range: X: 20", Y: 16", Z: 16" | Accuracy: 0.00008"</span>
                  </div>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <div>
                    <span className={styles.equipmentText} style={{ display: 'block', fontWeight: '700', color: 'var(--color-dark)' }}>Helmel Coordinate Measuring Machine</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', display: 'block', marginTop: '4px' }}>Capacity: 25" × 24" × 18"</span>
                  </div>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText} style={{ marginTop: '2px' }}>14" Optical Comparator with Metrology Display</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText} style={{ marginTop: '2px' }}>24" Mitutoyo Electronic Vertical Gauge System</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText} style={{ marginTop: '2px' }}>Full Complement of Precision Pin Gauges</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText} style={{ marginTop: '2px' }}>Precision Measuring Instruments and Accessories</span>
                </li>
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
              Quality <span className={styles.ctaTitleHighlight}>Guaranteed.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Our quality control department ensures your parts are done right the first time, to your exact specifications.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              REQUEST A QUOTE TODAY
            </Link>
            
            <a href="mailto:info@gavinmachine.com" className={styles.ctaInfoBox}>
              <Mail size={20} className={styles.ctaIcon} />
              <span>info@gavinmachine.com</span>
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

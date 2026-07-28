import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, Settings2, ShieldCheck, 
  Target, Box, Wrench, Factory, Cpu,
  FileCode2, FileBox, FileDigit, FileText, Blocks,
  Mail, Phone
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "CNC Turning Services | Precision Machining Massachusetts",
  description: "Advanced CNC turning services with live tooling and Y-axis capabilities. High-precision turning for prototype to production manufacturing.",
};

export default function CNCTurning() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/cnc-turning.png')" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>CNC TURNING SERVICES</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Advanced CNC Turning </span>
              <span className={styles.heroTitleLight}>with Live Tooling.</span>
            </h1>
          
            <p className={styles.heroSubtitle}>
              Advanced CNC turning with live tooling and Y-axis capabilities for complex components, reducing handling and improving accuracy.
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
            <Settings2 size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Y-Axis Machining<br />Capability</span>
          </div>
          <div className={styles.statItem}>
            <Wrench size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Live Tooling<br />Secondary Ops</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>High Precision &<br />Repeatability</span>
          </div>
          <div className={styles.statItem}>
            <Box size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Prototype to<br />Production</span>
          </div>
        </div>
      </div>

      {/* Engineering Capabilities */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Advanced CNC Turning Technology</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              Gavin Machine's CNC turning department is equipped to handle multiple machining operations in a single setup, shortening production times and maintaining tight tolerances.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Cpu size={24} />
                </div>
                <h3 className={styles.capTitle}>Live Tooling & Y-Axis</h3>
              </div>
              <p className={styles.capDesc}>
                Our turning centers with Y-axis capability and live tooling enable us to perform multiple operations directly on the lathe.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Turning, milling, drilling & tapping</li>
                <li className={styles.capListItem}>Reduced setups & material handling</li>
                <li className={styles.capListItem}>Improved part accuracy</li>
                <li className={styles.capListItem}>Faster production cycles</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Factory size={24} />
                </div>
                <h3 className={styles.capTitle}>Production Capabilities</h3>
              </div>
              <p className={styles.capDesc}>
                Whether you need a single prototype or high-volume manufacturing, our department scales to meet your requirements.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Prototype Development</li>
                <li className={styles.capListItem}>Low-to-Medium Volume Production</li>
                <li className={styles.capListItem}>High-Mix Manufacturing</li>
                <li className={styles.capListItem}>Custom Fixtures & Tooling</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.capTitle}>Secondary Services</h3>
              </div>
              <p className={styles.capDesc}>
                We coordinate all secondary processing to deliver completely finished components directly to your assembly line.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Anodizing & Plating</li>
                <li className={styles.capListItem}>Heat Treating</li>
                <li className={styles.capListItem}>Rigorous Inspection Services</li>
                <li className={styles.capListItem}>Secondary Processing Coordination</li>
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
              <img src="/images/service2.png" alt="CNC Turning Center" className={styles.equipmentImage} />
            </div>
            
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>CNC Turning Centers</h2>
              <div className={styles.sectionTitleLine} style={{ margin: '0 0 2rem 0' }}></div>
              
              <ul className={styles.equipmentList}>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Mazak Quick Turn Nexus 250-II</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Haas ST-20Y CNC Lathe with Y-Axis and Live Tooling</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>CNC Lathe with ProtoTRAK LX2 Control (17" Swing × 48" Capacity)</span>
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
              Need Precision <span className={styles.ctaTitleHighlight}>Turned Parts?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Our turning department is equipped to handle your most demanding manufacturing requirements. Submit your RFQ today.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              REQUEST A QUOTE
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

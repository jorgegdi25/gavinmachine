import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, Target, ShieldCheck, 
  Settings, Layers, Drill,
  FileCode2, FileBox, FileDigit, FileText, Blocks, Box,
  Mail, Phone
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Grinding Services | Surface & Cylindrical Grinding Massachusetts",
  description: "Precision surface and cylindrical grinding for ultra-tight tolerances and superior surface finishes. Grinding services for hardened materials and critical components.",
};

export default function Grinding() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/grinding.png')" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>GRINDING SERVICES</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Precision Surface & </span>
              <span className={styles.heroTitleLight}>Cylindrical Grinding.</span>
            </h1>
          
            <p className={styles.heroSubtitle}>
              Precision surface and cylindrical grinding for ultra-smooth finishes and the tightest tolerances standard machining cannot reach.
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
            <Settings size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Surface & OD<br />Grinding</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Ultra-Tight<br />Tolerances</span>
          </div>
          <div className={styles.statItem}>
            <Layers size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Superior Surface<br />Finishes (Ra)</span>
          </div>
          <div className={styles.statItem}>
            <Drill size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Hardened<br />Materials</span>
          </div>
        </div>
      </div>

      {/* Engineering Capabilities */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Advanced Grinding Capabilities</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              When a component demands extremely tight tolerances, flatness, or a mirror-smooth surface finish, Gavin Machine relies on precision grinding to deliver results beyond what milling and turning alone can achieve.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Settings size={24} />
                </div>
                <h3 className={styles.capTitle}>Grinding Services</h3>
              </div>
              <p className={styles.capDesc}>
                Our grinding capabilities allow us to finish critical features to exacting specifications.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Surface Grinding</li>
                <li className={styles.capListItem}>Cylindrical (OD) Grinding</li>
                <li className={styles.capListItem}>Flatness & Parallelism Finishing</li>
                <li className={styles.capListItem}>Hardened Material Grinding</li>
                <li className={styles.capListItem}>Tight-Tolerance Feature Finishing</li>
                <li className={styles.capListItem}>Fine Surface Finish (Ra) Control</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Box size={24} />
                </div>
                <h3 className={styles.capTitle}>Production Workflow</h3>
              </div>
              <p className={styles.capDesc}>
                Grinding is often the final step that guarantees a part meets print. We integrate it directly into our machining workflow.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Prototype Development</li>
                <li className={styles.capListItem}>Low-to-Medium Volume Production</li>
                <li className={styles.capListItem}>Precision Machined Components</li>
                <li className={styles.capListItem}>In-Process & Final Grinding</li>
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
                We manage all secondary operations required before or after the grinding process.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Heat Treating</li>
                <li className={styles.capListItem}>Plating</li>
                <li className={styles.capListItem}>Anodizing</li>
                <li className={styles.capListItem}>Inspection Services</li>
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

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              READY TO START YOUR NEXT PROJECT?
            </div>
            <h2 className={styles.ctaTitle}>
              Need Tight-Tolerance <span className={styles.ctaTitleHighlight}>Ground Parts?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Our grinding department is ready to finish your most demanding components to exact specifications. Submit your RFQ today.
            </p>
          </div>
          
          <div className={styles.ctaRight}>
            <Link href="/get-a-quote" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              SUBMIT YOUR RFQ TODAY
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

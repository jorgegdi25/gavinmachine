import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Wrench, MonitorDot, 
  Target, Box, Network, Layers, FileCode2, 
  FileBox, FileDigit, FileText, Blocks,
  Mail, Phone
} from "lucide-react";
import { media } from "@/lib/media";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "CNC Milling Services | Precision Machining Massachusetts",
  description: "Advanced CNC milling services in Massachusetts, featuring 3, 4, and 5-axis capabilities. Programmed with Mastercam for complex precision components.",
};

export default function CNCMilling() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${media.heroBackground})` }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>CNC MILLING SERVICES</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Precision CNC Milling </span>
              <span className={styles.heroTitleLight}>Built for Complex Parts.</span>
            </h1>
          
            <p className={styles.heroSubtitle}>
              Advanced 3, 4 & 5-axis machining with integrated CAD/CAM technology to deliver high-precision components, on time and to spec.
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
            <Wrench size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>3, 4 & 5-Axis<br />CNC Milling</span>
          </div>
          <div className={styles.statItem}>
            <MonitorDot size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Advanced<br />CAD/CAM</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Tight Tolerances<br />& Accuracy</span>
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
            <h2 className={styles.sectionTitle}>Our Engineering & Programming Capabilities</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              We combine advanced software, experienced engineers, and a streamlined workflow to reduce lead times and deliver consistent, high-quality parts.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <MonitorDot size={24} />
                </div>
                <h3 className={styles.capTitle}>CAD/CAM Programming</h3>
              </div>
              <p className={styles.capDesc}>
                We use Mastercam, one of the industry's leading CAD/CAM platforms for CNC milling and turning. Capabilities include:
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>3, 4, and 5-Axis CNC Programming</li>
                <li className={styles.capListItem}>Complex Surface Machining</li>
                <li className={styles.capListItem}>Production Process Optimization</li>
                <li className={styles.capListItem}>Fixture and Tooling Design Support</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Network size={24} />
                </div>
                <h3 className={styles.capTitle}>Digital Manufacturing Workflow</h3>
              </div>
              <p className={styles.capDesc}>
                Our networked manufacturing system connects programming, engineering, and machining operations throughout the shop.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Rapid program distribution to machines</li>
                <li className={styles.capListItem}>Reduced setup times & improved revision control</li>
                <li className={styles.capListItem}>Faster job processing & increased production efficiency</li>
                <li className={styles.capListItem}>Consistent manufacturing documentation</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Layers size={24} />
                </div>
                <h3 className={styles.capTitle}>From CAD Model to Finished Part</h3>
              </div>
              <p className={styles.capDesc}>
                We convert design data into production-ready programs, supporting both prototype development and ongoing manufacturing requirements.
              </p>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Customer-supplied CAD models and engineering data</li>
                <li className={styles.capListItem}>Support for prototype development and production</li>
                <li className={styles.capListItem}>Efficient transition from concept to completed part</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* File Formats */}
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
              <img src={media.service1} alt="Haas CNC Milling Machine" className={styles.equipmentImage} />
            </div>
            
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>CNC Milling Equipment</h2>
              <div className={styles.sectionTitleLine} style={{ margin: '0 0 2rem 0' }}></div>
              
              <ul className={styles.equipmentList}>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Fanuc RoboDrill T21iFL with Pallet Changer</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Mazak Nexus VCN-570C with Smooth Technology</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>(2) Mazak Nexus 510C</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>(2) Haas VF-2 SSYT with 5-Axis Trunnions</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Haas VF-2 equipped with Rotary 4th Axis Indexer</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Hass VF4 SS</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Haas VF-3</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>TRAK DPM AGE Three-Axis Bed Mill</span>
                </li>
                <li className={styles.equipmentItem}>
                  <CheckCircle2 size={20} className={styles.equipmentCheck} />
                  <span className={styles.equipmentText}>Lagun FTV-2 with ProtoTRAK MX2 Control</span>
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
              Let's Build Precision <span className={styles.ctaTitleHighlight}>Together.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Share your drawings, specifications, and requirements. Our team will review your project and provide a competitive quote.
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

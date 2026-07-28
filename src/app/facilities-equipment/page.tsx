import { Metadata } from "next";
import Link from "next/link";
import { 
  Settings, Target, Layers, ShieldCheck, Drill, Building
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Facilities & Equipment | Gavin Machine",
  description: "View our facility equipment list including multi-axis CNC milling centers, turning centers, support equipment, and inspection equipment.",
};

export default function Facilities() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/images/facility-bg.jpg')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>FACILITIES & EQUIPMENT</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>State-of-the-Art </span>
              <span className={styles.heroTitleLight}>Machining Facility.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Our modern, climate-controlled facility houses advanced CNC machinery and precision inspection equipment to handle your most complex projects.
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
            <Building size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Climate Controlled<br />Facility</span>
          </div>
          <div className={styles.statItem}>
            <Settings size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Multi-Axis CNC<br />Machining</span>
          </div>
          <div className={styles.statItem}>
            <Drill size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Advanced Turning<br />& Milling</span>
          </div>
          <div className={styles.statItem}>
            <ShieldCheck size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Precision<br />Inspection</span>
          </div>
        </div>
      </div>

      {/* Capabilities / Equipment Cards */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Equipment List</h2>
            <div className={styles.sectionTitleLine}></div>
          </div>

          <div className={styles.capabilitiesGrid2Col}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Target size={24} />
                </div>
                <h3 className={styles.capTitle}>Milling Centers</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Fanuc RoboDrill T21iFL with Pallet Changer</li>
                <li className={styles.capListItem}>Mazak Nexus VCN-570C with Smooth Technology</li>
                <li className={styles.capListItem}>(2) Mazak Nexus 510C</li>
                <li className={styles.capListItem}>(2) Haas VF-2 SSYT with 5-Axis Trunnions</li>
                <li className={styles.capListItem}>Haas VF-2 equipped with Rotary 4th Axis Indexer</li>
                <li className={styles.capListItem}>Hass VF4 SS</li>
                <li className={styles.capListItem}>Haas VF-3</li>
                <li className={styles.capListItem}>TRAK DPM AGE Three-Axis Bed Mill</li>
                <li className={styles.capListItem}>Lagun FTV-2 with ProtoTRAK MX2 Control</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Settings size={24} />
                </div>
                <h3 className={styles.capTitle}>Turning Centers</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Mazak Quick Turn Nexus 250-II</li>
                <li className={styles.capListItem}>Haas ST-20Y CNC Lathe with Y-Axis and Live Tooling</li>
                <li className={styles.capListItem}>CNC Lathe with ProtoTRAK LX2 Control (17&quot; Swing × 48&quot; Capacity)</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Layers size={24} />
                </div>
                <h3 className={styles.capTitle}>Additional Equipment</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>W.F. Wells Horizontal Saw</li>
                <li className={styles.capListItem}>Grob Bandsaw</li>
                <li className={styles.capListItem}>Sullair 1100e Compressor</li>
              </ul>
            </div>
            
            {/* Card 4 (We can add a 4th card to balance or leave 3, but the grid is up to 3 columns. Let's make it fit in the grid). */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.capTitle}>Production Capabilities</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Prototype Development</li>
                <li className={styles.capListItem}>Low-to-Medium Volume Production</li>
                <li className={styles.capListItem}>High-Mix Manufacturing</li>
                <li className={styles.capListItem}>Precision Machined Components</li>
                <li className={styles.capListItem}>Custom Fixtures &amp; Tooling</li>
                <li className={styles.capListItem}>Secondary Processing Coordination</li>
                <li className={styles.capListItem}>Quality Inspection</li>
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
              Leverage Our <span className={styles.ctaTitleHighlight}>Advanced Facility.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Our equipment and expertise are ready to tackle your most demanding manufacturing challenges.
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

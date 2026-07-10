import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, Settings, Target, Layers, 
  Wrench, ShieldCheck, Drill, Building
} from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Facilities & Equipment | Gavin Machine",
  description: "View our state-of-the-art facility equipment list including multi-axis CNC mills, lathes, grinding machines, and inspection equipment.",
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
            <p className={styles.sectionSubtitle}>
              We continuously invest in top-tier equipment from brands like Haas, Mazak, and Mitutoyo to ensure the highest quality manufacturing.
            </p>
          </div>

          <div className={styles.capabilitiesGrid2Col}>
            {/* Card 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Target size={24} />
                </div>
                <h3 className={styles.capTitle}>CNC Milling</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Haas UMC-750 5-Axis Universal Machining Center</li>
                <li className={styles.capListItem}>Haas VF-4SS Super Speed VMC</li>
                <li className={styles.capListItem}>Haas VF-2 VMC with 4th Axis</li>
                <li className={styles.capListItem}>Hurco VMX42i VMC</li>
                <li className={styles.capListItem}>Bridgeport Vertical Milling Machines (Manual)</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Settings size={24} />
                </div>
                <h3 className={styles.capTitle}>CNC Turning</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Haas ST-20Y CNC Lathe with Y-Axis and Live Tooling</li>
                <li className={styles.capListItem}>Haas ST-10 CNC Lathe with Bar Feeder</li>
                <li className={styles.capListItem}>Doosan Puma 2100SY High Performance</li>
                <li className={styles.capListItem}>Hardinge Precision Toolroom Lathes (Manual)</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Layers size={24} />
                </div>
                <h3 className={styles.capTitle}>Grinding & Support</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Okamoto Surface Grinder 12x24</li>
                <li className={styles.capListItem}>Mitsui Surface Grinders</li>
                <li className={styles.capListItem}>Amada Automatic Bandsaw</li>
                <li className={styles.capListItem}>Bead Blasting Cabinet</li>
                <li className={styles.capListItem}>Vibratory Tumblers for deburring</li>
              </ul>
            </div>
            
            {/* Card 4 (We can add a 4th card to balance or leave 3, but the grid is up to 3 columns. Let's make it fit in the grid). */}
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.capTitle}>Quality Control</h3>
              </div>
              <ul className={styles.capList}>
                <li className={styles.capListItem}>Zeiss Contura G2 CMM (VAST XT)</li>
                <li className={styles.capListItem}>Mitutoyo Optical Comparator</li>
                <li className={styles.capListItem}>Mitutoyo Surface Roughness Tester</li>
                <li className={styles.capListItem}>Calibrated gauges, micrometers, pins</li>
                <li className={styles.capListItem}>Climate-controlled inspection room</li>
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
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

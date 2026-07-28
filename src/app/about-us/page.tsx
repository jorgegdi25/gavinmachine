import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Target, ClipboardCheck, Settings, LineChart, Users, Clock } from "lucide-react";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "About Us | Gavin Machine",
  description: "Learn about the history of Gavin Machine. A family-owned precision machining company established in 1990 in Hingham, MA.",
};

export default function AboutUs() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&q=80')", backgroundColor: "#0c1a2d" }}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContainer}>
            <div className={styles.heroLabel}>
              <div className={styles.heroLabelLine}></div>
              <span className={styles.heroLabelText}>ABOUT US</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleDark}>Precision. Quality. </span>
              <br />
              <span className={styles.heroTitleLight}>Built on Trust.</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Family-owned precision machining company serving customers across industries since 1990.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <div className={styles.statsBanner}>
        <div className={`container ${styles.statsContainer}`}>
          <div className={styles.statItem}>
            <ShieldCheck size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>30+ Years of<br />Excellence</span>
          </div>
          <div className={styles.statItem}>
            <Factory size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Multi-Axis CNC<br />Machining</span>
          </div>
          <div className={styles.statItem}>
            <Target size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Precision in<br />Every Detail</span>
          </div>
          <div className={styles.statItem}>
            <ClipboardCheck size={32} strokeWidth={1.5} className={styles.statIcon} />
            <span className={styles.statText}>Rigorous Quality<br />Control</span>
          </div>
        </div>
      </div>

      {/* 3. About Gavin Machine Split Section */}
      <section className={styles.sectionWrapper}>
        <div className="container">
          <div className={styles.equipmentContainer}>
            <div className={styles.equipmentImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1565439390238-6f6874411135?w=1000&q=80" 
                alt="Gavin Machine Shop Floor" 
                className={styles.equipmentImage}
              />
            </div>
            
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h2 className={styles.sectionTitle}>Built on Precision. Focused on Your Success.</h2>
                <div className={styles.sectionTitleLine} style={{ margin: '0 0 1.5rem 0' }}></div>
              </div>
              
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                Founded in 1990, Gavin Machine is a family-owned precision machining company based in Hingham, Massachusetts. For over three decades, we've delivered high-quality components and dependable service to customers across aerospace, medical, defense, industrial, and more.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Our mission is simple: deliver accurate, reliable, and cost-effective machined parts while building long-term partnerships through quality, service, and integrity.
              </p>
              
              <Link href="/what-we-offer" className="btn btn--primary">
                VIEW OUR CAPABILITIES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our History Section */}
      <section className={`${styles.sectionWrapper} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our History & Growth</h2>
            <div className={styles.sectionTitleLine}></div>
            <p className={styles.sectionSubtitle}>
              From a small machine shop to a trusted manufacturing partner, we've grown through dedication to our customers and investment in people and technology.
            </p>
          </div>

          <div className={styles.capabilitiesGrid2Col}>
            
            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Clock size={24} />
                </div>
                <h3 className={styles.capTitle}>1990: Foundation</h3>
              </div>
              <p className={styles.capDesc}>
                Founded in 1990 by Paddy Gavin, Gavin Machine began with a single machine and a commitment to exceptional craftsmanship, customer service, and long-term relationships that continue to define our company today.
              </p>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <LineChart size={24} />
                </div>
                <h3 className={styles.capTitle}>Expansion & Investment</h3>
              </div>
              <p className={styles.capDesc}>
                Continually invested in advanced CNC machining centers, CAD/CAM programming, and precision inspection technology to support increasingly complex customer requirements.
              </p>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Settings size={24} />
                </div>
                <h3 className={styles.capTitle}>Advanced Capabilities</h3>
              </div>
              <p className={styles.capDesc}>
                Expanded our capabilities with advanced 3, 4 &amp; 5-axis CNC machining, CNC turning with live tooling, Mastercam CAD/CAM programming, and precision CMM inspection.
              </p>
            </div>

            <div className={styles.capabilityCard}>
              <div className={styles.capHeader}>
                <div className={styles.capIconWrapper}>
                  <Users size={24} />
                </div>
                <h3 className={styles.capTitle}>Focused on the Future</h3>
              </div>
              <p className={styles.capDesc}>
                Today, we continue investing in technology, equipment, and our people to provide precision machining solutions that help customers succeed—from prototype development to long-term production manufacturing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaPreTitle}>
              <div className={styles.ctaPreTitleLine}></div>
              READY TO WORK WITH A TEAM YOU CAN TRUST?
            </div>
            <h2 className={styles.ctaTitle}>
              Let's Bring Your <span className={styles.ctaTitleHighlight}>Project to Life.</span>
            </h2>
            <p className={styles.ctaDesc}>
              Contact our experienced team today to discuss your precision machining requirements and discover the Gavin Machine difference.
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

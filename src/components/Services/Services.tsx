"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately one card width or the whole container width minus a bit
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth * 0.8;
      
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.servicesSection} id="services">
      <div className={`container ${styles.container}`}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>OUR SERVICES</span>
            <div className={styles.labelLine}></div>
          </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Precision Solutions.</span> <span className={styles.titleLight}>Built for Your Success.</span>
          </h2>
          
          <p className={styles.subtitle}>
            From complex components to tight tolerances, we deliver high-quality machining<br />
            and inspection services you can rely on.
          </p>
        </div>

        {/* Services Slider */}
        <div className={styles.sliderWrapper}>
          <button 
            onClick={() => scroll('left')} 
            className={`${styles.sliderArrow} ${styles.arrowLeft}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} />
          </button>
          
          <div className={styles.servicesGrid} ref={scrollRef}>
            
            {/* Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('/images/service1.png')" }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>CNC Milling</h3>
                <p className={styles.cardDesc}>
                  High-precision 3, 4 & 5-axis CNC milling for complex geometries and tight tolerances.
                </p>
                <Link href="/cnc-milling-services" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('/images/cnc-turning.png')" }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>CNC Turning</h3>
                <p className={styles.cardDesc}>
                  Advanced CNC turning centers equipped for high-volume production with exceptional accuracy.
                </p>
                <Link href="/cnc-turning-services" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('/images/grinding.png')" }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Grinding Services</h3>
                <p className={styles.cardDesc}>
                  Surface and cylindrical grinding when ultra-smooth finishes and tight tolerances are required.
                </p>
                <Link href="/grinding-services" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('/images/service2.png')" }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Inspection & QC</h3>
                <p className={styles.cardDesc}>
                  Rigorous quality control with advanced CMM equipment to verify every critical dimension.
                </p>
                <Link href="/quality-control" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

          <button 
            onClick={() => scroll('right')} 
            className={`${styles.sliderArrow} ${styles.arrowRight}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}

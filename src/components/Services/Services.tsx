"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { media } from "@/lib/media";
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
            <span className={styles.titleDark}>Precision CNC </span>
            <span className={styles.titleLight}>Machining Services</span>
          </h2>
          
          <div className={styles.subtitle}>
            <p>From prototype development to production manufacturing, Gavin Machine delivers advanced CNC milling, CNC turning, inspection, and assembly solutions for demanding industries.</p>
            <p>Advanced CNC milling, CNC turning, quality inspection, and assembly services supported by 3, 4 &amp; 5-axis machining technology.</p>
          </div>
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
                <div className={styles.cardImage} style={{ backgroundImage: `url(${media.service1})` }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>CNC Milling</h3>
                <p className={styles.cardDesc}>
                  We offer advanced CNC milling services utilizing 3, 4, and 5-axis machining technology to manufacture complex components with tight tolerances.
                </p>
                <Link href="/cnc-milling-services" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${media.cncTurning})` }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>CNC Turning</h3>
                <p className={styles.cardDesc}>
                  Our CNC turning capabilities produce accurate and repeatable cylindrical components for a wide range of applications.
                </p>
                <Link href="/cnc-turning-services" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${media.grinding})` }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Prototype &amp; Production</h3>
                <p className={styles.cardDesc}>
                  Gavin Machine specializes in low-to-medium quantity, high-mix manufacturing. We support customers throughout every stage of production, from initial prototypes and product development to ongoing production requirements.
                </p>
                <Link href="/what-we-offer#service-details" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${media.service2})` }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Secondary Services</h3>
                <p className={styles.cardDesc}>
                  To provide complete manufacturing solutions, we coordinate a variety of finishing and value-added services. These services help ensure that components meet customer specifications and are ready for final assembly or use.
                </p>
                <Link href="/what-we-offer#service-details" className={styles.cardLink}>
                  LEARN MORE <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className={styles.serviceCard}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${media.service2})` }}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Quality Assurance</h3>
                <p className={styles.cardDesc}>
                  Quality is integrated into every stage of our manufacturing process. Through careful inspection, process control, and attention to detail, we ensure that every component meets the requirements of our customers and the demands of their applications.
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

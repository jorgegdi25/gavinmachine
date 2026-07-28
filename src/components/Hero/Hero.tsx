import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import CountUp from "@/components/CountUp/CountUp";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background video. Drop your 10s clip at public/hero-video.mp4 and it will
          autoplay here; until then the poster image is shown. */}
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/cnc_hero_bg.png"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className={styles.heroOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Precision CNC Milling &amp; Turning
            <span className={styles.highlight}>Prototype to Production Manufacturing</span>
          </h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Advanced 3, 4 &amp; 5-Axis CNC machining, precision turning, CAD/CAM programming, and quality inspection for prototype and production manufacturing with accuracy, consistency, and on-time performance.
          </p>
          <div className={styles.badges} aria-label="Manufacturing highlights">
            {[
              "3, 4 & 5-Axis CNC Machining",
              "Prototype to Production",
              "RFQs Within 24 Hours",
              "Since 1990",
            ].map((badge) => (
              <span key={badge} className={styles.badge}>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <Link href="/get-a-quote" className="btn btn--primary">
              REQUEST A QUOTE <ArrowRight size={18} />
            </Link>
            <Link href="/facilities-equipment" className={styles.ghostBtn}>
              VIEW FACILITIES <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating credentials card: balances the empty lower-right of the hero
          with a compact, glassmorphism-style trust signal. */}
      <div className={styles.credCard}>
        <div className={styles.credItem}>
          <span className={styles.credNumber}>
            <CountUp value={30} suffix="+" />
          </span>
          <span className={styles.credLabel}>Years of Precision</span>
        </div>
        <div className={styles.credDivider} />
        <div className={styles.credItem}>
          <span className={styles.credNumber}>1990</span>
          <span className={styles.credLabel}>Est. in Hingham, MA</span>
        </div>
        <div className={styles.credDivider} />
        <div className={styles.credItem}>
          <span className={styles.credNumber}>QC</span>
          <span className={styles.credLabel}>Rigorous Quality Standards</span>
        </div>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to content">
        <ChevronDown size={26} strokeWidth={2} />
      </a>
    </section>
  );
}

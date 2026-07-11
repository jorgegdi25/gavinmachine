import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
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
            Precision CNC{" "}
            <span className={styles.highlight}>Machining Solutions</span>
          </h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Delivering high-quality machined components with accuracy, consistency, and on-time performance.
          </p>
          <div className={styles.actions}>
            <Link href="/get-a-quote" className="btn btn--primary">
              GET A QUOTE <ArrowRight size={18} />
            </Link>
            <Link href="/what-we-offer" className={styles.ghostBtn}>
              OUR CAPABILITIES <ArrowRight size={18} />
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

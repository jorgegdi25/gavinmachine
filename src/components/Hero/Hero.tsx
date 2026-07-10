import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
            From prototype to full production — CNC milling, turning &amp; grinding.
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

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to content">
        <ChevronDown size={26} strokeWidth={2} />
      </a>
    </section>
  );
}

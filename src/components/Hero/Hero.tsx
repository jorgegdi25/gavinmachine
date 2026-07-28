import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroPoster from "../../../public/images/cnc_hero_bg.webp";
import heroVideo from "../../../public/hero-video.mp4";

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
        poster={heroPoster.src}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.heroOverlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.primaryLine}>
              Precision CNC Milling &amp; Turning
            </span>
            {" "}
            <span className={styles.highlight}>Prototype to Production Manufacturing</span>
          </h1>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Advanced 3, 4 &amp; 5-Axis CNC machining, precision turning, CAD/CAM programming, and quality inspection for prototype and production manufacturing with accuracy, consistency, and on-time performance.
          </p>
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
    </section>
  );
}

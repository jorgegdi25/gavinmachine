import { ShieldCheck, Settings, Microscope, Factory } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./KeyStats.module.css";

const stats = [
  {
    icon: <ShieldCheck size={34} strokeWidth={1.5} />,
    title: "30+ YEARS",
    subtitle: "of Precision Machining Excellence",
  },
  {
    icon: <Settings size={34} strokeWidth={1.5} />,
    title: "3, 4 & 5-AXIS CNC",
    subtitle: "Advanced Machining Technology",
  },
  {
    icon: <Microscope size={34} strokeWidth={1.5} />,
    title: "CMM INSPECTION",
    subtitle: "Quality You Can Measure",
  },
  {
    icon: <Factory size={34} strokeWidth={1.5} />,
    title: "PROTOTYPE TO PRODUCTION",
    subtitle: "Prototype to Production Manufacturing",
  },
];

export default function KeyStats() {
  return (
    <section className={styles.keyStats}>
      <Reveal as="div" className={`container ${styles.grid}`} stagger>
        {stats.map((s) => (
          <div key={s.title} className={styles.item}>
            <div className={styles.iconWrapper}>{s.icon}</div>
            <div className={styles.text}>
              <span className={styles.title}>{s.title}</span>
              <span className={styles.subtitle}>{s.subtitle}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

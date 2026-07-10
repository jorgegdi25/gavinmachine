"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What is your experience in manufacturing medical components?",
    answer:
      "We have extensive experience in the manufacturing of components for medical equipment, complying with strict regulations and quality standards. Our precision machining capabilities ensure the highest level of accuracy required for medical devices and instruments.",
  },
  {
    question: "What kind of materials can you work with?",
    answer:
      "We work with a wide range of materials including: Aluminum, Stainless Steel (303, 304, 316, 400 series), Plastics (ABS, Delrin, PEEK, Polypropylene), Low and High Carbon Steels, Cold Roll Steel, Tool Steels (A2, O1, etc.), and many more.",
  },
  {
    question: "What tolerances can you achieve?",
    answer:
      "Our CNC machines are capable of holding extremely tight tolerances. We use CMM (Coordinate Measuring Machine) and precision measuring tools to verify all dimensions and ensure every part meets your exact specifications.",
  },
  {
    question: "Do you offer prototyping services?",
    answer:
      "Yes, we offer rapid prototyping services to help you validate your designs before committing to full production runs. Our quick turnaround times help accelerate your product development cycle.",
  },
  {
    question: "What is your typical lead time?",
    answer:
      "Lead times vary depending on the complexity and quantity of the project. We work closely with our customers to meet their deadlines and can accommodate rush orders when needed. Contact us for a specific quote and timeline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faqSection} id="faq">
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>FAQ</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Frequently Asked</span><br />
            <span className={styles.titleLight}>Questions.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={styles.chevron} 
                  size={24} 
                  strokeWidth={1.5} 
                />
              </button>
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

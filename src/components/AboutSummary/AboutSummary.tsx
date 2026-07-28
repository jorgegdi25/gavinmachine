"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Wrench, Factory, Layers, Box, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import { media } from "@/lib/media";
import styles from "./AboutSummary.module.css";

const slideImages = [
  { src: media.aboutSlide01, alt: "Lagun Milling Machine Operation" },
  { src: media.aboutSlide02, alt: "CNC Machining Facility Shop Floor" },
  { src: media.aboutSlide03, alt: "Haas Precision CNC Lathe Turning" },
  { src: media.aboutSlide04, alt: "Mazak VTC CNC Milling Station" },
];

function CaliperIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 7h18" />
      <path d="M7 4v8" />
      <path d="M19 4v8" />
      <path d="M7 10v10c0 2 1.5 4 4 4h6" />
      <path d="M19 10v7" />
      <path d="M16 17h6" />
      <path d="M16 14v6" />
    </svg>
  );
}

export default function AboutSummary() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <section className={styles.aboutSection} id="about">
      {/* Main Content Area */}
      <div className={`container ${styles.mainContainer}`}>
        
        {/* Left Column: Image Slider with Experience Box */}
        <div className={styles.imageColumn}>
          <div 
            className={styles.imageWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slides Background Container */}
            <div className={styles.slidesContainer}>
              {slideImages.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ""}`}
                  style={{ backgroundImage: `url(${slide.src})` }}
                  aria-label={slide.alt}
                />
              ))}
            </div>

            {/* Slide Navigation Arrows */}
            <button 
              className={`${styles.slideNav} ${styles.slideNavPrev}`} 
              onClick={prevSlide} 
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              className={`${styles.slideNav} ${styles.slideNavNext}`} 
              onClick={nextSlide} 
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots Indicator */}
            <div className={styles.dotsContainer}>
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Experience Box Overlay with integrated CTA button */}
            <div className={styles.experienceBox}>
              <span className={styles.expNumber}>1990</span>
              <span className={styles.expTitle}>30+ Years of<br />Precision Manufacturing</span>
              <span className={styles.expSubtitle}>In Massachusetts</span>
              
              <Link href="/about-us" className={styles.imageBtn}>
                MORE ABOUT US <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Text and Features */}
        <div className={styles.textColumn}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>ABOUT GAVIN MACHINE</span>
          </div>
          
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Built on Precision.</span><br />
            <span className={styles.titleLight}>Focused on Results.</span>
          </h2>
          
          <div className={styles.divider}></div>
          
          <div className={styles.textContent}>
            <div>
              <h3>Since 1990</h3>
              <p>Family-owned precision machining company located in Hingham, Massachusetts.</p>
            </div>
            <div>
              <h3>What We Do</h3>
              <p>We specialize in precision CNC milling and turning, supporting customers from prototype development through production manufacturing.</p>
            </div>
            <div>
              <h3>Our Commitment</h3>
              <p>We deliver precision components with exceptional quality, dependable lead times, and responsive customer service.</p>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Wrench size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Prototyping</h3>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Factory size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Production</h3>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <CaliperIcon />
              </div>
              <h3 className={styles.featureTitle}>Quality Inspection</h3>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Assembly &amp; Sub-Assembly</h3>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Box size={28} strokeWidth={1.5} />
              </div>
              <h3 className={styles.featureTitle}>Materials</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Banner */}
      <div className={styles.bottomBanner}>
        <div className={`container ${styles.bannerHeading}`}>
          <h2>Why Manufacturers Choose Gavin Machine</h2>
        </div>
        <div className={`container ${styles.statsContainer}`}>
          {[
            "30+ Years of Experience",
            "3, 4 & 5-Axis CNC Machining",
            "Prototype to Production",
            "RFQs Within 24 Hours",
            "Advanced CMM Inspection",
            "Mastercam CAD/CAM Programming",
            "Family-Owned Since 1990",
          ].map((item, index) => (
            <Reveal className={styles.statBox} delay={index * 75} key={item}>
              <Check className={styles.statIcon} size={24} strokeWidth={2.5} aria-hidden="true" />
              <span className={styles.statMedium}>{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


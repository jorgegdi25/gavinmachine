"use client";

import { useState } from "react";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryImages = [
  { src: "/images/ind-semiconductor.png", alt: "Semiconductor Wafer Machining" },
  { src: "/images/ind-biomedical.png", alt: "Titanium Medical Implants" },
  { src: "/images/ind-microwave.png", alt: "Gold Plated RF Component" },
  { src: "/images/ind-scientific.png", alt: "Optics Metal Housing" },
  { src: "/images/service1.png", alt: "5-Axis CNC Milling" },
  { src: "/images/service2.png", alt: "CMM Inspection" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={`container ${styles.container}`}>
        
        {/* Minimalist Header */}
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>OUR WORK</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Precision in</span><br />
            <span className={styles.titleLight}>Every Detail.</span>
          </h2>
        </div>

        {/* Clean Grid */}
        <div className={styles.grid}>
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className={styles.gridItem}
              onClick={() => setLightboxIndex(index)}
            >
              <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
              <div className={styles.overlay}>
                <Plus size={32} strokeWidth={1} className={styles.plusIcon} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button className={styles.closeBtn} onClick={() => setLightboxIndex(null)}>
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <button 
            className={styles.navBtn} 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
            }}
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} />
            <div className={styles.caption}>{galleryImages[lightboxIndex].alt}</div>
          </div>
          
          <button 
            className={styles.navBtn} 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
            }}
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}

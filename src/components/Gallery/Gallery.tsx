"use client";

import { useState } from "react";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { media } from "@/lib/media";
import styles from "./Gallery.module.css";

const galleryImages = [
  { src: media.gallery01, alt: "Precision Machined Component" },
  { src: media.gallery02, alt: "High-Tolerance Aerospace Part" },
  { src: media.gallery03, alt: "Complex 5-Axis Milling" },
  { src: media.gallery04, alt: "Precision Turning Assembly" },
  { src: media.gallery05, alt: "Custom Aluminum Housing" },
  { src: media.gallery06, alt: "Micro-Machined Medical Device Part" },
  { src: media.gallery07, alt: "Precision Stainless Steel Shaft" },
  { src: media.gallery08, alt: "Multi-Cavity Mold Component" },
  { src: media.gallery09, alt: "CMM Quality Inspection Setup" },
  { src: media.gallery10, alt: "High-Precision RF Shielding Part" },
  { src: media.gallery11, alt: "Surface Ground Titanium Block" },
  { src: media.gallery12, alt: "Custom Engine Prototype Part" },
  { src: media.gallery13, alt: "Precision Machined Assembly" },
];

interface GalleryProps {
  limit?: number;
}

export default function Gallery({ limit }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

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
          {displayedImages.map((img, index) => (
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
              setLightboxIndex(lightboxIndex === 0 ? displayedImages.length - 1 : lightboxIndex - 1);
            }}
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={displayedImages[lightboxIndex].src} alt={displayedImages[lightboxIndex].alt} />
            <div className={styles.caption}>{displayedImages[lightboxIndex].alt}</div>
          </div>
          
          <button 
            className={styles.navBtn} 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex === displayedImages.length - 1 ? 0 : lightboxIndex + 1);
            }}
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}


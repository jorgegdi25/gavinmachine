"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, MapPin, Phone, Mail, Clock, ArrowRight, UploadCloud, ShieldCheck } from "lucide-react";
import styles from "./ContactForm.module.css";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  // Detect redirect back from FormSubmit after successful submission
  useEffect(() => {
    if (searchParams.get("sent") === "true") {
      setIsSuccess(true);
      // Clean up URL without reloading
      window.history.replaceState({}, "", window.location.pathname + "#contact");
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (files.length === 1) {
        setFileName(files[0].name);
      } else {
        setFileName(`${files.length} files selected`);
      }
    } else {
      setFileName(null);
    }
  };

  // The current URL of the site, used for _next redirect
  const siteUrl = typeof window !== "undefined"
    ? `${window.location.origin}${window.location.pathname}?sent=true#contact`
    : "https://gavinmachine.com/?sent=true#contact";

  return (
    <section className={styles.contactSection} id="contact">
      <div className={`container ${styles.container}`}>
        
        {/* Header matching the brand style */}
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>REQUEST A QUOTE</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleDark}>Let&apos;s Build The Right</span><br />
            <span className={styles.titleLight}>Solution For Your Project.</span>
          </h2>
          <p className={styles.subtitle}>
            Most RFQs receive a response within 24 hours. We also offer long-term production scheduling with release programs of up to 12 months.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Form Box */}
          <div className={styles.formBox}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                <CheckCircle size={56} strokeWidth={1.5} color="var(--color-cta)" className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
                <p className={styles.successText}>Thank you for contacting Gavin Machine. We have received your request and will be in touch shortly.</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                action="https://formsubmit.co/Paddy@gqmachine.com"
                method="POST"
                encType="multipart/form-data"
              >
                {/* FormSubmit hidden config fields */}
                <input type="hidden" name="_next" value={siteUrl} />
                <input type="hidden" name="_subject" value="New Quote Request from Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.inputLabel}>Full Name *</label>
                    <input type="text" id="name" name="name" className={styles.input} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.inputLabel}>Company Name</label>
                    <input type="text" id="company" name="company" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.inputLabel}>Email Address *</label>
                    <input type="email" id="email" name="email" className={styles.input} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.inputLabel}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.inputLabel}>Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={styles.textarea}
                    required
                    placeholder="Please describe your project, materials, quantities, etc."
                  ></textarea>
                </div>

                {/* File Upload Box */}
                <div className={styles.formGroup}>
                  <label htmlFor="file" className={styles.inputLabel}>Upload Drawings/Specs (Optional)</label>
                  <div className={styles.fileUploadBox}>
                    <input type="file" id="file" name="attachment" className={styles.fileInput} onChange={handleFileChange} multiple />
                    <div className={styles.fileUploadContent}>
                      {fileName ? (
                        <>
                          <CheckCircle size={32} className={styles.uploadIcon} style={{ color: "#16a34a" }} />
                          <span className={styles.uploadTextMain}>{fileName}</span>
                          <span className={styles.uploadTextSub}>File selected. Click again to change.</span>
                        </>
                      ) : (
                        <>
                          <UploadCloud size={32} className={styles.uploadIcon} />
                          <span className={styles.uploadTextMain}>Click to upload or drag and drop</span>
                          <span className={styles.uploadTextSub}>Any file type accepted (Max 5MB per file)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cloud Link Option */}
                <div className={styles.formGroup}>
                  <label htmlFor="cloudLink" className={styles.inputLabel}>Or Link to CAD Files (Google Drive, WeTransfer, Dropbox)</label>
                  <input
                    type="url"
                    id="cloudLink"
                    name="cloudLink"
                    className={styles.input}
                    placeholder="https://drive.google.com/... or https://we.tl/..."
                  />
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                    Recommended for large files or multiple CAD assemblies.
                  </span>
                </div>

                <div className={styles.privacyNotice}>
                  <ShieldCheck size={16} className={styles.privacyShieldIcon} />
                  <span>
                    By submitting this request, you agree to our{" "}
                    <Link href="/privacy" className={styles.privacyLink} target="_blank">
                      Privacy Policy
                    </Link>
                    . We respect your privacy and never sell or share your data or uploaded files.
                  </span>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  REQUEST A QUOTE <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map Box */}
          <div className={styles.infoBoxWrapper}>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoDesc}>Reach out directly to our engineering team.</p>
              
              <ul className={styles.infoList}>
                <li>
                  <div className={styles.iconCircle}>
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div className={styles.infoText}>
                    <strong>Address</strong>
                    <span>10 Keith Way, Suite #4<br />Hingham, MA 02043</span>
                  </div>
                </li>
                <li>
                  <div className={styles.iconCircle}>
                    <Phone size={20} strokeWidth={2} />
                  </div>
                  <div className={styles.infoText}>
                    <strong>Phone</strong>
                    <a href="tel:+16174628536">(617) 462-8536</a>
                  </div>
                </li>
                <li>
                  <div className={styles.iconCircle}>
                    <Mail size={20} strokeWidth={2} />
                  </div>
                  <div className={styles.infoText}>
                    <strong>Email</strong>
                    <a href="mailto:Paddy@gqmachine.com">Paddy@gqmachine.com</a>
                  </div>
                </li>
                <li>
                  <div className={styles.iconCircle}>
                    <Clock size={20} strokeWidth={2} />
                  </div>
                  <div className={styles.infoText}>
                    <strong>Hours</strong>
                    <span>Mon - Fri: 7:00 AM - 4:30 PM</span>
                  </div>
                </li>
              </ul>

              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.8860714154946!2d-70.9068045233159!3d42.1738739712076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49fbdb4f4bf51%3A0x6b4f707f18fc4a3a!2sGavin%20Machine!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gavin Machine Location"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Wrap with Suspense because useSearchParams requires it in Next.js
export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}

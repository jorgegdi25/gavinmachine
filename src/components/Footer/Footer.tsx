import Link from "next/link";
import { media } from "@/lib/media";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.logo}>
              <img
                src={media.logoFooter}
                alt="Gavin Machine Logo"
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.description}>
              We are a family-owned machine shop specializing in precision CNC
              milling and turning for the most demanding industries.
              Est. 1990.
            </p>
            <div className={styles.socials}>
              <a
                href="https://instagram.com/gq_machine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0396 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.91 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9477 8.01874 11.7977 7.87665 12.63 8.00006C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73516 15.8741 10.5211 16 11.3701Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.listTitle}>Navigation</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/what-we-offer">What We Offer</Link>
              </li>
              <li>
                <Link href="/facilities-equipment">Facilities & Equipment</Link>
              </li>
              <li>
                <Link href="/materials">Materials</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.listTitle}>Services</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/cnc-milling-services">CNC Milling</Link>
              </li>
              <li>
                <Link href="/cnc-turning-services">CNC Turning</Link>
              </li>
              <li>
                <Link href="/what-we-offer#service-details">Prototype &amp; Production</Link>
              </li>
              <li>
                <Link href="/what-we-offer#service-details">Secondary Services</Link>
              </li>
              <li>
                <Link href="/quality-control">Quality Assurance</Link>
              </li>
              <li>
                <Link href="/get-a-quote">Request a Quote</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.listTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>10 Keith Way, Suite #4</li>
              <li>Hingham, MA 02043</li>
              <li className={styles.mt}>
                <a href="tel:+16174628536">(617) 462-8536</a>
              </li>
              <li>
                <a href="mailto:Paddy@gqmachine.com">Paddy@gqmachine.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Gavin Enterprises Inc. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

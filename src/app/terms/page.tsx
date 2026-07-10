import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Gavin Machine",
  description: "Terms of Service for Gavin Machine, a precision machining company in Hingham, MA.",
};

export default function TermsOfService() {
  return (
    <>
      <div className="section section--dark" style={{ paddingTop: "140px", paddingBottom: "60px" }}>
        <div className="container">
          <h1 style={{ color: "var(--color-white)", marginBottom: "var(--space-md)" }}>Terms of Service</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", fontSize: "1.1rem" }}>
            The terms that govern your use of the Gavin Machine website and services.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            By using this website and requesting services from Gavin Machine, you agree to the following terms.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Quotes &amp; Orders</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            All quotes are estimates based on the information and files provided at the time of request. Final
            pricing, lead times, and specifications are confirmed in a written quotation or order acknowledgment.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Intellectual Property</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            Drawings, models, and specifications you submit remain your property. We use them only to prepare
            quotes and manufacture your parts, and we treat them as confidential.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Website Use</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            The content on this website is provided for general information. We make no warranties regarding the
            completeness or accuracy of the information and may update it at any time.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Contact Us</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:info@gavinmachine.com" style={{ color: "var(--color-cta)", fontWeight: 600 }}>info@gavinmachine.com</a>{" "}
            or (617) 462-8536.
          </p>

          <p style={{ color: "var(--color-text-light)", fontSize: "0.9rem", marginTop: "var(--space-2xl)" }}>
            This page is a general template and should be reviewed by legal counsel before publication.
          </p>
        </div>
      </section>
    </>
  );
}

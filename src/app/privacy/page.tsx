import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Gavin Machine",
  description: "Privacy Policy for Gavin Machine, a precision machining company in Hingham, MA.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="section section--dark" style={{ paddingTop: "140px", paddingBottom: "60px" }}>
        <div className="container">
          <h1 style={{ color: "var(--color-white)", marginBottom: "var(--space-md)" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", fontSize: "1.1rem" }}>
            How Gavin Machine collects, uses, and protects the information you share with us.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            Gavin Machine (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect when you use our website or request a quote, and how we handle it.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Information We Collect</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            When you submit a quote request or contact form, we collect the details you provide — such as your
            name, company, email address, phone number, project details, and any files you upload. We use this
            information solely to respond to your inquiry and provide our services.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>How We Use Your Information</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            We use the information you provide to prepare quotes, communicate about your project, and fulfill
            orders. We do not sell or rent your personal information to third parties.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Data Security</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            We take reasonable measures to protect the information you share with us. However, no method of
            transmission over the internet is completely secure.
          </p>

          <h2 style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-xl)" }}>Contact Us</h2>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:Paddy@gqmachine.com" style={{ color: "var(--color-cta)", fontWeight: 600 }}>Paddy@gqmachine.com</a>{" "}
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

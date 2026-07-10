import Hero from "@/components/Hero/Hero";
import KeyStats from "@/components/KeyStats/KeyStats";
import AboutSummary from "@/components/AboutSummary/AboutSummary";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Industries from "@/components/Industries/Industries";
import Gallery from "@/components/Gallery/Gallery";
import FAQ from "@/components/FAQ/FAQ";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyStats />
      <AboutSummary />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Gallery />
      <FAQ />
      <ContactForm />
    </>
  );
}

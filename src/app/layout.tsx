import type { Metadata } from "next";
import { Open_Sans, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gavin Machine | Precision Machining Services | Hingham, MA",
    template: "%s | Gavin Machine",
  },
  description:
    "Gavin Machine is a family-owned precision machining company in Hingham, MA. 30+ years of experience in CNC milling and turning for medical, aerospace, defense, and semiconductor industries.",
  keywords: [
    "precision machining",
    "CNC milling",
    "CNC turning",
    "Hingham MA",
    "machining services",
    "medical machining",
    "aerospace machining",
    "Gavin Machine",
    "GQ Machine",
  ],
  openGraph: {
    title: "Gavin Machine | Precision Machining Services",
    description:
      "Family-owned precision machining company in Hingham, MA. 30+ years serving medical, aerospace, defense, and semiconductor industries.",
    url: "https://www.gavinmachine.com",
    siteName: "Gavin Machine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavin Machine | Precision Machining Services",
    description:
      "Family-owned precision machining company in Hingham, MA. 30+ years serving medical, aerospace, defense, and semiconductor industries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${roboto.variable} ${robotoSlab.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

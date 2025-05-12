import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vultamin Gold | Vultus Life Sciences",
  icons: {
    icon: "/veltus.ico", // adjust the path and name if needed
  },
  description:
    "Explore Vultamin Gold, Omega-3, Multivitamins, Vullax, and Lactulose Solution by Vultus Life Sciences. Your trusted health companion.",
  keywords: [
    "Vultamin-gold",
    "Vultus life sciences",
    "Omega-3",
    "Multivitamins",
    "Vullax",
    "Lactulose solution",
  ],
  openGraph: {
    title: "Vultamin Gold | Vultus Life Sciences",
    description:
      "Buy premium supplements including Omega-3, Multivitamins, and more. Trusted by thousands worldwide.",
    url: "https://vultuslifesciences.com", // ✅ your actual domain
    siteName: "Vultus Life Sciences",
    images: [
      {
        url: "https://vultuslifesciences.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdn633knvv%2Fimage%2Fupload%2Fv1740835035%2Flogo-1-Photoroom_j81u7m.png&w=256&q=75", // ✅ Replace with real image
        width: 1200,
        height: 630,
        alt: "Vultamin Gold and other supplements",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://vultuslifesciences.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#1e293b"
              fillOpacity="1"
              d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10">
          <Navbar />
        </div>

        <main className="relative z-10">{children}</main>

        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}

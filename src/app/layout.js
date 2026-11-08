// In src/app/layout.js
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  metadataBase: new URL("https://portfolio-neon-iota-94.vercel.app"),
  title: "Muhammad Bilal | IT Project Coordinator · GovTech Digital Transformation",
  description: "Portfolio of Muhammad Bilal — IT Project Coordinator / Program Officer at PITB delivering GovTech digital transformation (LIMS, QMS, HIMS, ERP). Builder of React/Node.js apps, AI-powered tools, and Playwright QA automation.",
  openGraph: {
    title: "Muhammad Bilal | IT Project Manager · GovTech Digital Transformation",
    description: "Portfolio — GovTech projects (LIMS, HIMS, QMS, ERP), automation demos, and Excel training for IT project management.",
    url: "https://portfolio-neon-iota-94.vercel.app",
    siteName: "Muhammad Bilal — Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal — IT Project Manager, GovTech Digital Transformation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal | IT Project Manager · GovTech Digital Transformation",
    description: "Portfolio — GovTech projects (LIMS, HIMS, QMS, ERP), automation demos, and Excel training for IT project management.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#11071F' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body style={{ 
        backgroundColor: '#11071F', 
        margin: 0, 
        padding: 0,
        overflowX: 'hidden' 
      }}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
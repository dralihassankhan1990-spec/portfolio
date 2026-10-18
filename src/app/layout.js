// In src/app/layout.js
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: "Muhammad Bilal | IT Project Coordinator · GovTech Digital Transformation",
  description: "Portfolio of Muhammad Bilal — IT Project Coordinator / Program Officer at PITB delivering GovTech digital transformation (LIMS, QMS, HIMS, ERP). Builder of React/Node.js apps, AI-powered tools, and Playwright QA automation.",
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
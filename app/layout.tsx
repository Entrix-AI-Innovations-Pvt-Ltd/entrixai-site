import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Entrix AI | CallKeep AI Receptionist",
  description: "Entrix AI builds practical AI tools for businesses. CallKeep is an AI receptionist that answers calls and captures leads for service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Entrix AI",
              url: "https://entrixai.com",
              email: "hello@entrixai.com",
              description:
                "Entrix AI builds practical AI tools for businesses. Its first product, CallKeep, is an AI receptionist that answers customer calls and captures leads for service businesses.",
              founder: {
                "@type": "Person",
                name: "Antriksh Sharma"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}

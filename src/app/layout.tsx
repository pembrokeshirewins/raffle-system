// import localFont from "next/font/local";
import "./globals.css";
 
// Using system fonts instead of local fonts to avoid missing file issues
const geistSans = {
  variable: "--font-geist-sans",
};
const geistMono = {
  variable: "--font-geist-mono",
};
 
export const metadata: Metadata = {
  title: "Digital Raffle Tickets | RaffleSystem - Just 2p Per Ticket | UK's #1 R
affle Management Software",
  description: "Revolutionary digital raffle ticket system for charities, school
s & community groups. Physical tickets meet digital convenience. Just 2p per tic
ket, no setup fees, no contracts. Start selling raffle tickets online and in-per
son today.",
  keywords: [
    // Primary Keywords
    "digital raffle tickets",
    "raffle ticket system",
    "online raffle tickets",
    "raffle management software",
    "charity raffle tickets",
    "community raffle system",
 
    // Long-tail Keywords
    "digital raffle ticket sales",
    "online raffle ticket platform",
    "raffle ticket booking system",
    "charity fundraising software",
    "community event ticket sales",
    "raffle ticket management system",
    "digital raffle platform UK",
    "online raffle system for charities",
 
    // Location-based
    "UK raffle ticket system",
    "Wales raffle tickets",
    "England charity raffle software",
    "Scotland community raffle platform",
    "Northern Ireland raffle system",
 
    // Industry-specific
    "school raffle tickets",
    "PTA raffle system",
    "sports club raffle tickets",
    "carnival raffle management",
    "church raffle software",
    "fundraising event tickets",
 
    // Feature-based
    "SMS raffle confirmations",
    "mobile raffle ticket sales",
    "cash and card raffle payments",
    "raffle ticket tracking",
    "sequential raffle tickets",
    "physical raffle tickets digital",
 
    // Problem-solving
    "cheap raffle ticket system",
    "affordable raffle software",
    "easy raffle ticket sales",
    "simple raffle management",
    "no setup fee raffle system",
    "low cost raffle platform",
 
    // Competitor alternatives
    "alternative to expensive raffle software",
    "cheaper than traditional raffle systems",
    "better than paper raffle tickets",
    "modern raffle ticket solution",
 
    // Action-oriented
    "sell raffle tickets online",
    "manage raffle ticket sales",
    "track raffle ticket buyers",
    "organize charity raffle",
    "run community raffle",
    "digital raffle fundraising"
  ].join(", "),
  authors: [{ name: "RaffleSystem" }],
  creator: "RaffleSystem",
  publisher: "RaffleSystem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rafflesystem.co.uk',
    siteName: 'RaffleSystem',
    title: 'Digital Raffle Tickets | UK's #1 Raffle Management Software - Just
2p Per Ticket',
    description: 'Revolutionary digital raffle ticket system for UK charities, s
chools & community groups. Physical tickets meet digital convenience. Just 2p pe
r ticket, no setup fees.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RaffleSystem - Digital Raffle Tickets Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Raffle Tickets | RaffleSystem - Just 2p Per Ticket',
    description: 'Revolutionary digital raffle ticket system for UK charities &
community groups. Just 2p per ticket, no setup fees, no contracts.',
    images: ['/twitter-image.jpg'],
    creator: '@rafflesystem',
  },
  alternates: {
    canonical: 'https://rafflesystem.co.uk',
  },
  metadataBase: new URL('https://raffle-system-lake.vercel.app'),
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.country" content="UK" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
 
 
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`
}>
        {children}
      </body>
    </html>
  );
}root@5aaa18ef-dd89-4e8f-bb97-15568485d7b3:/workspace#

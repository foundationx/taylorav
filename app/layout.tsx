import type { Metadata } from 'next';
import Script from 'next/script';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import { CookieConsent } from '../components/CookieConsent';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://taylorav.com';
const defaultDescription =
  'Taylor AV delivers AV production leadership, rental-grade equipment, and staging crews for Salt Lake City and the Wasatch Front.';
const ogImage = `${siteUrl}/assets/hero-concert.jpg`;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#organization`,
      name: 'Taylor AV',
      url: siteUrl,
      image: ogImage,
      logo: `${siteUrl}/assets/logo.png`,
      telephone: '+1 (801) 520-1699',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12963 Redwood Rd',
        addressLocality: 'Riverton',
        addressRegion: 'UT',
        postalCode: '84065',
        addressCountry: 'US'
      },
      areaServed: ['Salt Lake City', 'Ogden', 'Provo', 'Park City', 'Utah County', 'Las Vegas'],
      sameAs: [
        'https://www.instagram.com/taylorav',
        'https://www.linkedin.com/company/taylor-av',
        'https://www.youtube.com/@taylorav'
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '08:00',
          closes: '18:00'
        }
      ]
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}#av-service`,
      serviceType: 'Audio visual production, rentals, staging, and crews',
      provider: { '@id': `${siteUrl}#organization` },
      areaServed: ['Salt Lake City', 'Ogden', 'Provo', 'Park City', 'Utah County', 'Las Vegas'],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        areaServed: 'Salt Lake City Metro',
        url: siteUrl
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Taylor AV | Salt Lake City AV production, rentals & staging',
    template: '%s | Taylor AV'
  },
  description: defaultDescription,
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png'
  },
  keywords: [
    'Salt Lake City AV production',
    'Utah event staging',
    'audio visual rentals',
    'Wasatch Front AV company',
    'event lighting and sound'
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Taylor AV',
    title: 'Taylor AV | Salt Lake City AV production, rentals & staging',
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Taylor AV lighting and stage rig from a live production'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taylor AV | Salt Lake City AV production, rentals & staging',
    description: defaultDescription,
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  category: 'Business',
  authors: [{ name: 'Taylor AV' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];' }} />
        {gaMeasurementId ? (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <Script id="gtag-init">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname
                });
              `}
            </Script>
          </>
        ) : null}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://www.makazifumigation.co.tz'),
  title: {
    default: 'Makazi Fumigation & Pest Control',
    template: '%s | Makazi Fumigation & Pest Control',
  },
  description:
    'Premium fumigation and pest control services for homes and businesses across Tanzania. Makazi Fumigation provides certified, eco-conscious pest management that protects people, property, and brand reputation.',
  keywords: [
    'fumigation',
    'pest control',
    'Tanzania',
    'Dar es Salaam',
    'Morogoro',
    'termite control',
    'rodent management',
    'disinfection',
    'pest management',
  ],
  authors: [{ name: 'Makazi Fumigation' }],
  openGraph: {
    title: 'Makazi Fumigation & Pest Control',
    description:
      'Premium fumigation and pest control services for homes and businesses across Tanzania.',
    url: 'https://www.makazifumigation.co.tz',
    siteName: 'Makazi Fumigation & Pest Control',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Makazi Fumigation & Pest Control',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makazi Fumigation & Pest Control',
    description:
      'Certified fumigation experts providing safe pest control solutions throughout Tanzania.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.makazifumigation.co.tz',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

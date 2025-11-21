import Link from 'next/link';

const services = [
  'Residential fumigation',
  'Commercial pest control',
  'Termite inspection and treatment',
  'Rodent management',
  'Disinfection & sanitation',
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

const connectLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/255685482846',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/makazifumigation',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/makazifumigation',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f6f6f6] border-t border-[#e7e7e7]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#5bad6a]/10 text-[#5bad6a] text-sm font-bold">
              Makazi Fumigation
            </div>
            <p className="text-[#6d6d6d] max-w-sm">
              Fumigation and pest control specialists helping homes and businesses stay healthy and safe.
            </p>
            <div className="space-y-2 text-sm text-[#6d6d6d]">
              <a
                href="mailto:business@makazifumigation.co.tz"
                className="block hover:text-[#5bad6a] transition-colors"
              >
                ✉️ business@makazifumigation.co.tz
              </a>
              <a
                href="tel:+255685482846"
                className="block hover:text-[#5bad6a] transition-colors"
              >
                📞 +255 685 482 846
              </a>
              <p>📍 Morogoro, Dar es Salaam</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#6d6d6d] hover:text-[#5bad6a] transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Company</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#6d6d6d] hover:text-[#5bad6a] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Connect</h3>
            <nav className="space-y-2" aria-label="Social links">
              {connectLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#6d6d6d] hover:text-[#5bad6a] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-[#e7e7e7] text-center text-sm text-[#6d6d6d]">
          <p>© {currentYear} Makazi Fumigation &amp; Pest Control.</p>
          <p className="mt-1">Eco-conscious pest solutions across Tanzania.</p>
        </div>
      </div>
    </footer>
  );
}


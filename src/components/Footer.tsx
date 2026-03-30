import Link from "next/link";

const navLinks = ["About", "Services", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-text py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold text-white mb-2">
              Gerik Dental
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              Modern, high-quality dentistry for
              <br />
              Alaskans of all ages.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-5">
              Contact
            </p>
            <address className="not-italic space-y-2 text-sm text-white/55">
              <p>1305 21st Ave, Suite 102</p>
              <p>Fairbanks, AK 99701</p>
              <a
                href="tel:9074565665"
                className="block hover:text-white transition-colors duration-200"
              >
                (907) 456-5665
              </a>
              <a
                href="mailto:info@gerikdental.com"
                className="block hover:text-white transition-colors duration-200"
              >
                info@gerikdental.com
              </a>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/25 text-xs text-center">
            &copy; 2025 Gerik Dental. All rights reserved. &middot; Fairbanks, Alaska
          </p>
        </div>
      </div>
    </footer>
  );
}

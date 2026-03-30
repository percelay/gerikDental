import { MapPin, Phone, Printer, Mail, Clock } from "lucide-react";

type ContactItem = {
  icon: typeof Phone;
  label: string;
  value: string;
  sub?: string;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "1305 21st Ave, Suite 102",
    sub: "Fairbanks, AK 99701",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(907) 456-5665",
    href: "tel:9074565665",
  },
  {
    icon: Printer,
    label: "Fax",
    value: "(907) 456-1753",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gerikdental.com",
    href: "mailto:info@gerikdental.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday (Variable)",
    sub: "7:30 A.M. – 3:30 P.M.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: headline */}
          <div>
            <p className="text-accent-light text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              We&rsquo;re Here
              <br />
              For Your Family
            </h2>
            <p className="text-primary-foreground/65 text-lg leading-relaxed">
              Our team is ready to provide you and your family with modern,
              high-quality dental care in a welcoming environment.
            </p>
          </div>

          {/* Right: contact details */}
          <div className="space-y-7">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-primary-foreground/45 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary-foreground font-medium hover:text-accent-light transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                    {item.sub && (
                      <p className="text-primary-foreground/60 text-sm mt-0.5">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

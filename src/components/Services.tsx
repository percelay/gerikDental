import {
  ShieldCheck,
  Heart,
  Layers,
  Crown,
  Printer,
  Activity,
  Anchor,
  AlignJustify,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
};

const services: Service[] = [
  {
    icon: ShieldCheck,
    title: "Adult Dental Services",
    subtitle: "Practical And Modern",
    description:
      "No surprises; just quality dentistry. We offer a variety of general adult dental services including exams, fillings, crowns, dentures, root canals, extractions, implants, invisalign, and laser drill-free dentistry. Options for sedation in the office and at Fairbanks Memorial Hospital are also available.",
  },
  {
    icon: Heart,
    title: "Pediatric Dental Care",
    description:
      "Happy kids and good experiences are important! Our location has provided pediatric dental care since 1981. We offer virtually every service possible for kids of all ages such as exams, cleanings, sealants, fillings, tooth-colored or traditional stainless steel crowns/caps, extractions, space maintainers, SDF, frenectomies, and more.",
  },
  {
    icon: Layers,
    title: "Fillings",
    description:
      "We have a variety of high-quality materials used to fill or repair teeth, including tooth-colored restorations.",
  },
  {
    icon: Crown,
    title: "Crowns/Bridges",
    description:
      "Newer, stronger, bio-compatible and more natural looking/feeling/fitting materials are available, as well as traditional options such as gold.",
  },
  {
    icon: Printer,
    title: "Dentures",
    description:
      "We can fabricate both full dentures for patients without teeth, and partial dentures. We utilize digital denture scanning/development and 3D printing technology to help us shorten the process and deliver better results in 2–3 appointments over 3–14 days.",
  },
  {
    icon: Activity,
    title: "Root Canals",
    description:
      "Modern 3D imaging with file, irrigation, and bio-ceramic sealer technology allows us to thoroughly clean and seal a tooth better, faster, and more predictably better than ever.",
  },
  {
    icon: Anchor,
    title: "Extractions & Implants",
    description:
      'We can extract virtually any tooth in adults and children, including 3rd molars ("wisdom teeth"). Dental implants are designed to replace single or multiple missing teeth, or even support an existing denture.',
  },
  {
    icon: AlignJustify,
    title: "Invisalign",
    description:
      "Invisalign uses a series of invisible, removable, and comfortable aligners made with 3D computer imaging technology. As a Certified Invisalign Provider, we are happy to complete a free evaluation.",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    description:
      "Our Fotona Lightwalker hard/soft tissue dental laser can carefully and quickly remove decay or defective tooth colored fillings in a manner that is safer and more controlled than a traditional dental drill, offering drill-free and anesthetic-free options.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-surface rounded-2xl p-8 border border-border-subtle transition-all duration-300 hover:shadow-lg hover:border-border"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/18">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-text mb-1 leading-snug">
                  {service.title}
                </h3>

                {/* Optional subtitle */}
                {service.subtitle && (
                  <p className="text-accent text-xs font-medium uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mt-2">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

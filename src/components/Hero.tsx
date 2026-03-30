import Image from "next/image";
import Link from "next/link";
import ToothLogo from "@/components/ToothLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Alaska 6a.jpg"
          alt="Alaska landscape"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay: darker left (text legibility) → lighter right (reveals landscape) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/72 to-primary/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">

          {/* Dental identity badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <ToothLogo className="w-5 h-5" color="white" />
            <span className="text-white text-xs font-medium tracking-[0.2em] uppercase">
              Fairbanks, Alaska &middot; Est. 2014
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Adult Dental Services,
            <br />
            <span className="text-accent-light">Practical And Modern</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-3 max-w-lg">
            No surprises; just quality dentistry. Exams, fillings, crowns, dentures,
            root canals, extractions, implants, Invisalign, and laser drill-free dentistry.
          </p>
          <p className="text-sm text-white/45 leading-relaxed mb-10 max-w-md">
            We are a close-knit team &mdash; we&rsquo;ll treat you like family.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#about"
              className="px-8 py-4 bg-white text-primary text-sm font-semibold rounded transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              Read More About Us!
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-white/60 text-white text-sm font-semibold rounded transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

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
          <p className="text-accent-light text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Gerik Dental &middot; Fairbanks, Alaska
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
            Family
            <br />
            Matters
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
            We are a close-knit team; we&rsquo;ll treat you like family.
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

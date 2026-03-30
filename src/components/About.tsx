import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Practice Overview ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/officestaff2019final.jpg"
                alt="Gerik Dental team"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Decorative corner block */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 rounded-2xl bg-accent/10 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Our Practice
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text leading-tight mb-8">
              Modern Dentistry,
              <br />
              Family Care
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Dr. Gerik assumed the long-standing dental practice of Dr. Jon
                Tanner in May of 2014. Our staff strives to provide modern,
                high-quality dentistry to Alaskans of all ages in the same
                gentle manner we would like to have our own family treated.
              </p>
              <p>
                Dr. Gerik believes in using the most current and proven
                materials and techniques available in dentistry, utilizing
                state-of-the-art technology such as digital imaging and
                scanning, laser (drill-free) dentistry, modern natural-looking
                bio-compatible materials, and 3D printing.
              </p>
            </div>
          </div>
        </div>

        {/* ── Dr. Gerik Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-4">
              Meet the Doctor
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text leading-tight mb-8">
              Dr. Jonathan J. Gerik
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Dr. Jonathan J. Gerik is originally from central Texas. He
                graduated from Texas A&amp;M University in 2005 with a degree
                in Biomedical Science and graduated from Baylor College of
                Dentistry in 2009.
              </p>
              <p>
                Dr. Gerik joined the United States Air Force while attending
                Baylor and completed a General Practice Residency at Keesler
                Air Force Base in 2010. He completed his active duty commitment
                at Eielson Air Force Base and continues to serve part-time with
                the Alaska Air National Guard 168th Medical Group.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[360px] md:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/building.jpg"
                alt="Gerik Dental office building"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-28 h-28 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  quick: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ],
  services: [
    { href: "/services/construction-manpower-supply", label: "Construction Manpower Supply" },
    { href: "/services/marine-repair-and-workshop-manpower-supply", label: "Marine Repair & Workshop Manpower Supply" },
    { href: "/services/maintenance-company-staffing-solutions", label: "Maintenance Staffing Solutions" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#070B14] border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,83,0.03),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 -ml-8">
              <Image
                src="/logo-ats.png"
                alt="Al Areeq Technical Services"
                width={280}
                height={90}
                priority
                className="h-20  object-cover"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Al Areeq Facilities Management Services is a trusted manpower supply company in the UAE, serving construction, marine, and maintenance industries.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted">
                  Office no 202, Coastal Building, Al Qusais 2, Dubai, United Arab Emirates
                </span>
              </li>
              <li>
                <a href="tel:+971568126777" className="flex gap-3 text-sm text-muted hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  +971 56 812 6777
                </a>
                <a href="tel:+97145585725" className="flex gap-3 text-sm text-muted hover:text-primary transition-colors relative left-8">
                  {/* <Phone className="w-5 h-5 text-primary shrink-0" /> */}
                  +971 4 558 5725

                </a>
              </li>
              <li>
                <a href="mailto:Infoalareeqtech@gmail.com" className="flex gap-3 text-sm text-muted hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  Infoalareeqtech@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["facebook", "x", "linkedin", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
                >
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Al Areeq Facility Management Services. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Powered by{" "}
            <a href="https://randctechnologies.com" className="text-primary hover:underline">
              R&C Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

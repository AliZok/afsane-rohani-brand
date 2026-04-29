import Link from "next/link"
import { Scale, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Residential Real Estate",
  "Contract Review",
  "Property Disputes",
  "Title Protection",
  "Landlord-Tenant Law",
  "Legal Consultation",
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-secondary-foreground leading-tight">BALANCE</span>
                <span className="text-[10px] text-secondary-foreground/70 tracking-wider">LEGAL SERVICES</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Professional legal services specializing in residential and property law. 
              Dedicated to protecting your rights and interests.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+37477072177" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  +374 77 072 177
                </a>
              </li>
              <li>
                <a href="mailto:contact@BALANCE.com" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  contact@BALANCE.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                  <MapPin className="h-4 w-4" />
                  Yerevan, Armenia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/70 text-sm">
              © {new Date().getFullYear()} BALANCE Legal Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

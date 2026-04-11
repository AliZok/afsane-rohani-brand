"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+374 77 072 177",
    href: "tel:+37477072177",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@atbeptka.com",
    href: "mailto:contact@atbeptka.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Yerevan, Armenia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM - 6PM",
    href: "#",
  },
]

export function Contact() {

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
                Schedule Your Free Consultation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have questions about your legal matter? Contact us today for a free initial consultation. 
                We&apos;re here to help you understand your options and protect your interests.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with us on social media</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

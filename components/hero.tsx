import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Scale, Building, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Scale className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Legal Partner</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                Expert Legal Solutions for{" "}
                <span className="text-primary">Residential Matters</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                With years of experience in residential and property law, I provide dedicated legal counsel 
                to protect your interests and guide you through complex legal processes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                +374 77 072 177
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Cases Resolved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Logo */}
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                    <Scale className="h-12 w-12 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded">
                      <span className="font-semibold tracking-wider">ATBEPTKA</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif">
                      <span className="text-foreground">Afsane </span>
                      <span className="text-primary font-bold">Rohani</span>
                    </h3>
                    <p className="text-muted-foreground">Legal Advisor</p>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex gap-4">
                    <a href="tel:+37477072177" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                      </svg>
                    </a>
                  </div>

                  <p className="text-lg font-medium text-foreground">0037477072177</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Real Estate</p>
                    <p className="text-xs text-muted-foreground">Specialized</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Protected</p>
                    <p className="text-xs text-muted-foreground">Your Rights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

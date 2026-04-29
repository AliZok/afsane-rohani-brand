import { Home, FileText, Scale, Shield, Building2, Gavel, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Home,
    title: "Residential Real Estate",
    description: "Complete legal support for buying, selling, and managing residential properties with thorough due diligence.",
  },
  {
    icon: FileText,
    title: "Contract Review",
    description: "Expert analysis and drafting of real estate contracts, lease agreements, and property documents.",
  },
  {
    icon: Scale,
    title: "Property Disputes",
    description: "Resolution of boundary disputes, easements, and neighbor conflicts through negotiation or litigation.",
  },
  {
    icon: Shield,
    title: "Title Protection",
    description: "Comprehensive title searches and insurance to protect your property investment.",
  },
  {
    icon: Building2,
    title: "Landlord-Tenant Law",
    description: "Legal guidance for both landlords and tenants on rights, obligations, and dispute resolution.",
  },
  {
    icon: Gavel,
    title: "Zoning & Permits",
    description: "Navigate zoning regulations, building permits, and land use requirements with expert guidance.",
  },
  {
    icon: Users,
    title: "Family Property",
    description: "Assistance with property division, inheritance matters, and family estate planning.",
  },
  {
    icon: Briefcase,
    title: "Commercial Advisory",
    description: "Legal counsel for commercial property transactions and business real estate matters.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              Comprehensive Legal Services for Your Needs
            </h2>
            <p className="text-muted-foreground">
              From property transactions to dispute resolution, we offer a full range of legal services 
              to protect your interests and guide you through complex legal matters.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} animation="fade-up" delay={200 + index * 100}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

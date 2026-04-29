import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const expertiseAreas = [
  {
    title: "Residential Transactions",
    description: "Expert handling of home purchases, sales, and transfers with meticulous attention to detail.",
    features: ["Purchase Agreements", "Closing Services", "Title Transfer", "Mortgage Documentation"],
  },
  {
    title: "Property Law",
    description: "Comprehensive legal support for all property-related matters and disputes.",
    features: ["Land Use Rights", "Easements", "Boundary Disputes", "Property Division"],
  },
  {
    title: "Legal Consultation",
    description: "Personalized legal advice tailored to your specific situation and goals.",
    features: ["Risk Assessment", "Legal Strategy", "Document Review", "Compliance Guidance"],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollAnimation animation="fade-right" delay={100}>
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up" delay={200}>
                <div>
                  <p className="text-primary-foreground/80 font-medium mb-2">Areas of Expertise</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4 text-balance">
                    Specialized Knowledge in Residential & Property Law
                  </h2>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    With focused expertise in residential and property law, I bring deep knowledge 
                    and proven experience to every case. My specialized practice ensures you receive 
                    the most relevant and effective legal counsel.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={300}>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Learn More About Our Expertise
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Expertise Cards */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <ScrollAnimation key={area.title} animation="fade-up" delay={300 + index * 100}>
                  <div className="bg-secondary-foreground/10 backdrop-blur rounded-xl p-6 border border-secondary-foreground/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-semibold text-secondary-foreground">{area.title}</h3>
                        <p className="text-secondary-foreground/80 text-sm leading-relaxed">{area.description}</p>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {area.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-xs text-secondary-foreground/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

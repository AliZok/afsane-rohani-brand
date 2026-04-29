import { CheckCircle, Award, Users, BookOpen } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const highlights = [
  "Licensed Legal Professional",
  "Certified Property Law Specialist",
  "Member of Bar Association",
  "Continuous Legal Education",
]

const stats = [
  { icon: Award, label: "Awards", value: "12+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: BookOpen, label: "Publications", value: "25+" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <ScrollAnimation animation="fade-right" delay={100}>
            <div className="relative">
              <ScrollAnimation animation="zoom-in" delay={200}>
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                  <img 
                    src="/images/some.png" 
                    alt="Alex Jones - Legal Advisor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollAnimation>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={stat.label} animation="fade-up" delay={300 + index * 100}>
                    <div className="bg-card rounded-xl p-4 shadow-lg border border-border text-center">
                      <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="space-y-6 lg:pl-8">
              <ScrollAnimation animation="fade-up" delay={300}>
                <div>
                  <p className="text-primary font-medium mb-2">About Me</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
                    Dedicated to Protecting Your Legal Rights
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={400}>
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of experience in residential and property law, I have dedicated my career 
                  to providing exceptional legal services to individuals and families navigating complex legal matters. 
                  My approach combines thorough legal expertise with compassionate client care.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={500}>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that every client deserves personalized attention and a strategic approach tailored 
                  to their unique circumstances. Whether you&apos;re buying your first home, resolving a property dispute, 
                  or need guidance on residential matters, I&apos;m here to help.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={600}>
                <div className="space-y-3 pt-4">
                  {highlights.map((highlight, index) => (
                    <ScrollAnimation key={highlight} animation="fade-right" delay={700 + index * 50}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{highlight}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={900}>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">15+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Years of Legal Practice</p>
                      <p className="text-sm text-muted-foreground">Serving clients with excellence</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

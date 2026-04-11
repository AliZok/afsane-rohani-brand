import { CheckCircle, Award, Users, BookOpen } from "lucide-react"

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
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-serif font-bold text-primary-foreground">AR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Afsane Rohani</h3>
                    <p className="text-muted-foreground">Legal Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 shadow-lg border border-border text-center">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 lg:pl-8">
            <div>
              <p className="text-primary font-medium mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
                Dedicated to Protecting Your Legal Rights
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience in residential and property law, I have dedicated my career 
              to providing exceptional legal services to individuals and families navigating complex legal matters. 
              My approach combines thorough legal expertise with compassionate client care.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I believe that every client deserves personalized attention and a strategic approach tailored 
              to their unique circumstances. Whether you&apos;re buying your first home, resolving a property dispute, 
              or need guidance on residential matters, I&apos;m here to help.
            </p>

            <div className="space-y-3 pt-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

const testimonials = [
  {
    name: "Maria Petrosyan",
    role: "Home Buyer",
    content: "Alex made our first home purchase a smooth and stress-free experience. Her expertise in residential law was invaluable, and she guided us through every step with patience and professionalism.",
    rating: 5,
  },
  {
    name: "David Sargsyan",
    role: "Property Investor",
    content: "I've worked with many attorneys, but Alex's attention to detail and knowledge of property law is exceptional. She protected my interests in a complex commercial deal.",
    rating: 5,
  },
  {
    name: "Anna Hovhannisyan",
    role: "Landlord",
    content: "Excellent service in resolving a difficult tenant dispute. Alex's legal strategy was spot-on, and she achieved a favorable outcome while maintaining professionalism throughout.",
    rating: 5,
  },
  {
    name: "Robert Grigoryan",
    role: "Real Estate Developer",
    content: "Alex has been our go-to legal advisor for all property matters. Her expertise in zoning and permits has been crucial for our development projects.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
              their experience working with BALANCE Legal Services.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.name} animation="fade-up" delay={200 + index * 100}>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                      <div className="pt-2 border-t border-border">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

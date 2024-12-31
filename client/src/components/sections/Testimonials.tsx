import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Cohen",
    role: "Business Executive",
    content: "The level of service provided by Elite Concierge is simply outstanding. Their attention to detail and professionalism is unmatched.",
  },
  {
    name: "Sarah Mitchell",
    role: "Event Planner",
    content: "Working with Elite Concierge has elevated our events to new heights. Their network and resources are truly exceptional.",
  },
  {
    name: "Michael Bloomberg",
    role: "Private Collector",
    content: "Their expertise in luxury services has made every experience memorable. I wouldn't trust anyone else with my requirements.",
  },
];

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif gold-text mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what our esteemed clients have to say about their experiences
              with our premium concierge services.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/5 backdrop-blur">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-[#B8860B] mb-4" />
                      <p className="text-muted-foreground mb-4">
                        {testimonial.content}
                      </p>
                      <div>
                        <p className="font-serif text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
};

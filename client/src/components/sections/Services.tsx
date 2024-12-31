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
import { Plane, Car, Ship, CalendarClock } from "lucide-react";

const services = [
  {
    icon: Plane,
    imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b",
    translationKey: "services.privateJets"
  },
  {
    icon: Car,
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    translationKey: "services.luxuryCars"
  },
  {
    icon: Ship,
    imageUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    translationKey: "services.yachts"
  },
  {
    icon: CalendarClock,
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    translationKey: "services.events"
  }
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gold-text">
            {t("services.title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                  <div className="relative group h-[400px] overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <service.icon className="h-6 w-6 text-[#B8860B]" />
                        <h3 className="text-2xl font-serif text-white">
                          {t(`${service.translationKey}.title`)}
                        </h3>
                      </div>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t(`${service.translationKey}.description`)}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white" />
            <CarouselNext className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
};
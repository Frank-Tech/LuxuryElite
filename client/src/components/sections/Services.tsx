import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Plane, Car, Ship, CalendarClock } from "lucide-react";

const services = [
  {
    icon: Plane,
    imageUrl: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5",
    translationKey: "services.privateJets"
  },
  {
    icon: Car,
    imageUrl: "https://images.unsplash.com/photo-1602632066313-a8eef289f41f",
    translationKey: "services.luxuryCars"
  },
  {
    icon: Ship,
    imageUrl: "https://images.unsplash.com/photo-1491835236783-61f0a09f4e15",
    translationKey: "services.yachts"
  },
  {
    icon: CalendarClock,
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    translationKey: "services.events"
  }
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gold-text">
            {t("services.title")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="service-card overflow-hidden bg-white/5 backdrop-blur">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                />
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <service.icon className="h-5 w-5 gold-text" />
                    <h3 className="text-xl font-serif">
                      {t(`${service.translationKey}.title`)}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(`${service.translationKey}.description`)}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

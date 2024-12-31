import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div
              className="h-[600px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1498887960847-2a5e46312788')",
              }}
            />
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif gold-text">
                Luxury Without Compromise
              </h2>
              <p className="text-lg text-muted-foreground">
                With decades of experience in luxury concierge services, we pride
                ourselves on delivering unparalleled experiences to our
                distinguished clientele. Our commitment to excellence and attention
                to detail ensures that every request is handled with the utmost
                care and precision.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-3xl font-serif gold-text mb-2">15+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif gold-text mb-2">1000+</h3>
                  <p className="text-muted-foreground">Satisfied Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif gold-text mb-2">24/7</h3>
                  <p className="text-muted-foreground">Dedicated Service</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif gold-text mb-2">100%</h3>
                  <p className="text-muted-foreground">Discretion Assured</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

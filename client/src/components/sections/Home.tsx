import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536094919012-f5c6ecb4f64b')",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            {t("home.title")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t("home.subtitle")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
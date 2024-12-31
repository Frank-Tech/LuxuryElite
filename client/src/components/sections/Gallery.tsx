import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b",
    title: "Private Jet Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    title: "Luxury Automobiles",
  },
  {
    url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    title: "Exclusive Yachts",
  },
  {
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    title: "Elite Events",
  },
];

export const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gold-text">
            Our Portfolio
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
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="relative h-[500px] rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(image.url)}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${image.url})` }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white font-serif text-2xl">
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black/95 border-[#B8860B]/20">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
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
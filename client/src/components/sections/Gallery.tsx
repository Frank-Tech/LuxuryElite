import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5",
    title: "Private Jet Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Luxury Aircraft",
  },
  {
    url: "https://images.unsplash.com/photo-1491835236783-61f0a09f4e15",
    title: "Yacht Deck",
  },
  {
    url: "https://images.unsplash.com/photo-1587230049060-c3de8f7327fa",
    title: "Luxury Yacht",
  },
  {
    url: "https://images.unsplash.com/photo-1602632066313-a8eef289f41f",
    title: "Luxury Cars",
  },
  {
    url: "https://images.unsplash.com/photo-1498887960847-2a5e46312788",
    title: "Exclusive Vehicles",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Event Venue",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    title: "Luxury Events",
  },
];

export const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gold-text">
            Our Portfolio
          </h2>
        </FadeIn>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-serif text-xl">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

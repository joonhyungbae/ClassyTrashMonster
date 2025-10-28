import { Language, translations } from "@/data/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ExhibitionSectionProps {
  language: Language;
}

export const ExhibitionSection = ({ language }: ExhibitionSectionProps) => {
  const t = translations[language];

  return (
    <section id="exhibition" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.exhibition.title}
          </h2>

          <div className="space-y-16">
            {t.exhibition.exhibitions.map((exhibition, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">
                    {exhibition.title}
                  </h3>
                  <p className="text-muted-foreground">{exhibition.location}</p>
                  <p className="text-muted-foreground">{exhibition.date}</p>
                </div>

                <Carousel className="mx-auto max-w-5xl">
                  <CarouselContent>
                    {exhibition.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="border-0 bg-transparent">
                          <CardContent className="p-2">
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`${exhibition.title} - Photo ${imgIndex + 1}`}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

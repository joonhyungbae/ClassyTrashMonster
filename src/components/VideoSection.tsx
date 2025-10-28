import { Card, CardContent } from "@/components/ui/card";
import { translations, Language } from "@/data/translations";

interface VideoSectionProps {
  language: Language;
}

export const VideoSection = ({ language }: VideoSectionProps) => {
  const t = translations[language];

  return (
    <section id="video" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.video.title}
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            {t.video.description}
          </p>

          <Card className="border-primary/20 bg-card">
            <CardContent className="p-6 md:p-8">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/CEftATB-pK4"
                  title="Classy Trash Monster Gameplay Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

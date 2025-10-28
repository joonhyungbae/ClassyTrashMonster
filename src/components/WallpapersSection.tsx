import { Button } from "@/components/ui/button";
import { translations, Language } from "@/data/translations";
import { Download } from "lucide-react";
import ctmWallpapers from "@/assets/wallpapers/ctm-wallpapers.png";

interface WallpapersSectionProps {
  language: Language;
}

export const WallpapersSection = ({ language }: WallpapersSectionProps) => {
  const t = translations[language];

  return (
    <section id="wallpapers" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.wallpapers.title}
          </h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            {t.wallpapers.description}
          </p>

          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-lg">
              <img
                src={ctmWallpapers}
                alt="CTM Phone Wallpapers - Black & White, Monochrome, and Color versions"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://github.com/joonhyungbae/ClassyTrashMonster/tree/main/phoneWallpaper", "_blank")}
              >
                <Download className="h-5 w-5" />
                {t.wallpapers.download}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-muted-foreground">
              {t.wallpapers.artworkBy}{" "}
              <a
                href="https://joonhyungbae.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Joonhyung Bae
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              {t.wallpapers.license}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { translations, Language } from "@/data/translations";

interface AbstractSectionProps {
  language: Language;
}

export const AbstractSection = ({ language }: AbstractSectionProps) => {
  const t = translations[language];
  
  return (
    <section id="overview" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.abstract.title}
          </h2>
          
          <Card className="border-primary/20 bg-gradient-to-br from-card to-secondary/30 shadow-md">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-foreground/90">
                {t.abstract.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

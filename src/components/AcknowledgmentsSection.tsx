import { Card, CardContent } from "@/components/ui/card";
import { translations, Language } from "@/data/translations";

interface AcknowledgmentsSectionProps {
  language: Language;
}

export const AcknowledgmentsSection = ({ language }: AcknowledgmentsSectionProps) => {
  const t = translations[language];

  return (
    <section id="acknowledgments" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.acknowledgments.title}
          </h2>

          <Card className="border-primary/20 bg-card">
            <CardContent className="p-8 md:p-12">
              <p className="leading-relaxed text-muted-foreground">
                {t.acknowledgments.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

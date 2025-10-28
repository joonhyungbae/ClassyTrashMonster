import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, GraduationCap, Database, TrendingUp } from "lucide-react";
import { translations, Language } from "@/data/translations";

interface FeaturesSectionProps {
  language: Language;
}

const icons = [Gamepad2, GraduationCap, Database, TrendingUp];

export const FeaturesSection = ({ language }: FeaturesSectionProps) => {
  const t = translations[language];
  
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t.features.title}
        </h2>
        
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="group border-primary/10 bg-card shadow-sm transition-all hover:scale-[1.02] hover:border-primary/30 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { translations, Language } from "@/data/translations";
import { useState } from "react";
import { toast } from "sonner";

interface CitationSectionProps {
  language: Language;
}

const citations = {
  bibtex: `@inproceedings{10.1145/3491101.3516487,
  author = {Bae, Joonhyung and Eum, Karam and Kwon, Haram and Lee, Seolhee and Nam, Juhan and Doh, Young Yim},
  title = {Classy Trash Monster: An Educational Game for Teaching Machine Learning to Non-Major Students},
  year = {2022},
  isbn = {9781450391566},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3491101.3516487},
  doi = {10.1145/3491101.3516487},
  abstract = {As machine learning (ML) became more relevant to our lives, ML education for college students without technical background arose important. However, not many educational games designed to suit challenges they experience exist. We introduce an educational game Classy Trash Monster (CTM), designed to better educate ML and data dependency to non-major students who learn ML for the first time. The player can easily learn to train a classification model and solve tasks by engaging in simple game activities designed according to an ML pipeline. Simple controls, positive rewards, and clear audiovisual feedback makes game easy to play even for novice players. The playtest result showed that players were able to learn basic ML concepts and how data can impact model results, and that the game made ML feel less difficult and more relevant. However, proper debriefing session seems crucial to prevent misinterpretations that may occur in the learning process.},
  booktitle = {CHI Conference on Human Factors in Computing Systems Extended Abstracts},
  articleno = {479},
  numpages = {7},
  keywords = {Game Design, Machine Learning Education, Educational Games},
  location = {New Orleans, LA, USA},
  series = {CHI EA '22}
}`,
  apa: `Bae, J., Eum, K., Kwon, H., Lee, S., Nam, J., & Doh, Y. Y. (2022). Classy Trash Monster: An Educational Game for Teaching Machine Learning to Non-Major Students. In CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI EA '22), Article 479, 1-7. Association for Computing Machinery. https://doi.org/10.1145/3491101.3516487`,
  mla: `Bae, Joonhyung, et al. "Classy Trash Monster: An Educational Game for Teaching Machine Learning to Non-Major Students." CHI Conference on Human Factors in Computing Systems Extended Abstracts, Association for Computing Machinery, 2022, pp. 1-7, https://doi.org/10.1145/3491101.3516487.`,
  chicago: `Bae, Joonhyung, Karam Eum, Haram Kwon, Seolhee Lee, Juhan Nam, and Young Yim Doh. "Classy Trash Monster: An Educational Game for Teaching Machine Learning to Non-Major Students." In CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI EA '22), Article 479, 1-7. New York, NY, USA: Association for Computing Machinery, 2022. https://doi.org/10.1145/3491101.3516487.`,
  ieee: `J. Bae, K. Eum, H. Kwon, S. Lee, J. Nam, and Y. Y. Doh, "Classy Trash Monster: An Educational Game for Teaching Machine Learning to Non-Major Students," in CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI EA '22), New Orleans, LA, USA, 2022, Article 479, pp. 1-7, doi: 10.1145/3491101.3516487.`
};

export const CitationSection = ({ language }: CitationSectionProps) => {
  const t = translations[language];
  const [copied, setCopied] = useState<string | null>(null);
  
  const handleCopy = (format: keyof typeof citations) => {
    navigator.clipboard.writeText(citations[format]);
    setCopied(format);
    toast.success(language === "en" ? "Copied to clipboard!" : "클립보드에 복사되었습니다!");
    setTimeout(() => setCopied(null), 2000);
  };
  
  return (
    <section id="citation" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.citation.title}
          </h2>
          
          <Card className="border-primary/20 bg-card">
            <CardContent className="p-8 md:p-12">
              <Tabs defaultValue="bibtex" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="bibtex">{t.citation.bibtex}</TabsTrigger>
                  <TabsTrigger value="apa">{t.citation.apa}</TabsTrigger>
                  <TabsTrigger value="mla">{t.citation.mla}</TabsTrigger>
                  <TabsTrigger value="chicago">{t.citation.chicago}</TabsTrigger>
                  <TabsTrigger value="ieee">{t.citation.ieee}</TabsTrigger>
                </TabsList>
                
                {Object.entries(citations).map(([format, text]) => (
                  <TabsContent key={format} value={format} className="mt-6">
                    <div className="mb-4 flex items-center justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(format as keyof typeof citations)}
                        className="gap-2"
                      >
                        {copied === format ? (
                          <>
                            <Check className="h-4 w-4" />
                            {language === "en" ? "Copied!" : "복사됨!"}
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            {language === "en" ? "Copy" : "복사"}
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm whitespace-pre-wrap break-words">
                      <code className="text-foreground">{text}</code>
                    </pre>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

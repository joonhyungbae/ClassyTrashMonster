import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Monitor, Apple } from "lucide-react";
import { translations, Language } from "@/data/translations";
import { DownloadRequestDialog } from "./DownloadRequestDialog";

interface DownloadSectionProps {
  language: Language;
}

export const DownloadSection = ({ language }: DownloadSectionProps) => {
  const t = translations[language];
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section id="download" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t.download.title}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {t.download.description}
          </p>
          
          <Card className="border-primary/20 bg-gradient-to-br from-card to-secondary/30">
            <CardContent className="p-8 md:p-12">
              <Button
                onClick={() => setDialogOpen(true)}
                size="lg"
                className="mx-auto flex items-center gap-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                {t.download.requestAccess}
              </Button>
              
              <p className="mt-6 text-sm text-muted-foreground">
                {language === "en" 
                  ? "Windows version only. Please fill out the form to access the download."
                  : "Windows 버전만 제공됩니다. 다운로드하려면 양식을 작성해주세요."}
              </p>
            </CardContent>
          </Card>

          <DownloadRequestDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            language={language}
          />
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AbstractSection } from "@/components/AbstractSection";
import { VideoSection } from "@/components/VideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DownloadSection } from "@/components/DownloadSection";
import { WallpapersSection } from "@/components/WallpapersSection";
import { CreditsSection } from "@/components/CreditsSection";
import { CitationSection } from "@/components/CitationSection";
import { AcknowledgmentsSection } from "@/components/AcknowledgmentsSection";
import { ExhibitionSection } from "@/components/ExhibitionSection";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Language } from "@/data/translations";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        language={language} 
        onLanguageChange={setLanguage}
        isMusicPlaying={isMusicPlaying}
        onMusicToggle={() => setIsMusicPlaying(!isMusicPlaying)}
      />
      <Hero language={language} />
      <AbstractSection language={language} />
      <VideoSection language={language} />
      <FeaturesSection language={language} />
      <DownloadSection language={language} />
      <CreditsSection language={language} />
      <ExhibitionSection language={language} />
      <WallpapersSection language={language} />
      <CitationSection language={language} />
      <AcknowledgmentsSection language={language} />
      
      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container mx-auto px-4 text-center">
        </div>
      </footer>

      <BackgroundMusic isPlaying={isMusicPlaying} onToggle={() => setIsMusicPlaying(true)} />
    </div>
  );
};

export default Index;

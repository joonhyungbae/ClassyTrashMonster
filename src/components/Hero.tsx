import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { translations, Language } from "@/data/translations";
import ctmGameplay from "@/assets/ctm-gameplay.gif";

interface HeroProps {
  language: Language;
}

export const Hero = ({ language }: HeroProps) => {
  const t = translations[language];
  
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced Playful Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side - around GIF */}
        <div className="absolute top-1/4 left-[5%] w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Right side - around content */}
        <div className="absolute top-1/3 right-[5%] w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-[15%] w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-playful opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-2 sm:px-3">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* GIF Section - Left Side with Enhanced Frame */}
            <div className="w-full lg:w-[55%] animate-fade-in">
              <div className="relative group">
                {/* Glowing accent border */}
                <div className="absolute -inset-1 bg-gradient-playful rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Main GIF container */}
                <div className="relative overflow-hidden rounded-3xl shadow-playful transition-all duration-500 hover:shadow-hover border-4 border-primary/20 group-hover:border-primary/40">
                  <img 
                    src={ctmGameplay} 
                    alt="Classy Trash Monster Gameplay - Interactive educational game showing trash monster mechanics" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-accent rounded-tl-lg opacity-60"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-secondary rounded-tr-lg opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-secondary rounded-bl-lg opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-accent rounded-br-lg opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Content Section - Right Side */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary">
                  🎮 Educational Game Research
                </span>
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent md:text-5xl lg:text-6xl leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {t.title}
              </h1>
              <p className="mb-4 text-lg font-medium text-foreground/90 md:text-xl lg:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {t.subtitle}
              </p>
              <p className="mb-10 text-sm text-muted-foreground md:text-base font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {t.conference}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-playful transition-all duration-300 hover:scale-105 hover:shadow-hover hover:from-primary hover:to-secondary px-8 py-6 text-base"
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center font-bold">
                    <Download className="mr-2 h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    {t.hero.playNow}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/40 bg-card text-foreground font-bold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:shadow-playful px-8 py-6 text-base"
                  onClick={() => window.open(t.hero.paperUrl, '_blank')}
                >
                  <FileText className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  {t.hero.readPaper}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/40 bg-card text-foreground font-bold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:shadow-playful px-8 py-6 text-base"
                  onClick={() => window.open("https://drive.google.com/uc?export=download&id=1qIxLvzgjNvwYG-1GYh5wQsjAB2kZ4Qva", '_blank')}
                >
                  <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  {t.hero.downloadPaper}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

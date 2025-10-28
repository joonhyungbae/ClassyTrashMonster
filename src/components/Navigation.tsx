import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations, Language } from "@/data/translations";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isMusicPlaying: boolean;
  onMusicToggle: () => void;
}

export const Navigation = ({ language, onLanguageChange, isMusicPlaying, onMusicToggle }: NavigationProps) => {
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: t.nav.overview, href: "#overview" },
    { label: t.nav.video, href: "#video" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.download, href: "#download" },
    { label: t.nav.credits, href: "#credits" },
    { label: t.nav.exhibition, href: "#exhibition" },
    { label: t.nav.wallpapers, href: "#wallpapers" },
    { label: t.nav.citation, href: "#citation" },
    { label: t.nav.acknowledgments, href: "#acknowledgments" },
  ];
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Mobile Menu Button and Sound - Left (mobile/tablet only) */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border-primary/20 transition-colors hover:bg-primary/10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onMusicToggle}
            className="border-primary/20 transition-colors hover:bg-primary/10"
            aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
          >
            {isMusicPlaying ? (
              <Volume2 className="h-5 w-5 text-primary" />
            ) : (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>

        {/* Desktop Music Button - Left (desktop only) */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="icon"
            onClick={onMusicToggle}
            className="border-primary/20 transition-colors hover:bg-primary/10"
            aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
          >
            {isMusicPlaying ? (
              <Volume2 className="h-5 w-5 text-primary" />
            ) : (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>
        
        {/* Desktop Navigation - Center */}
        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:bg-accent/10"
            >
              {item.label}
            </Button>
          ))}
        </div>
        
        {/* Language Switcher - Right */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur lg:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="justify-start text-sm font-medium hover:bg-accent/10"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

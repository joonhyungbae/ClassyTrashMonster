import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageSwitcherProps {
  language: "en" | "ko";
  onLanguageChange: (lang: "en" | "ko") => void;
}

export const LanguageSwitcher = ({ language, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-secondary p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className={language === "en" ? "rounded-full px-4 bg-primary text-primary-foreground hover:bg-primary/90" : "rounded-full px-4 text-secondary-foreground hover:bg-accent/20"}
      >
        EN
      </Button>
      <Button
        variant={language === "ko" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("ko")}
        className={language === "ko" ? "rounded-full px-4 bg-primary text-primary-foreground hover:bg-primary/90" : "rounded-full px-4 text-secondary-foreground hover:bg-accent/20"}
      >
        KO
      </Button>
    </div>
  );
};

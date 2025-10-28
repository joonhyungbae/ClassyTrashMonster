import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { translations, Language } from "@/data/translations";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle2 } from "lucide-react";

interface DownloadRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: Language;
}

export const DownloadRequestDialog = ({
  open,
  onOpenChange,
  language,
}: DownloadRequestDialogProps) => {
  const t = translations[language];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    purpose: "",
    purposeDetail: "",
    fieldOfStudy: "",
    mlBackground: "",
    referralSource: "",
    privacyConsent: false,
    researchConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      toast({
        title: t.download.errorTitle,
        description: t.download.privacyRequired,
        variant: "destructive",
      });
      return;
    }

    if (!formData.researchConsent) {
      toast({
        title: t.download.errorTitle,
        description: t.download.researchRequired,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("access_key", "46f37b1f-9ca9-442b-88e4-0af1b3b0f52b");
      submitData.append("subject", "CTM Download Request");
      submitData.append("from_name", "CTM Website");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("institution", formData.institution);
      submitData.append("role", formData.role);
      submitData.append("purpose", formData.purpose);
      submitData.append("purposeDetail", formData.purposeDetail);
      submitData.append("fieldOfStudy", formData.fieldOfStudy);
      submitData.append("mlBackground", formData.mlBackground);
      submitData.append("referralSource", formData.referralSource);
      submitData.append("privacyConsent", formData.privacyConsent ? "Yes" : "No");
      submitData.append("researchConsent", formData.researchConsent ? "Yes" : "No");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
      } else {
        toast({
          title: t.download.errorTitle,
          description: t.download.errorDescription,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t.download.errorTitle,
        description: t.download.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1-VKB8--3TSQkgoHeqfAfUT1lGtyv4Dbl/view?usp=sharing", "_blank");
  };

  const resetAndClose = () => {
    setShowSuccess(false);
    setFormData({
      name: "",
      email: "",
      institution: "",
      role: "",
      purpose: "",
      purposeDetail: "",
      fieldOfStudy: "",
      mlBackground: "",
      referralSource: "",
      privacyConsent: false,
      researchConsent: false,
    });
    onOpenChange(false);
  };

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">
              {t.download.successTitle}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t.download.successDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Button
              onClick={handleDownload}
              size="lg"
              className="w-full gap-2"
            >
              <Download className="h-5 w-5" />
              {t.download.downloadNow}
            </Button>
            <Button
              onClick={resetAndClose}
              variant="outline"
              size="lg"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t.download.formTitle}</DialogTitle>
          <DialogDescription>{t.download.formDescription}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              {t.download.name} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={t.download.namePlaceholder}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              {t.download.email} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={t.download.emailPlaceholder}
            />
          </div>

          {/* Institution */}
          <div className="space-y-2">
            <Label htmlFor="institution">
              {t.download.institution} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="institution"
              required
              value={formData.institution}
              onChange={(e) =>
                setFormData({ ...formData, institution: e.target.value })
              }
              placeholder={t.download.institutionPlaceholder}
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">
              {t.download.role} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="role"
              required
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              placeholder={t.download.rolePlaceholder}
            />
          </div>

          {/* Purpose */}
          <div className="space-y-2">
            <Label htmlFor="purpose">
              {t.download.purpose} <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.purpose}
              onValueChange={(value) =>
                setFormData({ ...formData, purpose: value })
              }
            >
              <SelectTrigger id="purpose">
                <SelectValue placeholder={t.download.purposePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="educational">{t.download.purposeEducational}</SelectItem>
                <SelectItem value="research">{t.download.purposeResearch}</SelectItem>
                <SelectItem value="personal">{t.download.purposePersonal}</SelectItem>
                <SelectItem value="other">{t.download.purposeOther}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Purpose Detail */}
          <div className="space-y-2">
            <Label htmlFor="purposeDetail">
              {t.download.purposeDetail} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="purposeDetail"
              required
              value={formData.purposeDetail}
              onChange={(e) =>
                setFormData({ ...formData, purposeDetail: e.target.value })
              }
              placeholder={t.download.purposeDetailPlaceholder}
              rows={3}
            />
          </div>

          {/* Field of Study */}
          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">
              {t.download.fieldOfStudy} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fieldOfStudy"
              required
              value={formData.fieldOfStudy}
              onChange={(e) =>
                setFormData({ ...formData, fieldOfStudy: e.target.value })
              }
              placeholder={t.download.fieldOfStudyPlaceholder}
            />
          </div>

          {/* ML Background */}
          <div className="space-y-2">
            <Label htmlFor="mlBackground">
              {t.download.mlBackground} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="mlBackground"
              required
              value={formData.mlBackground}
              onChange={(e) =>
                setFormData({ ...formData, mlBackground: e.target.value })
              }
              placeholder={t.download.mlBackgroundPlaceholder}
              rows={2}
            />
          </div>

          {/* Referral Source */}
          <div className="space-y-2">
            <Label htmlFor="referralSource">
              {t.download.referralSource} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="referralSource"
              required
              value={formData.referralSource}
              onChange={(e) =>
                setFormData({ ...formData, referralSource: e.target.value })
              }
              placeholder={t.download.referralSourcePlaceholder}
            />
          </div>

          {/* Consents */}
          <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, privacyConsent: checked as boolean })
                }
              />
              <Label
                htmlFor="privacyConsent"
                className="cursor-pointer text-sm leading-relaxed"
              >
                {t.download.privacyConsent} <span className="text-destructive">*</span>
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="researchConsent"
                checked={formData.researchConsent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, researchConsent: checked as boolean })
                }
              />
              <Label
                htmlFor="researchConsent"
                className="cursor-pointer text-sm leading-relaxed"
              >
                {t.download.researchConsent} <span className="text-destructive">*</span>
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? t.download.submitting : t.download.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

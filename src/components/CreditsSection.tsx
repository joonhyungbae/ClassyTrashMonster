import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { translations, Language } from "@/data/translations";
import { Mail, Globe, Instagram } from "lucide-react";

interface CreditsSectionProps {
  language: Language;
}

interface Credit {
  name: string;
  nameKo: string;
  affiliation: string;
  affiliationKo: string;
  role: keyof typeof translations.en.credits.roles;
  email?: string;
  orcid?: string;
  website?: string;
  instagram?: string;
  isAuthor?: boolean;
  coFirstAuthor?: boolean;
  corresponding?: boolean;
}

const credits: Credit[] = [
  {
    name: "Joonhyung Bae",
    nameKo: "배준형",
    affiliation: "KAIST",
    affiliationKo: "KAIST",
    role: "joonhyung",
    email: "jh.bae@kaist.ac.kr",
    orcid: "0000-0001-5933-4302",
    website: "https://joonhyungbae.com",
    instagram: "jhbae.artechead",
    isAuthor: true,
    coFirstAuthor: true,
  },
  {
    name: "Karam Eum",
    nameKo: "엄가람",
    affiliation: "KAIST",
    affiliationKo: "KAIST",
    role: "karam",
    email: "karam.eum@kaist.ac.kr",
    orcid: "0000-0002-4450-9138",
    isAuthor: true,
    coFirstAuthor: true,
  },
  {
    name: "Haram Kwon",
    nameKo: "권하람",
    affiliation: "Com2uS",
    affiliationKo: "컴투스",
    role: "haram",
    email: "haram0601@kaist.ac.kr",
    orcid: "0000-0002-5302-153X",
    isAuthor: true,
    coFirstAuthor: true,
  },
  {
    name: "Seolhee Lee",
    nameKo: "이설희",
    affiliation: "NCSoft",
    affiliationKo: "NCSoft",
    role: "seolhee",
    email: "seolhee_lee@kaist.ac.kr",
    orcid: "0000-0002-8489-0252",
    isAuthor: true,
    coFirstAuthor: true,
  },
  {
    name: "Juhan Nam",
    nameKo: "남주한",
    affiliation: "KAIST",
    affiliationKo: "KAIST",
    role: "juhan",
    email: "juhan.nam@kaist.ac.kr",
    orcid: "0000-0003-2664-2119",
    website: "https://mac.kaist.ac.kr/~juhan/",
    isAuthor: true,
  },
  {
    name: "Young Yim Doh",
    nameKo: "도영임",
    affiliation: "KAIST",
    affiliationKo: "KAIST",
    role: "youngyim",
    email: "yydoh@kaist.ac.kr",
    orcid: "0000-0003-4698-0828",
    website: "https://www.gamesandlifelab.com/",
    isAuthor: true,
    corresponding: true,
  },
  {
    name: "Eunjin Choi",
    nameKo: "최은진",
    affiliation: "KAIST",
    affiliationKo: "KAIST",
    role: "eunjin",
    email: "jech@kaist.ac.kr",
    website: "https://jech2.github.io/",
    isAuthor: false,
  },
];

export const CreditsSection = ({ language }: CreditsSectionProps) => {
  const t = translations[language];

  return (
    <section id="credits" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t.credits.title}
          </h2>

          <Card className="border-primary/20 bg-card">
            <CardContent className="overflow-x-auto p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px]">{t.credits.name}</TableHead>
                    <TableHead className="min-w-[100px]">{t.credits.affiliation}</TableHead>
                    <TableHead className="min-w-[200px]">{t.credits.role}</TableHead>
                    <TableHead className="min-w-[200px]">{t.credits.email}</TableHead>
                    <TableHead className="min-w-[150px]">{t.credits.orcid}</TableHead>
                    <TableHead className="min-w-[100px]">{t.credits.links}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {credits.map((credit, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col gap-1">
                          <span>{language === "en" ? credit.name : credit.nameKo}</span>
                          <div className="flex flex-wrap gap-1">
                            {credit.isAuthor && (
                              <Badge variant="default" className="text-xs">
                                {t.credits.author}
                              </Badge>
                            )}
                            {credit.coFirstAuthor && (
                              <Badge variant="secondary" className="text-xs">
                                {t.credits.coFirstAuthor}
                              </Badge>
                            )}
                            {credit.corresponding && (
                              <Badge variant="secondary" className="text-xs">
                                {t.credits.correspondingAuthor}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {language === "en" ? credit.affiliation : credit.affiliationKo}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {t.credits.roles[credit.role]}
                      </TableCell>
                      <TableCell>
                        {credit.email ? (
                          <a
                            href={`mailto:${credit.email}`}
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="text-sm">{credit.email}</span>
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {credit.orcid ? (
                          <a
                            href={`https://orcid.org/${credit.orcid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {credit.orcid}
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {credit.website && (
                            <a
                              href={credit.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary transition-colors hover:text-primary/80"
                              title="Website"
                            >
                              <Globe className="h-5 w-5" />
                            </a>
                          )}
                          {credit.instagram && (
                            <a
                              href={`https://instagram.com/${credit.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary transition-colors hover:text-primary/80"
                              title="Instagram"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

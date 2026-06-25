import { Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-8">
        <Card className="w-full">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Icon */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-md">
                  I'm always interested in discussing machine learning projects, quantitative finance, or collaboration opportunities.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="w-full space-y-4 pt-4">
                {/* Email */}
                <Link
                  href="mailto:rushilbti@gmail.com"
                  className="flex items-center justify-between w-full p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icons.gmail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">
                        rushilbti@gmail.com
                      </p>
                    </div>
                  </div>
                  <Icons.externalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/rushil-agarwal-86b519298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icons.linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">
                        Connect professionally
                      </p>
                    </div>
                  </div>
                  <Icons.externalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>

                {/* GitHub */}
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icons.gitHub className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">
                        Check out my projects
                      </p>
                    </div>
                  </div>
                  <Icons.externalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-border w-full">
                <p className="text-sm text-muted-foreground">
                  Response time: Usually within 24-48 hours
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}


"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  url: string | null;
  status: "active" | "development";
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  url,
  status,
  imageUrl,
}: Readonly<ProjectCardProps>) {
  const { t } = useLanguage();
  const isInDevelopment = status === "development";

  console.log(imageUrl);

  return (
    <Card
      className={`group overflow-hidden bg-card border-border transition-all duration-300 ${
        isInDevelopment
          ? "cursor-default"
          : "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isInDevelopment ? "blur-sm scale-105" : "group-hover:scale-105"
            }`}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center bg-linear-to-br from-secondary to-muted ${
              isInDevelopment ? "blur-sm" : ""
            }`}
          >
            <span className="text-4xl font-bold text-muted-foreground/30">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {/* Development Overlay */}
        {isInDevelopment && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm font-medium"
            >
              <Clock className="w-4 h-4 mr-2" />
              {t.projects.inDevelopment}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[95px]">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-secondary/50 border-border text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        {isInDevelopment ? (
          <Button
            variant="secondary"
            className="w-full pointer-events-none opacity-60"
            disabled
          >
            <Clock className="w-4 h-4 mr-2" />
            {t.projects.comingSoon}
          </Button>
        ) : (
          <Button
            asChild
            variant="outline"
            className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <a href={url || "#"} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              {t.projects.viewProject}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

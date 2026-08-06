export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: readonly string[];
  url: string | null;
  status: "active" | "development";
  imageUrl?: string;
}

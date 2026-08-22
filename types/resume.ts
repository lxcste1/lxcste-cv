export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
}

export type Expertise = string[];

export type TechnologyCategory = [category: string, ...items: string[]];

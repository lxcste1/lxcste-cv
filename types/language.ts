import { translations } from "@/lib/translations";

export type Language = keyof typeof translations;
export type TranslationKey = (typeof translations)[Language];

"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") {
            return "en";
        }

        const savedLang = window.localStorage.getItem("language");
        return savedLang === "en" || savedLang === "fr" ? savedLang : "en";
    });

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (path: string) => {
        const keys = path.split(".");
        let current: unknown = translations[language];

        for (const key of keys) {
            if (typeof current !== "object" || current === null || !(key in current)) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = (current as Record<string, unknown>)[key];
        }

        return typeof current === "string" ? current : path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "language";
const LANGUAGE_EVENT = "teo-language-change";

function subscribe(onStoreChange: () => void) {
    if (typeof window === "undefined") {
        return () => undefined;
    }

    const handleStorage = (event: StorageEvent) => {
        if (event.key === null || event.key === LANGUAGE_STORAGE_KEY) {
            onStoreChange();
        }
    };

    const handleLanguageChange = () => {
        onStoreChange();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);

    return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
    };
}

function getSnapshot(): Language {
    if (typeof window === "undefined") {
        return "en";
    }

    const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLang === "en" || savedLang === "fr" ? savedLang : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const language = useSyncExternalStore<Language>(subscribe, getSnapshot, () => "en");

    const handleSetLanguage = (lang: Language) => {
        if (typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        window.dispatchEvent(new Event(LANGUAGE_EVENT));
    };

    const t = (path: string) => {
        const keys = path.split(".");
        let current: unknown = translations[language as keyof typeof translations];

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

"use client";

import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: "en", label: "EN" },
        { code: "fr", label: "FR" }
    ] as const;

    return (
        <div className="relative flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as "en" | "fr")}
                    className={cn(
                        "relative z-10 px-3 py-1 text-xs font-semibold transition-colors duration-200",
                        language === lang.code ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    {language === lang.code && (
                        <motion.div
                            layoutId="activeLang"
                            className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/50 -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {lang.label}
                </button>
            ))}
        </div>
    );
}

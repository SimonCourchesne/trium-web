"use client";

import { Container } from "@/components/ui/container";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
    const { t } = useLanguage();
    return (
        <div className="relative overflow-hidden pt-[120px] pb-16 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center">
            {/* Background - Mesh Gradient & Image Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Base Mesh Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-orange-100 opacity-80" />

                {/* User's Background Image blended */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/assets/screenshots/background_3.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                />

                {/* Soft Fade to White at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white/40 text-sm font-semibold text-primary shadow-sm backdrop-blur-md mb-6">
                            {t("hero.badge")}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl xs:text-5xl font-bold tracking-tight text-ink md:text-7xl lg:text-8xl pb-2 px-4"
                    >
                        {t("hero.title")} <br className="hidden md:block" />
                        <span className="text-gradient">{t("hero.titleHighlight")}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl font-medium"
                    >
                        {t("hero.subtitle")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4 text-center"
                    >
                        {/* Buttons removed for showcase version */}
                        <p className="text-slate-500 italic">
                            {t("hero.availability")}
                        </p>
                    </motion.div>

                    {/* Hero Visual - Three iPhones */}
                    <div className="relative mt-24 w-full max-w-6xl h-[600px] md:h-[700px] flex items-center justify-center perspective-1000">

                        {/* Left Phone (Calendar) */}
                        <motion.div
                            className="absolute left-[10%] top-12 z-10 hidden md:block scale-90 hover:scale-100 transition-all duration-500 origin-bottom-right"
                            initial={{ x: -50, opacity: 0, rotate: -10 }}
                            animate={{ x: 0, opacity: 1, rotate: -10 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Iphone15Pro
                                src="/assets/screenshots/calendar_page.PNG"
                                width={300}
                                height={650}
                                alt="Calendar View"
                                className="shadow-2xl shadow-indigo-500/10"
                            />
                        </motion.div>

                        {/* Right Phone (Chat) */}
                        <motion.div
                            className="absolute right-[10%] top-12 z-10 hidden md:block scale-90 hover:scale-100 transition-all duration-500 origin-bottom-left"
                            initial={{ x: 50, opacity: 0, rotate: 10 }}
                            animate={{ x: 0, opacity: 1, rotate: 10 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Iphone15Pro
                                src="/assets/screenshots/coach_chat_page.PNG"
                                width={300}
                                height={650}
                                alt="Agent Coach Chat"
                                className="shadow-2xl shadow-orange-500/10"
                            />
                        </motion.div>

                        {/* Center Phone (Home) */}
                        <motion.div
                            className="relative z-20 scale-100 hover:scale-105 transition-transform duration-500"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Iphone15Pro
                                src="/assets/screenshots/home_page.PNG"
                                className="shadow-2xl shadow-slate-900/20"
                                width={320}
                                height={680}
                                alt="Home Dashboard"
                            />
                        </motion.div>

                    </div>
                </div>
            </Container>
        </div>
    );
}

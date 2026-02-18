"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Pricing() {
    const { t } = useLanguage();

    const features = [
        {
            name: t("pricing.features.planGen"),
            free: t("pricing.features.planGenFree"),
            premium: t("pricing.features.planGenPrem"),
            highlight: true,
        },
        {
            name: t("pricing.features.calendar"),
            free: true,
            premium: true,
        },
        {
            name: t("pricing.features.devices"),
            free: false,
            premium: true,
        },
        {
            name: t("pricing.features.aiCoach"),
            free: t("pricing.features.aiCoachFree"),
            premium: t("pricing.features.aiCoachPrem"),
        },
        {
            name: t("pricing.features.voice"),
            free: false,
            premium: true,
        },
        {
            name: t("pricing.features.style"),
            free: false,
            premium: true,
        },
        {
            name: t("pricing.features.adaptive"),
            free: false,
            premium: t("pricing.features.adaptivePrem"),
        },
        {
            name: t("pricing.features.sleep"),
            free: false,
            premium: true,
        },
        {
            name: t("pricing.features.mod"),
            free: false,
            premium: t("pricing.features.modPrem"),
        },
    ];
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {t("pricing.title")}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-4 bg-orange-50 border border-orange-100 rounded-2xl inline-block"
                    >
                        <p className="text-orange-800 font-medium">
                            <span className="font-bold">{t("pricing.beta.badge")}</span> {t("pricing.beta.message")}
                            <br className="hidden md:block" />
                            <span className="font-semibold block mt-1">{t("pricing.beta.future")}</span>
                            {t("pricing.beta.futureMessage")}
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                    {/* Free Tier */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("pricing.basic.name")}</h3>
                        <p className="text-slate-500 mb-6">{t("pricing.basic.description")}</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">
                            {t("pricing.basic.price")}
                            <span className="text-lg font-normal text-slate-500 block text-sm mt-1">{t("pricing.basic.subPrice")}</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    {feature.free ? (
                                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    ) : (
                                        <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                    )}
                                    <span className={cn("text-sm", feature.free ? "text-slate-700" : "text-slate-400")}>
                                        <span className="font-semibold block md:inline md:mr-1">{feature.name}</span>
                                        {typeof feature.free === "string" && (
                                            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                                                {feature.free}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="w-full rounded-xl py-6" disabled>
                            {t("pricing.basic.button")}
                        </Button>
                    </motion.div>

                    {/* Premium Tier */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-orange-400 shadow-2xl shadow-orange-500/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            {t("pricing.premium.tag")}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("pricing.premium.name")}</h3>
                        <p className="text-orange-600 font-medium mb-6">{t("pricing.premium.description")}</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">
                            {t("pricing.premium.price")}
                            <span className="text-lg font-normal text-slate-500">{t("pricing.premium.period")}</span>
                            <span className="text-sm font-normal text-green-600 block mt-1">{t("pricing.premium.subPrice")}</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-orange-600" />
                                    </div>
                                    <span className="text-sm text-slate-700">
                                        <span className="font-semibold block md:inline md:mr-1">{feature.name}</span>
                                        {typeof feature.premium === "string" && (
                                            <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-medium">
                                                {feature.premium}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="w-full rounded-xl py-6" disabled>
                            {t("pricing.premium.button")}
                        </Button>
                        <p className="text-center text-xs text-slate-400 mt-4">
                            {t("pricing.premium.note")}
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export function PlanCreationShowcase() {
    const { t } = useLanguage();

    const steps = [
        {
            title: t("planCreation.steps.0.title"),
            description: t("planCreation.steps.0.description"),
            screenshot: "/assets/screenshots/plan_creation_plan_basics_1.PNG",
        },
        {
            title: t("planCreation.steps.1.title"),
            description: t("planCreation.steps.1.description"),
            screenshot: "/assets/screenshots/plan_creation_weekly_schedule_2.PNG",
        },
        {
            title: t("planCreation.steps.2.title"),
            description: t("planCreation.steps.2.description"),
            screenshot: "/assets/screenshots/plan_creation_race_calendar_3.PNG",
        },
        {
            title: t("planCreation.steps.3.title"),
            description: t("planCreation.steps.3.description"),
            screenshot: "/assets/screenshots/plan_creation_final_details_voice_4.PNG",
        },
    ];
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <Container>
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
                            {t("planCreation.title")} <span className="text-blue-600">{t("planCreation.titleHighlight")}</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            {t("planCreation.subtitle")}
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2" />

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function StepCard({ step, index }: { step: { title: string; description: string; screenshot: string }; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row items-center gap-12 md:gap-0",
            isEven ? "md:flex-row" : "md:flex-row-reverse"
        )}>
            {/* Timeline Dot (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center bg-white border-4 border-blue-100 rounded-full z-10 shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>

            {/* Text Side */}
            <div className={cn(
                "flex-1 w-full md:w-1/2 flex flex-col justify-center",
                isEven ? "md:pr-24 text-left md:text-right" : "md:pl-24 text-left"
            )}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={cn(
                        "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-bold text-xl mb-6 shadow-sm",
                        isEven ? "md:ml-auto" : "md:mr-auto"
                    )}>
                        {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                        {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {step.description}
                    </p>
                </motion.div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full md:w-1/2 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn(
                        "relative",
                        isEven ? "md:pl-12" : "md:pr-12"
                    )}
                >
                    <Iphone15Pro
                        src={step.screenshot}
                        width={280}
                        height={600}
                        className="mx-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
}

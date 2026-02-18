"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Calendar, MessageSquare, BarChart3 } from "lucide-react";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export function FeatureShowcase() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const features = [
        {
            title: t("featureShowcase.features.0.title"),
            description: t("featureShowcase.features.0.description"),
            icon: Calendar,
            screenshot: "/assets/screenshots/calendar_page.PNG",
        },
        {
            title: t("featureShowcase.features.1.title"),
            description: t("featureShowcase.features.1.description"),
            icon: MessageSquare,
            screenshot: "/assets/screenshots/coach_chat_page.PNG",
        },
        {
            title: t("featureShowcase.features.2.title"),
            description: t("featureShowcase.features.2.description"),
            icon: BarChart3,
            screenshot: "/assets/screenshots/you_page.PNG",
        },
    ];

    return (
        <section className="bg-black text-white relative">
            <div className="pt-24 pb-12 md:pt-32 md:pb-20 text-center relative z-10 bg-black">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
                            {t("featureShowcase.title")}
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
                            {t("featureShowcase.subtitle")}
                        </p>
                    </motion.div>
                </Container>
            </div>

            {/* Desktop Version - Sticky Scroll */}
            <div ref={containerRef} className="hidden md:block relative h-[400vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-7xl px-4 flex items-center justify-center h-full">
                        {/* Phone Container */}
                        <div className="relative w-[320px] h-[680px] max-h-[80vh] flex items-center justify-center">
                            {features.map((feature, index) => (
                                <FeatureImage
                                    key={index}
                                    feature={feature}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                    total={features.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full pointer-events-none">
                    {features.map((feature, index) => (
                        <div key={index} className="h-screen flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-12">
                            <FeatureDescription
                                feature={feature}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Version - Simple Stack */}
            <div className="md:hidden flex flex-col gap-20 pb-24 px-4 overflow-hidden">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-full mb-12">
                            <ContentCard feature={feature} align="left" />
                        </div>
                        <div className="relative w-[280px] h-[580px]">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <Iphone15Pro
                                    src={feature.screenshot}
                                    width={280}
                                    height={580}
                                    className="shadow-2xl shadow-blue-500/20"
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FeatureImage({
    feature,
    index,
    scrollYProgress,
    total,
}: {
    feature: { title: string; description: string; icon: any; screenshot: string };
    index: number;
    scrollYProgress: MotionValue<number>;
    total: number;
}) {
    // Calculate strict ranges for each feature
    const sectionHeight = 1 / total; // ~0.33

    // Center point of this feature's "active" time
    const center = index * sectionHeight + sectionHeight / 2;

    // Fade IN window (start earlier)
    const fadeInStart = center - sectionHeight * 0.5; // Start of section
    const fadeInEnd = center - sectionHeight * 0.1; // 10% before center

    // Fade OUT window (start later)
    const fadeOutStart = center + sectionHeight * 0.1; // 10% after center
    const fadeOutEnd = center + sectionHeight * 0.5; // End of section

    // Adjust first and last items to stay visible at extremes
    const effectiveFadeInStart = index === 0 ? 0 : fadeInStart;
    const effectiveFadeInEnd = index === 0 ? 0.05 : fadeInStart + 0.05; // Quick fade in

    const effectiveFadeOutStart = index === total - 1 ? 0.95 : fadeOutStart;
    const effectiveFadeOutEnd = index === total - 1 ? 1 : fadeOutStart + 0.05; // Quick fade out

    const transitionBuffer = 0.1; // Amount of overlap for crossfade

    const opacity = useTransform(
        scrollYProgress,
        [
            index * sectionHeight - transitionBuffer,
            index * sectionHeight + transitionBuffer,
            (index + 1) * sectionHeight - transitionBuffer,
            (index + 1) * sectionHeight + transitionBuffer
        ],
        [0, 1, 1, 0]
    );

    // Override for first and last items
    const finalOpacity = index === 0
        ? useTransform(scrollYProgress, [sectionHeight - transitionBuffer, sectionHeight + transitionBuffer], [1, 0])
        : index === total - 1
            ? useTransform(scrollYProgress, [index * sectionHeight - transitionBuffer, index * sectionHeight + transitionBuffer], [0, 1])
            : opacity;




    return (
        <motion.div
            style={{
                opacity: finalOpacity,
                zIndex: index, // Stack order
            }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
            <Iphone15Pro
                src={feature.screenshot}
                width={320}
                height={680}
                className="w-full h-full object-contain shadow-2xl shadow-blue-900/20"
            />
        </motion.div>
    );
}

function FeatureDescription({
    feature,
    index,
}: {
    feature: { title: string; description: string; icon: any; screenshot: string };
    index: number;
}) {
    const isLeft = index % 2 === 0;

    return (
        <div className="flex w-full justify-between items-center md:items-center">
            {/* Left Side Content */}
            <div className={cn(
                "w-full md:w-[400px] flex flex-col justify-center transition-all duration-500",
                isLeft ? "order-1 opacity-100" : "order-1 md:opacity-0 pointer-events-none hidden md:flex"
            )}>
                {isLeft && (
                    <ContentCard feature={feature} align="left" />
                )}
            </div>

            {/* Right Side Content */}
            <div className={cn(
                "w-full md:w-[400px] flex flex-col justify-center transition-all duration-500",
                !isLeft ? "order-2 opacity-100" : "order-2 md:opacity-0 pointer-events-none hidden md:flex"
            )}>
                {!isLeft && (
                    <ContentCard feature={feature} align="right" />
                )}
            </div>
        </div>
    );
}

function ContentCard({ feature, align }: { feature: { title: string; description: string; icon: any; screenshot: string }, align: "left" | "right" }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -20 : 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ margin: "-10% 0px -10% 0px" }} // Trigger later
            className="p-8 bg-neutral-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl pointer-events-auto relative z-50"
        >
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-3xl font-bold mb-4 text-white leading-tight">
                {feature.title}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
}

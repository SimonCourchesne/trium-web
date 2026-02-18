"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Calendar, MessageSquare, BarChart3 } from "lucide-react";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Plans That Adapt To You",
        description:
            "Life happens. Missed a workout? Sick? Busy work week? Trium instantly recalculates your entire season to keep you on track without burnout.",
        icon: Calendar,
        screenshot: "/assets/screenshots/plan_creation_weekly_schedule_2.PNG", // Safe choice for calendar
    },
    {
        title: "24/7 Expert Guidance",
        description:
            "Chat with your AI coach anytime. Ask for advice on nutrition, race strategy, or gear. It knows your training history and physiology.",
        icon: MessageSquare,
        screenshot: "/assets/screenshots/coach_chat_page.PNG", // User says this was actually showing Stats? If so, we might need another file. Assuming filename was correct but maybe just mismatched content.
    },
    {
        title: "Track What Matters",
        description:
            "Visualize your fitness progression, fatigue, and form. Connects seamlessly with Garmin and Strava to bring all your data into one place.",
        icon: BarChart3,
        screenshot: "/assets/screenshots/you_page.PNG", // Safe choice for stats
    },
];

export function FeatureShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

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
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
                            Train Smart.
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
                            Everything you need to reach your peak performance, intelligently adapted to you.
                        </p>
                    </motion.div>
                </Container>
            </div>

            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-7xl px-4 flex items-center justify-center h-full">
                        {/* Phone Container - Fixed width/height to prevent collapse and ensure visibility */}
                        <div className="relative w-[300px] h-[650px] md:w-[320px] md:h-[680px] max-h-[80vh] flex items-center justify-center">
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
        </section>
    );
}

function FeatureImage({
    feature,
    index,
    scrollYProgress,
    total,
}: {
    feature: (typeof features)[0];
    index: number;
    scrollYProgress: MotionValue<number>;
    total: number;
}) {
    const sectionHeight = 1 / total;
    const start = index * sectionHeight;
    const end = (index + 1) * sectionHeight;

    // Smoother transition windows - overlap slightly but with blur to hide text overlap artifacts
    const fadeInStart = index === 0 ? start : start - sectionHeight * 0.2;
    const fadeInEnd = index === 0 ? start + sectionHeight * 0.1 : start + sectionHeight * 0.1;

    const fadeOutStart = end - sectionHeight * 0.2;
    const fadeOutEnd = end;

    const opacity = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    // Apply blur to hide text overlap artifacts during transitions
    const blur = useTransform(
        scrollYProgress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        ["20px", "0px", "0px", "20px"]
    );

    // Subtle scale - prevent large size mismatch during crossfade. 
    const scale = useTransform(
        scrollYProgress,
        [fadeInStart, fadeOutEnd],
        [0.96, 1.02]
    );

    // Minimal Y movement to keep them aligned
    const y = useTransform(
        scrollYProgress,
        [fadeInStart, fadeOutEnd],
        ["2%", "-2%"]
    );

    return (
        <motion.div
            style={{
                opacity,
                scale,
                filter: blur, // Apply blur transition
                y,
                zIndex: index, // Ensure stacking order
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
    feature: (typeof features)[0];
    index: number;
}) {
    const isLeft = index % 2 === 0;

    return (
        <div className="flex w-full justify-between items-center md:items-center">
            {/* Left Side Content or Spacer */}
            <div className={cn(
                "w-full md:w-[400px] flex flex-col justify-center transition-all duration-500",
                isLeft ? "order-1 opacity-100" : "order-1 md:opacity-0 pointer-events-none hidden md:flex"
            )}>
                {isLeft && (
                    <ContentCard feature={feature} align="left" />
                )}
            </div>

            {/* Right Side Content or Spacer */}
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

function ContentCard({ feature, align }: { feature: (typeof features)[0], align: "left" | "right" }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -40 : 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
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

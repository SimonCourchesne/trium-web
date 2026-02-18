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
        screenshot: "/assets/screenshots/plan_creation_weekly_schedule_2.PNG",
    },
    {
        title: "24/7 Expert Guidance",
        description:
            "Chat with your AI coach anytime. Ask for advice on nutrition, race strategy, or gear. It knows your training history and physiology.",
        icon: MessageSquare,
        screenshot: "/assets/screenshots/coach_chat_page.PNG",
    },
    {
        title: "Track What Matters",
        description:
            "Visualize your fitness progression, fatigue, and form. Connects seamlessly with Garmin and Strava to bring all your data into one place.",
        icon: BarChart3,
        screenshot: "/assets/screenshots/you_page.PNG",
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

            {/* Increased height to 400vh to slow down scrolling and ensure text matches image */}
            <div ref={containerRef} className="relative h-[400vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-7xl px-4 flex items-center justify-center h-full">
                        {/* Phone Container */}
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

    const opacity = useTransform(
        scrollYProgress,
        // Define explicit checkpoints: [Before Start, Start Fade, End Fade (Full), Start Fade Out, End Fade Out (Gone)]
        // But simply: 
        // 0 -> Start of Section
        // 1 -> Middle of Section
        // 0 -> End of Section
        // We need overlap for crossfade.
        // Let's use a simpler mapping based on exact section overlapping
        [
            index * sectionHeight, // Start of section
            index * sectionHeight + 0.05, // 5% into section (Fully Visible)
            (index + 1) * sectionHeight - 0.05, // 5% before end (Start Fading)
            (index + 1) * sectionHeight // End of section (Fully Invisible)
        ],
        [0, 1, 1, 0]
    );

    // Override for first item (always visible at start)
    const finalOpacity = index === 0
        ? useTransform(scrollYProgress, [0, sectionHeight - 0.05, sectionHeight], [1, 1, 0])
        : index === total - 1
            ? useTransform(scrollYProgress, [index * sectionHeight, index * sectionHeight + 0.05, 1], [0, 1, 1])
            : opacity;

    // Blur Logic: Blur at edges, clear in center
    const blur = useTransform(
        scrollYProgress,
        [
            index * sectionHeight,
            index * sectionHeight + 0.05,
            (index + 1) * sectionHeight - 0.05,
            (index + 1) * sectionHeight
        ],
        ["10px", "0px", "0px", "10px"]
    );

    // Override blur for first/last
    const finalBlur = index === 0
        ? useTransform(scrollYProgress, [sectionHeight - 0.05, sectionHeight], ["0px", "10px"])
        : index === total - 1
            ? useTransform(scrollYProgress, [index * sectionHeight, index * sectionHeight + 0.05], ["10px", "0px"])
            : blur;


    // Scale stays consistent
    const scale = useTransform(
        scrollYProgress,
        [index * sectionHeight, (index + 1) * sectionHeight],
        [0.98, 1.02]
    );

    return (
        <motion.div
            style={{
                opacity: finalOpacity,
                scale,
                filter: finalBlur,
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
    feature: (typeof features)[0];
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

function ContentCard({ feature, align }: { feature: (typeof features)[0], align: "left" | "right" }) {
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

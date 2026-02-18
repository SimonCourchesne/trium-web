"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { motion } from "framer-motion";

const screenshots = [
    "/assets/screenshots/home_page.PNG",
    "/assets/screenshots/calendar_page.PNG",
    "/assets/screenshots/workout_details_card.PNG",
    "/assets/screenshots/you_page.PNG",
    "/assets/screenshots/settings_page.PNG",
];

export function AppShowcase() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-ink md:text-5xl tracking-tight">
                        Designed for <span className="text-gradient">Athletes.</span>
                    </h2>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
                        A generic coaching plan isn't enough. Teo adapts to your life, your goals, and your physiology.
                    </p>
                </div>
            </Container>

            {/* Scrollable Container with Mask Fade - Replaces harsh gradients with smooth mask */}
            <div
                ref={scrollContainerRef}
                className="flex items-start overflow-x-auto snap-x snap-mandatory pb-12 pt-8 px-6 md:px-[max(calc(50vw-45rem),2rem)] gap-6 md:gap-12 scrollbar-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {screenshots.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="snap-center flex-shrink-0 first:pl-4 last:pr-4"
                    >
                        <div className="transform transition-transform duration-500 hover:-translate-y-2">
                            <Iphone15Pro
                                src={src}
                                width={285}
                                height={615}
                                className="shadow-2xl shadow-slate-900/15"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

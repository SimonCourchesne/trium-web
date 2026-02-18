"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { MessageSquare, Zap, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Proactive Check-ins",
        description: "It texts you to check in. It knows when you missed a workout and asks why, just like a real coach.",
        icon: MessageSquare,
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "True Adaptation",
        description: "Adjusts intensity based on RPE and life events. Not just a spreadsheet.",
        icon: Zap,
        className: "md:col-span-1",
        gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
        title: "Instant Knowledge",
        description: "Ask about nutrition, gear, or race strategy. Get expert answers instantly, 24/7.",
        icon: GraduationCap,
        className: "md:col-span-3",
        gradient: "from-purple-500/20 to-pink-500/20"
    }
];

export function Mission() {
    return (
        <section id="mission" className="relative py-24 md:py-32 bg-slate-900 border-y border-slate-800 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6"
                    >
                        More Than Just a Plan. <br />
                        <span className="text-gradient">A Real Coach.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        We're democratizing the elite coaching experience.
                        No more <span className="text-white font-medium">$300/month</span> fees.
                        Just smart, personalized guidance that actually knows you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className={cn(
                                "relative group overflow-hidden rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-colors",
                                "bg-white/5 backdrop-blur-sm",
                                feature.className
                            )}
                        >
                            {/* Hover Gradient Background */}
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                                feature.gradient
                            )} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 p-3 rounded-2xl bg-white/10 w-fit">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 group-hover:text-slate-200 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

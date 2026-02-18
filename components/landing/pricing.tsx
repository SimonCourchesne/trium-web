"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
    {
        name: "Plan Generation",
        free: "Basic (App View Only)",
        premium: "Advanced & Adaptive",
        highlight: true,
    },
    {
        name: "Calendar Sync",
        free: true,
        premium: true,
    },
    {
        name: "Send to Devices (Garmin/Apple Watch)",
        free: false,
        premium: true,
    },
    {
        name: "AI Coach Models",
        free: "Standard (Reduced Limits)",
        premium: "Advanced (Higher Limits)",
    },
    {
        name: "Voice Memos & Analysis",
        free: false,
        premium: true,
    },
    {
        name: "Coach Style Customization",
        free: false,
        premium: true,
    },
    {
        name: "Auto-Adaptive Plans",
        free: false,
        premium: "Based on Completion % & Stats",
    },
    {
        name: "Sleep Metrics & Recovery",
        free: false,
        premium: true,
    },
    {
        name: "Workout Modification",
        free: false,
        premium: "Full Flexibility",
    },
];

export function Pricing() {
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
                        Flexible Pricing for Every Athlete
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-4 bg-orange-50 border border-orange-100 rounded-2xl inline-block"
                    >
                        <p className="text-orange-800 font-medium">
                            <span className="font-bold">Beta Access:</span> Teo is currently free for a limited set of users.
                            <br className="hidden md:block" />
                            <span className="font-semibold block mt-1">Future Model: Freemium.</span>
                            Basic features will remain free, while advanced AI tools will be part of Teo Premium.
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
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Teo Basic</h3>
                        <p className="text-slate-500 mb-6">Essential tools for your training journey.</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">
                            Free
                            <span className="text-lg font-normal text-slate-500 block text-sm mt-1">during beta</span>
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
                            Coming Soon
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
                            RECOMMENDED
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Teo Premium</h3>
                        <p className="text-orange-600 font-medium mb-6">The Full Experience.</p>
                        <div className="text-4xl font-bold text-slate-900 mb-8">
                            $15
                            <span className="text-lg font-normal text-slate-500">/mo</span>
                            <span className="text-sm font-normal text-green-600 block mt-1">Free during beta</span>
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
                            Coming Soon
                        </Button>
                        <p className="text-center text-xs text-slate-400 mt-4">
                            Limited spots available for beta testing.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

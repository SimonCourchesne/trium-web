"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    image?: string | StaticImageData;
    screenshot?: string;
    align?: "left" | "right";
    index: number;
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    image,
    screenshot,
    align = "left",
    index,
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-12 md:items-center",
                align === "left" ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1 space-y-6"
            >
                {Icon && (
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-primary border border-orange-100 shadow-sm">
                        <Icon className="h-7 w-7" />
                    </div>
                )}
                <h3 className="text-4xl font-bold tracking-tight text-ink">{title}</h3>
                <p className="text-xl text-slate-600 md:w-4/5 leading-relaxed">
                    {description}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                className="flex-1 flex justify-center"
            >
                {screenshot ? (
                    <div className="relative transform transition-all duration-500 hover:scale-105">
                        {/* Soft glow behind phone */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-indigo-200 blur-[60px] rounded-full opacity-60" />
                        <Iphone15Pro
                            src={screenshot}
                            width={300}
                            height={650}
                            className="shadow-2xl shadow-slate-900/10 border-gray-900"
                        />
                    </div>
                ) : (
                    <div className="relative aspect-video w-full overflow-hidden glass-card p-2 md:p-4 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {image ? (
                            <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                                {/* Use a placeholder if image is a string URL, or Next.js Image if it is StaticImageData */}
                                {typeof image === 'string' ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={image} alt={title} className="h-full w-full object-cover" />
                                ) : (
                                    <Image src={image} alt={title} className="h-full w-full object-cover" />
                                )}
                            </div>
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-50">
                                <span className="text-slate-400">Feature Preview</span>
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

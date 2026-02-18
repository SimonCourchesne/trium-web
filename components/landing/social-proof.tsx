"use client";

import { Container } from "@/components/ui/container";

export function SocialProof() {
    return (
        <div className="border-y border-slate-200 bg-white/50 backdrop-blur-sm">
            <Container className="py-8">
                <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                    <p className="text-lg font-medium text-slate-500">
                        Trusted by triathletes worldwide.
                    </p>

                    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                            Syncs Seamlessly with
                        </p>
                        <div className="flex items-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                            {/* Simple Text Logos for now - Darker for Light Mode */}
                            <span className="text-xl font-bold italic tracking-tighter text-slate-700">STRAVA</span>
                            <span className="text-xl font-bold tracking-tight text-slate-700">GARMIN</span>
                            <span className="text-xl font-bold text-slate-700">TrainingPeaks</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

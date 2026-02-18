"use client";

import { Container } from "@/components/ui/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ShieldCheck,
    Lock,
    Users,
    Server,
    Activity,
    Database,
    Phone,
    MapPin,
    Heart,
    Trash2,
    Download,
    FileText,
    RefreshCcw,
    Baby,
    Clock,
    Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-32 pb-20">
                <Container>
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-12"
                    >
                        <h1 className="text-5xl font-bold text-ink mb-6 tracking-tight">Privacy Policy</h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Your privacy is our priority. We believe in complete transparency about how we collect, use, and protect your health data.
                        </p>
                        <div className="inline-block px-5 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">
                            Last Updated: February 17, 2026
                        </div>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-8">

                        {/* 1. Introduction */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-8"
                        >
                            <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-3">
                                <Users className="h-6 w-6 text-primary" />
                                1. Introduction
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Welcome to Teo ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal health and fitness information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") and website.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                By using Teo, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
                            </p>
                        </motion.section>

                        {/* Accordion for Detailed Sections */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">

                                {/* 2. Information We Collect */}
                                <AccordionItem value="item-2" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <Activity className="h-6 w-6 text-primary" />
                                            2. Information We Collect
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600 space-y-6">
                                        <p>We collect information to provide you with a personalized AI coaching experience. This includes:</p>

                                        <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                            <h4 className="font-semibold text-ink mb-2 text-base flex items-center gap-2">
                                                <Users className="h-4 w-4 text-slate-400" />
                                                A. Personal Information
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                                                <li><strong>Identity Data:</strong> Name, email address, date of birth, and profile picture (via Google/Apple Sign-In).</li>
                                                <li><strong>Physical Data:</strong> Height, weight, gender, and age (required for accurate training load calculations).</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                            <h4 className="font-semibold text-ink mb-2 text-base flex items-center gap-2">
                                                <Heart className="h-4 w-4 text-slate-400" />
                                                B. Health & Fitness Data
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                                                <li><strong>Activity Data:</strong> Workouts, run types, distances, durations, and elevations.</li>
                                                <li><strong>Biometric Data:</strong> Heart rate (HR), resting heart rate (RHR), heart rate variability (HRV), power output (watts), speed, and cadence.</li>
                                                <li><strong>Location Data:</strong> GPS data points during recorded activities (for mapping and pace analysis).</li>
                                                <li><strong>Sleep & Recovery:</strong> Sleep duration and quality metrics (if synced).</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                            <h4 className="font-semibold text-ink mb-2 text-base flex items-center gap-2">
                                                <Smartphone className="h-4 w-4 text-slate-400" />
                                                C. Device & Technical Data
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                                                <li>Device model, operating system version, unique device identifiers, and IP address.</li>
                                                <li>App usage data (features used, time spent, crash logs).</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* 3. How We Use */}
                                <AccordionItem value="item-3" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <Database className="h-6 w-6 text-primary" />
                                            3. How We Use Your Information
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600 space-y-4">
                                        <p>We use your data <strong>solely</strong> to provide and improve the coaching features of the App. We do <strong>NOT</strong> sell your personal data or health data to third parties, advertisers, or data brokers.</p>

                                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                                            <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                <h4 className="font-semibold text-ink mb-2 text-base">1. AI Plan Generation</h4>
                                                <p className="text-sm">Your training history, biometrics, and goals are processed by our AI engine (Google Gemini) to generate personalized workout schedules.</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                <h4 className="font-semibold text-ink mb-2 text-base">2. Adaptive Coaching</h4>
                                                <p className="text-sm">We analyze completed activities to adjust future training loads (e.g., reducing intensity if you are fatigued).</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                <h4 className="font-semibold text-ink mb-2 text-base">3. Chat Coach</h4>
                                                <p className="text-sm">Your recent workout data and profile context are used to provide relevant answers within the "Coach Chat" feature.</p>
                                            </div>
                                            <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                <h4 className="font-semibold text-ink mb-2 text-base">4. Integration Sync</h4>
                                                <p className="text-sm">To push workouts to your devices (Garmin) and pull completed activities from third-party services (Strava, Apple Health).</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                {/* 4. Third Party */}
                                <AccordionItem value="item-4" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <Server className="h-6 w-6 text-primary" />
                                            4. Third-Party Integrations
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600 space-y-6">
                                        <p>To provide our service, we integrate with third-party APIs. We adhere strictly to their developer policies.</p>

                                        <div className="space-y-4">
                                            <div className="bg-white/50 p-5 rounded-xl border border-white/60">
                                                <h4 className="font-bold text-ink mb-2">A. Google Health Connect & Apple HealthKit</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    <li><strong>Access:</strong> We only request access to data necessary for training analysis (e.g., Exercise, Heart Rate, Sleep).</li>
                                                    <li><strong>Use Restriction:</strong> Data is <strong>never</strong> used for advertising, marketing, or use-based data mining.</li>
                                                    <li><strong>Sharing:</strong> We do not share Google/Apple health data with third parties except as necessary to provide the App's core functionality.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white/50 p-5 rounded-xl border border-white/60">
                                                <h4 className="font-bold text-ink mb-2">B. Strava API</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    <li><strong>Usage:</strong> Used solely to display your activities within Teo and analyze fitness progress.</li>
                                                    <li><strong>AI Restriction:</strong> We do <strong>not</strong> use your Strava data to train our global AI models. It is processed transiently for <em>your</em> insights.</li>
                                                    <li><strong>Visibility:</strong> Your Strava data is strictly private within Teo.</li>
                                                </ul>
                                            </div>

                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                    <h4 className="font-bold text-ink mb-1">C. Garmin Connect</h4>
                                                    <p className="text-sm">We use the Garmin Connect API to push structured workouts and pull completed activity files. We adhere to Garmin's restrictions on caching and retention.</p>
                                                </div>
                                                <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                                                    <h4 className="font-bold text-ink mb-1">D. Service Providers</h4>
                                                    <p className="text-sm"><strong>Supabase:</strong> Secure cloud database and auth.<br /><strong>Google Gemini:</strong> LLM provider for coaching (anonymized data only).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </motion.div>

                        {/* 5. Data Security Section - Featured */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="py-6"
                        >
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-bold text-ink mb-6 flex items-center gap-3">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                    5. Data Security
                                </h2>
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="bg-white/50 rounded-2xl p-6 flex flex-col items-center text-center border border-white/60">
                                        <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">
                                            <Lock className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-ink mb-2">Encryption</h3>
                                        <p className="text-sm text-slate-600">TLS 1.2+ in transit and AES-256 at rest. Your data is locked tight.</p>
                                    </div>
                                    <div className="bg-white/50 rounded-2xl p-6 flex flex-col items-center text-center border border-white/60">
                                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                                            <Database className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-ink mb-2">Row Level Security</h3>
                                        <p className="text-sm text-slate-600">Our database architecture ensures that you can only access your own data.</p>
                                    </div>
                                    <div className="bg-white/50 rounded-2xl p-6 flex flex-col items-center text-center border border-white/60">
                                        <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                                            <Server className="h-6 w-6" />
                                        </div>
                                        <h3 className="font-bold text-ink mb-2">Access Control</h3>
                                        <p className="text-sm text-slate-600">Strict internal access limits. Validated service providers only.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* 6. Your Rights - Grid of Actionable Cards */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold text-ink mb-6 flex items-center gap-3 px-2">
                                <FileText className="h-6 w-6 text-primary" />
                                6. Your Rights (GDPR & CCPA)
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                                            <Database className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-bold text-ink">Right to Access</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">You can request a full copy of all personal data we hold about you at any time.</p>
                                </div>
                                <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-red-50 rounded-lg text-red-500">
                                            <Trash2 className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-bold text-ink">Right to Deletion</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Request usage deletion of your account and data directly within the App settings.</p>
                                </div>
                                <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-green-50 rounded-lg text-green-500">
                                            <Download className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-bold text-ink">Right to Portability</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Export your workout history in standard formats like JSON or FIT files.</p>
                                </div>
                                <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
                                            <RefreshCcw className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-bold text-ink">Right to Rectification</h3>
                                    </div>
                                    <p className="text-sm text-slate-600">Correct any inaccurate personal information in your profile instantly.</p>
                                </div>
                            </div>
                            <div className="mt-8 text-center text-slate-500 bg-white/40 p-4 rounded-xl backdrop-blur-sm inline-block w-full">
                                To exercise these rights, please use the "Delete Account" function in the app settings.
                            </div>
                        </motion.section>

                        {/* Remaining Sections: Retention, Children, Changes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-7" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-6 w-6 text-primary" />
                                            7. Data Retention
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600">
                                        <p className="mb-4">We retain your personal and health data only as long as your account is active.</p>
                                        <ul className="list-disc list-inside space-y-2 ml-2 bg-white/50 p-4 rounded-xl border border-white/60">
                                            <li><strong>Account Deletion:</strong> Upon request, your account and all associated data are permanently deleted from our servers within 30 days.</li>
                                            <li><strong>Backups:</strong> Encrypted backups may retain data for up to 90 days before being overwritten.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <Baby className="h-6 w-6 text-primary" />
                                            8. Children's Privacy
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600">
                                        <p className="bg-white/50 p-4 rounded-xl border border-white/60">Teo is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it immediately.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-9" className="glass-card px-2 border-none overflow-hidden">
                                    <AccordionTrigger className="px-6 py-4 text-xl font-bold text-ink hover:text-primary hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <RefreshCcw className="h-6 w-6 text-primary" />
                                            9. Changes to This Privacy Policy
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-2 text-slate-600">
                                        <p className="bg-white/50 p-4 rounded-xl border border-white/60">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for any changes.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>

                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

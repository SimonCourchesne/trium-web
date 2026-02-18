"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const faqSections = [
    {
        title: "General",
        faqs: [
            {
                question: "What is Teo?",
                answer: "Teo is an autonomous AI agent for endurance training. Powered by cutting-edge sports science, it autonomously builds and modifies your plan based on your feedback, fitness, and goals."
            },
            {
                question: "Who is Teo for?",
                answer: "Whether you're training for your first 5K, aiming for a Kona slot, or just wanting to stay fit, Teo adapts to your level. We support Triathlon (Sprint to Full), Running (5K to Ultra), Cycling, Swimming, and Duathlon."
            },
            {
                question: "How is this different from a human coach?",
                answer: "Teo gives you the hyper-personalization of a human coach—analyzing your data, adjusting for illness/travel, and answering questions—at a fraction of the cost ($20/mo vs $300+/mo). It uses autonomous tools to adjust your plan instantly."
            }
        ]
    },
    {
        title: "Training & Agentic Tech",
        faqs: [
            {
                question: "What happens if I miss a workout?",
                answer: "Life happens. Just tell Teo \"I missed yesterday's run\" or \"I'm sick,\" and the Agent will instantly recalculate your future workouts to keep you on track without overtraining you."
            },
            {
                question: "Can I customize my schedule?",
                answer: "Absolutely. You define your long run days, off days, and weekly volume limits. You can also drag-and-drop workouts or ask the Coach to \"Move my long ride to Sunday.\""
            },
            {
                question: "Does Teo use my training data?",
                answer: "Yes. We analyze your completed workouts (pace, heart rate, power, RPE) to adjust future training intensities. If a session felt too hard, we'll dial it back. If it was too easy, we'll challenge you more."
            }
        ]
    },
    {
        title: "Integrations & Devices",
        faqs: [
            {
                question: "What devices does Teo work with?",
                answer: "Teo pushes workouts directly to your Garmin watch or bike computer. We also sync completed activities from Garmin Connect and Strava to track your progress."
            },
            {
                question: "Can I see my workouts in my calendar?",
                answer: "Yes. Teo provides a live calendar feed (ICS) that syncs with Google Calendar, Apple Calendar, and Outlook, so your training is always visible alongside your life."
            }
        ]
    },

];

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-white">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-10">
                        {faqSections.map((section, sIndex) => (
                            <div key={sIndex}>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h3>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {section.faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${sIndex}-${index}`}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-2"
                                        >
                                            <AccordionTrigger className="text-lg font-medium text-ink hover:text-primary text-left">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

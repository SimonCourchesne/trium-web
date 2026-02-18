"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/language-provider";

export function FAQ() {
    const { t } = useLanguage();

    const faqSections = [
        {
            title: t("faq.sections.general"),
            faqs: [
                { question: t("faq.items.0.q"), answer: t("faq.items.0.a") },
                { question: t("faq.items.1.q"), answer: t("faq.items.1.a") },
                { question: t("faq.items.2.q"), answer: t("faq.items.2.a") }
            ]
        },
        {
            title: t("faq.sections.training"),
            faqs: [
                { question: t("faq.items.3.q"), answer: t("faq.items.3.a") },
                { question: t("faq.items.4.q"), answer: t("faq.items.4.a") },
                { question: t("faq.items.5.q"), answer: t("faq.items.5.a") }
            ]
        },
        {
            title: t("faq.sections.integrations"),
            faqs: [
                { question: t("faq.items.6.q"), answer: t("faq.items.6.a") },
                { question: t("faq.items.7.q"), answer: t("faq.items.7.a") }
            ]
        },
    ];
    return (
        <section id="faq" className="py-24 bg-white">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
                        {t("faq.title")}
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

"use client";

import Image from "next/image";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Twitter, Instagram, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
            <Container>
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/assets/screenshots/icon_backup.png"
                                alt="Teo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <span className="text-xl font-bold text-ink">Teo.</span>
                        </Link>
                        <p className="mt-4 text-sm text-slate-500 max-w-xs">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink">{t("footer.product")}</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="#features" className="hover:text-primary">{t("nav.features")}</Link></li>
                            <li><Link href="#mission" className="hover:text-primary">{t("mission.titleHighlight")}</Link></li>
                            <li><Link href="#faq" className="hover:text-primary">{t("nav.faq")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink">{t("footer.legal")}</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/privacy" className="hover:text-primary">{t("footer.privacy")}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} {t("footer.rights")}
                    </p>
                </div>
            </Container>
        </footer>
    );
}

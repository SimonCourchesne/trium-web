"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const links: { href: string; label: string }[] = [];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <Container>
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
                        isScrolled ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/40" : "bg-transparent"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/assets/screenshots/icon_backup.png"
                            alt="Teo"
                            width={32}
                            height={32}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-ink">
                            Teo.
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* Buttons removed for initial launch as per request */}
                    </div>
                </nav>
            </Container>
        </header>
    );
}

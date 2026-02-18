import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trium - Your Personal AI Endurance Coach",
    description: "Adaptive training plans for Triathlon, Running, Cycling, and Swimming. Powered by advanced AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-slate-50 text-slate-900 antialiased min-h-screen")}>
                {children}
            </body>
        </html>
    );
}

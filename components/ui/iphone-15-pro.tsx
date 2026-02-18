import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface Iphone15ProProps {
    src: string | StaticImageData;
    alt?: string;
    className?: string; // Additional classes for the container
    width?: number; // Desired width of the phone
    height?: number; // Desired height of the phone
}

export function Iphone15Pro({
    src,
    alt = "App Screenshot",
    className,
    width = 300,
    height = 650,
}: Iphone15ProProps) {
    return (
        <div
            className={cn("relative z-10", className)}
            style={{
                width,
                height,
            }}
        >
            {/* Screen Content - Rendered first (z-10) */}
            <div className="absolute inset-0 rounded-[2.6rem] overflow-hidden bg-black z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={typeof src === "string" ? src : (src as any).src}
                    alt={alt}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Main Frame/Bezel - Rendered on top (z-20) */}
            {/* Handled by border, transparent center */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-[3rem] shadow-2xl border-[6px] border-[#1b1b1f] box-content -m-[6px]">
                {/* Inner Border (Screen Edge reflection) */}
                <div className="absolute inset-0 border-[2px] border-black/50 rounded-[2.6rem]" />
            </div>

            {/* Dynamic Island */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-30 flex items-center justify-center pointer-events-none">
                <div className="w-2/3 h-2/3 bg-[#101010] rounded-full" />
            </div>

            {/* Reflections/Gloss (Optional) */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none z-40 ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
        </div>
    );
}

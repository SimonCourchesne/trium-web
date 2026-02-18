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
            className={cn("relative z-10 rounded-[3rem]", className)}
            style={{
                width,
                height,
            }}
        >
            {/* Main Container - The Border acts as the Bezel, Overflow acts as the screen mask */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-[6px] border-[#1b1b1f] bg-black shadow-2xl z-10">
                {/* Screen Content */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={typeof src === "string" ? src : (src as any).src}
                    alt={alt}
                    className="w-full h-full object-cover object-top"
                />

                {/* Inner Border (Screen Edge reflection) - Inset by 0 to sit on top of image, inside border */}
                <div className="absolute inset-0 border-[2px] border-black/50 rounded-[2.5rem] pointer-events-none mix-blend-multiply" />

                {/* Reflections/Gloss */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
            </div>

            {/* Dynamic Island - Positioned relative to the container, but outside overflow? 
                Actually, if we use overflow-hidden on the main container, the dynamic island MUST be inside.
                But the Dynamic Island is black, so it blends with the notch. 
            */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
                <div className="w-2/3 h-2/3 bg-[#101010] rounded-full" />
            </div>
        </div>
    );
}

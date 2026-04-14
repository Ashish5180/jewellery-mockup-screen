"use client";

import { Cormorant_Garamond, Parisienne } from "next/font/google";

const displayFont = Cormorant_Garamond({ 
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"], 
    variable: "--font-display" 
});
const scriptFont = Parisienne({ weight: "400", subsets: ["latin"], variable: "--font-script" });

export function HeroSection() {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            <style jsx>{`
                @keyframes scrollLine {
                    0% { transform: scaleY(0); transform-origin: top; }
                    50% { transform: scaleY(1); transform-origin: top; }
                    51% { transform: scaleY(1); transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }
                .scroll-line {
                    animation: scrollLine 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
                }
            `}</style>
            
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
                <div className="mb-6 overflow-hidden">
                    <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase opacity-60 block transform transition-all duration-1000 translate-y-0">
                        The 2026 Heritage Selection
                    </span>
                </div>
                
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] ${displayFont.className} leading-[1.1]`}>
                    The Essence of <br />
                    <span className={`${scriptFont.className} italic text-5xl md:text-7xl lg:text-8xl block my-2 opacity-90`}>
                        Refined
                    </span>
                    Brilliance
                </h1>
                
                <p className="max-w-xl text-xs md:text-sm font-light tracking-[0.25em] opacity-70 uppercase mt-8 leading-relaxed">
                    Exquisite masterpieces meticulously crafted <br className="hidden md:block" />
                    to illuminate your unique elegance.
                </p>
                
                <div className="mt-12 group">
                    <button className="relative px-10 py-4 border border-white/20 text-white text-[10px] tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:border-white/60">
                        <span className="relative z-10">Explore Collections</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                        <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Explore Collections
                        </span>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
                <span className="text-[9px] tracking-[0.6em] text-white/40 uppercase rotate-0">Scroll</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <div className="scroll-line absolute inset-0 bg-white/60" />
                </div>
            </div>
        </section>
    );
}
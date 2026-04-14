"use client";

import Image from "next/image";
import { Cormorant_Garamond, Parisienne } from "next/font/google";

const displayFont = Cormorant_Garamond({ 
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"], 
    variable: "--font-display" 
});
const scriptFont = Parisienne({ weight: "400", subsets: ["latin"], variable: "--font-script" });

export default function Shades() {
    return (
        <section
            className={`bg-[#fdfbf9] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 text-center ${displayFont.variable} ${scriptFont.variable} overflow-hidden`}
        >
            {/* Header Tag */}
            <div className="mb-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#800020]/60 font-semibold">Our Curation Spectrum</span>
            </div>

            {/* Heading */}
            <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight ${displayFont.className}`}>
                The Heritage <span className={scriptFont.className} style={{ fontWeight: 400 }}>Style Spectrum</span>
            </h2>

            {/* Subheading */}
            <p
                className={`mt-6 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light tracking-wide leading-relaxed ${displayFont.className}`}
            >
                From minimalist gold accents to grand artisanal masterpieces, find the perfect curation 
                to illuminate your unique journey and celebrate your heritage.
            </p>

            {/* Button */}
            <div className="mt-8 sm:mt-10">
                <button
                    className={`border border-[#800020]/30 text-[#800020] px-8 sm:px-10 py-3 text-[10px] tracking-[0.4em] uppercase
                     relative transition-all duration-500 hover:bg-[#800020] hover:text-white hover:border-[#800020] ${displayFont.className}`}
                >
                    Find Your Style
                </button>
            </div>

            {/* Images */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="group cursor-pointer">
                    <div className="overflow-hidden bg-[#f4f0ed] aspect-[4/5] relative">
                        <Image
                            src="/images/Maangtika-3.jpg"
                            alt="Minimalist Jewelry"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <p className={`mt-4 text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-[#800020] transition-colors ${displayFont.className}`}>Minimalist</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="overflow-hidden bg-[#f4f0ed] aspect-[4/5] relative">
                        <Image
                            src="/images/Mangtika-8-1.jpg"
                            alt="Traditional Jewelry"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <p className={`mt-4 text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-[#800020] transition-colors ${displayFont.className}`}>Traditional</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="overflow-hidden bg-[#f4f0ed] aspect-[4/5] relative">
                        <Image
                            src="/images/Nath-4.jpg"
                            alt="Bridal Masterpieces"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <p className={`mt-4 text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-[#800020] transition-colors ${displayFont.className}`}>Bridal</p>
                </div>
            </div>

            {/* Shade Bar (spectrum of gold/craft) */}
            <div className="mt-20 w-full max-w-4xl mx-auto flex flex-col items-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#800020]/20 to-transparent mb-8" />
                <div className="w-full h-[4px] bg-gradient-to-r from-[#D4AF37]/20 via-[#800020]/40 to-[#D4AF37]/20" />
                
                {/* Labels */}
                <div className={`w-full grid grid-cols-2 md:grid-cols-6 gap-y-4 md:gap-y-0 text-[10px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 mt-8 px-1 ${displayFont.className}`}>
                    <span className="text-center">Daily Wear</span>
                    <span className="text-center">Contemporary</span>
                    <span className="text-center">Festive</span>
                    <span className="text-center">Heritage</span>
                    <span className="text-center">Bridal</span>
                    <span className="text-center">Royal</span>
                </div>
            </div>

        </section>
    );
}
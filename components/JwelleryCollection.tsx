"use client";
import { useState } from "react";
import Image from "next/image";

/* ── Discover Button ─────────────────────────────────────────── */
function DiscoverButton() {
    return (
        <button
            className="group relative overflow-hidden font-sans text-[10px] font-medium tracking-[0.4em] uppercase text-[#1a1a1a] px-8 py-3.5 border border-[#1a1a1a] cursor-pointer transition-all duration-500 hover:text-[#faf8f5]"
        >
            <div className="absolute inset-0 bg-[#1a1a1a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left -z-10" />
            <span className="relative z-10">Discover More</span>
        </button>
    );
}

/* ── Single Jewellery Row ────────────────────────────────────── */
interface JewellerySectionRowProps {
    reverse?: boolean;
    imageSrc: string;
    imageAlt: string;
    eyebrowText: string;
    headingLine1: string;
    headingLine2: string;
    bodyText: string;
}

function JewellerySectionRow({
    reverse = false,
    imageSrc,
    imageAlt,
    eyebrowText,
    headingLine1,
    headingLine2,
    bodyText,
}: JewellerySectionRowProps) {
    const [imgHovered, setImgHovered] = useState(false);

    return (
        <section
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch min-h-0 lg:min-h-[580px] overflow-hidden`}
        >
            {/* ── Image Block ── */}
            <div
                className="w-full lg:w-[62%] min-h-[400px] lg:min-h-0 relative overflow-hidden"
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 62vw"
                    className={`object-cover transition-transform duration-[1200ms] ease-out ${imgHovered ? "scale-105" : "scale-100"}`}
                />
                {/* subtle directional shadow */}
                <div
                    className={`absolute inset-0 pointer-events-none ${reverse
                            ? "bg-gradient-to-l from-black/5 to-transparent"
                            : "bg-gradient-to-r from-black/5 to-transparent"
                        }`}
                />
            </div>

            {/* ── Content Block ── */}
            <div
                className="flex-1 flex flex-col justify-center items-center text-center p-10 lg:p-20 bg-[#faf8f5] relative"
            >
                {/* decorative inner border */}
                <div
                    aria-hidden="true"
                    className="absolute inset-8 lg:inset-12 border border-[#b4945a]/25 pointer-events-none"
                />

                {/* ornament */}
                <span
                    className="font-serif text-xl text-[#b4945a]/50 mb-4 tracking-[0.5em] block"
                >
                    ✦
                </span>

                {/* eyebrow */}
                <p
                    className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-[#b4945a] mb-5 opacity-90"
                >
                    {eyebrowText}
                </p>

                {/* heading */}
                <h2
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide uppercase leading-tight text-[#1a1a1a] mb-6"
                >
                    {headingLine1}
                    <br />
                    {headingLine2}
                </h2>

                {/* gold divider */}
                <div
                    aria-hidden="true"
                    className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#b4945a] to-transparent mx-auto mb-6"
                />

                {/* body text */}
                <p
                    className="font-serif text-base sm:text-lg font-light leading-relaxed text-[#555] tracking-wide max-w-xs mb-10 italic"
                >
                    {bodyText}
                </p>

                <DiscoverButton />
            </div>
        </section>
    );
}

/* ── Main Export ─────────────────────────────────────────────── */
export default function JewellerySection() {
    return (
        <div
            className="font-serif bg-[#faf8f5] text-[#1a1a1a] overflow-hidden"
        >
             {/* Google Fonts are now loaded in layout.tsx */}

            <JewellerySectionRow
                imageSrc="/images/image1.jpg"
                imageAlt="Diamond Jewellery"
                eyebrowText="Precious & Brilliant"
                headingLine1="Diamond"
                headingLine2="Jewellery"
                bodyText="Gift your special moments the brilliant sparkle and charm of eternity with prudently crafted diamond necklaces, earrings, and bangles."
            />

            <JewellerySectionRow
                reverse
                imageSrc="/images/image2.jpg"
                imageAlt="Gold Jewellery"
                eyebrowText="Timeless & Cherished"
                headingLine1="Gold"
                headingLine2="Jewellery"
                bodyText="Whether it is one of those important occasions in our life or just ordinary moments, our gold jewellery collection makes for the most popular choice."
            />
        </div>
    );
}
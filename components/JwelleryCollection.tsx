"use client";
import { useState } from "react";
import Image from "next/image";

/* ── Discover Button ─────────────────────────────────────────── */
function DiscoverButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: hovered ? "#faf8f5" : "#1a1a1a",
                padding: "14px 32px",
                border: "1px solid #1a1a1a",
                background: hovered ? "#1a1a1a" : "transparent",
                cursor: "pointer",
                transition: "all 0.4s ease",
            }}
        >
            Discover More
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
            style={{
                display: "flex",
                alignItems: "stretch",
                minHeight: 580,
                overflow: "hidden",
                flexDirection: reverse ? "row-reverse" : "row",
            }}
        >
            {/* ── Image Block ── */}
            <div
                style={{ flex: "0 0 62%", position: "relative", overflow: "hidden" }}
                onMouseEnter={() => setImgHovered(true)}
                onMouseLeave={() => setImgHovered(false)}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 62vw"
                    style={{
                        objectFit: "cover",
                        transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        transform: imgHovered ? "scale(1.04)" : "scale(1)",
                    }}
                />
                {/* subtle directional shadow */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: reverse
                            ? "linear-gradient(to left, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)"
                            : "linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* ── Content Block ── */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "60px 52px",
                    background: "#faf8f5",
                    position: "relative",
                }}
            >
                {/* decorative inner border (div instead of ::before — no global CSS) */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        top: 48,
                        left: 48,
                        right: 48,
                        bottom: 48,
                        border: "0.5px solid rgba(180, 148, 90, 0.25)",
                        pointerEvents: "none",
                    }}
                />

                {/* ornament */}
                <span
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 20,
                        color: "#b4945a",
                        opacity: 0.5,
                        marginBottom: 16,
                        letterSpacing: 8,
                        display: "block",
                    }}
                >
                    ✦
                </span>

                {/* eyebrow */}
                <p
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 9,
                        fontWeight: 500,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#b4945a",
                        marginBottom: 20,
                        opacity: 0.9,
                    }}
                >
                    {eyebrowText}
                </p>

                {/* heading */}
                <h2
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(28px, 3.2vw, 40px)",
                        fontWeight: 400,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        color: "#1a1a1a",
                        marginBottom: 24,
                    }}
                >
                    {headingLine1}
                    <br />
                    {headingLine2}
                </h2>

                {/* gold divider */}
                <div
                    aria-hidden="true"
                    style={{
                        width: 36,
                        height: 1,
                        background:
                            "linear-gradient(to right, transparent, #b4945a, transparent)",
                        margin: "0 auto 24px",
                    }}
                />

                {/* body */}
                <p
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: "#555",
                        letterSpacing: 0.3,
                        maxWidth: 300,
                        marginBottom: 40,
                        fontStyle: "italic",
                    }}
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
            style={{
                fontFamily: "var(--font-cormorant), 'Georgia', serif",
                backgroundColor: "#faf8f5",
                color: "#1a1a1a",
                overflow: "hidden",
            }}
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
import { Playfair_Display, Parisienne, Montserrat } from "next/font/google";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const displayFont = Playfair_Display({ subsets: ["latin"] });
const scriptFont = Parisienne({ weight: "400", subsets: ["latin"] });
const accentFont = Montserrat({ subsets: ["latin"], weight: ["300", "500"] });

export default function CuratedJourney() {
    const journeySteps = [
        {
            number: "01",
            title: "Vision",
            description: "The conceptual birth. A single sketch that captures the weight of a thousand dreams.",
            image: "/images/jwl1.jpg",
            className: "md:col-span-4 translate-y-24",
            borderOffset: "translate-x-4 translate-y-4"
        },
        {
            number: "02",
            title: "Alchemy",
            description: "Boundless patience. Melting elements into forms that hold light captive.",
            image: "/images/jwl2.jpg",
            className: "md:col-span-5 -translate-y-16 z-20 md:mx-4",
            borderOffset: "-translate-x-6 translate-y-6"
        },
        {
            number: "03",
            title: "Eternity",
            description: "The masterpiece. A silent witness to your most precious milestones.",
            image: "/images/jwl3.jpg",
            className: "md:col-span-3 translate-y-32",
            borderOffset: "translate-x-6 -translate-y-6"
        }
    ];

    return (
        <section className="relative bg-[#FDFCFB] py-40 md:py-60 overflow-hidden text-neutral-900">
            {/* Ultra-Fine Background Grid / Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#b4945a 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />

            {/* Floating Sparkles - Subtle Atmosphere */}
            <div className="absolute top-1/4 left-20 animate-pulse transition-all duration-[3000ms]"><Sparkles className="text-[#b4945a66] w-4 h-4" /></div>
            <div className="absolute bottom-1/4 right-20 animate-pulse delay-1000"><Sparkles className="text-[#b4945a66] w-3 h-3" /></div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                {/* Visual Editorial Header */}
                <div className="flex flex-col items-start mb-40 relative">
                    {/* Vertical Text Decoration */}
                    <div className={`absolute -left-12 top-0 h-full hidden lg:flex flex-col justify-start items-center gap-12 ${accentFont.className}`}>
                        <div className="w-[1px] h-32 bg-[#b4945a33]" />
                        <span className="text-[10px] uppercase tracking-[10px] rotate-180 [writing-mode:vertical-rl] text-[#b4945a]">Curated Process</span>
                    </div>

                    <span className={`${scriptFont.className} text-[#b4945a] text-4xl md:text-5xl mb-6 ml-1`}>The Art of Devotion</span>
                    <h2 className={`${displayFont.className} text-5xl md:text-8xl lg:text-9xl font-light uppercase leading-[0.8] tracking-[-0.04em] mb-12`}>
                        Pure <br /> <span className="text-[#b4945a] ml-4 md:ml-20 italic">Radiance</span>
                    </h2>

                    <div className="max-w-md ml-1 text-neutral-400 text-xs md:text-sm font-light tracking-[2px] leading-relaxed uppercase pl-6 py-2">
                        A cinematic three-part odyssey through the soul of high-luxury craftsmanship.
                    </div>
                </div>

                {/* Staggered Wireframe Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-0 relative h-full">
                    {journeySteps.map((step, idx) => (
                        <div key={idx} className={`relative group flex flex-col ${step.className}`}>



                            {/* Image Container with Custom Shadow & Shimmer */}
                            <div className="relative p-[1px] bg-[#b4945a22] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(180,148,90,0.15)] overflow-hidden">
                                <div className="relative aspect-[4/5.5] overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[3s] scale-[1.05] group-hover:scale-100"
                                    />
                                    {/* Luxury Shimmer Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
                                </div>
                            </div>

                            {/* Refined Content Overlay */}
                            <div className="mt-12 group-hover:pl-4 transition-all duration-500 ease-out border-transparent">
                                <h3 className={`${displayFont.className} text-2xl md:text-3xl mb-4 text-neutral-900 tracking-[-0.01em] uppercase flex items-center`}>
                                    <span className="text-[#b4945a] text-[10px] font-sans tracking-[4px] mr-6">{step.number}</span>
                                    {step.title}
                                </h3>
                                <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[260px] ml-12">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Signature CTA - Minimal Version */}
                <div className="mt-32 flex flex-col items-center">
                    <button className="relative group overflow-hidden px-12 py-4 bg-transparent border border-neutral-200 hover:border-[#b4945a] transition-colors duration-500">
                        <span className={`relative z-10 text-[10px] tracking-[6px] uppercase font-medium text-neutral-900 transition-colors duration-500 group-hover:text-white`}>
                            Enter The Studio
                        </span>
                        {/* Dramatic Fill Background */}
                        <div className="absolute inset-y-0 left-0 w-0 bg-[#b4945a] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                    </button>

                    <div className="mt-8 w-[1px] h-16 bg-gradient-to-t from-transparent via-[#b4945a22] to-transparent" />
                </div>
            </div>

            {/* Subtle Texture Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b4945a] opacity-[0.01] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </section>
    );
}

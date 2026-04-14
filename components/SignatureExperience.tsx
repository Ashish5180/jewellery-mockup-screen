import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const displayFont = Playfair_Display({ subsets: ["latin"] });

export default function SignatureExperience() {
    const features = [
        {
            title: "Ethically Sourced",
            image: "/images/image11.jpg",
            tag: "Sustainability"
        },
        {
            title: "Master Artistry",
            image: "/images/image22.jpg",
            tag: "Handcrafted"
        },
        {
            title: "Lifetime Legacy",
            image: "/images/image33.jpg",
            tag: "Quality"
        }
    ];

    return (
        <section className="relative bg-[#FAF9F7] text-neutral-900 py-32 overflow-hidden border-t border-neutral-100">
            {/* Background Texture/Grain - Subtle Light Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#b4945a22_0%,_transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Section Ornament */}
                <div className="flex justify-center mb-10 items-center">
                    <div className="w-16 h-[1px] bg-[#b4945a]/30" />
                    <div className="mx-6 text-[#b4945a] text-2xl font-light">✧</div>
                    <div className="w-16 h-[1px] bg-[#b4945a]/30" />
                </div>

                {/* Main Heading */}
                <div className="mb-20">
                    <span className="text-[#b4945a] uppercase tracking-[6px] text-xs font-medium mb-4 block underline underline-offset-8 decoration-[#b4945a44]">The Artisanal Standard</span>
                    <h2 className={`${displayFont.className} text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight uppercase`}>
                        Purely <span className="text-[#b4945a] italic font-normal">Exquisite</span>
                    </h2>
                </div>

                {/* Visual Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 sm:px-0">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-neutral-200">
                            {/* The Image */}
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[#b4945a] text-[10px] tracking-[4px] uppercase font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    {feature.tag}
                                </span>
                                <h3 className={`${displayFont.className} text-white text-2xl md:text-3xl font-light tracking-wide uppercase`}>
                                    {feature.title}
                                </h3>

                                {/* Subtle decorative line */}
                                <div className="w-0 h-[1.5px] bg-[#b4945a] mt-4 group-hover:w-16 transition-all duration-700 delay-200" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-28">
                    <button className="group relative px-12 py-5 text-neutral-900 border border-neutral-900 font-medium text-xs tracking-[5px] uppercase overflow-hidden transition-all duration-500 hover:text-white">
                        <span className="relative z-10">Discover Full Artistry</span>
                        <div className="absolute inset-0 bg-[#b4945a] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                    </button>
                </div>
            </div>

            {/* Subtle Texture Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#b4945a] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#b4945a11] rounded-full pointer-events-none" />
        </section>
    );
}

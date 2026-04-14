import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const displayFont = Playfair_Display({ subsets: ["latin"] });

export function NewCollections() {
    return (
        <>
            {/* Text Banner */}
            <section className="w-full bg-white py-10 md:py-14">
                <div className="text-center">
                    <h2
                        className={`text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] uppercase text-neutral-900 font-light ${displayFont.className}`}
                    >
                        Discover Our New Collections
                    </h2>
                </div>
            </section>

            {/* Full-width Image */}
            <section className="w-full relative">
                <Image
                    src="/images/image3.jpg"
                    alt="New Collection — Necklace"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover block"
                    priority
                />
            </section>
        </>
    );
}

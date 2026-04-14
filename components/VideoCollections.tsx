import { Playfair_Display } from "next/font/google";

const displayFont = Playfair_Display({ subsets: ["latin"] });

export function VideoCollections() {
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

            {/* Full-width Video */}
            <section className="w-full relative overflow-hidden h-[60vh] md:h-screen">
                <video
                    src="/videos/video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover block"
                />
            </section>
        </>
    );
}

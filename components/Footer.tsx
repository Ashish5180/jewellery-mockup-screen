import { Cormorant_Garamond, Montserrat, Parisienne } from "next/font/google";

const displayFont = Cormorant_Garamond({ 
    weight: ["300", "400", "500", "600"],
    subsets: ["latin"] 
});
const accentFont = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500"] });
const scriptFont = Parisienne({ weight: "400", subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className="bg-[#fcfaf8] text-neutral-800 pt-24 pb-12 relative overflow-hidden border-t border-neutral-100">
            <div className="max-w-[1400px] mx-auto px-10">
                {/* Upper Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
                    
                    {/* Brand Pillar */}
                    <div className="lg:col-span-5 flex flex-col items-start gap-8">
                        <div>
                             <span className={`${scriptFont.className} text-[#800020] text-3xl mb-2 block`}>Heritage of Elegance</span>
                             <h2 className={`${displayFont.className} text-4xl lg:text-5xl font-extralight uppercase tracking-[0.15em]`}>
                                House of <br /> Rajwada
                             </h2>
                        </div>
                        <p className="max-w-md text-neutral-500 font-light leading-relaxed text-sm lg:text-base tracking-wide">
                            Curating legacy-worthy masterpieces through artisanal craftsmanship and heritage techniques. From our royal atelier to your most cherished milestones, we redefine the art of timeless adornment.
                        </p>
                        
                        {/* Newsletter Small */}
                        <div className="w-full max-w-sm mt-6">
                            <span className="text-[10px] uppercase tracking-[4px] font-medium mb-5 block text-neutral-400">Join the Circle</span>
                            <div className="relative border-b border-neutral-200 pb-3 flex items-center group focus-within:border-[#800020] transition-all duration-500">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="bg-transparent border-none outline-none w-full text-xs font-light tracking-widest placeholder:text-neutral-300 pr-10"
                                />
                                <button className="text-[10px] uppercase tracking-[3px] font-semibold text-neutral-400 hover:text-[#800020] transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 mt-4">
                        
                        {/* Column 1: Collections */}
                        <div className="flex flex-col gap-6">
                            <h4 className={`${accentFont.className} text-[10px] font-semibold uppercase tracking-[5px] text-[#800020]/70`}>Collections</h4>
                            <ul className="flex flex-col gap-4 text-[12px] font-light text-neutral-500 tracking-wider">
                                <li><a href="#" className="hover:text-[#800020] transition-colors">High Jewelry</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Bridal Heritage</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Signature Necklaces</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Artisanal Bangles</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Bespoke Gems</a></li>
                            </ul>
                        </div>

                        {/* Column 2: House */}
                        <div className="flex flex-col gap-6">
                            <h4 className={`${accentFont.className} text-[10px] font-semibold uppercase tracking-[5px] text-[#800020]/70`}>The House</h4>
                            <ul className="flex flex-col gap-4 text-[12px] font-light text-neutral-500 tracking-wider">
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Our Dynasty</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Ethical Craft</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Master Artisans</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Flagship Boutiques</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Press Room</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div className="flex flex-col gap-6">
                            <h4 className={`${accentFont.className} text-[10px] font-semibold uppercase tracking-[5px] text-[#800020]/70`}>Essentials</h4>
                            <ul className="flex flex-col gap-4 text-[12px] font-light text-neutral-500 tracking-wider">
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Bespoke Design</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Jewelry Care</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Lifetime Guarantee</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">Expert Consultation</a></li>
                                <li><a href="#" className="hover:text-[#800020] transition-colors">White-Glove Delivery</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Contact Details */}
                <div className="border-y border-neutral-100 py-12 flex flex-wrap justify-between gap-10 items-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-[#800020]/60 uppercase tracking-[4px] font-medium">Flagship Atelier</span>
                        <span className="text-xs font-light text-neutral-500 uppercase tracking-[2px]">The Pink City, Jaipur, India</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-[#800020]/60 uppercase tracking-[4px] font-medium">Inquiries</span>
                        <span className="text-xs font-light text-neutral-500 uppercase tracking-[2px]">concierge@rajwada.com</span>
                    </div>
                    <div className="flex gap-12">
                        <a href="#" className="text-[10px] text-neutral-400 uppercase tracking-[3px] hover:text-[#800020] transition-all">Instagram</a>
                        <a href="#" className="text-[10px] text-neutral-400 uppercase tracking-[3px] hover:text-[#800020] transition-all">Pinterest</a>
                        <a href="#" className="text-[10px] text-neutral-400 uppercase tracking-[3px] hover:text-[#800020] transition-all">Facebook</a>
                    </div>
                </div>

                {/* Bottom Section: Legal & Copyright */}
                <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex gap-10 text-[9px] text-neutral-300 uppercase tracking-[3px]">
                         <a href="#" className="hover:text-black transition-colors">Privacy</a>
                         <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                         <a href="#" className="hover:text-black transition-colors">Legal Inquiry</a>
                    </div>
                    <p className="text-[9px] text-neutral-300 uppercase tracking-[4px]">
                        &copy; 2026 House of Rajwada. All rights reserved.
                    </p>
                </div>
            </div>
            
            {/* Extremely Subtle Texture Backdrop */}
            <div className={`absolute -bottom-24 -right-12 text-[15vw] text-neutral-900/[0.02] tracking-tighter select-none pointer-events-none ${displayFont.className}`}>
                RAJWADA
            </div>
        </footer>
    );
}

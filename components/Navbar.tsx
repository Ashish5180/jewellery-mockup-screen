"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown } from "lucide-react";
import { Playfair_Display, Parisienne } from "next/font/google";
import Link from "next/link";

// Font setup
const scriptFont = Parisienne({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-script",
});
const displayFont = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
});

export function Navbar({ navBg }: { navBg: boolean }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const hoverCloseTimerRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen || isSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, isSearchOpen]);

    const clearHoverTimer = () => {
        if (hoverCloseTimerRef.current) {
            window.clearTimeout(hoverCloseTimerRef.current);
            hoverCloseTimerRef.current = null;
        }
    };

    const openShop = () => {
        clearHoverTimer();
        setIsShopOpen(true);
    };

    const scheduleCloseShop = () => {
        clearHoverTimer();
        hoverCloseTimerRef.current = window.setTimeout(() => {
            setIsShopOpen(false);
        }, 200);
    };

    const categories = [
        { name: "Necklaces", image: "/images/necklace-5-2.jpg", href: "#" },
        { name: "Maangtikka", image: "/images/Maangtika-3.jpg", href: "#" },
        { name: "Nath", image: "/images/Nath-4.jpg", href: "#" },
        { name: "Bridal Wear", image: "/images/Mangtika-8-1.jpg", href: "#" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${navBg || isScrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-b border-[#800020]/5"
                        : "bg-transparent py-6"
                    }`}
            >
                <style jsx>{`
                    .nav-link {
                        position: relative;
                        text-decoration: none;
                        font-size: 0.85rem;
                        letter-spacing: 0.15em;
                        text-transform: uppercase;
                        transition: all 0.4s ease;
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 1px;
                        bottom: -4px;
                        left: 50%;
                        background-color: currentColor;
                        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                        transform: translateX(-50%);
                    }
                    .nav-link:hover::after {
                        width: 100%;
                    }
                    .mega-menu {
                        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                        transform-origin: top;
                    }
                    .logo-glow {
                        text-shadow: 0 0 20px rgba(255,255,255,0.2);
                    }
                `}</style>

                <div className={`max-w-[1600px] mx-auto px-4 md:px-10 ${displayFont.className}`}>
                    <div className="flex items-center justify-between">

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 z-[70] relative active:scale-90 transition-all duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="relative w-6 h-5">
                            <span className={`absolute left-0 w-full h-0.5 transition-all duration-500 ${navBg || isScrolled || isOpen ? "bg-[#800020]" : "bg-white"
                                } ${isOpen ? "top-2 rotate-45" : "top-0"}`} />
                            <span className={`absolute left-0 w-full h-0.5 top-2 transition-all duration-300 ${navBg || isScrolled || isOpen ? "bg-[#800020]" : "bg-white"
                                } ${isOpen ? "opacity-0 -translate-x-4" : "opacity-100"}`} />
                            <span className={`absolute left-0 w-full h-0.5 transition-all duration-500 ${navBg || isScrolled || isOpen ? "bg-[#800020]" : "bg-white"
                                } ${isOpen ? "top-2 -rotate-45" : "bottom-0"}`} />
                        </div>
                    </button>

                        {/* Left Navigation (Desktop) */}
                        <div className="hidden lg:flex items-center gap-10 flex-1">
                            <div
                                className="relative group h-full py-2"
                                onMouseEnter={openShop}
                                onMouseLeave={scheduleCloseShop}
                            >
                                <button className={`nav-link flex items-center gap-2 font-semibold ${navBg || isScrolled ? "text-[#800020]" : "text-white"
                                    }`}>
                                    Collections <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isShopOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Mega Menu */}
                                <div className={`mega-menu absolute top-[calc(100%+0.5rem)] left-0 w-[650px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden ${isShopOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                                    }`}>
                                    <div className="p-10 grid grid-cols-2 gap-10 bg-gradient-to-br from-white to-[#fdfaf8]">
                                        {categories.map((cat) => (
                                            <Link key={cat.name} href={cat.href} className="flex items-center gap-5 group/item outline-none">
                                                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg transition-all duration-700 group-hover/item:scale-110 group-hover/item:rotate-3">
                                                    <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 100vw, 96px" className="object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[#800020] font-bold text-xl tracking-tight">{cat.name}</h4>
                                                    <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-light">Heritage Series</p>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 pt-8 border-t border-[#800020]/5 text-center">
                                            <Link href="#" className="text-[#800020] text-xs font-black uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all">
                                                Explore All Masterpieces
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href="#" className={`nav-link font-semibold ${navBg || isScrolled ? "text-[#800020]" : "text-white"}`}>
                                Bespoke
                            </Link>
                            <Link href="#" className={`nav-link font-semibold ${navBg || isScrolled ? "text-[#800020]" : "text-white"}`}>
                                Heritage
                            </Link>
                        </div>

                    {/* Center Logo */}
                    <div className="flex flex-col items-center flex-shrink-0 px-2 group cursor-pointer z-[70]">
                        <Link href="/" className={`text-xl sm:text-2xl md:text-5xl transition-all duration-700 ease-out logo-glow ${scriptFont.className} ${navBg || isScrolled || isOpen ? "text-[#800020] scale-90" : "text-white scale-100"
                            }`}>
                            House of Rajwada
                        </Link>
                        <div className="hidden md:flex items-center gap-3 mt-1.5 overflow-hidden">
                            <div className={`h-[0.5px] w-8 transition-all duration-700 ${navBg || isScrolled ? "bg-[#800020]/30" : "bg-white/30"}`} />
                            <span className={`text-[9px] tracking-[0.5em] font-medium uppercase transition-all duration-700 ${navBg || isScrolled ? "text-[#800020] opacity-100" : "text-white opacity-60"
                                }`}>
                                Purveyors of Elegance
                            </span>
                            <div className={`h-[0.5px] w-8 transition-all duration-700 ${navBg || isScrolled ? "bg-[#800020]/30" : "bg-white/30"}`} />
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-10 flex-1">
                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                            <button onClick={() => setIsSearchOpen(true)} className="hover:scale-110 active:scale-90 transition-all duration-300">
                                <Search className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] stroke-[1.5px] ${navBg || isScrolled || isOpen ? "text-[#800020]" : "text-white"}`} />
                            </button>
                            <Link href="#" className="hidden sm:block hover:scale-110 active:scale-90 transition-all duration-300 relative">
                                <Heart className={`w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] stroke-[1.5px] ${navBg || isScrolled || isOpen ? "text-[#800020]" : "text-white"}`} />
                            </Link>
                            <Link href="#" className="hover:scale-110 active:scale-90 transition-all duration-300">
                                <ShoppingCart className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] stroke-[1.5px] ${navBg || isScrolled || isOpen ? "text-[#800020]" : "text-white"}`} />
                            </Link>
                        </div>
                    </div>
                </div>
                </div>

                {/* Premium Mobile Menu Overlay - Moved inside nav to respect stacking context */}
                <div className={`lg:hidden fixed inset-0 z-[60] bg-gradient-to-b from-[#fdfaf8] via-[#fffcf9] to-[#fdfaf8] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}>
                    <div className="h-full flex flex-col pt-32 pb-10 px-6 sm:px-8 overflow-y-auto">
                        <div className="flex flex-col gap-1 max-w-sm mx-auto w-full">
                            {["Collections", "Bespoke", "Heritage", "High Jewelry", "World of Rajwada"].map((link, index) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className={`group flex items-center justify-between py-5 border-b border-[#800020]/5 transition-all duration-700 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                                    style={{ transitionDelay: `${index * 80}ms` }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-2xl font-light tracking-widest text-[#800020] uppercase group-hover:pl-4 transition-all duration-500">{link}</span>
                                    <div className="w-8 h-8 rounded-full border border-[#800020]/10 flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-all duration-500">
                                        <ChevronDown className="-rotate-90 w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Featured Section */}
                        <div className={`mt-12 max-w-sm mx-auto w-full transition-all duration-1000 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            <p className="text-[10px] tracking-[0.4em] uppercase text-[#800020]/40 font-bold mb-6 text-center">The Artisanal Gallery</p>
                            <div className="grid grid-cols-2 gap-4">
                                {categories.slice(0, 2).map((cat) => (
                                    <Link key={cat.name} href={cat.href} className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-sm">
                                        <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                        <span className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest font-medium">{cat.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Info */}
                        <div className={`mt-auto pt-10 flex flex-col items-center gap-8 transition-all duration-1000 delay-700 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                            <div className="flex gap-10">
                                <Link href="#" className="flex flex-col items-center gap-2 group">
                                    <div className="w-12 h-12 rounded-full border border-[#800020]/10 flex items-center justify-center text-[#800020] group-hover:bg-[#800020] group-hover:text-white transition-all">
                                        <User size={18} strokeWidth={1} />
                                    </div>
                                    <span className="text-[8px] uppercase tracking-widest text-[#800020]/60">Account</span>
                                </Link>
                                <Link href="#" className="flex flex-col items-center gap-2 group">
                                    <div className="w-12 h-12 rounded-full border border-[#800020]/10 flex items-center justify-center text-[#800020] group-hover:bg-[#800020] group-hover:text-white transition-all">
                                        <Heart size={18} strokeWidth={1} />
                                    </div>
                                    <span className="text-[8px] uppercase tracking-widest text-[#800020]/60">Wishlist</span>
                                </Link>
                                <Link href="#" className="flex flex-col items-center gap-2 group">
                                    <div className="w-12 h-12 rounded-full border border-[#800020]/10 flex items-center justify-center text-[#800020] group-hover:bg-[#800020] group-hover:text-white transition-all">
                                        <Search size={18} strokeWidth={1} />
                                    </div>
                                    <span className="text-[8px] uppercase tracking-widest text-[#800020]/60">Search</span>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-[1px] w-12 bg-[#800020]/10 mb-2" />
                                <p className="text-[9px] tracking-[0.6em] uppercase text-[#800020]/40 font-medium">House of Rajwada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-[100] bg-[#800020]/95 backdrop-blur-2xl transition-all duration-700 ${isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-500"
                >
                    <X size={40} className="stroke-[1px]" />
                </button>
                <div className="h-full flex flex-col justify-center items-center px-6">
                    <div className={`w-full max-w-3xl ${displayFont.className}`}>
                        <p className="text-white/50 text-xs tracking-[0.5em] uppercase mb-8 text-center">What are you looking for?</p>
                        <input
                            type="text"
                            placeholder="SEARCH OUR COLLECTIONS..."
                            className="w-full bg-transparent border-b border-white/20 pb-6 text-2xl md:text-5xl text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-all text-center uppercase tracking-tighter"
                            autoFocus={isSearchOpen}
                        />
                        <div className="mt-12 flex flex-wrap justify-center gap-6">
                            {["Diamond Rings", "Heritage Necklaces", "Gold Bangles", "Bridal Sets"].map(tag => (
                                <button key={tag} className="px-6 py-2 rounded-full border border-white/10 text-white/60 text-xs tracking-widest uppercase hover:bg-white hover:text-[#800020] transition-all">
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
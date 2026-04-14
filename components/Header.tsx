"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevPathname, setPrevPathname] = useState(pathname);

    // Sync state with pathname during render to avoid useEffect cascade
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setIsScrolled(false);
    }

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsScrolled(!entry.isIntersecting);
            },
            { root: null, threshold: 0.1 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, [pathname]);

    // Derived state: solid if not on home page OR if scrolled past hero
    const navBg = pathname !== "/" || isScrolled;

    return <Navbar navBg={navBg} />;
}

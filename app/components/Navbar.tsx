"use client";
import { useState, useEffect } from "react";
import Link from 'next/link'
import { imperialScript } from '@/app/ui/fonts';
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const links = [
        { href: "/", label: "Kezdőlap" },
        { href: "/rolam", label: "Rólam" },
        { href: "/munkak", label: "Munkáim" },
        { href: "/kapcsolat", label: "Kapcsolat" },
    ];


    // Ha útvonal változik, csukjuk be a menüt (pl. back/forward esetén is)
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50">
            <div className="bg-stone-100 border-b border-neutral-600/40 backdrop-blur">
                <div className="flex items-center justify-between mx-auto max-w-350 h-20 px-4 lg:px-8">

                    {/* LOGO / NÉV */}
                    <div className={`text-4xl tracking-normal whitespace-nowrap
                                     text-stone-800
                                     ${imperialScript.className} lg:text-[3.4rem] text-shadow-gray-400/50
                                     text-shadow-xs`}>
                        <Link href="/" >
                            Cs K
                        </Link>
                    </div>

                    {/* MENÜ */}
                    <nav className="hidden items-center  lg:flex
                               gap-8
                                    tracking-wider uppercase
                                    text-neutral-900
                                    text-md h-full">


                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`nav-dec ${isActive(l.href)
                                    ? "active" : ""
                                    }`}
                            >
                                {l.label}
                            </Link>

                        ))}

                    </nav>


                    {/* Hamburger Menü - Mobilon */}
                    <button className="lg:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsOpen((v) => !v)}>
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                    </button>

                </div>

                {/* Mobile panel */}
                <div
                    className={`absolute w-full top-20 lg:hidden overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-96" : "max-h-0"
                        }`}
                >
                    <nav className=" w-full ">
                        <div className=" border border-stone-200 bg-white shadow-sm p-3">
                            {links.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`block rounded-xl mt-2 px-4 py-3 text-sm tracking-widest uppercase transition ${isActive(l.href)
                                        ? "bg-stone-100 text-stone-900"
                                        : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                                        }`}
                                    onClick={() => setIsOpen(false)} // kattintásra zár
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Navbar

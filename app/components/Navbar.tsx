
import Link from 'next/link'
import { imperialScript } from '@/app/ui/fonts';

const Navbar = () => {
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
                    <nav className="hidden items-center lg:flex
                                    gap-8
                                    tracking-wider uppercase
                                    text-neutral-900
                                    text-md">
                        <Link href="/" className="hover:text-rose-900 transition">
                            Kezdőlap
                        </Link>
                        <Link href="/rolam" className="hover:text-rose-900 transition">
                            Rólam
                        </Link>
                        <Link href="/munkak" className="hover:text-rose-900 transition">
                            Munkáim
                        </Link>
                        <Link href="/kapcsolat" className="hover:text-rose-900 transition">
                            Kapcsolat
                        </Link>
                    </nav>


                    {/* Hamburger Menü - Mobilon */}
                    <button className="lg:hidden flex flex-col gap-1.5 cursor-pointer">
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                        <span className="block w-6 h-0.5 bg-rose-900"></span>
                    </button>


                </div>
            </div>
        </header>
    )
}

export default Navbar

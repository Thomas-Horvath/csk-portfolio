import Link from "next/link";
import { imperialScript } from '../ui/fonts';


const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-300 ">
      <div className="mx-auto max-w-7xl px-8 py-16">

        {/* Felső rész */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Név / leírás */}
          <div>
            <p className={`${imperialScript.className} tracking-wider text-5xl text-stone-800`}>
              Csányi Katalin
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 max-w-xs">
              Szobrászművész.  
              Időtálló formák, csendes történetek.  
              Klasszikus szobrászat kortárs szemlélettel.
            </p>
          </div>

          {/* Navigáció */}
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-700">
              Navigáció
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>
                <Link href="/" className="hover:text-stone-900 transition">
                  Kezdőlap
                </Link>
              </li>
              <li>
                <Link href="/rolam" className="hover:text-stone-900 transition">
                  Rólam
                </Link>
              </li>
              <li>
                <Link href="/munkak" className="hover:text-stone-900 transition">
                  Munkáim
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="hover:text-stone-900 transition">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Kapcsolat */}
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-700">
              Kapcsolat
            </p>
            <div className="mt-4 space-y-2 text-sm text-stone-600">
              <p>E-mail:  
                <a
                  href="mailto:info@example.com"
                  className="ml-1 hover:text-stone-900 transition"
                >
                  info@example.com
                </a>
              </p>
              <p>
                Műterem: Budapest
              </p>
            </div>
          </div>

        </div>

        {/* Alsó sáv */}
        <div className="mt-16 pt-6 border-t border-stone-300 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} Csenye Katalin — Minden jog fenntartva.
          </p>
          <p>
            Portfolio website
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

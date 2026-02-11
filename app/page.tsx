import Link from "next/link";
import HeroDetails from "./components/HeroDetails";

export default function Home() {
  return (
    <>
    <main className="relative h-[calc(100vh-81px)] bg-[url('/hero-bg.jpg')] bg-cover bg-top">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Tartalom */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-350 px-12 w-full mx-auto">
          <div className="max-w-3xl text-neutral-100 flex flex-col items-center md:items-start">

            {/* Név */}
            <h1 className="text-4xl -ml-1 md:text-7xl leading-tight">
              Csányi Katalin
            </h1>

            {/* Alcím */}
            <p className="mt-8 text-3xl font-semibold tracking-wider text-neutral-200">
              Szobrászművész
            </p>

            {/* Finom elválasztó */}
            <div className="mt-6 h-px w-32 bg-neutral-300/60" />

            {/* Tagline */}
            <p className="text-center md:text-start tracking-wide  mt-6 text-base text-neutral-200 max-w-md">
              Időtálló formák, csendes történetek.  
              Klasszikus szobrászat kortárs szemlélettel.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/munkak"
                className="
                  inline-block
                  border border-neutral-200
                  px-8 py-3
                  text-sm
                  tracking-widest
                  uppercase
                  hover:bg-neutral-100
                  hover:text-neutral-900
                  transition
                "
              >
                Munkáim
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>

    <HeroDetails />
    </>
  );
}

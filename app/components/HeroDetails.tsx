import Image from 'next/image'
import works from "@/app/data/work.json";

function HeroDetails() {
    return (
        <section className="bg-stone-100">
            <div className="mx-auto max-w-350 px-8 py-20 space-y-20">

                {/* Featured works */}
                <div>
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl text-stone-800">Kiemelt munkák</h2>
                            <p className="mt-2 text-stone-600">
                                Válogatás az elmúlt évek portréiból és plasztikáiból.
                            </p>
                        </div>
                        <a
                            href="/munkak"
                            className="text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900 transition"
                        >
                            Összes munka →
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {works.slice(0,3).map((work) => (
                            <a
                                key={work.slug}
                                href="/munkak"
                                className="group bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <div className="relative aspect-4/4 bg-stone-200" >
                                    <Image src={work.coverImage} alt='szobor' fill className="object-cover object-top" />
                                </div>
                                <div className="p-5">
                                    <p className="text-stone-800 group-hover:text-stone-900 transition">{work.title}</p>
                                    <p className="mt-1 text-sm text-stone-600">   {work.material} · {work.year}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* About teaser */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative  bg-stone-200 aspect-square overflow-hidden max-w-lg" >
                        <Image src={'/about/about1.jpg'} alt='man' fill className="object-cover object-top" />
                    </div>
                    <div className="space-y-4 text-stone-700 leading-relaxed">
                        <h2 className="text-3xl text-stone-800">Rólam</h2>
                        <p className="mt-4 text-stone-600 leading-relaxed">
                            Időtálló formák, csendes történetek. A klasszikus szobrászati hagyományt
                            kortárs szemlélettel kapcsolom össze – portrék, kisplasztikák és köztéri munkák.
                        </p>
                        <a
                            href="/rolam"
                            className="inline-block mt-8 border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest
                     text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
                        >
                            Tovább
                        </a>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-3xl text-stone-800">Műfajok</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["Portré", "Kisplasztika", "Köztéri", "Bronz", "Kő"].map((c) => (
                            <span
                                key={c}
                                className="px-4 py-2  border border-stone-300 bg-white text-sm text-stone-700"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-sm bg-white border border-stone-200 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl text-stone-800">Megkeresés / együttműködés</h3>
                        <p className="mt-2 text-stone-600">
                            Szívesen egyeztetek megrendelésekről, kiállításokról és közös projektekről.
                        </p>
                    </div>
                    <a
                        href="/kapcsolat"
                        className="border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest text-stone-700
                   hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
                    >
                        Kapcsolat
                    </a>
                </div>

            </div>
        </section >

    )
}

export default HeroDetails
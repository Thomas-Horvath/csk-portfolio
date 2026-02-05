export default function AboutPage() {
  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-8 py-16 space-y-14">

        <header className="space-y-3">
          <h1 className="text-4xl text-stone-800">Rólam</h1>
          <p className="text-stone-600 max-w-2xl">
            Rövid bemutatkozó és művészi hitvallás – letisztultan, galéria hangulatban.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-stone-200 aspect-[4/3]" />
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>Ide jön a bio (6–10 mondat). Műfajok, anyagok, fókusz.</p>
            <p>2. bekezdés: inspirációk, módszer, munkafolyamat röviden.</p>

            <a className="inline-block mt-4 border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest
                          text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
               href="/cv.pdf">
              CV (PDF)
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-white border border-stone-200 p-8">
          <h2 className="text-2xl text-stone-800">Kiállítások / díjak</h2>
          <ul className="mt-6 space-y-4">
            {[
              { year: "2024", text: "Csoportos kiállítás – Budapest" },
              { year: "2022", text: "Egyéni tárlat – (helyszín)" },
              { year: "2020", text: "Alkotói ösztöndíj – (rövid)" },
            ].map((i) => (
              <li key={i.year} className="flex gap-6">
                <span className="w-16 text-stone-500">{i.year}</span>
                <span className="text-stone-700">{i.text}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}

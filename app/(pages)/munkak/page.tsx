export default function WorksPage() {
  const filters = ["Összes", "Köztéri", "Portré", "Kisplasztika", "Bronz", "Kő"];

  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-8 py-16 space-y-10">

        <header>
          <h1 className="text-4xl text-stone-800">Munkáim</h1>
          <p className="mt-3 text-stone-600 max-w-2xl">
            Válogatás. Kattintásra részletes oldal: leírás, anyag, méret, év, fotók.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              className="px-4 py-2 rounded-full border border-stone-300 bg-white text-sm text-stone-700
                         hover:border-stone-400 hover:text-stone-900 transition"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, idx) => (
            <a
              key={idx}
              href="/munkak/minta-munka"
              className="group rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] bg-stone-200" />
              <div className="p-5">
                <p className="text-stone-800 group-hover:text-stone-900 transition">
                  Mű címe {idx + 1}
                </p>
                <p className="mt-1 text-sm text-stone-600">Anyag · Év</p>
              </div>
            </a>
          ))}
        </section>

      </div>
    </main>
  );
}

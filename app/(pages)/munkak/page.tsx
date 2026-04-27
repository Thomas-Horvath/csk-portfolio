import Link from "next/link";
import LoadingImage from "@/app/components/LoadingImage";
import works from "@/app/data/work.json";

export default function WorksPage() {
  const filters = ["Összes", "Köztéri", "Portré", "Kisplasztika", "Bronz", "Kő"];
  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-350 px-8 py-16 space-y-10">

        {/* Fejléc */}
        <header>
          <h1 className="text-4xl text-stone-800">Munkáim</h1>
          <p className="mt-3 text-stone-600 max-w-2xl">
            Válogatás portrékból, kisplasztikákból és köztéri munkákból.
          </p>
        </header>

  {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              className="px-4 py-2  border border-stone-300 bg-white text-sm text-stone-700
                         hover:border-stone-400 hover:text-stone-900 transition cursor-pointer"
            >
              {f}
            </button>
          ))}
        </div>


        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <Link
              key={work.slug}
              href={`/munkak/${work.slug}`}
              className="group  bg-white border border-stone-200 overflow-hidden
                         shadow-sm hover:shadow-md transition"
            >
              {/* Kép */}
              <LoadingImage
                src={work.coverImage}
                alt={work.title}
                fill
                containerClassName="aspect-4/4"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Szöveg */}
              <div className="p-5">
                <p className="text-stone-800 group-hover:text-stone-900 transition">
                  {work.title}
                </p>
                <p className="mt-1 text-sm text-stone-600">
                  {work.material} · {work.year}
                </p>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}

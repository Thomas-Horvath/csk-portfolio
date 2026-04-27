
import Image from "next/image";
import Link from "next/link";
import works from "@/app/data/work.json";
import { notFound } from "next/navigation";
import WorkGalleryClient from "../WorkGalleryClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export const dynamicParams = false;

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) return notFound();

  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-6xl px-8 py-16 space-y-16">

        {/* Fő kép */}
        {/* <section className="relative aspect-3/4 max-h-200 mx-auto  overflow-hidden bg-stone-200">
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            className="object-cover object-top"
            priority
          />
        </section> */}

        {/* Cím + meta */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl text-stone-800">{work.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-stone-600">
              <span>{work.material}</span>
              <span>·</span>
              <span>{work.year}</span>
              <span>·</span>
              <span>{work.dimensions}</span>
            </div>
          </div>

          {/* Meta doboz */}
          {work.category.length > 0 && (
            <aside className="rounded-sm bg-white border border-stone-200 p-6 space-y-3 text-sm text-stone-700">
              <div>
                <span className="text-stone-500">Műfaj</span>
                <p>{work.category.join(", ")}</p>
              </div>
            </aside>
          )}
        </section>

        {/* Leírás */}
        <section className=" space-y-4 text-stone-700 leading-relaxed">
          {work.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>



        {/* KLIENS GALÉRIA + MODAL */}
        <WorkGalleryClient
          title={work.title}
          coverImage={work.coverImage}
          images={[...work.images]}
        />












        {/* Vissza */}
        <section className="pt-10 border-t border-stone-300">
          <Link
            href="/munkak"
            className="inline-block border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest
                       text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
          >
            ← Vissza a munkákhoz
          </Link>
        </section>

      </div >
    </main >
  );
}




import LoadingImage from "@/app/components/LoadingImage";

export default function ContactPage() {
  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-350 px-8 py-16 space-y-10">

        <header>
          <h1 className="text-4xl text-stone-800">Kapcsolat</h1>
          <p className="mt-3 text-stone-600 max-w-2xl">
            Üzenj nyugodtan – megrendelés, együttműködés, kiállítási egyeztetés.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-sm bg-white border border-stone-200 p-8">
            <form className="space-y-5">
              <div>
                <label className="text-sm text-stone-700">Név</label>
                <input className="mt-2 w-full  border border-stone-300 bg-stone-50 px-4 py-3 outline-none
                                  focus:border-stone-500"
                       placeholder="Teljes név" />
              </div>
              <div>
                <label className="text-sm text-stone-700">E-mail</label>
                <input className="mt-2 w-full  border border-stone-300 bg-stone-50 px-4 py-3 outline-none
                                  focus:border-stone-500"
                       placeholder="email@pelda.hu" />
              </div>
              <div>
                <label className="text-sm text-stone-700">Üzenet</label>
                <textarea className="mt-2 w-full min-h-36  border border-stone-300 bg-stone-50 px-4 py-3 outline-none
                                     focus:border-stone-500"
                          placeholder="Írd le röviden…" />
              </div>

              <button
                type="button"
                className="border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest text-stone-700
                           hover:bg-stone-900 hover:text-white hover:border-stone-900 transition cursor-pointer"
              >
                Küldés
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-sm bg-white border border-stone-200 p-8">
              <h2 className="text-2xl text-stone-800">Elérhetőségek</h2>
              <div className="mt-4 space-y-2 text-stone-700">
                <p>E-mail: <span className="text-stone-900">info@example.com</span></p>
                <p>Műterem: <span className="text-stone-900">Budapest</span></p>
              </div>
            </div>

            <div className="rounded-sm bg-white border border-stone-200 p-8">
              <h2 className="text-2xl text-stone-800">Helyszín</h2>
              <LoadingImage
                src="/map.png"
                alt="map"
                fill
                containerClassName="mt-4 aspect-video"
                className="object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

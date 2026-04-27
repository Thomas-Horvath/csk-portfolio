import exh from '@/app/data/exhibitions.json';
import LoadingImage from "@/app/components/LoadingImage";

export default function AboutPage() {
  return (
    <main className="bg-stone-100">
      <div className="mx-auto max-w-350 px-8 py-16 space-y-14">

        <header className="space-y-3">
          {/* <h1 className="text-4xl text-stone-800">Rólam</h1> */}

          <h1 className="text-4xl text-stone-800">Csányi Katalin (1975, Szeged)</h1>

          <ul className="text-stone-600 max-w-2xl">

            <li><span className="text-stone-700 font-semibold mr-6">1990-1994</span> Szeged, Tömörkény István Művészeti Szakközépiskola kerámia szak</li>
            <li><span className="text-stone-700 font-semibold mr-6">1995-2001</span> Magyar Képzőművészeti Egyetem szobrász szak, Farkas Ádám osztály </li>
            <li><span className="text-stone-700 font-semibold mr-6">1995-2002 </span>	MKE tanár szak</li>

          </ul>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <LoadingImage
            src="/about/about1.jpg"
            alt=""
            fill
            containerClassName="aspect-square"
            className="object-cover object-top"
          />
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>2001-ben diplomáztam a Magyar Képzőművészeti Egyetem Szobrász szakán, mesterem Farkas Ádám volt.</p>
            <p>A természet, az élet különböző megnyilvánulásai mindig is csodálattal töltöttek el. Érdekel a figura, de sokszor olyan téri problémák foglalkoztatnak, melyek absztrakt megformálást igényelnek. Munkáimban ezért egyszerre van jelen a figuralitás és az absztrakt organikus vonala. Az éremtől a köztéri méretű faragványig mindenféle műfajban tevékenykedem.</p>
            <p>Absztrakt szobraim alapvető törekvése, hogy mozgással, növekedéssel, bíró képződmények legyenek. Emiatt sosem zártak, vagy tömbszerűek. Áttöréseket, üregeket alkalmazok, melyek során érdekes térrétegződés keletkezik, a részformák viszonylatai megsokszorozódnak.    Rajongok a szerkezetekért, - talán azért mert a dolgok lényegét mutatják -  legyen az emberi testé, plasztikáé, vagy a zenéé. Ebből kifolyólag szobraim néha testetlen, tömegtelen térbeli rajzokká koncentrálódnak.</p>
            <p>Életemben fontos szerepe van a zenének, zenélésnek. Szinesztéziás alkat vagyok, mely révén érzékelésemben szoros összeköttetés van a hallott és látott dolgok között. Tanár szakos szakdolgozatom ezt a témát fejtegeti, (Látáselmélet, a színek és a hangok rokon vonásai, 2002) 2004-ben végzett kutatásomban pedig a zenei szerkezetek téri megjelenése foglalkoztatott. </p>
            <p>Leginkább Ligeti György zongoraetűdjei ragadtak magukkal, melyek a legplasztikusabb zenék, amit valaha hallottam. Izgalmas volt analizálni, hogyan ér el Ligeti hangzó anyaggal egy vizuális képet, például a mindannyiunk számára ismert „forgó kerék effektust”. </p>


            <p className="mt-12 text-xl"><strong >Csányi Katalin </strong> - szobrászművész</p>
            {/* <a className="inline-block mt-4 border border-stone-300 px-6 py-3 text-sm uppercase tracking-widest
                          text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition"
              href="/rolam">
              CV (PDF)
            </a> */}
          </div>
        </section>

        <section className="rounded-sm bg-white border border-stone-200 p-8">
          <div>
            <h2 className="text-2xl text-stone-800">Csoportos kiállítások:</h2>
            <ul className="mt-6 space-y-4">
              {exh.groupExhibitions.map((i, index) => (
                <li key={index} className="flex gap-6">
                  <span className="w-16 text-stone-500">{i.year}</span>
                  <span className="text-stone-700">{i.venue} - {i.city}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl text-stone-800">Egyéni kiállítások:</h2>
            <ul className="mt-6 space-y-4">
              {exh.soloExhibitions.map((i, index) => (
                <li key={index} className="flex gap-6">
                  <span className="w-16 text-stone-500">{i.year}</span>
                  <span className="text-stone-700">{i.venue} - {i.city} , {i.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl text-stone-800">Díjak:</h2>
            <ul className="mt-6 space-y-4">
              {exh.awards.map((i, index) => (
                <li key={index} className="flex gap-6">
                  <span className="w-16 text-stone-500">{i.year}</span>
                  <span className="text-stone-700">{i.title} {i.result ? " - " + i.result : ""} </span>
                </li>
              ))}
            </ul>
          </div>


          <div className="mt-6">
            <h2 className="text-2xl text-stone-800">Köztéri munkák:</h2>
            <ul className="mt-6 space-y-4">
              {exh.publicWorks.map((p, i) => (
                <li key={i} className="flex gap-6">
                  <span className="w-16 text-stone-500">{p.year}</span>
                  <span className="text-stone-700">{p.title} - {p.city}  {p.venue ? " - " + p.venue : ""} </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}

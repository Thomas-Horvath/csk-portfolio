# Csányi Katalin portfólió

Ez a projekt Csányi Katalin szobrászművész bemutatkozó és portfólió weboldala. A honlap klasszikus, letisztult vizuális nyelven mutatja be a művész munkáit, szakmai hátterét, kiállításait, díjait és köztéri alkotásait.

Az oldal fő üzenete:

> Időtálló formák, csendes történetek. Klasszikus szobrászat kortárs szemlélettel.

## A projekt célja

A weboldal célja, hogy rendezett, vizuálisan erős és könnyen kezelhető formában mutassa be:

- a kiemelt szobrokat és plasztikákat,
- a teljes munkaportfóliót egyedi műoldalakkal,
- a művész szakmai bemutatkozását,
- a kiállításokat, díjakat és köztéri munkákat,
- az érdeklődők és megrendelők számára a kapcsolatfelvételi lehetőséget.

## Mit tartalmaz a honlap?

### Kezdőlap

A főoldal nagy méretű hero szakasszal indul, ahol megjelenik a név, a szakmai megnevezés és a rövid művészi ars poetica. Ezt követi:

- kiemelt munkák blokk,
- rövid bemutatkozó szakasz,
- műfaji címkék,
- kapcsolatfelvételre ösztönző CTA blokk.

### Munkáim

A `Munkáim` oldal a portfólió tételeit rácsos elrendezésben mutatja be. Minden elem külön adatobjektumból épül fel, és saját részletes oldalra vezet.

A jelenlegi portfólióban többek között ezek a művek szerepelnek:

- `Narcissus`
- `Zsigmond Király`
- `Ratkóczy Nándor`
- `Pietá`
- `Issekutz Béla`
- több absztrakt és organikus formai munka

### Egyedi műoldalak

Minden mű saját oldalt kap, ahol megjelenik:

- a cím,
- az évszám,
- az anyaghasználat,
- a méret,
- a műfaj,
- a leírás,
- egy kattintható képgaléria modal nézettel.

### Rólam

A `Rólam` oldal tartalmazza:

- a tanulmányokat,
- részletes szakmai bemutatkozást,
- a művészi szemlélet ismertetését,
- csoportos és egyéni kiállításokat,
- díjakat,
- köztéri munkákat.

### Kapcsolat

A kapcsolat oldal jelenleg egy vizuálisan elkészített, de backendhez még nem kötött űrlapot tartalmaz, valamint alap elérhetőségi blokkokat és térképes képet.

## Technológiai háttér

- `Next.js 16` App Routerrel
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `next/font` Google font betöltéssel
- `react-icons`

## Projektstruktúra

```text
app/
  (pages)/
    kapcsolat/
    munkak/
    rolam/
  components/
  data/
  ui/
  globals.css
  layout.tsx
  page.tsx

public/
  about/
  works/
  hero-bg.jpg
  map.png
```

## Fontos tartalmi források

- `app/data/work.json`: a művek adatai, képei, leírásai
- `app/data/exhibitions.json`: kiállítások, díjak, köztéri munkák
- `public/works/*`: portfólióképek
- `public/about/*`: bemutatkozó oldal képei

## Fejlesztői indítás

Telepítés után a fejlesztői szerver indítása:

```bash
npm run dev
```

Ezután a projekt elérhető itt:

```text
http://localhost:3000
```

További hasznos parancsok:

```bash
npm run build
npm run start
npm run lint
```

## Jelenlegi állapot

A projekt jól használható statikus portfólióoldalként, de az elemzés alapján jelenleg vannak félkész vagy továbbfejleszthető részek:

- a `Kapcsolat` oldalon még placeholder elérhetőségek szerepelnek (`info@example.com`),
- az űrlap jelenleg nem küld adatot,
- a `Munkáim` oldalon a szűrőgombok még nem végeznek tényleges szűrést,
- az adatok egy része kézzel karbantartott JSON fájlokból érkezik,
- a lint futtatás jelenleg hibát jelez néhány komponensben.

## Ajánlott következő lépések

- valódi kapcsolati adatok beírása,
- az űrlap backendhez vagy e-mail szolgáltatáshoz kötése,
- működő portfóliószűrés kialakítása,
- SEO leírások és oldalankénti metadata pontosítása,
- a lint hibák javítása,
- opcionálisan adminisztrálható tartalomkezelés bevezetése.

## Összegzés

Ez a repository nem egyszerű sablonprojekt, hanem egy konkrét művészeti portfólió webes megjelenése. A struktúra átlátható, a vizuális irány következetes, a tartalom pedig elsősorban Csányi Katalin szobrászművész bemutatását és munkáinak reprezentatív megjelenítését szolgálja.

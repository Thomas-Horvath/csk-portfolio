"use client";

// Ez a komponens arra szolgál, hogy a képek helyén legyen egy "betöltési állapot",
// amíg a valódi kép meg nem érkezik.
// A felhasználó ebből annyit lát, hogy nem egy üres doboz jelenik meg,
// hanem egy finoman animált skeleton, ami eltűnik, amikor a kép készen van.

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

// A Next.js saját <Image /> komponensének minden propját át akarjuk engedni,
// hogy ugyanúgy lehessen használni ezt a komponenst, mint egy sima képet.
// Ehhez hozzáadunk még egy extra saját propot:
// - containerClassName: ezt a külső burkoló divre tesszük rá
//   (például magasság, aspect ratio, háttérszín stb.)
type LoadingImageProps = ImageProps & {
  containerClassName?: string;
};

export default function LoadingImage({
  containerClassName = "",
  className = "",
  alt,
  src,
  ...props
}: LoadingImageProps) {
  // `revealed` azt jelzi, hogy a skeleton eltűnhet-e már.
  // false = még takarja a képet
  // true = a kép betöltött, a skeleton kifakulhat
  const [revealed, setRevealed] = useState(false);

  // `failed` akkor lesz true, ha a kép betöltése hibával végződik.
  // Ez azért hasznos, hogy hiba esetén ne maradjon ott örökké az animáció.
  const [failed, setFailed] = useState(false);

  // Ezzel a ref-fel közvetlenül elérjük a valódi <img> DOM elemet.
  // Erre azért van szükség, mert néha a böngésző már cache-ből betölti a képet,
  // mire a React eseménykezelő feláll. Ilyenkor kézzel meg tudjuk nézni,
  // hogy a kép valójában már kész van-e.
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Itt tároljuk a setTimeout azonosítóját.
  // Erre azért van szükség, hogy ha a képforrás közben változik,
  // vagy a komponens újrarenderelődik, akkor a korábbi időzítést le tudjuk állítani.
  const revealTimeoutRef = useRef<number | null>(null);

  // Ez a kis segédfüggvény indítja el a "fedd fel a képet" folyamatot.
  // Nem azonnal tűntetjük el a skeletont, hanem egy nagyon rövid késleltetéssel,
  // így a felhasználó ténylegesen lát egy kis átmenetet, nem csak egy villanást.
  const revealImage = () => {
    // Ha korábban már elindult egy időzítés, előbb leállítjuk,
    // hogy ne fusson le több egymás után.
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }

    // 80 ms késleltetés:
    // ez elég rövid ahhoz, hogy gyorsnak hasson,
    // de elég hosszú ahhoz, hogy az overlay eltűnése látható animáció legyen.
    revealTimeoutRef.current = window.setTimeout(() => {
      setRevealed(true);
      revealTimeoutRef.current = null;
    }, 80);
  };

  // Ez az effect akkor fut le, amikor a kép forrása (`src`) megváltozik.
  // Például másik kártya jelenik meg, vagy a galériában másik képre váltunk.
  useEffect(() => {
    // Új kép esetén visszaállunk "betöltés alatt" állapotba.
    setRevealed(false);
    setFailed(false);

    // Cleanup:
    // ha a komponens eltűnik, vagy közben másik képre váltunk,
    // a korábbi időzítést megszüntetjük, hogy ne fusson le "árván".
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, [src]);

  // Ez a második effect szintén `src` váltáskor fut,
  // de itt már nem állapotot nullázunk, hanem megnézzük a tényleges képelemet.
  //
  // Miért kell ez?
  // Mert vannak esetek, amikor a kép olyan gyorsan kész van
  // (például cache-ből jön), hogy az onLoad eseményt a felhasználó oldaláról
  // már "lekéssük". Ilyenkor az <img> elem `complete` lesz.
  useEffect(() => {
    const image = imageRef.current;

    // `complete` = a böngésző szerint a kép betöltési folyamata lezárult
    // `naturalWidth > 0` = a kép valóban érvényesen betöltött,
    // nem csak "kész", hanem tényleg van tartalma is
    if (image?.complete && image.naturalWidth > 0) {
      revealImage();
    }
  }, [src]);

  return (
    // A külső burkoló azért kell, mert:
    // - ezen belül tudjuk egymásra helyezni a képet és a skeleton overlayt
    // - itt kapja meg a komponens a közös háttérszínt
    // - ide tudjuk kívülről beadni az elrendezési classokat
    <div className={`relative overflow-hidden bg-stone-200 ${containerClassName}`}>
      <div
        // Ez a skeleton réteg csak vizuális elem,
        // ezért képernyőolvasónak nincs rá szüksége.
        aria-hidden="true"

        // Fontosabb classok:
        // - `absolute inset-0`: teljesen befedi a konténert
        // - `z-10`: a kép fölé kerül
        // - `pointer-events-none`: ne akadályozza a kattintást
        // - `transition-opacity duration-700`: kifakuló animáció
        //
        // Ha a kép már készen van (`revealed`) vagy hiba történt (`failed`),
        // az overlay átlátszóvá válik.
        className={`image-skeleton pointer-events-none absolute inset-0 z-10 transition-opacity duration-700 ${
          revealed || failed ? "opacity-0" : "opacity-100"
        }`}
      />

      <Image
        // Minden egyéb propot átadunk a Next Image-nek
        // (például fill, width, height, sizes, priority stb.)
        {...props}

        // A ref segítségével később meg tudjuk kérdezni az elemtől,
        // hogy már kész van-e a kép.
        ref={imageRef}
        alt={alt}
        src={src}
        className={`${className}`}
        onLoad={(event) => {
          // Ha a kép rendben betöltődött, elindítjuk a skeleton eltüntetését.
          revealImage();

          // Ha a szülő komponens is adott saját onLoad függvényt,
          // azt is meghívjuk, hogy ne veszítsük el a külső működést.
          props.onLoad?.(event);
        }}
        onError={(event) => {
          // Hiba esetén is levesszük a skeleton réteget,
          // különben a felhasználó örökké csak az animációt látná.
          setFailed(true);

          // Ugyanúgy továbbadjuk a hibát a külső komponensnek is,
          // ha ott külön szeretnénk reagálni rá.
          props.onError?.(event);
        }}
      />
    </div>
  );
}

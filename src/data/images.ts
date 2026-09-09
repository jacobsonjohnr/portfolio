/*
  images.ts — every photo slot on the site, in one place.

  Each slot currently points at a labelled SVG placeholder. When Jack supplies a
  real photo, only the `src` line changes: drop the file into
  public/images/ and repoint it. Nothing else in the site needs touching, and
  because every slot declares its aspect ratio the swap causes no layout shift.

  `alt` is real alt text describing what the photo shows, written now so it is
  never forgotten later. It describes the intended photo, not the placeholder.
*/
export interface ImageSlot {
  src: string;
  alt: string;
  /* CSS aspect-ratio value, e.g. "3 / 2". Reserves the space before load. */
  ratio: string;
  width: number;
  height: number;
}

export const images = {
  headshot: {
    src: "/images/placeholders/headshot.svg",
    alt: "John Jacobson, head and shoulders.",
    ratio: "1 / 1",
    width: 800,
    height: 800,
  },
  "awd-desk": {
    src: "/images/placeholders/awd-desk.svg",
    alt: "The aviation weather display running on an ESP32-P4 development board wired to a seven inch touchscreen on a desk.",
    ratio: "3 / 2",
    width: 1600,
    height: 1067,
  },
  "awd-detail": {
    src: "/images/placeholders/awd-detail.svg",
    alt: "Close view of the ESP32-P4 board and the ribbon cable running to the DSI touchscreen.",
    ratio: "3 / 2",
    width: 1600,
    height: 1067,
  },
  "fsm-protoboard": {
    src: "/images/placeholders/fsm-protoboard.svg",
    alt: "The vending machine controller wired on a protoboard, with rows of TTL logic chips and LEDs showing the current state.",
    ratio: "3 / 2",
    width: 1600,
    height: 1067,
  },
  "flying-cockpit": {
    src: "/images/placeholders/flying-cockpit.svg",
    alt: "The instrument panel of a Cessna 172 in flight, with the horizon visible through the windscreen.",
    ratio: "3 / 2",
    width: 1600,
    height: 1067,
  },
  "eagle-benches": {
    src: "/images/placeholders/eagle-benches.svg",
    alt: "A finished planter bench with a built-in catnip planter, built for the Forsyth County Humane Society.",
    ratio: "3 / 2",
    width: 1600,
    height: 1067,
  },
} as const satisfies Record<string, ImageSlot>;

/* A union of the slot names above, so passing an unknown slot to <Figure>
   fails at build time instead of rendering a broken image. */
export type ImageSlotName = keyof typeof images;

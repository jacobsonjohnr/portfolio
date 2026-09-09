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
    src: "/images/headshot.jpg",
    alt: "John Jacobson, head and shoulders, outdoors in a navy quarter-zip sweater.",
    ratio: "1 / 1",
    width: 900,
    height: 900,
  },
  "awd-desk": {
    src: "/images/awd-desk.jpg",
    alt: "The ESP32-P4 development board mounted on the back of the seven inch touchscreen, held in one hand, with the ribbon cable joining the two.",
    ratio: "3 / 2",
    width: 1600,
    height: 1066,
  },
  "awd-detail": {
    src: "/images/awd-detail.jpg",
    alt: "Close view of the ESP32-P4 module, its USB and Ethernet ports, and the ribbon cable curving away to the DSI touchscreen.",
    ratio: "3 / 2",
    width: 1600,
    height: 1066,
  },
  "fsm-breadboard": {
    src: "/images/fsm-breadboard.jpg",
    alt: "The vending machine controller wired on a breadboard with logic ICs and jumper wires, connected by ribbon cable to the acrylic vending machine prototype behind it.",
    ratio: "3 / 2",
    width: 1206,
    height: 804,
  },
  "flying-cockpit": {
    src: "/images/flying-cockpit.jpg",
    alt: "The instrument panel of a Cessna 172 in flight, with farmland and a cumulus cloud visible through the windscreen.",
    ratio: "3 / 2",
    width: 1600,
    height: 1066,
  },
  antarctica: {
    src: "/images/antarctica.jpg",
    alt: "John Jacobson in a yellow expedition parka and life vest, giving a thumbs up in front of a blue iceberg in Antarctica while snow falls.",
    ratio: "3 / 2",
    width: 1600,
    height: 1066,
  },
  "eagle-benches": {
    src: "/images/eagle-benches.jpg",
    alt: "John Jacobson in Scout uniform sitting on one of the finished planter benches he built for the Forsyth County Humane Society.",
    ratio: "3 / 2",
    width: 1600,
    height: 1066,
  },
} as const satisfies Record<string, ImageSlot>;

/* A union of the slot names above, so passing an unknown slot to <Figure>
   fails at build time instead of rendering a broken image. */
export type ImageSlotName = keyof typeof images;

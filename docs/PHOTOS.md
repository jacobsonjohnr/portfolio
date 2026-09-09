# Photos needed

Every image on the site is currently a labelled placeholder. This is the list of
real photos to take or find, and what each one needs to be.

## How to swap one in

1. Save the photo into `public/images/` using the slot ID as the filename, for
   example `public/images/awd-desk.jpg`.
2. Open `src/data/images.ts` and change that slot's `src` line to the new path.
3. Nothing else. Every slot already reserves its aspect ratio, so the page
   layout will not move when the real photo appears.

Shoot a little wider than the target crop. Images are placed with
`object-fit: cover`, so the edges get trimmed to fit the ratio.

## The list

| Slot ID | Where it appears | Status |
|---|---|---|
| `headshot` | About | **Done.** Cropped square from the outdoor portrait. |
| `awd-desk` | Aviation Weather Display, top | **Done.** Board held in hand, module label legible. |
| `awd-detail` | Aviation Weather Display, lower | **Done.** Close on the module and ribbon cable. |
| `flying-cockpit` | Flying page | **Done.** C172 panel with cloud through the windscreen. |
| `og-default` | Link previews | **Done.** Generated text card. |
| `fsm-protoboard` | Vending Machine FSM page | **Still needed.** See below. |
| `eagle-benches` | About, Scouting paragraph | **Still needed, optional.** See below. |

## The two still outstanding

**`fsm-protoboard`** is the only gap on a project page. It wants the protoboard
with the TTL chips wired up, LEDs lit if you can power it, and the ribbon cable
to the vending machine prototype if it is still attached. Shoot it straight down
as well as at an angle, since the wiring is the interesting part. 3:2 landscape,
at least 1600 by 1067. If the board has been taken apart, say so and the slot
can be removed from the page rather than left as a placeholder.

**`eagle-benches`** is optional. A finished planter bench, ideally in place at
the Forsyth County Humane Society. Any photo from 2024 works, nothing new needs
taking. If you have none, the slot comes off the About page and nothing breaks.

## Draft alt text

This is already written into `src/data/images.ts` and describes the intended
photo. If a photo ends up showing something different, update the `alt` to match
what is actually in the frame.

| Slot ID | Alt text |
|---|---|
| `headshot` | John Jacobson, head and shoulders. |
| `awd-desk` | The aviation weather display running on an ESP32-P4 development board wired to a seven inch touchscreen on a desk. |
| `awd-detail` | Close view of the ESP32-P4 board and the ribbon cable running to the DSI touchscreen. |
| `fsm-protoboard` | The vending machine controller wired on a protoboard, with rows of TTL logic chips and LEDs showing the current state. |
| `flying-cockpit` | The instrument panel of a Cessna 172 in flight, with the horizon visible through the windscreen. |
| `eagle-benches` | A finished planter bench with a built-in catnip planter, built for the Forsyth County Humane Society. |

## Not blocked on you

The site is publishable with every placeholder still in place. Nothing here has
to happen before launch. The two marked Optional can stay placeholders
indefinitely, or the slots can be removed if you would rather not have them.

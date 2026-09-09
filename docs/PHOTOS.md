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

| Slot ID | Where it appears | What it should show | Ratio | Minimum size | Crop | Required |
|---|---|---|---|---|---|---|
| `headshot` | About, and the home page intro | You, head and shoulders, plain uncluttered background, even light. Looking at the camera. No graduation gown, no cropped group photo. | 1:1 | 800 × 800 | Square | Yes |
| `awd-desk` | Aviation Weather Display project page, at the top | The ESP32-P4 and the seven inch screen on your desk, powered on and showing something. Wires visible is good, it should look like real work in progress rather than a product shot. | 3:2 | 1600 × 1067 | Landscape | Yes |
| `awd-detail` | Aviation Weather Display project page, lower down | Closer in on the board and the ribbon cable to the screen. Shows the hardware properly. | 3:2 | 1600 × 1067 | Landscape | Optional |
| `fsm-protoboard` | Vending Machine FSM project page | The protoboard with the TTL chips wired up and the LEDs lit. If the ribbon cable to the vending machine prototype is still attached, include it. | 3:2 | 1600 × 1067 | Landscape | Yes |
| `flying-cockpit` | Flying page | The C172 panel with the horizon through the windscreen. Taken on the ground or by someone else if you are flying. Do not take photos while acting as pilot in command. | 3:2 | 1600 × 1067 | Landscape | Yes |
| `eagle-benches` | About, alongside the Scouting paragraph | A finished planter bench from the Eagle project, ideally in place at the Humane Society. | 3:2 | 1600 × 1067 | Landscape | Optional |
| `og-default` | Link previews, not visible on the site | Already generated as a text card. Only replace this if you want a photo behind the link preview. | 1.91:1 | 1200 × 630 | Landscape | Done |

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

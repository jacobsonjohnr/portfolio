---
title: "Vending Machine FSM Controller"
summary: "An eight state finite state machine for a vending machine controller, restricted to NAND, NOR, and NOT gates, taken from K-maps through simulation to wired hardware."
status: "complete"
started: 2026-02-01
ended: 2026-03-01
updated: 2026-09-09
tech: ["Digital Logic", "Xilinx Vivado", "SystemVerilog", "TTL"]
featured: true
image: "fsm-protoboard"
---

## What it is

An eight state finite state machine that runs a vending machine controller,
built for ECE 120 and restricted to NAND, NOR, and NOT gates.

## The constraint is the interesting part

What makes this worth writing up is what we were not allowed to use. No XOR, no
higher level primitives, and no synthesis tool quietly doing the reduction for
us. Every piece of next state and output logic had to come down to NAND, NOR,
and NOT, which pushes all of the real design work onto paper before anything
gets wired.

## How it works

I derived the next state and output logic by hand using Karnaugh maps, reducing
each expression until it fit the allowed gate set. I then wrote a SystemVerilog
testbench and verified the design in Xilinx Vivado, walking the machine through
every transition and checking the outputs against what the K-maps predicted.

With the logic verified in simulation, I built it physically on a protoboard
with TTL logic ICs. That included an asynchronous reset, so the machine could be
forced back to its idle state at any point regardless of where it was in the
sequence. I debugged it with LEDs wired to the state bits, which turned an
invisible problem into something I could watch happen. The finished controller
drove a physical vending machine prototype over a ribbon cable interface.

## What I learned

Closing the loop is the part most coursework skips. Plenty of students derive a
K-map and plenty simulate a testbench, but carrying hand derived logic through a
verified simulation and onto real wire means a mistake has three places to hide.

A circuit that behaves in Vivado and misbehaves on the bench is almost always a
wiring fault or an assumption about timing that the simulator was happy to let
me keep. Working out which one it was taught me more than the derivation did.

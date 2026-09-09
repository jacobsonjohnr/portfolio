---
title: "This Website"
summary: "A static Astro site deployed on Cloudflare Pages, built as a way to learn web development from close to nothing."
status: "in-progress"
started: 2026-06-01
updated: 2026-09-09
tech: ["Astro", "HTML", "CSS", "Git", "Cloudflare Pages"]
featured: false
---

## What it is

This site. An Astro build deployed on Cloudflare Pages that rebuilds itself
whenever I push to GitHub.

## Why it exists

A résumé is one page and it flattens every project down to a bullet. I wanted
somewhere I could explain how something actually works and what I got wrong,
which is usually more interesting than the list of technologies underneath it.

It is also how I am learning web development, which I had almost no exposure to
before starting.

## How it works

Astro renders everything to static HTML at build time and ships no JavaScript to
the browser unless a page asks for it. None of these pages ask for it, so what
arrives is plain HTML and CSS.

The project write-ups come from a content collection, which is a folder of
Markdown files with a schema attached. Astro validates every file against that
schema during the build, so a missing field or a malformed date breaks the build
rather than publishing a half empty page.

Styling is vanilla CSS using custom properties for the design tokens. No
framework, and no component library.

## What I learned

Most of the work here has been decisions rather than code. Choosing a type
scale, working out what belongs on the home page, and cutting sections that
existed only because they were easy to build all took longer than writing the
components did.

The first version led with five sections about who I am and one about what I had
built. That is the wrong order for the people I want reading it, so I tore it
down and started again with the projects first.

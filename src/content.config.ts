/*
  content.config.ts — the schema for the project write-ups.

  A content collection is a folder of Markdown files plus a schema. Astro checks
  every file against the schema at build time, so a missing field, a bad date, or
  a status that is not one of the two allowed values fails the build instead of
  quietly rendering an empty page.

  Frontmatter is metadata rather than prose, so colons are fine in here.
*/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  /* The glob loader reads files off disk. `base` is where to look. */
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    /* One or two sentences, used on the projects index and in link previews. */
    summary: z.string(),
    status: z.enum(["in-progress", "complete"]),
    started: z.date(),
    ended: z.date().optional(),
    /* Shown on the page so a stale write-up is obvious rather than hidden. */
    updated: z.date(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    /* Slot names from src/data/images.ts. `image` leads the page,
       `imageDetail` sits below the write-up. */
    image: z.string().optional(),
    imageDetail: z.string().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { projects };

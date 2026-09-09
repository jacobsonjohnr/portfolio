/*
  site.ts — site-wide constants used in more than one place.

  Keeping these in one module means an address or handle is only ever edited
  once. `as const` tells TypeScript these are fixed literal values rather than
  general strings, so a typo elsewhere gets caught at build time.
*/
export const site = {
  name: "John Jacobson",
  shortName: "Jack",
  url: "https://johnrjacobson.com",
  email: "jacobsonjohnr@gmail.com",
  github: "https://github.com/jacobsonjohnr",
  linkedin: "https://www.linkedin.com/in/john-jacobson",
} as const;

/* The primary navigation, in order. The footer reuses this and adds Uses. */
export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/flying", label: "Flying" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
] as const;

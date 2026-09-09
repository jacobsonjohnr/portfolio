/*
  resume.ts — a structured mirror of the PDF.

  The HTML version exists so the content is indexable, linkable, and readable on
  a phone without downloading anything. Keeping it as data rather than hand
  written markup means the page renders every section the same way and a new
  entry is one object.

  This mirrors the PDF deliberately. If the PDF changes, change this too, or the
  two will disagree in front of a recruiter.

  The phone number on the PDF is intentionally not here. The site gives email,
  LinkedIn, and GitHub only.
*/
export interface ResumeEntry {
  title: string;
  /* Employer, school, or the tech stack for a project. */
  org?: string;
  location?: string;
  dates: string;
  bullets: string[];
}

export interface ResumeSection {
  heading: string;
  entries: ResumeEntry[];
}

export const sections: ResumeSection[] = [
  {
    heading: "Education",
    entries: [
      {
        title: "B.S. Engineering, Electrical Engineering track",
        org: "University of Illinois Urbana-Champaign",
        dates: "August 2025 to May 2029",
        bullets: [
          "Coursework so far includes ECE 220 Computer Systems and Programming, ECE 120 Introduction to Computing, ECE 110 Introduction to Electronics, electromagnetism, differential equations, and discrete mathematics.",
        ],
      },
    ],
  },
  {
    heading: "Projects",
    entries: [
      {
        title: "Aviation Weather Display",
        org: "C++, ESP-IDF, LVGL, ESP32-P4, REST APIs",
        dates: "June 2026 to present",
        bullets: [
          "Building an embedded weather terminal on a Waveshare ESP32-P4 that displays live METAR field conditions and VFR or IFR flight categories at a glance for pilots, sourced from the aviationweather.gov API.",
          "Writing the firmware in C++ on the ESP-IDF toolchain, designing the data model that moves parsed reports from the network layer to the display, and learning LVGL to build the interface.",
        ],
      },
      {
        title: "Vending Machine FSM Controller",
        org: "ECE 120, Xilinx Vivado, TTL",
        dates: "February 2026 to March 2026",
        bullets: [
          "Designed an eight state finite state machine for a vending machine controller restricted to NAND, NOR, and NOT gates, deriving the logic with Karnaugh maps and verifying the design in Xilinx Vivado with a SystemVerilog testbench.",
          "Implemented the controller on a breadboard with TTL logic ICs, wiring an asynchronous reset and debugging with LEDs until it drove a physical vending machine prototype over a ribbon cable interface.",
        ],
      },
      {
        title: "Personal Portfolio Site",
        org: "Astro, HTML and CSS, Git, Cloudflare Pages",
        dates: "June 2026 to present",
        bullets: [
          "Building a personal site in Astro that presents my engineering projects and flight training.",
          "Deploying through Cloudflare Pages with automatic rebuilds on every push to the GitHub repository.",
        ],
      },
    ],
  },
  {
    heading: "Experience",
    entries: [
      {
        title: "Key Holder",
        org: "GNC",
        location: "Winston-Salem, NC",
        dates: "June 2026 to August 2026",
        bullets: [
          "Ran the store independently, handling opening and closing, register operation, and daily cash reconciliation.",
          "Drove membership and loyalty program sales while advising customers across the store's full supplement line, and processed incoming shipments against packing lists to maintain the sales floor.",
        ],
      },
      {
        title: "Grocery Stocker",
        org: "Publix Super Markets",
        location: "Winston-Salem, NC",
        dates: "November 2024 to June 2025",
        bullets: [
          "Restocked and merchandised inventory across multiple departments in a fast paced, high volume store.",
        ],
      },
    ],
  },
  {
    heading: "Leadership and involvement",
    entries: [
      {
        title: "Rush Chair",
        org: "Phi Gamma Delta",
        dates: "September 2025 to present",
        bullets: [
          "Lead chapter recruitment, organising rush events and coordinating outreach to prospective members.",
        ],
      },
      {
        title: "Member",
        org: "IEEE Student Chapter and SIGARCH",
        dates: "2025 to present",
        bullets: [
          "Attend hands-on workshops in soldering, circuit design, and ASIC design, plus technical talks on logic gates, pipelining, and cache design.",
        ],
      },
    ],
  },
  {
    heading: "Achievements",
    entries: [
      {
        title: "Eagle Scout",
        org: "Scouting America",
        dates: "December 2024",
        bullets: [
          "Designed and led a service project building planter benches for the Forsyth County Humane Society, managing budget and materials sourcing for a team of over 30 volunteers.",
          "Served as Troop Senior Patrol Leader, planning events and mentoring younger scouts.",
        ],
      },
      {
        title: "FAA Private Pilot Certificate, Airplane Single-Engine Land",
        org: "In progress",
        dates: "In progress",
        bullets: [
          "Logged over 70 hours in Cessna 172s, including solo cross country and night flights.",
          "Operating under FAA procedures and ATC radio communication while managing checklists and navigation.",
        ],
      },
    ],
  },
];

/* Rendered as a description list, so the labels need no literal punctuation. */
export const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "C, C++, Python, Java, LC-3 Assembly, HTML and CSS" },
  { label: "Tools", items: "Git, Linux, ESP-IDF, CMake, LVGL, Vivado, Neovim, VS Code" },
  { label: "Design and CAD", items: "Onshape, Fusion 360, Blender" },
];

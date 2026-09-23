// ======================= DATA =======================
const gifUrls = [
  "./assets/images/projects/kaha6.jpg",
  "./assets/images/projects/hulasfood.jpg",
  "./assets/images/projects/northwest.jpg",
  "./assets/images/projects/codedurbar.jpg",
  "./assets/images/projects/greenland.jpg",
  "./assets/images/projects/rathielectrical.jpg",
  "./assets/images/projects/prbiomed.jpg",
  "./assets/images/projects/saptari.jpg",
  "./assets/images/projects/prbiomed.jpg",
  "./assets/images/projects/rathielectrical.jpg",
  "./assets/images/projects/greenland.jpg",
  "./assets/images/projects/codedurbar.jpg",
  "./assets/images/projects/northwest.jpg",
  "./assets/images/projects/hulasfood.jpg",
];

const servicesData = [
  {
    num: "01",
    title: "WordPress Development",
    desc: "Turning static designs into fully dynamic, editable WordPress sites — from setup to launch.",
  },
  {
    num: "02",
    title: "Custom Themes & Plugins",
    desc: "Building bespoke WordPress themes and plugins from scratch, tailored exactly to what a project needs.",
  },
  {
    num: "03",
    title: "SEO",
    desc: "Structuring markup, content, and performance so search engines can actually find and rank the site.",
  },
];

const skillsData = [
  "HTML & CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "PHP & MySQL",
  "WordPress Theme Development",
  "WordPress Plugin Development",
  "ACF",
  "Elementor",
  "WooCommerce",
  "Git & GitHub",
  "SEO",
];

// Define image sets for the first three projects only
const imageSets = [
  [
    "./assets/images/projects/hulasfood.jpg",
    "./assets/images/projects/hulasfood2.jpg",
    "./assets/images/projects/hulasfood3.jpg",
  ],
  [
    "./assets/images/projects/kaha6.jpg",
    "./assets/images/projects/kaha62.jpg",
    "./assets/images/projects/kaha63.jpg",
  ],
  [
    "./assets/images/projects/northwest.jpg",
    "./assets/images/projects/northwest2.jpg",
    "./assets/images/projects/northwest3.jpg",
  ],
];

// ======================= PROJECTS DATA WITH TABS =======================
// Define your tabs/categories here - easy to add more
const PROJECT_TABS = [
  { id: "all", label: "All" },
  { id: "wp", label: "WordPress" },
  { id: "frontend", label: "Frontend" },
  { id: "np", label: "News Portal" },
  { id: "collaboration", label: "Collaboration" },
  { id: "ecom", label: "E-Commerce" },
  { id: "static", label: "Static" },
  { id: "ai", label: "AI" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
];

// Projects data - each project can belong to multiple categories
const projectsData = [
  {
    name: "Hulas Foods",
    url: "https://hulasfood.com/",
    images: imageSets[0],
    thumbnail: imageSets[0][0],
    category: "Client",
    categories: ["wp", "frontend", "collaboration"],
    // description: "Food company website with custom WordPress theme",
  },
  {
    name: "Kaha6 Business Directory",
    url: "https://kaha6.com/",
    images: imageSets[1],
    thumbnail: imageSets[1][0],
    category: "In-house",
    categories: ["wp", "frontend", "collaboration"],
    // description: "Business directory platform with advanced search",
  },
  {
    name: "HeatPump NorthWest",
    url: "https://www.heatpumpnorthwest.com/",
    images: imageSets[2],
    thumbnail: imageSets[2][0],
    category: "Client",
    categories: ["wp", "frontend"],
    // description: "HVAC company website with custom functionality",
  },
  {
    name: "Saptari Jagran",
    url: "https://saptarijagran.com/",
    images: ["./assets/images/projects/saptari.jpg"],
    thumbnail: "./assets/images/projects/saptari.jpg",
    category: "Client",
    categories: ["wp", "frontend", "np"],
    // description: "News portal with real-time updates",
  },
  {
    name: "Dyonaa",
    url: "https://dyonaa.com/",
    images: ["./assets/images/default.jpeg"],
    thumbnail: "./assets/images/default.jpeg",
    category: "Client",
    categories: ["wp", "frontend", "ecom"],
    // description: "E-commerce platform with WooCommerce",
  },
  {
    name: "Sansari Pana",
    url: "https://sansaripana.com/",
    images: ["./assets/images/default.jpeg"],
    thumbnail: "./assets/images/default.jpeg",
    category: "Client",
    categories: ["wp", "frontend", "np"],
    // description: "News and media platform",
  },
  {
    name: "Code Durbar",
    url: "https://codedurbar.com/",
    images: ["./assets/images/projects/codedurbar.jpg"],
    thumbnail: "./assets/images/projects/codedurbar.jpg",
    category: "In-House",
    categories: ["wp", "frontend"],
    // description: "Tech community and learning platform",
  },
  {
    name: "PR Biomed Product",
    url: "https://prbiomed.com.np/",
    images: ["./assets/images/projects/prbiomed.jpg"],
    thumbnail: "./assets/images/projects/prbiomed.jpg",
    category: "Client",
    categories: ["wp", "frontend"],
    // description: "Medical products showcase website",
  },
  {
    name: "GreenLand College",
    url: "http://greenlandcollege.edu.np/",
    images: ["./assets/images/projects/greenland.jpg"],
    thumbnail: "./assets/images/projects/greenland.jpg",
    category: "Client",
    categories: ["wp", "frontend", "collaboration"],
    // description: "Educational institution website",
  },
  {
    name: "Rathi Electricals",
    url: "https://rathielectricals.com/",
    images: ["./assets/images/projects/rathielectrical.jpg"],
    thumbnail: "./assets/images/projects/rathielectrical.jpg",
    category: "Client",
    categories: ["wp", "frontend"],
    // description: "Electrical services company website",
  },
  {
    name: "Pranam Online",
    url: "https://pranamonline.com/",
    images: ["./assets/images/default.jpeg"],
    thumbnail: "./assets/images/default.jpeg",
    category: "Client",
    categories: ["wp", "frontend", "np"],
    // description: "Online news and media platform",
  },
  {
    name: "PDF to High Quality Image",
    url: "https://iamyrm.github.io/pdf-img/",
    images: ["./assets/images/projects/pdf2img.png"],
    thumbnail: "./assets/images/projects/pdf2img.png",
    category: "Personal",
    categories: ["ai", "tools"],
    // description: "",
  },
  {
    name: "WordPress .gitignore",
    url: "https://iamyrm.github.io/wp-gitignore/",
    images: ["./assets/images/projects/wpignore.png"],
    thumbnail: "./assets/images/projects/wpignore.png",
    category: "Personal",
    categories: ["wp", "ai", "tools"],
    // description: "",
  },
  {
    name: "Universal Command Builder",
    url: "https://iamyrm.github.io/ai-command/",
    images: ["./assets/images/projects/commands.png"],
    thumbnail: "./assets/images/projects/commands.png",
    category: "Personal",
    categories: ["ai", "tools"],
    // description: "",
  },
  {
    name: "Date invitation form Yagya",
    url: "https://iamyrm.github.io/dont-click/",
    images: ["./assets/images/projects/date.png"],
    thumbnail: "./assets/images/projects/date.png",
    category: "Personal",
    categories: ["ai", "other"],
    // description: "",
  },
  {
    name: "Waggy Pet Shop",
    url: "https://iamyrm.github.io/waggy/",
    images: ["./assets/images/projects/waggy.png"],
    thumbnail: "./assets/images/projects/waggy.png",
    category: "Personal",
    categories: ["static", "frontend"],
    // description: "",
  },
  {
    name: "CIM",
    url: "https://iamyrm.github.io/cim-templating/",
    images: ["./assets/images/projects/cim.png"],
    thumbnail: "./assets/images/projects/cim.png",
    category: "Personal",
    categories: ["static", "frontend", "other"],
    // description: "",
  },
  {
    name: "WPDb",
    url: "https://iamyrm.github.io/wpdb/",
    images: ["./assets/images/projects/wpdb.png"],
    thumbnail: "./assets/images/projects/wpdb.png",
    category: "Personal",
    categories: ["wp", "other", "tools"],
    // description: "",
  },
  {
    name: "eFurni",
    url: "https://iamyrm.github.io/eFurni/",
    images: ["./assets/images/projects/efurni.png"],
    thumbnail: "./assets/images/projects/efurni.png",
    category: "Personal",
    categories: ["static", "frontend"],
    // description: "",
  },
  {
    name: "Weather App",
    url: "https://iamyrm.github.io/weatherappJs/",
    images: ["./assets/images/projects/weather.png"],
    thumbnail: "./assets/images/projects/weather.png",
    category: "Personal",
    categories: ["other", "frontend"],
    // description: "",
  },
  {
    name: "Whisper Therapy",
    url: "https://iamyrm.github.io/Whisper-Therapy/",
    images: ["./assets/images/projects/whisper.png"],
    thumbnail: "./assets/images/projects/whisper.png",
    category: "Personal",
    categories: ["static", "frontend"],
    // description: "",
  },
  {
    name: "Docker for WordPress",
    url: "https://iamyrm.github.io/wp-docker-starter/",
    images: ["./assets/images/projects/wp-docker.png"],
    thumbnail: "./assets/images/projects/wp-docker.png",
    category: "Personal",
    categories: ["wp", "other", "tools"],
    // description: "",
  },
  {
    name: "Dragon",
    url: "https://iamyrm.github.io/dragon/",
    images: ["./assets/images/projects/dragon.png"],
    thumbnail: "./assets/images/projects/dragon.png",
    category: "Personal",
    categories: ["ai", "static", "fun"],
    // description: "",
  },
  {
    name: "Blog Preview Card Component",
    url: "https://github.com/iamyrm/blog-preview-card",
    images: ["./assets/images/projects/blog-preview.png"],
    thumbnail: "./assets/images/projects/blog-preview.png",
    category: "Personal",
    categories: ["other", "frontend"],
    // description: "",
  },
].map((p, i) => ({
  id: String(i + 1).padStart(2, "0"),
  name: p.name,
  url: p.url,
  category: p.category,
  images: p.images,
  thumbnail: p.thumbnail,
  categories: p.categories || ["wp"],
  // description: p.description || "",
}));

// ======================= DISPLAYING PROJECTS COUNT =======================
document.getElementById("project-count").textContent =
  `(${projectsData.length})`;

// ======================= BUILD FUNCTIONS =======================
function buildMarquee() {
  const row1 = document.getElementById("marquee-row-1");
  const row2 = document.getElementById("marquee-row-2");
  const first11 = gifUrls.slice(0, 11);
  const last10 = gifUrls.slice(11);
  const triple1 = [...first11, ...first11, ...first11];
  const triple2 = [...last10, ...last10, ...last10];
  row1.innerHTML = triple1
    .map(
      (u) =>
        `<img src="${u}" class="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0" loading="lazy" />`,
    )
    .join("");
  row2.innerHTML = triple2
    .map(
      (u) =>
        `<img src="${u}" class="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0" loading="lazy" />`,
    )
    .join("");
}

function buildServices() {
  const c = document.getElementById("services-list");
  c.innerHTML = servicesData
    .map(
      (s, i) => `
      <div class="service-item fade-el" style="transition-delay: ${i * 0.08}s;">
        <div class="service-border py-8 sm:py-10 md:py-12 flex items-start gap-4">
          <span class="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C]">${s.num}</span>
          <div class="flex flex-col text-left">
            <span class="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">${s.title}</span>
            <span class="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">${s.desc}</span>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

function buildSkills() {
  const c = document.getElementById("skills-list");
  c.innerHTML = skillsData
    .map(
      (s) => `
        <span class="skill-pill inline-block rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-wide">${s}</span>
      `,
    )
    .join("");
}

function buildProjects() {
  const stack = document.getElementById("projects-stack");
  const featured = projectsData.slice(0, 3);
  const total = featured.length;
  stack.innerHTML = featured
    .map((p, idx) => {
      const scale = 1 - (total - 1 - idx) * 0.03;
      return `
        <div class="sticky-card rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8" style="top: ${idx * 28}px; transform: scale(${scale});">
          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap items-start justify-between">
              <span class="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#D7E2EA]">${p.id}</span>
              <div class="flex flex-wrap items-center gap-4">
                <span class="uppercase tracking-wide text-sm text-[#D7E2EA]/80">${p.category}</span>
                <span class="font-medium uppercase text-lg md:text-xl">${p.name}</span>
                <a href="${p.url}" target="_blank" rel="noopener" class="ghost-btn rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base">Live Project</a>
              </div>
            </div>
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-2 flex flex-col gap-4">
                <img src="${p.images[0]}" class="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full h-[clamp(130px,16vw,230px)] object-cover" />
                <img src="${p.images[1]}" class="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full h-[clamp(160px,22vw,340px)] object-cover" />
              </div>
              <div class="col-span-3">
                <img src="${p.images[2]}" class="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full h-full object-cover" style="min-height: clamp(300px, 40vw, 500px);" />
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// ======================= BUILD PROJECTS MODAL WITH TABS =======================
function buildProjectsModal() {
  const grid = document.getElementById("projects-modal-grid");
  const tabsContainer = document.getElementById("projects-modal-tabs");

  // Build tabs
  tabsContainer.innerHTML = PROJECT_TABS.map(
    (tab) => `
        <button 
          class="project-tab-btn rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-300
            ${tab.id === "all" ? "bg-[#D7E2EA] text-[#0C0C0C]" : "text-[#D7E2EA]/60 hover:text-[#D7E2EA] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60"}"
          data-tab="${tab.id}"
        >
          ${tab.label}
        </button>
      `,
  ).join("");

  // Store all projects for filtering
  window.allProjects = projectsData;
  window.currentTab = "all";

  // Render projects based on current tab
  renderProjectsByTab("all");

  // Add tab click listeners
  document.querySelectorAll(".project-tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.dataset.tab;

      // Update active tab styling
      document.querySelectorAll(".project-tab-btn").forEach((b) => {
        b.classList.remove("bg-[#D7E2EA]", "text-[#0C0C0C]");
        b.classList.add("text-[#D7E2EA]/60", "border", "border-[#D7E2EA]/20");
      });
      this.classList.add("bg-[#D7E2EA]", "text-[#0C0C0C]");
      this.classList.remove(
        "text-[#D7E2EA]/60",
        "border",
        "border-[#D7E2EA]/20",
      );

      window.currentTab = tabId;
      renderProjectsByTab(tabId);
    });
  });
}

function renderProjectsByTab(tabId) {
  const grid = document.getElementById("projects-modal-grid");
  let filteredProjects = window.allProjects;

  // Filter projects based on tab
  if (tabId !== "all") {
    filteredProjects = window.allProjects.filter(
      (p) => p.categories && p.categories.includes(tabId),
    );
  }

  // If no projects match, show a message
  if (filteredProjects.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-[#D7E2EA]/60">
        <p class="text-lg">No projects found in this category.</p>
      </div>
    `;
    return;
  }

  // Render filtered projects
  grid.innerHTML = filteredProjects
    .map(
      (p) => `
        <div class="w-full rounded-[28px] sm:rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-4 flex flex-col gap-4 transition-transform hover:scale-[1.02] duration-300">
          <img src="${p.thumbnail}" alt="${p.name} thumbnail" class="rounded-[20px] sm:rounded-[24px] w-full h-[150px] sm:h-[170px] object-cover" />
          <div class="flex flex-col gap-2 px-1 pb-1">
            <div class="flex flex-wrap gap-1 mb-1">
              ${
                p.categories
                  ? p.categories
                      .map((cat) => {
                        const tab = PROJECT_TABS.find((t) => t.id === cat);
                        return tab
                          ? `<span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]/70">${tab.label}</span>`
                          : "";
                      })
                      .join("")
                  : ""
              }
            </div>
            <span class="uppercase tracking-wide text-[11px] sm:text-xs text-[#D7E2EA]/60">${p.category}</span>
            <span class="font-medium uppercase text-sm sm:text-base leading-snug">${p.name}</span>
            ${p.description ? `<p class="text-xs text-[#D7E2EA]/50 line-clamp-2">${p.description}</p>` : ""}
            <a href="${p.url}" target="_blank" rel="noopener" class="ghost-btn self-start mt-1 rounded-full px-5 py-2 text-[#D7E2EA] font-medium uppercase tracking-widest text-[11px] sm:text-xs">Live Project</a>
          </div>
        </div>
      `,
    )
    .join("");
}

// ======================= GSAP SCROLL EFFECTS =======================
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // MARQUEE
  const marqueeSection = document.getElementById("marquee-section");
  const row1 = document.getElementById("marquee-row-1");
  const row2 = document.getElementById("marquee-row-2");
  ScrollTrigger.create({
    trigger: marqueeSection,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const offset = self.progress * 1200 - 200;
      row1.style.transform = `translateX(${offset}px)`;
      row2.style.transform = `translateX(${-offset}px)`;
    },
  });

  // ABOUT CHAR REVEAL
  const chars = document.querySelectorAll(".char-anim");
  const aboutText = document.getElementById("animated-text-container");
  ScrollTrigger.create({
    trigger: aboutText,
    start: "top 80%",
    end: "bottom 20%",
    onUpdate: (self) => {
      const progress = self.progress;
      chars.forEach((el, i) => {
        const threshold = (i / chars.length) * 0.9 + 0.05;
        el.classList.toggle("revealed", progress > threshold);
      });
    },
  });

  // DECOS
  document.querySelectorAll(".deco-fade").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => el.classList.add("visible"),
    });
  });

  // FADE ELEMENTS
  document.querySelectorAll(".fade-el:not(.visible)").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => el.classList.add("visible"),
    });
  });

  // PROJECT STACK SCALE
  const projectCards = document.querySelectorAll(".sticky-card");
  const projectSection = document.getElementById("projects");
  if (projectCards.length) {
    ScrollTrigger.create({
      trigger: projectSection,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;
        projectCards.forEach((card, i) => {
          const baseScale = 1 - (projectCards.length - 1 - i) * 0.03;
          const current = 1 - (1 - baseScale) * Math.min(1, progress * 1.2);
          card.style.transform = `scale(${current})`;
        });
      },
    });
  }
}

// ======================= MAGNET =======================
function initMagnet() {
  const container = document.getElementById("magnet-container");
  const img = document.getElementById("magnet-img");
  let active = false;
  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const padding = 150;
    if (dist < padding) {
      const strength = 4;
      const tx = dx / strength;
      const ty = dy / strength;
      img.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      img.classList.remove("inactive");
      active = true;
    } else if (active) {
      img.classList.add("inactive");
      img.style.transform = "translate3d(0,0,0)";
      active = false;
    }
  };
  container.addEventListener("mousemove", onMove);
  container.addEventListener("mouseleave", () => {
    img.classList.add("inactive");
    img.style.transform = "translate3d(0,0,0)";
    active = false;
  });
}

// ======================= PROJECTS MODAL =======================
function initProjectsModal() {
  const modal = document.getElementById("projects-modal");
  const openBtn = document.getElementById("explore-projects-btn");
  const closeBtn = document.getElementById("projects-modal-close");
  const backdrop = document.getElementById("projects-modal-backdrop");

  const open = () => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

// ======================= NAV SMOOTH SCROLL =======================
function initNav() {
  const targets = ["#about", "#services", "#projects", "#contact"];
  document.querySelectorAll(".nav-link").forEach((el, i) => {
    el.addEventListener("click", () => {
      const target = targets[i % targets.length];
      document
        .querySelector(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ======================= INIT ANIMATED TEXT =======================
function initAnimatedText() {
  const container = document.getElementById("animated-text-container");
  const text =
    "I'm a WordPress developer with the knowledge of frontend development, i build custom themes and plugins tailored to exactly whats needs. From static designs to fully dynamic sites, i handle the build end to end. Let's build something incredible together!";
  const chars = text.split("");
  container.innerHTML = chars
    .map(
      (ch) =>
        `<span class="char-anim" style="transition-delay: ${Math.random() * 0.04}s">${ch === " " ? "&nbsp;" : ch}</span>`,
    )
    .join("");
}

// ======================= INIT =======================
document.addEventListener("DOMContentLoaded", () => {
  buildMarquee();
  buildServices();
  buildSkills();
  buildProjects();
  buildProjectsModal();
  initAnimatedText();
  initMagnet();
  initNav();
  initProjectsModal();
  // initial visible for hero fades
  document
    .querySelectorAll("#hero .fade-el")
    .forEach((el) => el.classList.add("visible"));
  // GSAP after DOM
  setTimeout(initGSAP, 100);
});

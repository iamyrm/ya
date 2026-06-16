document.addEventListener("DOMContentLoaded", function () {
  // smooth nav
  document
    .querySelectorAll(".nav-links a, .nav-links-hire")
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

  const exploreBtn = document.getElementById("exploreWorkBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      const workSection = document.getElementById("work");
      if (workSection) workSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // GSAP (loaded via CDN)
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // hero fade-up
    gsap.from("#heroSection", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top 85%",
      },
    });

    // cards and sections
    gsap.utils
      .toArray(
        ".card-elegant, .project-item-laravel, .feature-grid .card-elegant",
      )
      .forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

    // code-mood blocks
    gsap.utils.toArray(".code-mood").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -20,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
        },
      });
    });

    // navbar subtle
    gsap.from("#navBar", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
    });

    // skill pills stagger
    gsap.utils.toArray(".skill-pill").forEach((pill, i) => {
      gsap.from(pill, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        delay: i * 0.03,
        scrollTrigger: {
          trigger: "#stack",
          start: "top 85%",
        },
      });
    });
  }
});

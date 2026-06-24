const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-fr][data-en]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = document.querySelectorAll(".site-nav a");

function setLanguage(language) {
  const selectedLanguage = language === "en" ? "en" : "fr";

  document.documentElement.lang = selectedLanguage;
  document.title =
    selectedLanguage === "fr"
      ? "Ermano Nicolas Joseph | Solutions logicielles et automatisation"
      : "Ermano Nicolas Joseph | Software solutions and automation";

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[selectedLanguage];
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });

  updateMenuButton(navigation?.classList.contains("open"), selectedLanguage);

  localStorage.setItem("portfolio-language", selectedLanguage);
}

function updateMenuButton(isOpen, language = document.documentElement.lang) {
  if (!menuButton) return;

  const isFrench = language !== "en";
  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? isFrench
        ? "Fermer le menu"
        : "Close menu"
      : isFrench
        ? "Ouvrir le menu"
        : "Open menu"
  );
  menuButton.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  window.lucide?.createIcons();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  updateMenuButton(isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    updateMenuButton(false);
  });
});

const sections = document.querySelectorAll("main section[id]");
const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navigationLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => activeSectionObserver.observe(section));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

document.getElementById("current-year").textContent = new Date().getFullYear();

const storedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage = storedLanguage || "fr";

setLanguage(initialLanguage);

if (window.lucide) {
  window.lucide.createIcons();
}

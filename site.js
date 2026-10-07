const storageKey = "matija-portfolio-language";

function savedLanguage() {
  try { return localStorage.getItem(storageKey); } catch { return null; }
}

function setSavedLanguage(language) {
  try { localStorage.setItem(storageKey, language); } catch { /* Preference remains session-only. */ }
}

function applyLanguage(language) {
  const lang = language === "sr" ? "sr" : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-sr]").forEach((element) => {
    element.textContent = element.dataset[lang];
    if (element instanceof HTMLOptionElement) element.value = element.dataset[lang];
  });
  document.querySelectorAll("[data-placeholder-en][data-placeholder-sr]").forEach((element) => {
    element.placeholder = element.dataset[`placeholder${lang === "en" ? "En" : "Sr"}`];
  });
  document.querySelectorAll("[data-aria-label-en][data-aria-label-sr]").forEach((element) => {
    element.setAttribute("aria-label", element.dataset[`ariaLabel${lang === "en" ? "En" : "Sr"}`]);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (!document.body.dataset.project) {
    document.title = lang === "sr"
      ? "Matija Milenković — Web dizajner i developer"
      : "Matija Milenković — Web Designer & Developer";
  }
  document.dispatchEvent(new CustomEvent("portfolio:language", { detail: { language: lang } }));
  return lang;
}

const initialLanguage = savedLanguage() || (/^(sr|hr|bs|me)(-|$)/i.test(navigator.language) ? "sr" : "en");
applyLanguage(initialLanguage || "en");

const gate = document.getElementById("languageGate");
const siteHeader = document.querySelector(".site-header");
const pageMain = document.querySelector("main");
const skipLink = document.querySelector(".skip-link");

function setPageInert(inert) {
  [siteHeader, pageMain, skipLink].forEach((element) => {
    if (element) element.inert = inert;
  });
}

function setGateOpen(open, moveFocus = true) {
  if (!gate) return;
  gate.classList.toggle("hidden", !open);
  gate.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("gate-open", open);
  setPageInert(open);
  if (moveFocus) {
    requestAnimationFrame(() => {
      (open ? gate.querySelector(".gate-option") : document.querySelector(".brand"))?.focus();
    });
  }
}

if (gate) setGateOpen(false, false);

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = applyLanguage(button.dataset.lang);
    setSavedLanguage(lang);
    if (gate && !gate.classList.contains("hidden")) setGateOpen(false);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  const nav = document.querySelector(".nav-links");

  function setMenuOpen(open, returnFocus = false) {
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    const sr = document.documentElement.lang === "sr";
    menuToggle.setAttribute("aria-label", open
      ? (sr ? "Zatvori meni" : "Close menu")
      : (sr ? "Otvori meni" : "Open menu"));
    const gateIsOpen = Boolean(gate && !gate.classList.contains("hidden"));
    if (pageMain) pageMain.inert = open || gateIsOpen;
    if (skipLink) skipLink.inert = open || gateIsOpen;
    if (open) requestAnimationFrame(() => nav?.querySelector("a")?.focus());
    if (!open && returnFocus) menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!document.body.classList.contains("menu-open"));
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
      setMenuOpen(false, true);
    }
    if (event.key === "Tab" && document.body.classList.contains("menu-open")) {
      const controls = [...siteHeader.querySelectorAll("a,button")].filter(el => el.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && document.body.classList.contains("menu-open")) setMenuOpen(false);
  });
  document.addEventListener("portfolio:language", () => {
    setMenuOpen(document.body.classList.contains("menu-open"));
  });
  setMenuOpen(false);
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const lang = document.documentElement.lang === "sr" ? "sr" : "en";
    const subject = lang === "sr"
      ? `Upit za projekat - ${form.get("name")}`
      : `Project inquiry - ${form.get("name")}`;
    const body = [
      `${lang === "sr" ? "Ime" : "Name"}: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `${lang === "sr" ? "Tip projekta" : "Project type"}: ${form.get("type")}`,
      "",
      String(form.get("message"))
    ].join("\n");
    const status = document.getElementById("formStatus");
    if (status) {
      status.textContent = lang === "sr"
        ? "Otvaram tvoju email aplikaciju sa pripremljenom porukom."
        : "Opening your email app with the message prepared.";
    }
    window.location.href = `mailto:matija.milenkovic6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

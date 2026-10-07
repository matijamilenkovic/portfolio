const projects = {
  aurel: {
    title: "AUREL Dental Studio",
    category: { en: "Digital experience for modern dental care", sr: "Digitalno iskustvo za savremenu stomatologiju" },
    summary: {
      en: "A calm bilingual multi-page experience for a fictional premium dental studio, designed to make complex care feel clear, credible and human.",
      sr: "Smireno dvojezično iskustvo sa više stranica za izmišljeni premium dentalni studio, osmišljeno da složena nega deluje jasno, pouzdano i ljudski."
    },
    image: "assets/aurel-home.jpg",
    live: "demo/aurel/",
    role: { en: "UX Strategy, UI/UX, Frontend", sr: "UX strategija, UI/UX, frontend" },
    industry: { en: "Healthcare & Services", sr: "Zdravstvo i usluge" },
    introTitle: { en: "Clarity builds trust.", sr: "Jasnoća gradi poverenje." },
    overview: {
      en: "AUREL explores how a healthcare website can reduce uncertainty before the first visit. The experience connects services, the clinical team, patient guidance and a demonstration booking flow through calm language and a clear information hierarchy.",
      sr: "AUREL istražuje kako zdravstveni sajt može da smanji neizvesnost pre prvog dolaska. Iskustvo povezuje usluge, stručni tim, savete za pacijente i demonstracioni tok zakazivanja kroz smiren ton i jasnu hijerarhiju informacija."
    },
    approach: {
      en: "Deep teal, cool white and precise geometric surfaces create a clinical but approachable identity. A system-grotesk type stack, square geometry and consistent action patterns keep the Serbian and English journeys easy to scan across desktop and mobile.",
      sr: "Duboka tirkizna, hladna bela i precizne geometrijske površine grade klinički, ali pristupačan identitet. Sistemska groteskna tipografija, oštra geometrija i dosledni obrasci akcija čine srpsku i englesku verziju lakom za pregled na desktopu i telefonu."
    },
    quote: { en: "Every screen answers the same question: what happens next?", sr: "Svaki ekran odgovara na isto pitanje: šta je sledeće?" },
    colors: ["#102e39", "#5fc5ca", "#f7fafb", "#d7e2e4"],
    typeSerif: "Segoe UI",
    typeSerifFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    typeSans: "System UI",
    next: "lumen"
  },
  lumen: {
    title: "LUMEN Coffee & Kitchen",
    category: { en: "Editorial hospitality experience", sr: "Uredničko iskustvo za ugostiteljstvo" },
    summary: {
      en: "A warm, cinematic website for a fictional coffee and kitchen concept, designed around slow moments, strong typography and tactile hospitality.",
      sr: "Topao, filmski sajt za izmišljeni koncept kafea i kuhinje, dizajniran oko sporih trenutaka, snažne tipografije i taktilnog gostoprimstva."
    },
    image: "assets/lumen-home.jpg",
    live: "demo/lumen/",
    role: { en: "Art Direction, UI/UX, Frontend", sr: "Art direkcija, UI/UX, frontend" },
    industry: { en: "Hospitality & Food", sr: "Ugostiteljstvo i hrana" },
    introTitle: { en: "Designed to slow time.", sr: "Dizajn koji usporava vreme." },
    overview: {
      en: "LUMEN explores how a restaurant website can communicate atmosphere before information. The experience gives imagery and typography room to breathe, then introduces the menu, reservations and practical details without breaking the mood.",
      sr: "LUMEN istražuje kako sajt restorana može da prenese atmosferu pre informacija. Iskustvo daje fotografiji i tipografiji prostor da dišu, a zatim uvodi meni, rezervacije i praktične detalje bez narušavanja raspoloženja."
    },
    approach: {
      en: "A restrained cream, ink and caramel system creates warmth without becoming nostalgic. Editorial scale changes and gentle movement establish rhythm, while the menu and reservation flows remain direct and usable across devices.",
      sr: "Uzdržan sistem krem, crne i karamel boje stvara toplinu bez odlaska u nostalgiju. Uredničke promene skale i blago kretanje grade ritam, dok meni i rezervacije ostaju direktni i upotrebljivi na svim uređajima."
    },
    quote: { en: "The interface behaves like the space itself: warm, composed and never in a hurry.", sr: "Interfejs se ponaša kao i sam prostor: toplo, smireno i bez žurbe." },
    colors: ["#1e1e1b", "#f4f0e8", "#b58a62", "#d8d0c2"],
    typeSerif: "Playfair Display",
    typeSerifFamily: "'Playfair Display', Georgia, serif",
    typeSans: "Manrope",
    next: "luea"
  },
  luea: {
    title: "LUEA Skin",
    category: { en: "Premium skincare commerce", sr: "Premium prodavnica za negu kože" },
    summary: {
      en: "A calm multi-page skincare experience balancing premium art direction with clear product education and an effortless shopping journey.",
      sr: "Smireno iskustvo za negu kože sa više stranica koje spaja premium umetničku direkciju, jasnu edukaciju o proizvodima i jednostavan put kroz kupovinu."
    },
    image: "assets/luea-home.jpg",
    live: "demo/luea/",
    role: { en: "Brand Direction, UI/UX, Frontend", sr: "Art direkcija, UI/UX, frontend" },
    industry: { en: "Beauty & E-commerce", sr: "Lepota i e-trgovina" },
    introTitle: { en: "Calm, made credible.", sr: "Smirenost koja uliva poverenje." },
    overview: {
      en: "LUEA was imagined as a skincare brand that treats calmness as a functional quality, not decoration. The website balances ingredient education, product discovery and a clear commerce structure while keeping the visual language tactile and refined.",
      sr: "LUEA je zamišljena kao brend za negu kože koji smirenost tretira kao funkcionalni kvalitet, a ne kao dekoraciju. Sajt usklađuje edukaciju o sastojcima, otkrivanje proizvoda i jasnu prodajnu strukturu uz taktilan i prefinjen vizuelni jezik."
    },
    approach: {
      en: "Generous spacing, elegant serif typography and natural product imagery create confidence without clinical coldness. Navigation and product hierarchy stay quiet but explicit, helping the concept feel like a complete brand rather than a single landing page.",
      sr: "Velikodušan prostor, elegantna serifna tipografija i prirodne fotografije proizvoda stvaraju poverenje bez kliničke hladnoće. Navigacija i hijerarhija proizvoda ostaju tihe ali jasne, pa koncept deluje kao kompletan brend, a ne samo landing stranica."
    },
    quote: { en: "Every detail supports one promise: thoughtful care without visual noise.", sr: "Svaki detalj podržava jedno obećanje: promišljena nega bez vizuelne buke." },
    colors: ["#f0ede6", "#1f231d", "#46533f", "#c9c1b3"],
    typeSerif: "Cormorant Garamond",
    typeSerifFamily: "'Cormorant Garamond', Georgia, serif",
    typeSans: "Manrope",
    next: "aurel"
  }
};

const id = document.body.dataset.project;
const project = projects[id] || projects.aurel;
const portfolioRoot = new URL("../../", window.location.href);

function localized(value, lang) {
  return typeof value === "string" ? value : value[lang] || value.en;
}

function readableTextColor(hex) {
  const value = hex.replace("#", "");
  const channels = [0, 2, 4].map((index) => parseInt(value.slice(index, index + 2), 16) / 255);
  const luminance = channels
    .map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
  const blackContrast = (luminance + 0.05) / 0.05;
  const whiteContrast = 1.05 / (luminance + 0.05);
  return blackContrast >= whiteContrast ? "#111111" : "#ffffff";
}

function renderCaseStudy(lang = document.documentElement.lang === "sr" ? "sr" : "en") {
  document.title = `${project.title} — Matija Milenković`;
  document.getElementById("caseCategory").textContent = localized(project.category, lang);
  document.getElementById("caseTitle").textContent = project.title;
  document.getElementById("caseSummary").textContent = localized(project.summary, lang);
  document.getElementById("caseIndustry").textContent = localized(project.industry, lang);
  document.getElementById("caseRole").textContent = localized(project.role, lang);
  document.getElementById("caseCover").src = new URL(project.image, portfolioRoot).href;
  document.getElementById("introTitle").textContent = localized(project.introTitle, lang);
  document.getElementById("overviewText").textContent = localized(project.overview, lang);
  document.getElementById("approachText").textContent = localized(project.approach, lang);
  document.getElementById("caseQuote").textContent = localized(project.quote, lang);
  const liveLink = document.getElementById("liveLink");
  if (project.live) {
    liveLink.href = new URL(project.live, portfolioRoot).href;
    liveLink.target = "_blank";
    liveLink.rel = "noopener";
    liveLink.textContent = lang === "sr" ? "Otvori projekat ↗" : "Open live project ↗";
  } else {
    liveLink.href = "#selectedScreen";
    liveLink.removeAttribute("target");
    liveLink.removeAttribute("rel");
    liveLink.textContent = lang === "sr" ? "Pogledaj ekran ↓" : "View project screen ↓";
  }

  document.querySelectorAll(".swatch").forEach((swatch, index) => {
    const color = project.colors[index];
    swatch.style.background = color;
    swatch.style.color = readableTextColor(color);
    swatch.textContent = color.toUpperCase();
  });
  const typeSerif = document.getElementById("typeSerif");
  typeSerif.textContent = project.typeSerif;
  typeSerif.parentElement.style.fontFamily = project.typeSerifFamily;
  document.getElementById("typeSans").textContent = project.typeSans;

  const next = projects[project.next];
  document.getElementById("nextProject").href = new URL(`work/${project.next}/`, portfolioRoot).href;
  document.getElementById("nextName").textContent = next.title;
}

document.addEventListener("portfolio:language", (event) => renderCaseStudy(event.detail.language));
renderCaseStudy();

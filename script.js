const translations = {
  nl: {
    hero_title: "Portfolio | Daphne Anandakumar | Junior Developer",
    hero_subtitle: "Startend developer met focus op Python, HTML en CSS.",
    hero_cta: "Bekijk mijn projecten",
    about_title: "Over mij",
    about_text: "Ik ben een leergierige programmeur met een basis in Python, HTML en CSS. Ik bouw graag overzichtelijke webpagina's en handige scripts die taken automatiseren. Het is mijn ambitie om mijzelf te ontwikkelen tot Full-Stack Developer. Ik ben in 2026 begonnen aan mijn reis naar de IT wereld. Ik ben ter kennismaking gestart met het maken van de online cursus van FreeCodeCamp, waarin ik 'Basic HTML' en 'Semssntic HTML' heb afgerond. Daarnaast heb ik het omscholingstraject 'Python developer' van ITMG gevolgd en afgerond. Nu ben ik bezig met zelfstudie en het bouwen van mijn portfolio. Ik ben opzoek naar volgend traject/traineeship/bootcamp om vervolgens te kunnen starten als Junior Developer.",
    skills_title: "Vaardigheden",
    toggle_label: "EN"
  },
  en: {
    hero_title: "Portfolio | Daphne Anandakumar | Junior Developer",
    hero_subtitle: "Aspiring developer focused on Python, HTML, and CSS.",
    hero_cta: "View my projects",
    about_title: "About me",
    about_text: "I am an eager-to-learn programmer with a foundation in Python, HTML, and CSS. I enjoy building well-structured web pages and practical scripts that automate tasks. My ambition is to develop into a Full-Stack Developer. I began my journey into the IT world in 2026. As an introduction, I started with the online courses from FreeCodeCamp, where I completed the 'Basic HTML' and 'Semantic HTML' modules. Additionally, I completed the 'Python Developer' retraining program offered by ITMG. Currently, I am focusing on self-study and building my portfolio. I am now looking for a suitable program, traineeship, or bootcamp that will enable me to begin my career as a Junior Developer.",
    skills_title: "Skills",
    toggle_label: "NL"
  }
};

let currentLang = localStorage.getItem("portfolioLang") || "nl";
const toggleBtn = document.getElementById("lang-toggle");

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (toggleBtn) {
    toggleBtn.textContent = translations[lang].toggle_label;
  }
}

toggleBtn.addEventListener("click", () => {
  const nextLang = currentLang === "nl" ? "en" : "nl";
  applyLanguage(nextLang);
});

// Pas bij het laden direct de opgeslagen of standaardtaal toe
applyLanguage(currentLang);
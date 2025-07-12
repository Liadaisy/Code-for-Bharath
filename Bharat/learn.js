document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en";

  const rightsData = {
    police: {
      en: [
        "You have the right to remain silent.",
        "Police must show a warrant before searching your home.",
        "You can request a lawyer during questioning."
      ],
      ml: [
        "നിങ്ങൾക്ക് മൗനം പാലിക്കാനുള്ള അവകാശം ഉണ്ട്.",
        "പോലീസ് നിങ്ങളുടെ വീടു പരിശോധിക്കാൻ വാറണ്ട് കാണിക്കേണ്ടതാണ്.",
        "നിങ്ങൾ ചോദ്യം ചെയ്യുമ്പോൾ അഭിഭാഷകനെ ആവശ്യപ്പെടാം."
      ]
    },
    voting: {
      en: [
        "Aadhaar is not mandatory for voting.",
        "Every citizen above 18 can vote with a Voter ID.",
        "Voting is a basic constitutional right."
      ],
      ml: [
        "വോട്ടിനായി ആധാർ നിർബന്ധമല്ല.",
        "18 വയസ്സിന് മുകളിൽ ഉള്ളവർക്ക് വോട്ടുചെയ്യാം.",
        "വോട്ടുചെയ്യുന്നത് ഒരു അടിസ്ഥാന ജനാധിപത്യ അവകാശമാണ്."
      ]
    },
    women: {
      en: [
        "Women can file FIR at any police station.",
        "Zero FIR can be filed in any police station.",
        "You have the right to privacy while filing complaints."
      ],
      ml: [
        "സ്ത്രികൾക്ക് ഏതെങ്കിലും പൊലീസ് സ്റ്റേഷനിൽ FIR നൽകാം.",
        "ഏതെങ്കിലും പൊലീസ് സ്റ്റേഷനിൽ സീറോ FIR നൽകാം.",
        "പരാതികൾ നൽകുമ്പോൾ സ്വകാര്യത ആവശ്യപ്പെടാം."
      ]
    },
    rti: {
      en: [
        "RTI allows access to government information.",
        "A response must be given within 30 days.",
        "You can file RTI applications online or offline."
      ],
      ml: [
        "RTI വഴി സർക്കാരിന്റെ വിവരങ്ങൾ ലഭിക്കും.",
        "30 ദിവസത്തിനുള്ളിൽ മറുപടി നൽകണം.",
        "RTI ഓൺലൈനായും ഓഫ്‌ലൈൻ വഴിയും ഫയൽ ചെയ്യാം."
      ]
    }
  };

  const showRights = (category) => {
    const container = document.getElementById("rights-container");
    container.innerHTML = "";

    rightsData[category][currentLang].forEach((text) => {
      const card = document.createElement("div");
      card.className = "card";
      card.textContent = text;
      container.appendChild(card);
    });

    // Confetti on category click
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  window.showRights = showRights;

  const langBtn = document.getElementById("languageToggle");
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ml" : "en";
    langBtn.textContent = currentLang === "en" ? "🌐 മലയാളം" : "🌐 English";
    document.getElementById("rights-container").innerHTML = ""; // Clear cards
  });
});
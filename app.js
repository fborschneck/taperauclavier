const fingerData = {
  lp: { name: "auriculaire gauche", color: "var(--pinky)", icon: "🤙" },
  lr: { name: "annulaire gauche", color: "var(--ring)", icon: "✋" },
  lm: { name: "majeur gauche", color: "var(--middle)", icon: "🖐️" },
  li: { name: "index gauche", color: "var(--index)", icon: "☝️" },
  ri: { name: "index droit", color: "var(--index)", icon: "☝️" },
  rm: { name: "majeur droit", color: "var(--middle)", icon: "🖐️" },
  rr: { name: "annulaire droit", color: "var(--ring)", icon: "✋" },
  rp: { name: "auriculaire droit", color: "var(--pinky)", icon: "🤙" },
  lt: { name: "pouce gauche", color: "var(--thumb)", icon: "👍" },
  rt: { name: "pouce droit", color: "var(--thumb)", icon: "👍" }
};

const keyFingers = {
  "²": "lp", "&": "lp", "é": "lr", "\"": "lm", "'": "li", "(": "li", "-": "ri", "è": "ri", "_": "rm", "ç": "rr", "à": "rp", ")": "rp", "=": "rp",
  a: "lp", z: "lr", e: "lm", "€": "lm", r: "li", t: "li", y: "ri", u: "ri", i: "rm", o: "rr", p: "rp", "^": "rp", "$": "rp",
  q: "lp", s: "lr", d: "lm", f: "li", g: "li", h: "ri", j: "ri", k: "rm", l: "rr", m: "rp", "ù": "rp", "*": "rp",
  w: "lp", x: "lr", c: "lm", v: "li", b: "li", n: "ri", ",": "rm", "?": "rm", ";": "rr", ".": "rr", ":": "rp", "/": "rp", "!": "rp", "§": "rp",
  shiftleft: "lp", shiftright: "rp", altgraph: "rt",
  " ": "rt"
};

const keyboardRows = [
  [
    ["²"], ["&", "", "&", "1"], ["é", "", "é", "2"], ["\"", "", "\"", "3"], ["'", "", "'", "4"], ["(", "", "(", "5"], ["-", "", "-", "6"], ["è", "", "è", "7"], ["_", "", "_", "8"], ["ç", "", "ç", "9"], ["à", "", "à", "0"], [")"], ["="], ["⌫", "wide-18", "Backspace"]
  ],
  [
    ["Tab", "wide-15", "Tab"], ["A"], ["Z"], ["E", "", "e", "€", "Alt Gr"], ["R"], ["T"], ["Y"], ["U"], ["I"], ["O"], ["P"], ["^"], ["$"], ["Entrée ↵", "enter-key", "Enter"]
  ],
  [
    ["Verr. Maj", "caps-key", "CapsLock"], ["Q"], ["S"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["M"], ["ù"], ["*", "", "*"]
  ],
  [
    ["Maj", "wide-22 shift-key shift-left", "ShiftLeft"], ["W"], ["X"], ["C"], ["V"], ["B"], ["N"], [",", "", ",", "?"], [";", "", ";", "."], [":"], ["!"], ["Maj", "wide-22 shift-key shift-right", "ShiftRight"]
  ],
  [
    ["Ctrl", "wide-15", "Control"], ["Alt", "wide-15", "Alt"], ["Espace", "space-key", " "], ["Alt Gr", "wide-15", "AltGraph"], ["Ctrl", "wide-15", "Control"]
  ]
];

const levels = [
  {
    title: "Les repères",
    subtitle: "F et J",
    icon: "👀",
    coach: "Pose tes index sur F et J. Sens-tu les petits traits sous tes doigts ?",
    exercises: ["fj jf fj jf", "ff jj fj jf", "fjf jfj ff jj", "fff jjj fjf jfj", "jf fj jj ff fj"]
  },
  {
    title: "La rangée du milieu",
    subtitle: "A à M",
    icon: "🏠",
    coach: "Tes doigts restent sur la rangée du milieu. Reviens toujours sur F et J !",
    exercises: ["qsdf jklm", "fa ja da ka", "salsa hall jazz", "gaga haha lala", "flash salsa hall"]
  },
  {
    title: "La rangée du haut",
    subtitle: "A à P",
    icon: "🚀",
    coach: "Étire doucement tes doigts vers le haut, puis reviens à la maison.",
    exercises: ["az er ty ui op", "papa rit fort", "le petit pirate", "azerty uiop", "papi joue ici"]
  },
  {
    title: "La rangée du bas",
    subtitle: "W à !",
    icon: "🌈",
    coach: "Descends tes doigts sans bouger les poignets. Tu maîtrises presque tout le clavier !",
    exercises: ["wx cv bn ,;", "un bon avion", "vive le carnaval", "banane kiwi", "wagon avec cinq"]
  },
  {
    title: "Les super phrases",
    subtitle: "Tout le clavier",
    icon: "🏆",
    coach: "Lis quelques lettres en avance et garde un rythme régulier. À toi de jouer !",
    exercises: ["Le chat joue dans le jardin.", "Mon vélo rouge va très vite !", "Bravo, je tape avec mes dix doigts !", "Où est caché le petit lapin ?", "Ce matin, le soleil brille."]
  },
  {
    title: "Accents et symboles",
    subtitle: "É, È, À, Ç, Ù et €",
    icon: "✨",
    coach: "Repère les accents et les symboles. Prends ton temps pour choisir la bonne touche.",
    exercises: ["é è à ç ù", "été déjà là", "où est le vélo ?", "ça coûte un €", "L'été est arrivé."]
  },
  {
    title: "Les mots utiles",
    subtitle: "Le quotidien",
    icon: "📚",
    coach: "Enchaîne les lettres sans regarder tes mains et reviens toujours sur F et J.",
    exercises: ["bonjour merci", "papa maman école", "chat chien lapin", "rouge jaune violet", "clavier écran souris"]
  },
  {
    title: "Questions et ponctuation",
    subtitle: "Virgule, point et question",
    icon: "❓",
    coach: "Observe bien les virgules, les points et les points d'interrogation avant de taper.",
    exercises: ["Qui est là ?", "Où va le chat ?", "Oui, bravo !", "Vite, il arrive !", "Tu lis ; puis tu écris."]
  },
  {
    title: "Précision et rythme",
    subtitle: "Des phrases plus longues",
    icon: "🎯",
    coach: "Cherche d'abord la précision. La vitesse viendra naturellement avec un rythme régulier.",
    exercises: ["Je garde mes doigts bien placés.", "Je tape doucement et sans erreur.", "Mes yeux lisent quelques lettres en avance.", "Un rythme régulier aide à progresser.", "Précision d'abord, vitesse ensuite."]
  },
  {
    title: "Le défi des champions",
    subtitle: "Maîtrise du clavier",
    icon: "👑",
    coach: "Voici le grand défi ! Reste détendu, lis en avance et garde une frappe régulière.",
    exercises: ["Le petit renard bondit par-dessus la barrière.", "Dans le jardin, trois lapins jouent.", "Mon clavier magique brille de mille couleurs !", "Je peux taper vite tout en restant précis.", "Bravo, j'utilise maintenant mes dix doigts !"]
  }
];

const CASE_SENSITIVE_LEVEL_INDEX = 4;

const state = {
  level: 0,
  exercise: 0,
  position: 0,
  attempts: 0,
  errors: 0,
  streak: 0,
  sound: true,
  voice: false,
  voiceURI: localStorage.getItem("clavierMagiqueVoice") || "",
  finishTimer: null,
  clockInterval: null,
  startedAt: null,
  elapsedMs: 0,
  completed: JSON.parse(localStorage.getItem("clavierMagiqueProgress") || "{}")
};

const elements = {
  practice: document.querySelector("#practice"),
  homeSections: document.querySelectorAll(".sky, .topbar, .hero, .level-section, footer"),
  keyboard: document.querySelector("#keyboard"),
  levelList: document.querySelector("#levelList"),
  targetText: document.querySelector("#targetText"),
  targetLabel: document.querySelector("#targetLabel"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  elapsedTime: document.querySelector("#elapsedTime"),
  typingSpeed: document.querySelector("#typingSpeed"),
  exerciseProgress: document.querySelector("#exerciseProgress"),
  fingerIcon: document.querySelector("#fingerIcon"),
  primaryInstruction: document.querySelector("#primaryInstruction"),
  modifierCallout: document.querySelector("#modifierCallout"),
  modifierFingerIcon: document.querySelector("#modifierFingerIcon"),
  modifierInstruction: document.querySelector("#modifierInstruction"),
  coachText: document.querySelector("#coachText"),
  lessonNumber: document.querySelector("#lessonNumber"),
  lessonKicker: document.querySelector("#lessonKicker"),
  practiceTitle: document.querySelector("#practiceTitle"),
  totalStars: document.querySelector("#totalStars"),
  progressLabel: document.querySelector("#progressLabel"),
  celebration: document.querySelector("#celebration"),
  voiceButton: document.querySelector("#voiceButton"),
  voiceSelect: document.querySelector("#voiceSelect"),
  repeatButton: document.querySelector("#repeatButton"),
  voiceStatus: document.querySelector("#voiceStatus")
};

function createKeyboard() {
  keyboardRows.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";
    row.forEach(([label, size = "", value = label.toLowerCase(), alternate, alternateModifier = "Maj"]) => {
      const key = document.createElement("button");
      key.type = "button";
      key.className = `key ${size}`;
      key.textContent = label;
      if (/^[éèçàù]$/.test(label)) key.classList.add("accent-key");
      if (alternate !== undefined) {
        key.classList.add("alternate-key");
        if (alternateModifier === "Alt Gr") key.classList.add("altgr-key");
        const alternateLabel = document.createElement("span");
        alternateLabel.className = "key-alternate";
        alternateLabel.textContent = alternate;
        const baseLabel = document.createElement("span");
        baseLabel.className = "key-base";
        baseLabel.textContent = label;
        key.replaceChildren(alternateLabel, baseLabel);
        key.title = `${alternateModifier} + ${label} : ${alternate}`;
      }
      key.dataset.key = value;
      key.setAttribute("aria-label", alternate !== undefined ? `Touche ${label}, symbole ${alternate} avec ${alternateModifier}` : label === "Espace" ? "Espace" : `Touche ${label}`);
      const finger = keyFingers[value.toLowerCase()];
      if (finger) {
        key.dataset.finger = finger;
        key.style.setProperty("--key-color", fingerData[finger].color);
      }
      if (["f", "j"].includes(value.toLowerCase())) key.classList.add("home-bump");
      key.addEventListener("click", () => {
        const expected = currentText()[state.position];
        const input = expected !== undefined && alternate !== undefined && normalized(expected) === normalized(alternate)
          ? alternate
          : expected !== undefined && value.length === 1 && normalized(expected) === normalized(value)
            ? expected
            : value;
        handleInput(input);
      });
      rowElement.appendChild(key);
    });
    elements.keyboard.appendChild(rowElement);
  });
}

function createHands() {
  ["l", "r"].forEach((side) => {
    const hand = document.querySelector(side === "l" ? "#leftHand" : "#rightHand");
    const fingers = [
      { suffix: "p", x: 25, y: 65, angle: -10 },
      { suffix: "r", x: 51, y: 37, angle: -4 },
      { suffix: "m", x: 77, y: 25, angle: 2 },
      { suffix: "i", x: 103, y: 41, angle: 8 }
    ];
    hand.innerHTML = `
      <defs>
        <linearGradient id="skin-${side}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff0de"/>
          <stop offset=".55" stop-color="#ffdfc4"/>
          <stop offset="1" stop-color="#efc1a1"/>
        </linearGradient>
      </defs>
      <ellipse class="hand-shadow" cx="80" cy="206" rx="48" ry="7"/>
      <path class="palm" fill="url(#skin-${side})" d="M25 110 C21 126 25 156 38 174 C45 183 49 190 49 203 Q76 212 104 203 C104 190 108 182 119 174 C134 163 143 148 145 133 Q140 118 126 109 Q80 97 25 110 Z"/>
      ${fingers.map(({ suffix, x, y, angle }) => {
        const code = side + suffix;
        const base = suffix === "p" ? 131 : 124;
        return `<g class="finger" data-finger="${code}" style="--digit-color: ${fingerData[code].color}" transform="rotate(${angle} ${x + 11} ${base})">
          <title>${fingerData[code].name}</title>
          <path class="digit-shape" d="M${x - 1} ${base} C${x - 2} ${base - 22} ${x + 1} ${y + 27} ${x + 1} ${y + 12} C${x + 1} ${y - 2} ${x + 21} ${y - 2} ${x + 21} ${y + 12} C${x + 21} ${y + 32} ${x + 25} ${base - 21} ${x + 23} ${base} Q${x + 11} ${base + 7} ${x - 1} ${base} Z"/>
          <rect class="nail" x="${x + 5}" y="${y + 6}" width="12" height="17" rx="5"/>
          <path class="knuckle-line" d="M${x + 6} ${y + 39} Q${x + 11} ${y + 41} ${x + 16} ${y + 39} M${x + 5} ${base - 14} Q${x + 11} ${base - 11} ${x + 17} ${base - 14}"/>
          <path class="finger-marker" d="M${x + 4} ${y - 15} h14 l-7 10 Z"/>
        </g>`;
      }).join("")}
      <g class="thumb" data-finger="${side}t" style="--digit-color: var(--thumb)">
        <title>Pouce ${side === "l" ? "gauche" : "droit"}</title>
        <path class="digit-shape" d="M111 151 C119 140 134 127 145 116 C152 108 161 111 163 119 C166 127 157 136 152 143 L139 163 C132 175 117 177 111 166 Q107 160 111 151 Z"/>
        <ellipse class="nail" cx="153" cy="123" rx="6" ry="9" transform="rotate(40 153 123)"/>
        <path class="knuckle-line" d="M135 142 Q140 142 143 146"/>
        <path class="finger-marker" d="M146 96 h14 l-7 10 Z"/>
      </g>
      <path class="palm-line" d="M45 141 Q46 150 49 155 M72 138 L72 151 M97 139 Q96 147 95 151 M58 186 Q77 191 97 186"/>
      <path class="wrist-cuff" d="M45 199 Q76 207 108 199 L108 214 Q76 221 45 214 Z"/>
      <path class="cuff-seam" d="M51 207 Q76 213 102 207"/>
    `;
  });
}

function renderLevels() {
  elements.levelList.innerHTML = "";
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = `level-card ${index === state.level ? "active" : ""} ${state.completed[index] ? "complete" : ""}`;
    button.innerHTML = `
      <span class="level-icon">${level.icon}</span>
      <b>Niveau ${index + 1}</b>
      <small>${level.title}</small>
      <span class="mini-stars">${"⭐".repeat(state.completed[index] || 3)}</span>
    `;
    button.addEventListener("click", () => selectLevel(index));
    elements.levelList.appendChild(button);
  });
  const completedCount = levels.filter((_, index) => state.completed[index]).length;
  elements.progressLabel.textContent = `${completedCount} niveau${completedCount > 1 ? "x" : ""} terminé${completedCount > 1 ? "s" : ""} sur ${levels.length}`;
  elements.totalStars.textContent = levels.reduce((sum, _, index) => sum + (state.completed[index] || 0), 0);
}

function selectLevel(index) {
  state.level = index;
  state.exercise = 0;
  setExerciseView(true);
  resetExercise();
  renderLevels();
  elements.practiceTitle.focus({ preventScroll: true });
}

function setExerciseView(active) {
  elements.practice.hidden = !active;
  elements.homeSections.forEach((section) => { section.hidden = active; });
  document.body.classList.toggle("exercise-mode", active);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function returnToLevels() {
  clearTimeout(state.finishTimer);
  stopClock();
  stopVoice();
  elements.celebration.hidden = true;
  setExerciseView(false);
  elements.levelList.children[state.level].focus({ preventScroll: true });
}

function currentText() {
  return levels[state.level].exercises[state.exercise];
}

function resetExercise() {
  clearTimeout(state.finishTimer);
  stopClock();
  state.startedAt = null;
  state.elapsedMs = 0;
  state.position = 0;
  state.attempts = 0;
  state.errors = 0;
  state.streak = 0;
  renderClock();
  const level = levels[state.level];
  elements.lessonNumber.textContent = state.level + 1;
  elements.lessonKicker.textContent = `NIVEAU ${state.level + 1} • EXERCICE ${state.exercise + 1}/${level.exercises.length}`;
  elements.practiceTitle.textContent = level.title;
  elements.coachText.textContent = level.coach;
  elements.targetLabel.textContent = state.level >= CASE_SENSITIVE_LEVEL_INDEX
    ? "Respecte les majuscules et les minuscules"
    : "Tape les lettres";
  renderTarget();
  updateStats();
  updateGuide();
  speakInstructions();
}

function renderTarget() {
  const text = currentText();
  elements.targetText.innerHTML = "";
  [...text].forEach((character, index) => {
    const span = document.createElement("span");
    span.className = `target-char ${character === " " ? "space" : ""}`;
    if (index < state.position) span.classList.add("correct");
    if (index === state.position) span.classList.add("current");
    span.textContent = character === " " ? "·" : character;
    elements.targetText.appendChild(span);
  });
  elements.exerciseProgress.style.width = `${(state.position / text.length) * 100}%`;
}

function normalized(value) {
  return value.length === 1 ? value.toLocaleLowerCase("fr") : value;
}

function isLetter(value) {
  return value.length === 1 && value.toLocaleLowerCase("fr") !== value.toLocaleUpperCase("fr");
}

function usesCaseGuidance(value) {
  return state.level >= CASE_SENSITIVE_LEVEL_INDEX && isLetter(value);
}

function isUppercaseLetter(value) {
  return isLetter(value) && value === value.toLocaleUpperCase("fr");
}

function shiftDetailsFor(fingerCode) {
  return fingerCode.startsWith("l")
    ? { key: "ShiftRight", fingerCode: "rp", side: "droite" }
    : { key: "ShiftLeft", fingerCode: "lp", side: "gauche" };
}

function modifierDetailsFor(value, fingerCode) {
  if ((usesCaseGuidance(value) && isUppercaseLetter(value)) || ["?", ".", "/", "§"].includes(value)) {
    const shift = shiftDetailsFor(fingerCode);
    return { ...shift, label: `Maj ${shift.side}` };
  }
  if (value === "€") return { key: "AltGraph", fingerCode: "rt", label: "Alt Gr" };
  return null;
}

function baseKeyFor(value) {
  return { "?": ",", ".": ";", "/": ":", "§": "!", "€": "e" }[value] || value;
}

function keyName(value) {
  const name = { " ": "Espace", ",": "virgule", ";": "point-virgule", ":": "deux-points", "!": "point d'exclamation", "'": "apostrophe" }[value];
  if (name) return name;
  return /^[a-z]$/i.test(value) ? value.toLocaleUpperCase("fr") : value;
}

function resultName(value) {
  const specialNames = { ".": "le point", "?": "le point d'interrogation", "/": "la barre oblique", "§": "le symbole paragraphe", "€": "le symbole euro", " ": "un espace", ",": "la virgule", ";": "le point-virgule", "!": "le point d'exclamation", "'": "l'apostrophe" };
  if (specialNames[value]) return specialNames[value];
  if (!isLetter(value)) return `le caractère ${value}`;
  if (!usesCaseGuidance(value)) return `la lettre ${value}`;
  return `la lettre ${value} ${isUppercaseLetter(value) ? "majuscule" : "minuscule"}`;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function renderClock() {
  if (state.clockInterval !== null) state.elapsedMs = performance.now() - state.startedAt;
  elements.elapsedTime.textContent = formatTime(state.elapsedMs);
  elements.typingSpeed.textContent = `${typingSpeed()} mots/min`;
}

function typingSpeed() {
  return state.elapsedMs >= 1000 ? Math.round((state.position / 5) * (60000 / state.elapsedMs)) : 0;
}

function startClock() {
  if (state.startedAt !== null) return;
  state.startedAt = performance.now();
  state.clockInterval = setInterval(renderClock, 200);
}

function stopClock() {
  if (state.clockInterval === null) return;
  renderClock();
  clearInterval(state.clockInterval);
  state.clockInterval = null;
}

function handleInput(rawKey) {
  if (elements.practice.hidden || !elements.celebration.hidden) return;
  const text = currentText();
  const expected = text[state.position];
  const key = rawKey === "Spacebar" ? " " : rawKey;
  if (key.length !== 1 || expected === undefined) return;

  startClock();
  state.attempts += 1;
  animateKey(key);
  const matchesExpected = usesCaseGuidance(expected) ? key === expected : normalized(key) === normalized(expected);
  if (matchesExpected) {
    state.position += 1;
    state.streak += 1;
    playTone(520 + Math.min(state.streak, 10) * 18, .055);
    renderTarget();
    updateStats();
    if (state.position === text.length) {
      stopClock();
      stopVoice();
      state.finishTimer = setTimeout(finishExercise, 260);
    } else {
      updateGuide();
      speakGuidance();
    }
  } else {
    state.errors += 1;
    state.streak = 0;
    playTone(150, .1);
    const current = elements.targetText.children[state.position];
    current?.classList.add("wrong");
    setTimeout(() => current?.classList.remove("wrong"), 280);
    updateStats();
    speakGuidance("Essaie encore. ");
  }
}

function animateKey(keyValue) {
  const baseKey = baseKeyFor(keyValue);
  const key = [...document.querySelectorAll(".key")].find((item) => normalized(item.dataset.key) === normalized(baseKey));
  if (!key) return;
  key.classList.add("pressed");
  setTimeout(() => key.classList.remove("pressed"), 110);
}

function updateStats() {
  const accuracy = state.attempts ? Math.round(((state.attempts - state.errors) / state.attempts) * 100) : 100;
  elements.accuracy.textContent = `${accuracy}%`;
  elements.streak.textContent = `${state.streak} 🔥`;
  renderClock();
}

function updateGuide() {
  document.querySelectorAll(".key.active, [data-finger].active").forEach((item) => item.classList.remove("active"));
  const expected = currentText()[state.position];
  if (expected === undefined) {
    elements.modifierCallout.hidden = true;
    return;
  }
  const fingerCode = keyFingers[normalized(expected)] || "ri";
  const finger = fingerData[fingerCode];
  const baseKey = baseKeyFor(expected);
  const key = [...document.querySelectorAll(".key")].find((item) => normalized(item.dataset.key) === normalized(baseKey));
  key?.classList.add("active");
  document.querySelector(`[data-finger="${fingerCode}"].finger, [data-finger="${fingerCode}"].thumb`)?.classList.add("active");
  const modifier = modifierDetailsFor(expected, fingerCode);
  elements.primaryInstruction.textContent = `${modifier ? "Puis appuie" : "Appuie"} sur la touche ${keyName(baseKey)} avec ton ${finger.name} pour faire ${resultName(expected)}.`;
  if (modifier) {
    const modifierFinger = fingerData[modifier.fingerCode];
    document.querySelector(`.key[data-key="${modifier.key}"]`)?.classList.add("active");
    document.querySelector(`[data-finger="${modifier.fingerCode}"].finger, [data-finger="${modifier.fingerCode}"].thumb`)?.classList.add("active");
    elements.modifierCallout.hidden = false;
    elements.modifierCallout.style.setProperty("--callout-color", modifierFinger.color);
    elements.modifierFingerIcon.textContent = modifierFinger.icon;
    elements.modifierInstruction.textContent = `Maintiens la touche ${modifier.label} avec ton ${modifierFinger.name}.`;
  } else {
    elements.modifierCallout.hidden = true;
  }

  document.documentElement.style.setProperty("--active-finger-color", finger.color);
  elements.fingerIcon.textContent = finger.icon;
  document.querySelectorAll(".hand").forEach((hand) => {
    const active = hand.querySelector(".active");
    const name = hand.id === "leftHand" ? "Main gauche" : "Main droite";
    const activeFinger = active ? fingerData[active.dataset.finger] : null;
    hand.setAttribute("aria-label", activeFinger ? `${name} : ${activeFinger.name} à utiliser` : `${name}, doigts colorés comme les touches du clavier`);
  });
}

function finishExercise() {
  if (elements.practice.hidden) return;
  playSuccess();
  const accuracy = Math.round(((state.attempts - state.errors) / state.attempts) * 100);
  const stars = accuracy >= 95 ? 3 : accuracy >= 80 ? 2 : 1;
  document.querySelector("#earnedStars").textContent = "⭐".repeat(stars) + "☆".repeat(3 - stars);
  document.querySelector("#resultAccuracy").textContent = `${accuracy}%`;
  document.querySelector("#resultErrors").textContent = state.errors;
  document.querySelector("#resultTime").textContent = formatTime(state.elapsedMs);
  document.querySelector("#resultSpeed").textContent = typingSpeed();
  document.querySelector("#celebrationMessage").textContent =
    accuracy >= 95 ? "Incroyable, tes doigts ont été parfaits !" :
    accuracy >= 80 ? "Très bien ! Encore un petit effort." :
    "Bien joué ! Recommence pour gagner plus d'étoiles.";
  elements.celebration.hidden = false;
  elements.celebration.querySelector("button").focus();
  speak(`Bravo ! ${document.querySelector("#celebrationMessage").textContent} Tu as gagné ${stars} étoile${stars > 1 ? "s" : ""}.`);

  if (state.exercise === levels[state.level].exercises.length - 1) {
    state.completed[state.level] = Math.max(state.completed[state.level] || 0, stars);
    localStorage.setItem("clavierMagiqueProgress", JSON.stringify(state.completed));
    renderLevels();
  }
}

function nextExercise() {
  elements.celebration.hidden = true;
  if (state.exercise < levels[state.level].exercises.length - 1) {
    state.exercise += 1;
  } else if (state.level < levels.length - 1) {
    state.level += 1;
    state.exercise = 0;
    renderLevels();
  } else {
    state.exercise = 0;
  }
  resetExercise();
  elements.practiceTitle.focus({ preventScroll: true });
}

let audioContext;

let speechTimer;
let activeUtterance;
const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

function frenchVoices() {
  return window.speechSynthesis.getVoices().filter((voice) => voice.localService && /^fr(?:-|$)/i.test(voice.lang));
}

function updateVoices() {
  const voices = frenchVoices();
  elements.voiceSelect.replaceChildren();
  elements.voiceSelect.disabled = voices.length === 0;
  if (!voices.length) {
    const option = document.createElement("option");
    option.textContent = "Aucune voix française locale";
    elements.voiceSelect.appendChild(option);
    return;
  }
  const selected = voices.find((voice) => voice.voiceURI === state.voiceURI)
    || voices.find((voice) => /Julie/i.test(voice.name) && /^fr-FR$/i.test(voice.lang))
    || voices.find((voice) => /^fr-FR$/i.test(voice.lang))
    || voices[0];
  state.voiceURI = selected.voiceURI;
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.voiceURI;
    option.textContent = voice.name;
    option.selected = voice.voiceURI === state.voiceURI;
    elements.voiceSelect.appendChild(option);
  });
}

function stopVoice() {
  clearTimeout(speechTimer);
  activeUtterance = null;
  if (speechSupported) window.speechSynthesis.cancel();
}

function voiceGuidance() {
  const expected = currentText()[state.position];
  if (expected === undefined) return "";
  const finger = fingerData[keyFingers[normalized(expected)]];
  const letterNames = { a: "a", b: "bé", c: "cé", d: "dé", e: "eu", f: "effe", g: "gé", h: "ache", i: "i", j: "ji", k: "ka", l: "elle", m: "emme", n: "enne", o: "o", p: "pé", q: "ku", r: "erre", s: "esse", t: "té", u: "u", v: "vé", w: "double vé", x: "iks", y: "i grec", z: "zède" };
  const names = { " ": "la touche espace", ".": "un point", "?": "un point d'interrogation", "€": "le symbole euro", ",": "une virgule", ";": "un point-virgule", "!": "un point d'exclamation", "'": "une apostrophe", "é": "la lettre é, accent aigu", "è": "la lettre è, accent grave", "à": "la lettre à, accent grave", "ç": "la lettre cé cédille", "ù": "la lettre u, accent grave" };
  const letter = letterNames[normalized(expected)];
  const name = names[expected] || (letter ? `la lettre ${letter}` : expected);
  const caseInstruction = usesCaseGuidance(expected)
    ? isUppercaseLetter(expected) ? " en majuscule" : " en minuscule, sans touche Maj"
    : "";
  const modifier = modifierDetailsFor(expected, keyFingers[normalized(expected)]);
  const spokenBaseKey = { ".": "point-virgule", "?": "virgule", "/": "deux-points", "§": "point d'exclamation", "€": "E" }[expected] || letter || name;
  if (modifier) {
    const modifierFinger = fingerData[modifier.fingerCode];
    return `Tape ${name}${caseInstruction}. Premier doigt : avec ton ${modifierFinger.name}, maintiens la touche ${modifier.label}. Deuxième doigt : avec ton ${finger.name}, appuie sur la touche ${spokenBaseKey}.`;
  }
  return `Tape ${name}${caseInstruction}. Avec ton ${finger.name}, appuie sur la touche ${spokenBaseKey}.`;
}

function speak(text) {
  stopVoice();
  if (!state.voice || !speechSupported || elements.practice.hidden) return;
  const voice = frenchVoices().find((item) => item.voiceURI === state.voiceURI);
  if (!voice) {
    elements.voiceStatus.textContent = "Aucune voix française locale disponible. Installe une voix française dans les paramètres vocaux de ton appareil, puis réactive la voix.";
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  activeUtterance = utterance;
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = .95;
  utterance.onstart = () => {
    if (activeUtterance === utterance) elements.voiceStatus.textContent = "";
  };
  utterance.onend = () => {
    if (activeUtterance === utterance) {
      activeUtterance = null;
      elements.voiceStatus.textContent = "";
    }
  };
  utterance.onerror = (event) => {
    if (activeUtterance !== utterance || ["canceled", "interrupted"].includes(event.error)) return;
    activeUtterance = null;
    console.error("Lecture de la consigne impossible :", event.error);
    elements.voiceStatus.textContent = "La consigne vocale n'a pas pu être lue. Vérifie le son de ton appareil, puis clique sur Réécouter la consigne.";
  };
  window.speechSynthesis.speak(utterance);
}

function speakInstructions() {
  const coach = levels[state.level].coach.replace(/\bF et J\b/g, "effe et ji");
  speak(`${coach} ${voiceGuidance()}`);
}

function speakGuidance(prefix = "") {
  stopVoice();
  if (state.voice) speechTimer = setTimeout(() => speak(prefix + voiceGuidance()), 300);
}

elements.voiceButton.addEventListener("click", () => {
  state.voice = !state.voice;
  elements.voiceButton.setAttribute("aria-pressed", String(state.voice));
  elements.voiceButton.textContent = state.voice ? "🗣️ Couper la voix" : "🗣️ Activer la voix";
  elements.repeatButton.disabled = !state.voice;
  if (state.voice) {
    speakInstructions();
  } else {
    stopVoice();
    elements.voiceStatus.textContent = "";
  }
});
elements.repeatButton.addEventListener("click", speakInstructions);
elements.voiceSelect.addEventListener("change", () => {
  state.voiceURI = elements.voiceSelect.value;
  localStorage.setItem("clavierMagiqueVoice", state.voiceURI);
  if (state.voice) speakInstructions();
});
if (speechSupported) {
  updateVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    updateVoices();
    if (state.voice && elements.celebration.hidden) speakInstructions();
  });
} else {
  elements.voiceButton.disabled = true;
  elements.voiceSelect.options[0].textContent = "Voix indisponibles";
  elements.voiceStatus.textContent = "Ce navigateur ne propose pas de consignes vocales. Essaie une version récente d'Edge ou de Chrome.";
}
window.addEventListener("pagehide", stopVoice);

function playTone(frequency, duration) {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(.08, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function playSuccess() {
  [523, 659, 784].forEach((tone, index) => setTimeout(() => playTone(tone, .18), index * 100));
}

document.addEventListener("keydown", (event) => {
  if (elements.practice.hidden) return;
  if ((event.ctrlKey || event.altKey || event.metaKey) && event.key !== "€") return;
  if (event.key === " " && event.target instanceof Element && event.target.closest("button")) return;
  if (event.key === " " || event.key.length === 1) {
    event.preventDefault();
    handleInput(event.key);
  }
});

document.querySelector("#restartButton").addEventListener("click", resetExercise);
document.querySelector("#backButton").addEventListener("click", returnToLevels);
document.querySelector("#previousButton").addEventListener("click", () => {
  const count = levels[state.level].exercises.length;
  state.exercise = (state.exercise - 1 + count) % count;
  resetExercise();
});
document.querySelector("#nextButton").addEventListener("click", () => {
  state.exercise = (state.exercise + 1) % levels[state.level].exercises.length;
  resetExercise();
});
document.querySelector("#continueButton").addEventListener("click", nextExercise);
document.querySelector("#soundButton").addEventListener("click", (event) => {
  state.sound = !state.sound;
  event.currentTarget.textContent = state.sound ? "🔊 Couper les effets sonores" : "🔇 Activer les effets sonores";
  event.currentTarget.setAttribute("aria-pressed", String(state.sound));
  event.currentTarget.title = state.sound ? "Effets sonores activés" : "Effets sonores coupés";
  event.currentTarget.setAttribute("aria-label", state.sound ? "Couper les effets sonores" : "Activer les effets sonores");
});

createKeyboard();
createHands();
renderLevels();
resetExercise();

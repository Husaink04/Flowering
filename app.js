const FLOWERS = [
  {
    id: "rose",
    name: "Rose",
    emoji: "🌹",
    wiki: "Rose",
    palette: { bg: "#f6e6ea", bg2: "#e7b7c3", accent: "#9b2d4a", ink: "#3a1d24", chip: "#f3d0d8" },
    qualities: ["passionate", "loyal", "protective", "tender"],
    portrait:
      "You love in full color and you do not apologize for the thorns that keep that love intact. People remember how you made them feel long after they forget what was said.",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    emoji: "🌻",
    wiki: "Common_sunflower",
    palette: { bg: "#f7efd2", bg2: "#e8c85a", accent: "#b58112", ink: "#3a3114", chip: "#f3e4a8" },
    qualities: ["optimistic", "warm", "steadfast", "generous"],
    portrait:
      "You turn toward light even on dim days, and you make rooms brighter without asking to be the center of them. Your loyalty is a face that keeps finding the sun.",
  },
  {
    id: "lavender",
    name: "Lavender",
    emoji: "💜",
    wiki: "Lavandula",
    palette: { bg: "#ece6f4", bg2: "#c5b3dc", accent: "#6b4c9a", ink: "#2a2238", chip: "#ddd3ec" },
    qualities: ["calm", "healing", "quietly strong", "clear"],
    portrait:
      "You settle storms by existing near them. Your strength is the kind that does not raise its voice, and people leave you softer than they arrived.",
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    emoji: "🌸",
    wiki: "Cherry_blossom",
    palette: { bg: "#f8e8ef", bg2: "#f0b8cc", accent: "#c45b7a", ink: "#3a2430", chip: "#f5d3e0" },
    qualities: ["present", "gentle", "awake to beauty", "brave"],
    portrait:
      "You understand that the most precious things do not last, and you love them harder because of it. Your gentleness is not fragility — it is attention.",
  },
  {
    id: "lotus",
    name: "Lotus",
    emoji: "🪷",
    wiki: "Nelumbo_nucifera",
    palette: { bg: "#e7f0ee", bg2: "#b7d4cf", accent: "#3f7a72", ink: "#1e3330", chip: "#cfe3df" },
    qualities: ["resilient", "ungrasping", "grounded", "luminous"],
    portrait:
      "You rise from difficult water without carrying the mud with you. What tried to bury you became the soil that taught you how to open.",
  },
  {
    id: "orchid",
    name: "Orchid",
    emoji: "💐",
    wiki: "Orchid",
    palette: { bg: "#f3e8f4", bg2: "#d7b0d8", accent: "#7a3d7e", ink: "#321a34", chip: "#e9d2ea" },
    qualities: ["rare", "refined", "independent", "discerning"],
    portrait:
      "You do not bloom for every room, and that is not arrogance — it is taste. Those who earn your trust find a devotion that looks like poise from the outside.",
  },
  {
    id: "daisy",
    name: "Daisy",
    emoji: "🌼",
    wiki: "Bellis_perennis",
    palette: { bg: "#f4f1dc", bg2: "#e4d98a", accent: "#7a6b1e", ink: "#2f2b14", chip: "#ece6b8" },
    qualities: ["honest", "cheerful", "uncomplicated", "kind"],
    portrait:
      "You tell the truth without making it a weapon. People rest around you because you do not require them to perform.",
  },
  {
    id: "peony",
    name: "Peony",
    emoji: "🌺",
    wiki: "Peony",
    palette: { bg: "#f8e4ea", bg2: "#e8a0b4", accent: "#b44563", ink: "#3a1f28", chip: "#f3c9d4" },
    qualities: ["generous", "romantic", "abundant", "open-hearted"],
    portrait:
      "You arrive already in bloom — warmth, celebration, a fullness that does not ration itself. Love, around you, feels like there will be enough.",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    emoji: "🤍",
    wiki: "Jasmine",
    palette: { bg: "#efeae3", bg2: "#d4c4a8", accent: "#6e5a38", ink: "#2c261c", chip: "#e4d9c4" },
    qualities: ["magnetic", "mysterious", "night-wise", "intimate"],
    portrait:
      "You come alive when the noise thins. Your presence is a scent people follow without knowing why, and closeness with you feels like a secret kept well.",
  },
  {
    id: "tulip",
    name: "Tulip",
    emoji: "🌷",
    wiki: "Tulip",
    palette: { bg: "#f6e6e4", bg2: "#e8b0a8", accent: "#b54c42", ink: "#3a221f", chip: "#f0cfc9" },
    qualities: ["elegant", "adaptable", "graceful", "self-possessed"],
    portrait:
      "You change seasons without losing your line. Grace, in you, is not decoration — it is how you move through what you cannot control.",
  },
  {
    id: "lily",
    name: "Lily",
    emoji: "💮",
    wiki: "Lilium",
    palette: { bg: "#f0eee8", bg2: "#d2cfc4", accent: "#5f5a4a", ink: "#2a2822", chip: "#e2dfd4" },
    qualities: ["dignified", "sincere", "luminous", "clear"],
    portrait:
      "You do not crowd a moment. Your sincerity has a white light to it — people trust you because you mean the quiet things you say.",
  },
  {
    id: "iris",
    name: "Iris",
    emoji: "🪻",
    wiki: "Iris_(plant)",
    palette: { bg: "#e7e8f6", bg2: "#b4b8e0", accent: "#4a4f9a", ink: "#22243a", chip: "#d2d5ee" },
    qualities: ["intuitive", "creative", "messenger", "seeing"],
    portrait:
      "You notice the message under the conversation. Your imagination is a bridge, and people often feel understood by you before they have finished speaking.",
  },
  {
    id: "poppy",
    name: "Poppy",
    emoji: "🏵️",
    wiki: "Papaver_rhoeas",
    palette: { bg: "#f8e4de", bg2: "#e89a80", accent: "#c13a28", ink: "#3a1e18", chip: "#f3c8ba" },
    qualities: ["vivid", "dreamer", "remembering", "brave"],
    portrait:
      "You burn brightly and you remember what others rush past. Your dreaming is not escape — it is how you keep what matters from disappearing.",
  },
  {
    id: "marigold",
    name: "Marigold",
    emoji: "🧡",
    wiki: "Tagetes",
    palette: { bg: "#f6ead4", bg2: "#e2a84a", accent: "#c05c12", ink: "#3a2a14", chip: "#f0d5a0" },
    qualities: ["bold", "protective", "celebrating", "warm"],
    portrait:
      "You stand at thresholds and make them holy — farewells, homecomings, ordinary Tuesdays. Your warmth is a guard as much as a welcome.",
  },
  {
    id: "wisteria",
    name: "Wisteria",
    emoji: "🍇",
    wiki: "Wisteria",
    palette: { bg: "#ece6f5", bg2: "#c3b0dc", accent: "#6a4e96", ink: "#2a2236", chip: "#ddd0ec" },
    qualities: ["patient", "devoted", "enduring", "romantic"],
    portrait:
      "You stay. Your love is a long vine, not a spark, and you will wait years for the right wall to climb. Devotion, in you, looks like time.",
  },
  {
    id: "magnolia",
    name: "Magnolia",
    emoji: "🤍",
    wiki: "Magnolia",
    palette: { bg: "#f3ebe3", bg2: "#d9c3b0", accent: "#8a5a3b", ink: "#32261e", chip: "#e8d8c8" },
    qualities: ["ancient-souled", "dignified", "unhurried", "deep"],
    portrait:
      "You are older than your years in the ways that count. You do not rush a becoming, and people feel history in your calm — as if you have bloomed before.",
  },
  {
    id: "carnation",
    name: "Carnation",
    emoji: "💗",
    wiki: "Dianthus_caryophyllus",
    palette: { bg: "#f6e6ea", bg2: "#e4b0be", accent: "#a64562", ink: "#3a222a", chip: "#f0d0d8" },
    qualities: ["steadfast", "devoted", "everyday-loving", "true"],
    portrait:
      "You are the love that shows up on ordinary days. Grandeur does not impress you; constancy does, and you offer it without keeping score.",
  },
  {
    id: "chrysanthemum",
    name: "Chrysanthemum",
    emoji: "🌼",
    wiki: "Chrysanthemum",
    palette: { bg: "#f3ecda", bg2: "#d4c07a", accent: "#8a6b1e", ink: "#322a16", chip: "#e8dcb0" },
    qualities: ["honest", "enduring", "wise", "clear-eyed"],
    portrait:
      "You ripen late and you last. Your honesty has autumn in it — a refusal to pretend the leaf is still green, and a beauty that comes from knowing anyway.",
  },
  {
    id: "hydrangea",
    name: "Hydrangea",
    emoji: "💠",
    wiki: "Hydrangea",
    palette: { bg: "#e4eef4", bg2: "#a8c8dc", accent: "#3d6f8a", ink: "#1e2e38", chip: "#cde0ea" },
    qualities: ["emotionally rich", "adaptable", "clustered in care", "sensitive"],
    portrait:
      "You change with the soil you are planted in, and that is a gift, not a lack of self. Your feelings arrive in clusters — many, and meant to be shared.",
  },
  {
    id: "forget-me-not",
    name: "Forget-me-not",
    emoji: "💙",
    wiki: "Forget-me-not",
    palette: { bg: "#e4eef8", bg2: "#9ec0e4", accent: "#2f5f9a", ink: "#1a2a3a", chip: "#c8daf0" },
    qualities: ["loyal", "remembering", "unforgettable", "true"],
    portrait:
      "You are small in the way a vow is small — easy to overlook, impossible to lose. People who love you do not forget, because you never did.",
  },
  {
    id: "protea",
    name: "Protea",
    emoji: "🌺",
    wiki: "Protea_cynaroides",
    palette: { bg: "#f4e6e0", bg2: "#d49a80", accent: "#a04532", ink: "#3a221c", chip: "#ebc8b8" },
    qualities: ["courageous", "unusual", "resilient", "vivid"],
    portrait:
      "You thrive where softer things fold. Your courage is not loud; it is the decision to stay strange and alive in harsh weather.",
  },
  {
    id: "camellia",
    name: "Camellia",
    emoji: "🏵️",
    wiki: "Camellia",
    palette: { bg: "#f6e8ea", bg2: "#e0b0b8", accent: "#9a3d4e", ink: "#3a2228", chip: "#f0d0d6" },
    qualities: ["composed", "persistent", "winter-blooming", "graceful"],
    portrait:
      "You bloom when it is not convenient. Composure is your weather — you keep your shape in cold months, and people borrow your calm without knowing they have.",
  },
  {
    id: "bluebell",
    name: "Bluebell",
    emoji: "🔔",
    wiki: "Common_bluebell",
    palette: { bg: "#e6eef6", bg2: "#a8bee0", accent: "#3d5a8a", ink: "#1e2a3a", chip: "#cddced" },
    qualities: ["humble", "quiet", "enchanted", "kind"],
    portrait:
      "You prefer the woodland edge to the stage. Your kindness is a hush, and those who walk slowly enough hear it — a small bell, faithfully ringing.",
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    emoji: "🦜",
    wiki: "Strelitzia_reginae",
    palette: { bg: "#f4ead4", bg2: "#e0a84a", accent: "#c45a1e", ink: "#3a2814", chip: "#eed6a4" },
    qualities: ["dramatic", "adventurous", "tropical-spirited", "bold"],
    portrait:
      "You were not made for a timid vase. Adventure sits in your posture — a crest, a departure, a life that would rather risk color than stay safe and pale.",
  },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const SEASON_BODY = {
  winter: "you bloom when the world has gone quiet — your warmth is chosen, not borrowed.",
  spring: "you arrive as a beginning: people feel possible around you.",
  summer: "you hold heat and generosity as if the sun had asked you to keep it.",
  autumn: "you know how to let go without becoming less — your color deepens late.",
};

const MONTH_QUALITIES = [
  "",
  "still",
  "inward",
  "beginning",
  "budding",
  "open",
  "sunlit",
  "full-hearted",
  "heat-holding",
  "ripening",
  "deepening",
  "releasing",
  "winter-blooming",
];

const LETTER_TAGS = [
  "anchored", "bold", "clear", "devoted", "earnest", "faithful",
  "generous", "honest", "intuitive", "joyful", "kindled", "loyal",
  "measured", "noticing", "open", "patient", "quiet-strong", "rooted",
  "sincere", "tender", "unhurried", "vivid", "warm", "exacting",
  "yearning", "zestful",
];

const LETTER_LINES = [
  "you stay when leaving would be easier",
  "you walk toward what others only name",
  "you make the tangled thing simple without making it small",
  "you keep people, not just moments",
  "you mean the quiet things you say",
  "your word is a place others can stand",
  "you give without turning it into a performance",
  "you tell the truth without needing an audience",
  "you hear the sentence under the sentence",
  "you bring light that does not ask to be thanked",
  "you start the fire and then tend it",
  "you do not vanish when the novelty wears off",
  "you wait for the right hour instead of the loud one",
  "you catch what other people miss",
  "you let rooms change you without losing your name",
  "you can sit with a becoming until it is ready",
  "your strength does not need to announce itself",
  "you hold your ground in weather that moves everyone else",
  "people trust you because you do not decorate the facts",
  "you love in a way that does not bruise",
  "you refuse to be rushed out of yourself",
  "you arrive in color, even on grey days",
  "people warm their hands on you without noticing",
  "you care about the exactness of a promise",
  "you want the real thing, not the almost",
  "you finish what you begin, and you begin with heat",
];

const DAY_LINES = [
  "you notice the first light in a room.",
  "you keep promises that were never written down.",
  "you make ordinary hours feel chosen.",
  "you remember people in the specific.",
  "you hold the door without announcing it.",
  "you find the thread when a story frays.",
  "you love in a way that does not hurry.",
  "you leave a place slightly more possible than you found it.",
];

let photoGen = 0;

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

function flowerIndex(name, date) {
  const s = name.trim().toLowerCase() + date;
  return Math.abs(hashString(s)) % FLOWERS.length;
}

function firstName(name) {
  return name.trim().split(/\s+/)[0];
}

function parseBirth(dateStr) {
  return new Date(dateStr + "T12:00:00");
}

function seasonKey(dateStr) {
  const month = Number(dateStr.slice(5, 7));
  if (month === 12 || month <= 2) return "winter";
  if (month <= 5) return "spring";
  if (month <= 8) return "summer";
  return "autumn";
}

function letterIndex(name) {
  const c = firstName(name).charAt(0).toLowerCase();
  if (c >= "a" && c <= "z") return c.charCodeAt(0) - 97;
  return Math.abs(hashString(c)) % 26;
}

function articleFor(word) {
  return /^[aeiou]/i.test(word) ? "an " : "a ";
}

function qualitiesFor(flower, name, dateStr) {
  const tags = flower.qualities.slice(0, 2);
  const extras = [
    MONTH_QUALITIES[Number(dateStr.slice(5, 7))],
    LETTER_TAGS[letterIndex(name)],
  ];
  extras.forEach(function (t) {
    if (t && tags.indexOf(t) === -1) tags.push(t);
  });
  flower.qualities.forEach(function (t) {
    if (tags.length < 4 && tags.indexOf(t) === -1) tags.push(t);
  });
  return tags;
}

function portraitFor(name, flower) {
  const n = firstName(name);
  const bloom = flower.name.toLowerCase();
  return (
    n +
    ", when the world meets you it meets " +
    articleFor(flower.name) +
    bloom +
    ". " +
    flower.portrait +
    " This is not a mood, " +
    n +
    " — it is how you have always been."
  );
}

function seasonLine(name, dateStr) {
  const n = firstName(name);
  const month = MONTH_NAMES[Number(dateStr.slice(5, 7)) - 1];
  const season = seasonKey(dateStr);
  return n + ", " + month + " set you in " + season + " — " + SEASON_BODY[season];
}

function birthNote(name, dateStr) {
  const n = firstName(name);
  const born = parseBirth(dateStr);
  const weekday = WEEKDAYS[born.getDay()];
  const dayLine = DAY_LINES[(born.getDate() - 1) % DAY_LINES.length];
  const letter = LETTER_LINES[letterIndex(name)];
  return "Born on a " + weekday + ", " + n + ", " + dayLine + " And " + letter + ".";
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function applyPalette(palette) {
  const root = document.documentElement;
  root.style.setProperty("--bg", palette.bg);
  root.style.setProperty("--bg2", palette.bg2);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--ink", palette.ink);
  root.style.setProperty("--chip", palette.chip);
}

function resetPalette() {
  ["--bg", "--bg2", "--accent", "--ink", "--chip"].forEach(function (k) {
    document.documentElement.style.removeProperty(k);
  });
}

function showError(msg) {
  const el = document.getElementById("error");
  el.hidden = !msg;
  el.textContent = msg || "";
}

function validate(name, date) {
  if (!name) return "Please enter your name.";
  if (!date) return "Please enter your birth date.";
  if (date > todayISO()) return "Birth date cannot be in the future.";
  return "";
}

function bloomMark() {
  return document.querySelector(".bloom-mark");
}

function showEmojiFallback(gen) {
  if (gen !== photoGen) return;
  const img = document.getElementById("result-photo");
  img.removeAttribute("src");
  img.alt = "";
  img.hidden = true;
  document.getElementById("result-emoji").hidden = false;
  bloomMark().classList.remove("has-photo");
}

function showPhoto(src, alt, gen) {
  if (gen !== photoGen) return;
  if (!src) {
    showEmojiFallback(gen);
    return;
  }
  const img = document.getElementById("result-photo");
  const emoji = document.getElementById("result-emoji");
  img.onload = function () {
    if (gen !== photoGen) return;
    img.hidden = false;
    emoji.hidden = true;
    bloomMark().classList.add("has-photo");
  };
  img.onerror = function () {
    showEmojiFallback(gen);
  };
  img.alt = alt;
  img.src = src;
}

function flowerPhoto(wikiTitle) {
  const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(wikiTitle);
  return fetch(url).then(function (res) {
    if (!res.ok) return "";
    return res.json();
  }).then(function (data) {
    if (!data) return "";
    if (data.thumbnail && data.thumbnail.source) return data.thumbnail.source;
    if (data.originalimage && data.originalimage.source) return data.originalimage.source;
    return "";
  }).catch(function () {
    return "";
  });
}

function loadFlowerPhoto(flower, gen) {
  flowerPhoto(flower.wiki).then(function (src) {
    showPhoto(src, flower.name, gen);
  });
}

function renderResult(name, date) {
  const flower = FLOWERS[flowerIndex(name, date)];
  applyPalette(flower.palette);
  photoGen += 1;
  const gen = photoGen;

  document.getElementById("result-eyebrow").textContent = firstName(name) + "'s bloom";
  document.getElementById("result-name").textContent = firstName(name);
  document.getElementById("result-emoji").textContent = flower.emoji;
  document.getElementById("result-emoji").hidden = false;
  const img = document.getElementById("result-photo");
  img.hidden = true;
  img.removeAttribute("src");
  img.alt = "";
  bloomMark().classList.remove("has-photo");

  const article = articleFor(flower.name);
  document.getElementById("result-flower").textContent = article + flower.name;
  document.getElementById("result-portrait").textContent = portraitFor(name, flower);
  document.getElementById("result-season").textContent = seasonLine(name, date);
  document.getElementById("result-note").textContent = birthNote(name, date);

  const list = document.getElementById("result-qualities");
  list.textContent = "";
  qualitiesFor(flower, name, date).forEach(function (q) {
    const li = document.createElement("li");
    li.textContent = q;
    list.appendChild(li);
  });

  document.body.classList.add("showing-result");
  document.getElementById("form-view").hidden = true;
  document.getElementById("result-view").hidden = false;
  loadFlowerPhoto(flower, gen);
}

function showForm() {
  photoGen += 1;
  showEmojiFallback(photoGen);
  document.body.classList.remove("showing-result");
  document.getElementById("result-emoji").textContent = "";
  resetPalette();
  document.getElementById("bloom-form").reset();
  showError("");
  document.getElementById("result-view").hidden = true;
  document.getElementById("form-view").hidden = false;
  document.getElementById("name").focus();
}

document.getElementById("bloom-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("birthdate").value;
  const err = validate(name, date);
  showError(err);
  if (err) return;
  renderResult(name, date);
});

document.getElementById("again").addEventListener("click", showForm);

document.getElementById("birthdate").max = todayISO();

(function selfCheck() {
  const a = flowerIndex("Ada", "1815-12-10");
  const b = flowerIndex("Ada", "1815-12-10");
  console.assert(a === b, "same name and date must match");
  const ha = hashString("ada1815-12-10");
  const hb = hashString("alan1815-12-10");
  console.assert(ha !== hb, "different name must change the hash");
  const lotus = FLOWERS.filter(function (f) { return f.id === "lotus"; })[0];
  const spring = qualitiesFor(lotus, "Zainab", "2000-04-01");
  const winter = qualitiesFor(lotus, "Zainab", "2000-12-01");
  console.assert(spring.join() !== winter.join(), "birth month must tint qualities");
  const ada = portraitFor("Ada", lotus);
  const alan = portraitFor("Alan", lotus);
  console.assert(ada !== alan, "name must change the portrait");
  console.assert(ada.indexOf("Ada") !== -1, "portrait must speak the name");
  console.assert(FLOWERS.every(function (f) { return f.wiki; }), "every flower needs a wiki title");
})();

const tarotCards = [
  { name: "The Fool", meaning: "New beginnings, freedom, and taking a leap of faith." },
  { name: "The Magician", meaning: "Manifestation, confidence, and personal power." },
  { name: "The High Priestess", meaning: "Trust your intuition and inner wisdom." },
  { name: "The Empress", meaning: "Abundance, growth, creativity, and nurturing energy." },
  { name: "The Emperor", meaning: "Structure, stability, leadership, and control." },
  { name: "The Lovers", meaning: "Love, harmony, relationships, and important choices." },
  { name: "The Chariot", meaning: "Determination, victory, movement, and focus." },
  { name: "Strength", meaning: "Inner courage, patience, and resilience." },
  { name: "The Hermit", meaning: "Reflection, solitude, and inner guidance." },
  { name: "Wheel of Fortune", meaning: "Cycles, fate, luck, and unexpected changes." },
  { name: "Justice", meaning: "Truth, balance, accountability, and fairness." },
  { name: "Death", meaning: "Transformation, endings, and powerful new beginnings." },
  { name: "The Star", meaning: "Hope, healing, inspiration, and renewal." },
  { name: "The Moon", meaning: "Dreams, intuition, uncertainty, and hidden truths." },
  { name: "The Sun", meaning: "Success, happiness, clarity, and positivity." },
  { name: "Judgement", meaning: "Awakening, reflection, and second chances." },
  { name: "The World", meaning: "Completion, achievement, and fulfillment." }
];

const clarificationQuestions = [
  "What am I missing?",
  "Why is this happening?",
  "What should I focus on?",
  "What is blocking me?",
  "What lesson is this teaching me?",
  "What is the likely outcome?",
  "What do I need to know right now?"
];

function drawReading(sectionId, positions) {
  const container = document.getElementById(sectionId);
  container.innerHTML = "";

  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);

  positions.forEach((position, index) => {
    addCard(container, shuffled[index], position);
  });

  addClarificationArea(container);
}

function addClarificationArea(container) {
  const area = document.createElement("div");
  area.className = "clarification-area";

  area.innerHTML = `
    <h4>Need more clarity?</h4>
    <select class="clarification-select">
      ${clarificationQuestions.map(q => `<option value="${q}">${q}</option>`).join("")}
    </select>
    <button type="button">🔮 Draw Clarification Card</button>
  `;

  const button = area.querySelector("button");
  const select = area.querySelector("select");

  button.onclick = () => {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    addCard(container, card, select.value);
  };

  container.appendChild(area);
}

function addCard(container, card, position) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <div class="tarot-card" onclick="this.classList.toggle('flipped')">
      <div class="card-inner">
        <div class="card-front">
          ✦ Tarot ✦
        </div>

        <div class="card-back">
          <h3>${card.name}</h3>
          <p>${card.meaning}</p>
        </div>
      </div>
    </div>

    <div class="label">${position}</div>
  `;

  container.appendChild(wrapper);
}

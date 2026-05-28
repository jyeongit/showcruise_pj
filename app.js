const packages = [
  {
    id: "busan-night",
    name: "부산 나이트 파티 크루즈",
    line: "Fanstar Cruise",
    theme: "파티",
    subthemes: ["야경", "친구여행", "초단기"],
    route: "부산 근해",
    duration: 2,
    nights: "1박 2일",
    price: 249000,
    party: 5,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    summary: "DJ 라운지, 선상 불꽃놀이, 야경 포토타임을 묶은 주말형 파티 크루즈.",
    experience: "DJ 파티, 웰컴 드링크, 야경 데크",
    target: "친구 모임, 생일 여행, 첫 크루즈"
  },
  {
    id: "jeju-social",
    name: "제주 선셋 소셜 크루즈",
    line: "Blue Coast",
    theme: "소셜",
    subthemes: ["혼행", "선셋", "요가"],
    route: "인천 - 제주",
    duration: 3,
    nights: "2박 3일",
    price: 329000,
    party: 4,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    summary: "혼자 와도 어색하지 않도록 소셜 테이블과 선셋 프로그램을 구성한 일정.",
    experience: "소셜 디너, 선셋 요가, 루프탑 바",
    target: "혼행, 새로운 만남, 가벼운 힐링"
  },
  {
    id: "fukuoka-weekend",
    name: "후쿠오카 쇼핑 & 미식 크루즈",
    line: "Costa Cruises",
    theme: "쇼핑",
    subthemes: ["미식", "커플", "자유시간"],
    route: "부산 - 후쿠오카",
    duration: 3,
    nights: "2박 3일",
    price: 399000,
    party: 3,
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    summary: "후쿠오카 자유시간과 선상 칵테일 클래스를 함께 즐기는 부담 낮은 해외 크루즈.",
    experience: "면세 쇼핑, 라멘 투어, 칵테일 클래스",
    target: "커플, 쇼핑 여행, 첫 해외 크루즈"
  },
  {
    id: "osaka-festival",
    name: "오사카 미니 페스티벌 크루즈",
    line: "MSC Cruises",
    theme: "파티",
    subthemes: ["쇼핑", "공연", "페스티벌"],
    route: "부산 - 오사카",
    duration: 4,
    nights: "3박 4일",
    price: 629000,
    party: 5,
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
    summary: "선내 공연, 테마파티, 오사카 기항지 자유시간을 묶은 진한 즐길거리형 상품.",
    experience: "공연 좌석, 테마파티, 항구 야시장",
    target: "콘텐츠 많은 일정, 친구 여행"
  },
  {
    id: "tsushima-active",
    name: "대마도 액티브 크루즈",
    line: "Fanstar Cruise",
    theme: "액티비티",
    subthemes: ["가성비", "자전거", "해변"],
    route: "부산 - 대마도",
    duration: 2,
    nights: "1박 2일",
    price: 289000,
    party: 2,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "짧게 해외 분위기를 느끼며 자전거, 해변 산책, 로컬 쇼핑을 즐기는 액티브 일정.",
    experience: "자전거 패스, 해변 산책, 로컬 쇼핑",
    target: "활동적인 친구 여행, 짧은 해외 경험"
  },
  {
    id: "nagasaki-wellness",
    name: "나가사키 온천 & 재즈 크루즈",
    line: "Norwegian Cruise Line",
    theme: "온천",
    subthemes: ["커플", "야경", "힐링"],
    route: "부산 - 나가사키",
    duration: 4,
    nights: "3박 4일",
    price: 719000,
    party: 2,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    summary: "나가사키 야경, 온천, 선내 재즈 라운지를 천천히 즐기는 차분한 감성 일정.",
    experience: "온천 패스, 재즈 라운지, 디너 코스",
    target: "커플, 조용한 여행, 야경 선호자"
  }
];

const cruiseLines = [
  {
    name: "Fanstar Cruise",
    tag: "단거리 특화",
    description: "부산 출발 초단기 일정과 가성비형 상품에 강점이 있는 선사 콘셉트입니다.",
    mood: "가볍고 실용적인 첫 크루즈"
  },
  {
    name: "MSC Cruises",
    tag: "엔터테인먼트",
    description: "공연, 라운지, 대형 선박 시설 등 즐길거리 중심의 크루즈 경험에 잘 맞습니다.",
    mood: "활기찬 친구 여행"
  },
  {
    name: "Costa Cruises",
    tag: "유럽 감성",
    description: "미식과 쇼핑, 캐주얼한 선내 분위기를 함께 보고 싶은 여행자에게 어울립니다.",
    mood: "커플과 미식 여행"
  },
  {
    name: "Norwegian Cruise Line",
    tag: "자유로운 일정",
    description: "정해진 드레스 코드보다 자유로운 분위기와 다양한 다이닝을 선호할 때 좋습니다.",
    mood: "편안한 휴식형 크루즈"
  }
];

const state = {
  activeTheme: "all",
  selected: new Set()
};

const formatter = new Intl.NumberFormat("ko-KR");
const packageGrid = document.querySelector("#packageGrid");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const activeThemeLabel = document.querySelector("#activeThemeLabel");
const sortSelect = document.querySelector("#sortSelect");
const compareHint = document.querySelector("#compareHint");
const compareTableWrap = document.querySelector("#compareTableWrap");
const compareHead = document.querySelector("#compareHead");
const compareBody = document.querySelector("#compareBody");
const compareDock = document.querySelector("#compareDock");
const dockText = document.querySelector("#dockText");
const lineGrid = document.querySelector("#lineGrid");

function getThemeLabel(theme) {
  if (theme === "all") return "전체 테마 기준";
  return `${theme} 테마 기준`;
}

function getFilteredPackages() {
  return packages
    .filter((item) => state.activeTheme === "all" || item.theme === state.activeTheme || item.subthemes.includes(state.activeTheme))
    .sort((a, b) => {
      if (sortSelect.value === "price") return a.price - b.price;
      if (sortSelect.value === "short") return a.duration - b.duration;
      if (sortSelect.value === "party") return b.party - a.party;
      return b.party + (a.duration <= 3 ? 1 : 0) - (a.price > b.price ? 0.5 : 0);
    });
}

function renderPackages() {
  const list = getFilteredPackages();
  resultCount.textContent = `${list.length}개 패키지`;
  activeThemeLabel.textContent = getThemeLabel(state.activeTheme);
  emptyState.hidden = list.length > 0;

  packageGrid.innerHTML = list.map((item) => {
    const isSelected = state.selected.has(item.id);
    return `
      <article class="package-card">
        <div class="card-image" style="background-image:url('${item.image}')" role="img" aria-label="${item.name} 대표 이미지">
          <span class="line-badge">${item.line}</span>
        </div>
        <div class="card-body">
          <div class="badge-row">
            <span class="badge hot">${item.theme}</span>
            ${item.subthemes.slice(0, 2).map((tag) => `<span class="badge">${tag}</span>`).join("")}
          </div>
          <h3>${item.name}</h3>
          <p class="card-copy">${item.summary}</p>
          <div class="meta-grid">
            <div><span>일정</span><strong>${item.nights}</strong></div>
            <div><span>노선</span><strong>${item.route}</strong></div>
            <div><span>즐길거리</span><strong>${item.experience.split(",").slice(0, 2).join(" · ")}</strong></div>
            <div><span>파티 강도</span><strong>${"●".repeat(item.party)}${"○".repeat(5 - item.party)}</strong></div>
          </div>
          <div class="card-footer">
            <div class="price">${formatter.format(item.price)}원~</div>
            <button class="compare-toggle ${isSelected ? "is-selected" : ""}" type="button" data-id="${item.id}">
              ${isSelected ? "담김" : "비교 담기"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".compare-toggle").forEach((button) => {
    button.addEventListener("click", () => toggleCompare(button.dataset.id, button));
  });
}

function renderLines() {
  lineGrid.innerHTML = cruiseLines.map((line) => `
    <article class="line-card">
      <span class="line-tag">${line.tag}</span>
      <h3>${line.name}</h3>
      <p>${line.description}</p>
      <strong>${line.mood}</strong>
    </article>
  `).join("");
}

function toggleCompare(id, button) {
  if (state.selected.has(id)) {
    state.selected.delete(id);
  } else if (state.selected.size < 3) {
    state.selected.add(id);
  } else {
    button.textContent = "최대 3개";
    window.setTimeout(renderPackages, 700);
    return;
  }

  renderPackages();
  renderCompare();
}

function renderCompare() {
  const selectedItems = packages.filter((item) => state.selected.has(item.id));
  const hasItems = selectedItems.length > 0;
  compareHint.hidden = hasItems;
  compareTableWrap.hidden = !hasItems;
  compareDock.hidden = !hasItems;
  dockText.textContent = `${selectedItems.length}개 담김`;

  if (!hasItems) return;

  compareHead.innerHTML = `<th>항목</th>${selectedItems.map((item) => `<th>${item.name}</th>`).join("")}`;
  const rows = [
    ["가격", (item) => `${formatter.format(item.price)}원~`],
    ["테마", (item) => [item.theme, ...item.subthemes].join(" · ")],
    ["선사", (item) => item.line],
    ["일정/노선", (item) => `${item.nights} · ${item.route}`],
    ["즐길거리", (item) => item.experience],
    ["추천 대상", (item) => item.target]
  ];

  compareBody.innerHTML = rows.map(([label, getter]) => `
    <tr>
      <th>${label}</th>
      ${selectedItems.map((item) => `<td>${getter(item)}</td>`).join("")}
    </tr>
  `).join("");
}

function setTheme(theme) {
  state.activeTheme = theme;
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.theme === theme);
  });
  renderPackages();
  document.querySelector("#packages").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".theme-card").forEach((card) => {
  card.addEventListener("click", () => setTheme(card.dataset.theme));
});

document.querySelector("#resetTheme").addEventListener("click", () => setTheme("all"));
sortSelect.addEventListener("change", renderPackages);
document.querySelector("#clearCompare").addEventListener("click", () => {
  state.selected.clear();
  renderPackages();
  renderCompare();
});

const chatbotToggle = document.querySelector("#chatbotToggle");
const chatbotPanel = document.querySelector("#chatbotPanel");
const chatbotClose = document.querySelector("#chatbotClose");
const chatbotMessages = document.querySelector("#chatbotMessages");
const chatbotForm = document.querySelector("#chatbotForm");
const chatbotInput = document.querySelector("#chatbotInput");

const faqAnswers = [
  {
    keywords: ["선사", "차이", "크루즈라인"],
    answer: "선사는 분위기가 달라요. Fanstar는 짧고 실용적인 단거리, MSC는 공연과 엔터테인먼트, Costa는 미식과 쇼핑, NCL은 자유로운 일정과 편안한 분위기에 잘 맞습니다."
  },
  {
    keywords: ["준비물", "여권", "챙겨"],
    answer: "준비물은 신분증 또는 여권, 예약 확인 자료, 해외 결제 카드, 상비약, 가벼운 겉옷을 추천해요. 해외 기항 일정은 여권 유효기간을 꼭 확인해야 합니다."
  },
  {
    keywords: ["가격", "비용", "저렴", "가성비", "30만원"],
    answer: "가격은 1인 시작가 예시라 항만세, 유류할증료, 선실 등급에 따라 달라질 수 있어요. 가성비를 우선하면 1박 2일 단거리와 Fanstar 계열 상품부터 보는 게 좋습니다."
  },
  {
    keywords: ["카카오", "상담", "문의"],
    answer: "예약 기능은 페이지에 두지 않고 카카오 1:1 상담 챗봇으로 연결합니다. 화면의 `카카오 상담 챗봇 열기` 버튼을 누르면 상담 링크로 이동합니다."
  }
];

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function scorePackage(item, text) {
  let score = 0;
  const haystack = [item.name, item.line, item.theme, item.route, item.summary, item.experience, item.target, ...item.subthemes].join(" ").toLowerCase();

  text.split(/\s+/).forEach((word) => {
    if (word && haystack.includes(word)) score += 2;
  });

  if (text.includes("파티") || text.includes("dj") || text.includes("친구")) score += item.theme === "파티" ? 5 : item.party;
  if (text.includes("혼자") || text.includes("혼행") || text.includes("소셜")) score += item.theme === "소셜" ? 6 : 0;
  if (text.includes("쇼핑") || text.includes("미식")) score += item.theme === "쇼핑" ? 6 : 0;
  if (text.includes("온천") || text.includes("힐링") || text.includes("조용")) score += item.theme === "온천" ? 6 : 0;
  if (text.includes("액티비티") || text.includes("자전거") || text.includes("활동")) score += item.theme === "액티비티" ? 6 : 0;
  if (text.includes("저렴") || text.includes("가성비") || text.includes("30만원")) score += item.price <= 300000 ? 5 : 0;
  if (text.includes("짧") || text.includes("주말") || text.includes("1박")) score += item.duration <= 2 ? 4 : 0;

  return score;
}

function recommendPackages(text, limit = 2) {
  return packages
    .map((item) => ({ item, score: scorePackage(item, text) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.price - b.item.price)
    .slice(0, limit)
    .map(({ item }) => item);
}

function getChatbotAnswer(message) {
  const text = normalizeText(message);
  const faq = faqAnswers.find((item) => item.keywords.some((keyword) => text.includes(keyword)));
  const wantsRecommendation = ["추천", "골라", "어울", "찾아", "갈만", "테마"].some((keyword) => text.includes(keyword));
  const matches = recommendPackages(text);

  if (wantsRecommendation || matches.length) {
    const recommendationText = matches.length
      ? matches.map((item, index) => `${index + 1}. ${item.name}\n- ${item.theme} 테마 · ${item.nights} · ${formatter.format(item.price)}원~\n- ${item.experience}\n- 추천 이유: ${item.summary}`).join("\n\n")
      : "조건을 조금 더 알려주세요. 예: 파티, 혼행, 쇼핑, 온천, 가성비, 주말";

    return `${faq ? `${faq.answer}\n\n` : ""}${recommendationText}`;
  }

  if (faq) return faq.answer;

  return "테마, 선사, 준비물, 가격, 카카오 상담에 대해 물어볼 수 있어요. 예: `친구들이랑 파티 크루즈 추천해줘`, `선사별 차이 알려줘`";
}

function addChatMessage(sender, text) {
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  chatbotMessages.appendChild(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function openChatbot() {
  chatbotPanel.hidden = false;
  chatbotToggle.setAttribute("aria-expanded", "true");
  if (!chatbotMessages.dataset.ready) {
    addChatMessage("bot", "안녕하세요. 크루즈 추천 챗봇입니다. 원하는 분위기나 함께 가는 사람을 알려주시면 테마별 패키지를 추천해드릴게요.");
    chatbotMessages.dataset.ready = "true";
  }
  chatbotInput.focus();
}

function closeChatbot() {
  chatbotPanel.hidden = true;
  chatbotToggle.setAttribute("aria-expanded", "false");
}

chatbotToggle.addEventListener("click", () => {
  if (chatbotPanel.hidden) openChatbot();
  else closeChatbot();
});

chatbotClose.addEventListener("click", closeChatbot);

chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatbotInput.value.trim();
  if (!question) return;
  addChatMessage("user", question);
  chatbotInput.value = "";
  window.setTimeout(() => addChatMessage("bot", getChatbotAnswer(question)), 180);
});

document.querySelectorAll(".chatbot-quick button").forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;
    addChatMessage("user", question);
    window.setTimeout(() => addChatMessage("bot", getChatbotAnswer(question)), 180);
  });
});

renderLines();
renderPackages();
renderCompare();

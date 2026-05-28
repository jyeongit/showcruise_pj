const packages = [
  {
    id: "busan-night",
    name: "부산 나이트 파티 크루즈",
    destination: "일본",
    port: "부산",
    month: "8월",
    line: "Fanstar",
    duration: 2,
    nights: "1박 2일",
    price: 249000,
    party: 5,
    tags: ["파티", "야경", "친구여행"],
    badges: ["시크릿 딜", "파티 강도 높음", "첫 크루즈 추천"],
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    summary: "DJ 파티, 선상 불꽃놀이, 광안대교 야경을 한 번에 즐기는 부산 출발 초단기 일정.",
    benefits: "DJ 티켓, 웰컴 드링크, 조식/석식 뷔페",
    target: "친구 모임, 생일 여행, 첫 크루즈"
  },
  {
    id: "fukuoka-weekend",
    name: "후쿠오카 위켄드 크루즈",
    destination: "일본",
    port: "부산",
    month: "7월",
    line: "Costa",
    duration: 3,
    nights: "2박 3일",
    price: 399000,
    party: 3,
    tags: ["쇼핑", "미식", "커플"],
    badges: ["면세 쇼핑", "라멘 투어", "커플 추천"],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    summary: "후쿠오카 자유시간과 선상 칵테일 클래스를 묶은 부담 낮은 해외 크루즈.",
    benefits: "항만세 포함, 칵테일 클래스, 시내 셔틀",
    target: "커플, 쇼핑 여행, 가벼운 해외여행"
  },
  {
    id: "jeju-social",
    name: "제주 선셋 소셜 크루즈",
    destination: "제주",
    port: "인천",
    month: "6월",
    line: "Fanstar",
    duration: 3,
    nights: "2박 3일",
    price: 329000,
    party: 4,
    tags: ["혼행", "야경", "파티"],
    badges: ["혼행 환영", "선셋 요가", "소셜 테이블"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    summary: "혼자 와도 어색하지 않게 소셜 테이블, 선셋 요가, 루프탑 바를 구성한 제주 일정.",
    benefits: "소셜 디너, 요가 클래스, 루프탑 바 쿠폰",
    target: "혼행, 새로운 만남, 힐링과 파티"
  },
  {
    id: "osaka-festival",
    name: "오사카 미니 페스티벌 크루즈",
    destination: "일본",
    port: "부산",
    month: "9월",
    line: "MSC",
    duration: 4,
    nights: "3박 4일",
    price: 629000,
    party: 5,
    tags: ["파티", "쇼핑", "미식"],
    badges: ["테마파티", "오사카 자유일정", "공연 포함"],
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
    summary: "오사카 항구 야시장과 선내 공연, 테마파티를 묶은 짧고 진한 페스티벌형 상품.",
    benefits: "공연 좌석, 파티 입장, 야시장 가이드맵",
    target: "친구 여행, 콘텐츠 많은 일정 선호자"
  },
  {
    id: "tsushima-active",
    name: "대마도 액티브 크루즈",
    destination: "일본",
    port: "부산",
    month: "6월",
    line: "Fanstar",
    duration: 2,
    nights: "1박 2일",
    price: 289000,
    party: 2,
    tags: ["액티비티", "친구여행", "쇼핑"],
    badges: ["가성비", "액티비티", "짧은 해외"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "가볍게 해외 분위기를 느끼며 자전거, 해변 산책, 로컬 쇼핑을 즐기는 일정.",
    benefits: "자전거 패스, 간식 쿠폰, 현지 맵",
    target: "활동적인 친구 여행, 짧은 해외 경험"
  },
  {
    id: "nagasaki-jazz",
    name: "나가사키 온천 & 재즈 크루즈",
    destination: "일본",
    port: "부산",
    month: "9월",
    line: "NCL",
    duration: 4,
    nights: "3박 4일",
    price: 719000,
    party: 2,
    tags: ["온천", "커플", "야경"],
    badges: ["커플 추천", "재즈 라운지", "온천"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    summary: "나가사키 야경과 온천, 선내 재즈 라운지를 천천히 즐기는 차분한 감성 일정.",
    benefits: "온천 패스, 재즈 라운지, 디너 코스",
    target: "커플, 조용한 여행, 야경 선호자"
  },
  {
    id: "southeast-asia",
    name: "동남아 루프탑 풀 크루즈",
    destination: "동남아",
    port: "인천",
    month: "8월",
    line: "MSC",
    duration: 4,
    nights: "3박 4일",
    price: 799000,
    party: 4,
    tags: ["파티", "휴양", "쇼핑"],
    badges: ["풀파티", "리조트 무드", "무이자 상담"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    summary: "루프탑 풀, 야간 라운지, 쇼핑 기항지를 묶은 휴양형 단거리 크루즈.",
    benefits: "풀파티 입장, 라운지 쿠폰, 기항지 셔틀",
    target: "친구 여행, 휴양과 파티를 함께 원하는 여행자"
  }
];

const state = {
  activeChip: "all",
  selected: new Set()
};

const formatter = new Intl.NumberFormat("ko-KR");
const grid = document.querySelector("#packageGrid");
const emptyState = document.querySelector("#emptyState");
const compareHint = document.querySelector("#compareHint");
const compareTableWrap = document.querySelector("#compareTableWrap");
const compareHead = document.querySelector("#compareHead");
const compareBody = document.querySelector("#compareBody");
const compareDock = document.querySelector("#compareDock");
const dockText = document.querySelector("#dockText");
const resultCount = document.querySelector("#resultCount");

function getFilters() {
  return {
    destination: document.querySelector("#destinationFilter").value,
    port: document.querySelector("#portFilter").value,
    month: document.querySelector("#monthFilter").value,
    duration: document.querySelector("#durationFilter").value,
    line: document.querySelector("#lineFilter").value,
    sort: document.querySelector("#sortSelect").value
  };
}

function durationMatches(duration, filter) {
  if (filter === "all") return true;
  if (filter === "1-2") return duration <= 2;
  return duration === Number(filter);
}

function getFilteredPackages() {
  const filters = getFilters();
  return packages
    .filter((item) => filters.destination === "all" || item.destination === filters.destination)
    .filter((item) => filters.port === "all" || item.port === filters.port)
    .filter((item) => filters.month === "all" || item.month === filters.month)
    .filter((item) => durationMatches(item.duration, filters.duration))
    .filter((item) => filters.line === "all" || item.line === filters.line)
    .filter((item) => state.activeChip === "all" || item.tags.includes(state.activeChip))
    .sort((a, b) => {
      if (filters.sort === "price") return a.price - b.price;
      if (filters.sort === "party") return b.party - a.party;
      if (filters.sort === "duration") return a.duration - b.duration;
      return b.party + (a.price < b.price ? 0.2 : 0) - a.party;
    });
}

function renderPackages() {
  const list = getFilteredPackages();
  resultCount.textContent = `${list.length}개 일정`;
  grid.innerHTML = list.map((item) => {
    const isSelected = state.selected.has(item.id);
    return `
      <article class="package-card">
        <div class="card-image" style="background-image:url('${item.image}')" role="img" aria-label="${item.name} 대표 이미지">
          <span class="line-badge">${item.line}</span>
        </div>
        <div class="card-body">
          <div class="badge-row">
            ${item.badges.map((badge, index) => `<span class="badge ${index === 0 ? "hot" : ""}">${badge}</span>`).join("")}
          </div>
          <h3>${item.name}</h3>
          <p class="card-copy">${item.summary}</p>
          <div class="meta-grid">
            <div><span>목적지</span><strong>${item.destination}</strong></div>
            <div><span>출발항</span><strong>${item.port}</strong></div>
            <div><span>출발월</span><strong>${item.month}</strong></div>
            <div><span>일정</span><strong>${item.nights}</strong></div>
          </div>
          <div class="card-footer">
            <div class="price">${formatter.format(item.price)}원~</div>
            <button class="compare-toggle ${isSelected ? "is-selected" : ""}" type="button" data-id="${item.id}">
              ${isSelected ? "저장됨" : "저장/비교"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyState.hidden = list.length > 0;
  attachCompareEvents();
}

function attachCompareEvents() {
  document.querySelectorAll(".compare-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      if (state.selected.has(id)) {
        state.selected.delete(id);
      } else if (state.selected.size < 3) {
        state.selected.add(id);
      } else {
        button.textContent = "최대 3개";
        setTimeout(renderPackages, 650);
        return;
      }
      renderPackages();
      renderCompare();
    });
  });
}

function renderCompare() {
  const selectedItems = packages.filter((item) => state.selected.has(item.id));
  const hasItems = selectedItems.length > 0;
  compareHint.hidden = hasItems;
  compareTableWrap.hidden = !hasItems;
  compareDock.hidden = !hasItems;
  dockText.textContent = `${selectedItems.length}개 저장됨`;

  if (!hasItems) return;

  compareHead.innerHTML = `<th>항목</th>${selectedItems.map((item) => `<th>${item.name}</th>`).join("")}`;
  const rows = [
    ["가격", (item) => `${formatter.format(item.price)}원~`],
    ["선사", (item) => item.line],
    ["일정", (item) => `${item.month} · ${item.nights}`],
    ["출발/목적지", (item) => `${item.port} 출발 · ${item.destination}`],
    ["주요 혜택", (item) => item.benefits],
    ["추천 대상", (item) => item.target],
    ["분위기", (item) => item.tags.join(" · ")]
  ];

  compareBody.innerHTML = rows.map(([label, getter]) => `
    <tr>
      <th>${label}</th>
      ${selectedItems.map((item) => `<td>${getter(item)}</td>`).join("")}
    </tr>
  `).join("");
}

function resetFilters() {
  document.querySelector("#destinationFilter").value = "all";
  document.querySelector("#portFilter").value = "all";
  document.querySelector("#monthFilter").value = "all";
  document.querySelector("#durationFilter").value = "all";
  document.querySelector("#lineFilter").value = "all";
  document.querySelector("#sortSelect").value = "recommended";
  state.activeChip = "all";
  document.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("is-active", chip.dataset.chip === "all"));
  renderPackages();
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderPackages();
  document.querySelector("#packages").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#sortSelect").addEventListener("change", renderPackages);
document.querySelector("#resetFilters").addEventListener("click", resetFilters);
document.querySelector("#clearCompare").addEventListener("click", () => {
  state.selected.clear();
  renderPackages();
  renderCompare();
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    state.activeChip = chip.dataset.chip;
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderPackages();
  });
});

document.querySelectorAll(".destination-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.destination) {
      document.querySelector("#destinationFilter").value = button.dataset.destination;
    }
    if (button.dataset.port) {
      document.querySelector("#portFilter").value = button.dataset.port;
    }
    renderPackages();
    document.querySelector("#packages").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderPackages();
renderCompare();

const chatbotToggle = document.querySelector("#chatbotToggle");
const chatbotPanel = document.querySelector("#chatbotPanel");
const chatbotClose = document.querySelector("#chatbotClose");
const chatbotMessages = document.querySelector("#chatbotMessages");
const chatbotForm = document.querySelector("#chatbotForm");
const chatbotInput = document.querySelector("#chatbotInput");
const USE_OPENAI_API = false;

const faqAnswers = [
  {
    keywords: ["준비물", "챙겨", "여권", "신분증"],
    answer: "승선 준비물은 여권 또는 신분증, 예약 확인서, 해외 결제가 가능한 카드, 개인 상비약, 가벼운 겉옷을 추천드려요. 일본·동남아 기항 일정은 여권 유효기간도 꼭 확인해야 합니다."
  },
  {
    keywords: ["처음", "첫", "입문", "초보"],
    answer: "첫 크루즈라면 1박 2일 또는 2박 3일 일정이 좋아요. 이동 부담이 작고 선내 시설을 경험하기 충분해서 `부산 나이트 파티 크루즈`나 `후쿠오카 위켄드 크루즈`를 먼저 추천합니다."
  },
  {
    keywords: ["취소", "환불", "변경"],
    answer: "취소와 변경은 출항일이 가까울수록 수수료가 커질 수 있어요. 선사와 상품별 약관이 다르기 때문에 예약 확정 전 취소 기준일, 이름 변경 가능 여부, 선실 변경 가능 여부를 확인하는 흐름이 안전합니다."
  },
  {
    keywords: ["술", "주류", "파티", "클럽", "dj"],
    answer: "파티형 상품은 DJ, 라운지, 웰컴 드링크, 루프탑 바 같은 요소가 핵심이에요. 주류 포함 상품은 신분증 확인과 만 19세 이상 조건이 붙을 수 있으니 예약 전 연령 기준을 확인해야 합니다."
  },
  {
    keywords: ["가격", "비용", "예산", "얼마", "저렴", "싸"],
    answer: "표시 가격은 1인 시작가 기준이에요. 항만세, 유류할증료, 선실 등급, 포함 식사, 주류 포함 여부에 따라 달라질 수 있습니다. 예산을 낮추려면 부산 출발 1박 2일 일정부터 보는 게 좋아요."
  },
  {
    keywords: ["혼자", "혼행", "혼자서"],
    answer: "혼행은 소셜 테이블, 공용 프로그램, 짧은 일정이 있는 상품이 편합니다. 현재 목록에서는 `제주 선셋 소셜 크루즈`가 혼행과 새로운 만남을 원하는 분께 가장 잘 맞아요."
  },
  {
    keywords: ["커플", "연인", "데이트"],
    answer: "커플 여행은 너무 파티 중심인 상품보다 야경, 온천, 재즈 라운지, 디너가 있는 일정이 좋아요. `나가사키 온천 & 재즈 크루즈`나 `후쿠오카 위켄드 크루즈`를 추천합니다."
  }
];

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function findUnsupportedDestination(text) {
  const unsupportedDestinations = ["프랑스", "파리", "유럽", "지중해", "이탈리아", "스페인", "영국", "미국", "하와이", "알래스카"];
  return unsupportedDestinations.find((destination) => text.includes(destination));
}

function hasSupportedDestination(text) {
  return ["일본", "제주", "동남아", "부산", "인천", "후쿠오카", "오사카", "나가사키", "대마도"].some((destination) => text.includes(destination));
}

function scorePackage(item, text) {
  let score = 0;
  const haystack = [item.name, item.destination, item.port, item.month, item.line, item.nights, item.summary, item.target, ...item.tags].join(" ").toLowerCase();
  text.split(/\s+/).forEach((word) => {
    if (word && haystack.includes(word)) score += 2;
  });
  if (text.includes("파티") || text.includes("dj") || text.includes("클럽")) score += item.party;
  if (text.includes("저렴") || text.includes("예산") || text.includes("30만원")) score += item.price <= 300000 ? 5 : 0;
  if (text.includes("짧") || text.includes("주말") || text.includes("1박")) score += item.duration <= 2 ? 4 : 0;
  if (text.includes("혼자") || text.includes("혼행")) score += item.tags.includes("혼행") ? 5 : 0;
  if (text.includes("커플") || text.includes("연인")) score += item.tags.includes("커플") ? 5 : 0;
  if (text.includes("부산")) score += item.port === "부산" ? 3 : 0;
  if (text.includes("인천")) score += item.port === "인천" ? 3 : 0;
  if (text.includes("일본")) score += item.destination === "일본" ? 3 : 0;
  if (text.includes("제주")) score += item.destination === "제주" ? 3 : 0;
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

function buildRecommendationText(matches) {
  if (!matches.length) {
    return "조건이 조금 더 필요해요. 예를 들어 `부산 출발`, `파티`, `30만원 이하`, `혼행`, `일본`처럼 알려주시면 더 정확히 추천해드릴게요.";
  }

  return matches.map((item, index) => {
    return `${index + 1}. ${item.name}\n- ${item.port} 출발 · ${item.destination} · ${item.month} · ${item.nights}\n- ${formatter.format(item.price)}원~ · ${item.line}\n- 추천 이유: ${item.summary}`;
  }).join("\n\n");
}

function getLocalChatbotAnswer(message) {
  const text = normalizeText(message);
  const faq = faqAnswers.find((item) => item.keywords.some((keyword) => text.includes(keyword)));
  const wantsRecommendation = ["추천", "골라", "어울", "찾아", "갈만", "일정"].some((keyword) => text.includes(keyword));
  const unsupportedDestination = findUnsupportedDestination(text);

  if (unsupportedDestination && !hasSupportedDestination(text)) {
    return `현재 등록된 추천 상품은 일본, 제주, 동남아 단거리 크루즈 중심이라 ${unsupportedDestination} 일정은 바로 추천하기 어렵습니다.\n\n대신 파리/프랑스처럼 장거리 유럽 여행을 원하시면 보통 지중해 크루즈, 센강 리버크루즈, 유럽 항공 포함 패키지를 별도로 확인해야 해요. 이 서비스 안에서는 일본, 제주, 동남아, 부산/인천 출발 조건으로 다시 물어보시면 정확히 추천드릴 수 있습니다.`;
  }

  const matches = recommendPackages(text);

  if (wantsRecommendation || matches.length) {
    const intro = faq ? `${faq.answer}\n\n조건에 맞춰 보면 아래 일정이 좋아요.\n` : "조건에 맞춰 추천드리면 아래 일정이 좋아요.\n";
    return `${intro}${buildRecommendationText(matches)}`;
  }

  if (faq) return faq.answer;

  return "크루즈 일정, 가격, 준비물, 취소 규정, 혼행/커플/파티 추천을 물어보실 수 있어요. 예: `부산 출발 파티 크루즈 추천해줘`";
}

function getPackageContext() {
  return packages.map((item) => ({
    name: item.name,
    destination: item.destination,
    port: item.port,
    month: item.month,
    line: item.line,
    nights: item.nights,
    price: item.price,
    party: item.party,
    tags: item.tags,
    summary: item.summary,
    benefits: item.benefits,
    target: item.target
  }));
}

async function getChatbotAnswer(message) {
  if (!USE_OPENAI_API) {
    return getLocalChatbotAnswer(message);
  }

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        message,
        packages: getPackageContext()
      })
    });

    if (!response.ok) throw new Error("API unavailable");

    const data = await response.json();
    if (data.answer) return data.answer;
  } catch (error) {
    return getLocalChatbotAnswer(message);
  }

  return getLocalChatbotAnswer(message);
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
    addChatMessage("bot", "안녕하세요. 크루즈 여행 챗봇입니다. 목적지, 예산, 출발항, 여행 무드를 알려주시면 일정 추천까지 도와드릴게요.");
    chatbotMessages.dataset.ready = "true";
  }
  chatbotInput.focus();
}

function closeChatbot() {
  chatbotPanel.hidden = true;
  chatbotToggle.setAttribute("aria-expanded", "false");
}

chatbotToggle.addEventListener("click", () => {
  if (chatbotPanel.hidden) {
    openChatbot();
  } else {
    closeChatbot();
  }
});

chatbotClose.addEventListener("click", closeChatbot);

chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatbotInput.value.trim();
  if (!question) return;
  addChatMessage("user", question);
  chatbotInput.value = "";
  addChatMessage("bot", "답변을 준비하고 있어요.");
  const pendingMessage = chatbotMessages.lastElementChild;
  getChatbotAnswer(question).then((answer) => {
    pendingMessage.textContent = answer;
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  });
});

document.querySelectorAll(".chatbot-quick button").forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;
    addChatMessage("user", question);
    addChatMessage("bot", "답변을 준비하고 있어요.");
    const pendingMessage = chatbotMessages.lastElementChild;
    getChatbotAnswer(question).then((answer) => {
      pendingMessage.textContent = answer;
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    });
  });
});

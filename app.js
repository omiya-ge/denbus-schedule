const DATA = {
  weekday: {
    toUni: {
      "高坂駅": [
        "08:15", "08:26", "08:28", "08:30", "08:35", "08:41", "08:42", "08:45", "08:49", "08:51",
        "08:53", "08:59", "09:01", "09:06", "09:07", "09:08", "09:10", "09:11", "09:19", "09:29",
        "09:32", "09:43", "09:51", "09:58", "10:03", "10:12", "10:20", "10:27", "10:31", "10:33",
        "10:36", "10:42", "10:43", "10:45", "10:52", "10:53", "10:55", "10:56", "11:02", "11:07",
        "11:12", "11:27", "11:37", "11:52", "12:07", "12:19", "12:28", "12:49", "12:55", "12:58",
        "13:08", "13:10", "13:15", "13:19", "13:26", "13:28", "13:38", "13:48", "14:08", "14:19",
        "14:38", "14:49", "14:58", "15:08", "15:13", "15:19", "15:28", "15:38", "15:58", "16:08",
        "16:28", "16:38", "16:49", "16:59", "17:08", "17:19", "17:37", "17:53", "18:15", "18:41",
        "19:02", "19:27"
      ],
      "北坂戸駅": [
        "08:24", "08:47", "09:04", "09:40", "10:08", "10:38", "10:56", "11:36", "12:36", "13:06",
        "13:26", "14:26", "14:56", "15:43", "15:58", "16:53", "17:08", "18:08"
      ],
      "熊谷駅": ["08:05", "08:15", "08:20", "10:00", "10:05", "10:10", "12:10", "12:40", "14:15", "16:20"],
      "鴻巣駅（高坂経由）": ["08:20"]
    },
    fromUni: {
      "高坂駅": [
        "09:42", "10:10", "10:17", "10:32", "10:46", "11:02", "11:12", "11:22", "11:32", "11:52",
        "12:02", "12:12", "12:32", "12:42", "12:47", "12:52", "13:00", "13:02", "13:07", "13:12",
        "13:18", "13:22", "13:32", "13:52", "14:02", "14:22", "14:32", "14:42", "14:52", "15:03",
        "15:09", "15:17", "15:22", "15:25", "15:30", "15:34", "15:40", "15:48", "15:54", "16:01",
        "16:09", "16:24", "16:39", "16:44", "16:49", "16:54", "17:05", "17:09", "17:13", "17:17",
        "17:21", "17:24", "17:30", "17:37", "17:41", "17:54", "18:00", "18:09", "18:14", "18:25",
        "18:34", "18:40", "18:52", "18:55", "19:00", "19:02", "19:09", "19:14", "19:20", "19:25",
        "19:35", "19:40", "19:55", "20:05", "20:15", "20:25", "20:40", "20:54", "21:09", "21:39"
      ],
      "北坂戸駅": [
        "10:26", "11:24", "12:24", "12:54", "13:14", "14:14", "14:44", "15:31", "15:46", "16:41",
        "16:56", "17:11", "17:26", "17:56", "18:27", "18:57", "19:10", "19:41", "20:26"
      ],
      "熊谷駅": ["11:25", "13:30", "15:30", "15:35", "17:20", "17:25", "18:20", "19:25", "20:10", "21:00"],
      "鴻巣駅（高坂経由）": ["18:40", "19:20"]
    }
  },
  saturday: {
    toUni: {
      "高坂駅": [
        "08:33", "08:43", "09:09", "09:18", "09:34", "09:42", "09:53", "10:07", "10:21", "10:34",
        "10:52", "11:08", "11:23", "11:37", "11:53", "12:07", "12:28", "12:49", "13:08", "13:28",
        "13:49", "14:08", "14:28", "14:49", "15:08", "15:28", "15:49", "16:21", "16:58", "17:21",
        "17:53", "18:06"
      ],
      "北坂戸駅": ["09:06", "09:40", "10:26", "11:48", "12:16", "13:16", "14:16", "15:54"],
      "熊谷駅": ["08:20", "10:00", "12:30"],
      "鴻巣駅（高坂経由）": []
    },
    fromUni: {
      "高坂駅": [
        "10:04", "10:22", "10:42", "10:52", "11:02", "11:22", "11:42", "11:52", "12:12", "12:32",
        "12:52", "13:12", "13:32", "13:52", "14:12", "14:32", "14:52", "15:12", "15:32", "15:54",
        "16:09", "16:39", "16:55", "17:09", "17:40", "17:56", "18:10", "18:26", "18:56", "19:10",
        "19:40", "20:10", "20:46", "21:09"
      ],
      "北坂戸駅": ["10:14", "11:36", "12:04", "13:04", "14:04", "15:42", "16:25", "17:26", "18:40"],
      "熊谷駅": ["11:45", "15:30", "17:20", "19:10"],
      "鴻巣駅（高坂経由）": ["18:10"]
    }
  }
};

const dayTabsEl = document.getElementById("dayTabs");
const directionTabsEl = document.getElementById("directionTabs");
const routeTabsEl = document.getElementById("routeTabs");
const expandBtnEl = document.getElementById("expandBtn");
const fullListEl = document.getElementById("fullList");
const fullListSubEl = document.getElementById("fullListSub");
const fullListBodyEl = document.getElementById("fullListBody");
const closeListBtnEl = document.getElementById("closeListBtn");
const headerClockEl = document.getElementById("headerClock");
const nowEl = document.getElementById("now");
const nextTimeEl = document.getElementById("nextTime");
const nextMetaEl = document.getElementById("nextMeta");
const upcomingListEl = document.getElementById("upcomingList");
const notesEl = document.getElementById("notes");

const DIRECTION_SWITCH_MINUTES = 12 * 60 + 30;
const DAY_LABELS = {
  weekday: "平日",
  saturday: "土曜",
  sunday: "日曜"
};
const DIRECTION_LABELS = {
  toUni: "大学に行く",
  fromUni: "帰る"
};

let lastRenderState = null;
let isExpanded = false;
let lastFullListKey = null;

const pad2 = (n) => String(n).padStart(2, "0");

const parseMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const formatNow = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;

const formatRemaining = (minutes) => {
  const safe = Math.max(0, minutes);
  if (safe < 60) return `${safe}分`;
  const hours = Math.floor(safe / 60);
  const mins = safe % 60;
  return `${hours}時間${mins}分`;
};

const resolveDayKey = (mode) => {
  if (mode === "weekday") return "weekday";
  if (mode === "saturday") return "saturday";
  return null;
};

const getDefaultDayMode = (now) => {
  const dow = now.getDay();
  if (dow === 6) return "saturday";
  if (dow === 0) return "sunday";
  return "weekday";
};

const getDefaultDirectionMode = (now) => {
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes < DIRECTION_SWITCH_MINUTES ? "toUni" : "fromUni";
};

const getActiveValue = (containerEl) => {
  const active = containerEl.querySelector("button.active");
  return active ? active.dataset.value : null;
};

const clearActiveValue = (containerEl) => {
  const buttons = Array.from(containerEl.querySelectorAll("button"));
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
};

const setActiveValue = (containerEl, value) => {
  const buttons = Array.from(containerEl.querySelectorAll("button"));
  let selected = null;

  buttons.forEach((button) => {
    const isActive = button.dataset.value === value;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (isActive) selected = button.dataset.value;
  });

  if (!selected && buttons.length) {
    const fallback = buttons[0];
    fallback.classList.add("active");
    fallback.setAttribute("aria-pressed", "true");
    selected = fallback.dataset.value;
  }

  return selected;
};

const buildRouteTabs = (routes, selectedRoute) => {
  routeTabsEl.innerHTML = "";
  routes.forEach((route) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.value = route;
    button.textContent = route;
    button.setAttribute("aria-pressed", "false");
    routeTabsEl.appendChild(button);
  });

  return setActiveValue(routeTabsEl, selectedRoute);
};

const getDayMode = (now) => getActiveValue(dayTabsEl) || getDefaultDayMode(now);
const getDirectionMode = () => getActiveValue(directionTabsEl) || "toUni";

const getTimes = (dayKey, direction, route) => {
  if (!dayKey) return [];
  return DATA[dayKey][direction][route] || [];
};

const updateRoutes = (now = new Date()) => {
  const dayMode = getDayMode(now);
  const dayKey = resolveDayKey(dayMode);
  const direction = getDirectionMode();
  const routes = dayKey ? Object.keys(DATA[dayKey][direction]) : Object.keys(DATA.weekday[direction]);
  const current = getActiveValue(routeTabsEl);
  const selectedRoute = routes.includes(current) ? current : routes[0];
  const resolvedRoute = buildRouteTabs(routes, selectedRoute);

  return { dayMode, dayKey, direction, route: resolvedRoute };
};

const renderUpcomingList = (times, nowMinutes) => {
  if (!times.length) {
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    return;
  }

  upcomingListEl.innerHTML = times
    .map((time) => {
      const diff = parseMinutes(time) - nowMinutes;
      return `
        <div class="mini-item">
          <div class="mini-time">${time}</div>
          <div class="mini-meta">あと${formatRemaining(diff)}</div>
        </div>
      `;
    })
    .join("");
};

const makeStateKey = (state) => `${state.dayMode}|${state.direction}|${state.route}`;

const buildFullList = (state, forceScroll) => {
  const previousScroll = fullListBodyEl.scrollTop;
  const dayLabel = DAY_LABELS[state.dayMode] || "日曜";
  const directionLabel = DIRECTION_LABELS[state.direction] || "";

  fullListSubEl.textContent = `${dayLabel} / ${directionLabel} / ${state.route}`;

  if (!state.dayKey) {
    fullListBodyEl.innerHTML = '<div class="full-empty">日曜・祝日のデータは未登録です</div>';
    return;
  }

  if (!state.times.length) {
    fullListBodyEl.innerHTML = '<div class="full-empty">この路線は運休です</div>';
    return;
  }

  const nextTime = state.upcoming.length ? state.upcoming[0] : null;
  let currentHour = null;
  let html = "";

  state.times.forEach((time) => {
    const [hourText] = time.split(":");
    if (hourText !== currentHour) {
      currentHour = hourText;
      html += `<div class="full-hour">${parseInt(hourText, 10)}時台</div>`;
    }

    const diff = parseMinutes(time) - state.nowMinutes;
    const diffText = diff >= 0 ? `あと${formatRemaining(diff)}` : "";
    const isNext = nextTime && time === nextTime;

    html += `
      <div class="full-item${isNext ? " is-next" : ""}" data-time="${time}">
        <span class="full-time">${time}</span>
        <span class="full-meta">${diffText}</span>
      </div>
    `;
  });

  fullListBodyEl.innerHTML = html;

  if (forceScroll) {
    const items = Array.from(fullListBodyEl.querySelectorAll(".full-item"));
    const nextIndex = items.findIndex((item) => item.classList.contains("is-next"));
    const targetIndex = nextIndex >= 0 ? Math.max(0, nextIndex - 3) : 0;
    const targetEl = items[targetIndex];
    fullListBodyEl.scrollTop = targetEl ? targetEl.offsetTop : 0;
  } else {
    fullListBodyEl.scrollTop = previousScroll;
  }
};

const openFullList = () => {
  if (!lastRenderState) {
    render();
  }
  isExpanded = true;
  fullListEl.classList.add("open");
  fullListEl.setAttribute("aria-hidden", "false");
  expandBtnEl.setAttribute("aria-expanded", "true");
  document.body.classList.add("modal-open");

  if (lastRenderState) {
    lastFullListKey = makeStateKey(lastRenderState);
    buildFullList(lastRenderState, true);
  }
};

const closeFullList = () => {
  isExpanded = false;
  fullListEl.classList.remove("open");
  fullListEl.setAttribute("aria-hidden", "true");
  expandBtnEl.setAttribute("aria-expanded", "false");
  document.body.classList.remove("modal-open");
};

const render = () => {
  const now = new Date();
  const dayMode = getDayMode(now);
  const dayKey = resolveDayKey(dayMode);
  const direction = getDirectionMode();
  let route = getActiveValue(routeTabsEl);

  if (!route) {
    const updated = updateRoutes(now);
    route = updated.route;
  }

  const dayLabel = DAY_LABELS[dayMode] || "日曜";
  nowEl.textContent = `現在時刻 ${formatNow(now)} / ${dayLabel}`;
  if (headerClockEl) {
    headerClockEl.textContent = formatNow(now);
  }

  const times = getTimes(dayKey, direction, route);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const upcoming = times.filter((t) => parseMinutes(t) >= nowMinutes);

  if (!dayKey) {
    nextTimeEl.textContent = "--:--";
    nextMetaEl.textContent = "日曜・祝日のデータは未登録です";
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    notesEl.textContent = "";
    lastRenderState = { dayMode, dayKey, direction, route, times, upcoming, nowMinutes };
    if (isExpanded) {
      buildFullList(lastRenderState, true);
    }
    return;
  }

  if (!times.length) {
    nextTimeEl.textContent = "--:--";
    nextMetaEl.textContent = "この路線は運休です";
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    notesEl.textContent = "";
    lastRenderState = { dayMode, dayKey, direction, route, times, upcoming, nowMinutes };
    if (isExpanded) {
      buildFullList(lastRenderState, true);
    }
    return;
  }

  if (!upcoming.length) {
    nextTimeEl.textContent = "本日終了";
    nextMetaEl.textContent = "終バス後です";
    renderUpcomingList([], nowMinutes);
  } else {
    nextTimeEl.textContent = upcoming[0];
    const diff = parseMinutes(upcoming[0]) - nowMinutes;
    nextMetaEl.textContent = `あと${formatRemaining(diff)}`;
    renderUpcomingList(upcoming.slice(1, 4), nowMinutes);
  }

  if (direction === "fromUni") {
    notesEl.textContent = "鴻巣駅行きは高坂駅にも停車します。";
  } else if (route && route.includes("鴻巣駅")) {
    notesEl.textContent = "鴻巣駅発は高坂駅を経由します。";
  } else {
    notesEl.textContent = "";
  }

  lastRenderState = { dayMode, dayKey, direction, route, times, upcoming, nowMinutes };

  if (isExpanded) {
    const key = makeStateKey(lastRenderState);
    const forceScroll = key !== lastFullListKey;
    buildFullList(lastRenderState, forceScroll);
    lastFullListKey = key;
  }
};

const init = () => {
  const now = new Date();
  const defaultDay = getDefaultDayMode(now);
  if (defaultDay === "sunday") {
    clearActiveValue(dayTabsEl);
  } else {
    setActiveValue(dayTabsEl, defaultDay);
  }
  setActiveValue(directionTabsEl, getDefaultDirectionMode(now));
  updateRoutes(now);
  render();

  dayTabsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setActiveValue(dayTabsEl, button.dataset.value);
    updateRoutes();
    render();
  });

  directionTabsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setActiveValue(directionTabsEl, button.dataset.value);
    updateRoutes();
    render();
  });

  routeTabsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setActiveValue(routeTabsEl, button.dataset.value);
    render();
  });

  expandBtnEl.addEventListener("click", openFullList);
  closeListBtnEl.addEventListener("click", closeFullList);

  setInterval(render, 30000);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
};

document.addEventListener("DOMContentLoaded", init);

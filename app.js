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
      "鴻巣駅（高坂経由）": [],
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
  },
  vacationWeekday: {
    toUni: {
      "高坂駅": [
        "08:15", "08:28", "08:42", "08:59", "09:14", "09:21", "09:30", "09:43", "09:58", "10:12",
        "10:27", "10:42", "10:59", "11:07", "11:22", "11:37", "11:52", "12:08", "12:28", "12:49",
        "13:08", "13:28", "13:49", "14:08", "14:28", "14:49", "15:08", "15:28", "15:48", "16:08",
        "16:38", "16:58", "17:05", "17:21", "17:51", "18:07", "18:35"
      ],
      "北坂戸駅": [
        "08:47", "09:28", "10:39", "11:18", "12:16", "13:15", "14:15", "15:15", "16:13"
      ],
      "熊谷駅": ["08:20", "10:00", "12:30"],
      "鴻巣駅（高坂経由）": []
    },
    fromUni: {
      "高坂駅": [
        "09:43", "10:12", "10:22", "10:42", "10:52", "11:02", "11:22", "11:42", "11:52", "12:12",
        "12:32", "12:52", "13:12", "13:32", "13:52", "14:12", "14:32", "14:52", "15:12", "15:30",
        "15:54", "16:10", "16:24", "16:40", "16:55", "17:10", "17:24", "17:40", "17:54", "18:10",
        "18:25", "18:40", "18:55", "19:09", "19:25", "19:40", "19:54", "20:10", "20:25", "20:40",
        "21:09"
      ],
      "北坂戸駅": [
        "10:27", "11:06", "12:04", "13:03", "14:03", "15:03", "16:01", "17:26", "18:11"
      ],
      "熊谷駅": ["11:45", "15:30", "17:20", "19:10"],
      "鴻巣駅（高坂経由）": ["18:10", "18:40"]
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
const timetableCardEl = document.getElementById("timetableCard");
const headerClockEl = document.getElementById("headerClock");
const nextTimeEl = document.getElementById("nextTime");
const nextMetaEl = document.getElementById("nextMeta");
const upcomingListEl = document.getElementById("upcomingList");
const notesEl = document.getElementById("notes");

const DIRECTION_SWITCH_MINUTES = 12 * 60 + 30;
const DAY_LABELS = {
  weekday: "平日",
  saturday: "土曜",
  vacationWeekday: "休業平日",
  sunday: "日曜"
};
const DIRECTION_LABELS = {
  toUni: "大学に行く",
  fromUni: "帰る"
};
const VACATION_START = new Date(2026, 0, 22);
const VACATION_END = new Date(2026, 3, 1);

const isVacationDate = (date) => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return d >= VACATION_START && d <= VACATION_END;
};

let lastRenderState = null;
let isExpanded = false;
let lastFullListKey = null;

// 数字を2桁にパディング
const pad2 = (n) => String(n).padStart(2, "0");

// 時刻文字列を分単位の数値に変換
const parseMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

// 現在時刻を取得
const formatNow = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
const formatNowWithSeconds = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;

const updateClock = () => {
  if (!headerClockEl) return;
  headerClockEl.textContent = formatNowWithSeconds(new Date());
};


// あと何分 を「X時間Y分」形式にフォーマット
const formatRemaining = (minutes) => {
  const safe = Math.max(0, minutes);
  if (safe < 60) return `${safe}分`;
  const hours = Math.floor(safe / 60);
  const mins = safe % 60;
  return `${hours}時間${mins}分`;
};

// 日付モードをDATAキーに変換
const resolveDayKey = (mode) => {
  if (mode === "weekday") return "weekday";
  if (mode === "saturday") return "saturday";
  if (mode === "vacationWeekday") return "vacationWeekday";
  return null;
};

// 現在の曜日から適切な日付モードを決定（22時以降は翌日のダイヤを表示）
const getDefaultDayMode = (now) => {
  let checkDate = new Date(now);
  // 22:00以降は翌日のダイヤを表示
  if (now.getHours() >= 22) {
    checkDate.setDate(checkDate.getDate() + 1);
  }
  
  const dow = checkDate.getDay();
  if (dow === 6) return "saturday";
  if (dow === 0) return "sunday";
  if (isVacationDate(checkDate)) return "vacationWeekday";
  return "weekday";
};

// 現在時刻から適切な方向を決定
const getDefaultDirectionMode = (now) => {
  // 22時以降は翌日のダイヤなので「大学に行く」を返す
  if (now.getHours() >= 22) {
    return "toUni";
  }
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes < DIRECTION_SWITCH_MINUTES ? "toUni" : "fromUni";
};

// アクティブなボタンの値を取得
const getActiveValue = (containerEl) => {
  const active = containerEl.querySelector("button.active");
  return active ? active.dataset.value : null;
};

// コンテナ内のすべてのボタンをアクティブ状態から外す
const clearActiveValue = (containerEl) => {
  const buttons = Array.from(containerEl.querySelectorAll("button"));
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
};

// ボタンをアクティブに設定
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

// 路線タブのボタンを動的に生成
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

// アクティブな日付モードを取得
const getDayMode = (now) => getActiveValue(dayTabsEl) || getDefaultDayMode(now);
// アクティブな方向モードを取得
const getDirectionMode = () => getActiveValue(directionTabsEl) || "toUni";

// 指定条件の時刻表データを取得
const getTimes = (dayKey, direction, route) => {
  if (!dayKey) return [];
  return DATA[dayKey][direction][route] || [];
};

// 日付・方向の変更に応じて路線タブを更新
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

// 次3便のリストをレンダリング
const renderUpcomingList = (times, nowMinutes, isNextDay = false) => {
  if (!times.length) {
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    return;
  }

  upcomingListEl.innerHTML = times
    .map((time) => {
      let diff = parseMinutes(time) - nowMinutes;
      // 22時以降は翌日なので24時間足す
      if (isNextDay) {
        diff += 24 * 60;
      }
      return `
        <div class="mini-item">
          <div class="mini-time">${time}</div>
          <div class="mini-meta">あと${formatRemaining(diff)}</div>
        </div>
      `;
    })
    .join("");
};

// 現在の状態を一意のキーに変換
const makeStateKey = (state) => `${state.dayMode}|${state.direction}|${state.route}`;

// 全便一覧を時間帯別にレンダリング
const buildFullList = (state, forceScroll) => {
  const previousScroll = fullListBodyEl.scrollTop;
  const dayLabel = DAY_LABELS[state.dayMode] || "日曜";
  const directionLabel = DIRECTION_LABELS[state.direction] || "";

  if (!state.dayKey) {
    fullListBodyEl.innerHTML = '<div class="full-empty">日曜・祝日のデータは未登録です</div>';
    return;
  }

  if (!state.times.length) {
    fullListBodyEl.innerHTML = '<div class="full-empty">この日は運転がありません</div>';
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
    // DOM更新後のレイアウト計算を待つ
    requestAnimationFrame(() => {
      const items = Array.from(fullListBodyEl.querySelectorAll(".full-item"));
      const nextIndex = items.findIndex((item) => item.classList.contains("is-next"));
      if (nextIndex >= 0) {
        const targetEl = items[nextIndex];
        const scrollPos = targetEl.offsetTop;
        
        // .full-controls の高さを考慮してオフセット
        const controlsEl = document.querySelector(".full-controls");
        const controlsHeight = controlsEl ? controlsEl.offsetHeight : 0;
        
        fullListBodyEl.scrollTop = scrollPos - controlsHeight - 60;
      }
    });
  } else {
    fullListBodyEl.scrollTop = previousScroll;
  }
};

// 全便一覧を開く
const openFullList = () => {
  if (!lastRenderState) {
    render();
  }
  isExpanded = true;
  fullListEl.classList.add("open");
  fullListEl.setAttribute("aria-hidden", "false");
  expandBtnEl.setAttribute("aria-expanded", "true");
  expandBtnEl.textContent = "戻る";
  if (timetableCardEl) {
    timetableCardEl.classList.add("list-mode");
  }
  document.body.classList.add("list-open");
  if (lastRenderState) {
    lastFullListKey = makeStateKey(lastRenderState);
    buildFullList(lastRenderState, true);
  }
};

// 全便一覧を閉じる
const closeFullList = () => {
  isExpanded = false;
  fullListEl.classList.remove("open");
  fullListEl.setAttribute("aria-hidden", "true");
  expandBtnEl.setAttribute("aria-expanded", "false");
  expandBtnEl.textContent = "一覧";
  if (timetableCardEl) {
    timetableCardEl.classList.remove("list-mode");
  }
  document.body.classList.remove("list-open");
};

// 画面全体をレンダリング
const render = () => {
  const now = new Date();
  
  // 次のバス表示用：常に実際の曜日を使用（22時以降は翌日）
  const actualDayMode = getDefaultDayMode(now);
  const actualDayKey = resolveDayKey(actualDayMode);
  
  // 一覧表示用：ユーザーが選択した日付を使用
  const selectedDayMode = getDayMode(now);
  const selectedDayKey = resolveDayKey(selectedDayMode);
  
  const direction = getDirectionMode();
  let route = getActiveValue(routeTabsEl);

  if (!route) {
    const updated = updateRoutes(now);
    route = updated.route;
  }

  // 次のバス表示用のデータ（実際の曜日ベース）
  const timesForNext = getTimes(actualDayKey, direction, route);
  
  // 実際の現在時刻（差分計算用）
  const actualNowMinutes = now.getHours() * 60 + now.getMinutes();
  
  // 22時以降は翌日のダイヤなので、フィルタリング時は0時から開始
  let filterNowMinutes = actualNowMinutes;
  const isNextDay = now.getHours() >= 22;
  if (isNextDay) {
    filterNowMinutes = 0; // 翌日のダイヤなので、最初から比較
  }
  
  const upcomingForNext = timesForNext.filter((t) => parseMinutes(t) >= filterNowMinutes);

  if (!actualDayKey) {
    nextTimeEl.textContent = "--:--";
    nextMetaEl.textContent = "日曜・祝日のデータは未登録です";
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    notesEl.textContent = "";
  } else if (!timesForNext.length) {
    nextTimeEl.textContent = "--:--";
    nextMetaEl.textContent = "この日は運転がありません";
    upcomingListEl.innerHTML = '<div class="mini-empty">--</div>';
    notesEl.textContent = "";
  } else if (!upcomingForNext.length) {
    nextTimeEl.textContent = "本日終了";
    nextMetaEl.textContent = "終バス後です";
    renderUpcomingList([], actualNowMinutes, isNextDay);
  } else {
    nextTimeEl.textContent = upcomingForNext[0];
    // 差分計算：22時以降は翌日なので24時間足す
    let diff = parseMinutes(upcomingForNext[0]) - actualNowMinutes;
    if (isNextDay) {
      diff += 24 * 60; // 翌日なので24時間足す
    }
    nextMetaEl.textContent = `あと${formatRemaining(diff)}`;
    renderUpcomingList(upcomingForNext.slice(1, 4), actualNowMinutes, isNextDay);
  }

  // 一覧表示用のデータ（ユーザーが選択した日付ベース）
  const timesForList = getTimes(selectedDayKey, direction, route);
  const nowMinutesForList = now.getHours() * 60 + now.getMinutes();
  const upcomingForList = timesForList.filter((t) => parseMinutes(t) >= nowMinutesForList);

  lastRenderState = { 
    dayMode: selectedDayMode, 
    dayKey: selectedDayKey, 
    direction, 
    route, 
    times: timesForList, 
    upcoming: upcomingForList, 
    nowMinutes: nowMinutesForList
  };

  if (isExpanded) {
    const key = makeStateKey(lastRenderState);
    const forceScroll = key !== lastFullListKey;
    buildFullList(lastRenderState, forceScroll);
    lastFullListKey = key;
  }
};

// 初期化処理とイベントリスナー設定
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

  expandBtnEl.addEventListener("click", () => {
    if (isExpanded) {
      closeFullList();
    } else {
      openFullList();
    }
  });

  if (closeListBtnEl) {
    closeListBtnEl.addEventListener("click", closeFullList);
  }

  // 毎分ぴったり更新するようにスケジュール
  let minutelyIntervalId = null;
  
  const scheduleMinutelyUpdate = () => {
    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const msUntilNextMinute = secondsUntilNextMinute * 1000 - now.getMilliseconds();
    
    setTimeout(() => {
      render();
      minutelyIntervalId = setInterval(render, 60000);
    }, msUntilNextMinute);
  };
  
  scheduleMinutelyUpdate();
  // 時計の秒表示を分離して更新
  let clockIntervalId = null;
  let clockTimeoutId = null;

  const scheduleClockUpdate = () => {
    updateClock();

    if (clockIntervalId !== null) {
      clearInterval(clockIntervalId);
      clockIntervalId = null;
    }
    if (clockTimeoutId !== null) {
      clearTimeout(clockTimeoutId);
      clockTimeoutId = null;
    }

    const now = new Date();
    const msToNextSecond = 1000 - now.getMilliseconds();
    clockTimeoutId = setTimeout(() => {
      updateClock();
      clockIntervalId = setInterval(updateClock, 1000);
    }, msToNextSecond);
  };

  scheduleClockUpdate();

  // ページがフォーカスを失ったり戻ったりするときの処理
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (minutelyIntervalId !== null) {
        clearInterval(minutelyIntervalId);
        minutelyIntervalId = null;
      }
      if (clockIntervalId !== null) {
        clearInterval(clockIntervalId);
        clockIntervalId = null;
      }
      if (clockTimeoutId !== null) {
        clearTimeout(clockTimeoutId);
        clockTimeoutId = null;
      }
    } else {
      if (minutelyIntervalId === null) {
        scheduleMinutelyUpdate();
      }
      scheduleClockUpdate();
    }
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
};

document.addEventListener("DOMContentLoaded", init);




















const lines = {
  keio: {
    name: "京王線",
    type: "linear",
    directions: [
      { id: "inbound", name: "新宿方面", reverse: true },
      { id: "outbound", name: "京王八王子方面", reverse: false }
    ],
    stations: [
      s("shinjuku", "新宿", 35.6902, 139.7005, 90),
      s("sasazuka", "笹塚", 35.6738, 139.6671, 110),
      s("daitabashi", "代田橋", 35.6718, 139.6591, 80),
      s("meidaimae", "明大前", 35.6688, 139.6503, 90),
      s("shimotakaido", "下高井戸", 35.6664, 139.6414, 80),
      s("sakurajosui", "桜上水", 35.6677, 139.6310, 90),
      s("kamikitazawa", "上北沢", 35.6689, 139.6234, 75),
      s("hachimanyama", "八幡山", 35.6697, 139.6152, 75),
      s("rokakoen", "芦花公園", 35.6706, 139.6086, 75),
      s("chitosekarasuyama", "千歳烏山", 35.6679, 139.6009, 95),
      s("sengawa", "仙川", 35.6623, 139.5849, 110),
      s("tsutsujigaoka", "つつじヶ丘", 35.6587, 139.5750, 80),
      s("shibasaki", "柴崎", 35.6546, 139.5661, 80),
      s("kokuryo", "国領", 35.6508, 139.5580, 80),
      s("fuda", "布田", 35.6497, 139.5511, 75),
      s("chofu", "調布", 35.6518, 139.5446, 95),
      s("nishichofu", "西調布", 35.6570, 139.5297, 90),
      s("tobitakyu", "飛田給", 35.6601, 139.5237, 80),
      s("musashinodai", "武蔵野台", 35.6643, 139.5105, 90),
      s("tamareien", "多磨霊園", 35.6662, 139.5028, 80),
      s("higashifuchu", "東府中", 35.6688, 139.4953, 90),
      s("fuchu", "府中", 35.6721, 139.4800, 110),
      s("bubaigawara", "分倍河原", 35.6685, 139.4686, 90),
      s("nakagawara", "中河原", 35.6599, 139.4576, 95),
      s("seisekisakuragaoka", "聖蹟桜ヶ丘", 35.6508, 139.4472, 110),
      s("mogusaen", "百草園", 35.6577, 139.4313, 100),
      s("takahatafudo", "高幡不動", 35.6614, 139.4132, 110),
      s("minamidaira", "南平", 35.6548, 139.3928, 100),
      s("hirayamajoshikoen", "平山城址公園", 35.6472, 139.3804, 90),
      s("naganuma", "長沼", 35.6423, 139.3656, 95),
      s("kitano", "北野", 35.6442, 139.3540, 90),
      s("keiohachioji", "京王八王子", 35.6578, 139.3437, 120)
    ]
  },
  yamanote: {
    name: "山手線",
    type: "loop",
    directions: [
      { id: "outer", name: "外回り", reverse: false },
      { id: "inner", name: "内回り", reverse: true }
    ],
    stations: [
      s("tokyo", "東京", 35.6812, 139.7671, 120),
      s("kanda", "神田", 35.6917, 139.7709, 90),
      s("akihabara", "秋葉原", 35.6984, 139.7730, 90),
      s("okachimachi", "御徒町", 35.7074, 139.7747, 90),
      s("ueno", "上野", 35.7138, 139.7770, 110),
      s("uguisudani", "鶯谷", 35.7214, 139.7780, 90),
      s("nippori", "日暮里", 35.7278, 139.7713, 90),
      s("nishinippori", "西日暮里", 35.7321, 139.7668, 80),
      s("tabata", "田端", 35.7381, 139.7600, 90),
      s("komagome", "駒込", 35.7365, 139.7469, 90),
      s("sugamo", "巣鴨", 35.7335, 139.7393, 90),
      s("otsuka", "大塚", 35.7314, 139.7287, 90),
      s("ikebukuro", "池袋", 35.7295, 139.7109, 120),
      s("mejiro", "目白", 35.7212, 139.7066, 90),
      s("takadanobaba", "高田馬場", 35.7123, 139.7038, 90),
      s("shinokubo", "新大久保", 35.7013, 139.7003, 90),
      s("shinjuku", "新宿", 35.6909, 139.7003, 120),
      s("yoyogi", "代々木", 35.6831, 139.7020, 80),
      s("harajuku", "原宿", 35.6702, 139.7027, 100),
      s("shibuya", "渋谷", 35.6580, 139.7016, 120),
      s("ebisu", "恵比寿", 35.6467, 139.7101, 100),
      s("meguro", "目黒", 35.6339, 139.7157, 100),
      s("gotanda", "五反田", 35.6264, 139.7234, 90),
      s("osaki", "大崎", 35.6197, 139.7286, 100),
      s("shinagawa", "品川", 35.6285, 139.7388, 120),
      s("takanawagateway", "高輪ゲートウェイ", 35.6355, 139.7407, 90),
      s("tamachi", "田町", 35.6457, 139.7476, 90),
      s("hamamatsucho", "浜松町", 35.6553, 139.7570, 90),
      s("shimbashi", "新橋", 35.6663, 139.7586, 90),
      s("yurakucho", "有楽町", 35.6751, 139.7633, 80)
    ]
  }
};

const dom = {
  lineSelect: document.querySelector("#lineSelect"),
  directionSelect: document.querySelector("#directionSelect"),
  destinationSelect: document.querySelector("#destinationSelect"),
  manualStationSelect: document.querySelector("#manualStationSelect"),
  startButton: document.querySelector("#startButton"),
  manualSyncButton: document.querySelector("#manualSyncButton"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  gpsBadge: document.querySelector("#gpsBadge"),
  routeName: document.querySelector("#routeName"),
  directionName: document.querySelector("#directionName"),
  alertText: document.querySelector("#alertText"),
  remainingCount: document.querySelector("#remainingCount"),
  currentStation: document.querySelector("#currentStation"),
  nextStation: document.querySelector("#nextStation"),
  destinationStation: document.querySelector("#destinationStation"),
  railMap: document.querySelector("#railMap"),
  sourceText: document.querySelector("#sourceText"),
  accuracyText: document.querySelector("#accuracyText"),
  etaText: document.querySelector("#etaText"),
  updatedText: document.querySelector("#updatedText")
};

const state = {
  lineId: "keio",
  directionId: "inbound",
  destinationId: "shinjuku",
  currentIndex: null,
  segmentStartedAt: null,
  source: "未開始",
  accuracy: null,
  watchId: null,
  updatedAt: null,
  moving: false
};

function s(id, name, lat, lon, secondsToNext) {
  return { id, name, lat, lon, secondsToNext };
}

function getOrderedStations() {
  const line = lines[state.lineId];
  const direction = line.directions.find((item) => item.id === state.directionId);
  const baseStations = direction.reverse ? [...line.stations].reverse() : [...line.stations];
  const stations = baseStations.map((station, index) => {
    const nextStation = baseStations[index + 1] || baseStations[0];
    return {
      ...station,
      secondsToNext: estimateSeconds(station, nextStation, station.secondsToNext)
    };
  });
  return line.type === "loop" ? [...stations, ...stations] : stations;
}

function getLine() {
  return lines[state.lineId];
}

function getDirection() {
  return getLine().directions.find((item) => item.id === state.directionId);
}

function fillSelect(select, items, selectedId) {
  select.innerHTML = "";
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    option.selected = item.id === selectedId;
    select.append(option);
  });
}

function initializeControls() {
  fillSelect(
    dom.lineSelect,
    Object.entries(lines).map(([id, line]) => ({ id, name: line.name })),
    state.lineId
  );
  updateDirectionSelect();
  attachEvents();
  render();
}

function updateDirectionSelect() {
  const line = getLine();
  fillSelect(dom.directionSelect, line.directions, state.directionId);
  updateStationSelects();
}

function updateStationSelects() {
  const stations = getOrderedStations();
  const uniqueStations = stations.slice(0, getLine().stations.length);
  if (!uniqueStations.some((station) => station.id === state.destinationId)) {
    state.destinationId = uniqueStations[0].id;
  }
  fillSelect(dom.destinationSelect, uniqueStations, state.destinationId);
  fillSelect(dom.manualStationSelect, uniqueStations, uniqueStations[state.currentIndex ?? 0]?.id);
}

function attachEvents() {
  dom.lineSelect.addEventListener("change", () => {
    state.lineId = dom.lineSelect.value;
    state.directionId = getLine().directions[0].id;
    state.currentIndex = null;
    state.segmentStartedAt = null;
    updateDirectionSelect();
    render();
  });

  dom.directionSelect.addEventListener("change", () => {
    state.directionId = dom.directionSelect.value;
    state.currentIndex = null;
    state.segmentStartedAt = null;
    updateStationSelects();
    render();
  });

  dom.destinationSelect.addEventListener("change", () => {
    state.destinationId = dom.destinationSelect.value;
    render();
  });

  dom.startButton.addEventListener("click", startGps);
  dom.manualSyncButton.addEventListener("click", () => syncToStation(dom.manualStationSelect.value, "手動補正"));
  dom.prevButton.addEventListener("click", () => stepStation(-1, "手動"));
  dom.nextButton.addEventListener("click", () => stepStation(1, "手動"));
}

function startGps() {
  if (!("geolocation" in navigator)) {
    setGpsBadge("GPS非対応", "warn");
    state.source = "GPS非対応";
    render();
    return;
  }

  if (state.watchId !== null) {
    navigator.geolocation.clearWatch(state.watchId);
  }

  setGpsBadge("GPS取得中", "warn");
  state.source = "GPS待機";
  render();

  state.watchId = navigator.geolocation.watchPosition(handlePosition, handleGpsError, {
    enableHighAccuracy: true,
    maximumAge: 8000,
    timeout: 14000
  });
}

function handlePosition(position) {
  const ordered = getOrderedStations();
  const nearest = findNearestStation(position.coords.latitude, position.coords.longitude, ordered);
  state.accuracy = Math.round(position.coords.accuracy);
  state.updatedAt = new Date();

  if (nearest.distance <= Math.max(700, position.coords.accuracy * 1.8)) {
    state.currentIndex = nearest.index;
    state.segmentStartedAt = Date.now();
    state.source = "GPS補正";
    state.moving = false;
    setGpsBadge("GPS同期", "ok");
  } else if (state.currentIndex === null) {
    state.currentIndex = nearest.index;
    state.segmentStartedAt = Date.now();
    state.source = "GPS最寄り推定";
    state.moving = false;
    setGpsBadge("GPS推定", "warn");
  } else {
    state.source = "時間推定";
    setGpsBadge("GPS遠い", "warn");
  }

  updateStationSelects();
  render();
}

function handleGpsError(error) {
  const labels = {
    1: "位置許可なし",
    2: "位置取得不可",
    3: "GPS時間切れ"
  };
  state.source = "時間推定";
  state.updatedAt = new Date();
  setGpsBadge(labels[error.code] || "GPS不安定", "warn");
  if (state.currentIndex === null) {
    state.currentIndex = 0;
    state.segmentStartedAt = Date.now();
  }
  render();
}

function syncToStation(stationId, source) {
  const ordered = getOrderedStations();
  const index = ordered.findIndex((station) => station.id === stationId);
  if (index < 0) return;
  state.currentIndex = index;
  state.segmentStartedAt = Date.now();
  state.source = source;
  state.updatedAt = new Date();
  state.moving = false;
  updateStationSelects();
  render();
}

function stepStation(delta, source) {
  const ordered = getOrderedStations();
  if (state.currentIndex === null) {
    state.currentIndex = 0;
  } else {
    const lastIndex = ordered.length - 1;
    state.currentIndex = clamp(state.currentIndex + delta, 0, lastIndex);
  }
  state.segmentStartedAt = Date.now();
  state.source = source;
  state.updatedAt = new Date();
  state.moving = false;
  updateStationSelects();
  render();
}

function tick() {
  if (state.currentIndex !== null && state.segmentStartedAt !== null) {
    const ordered = getOrderedStations();
    const station = ordered[state.currentIndex];
    const intervalMs = (station?.secondsToNext || 90) * 1000;
    const elapsed = Date.now() - state.segmentStartedAt;

    state.moving = elapsed > 35000 && state.currentIndex < ordered.length - 1;

    if (elapsed > intervalMs && state.currentIndex < ordered.length - 1) {
      state.currentIndex += 1;
      state.segmentStartedAt = Date.now();
      state.source = state.source === "GPS補正" ? "時間推定" : state.source;
      state.updatedAt = new Date();
      state.moving = false;
      updateStationSelects();
    }
  }
  render();
}

function findNearestStation(lat, lon, stations) {
  return stations.reduce(
    (best, station, index) => {
      const distance = distanceMeters(lat, lon, station.lat, station.lon);
      return distance < best.distance ? { station, index, distance } : best;
    },
    { station: null, index: 0, distance: Infinity }
  );
}

function distanceMeters(lat1, lon1, lat2, lon2) {
  const radius = 6371000;
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getDestinationIndex(stations) {
  const index = stations.findIndex((station, stationIndex) => {
    if (station.id !== state.destinationId) return false;
    return getLine().type !== "loop" || stationIndex >= (state.currentIndex ?? 0);
  });
  return index >= 0 ? index : stations.findIndex((station) => station.id === state.destinationId);
}

function getRemaining(stations) {
  if (state.currentIndex === null) return null;
  const destinationIndex = getDestinationIndex(stations);
  return Math.max(0, destinationIndex - state.currentIndex);
}

function render() {
  const line = getLine();
  const direction = getDirection();
  const stations = getOrderedStations();
  const current = state.currentIndex === null ? null : stations[state.currentIndex];
  const next = state.currentIndex === null ? null : stations[state.currentIndex + 1];
  const destinationIndex = getDestinationIndex(stations);
  const destination = stations[destinationIndex];
  const remaining = getRemaining(stations);

  dom.routeName.textContent = line.name;
  dom.directionName.textContent = direction.name;
  dom.destinationStation.textContent = destination?.name || "--";
  dom.remainingCount.textContent = remaining === null ? "--" : String(remaining);
  dom.currentStation.textContent = getCurrentLabel(current, next);
  dom.nextStation.textContent = next?.name || "終点";
  dom.sourceText.textContent = state.source;
  dom.accuracyText.textContent = state.accuracy === null ? "--" : `±${state.accuracy}m`;
  dom.etaText.textContent = getEtaText(current);
  dom.updatedText.textContent = state.updatedAt ? state.updatedAt.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--";

  if (remaining === 0 && current?.id === destination?.id) {
    dom.alertText.textContent = "到着";
    dom.alertText.classList.add("danger");
  } else if (remaining === 1) {
    dom.alertText.textContent = "次で降車";
    dom.alertText.classList.add("danger");
  } else if (remaining === null) {
    dom.alertText.textContent = "降車駅を選んで開始";
    dom.alertText.classList.remove("danger");
  } else {
    dom.alertText.textContent = `${destination?.name || "降車駅"}まで`;
    dom.alertText.classList.remove("danger");
  }

  renderRailMap(stations, destinationIndex);
}

function getCurrentLabel(current, next) {
  if (!current) return "未開始";
  if (state.moving && next) return `${current.name} → ${next.name}`;
  return current.name;
}

function getEtaText(current) {
  if (!current || state.segmentStartedAt === null) return "--";
  const total = current.secondsToNext || 90;
  const elapsed = Math.floor((Date.now() - state.segmentStartedAt) / 1000);
  const remaining = Math.max(0, total - elapsed);
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function renderRailMap(stations, destinationIndex) {
  dom.railMap.innerHTML = "";
  const currentIndex = state.currentIndex ?? -1;

  stations.forEach((station, index) => {
    const stop = document.createElement("div");
    stop.className = "rail-stop";
    if (index < currentIndex) stop.classList.add("passed");
    if (index === currentIndex) stop.classList.add("current");
    if (index === destinationIndex) stop.classList.add("destination");
    if (Math.abs(index - currentIndex) <= 1 || Math.abs(index - destinationIndex) <= 1) stop.classList.add("neighbor");

    const dot = document.createElement("span");
    dot.className = "dot";
    const name = document.createElement("span");
    name.className = "stop-name";
    name.textContent = station.name;
    stop.append(dot, name);
    dom.railMap.append(stop);
  });
}

function setGpsBadge(text, level) {
  dom.gpsBadge.textContent = text;
  dom.gpsBadge.className = `status-badge ${level || ""}`.trim();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function estimateSeconds(station, nextStation, fallback) {
  if (!nextStation) return fallback || 90;
  const meters = distanceMeters(station.lat, station.lon, nextStation.lat, nextStation.lon);
  return Math.max(65, Math.min(150, Math.round(meters / 14)));
}

initializeControls();
setInterval(tick, 1000);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

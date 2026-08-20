/* Site custom interactions */
(function() {
  "use strict";

  var HOME_BG_KEY = "home-bg-mode";
  var DEFAULT_MODE = "forest";
  var MODES = {
    legacy: true,
    forest: true,
    void: true
  };
  var CLICK_TEXTS = [
    "知行合一",
    "慢慢来",
    "继续写",
    "保持清醒",
    "多看世界",
    "稳一点"
  ];
  var clickIndex = 0;
  var clickCount = 0;

  /** 站点根路径：优先从 script src 推导（最可靠），再读 data-site-base */
  function getSiteBase() {
    var script = document.currentScript;
    if (!script) {
      script = document.querySelector('script[src*="custom.js"]');
    }
    if (script) {
      var src = script.getAttribute("src") || "";
      var idx = src.indexOf("js/custom.js");
      if (idx >= 0) {
        return src.slice(0, idx);
      }
      var fromData = script.getAttribute("data-site-base");
      if (fromData && fromData !== "/") {
        return fromData.endsWith("/") ? fromData : fromData + "/";
      }
    }
    // 最后兜底：pathname 是否在子目录站点
    var path = window.location.pathname || "/";
    if (path.indexOf("/liushu258/") === 0) {
      return "/liushu258/";
    }
    return "/";
  }

  var SITE_BASE = getSiteBase();

  function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
  }

  function isValidMode(mode) {
    return !!MODES[mode];
  }

  function readCookieMode() {
    try {
      var parts = document.cookie ? document.cookie.split(";") : [];
      for (var i = 0; i < parts.length; i += 1) {
        var p = parts[i].replace(/^\s+|\s+$/g, "");
        if (p.indexOf(HOME_BG_KEY + "=") === 0) {
          return decodeURIComponent(p.slice(HOME_BG_KEY.length + 1));
        }
      }
    } catch (error) {}
    return null;
  }

  function getStoredMode() {
    // 优先 head 脚本写好的全局值（与当前页一致）
    if (isValidMode(window.__HOME_BG_MODE__)) {
      return window.__HOME_BG_MODE__;
    }
    try {
      var fromStore = window.localStorage.getItem(HOME_BG_KEY);
      if (isValidMode(fromStore)) {
        return fromStore;
      }
    } catch (error) {}
    var fromCookie = readCookieMode();
    if (isValidMode(fromCookie)) {
      return fromCookie;
    }
    return DEFAULT_MODE;
  }

  function persistMode(mode) {
    if (!isValidMode(mode)) {
      return;
    }
    try {
      window.localStorage.setItem(HOME_BG_KEY, mode);
    } catch (error) {}
    try {
      // path=/ 保证整站（含 /liushu258/ 文章路径）都能读到
      var maxAge = 60 * 60 * 24 * 365;
      document.cookie =
        HOME_BG_KEY +
        "=" +
        encodeURIComponent(mode) +
        "; path=/; max-age=" +
        maxAge +
        "; SameSite=Lax";
    } catch (error) {}
    window.__HOME_BG_MODE__ = mode;
  }

  /** 纸感纹理：纸浆 / 短纤维 / 像素细颗粒（与 BlogBackground 同步） */
  function hash2(x, y) {
    var n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
  }

  function smoothNoise(x, y) {
    var x0 = Math.floor(x);
    var y0 = Math.floor(y);
    var fx = x - x0;
    var fy = y - y0;
    var ux = fx * fx * (3 - 2 * fx);
    var uy = fy * fy * (3 - 2 * fy);
    var a = hash2(x0, y0);
    var b = hash2(x0 + 1, y0);
    var c = hash2(x0, y0 + 1);
    var d = hash2(x0 + 1, y0 + 1);
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
  }

  function fbm(x, y, octaves) {
    var value = 0;
    var amp = 0.5;
    var freq = 1;
    var i;
    for (i = 0; i < octaves; i += 1) {
      value += amp * smoothNoise(x * freq, y * freq);
      amp *= 0.5;
      freq *= 2;
    }
    return value;
  }

  function buildPaperTextures() {
    var pulpSize = 256;
    var fiberSize = 256;
    var grainSize = 256;

    var pulpCanvas = document.createElement("canvas");
    pulpCanvas.width = pulpSize;
    pulpCanvas.height = pulpSize;
    var pulpCtx = pulpCanvas.getContext("2d");
    var pulpData = pulpCtx.createImageData(pulpSize, pulpSize);
    var p;
    for (p = 0; p < pulpSize * pulpSize; p += 1) {
      var px = p % pulpSize;
      var py = (p / pulpSize) | 0;
      var nx = px / pulpSize;
      var ny = py / pulpSize;
      var n =
        fbm(nx * 6, ny * 6, 4) * 0.55 +
        fbm(nx * 14 + 20, ny * 14 + 7, 3) * 0.45;
      var t = Math.min(1, Math.max(0, n));
      var i4 = p * 4;
      pulpData.data[i4] = 92 + t * 40;
      pulpData.data[i4 + 1] = 72 + t * 28;
      pulpData.data[i4 + 2] = 48 + t * 18;
      pulpData.data[i4 + 3] = Math.floor(18 + t * 52);
    }
    pulpCtx.putImageData(pulpData, 0, 0);

    var fiberCanvas = document.createElement("canvas");
    fiberCanvas.width = fiberSize;
    fiberCanvas.height = fiberSize;
    var fiberCtx = fiberCanvas.getContext("2d");
    fiberCtx.clearRect(0, 0, fiberSize, fiberSize);
    var f;
    for (f = 0; f < 1400; f += 1) {
      var fx = Math.random() * fiberSize;
      var fy = Math.random() * fiberSize;
      var len = 4 + Math.random() * 18;
      var angle = (Math.random() - 0.5) * 0.7;
      var alpha = 0.03 + Math.random() * 0.08;
      var shade = 70 + Math.random() * 50;
      fiberCtx.strokeStyle =
        "rgba(" +
        Math.floor(shade) +
        "," +
        Math.floor(shade * 0.82) +
        "," +
        Math.floor(shade * 0.55) +
        "," +
        alpha +
        ")";
      fiberCtx.lineWidth = 0.35 + Math.random() * 0.7;
      fiberCtx.beginPath();
      fiberCtx.moveTo(fx, fy);
      fiberCtx.lineTo(fx + Math.cos(angle) * len, fy + Math.sin(angle) * len);
      fiberCtx.stroke();
    }
    for (f = 0; f < 280; f += 1) {
      var vx = Math.random() * fiberSize;
      var vy = Math.random() * fiberSize;
      var vlen = 3 + Math.random() * 10;
      fiberCtx.strokeStyle =
        "rgba(90, 70, 48, " + (0.025 + Math.random() * 0.05) + ")";
      fiberCtx.lineWidth = 0.3 + Math.random() * 0.5;
      fiberCtx.beginPath();
      fiberCtx.moveTo(vx, vy);
      fiberCtx.lineTo(vx + (Math.random() - 0.5) * 2, vy + vlen);
      fiberCtx.stroke();
    }

    var grainCanvas = document.createElement("canvas");
    grainCanvas.width = grainSize;
    grainCanvas.height = grainSize;
    var grainCtx = grainCanvas.getContext("2d");
    var grainData = grainCtx.createImageData(grainSize, grainSize);
    var g;
    for (g = 0; g < grainSize * grainSize; g += 1) {
      var r = Math.random();
      var g4 = g * 4;
      if (r > 0.55) {
        grainData.data[g4 + 3] = 0;
        continue;
      }
      var dark = Math.random() > 0.5;
      var v = dark ? 55 + Math.random() * 40 : 200 + Math.random() * 40;
      grainData.data[g4] = v;
      grainData.data[g4 + 1] = v * (dark ? 0.86 : 0.97);
      grainData.data[g4 + 2] = v * (dark ? 0.62 : 0.9);
      grainData.data[g4 + 3] = Math.floor(10 + Math.random() * 28);
    }
    grainCtx.putImageData(grainData, 0, 0);

    var m;
    grainCtx.fillStyle = "rgba(80, 60, 40, 0.045)";
    for (m = 0; m < 9000; m += 1) {
      grainCtx.fillRect(
        (Math.random() * grainSize) | 0,
        (Math.random() * grainSize) | 0,
        1,
        1
      );
    }
    grainCtx.fillStyle = "rgba(255, 248, 235, 0.05)";
    for (m = 0; m < 5000; m += 1) {
      grainCtx.fillRect(
        (Math.random() * grainSize) | 0,
        (Math.random() * grainSize) | 0,
        1,
        1
      );
    }

    return {
      pulp: pulpCanvas.toDataURL("image/png"),
      fiber: fiberCanvas.toDataURL("image/png"),
      grain: grainCanvas.toDataURL("image/png")
    };
  }

  function applyPaperTextures(paperEl, fiberEl, grainEl) {
    try {
      var tex = buildPaperTextures();
      paperEl.style.backgroundImage = "url(" + tex.pulp + ")";
      paperEl.style.backgroundSize = "220px 220px";
      paperEl.style.backgroundRepeat = "repeat";

      fiberEl.style.backgroundImage = "url(" + tex.fiber + ")";
      fiberEl.style.backgroundSize = "160px 160px";
      fiberEl.style.backgroundRepeat = "repeat";

      grainEl.style.backgroundImage = "url(" + tex.grain + ")";
      grainEl.style.backgroundSize = "96px 96px";
      grainEl.style.backgroundRepeat = "repeat";
    } catch (error) {}
  }

  function ensureBackgroundLayers() {
    if (document.querySelector(".home-bg-noise")) {
      return;
    }

    var body = document.body;
    if (!body) {
      return;
    }

    var paper = document.createElement("div");
    paper.className = "home-bg-paper";
    paper.setAttribute("aria-hidden", "true");

    var fiber = document.createElement("div");
    fiber.className = "home-bg-fiber";
    fiber.setAttribute("aria-hidden", "true");

    var grain = document.createElement("div");
    grain.className = "home-bg-grain";
    grain.setAttribute("aria-hidden", "true");

    var noise = document.createElement("div");
    noise.className = "home-bg-noise";
    noise.setAttribute("aria-hidden", "true");

    var video = document.createElement("video");
    video.className = "home-bg-video";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.setAttribute("aria-hidden", "true");
    video.setAttribute("muted", "");
    video.src = SITE_BASE + "video/leaves.mp4";

    var sun = document.createElement("div");
    sun.className = "home-bg-sun";
    sun.setAttribute("aria-hidden", "true");

    var shaftOne = document.createElement("div");
    shaftOne.className = "home-bg-shaft home-bg-shaft-1";
    shaftOne.setAttribute("aria-hidden", "true");

    var shaftTwo = document.createElement("div");
    shaftTwo.className = "home-bg-shaft home-bg-shaft-2";
    shaftTwo.setAttribute("aria-hidden", "true");

    var shaftThree = document.createElement("div");
    shaftThree.className = "home-bg-shaft home-bg-shaft-3";
    shaftThree.setAttribute("aria-hidden", "true");

    // 底 → 顶：paper → fiber → grain → noise → video → sun → shafts
    body.insertBefore(shaftThree, body.firstChild);
    body.insertBefore(shaftTwo, body.firstChild);
    body.insertBefore(shaftOne, body.firstChild);
    body.insertBefore(sun, body.firstChild);
    body.insertBefore(video, body.firstChild);
    body.insertBefore(noise, body.firstChild);
    body.insertBefore(grain, body.firstChild);
    body.insertBefore(fiber, body.firstChild);
    body.insertBefore(paper, body.firstChild);

    applyPaperTextures(paper, fiber, grain);
  }

  function setActiveGlyph(mode) {
    var glyphs = document.querySelectorAll(".home-title-glyph");
    for (var i = 0; i < glyphs.length; i += 1) {
      var glyph = glyphs[i];
      glyph.classList.toggle("is-active", glyph.getAttribute("data-home-bg-target") === mode);
    }
  }

  function syncVideo(mode) {
    var video = document.querySelector(".home-bg-video");
    if (!video) {
      return;
    }

    if (mode === "forest") {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function() {});
      }
      return;
    }

    video.pause();
    try {
      video.currentTime = 0;
    } catch (error) {}
  }

  function stampMode(el, nextMode) {
    if (!el) {
      return;
    }
    el.setAttribute("data-home-bg", nextMode);
    el.classList.remove("home-bg-legacy", "home-bg-forest", "home-bg-void");
    el.classList.add("home-bg-" + nextMode);
  }

  function applyMode(mode, options) {
    var nextMode = isValidMode(mode) ? mode : DEFAULT_MODE;
    var skipPersist = options && options.persist === false;

    stampMode(document.documentElement, nextMode);
    stampMode(document.body, nextMode);

    if (!skipPersist) {
      persistMode(nextMode);
    }

    setActiveGlyph(nextMode);
    syncVideo(nextMode);
    return nextMode;
  }

  function bindHomeTitleSwitcher() {
    var glyphs = document.querySelectorAll(".home-title-glyph");
    for (var i = 0; i < glyphs.length; i += 1) {
      glyphs[i].addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        var target = event.currentTarget.getAttribute("data-home-bg-target");
        applyMode(target);
      });
    }
  }

  /** 其它标签页改背景时同步；同页刷新靠 localStorage 读取 */
  function bindStorageSync() {
    window.addEventListener("storage", function(event) {
      if (event.key === HOME_BG_KEY && MODES[event.newValue]) {
        applyMode(event.newValue, { persist: false });
      }
    });
  }

  function bindScrollHelpers() {
    if (window.jQuery) {
      window.jQuery(function($) {
        $("#lamu img").eq(0).on("click", function() {
          $("html,body").animate({ scrollTop: $(document).height() }, 800);
          return false;
        });

        $("#leimu img").eq(0).on("click", function() {
          $("html,body").animate({ scrollTop: 0 }, 800);
          return false;
        });
      });
    }
  }

  function bindFloatingText() {
    document.body.addEventListener("click", function(event) {
      if (event.target.closest(".home-title-glyph")) {
        return;
      }

      clickCount += 1;
      if (clickCount % 2 !== 0) {
        return;
      }

      var text = CLICK_TEXTS[clickIndex];
      clickIndex = (clickIndex + 1) % CLICK_TEXTS.length;

      var node = document.createElement("span");
      node.textContent = text;
      node.style.position = "absolute";
      node.style.left = event.pageX + "px";
      node.style.top = event.pageY - 20 + "px";
      node.style.zIndex = "9999";
      node.style.fontWeight = "700";
      node.style.color = randomColor();
      node.style.userSelect = "none";
      node.style.pointerEvents = "none";
      node.style.transition = "transform 1.5s ease, opacity 1.5s ease";

      document.body.appendChild(node);
      window.requestAnimationFrame(function() {
        node.style.transform = "translateY(-140px)";
        node.style.opacity = "0";
      });
      window.setTimeout(function() {
        node.remove();
      }, 1500);
    });
  }

  function bindVisibilityTitle() {
    var originalTitle = document.title;
    var titleTimer = null;

    document.addEventListener("visibilitychange", function() {
      if (document.hidden) {
        document.title = "先别走开";
        window.clearTimeout(titleTimer);
        return;
      }

      document.title = "欢迎回来";
      titleTimer = window.setTimeout(function() {
        document.title = originalTitle;
      }, 1800);
    });
  }

  function updateRuntime() {
    var runbox = document.getElementById("run-time");
    if (!runbox) {
      return;
    }

    var startTime = new Date("11/20/2022 15:00:00");
    var usedTime = Date.now() - startTime.getTime();
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    var hours = Math.floor((usedTime % (24 * 3600 * 1000)) / (3600 * 1000));
    var minutes = Math.floor((usedTime % (3600 * 1000)) / (60 * 1000));
    var seconds = Math.floor((usedTime % (60 * 1000)) / 1000);

    runbox.innerHTML = "本站已运行 <i class=\"far fa-clock fa-fw\"></i> "
      + String(days).padStart(2, "0") + " 天 "
      + String(hours).padStart(2, "0") + " 时 "
      + String(minutes).padStart(2, "0") + " 分 "
      + String(seconds).padStart(2, "0") + " 秒";
  }

  function initHomeEnhancements() {
    // 全站统一：恢复首页选择的背景（文章页同样执行）
    var mode = getStoredMode();
    applyMode(mode);
    try {
      ensureBackgroundLayers();
    } catch (error) {
      // 纹理生成失败不影响模式切换
    }
    // 装饰层就绪后再同步视频/显隐
    applyMode(mode, { persist: false });
    bindHomeTitleSwitcher();
    bindStorageSync();
    bindScrollHelpers();
    bindFloatingText();
    bindVisibilityTitle();
    updateRuntime();
    window.setInterval(updateRuntime, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeEnhancements, { once: true });
  } else {
    initHomeEnhancements();
  }
})();

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

  function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
  }

  function getStoredMode() {
    try {
      var mode = window.localStorage.getItem(HOME_BG_KEY);
      return MODES[mode] ? mode : DEFAULT_MODE;
    } catch (error) {
      return DEFAULT_MODE;
    }
  }

  function persistMode(mode) {
    try {
      window.localStorage.setItem(HOME_BG_KEY, mode);
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

    var noise = document.createElement("div");
    noise.className = "home-bg-noise";

    var video = document.createElement("video");
    video.className = "home-bg-video";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.setAttribute("aria-hidden", "true");
    video.setAttribute("muted", "");
    video.src = "/liushu258/video/leaves.mp4";

    var sun = document.createElement("div");
    sun.className = "home-bg-sun";

    var shaftOne = document.createElement("div");
    shaftOne.className = "home-bg-shaft home-bg-shaft-1";

    var shaftTwo = document.createElement("div");
    shaftTwo.className = "home-bg-shaft home-bg-shaft-2";

    var shaftThree = document.createElement("div");
    shaftThree.className = "home-bg-shaft home-bg-shaft-3";

    body.insertBefore(noise, body.firstChild);
    body.insertBefore(video, body.firstChild);
    body.insertBefore(sun, body.firstChild);
    body.insertBefore(shaftOne, body.firstChild);
    body.insertBefore(shaftTwo, body.firstChild);
    body.insertBefore(shaftThree, body.firstChild);
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

  function applyMode(mode) {
    var nextMode = MODES[mode] ? mode : DEFAULT_MODE;
    document.body.setAttribute("data-home-bg", nextMode);
    persistMode(nextMode);
    setActiveGlyph(nextMode);
    syncVideo(nextMode);
  }

  function bindHomeTitleSwitcher() {
    var glyphs = document.querySelectorAll(".home-title-glyph");
    for (var i = 0; i < glyphs.length; i += 1) {
      glyphs[i].addEventListener("click", function(event) {
        applyMode(event.currentTarget.getAttribute("data-home-bg-target"));
      });
    }
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
    ensureBackgroundLayers();
    bindHomeTitleSwitcher();
    bindScrollHelpers();
    bindFloatingText();
    bindVisibilityTitle();
    applyMode(getStoredMode());
    updateRuntime();
    window.setInterval(updateRuntime, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeEnhancements, { once: true });
  } else {
    initHomeEnhancements();
  }
})();

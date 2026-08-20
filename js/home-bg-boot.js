/* 全站背景模式启动脚本：必须在 CSS 后、正文前尽早执行 */
(function () {
  var KEY = "home-bg-mode";
  var MODES = { legacy: 1, forest: 1, void: 1 };
  var mode = "forest";

  function valid(m) {
    return !!(m && MODES[m]);
  }

  function readCookie() {
    try {
      var raw = document.cookie || "";
      var parts = raw.split(";");
      for (var i = 0; i < parts.length; i += 1) {
        var p = parts[i].replace(/^\s+|\s+$/g, "");
        if (p.indexOf(KEY + "=") === 0) {
          return decodeURIComponent(p.substring(KEY.length + 1));
        }
      }
    } catch (err) {
      /* ignore */
    }
    return null;
  }

  try {
    var fromStore = null;
    try {
      fromStore = window.localStorage ? localStorage.getItem(KEY) : null;
    } catch (err) {
      fromStore = null;
    }
    if (valid(fromStore)) {
      mode = fromStore;
    } else {
      var fromCookie = readCookie();
      if (valid(fromCookie)) {
        mode = fromCookie;
      }
    }
  } catch (err) {
    mode = "forest";
  }

  function apply(el) {
    if (!el) {
      return;
    }
    el.setAttribute("data-home-bg", mode);
    el.classList.remove("home-bg-legacy", "home-bg-forest", "home-bg-void");
    el.classList.add("home-bg-" + mode);
  }

  apply(document.documentElement);
  if (document.body) {
    apply(document.body);
  } else {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        apply(document.body);
      },
      { once: true }
    );
  }

  window.__HOME_BG_MODE__ = mode;
})();

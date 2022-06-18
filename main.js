// let browser = (browser) ? browser : chrome.browser;

const interval = setInterval(() => {
  const container = document.querySelector("#app div[class^='container__']");
  const sub = document.querySelector("#app div[class^='container__'] > div");
  const header = document.querySelector("div[class^='header__']");

  // Enter full size mode
  if (header) {
    header.dataset.status = "exited";
  }

  if (container) {
    // Clear Running Interval
    clearInterval(interval);

    // Set Column layout
    container.style.flexDirection = "column";

    // Check storage
    browser.storage.local.get().then((results) => {
      if (results["lc_window_size"]) {
        sub.style.flex = "0 0 " + results["lc_window_size"].toString() + "px";
      }
      if (results["lc_orientation"]) {
        container.style.flexDirection = results["lc_orientation"];
      }
    })
  }
}, 500);

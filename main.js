// let browser = (browser) ? browser : chrome.browser;

const interval = setInterval(() => {
  const container = document.querySelector("#app div[class^='container__']");
  const sub = document.querySelector("#app div[class^='container__'] > div");
  const header = document.querySelector("div[class^='header__']");
  const difficulty = document.querySelector("#app div[class^='description__'] > div > div:nth-child(2) > div");

  if (container) {
    // Clear Running Interval
    clearInterval(interval);

    // Hide difficulty
    if (difficulty) {
      difficulty.style.display = "none";
    }

    // Enter full size mode
    if (header) {
      header.dataset.status = "exited";
    }

    const setContainer = () => {
      const value = (screen.height > screen.width) ? "column" : "row";
      container.style.flexDirection = value;
      // browser.storage.local.set({
      //   lc_window_size: value
      // })
    }
    setContainer();

    // Check storage
    // browser.storage.local.get().then((results) => {
    //   if (results["lc_window_size"]) {
    //     sub.style.flex = "0 0 " + results["lc_window_size"].toString() + "px";
    //   }
    //   if (results["lc_orientation"]) {
    //     container.style.flexDirection = results["lc_orientation"];
    //   }
    // })

    //Event listener when screen size change
    window.addEventListener("resize", setContainer)
  }
}, 500);

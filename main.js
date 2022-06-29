// let browser = (browser) ? browser : chrome.browser;



const interval = setInterval(() => {
  const container = document.querySelector("#app div[class^='container__']");

  if (container) {
    const sub = document.querySelector("#app div[class^='container__'] > div");
    const header = document.querySelector("div[class^='header__']");

    // Clear Running Interval
    clearInterval(interval);

    // Enter full size mode
    if (header) {
      header.dataset.status = "exited";
    }

    const setContainer = () => {
      const value = (screen.height > screen.width) ? "column" : "row";
      container.style.flexDirection = value;
      browser.storage.local.set({
        lc_orientation: value
      })
    }
    setContainer();

    // Check storage
    browser.storage.local.get().then((results) => {
      if (results["lc_window_size"] !== undefined) {
        sub.style.flex = "0 0 " + results["lc_window_size"].toString() + "px";
      }
      // if (results["lc_orientation"]) {
      //   container.style.flexDirection = results["lc_orientation"];
      // }
    })

    //Event listener when screen size change
    window.addEventListener("resize", setContainer)
  }
}, 500);

const diffInterval = setInterval(() => {
    const difficulty = document.querySelector("#app div[class^='description__'] > div > div:nth-child(2) > div");

    // Clear Running Interval
    // Hide difficulty
    if (difficulty) {
      clearInterval(diffInterval);
      difficulty.style.opacity = 0;
    }
}, 500)

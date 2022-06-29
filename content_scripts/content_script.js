(function() {
    // let browser = (browser) ? browser : chrome.browser;

    // Prevent duplicate injection of content script
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;

    // Update Description box size and save the value to storage
    const sub = document.querySelector("#app div[class^='container__'] > div");
    function scale(value) {
      sub.style.flex = "0 0 " + value.toString() + "px";

      browser.storage.local.set({
        lc_window_size: value
      })
    }

    // Listening to message from popup.js
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "scale") {
        scale(message.value);
      }
      else if (message.command === "switch") {
        const container = document.querySelector("#app div[class^='container__']");
        const value = container.style.flexDirection;
        container.style.flexDirection = (value == "column") ? "row" : "column";
        // browser.storage.local.set({
        //   lc_orientation: container.style.flexDirection
        // })
      }
    });
})()

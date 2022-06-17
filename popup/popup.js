const slider = document.querySelector(".slider");
slider.min = "0";
slider.max = screen.height;

// Send Message to Content Script to scale the Description Container or Reset the view
function send(command, value=null) {
   browser.tabs.query({active: true, currentWindow: true})
    .then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        command: command,
        value: value
      });
    })
}

// Check Storage for previously set scale value
browser.storage.local.get("lc_window_size").then((results) => {
  slider.value = results["lc_window_size"]
})


// Listener for slider and switch
function listener() {
  document.querySelector(".slider").addEventListener("change", (e) => {
    send("scale", e.target.value);
  });
  document.querySelector(".switch").addEventListener("click", (e) => {
    send("switch");
  })
}


browser.tabs.executeScript({
  file: "/content_scripts/content_script.js"
})
.then(listener)

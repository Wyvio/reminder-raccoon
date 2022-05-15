const generateTasks = require('stuff2.mjs');

document.addEventListener("click", function(e) {
  // if (!e.target.classList.contains("change-text")) {
  //   return;
  // }

  document.querySelector(".change-text").textContent = generateTasks();

  // browser.tabs.create({
  //   url: "https://google.com"
  // });

});
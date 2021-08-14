const we = document.getElementById("weather");
const not = document.getElementById("notePad");
// const cal = document.getElementById("calulator");
const co = document.getElementById("coding");
let selected = "";
if (we) {
  we.addEventListener("click", () => {
    localStorage.setItem("extentionIs", "weather");
    selected = "weather Extention";
  });
}

not.addEventListener("click", () => {
  localStorage.setItem("extentionIs", "notePad");
  selected = "note pad extension";
});

// cal.addEventListener("click", () => {
//   localStorage.setItem("extentionIs", "calculator");
// });

co.addEventListener("click", () => {
  localStorage.setItem("extentionIs", "coding");
  selected = "contest extention";
});

let notify = {
  type: "basic",
  title: "extention changed",
  masssage: `u have selected ${selected}`,
};
// addEventListener("click", () => {
//   chrome.notification.create("notify", notify);
// });
document.querySelector("div").addEventListener("click", () => {
  chrome.runtime.sendMessage("", {
    type: "notification",
    options: {
      title: "extention changed",
      message: `u have selected ${selected}`,
      iconUrl: "coding.png",
      type: "basic",
    },
  });
});

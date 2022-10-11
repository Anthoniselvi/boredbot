// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("img-box").innerHTML = `
//             <img src="${data.message}" />
//             `;
//   });

// fetch("https://www.boredapi.com/api/activity")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("activity-name").textContent = data.activity;
//   });

document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
      document.body.classList.add("fun");
    });
});

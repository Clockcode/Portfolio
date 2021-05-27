// var cards = document.querySelectorAll(".card");

// anime({
//   targets: ".card",
//   opacity: "0",
//   duration: "5000",
//   easing: "easeInOutQuad",
// });
$(document).ready(function () {
  function removeLoading() {
    anime.timeline({}).add({
      targets: ".loader-container",
      opacity: [1, 0],
      easing: "easeInExpo",
      zIndex: {
        value: -1,
      },
      duration: 1000,
    });
    async function demo() {
      await new Promise((r) => setTimeout(r, 5000));
      let loaderContainer = document.querySelector(".loader-container");
      loaderContainer.parentElement.removeChild(loaderContainer);
    }

    demo();
  }

  removeLoading();
});

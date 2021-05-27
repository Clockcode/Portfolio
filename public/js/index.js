// var cards = document.querySelectorAll(".card");

// anime({
//   targets: ".card",
//   opacity: "0",
//   duration: "5000",
//   easing: "easeInOutQuad",
// });
$(document).ready(() => {
  // Removes Loading
  const removeLoading = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    let loaderContainer = document.querySelector(".loader-container");
    loaderContainer.parentElement.removeChild(loaderContainer);
  };

  anime({
    targets: ".loader-container",
    opacity: [1, 0],
    easing: "easeInExpo",
    zIndex: {
      value: -1,
    },
    duration: 1000,
  });

  removeLoading();

  //   timeline created
  let t1 = anime.timeline({
    easing: "easeInExpo",
  });

  // hi! text gets bigger from the void
  t1.add({
    targets: ".animated-letter",
    scale: [0, 1],
    elasticity: 200,
    delay: anime.stagger(400),
    offset: "-=300",
    duration: 1500,
  });

  let targetWidth = 768;

  if ($(window).width() >= targetWidth) {
    //Add your javascript for screens wider than or equal to 768 here

    // Links are coming from left of the screen.
    t1.add(
      {
        targets: ".intro__link",
        translateX: [-150, 0],
        duration: 1500,
      },
      "-=1500"
    );
  } else {
    //Add your javascript for screens smaller than 768 here
  }
});

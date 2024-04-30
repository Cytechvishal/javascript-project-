(function(){

    let chck_if_gsap_loaded = setInterval(function(){
      const eleBuilder = document.querySelector('body').classList.contains("elementor-editor-active");
       if(window.gsap && window.ScrollTrigger && !eleBuilder){
            gsap.registerPlugin(ScrollTrigger);

            hover_card()

            clearInterval(chck_if_gsap_loaded);
        }
    }, 500);

function hover_card() {
  const cardContainers = document.querySelectorAll(".card-container");

  cardContainers.forEach((cardContainer) => {
    let tl = gsap.timeline({ paused: true, timeScale: 4 });
    tl.to(cardContainer.querySelector(".card-overlay"), { backgroundColor: "rgba(0, 0, 0, 0.5)", duration: 0.5 })
      .fromTo(cardContainer.querySelector(".card-headline"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.4")
      .fromTo(cardContainer.querySelector(".elementor-divider-separator"), { width: "0%" }, { width: "22%", duration: 0.8 }, "<")
      .fromTo(cardContainer.querySelector(".card-des"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.4")
      .fromTo(cardContainer.querySelector(".card-btn"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });

    cardContainer.addEventListener("mouseenter", () => {
      tl.play();
    });

    cardContainer.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  });
}




})();

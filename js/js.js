document.addEventListener("DOMContentLoaded", () => {
  //Mobile Menu button toggler
  //Mobile Menu button toggler
  //Mobile Menu button toggler
  const menuButton = document.querySelector(".nav__MobileBtn");
  const menu = document.querySelector(".nav__MobileUl");
  const menuBackDrop = document.querySelector(".nav__MobileBackdrop");
  let menuBtnClickable = true;
  let menuOpen = false;
  function toggleClickable() {
    if (menuBtnClickable === false) {
      menuBtnClickable = true;
    }
  }

  menuButton.addEventListener("click", () => {
    if (!menuBtnClickable) {
      return;
    }
    if (menuOpen === false) {
      toggleClickable();
      menu.classList.remove("nav__MobileUl--hidden");
      menuBackDrop.classList.add("displayBlock");
      toggleClickable();
      menuOpen = true;
    } else if (menuOpen === true) {
      toggleClickable();
      menu.classList.add("nav__MobileUl--hidden");
      menuBackDrop.classList.remove("displayBlock");
      menuOpen = false;
      toggleClickable();
    }
  });
  menuBackDrop.addEventListener("click", () => {
    toggleClickable();
    menu.classList.add("nav__MobileUl--hidden");
    menuBackDrop.classList.remove("displayBlock");
    menuOpen = false;
    toggleClickable();
  });

  // Featerues slider based on animation in div which have overflow set to hidden and gives higher z-index slides that should be active/visible for user
  // Featerues slider based on animation in div which have overflow set to hidden and gives higher z-index slides that should be active/visible for user
  // Featerues slider based on animation in div which have overflow set to hidden and gives higher z-index slides that should be active/visible for user
  const slideChangeDuration = 1000;
  const featureItems = Array.from(
    document.querySelectorAll(".features__featureListItem")
  );

  featureItems.forEach((item) =>
    item.setAttribute(
      `style`,
      `transition:transform ${slideChangeDuration}ms ease;
    animation-duration: ${slideChangeDuration}ms`
    )
  );

  const nextButton = document.querySelector(".feature__nextSlideBtn");
  const prevButton = document.querySelector(".feature__prevSlideBtn");

  let featureSlideClickable = true;
  let active;
  let newActive;

  function sliderButtonsClickable() {
    featureSlideClickable = !featureSlideClickable;
  }

  function changeSlide(forward) {
    if (!featureSlideClickable) {
      return;
    }

    sliderButtonsClickable();
    active = document.querySelector(".features__featureListItem--active");
    let activeIndex = featureItems.indexOf(active);

    if (forward === true) {
      newActive = featureItems[(activeIndex + 1) % featureItems.length];
      active.classList.add("slideToRight");
      newActive.classList.add("features__featureListItem--active");
      active.addEventListener("animationend", () => {
        active.classList.remove(
          "features__featureListItem--active",
          "slideToRight"
        );

        active.classList.add("slideFromRight");
        active.addEventListener("animationend", () => {
          active.classList.remove("slideFromRight");
        });
      });

      setTimeout(sliderButtonsClickable, 2050);
      /* Because there are 2 transition/animation, adding second event listener that checks if second transitions has ended to makes slider clickable again does not work,
        (second listener also initiliazed after first transition - makes the slider buggy when user clic after first animation), so there timeout that change clickable value to true after time of animation*/
    } else {
      newActive =
        featureItems[
          (activeIndex + featureItems.length - 1) % featureItems.length
        ];

      active.classList.add("slideToLeft");
      active.addEventListener("animationend", () => {
        active.classList.remove(
          "features__featureListItem--active",
          "slideToLeft"
        );
        active.classList.add("slideFromLeft");
        active.addEventListener("animationend", () => {
          active.classList.remove("slideFromLeft");
        });
      });

      newActive.classList.add("features__featureListItem--active");
      setTimeout(sliderButtonsClickable, 2050);
    }
  }

  nextButton.addEventListener("click", () => changeSlide(true));
  prevButton.addEventListener("click", () => changeSlide(false));

  // Testiomonials Slider
  // Testiomonials Slider
  // Testiomonials Slider

  const testimonials = document.querySelector(".testimonials__wrapper");
  testimonials.addEventListener("transitionend", () => {
    clickableForTestimionals = true;
  });
  let clickableForTestimionals = true;

  const slideLeftButton = document.querySelector(
    ".testimonials__slideButton--previousSlide"
  );
  const slideRightButton = document.querySelector(
    ".testimonials__slideButton--nextSlide"
  );

  const dotsArray = Array.from(
    document.querySelectorAll(".testimonials__sliderDot")
  );

  function changeActiveDot(lastActive, currentActive) {
    dotsArray[lastActive].classList.remove("testimonials__sliderDot--active");
    dotsArray[currentActive].classList.add("testimonials__sliderDot--active");
  }

  function slideLeft() {
    if (currentTestimonialsSlide === 0) {
      return;
    } else {
      currentSliderTranslateValue += 25;
      testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
      currentTestimonialsSlide--;
      changeActiveDot(currentTestimonialsSlide + 1, currentTestimonialsSlide);
    }
  }

  function slideRight() {
    if (currentTestimonialsSlide === 3) {
      return;
    } else {
      currentSliderTranslateValue -= 25;
      testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
      currentTestimonialsSlide++;
    }
    changeActiveDot(currentTestimonialsSlide - 1, currentTestimonialsSlide);
  }

  let currentTestimonialsSlide = 0;
  let currentSliderTranslateValue = 0;

  slideLeftButton.addEventListener("click", () => {
    slideLeft();
  });
  slideRightButton.addEventListener("click", () => {
    slideRight();
  });

  dotsArray.forEach((element, index) => {
    element.addEventListener("click", () => {
      //index === slider to display
      if (clickableForTestimionals === true) {
        clickableForTestimionals = false;
        switch (index) {
          case 0:
            currentSliderTranslateValue = 0;
            testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
            changeActiveDot(currentTestimonialsSlide, index);
            currentTestimonialsSlide = index;
            break;
          case 1:
            currentSliderTranslateValue = -25;
            testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
            changeActiveDot(currentTestimonialsSlide, index);
            currentTestimonialsSlide = index;
            break;

          case 2:
            currentSliderTranslateValue = -50;
            testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
            changeActiveDot(currentTestimonialsSlide, index);
            currentTestimonialsSlide = index;
            break;
          case 3:
            currentSliderTranslateValue = -75;
            testimonials.style.transform = `translate(${currentSliderTranslateValue}%)`;
            changeActiveDot(currentTestimonialsSlide, index);
            currentTestimonialsSlide = index;
            break;
        }
      }
    });
  });
});

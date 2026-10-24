(function () {
  const MOVE_ANIMATION_CLASS = "move";
  const IMAGE_ID = "ex6_element_img";
  const BUTTON_ID = "ex6_animate_button";

  const BUTTON_VALUES = ["Przesuń", "Stop"];

  const image = document.getElementById(IMAGE_ID);
  const button = document.getElementById(BUTTON_ID);

  if (!image || !button) {
    console.error("Button or image not found");
    return;
  }

  function resetAnimation() {
    image.classList.remove(MOVE_ANIMATION_CLASS);
    button.textContent = BUTTON_VALUES[0];
  }

  button.addEventListener("click", () => {
    const isAnimating = image.classList.contains(MOVE_ANIMATION_CLASS);

    if (isAnimating) {
      resetAnimation();
    } else {
      image.classList.add(MOVE_ANIMATION_CLASS);
      button.textContent = BUTTON_VALUES[1];
    }
  });

  image.addEventListener("animationend", resetAnimation);
})();

(function () {
  const MOVE_ANIMATION_CLASS = "move";
  const IMAGE_ID = "ex6_element_img";
  const BUTTON_ID = "ex6_animate_button";
  const EX4_BUTTON_ID = "ex4_button";

  const image = document.getElementById(IMAGE_ID);
  const button = document.getElementById(BUTTON_ID);
  const backgroundButton = document.getElementById(EX4_BUTTON_ID);

  const BUTTON_VALUES = ["Przesuń", "Stop"];
  const aestheticColors = [
    // 🌸 Japanese / Sakura
    "#F2B8C6", // Sakura pink
    "#E8AEB7", // Dusty rose
    "#F5E6CC", // Warm cream
    "#B8C0D9", // Wisteria
    "#8C9A8B", // Matcha green

    // 🌿 Nature / Sage
    "#A3B18A", // Sage
    "#588157", // Forest green
    "#DAD7CD", // Soft stone
    "#C9ADA7", // Muted clay
    "#6B705C", // Olive

    // 🌌 Midnight / Dreamy
    "#22223B", // Midnight indigo
    "#4A4E69", // Dusty blue
    "#6D597A", // Muted purple
    "#9A8C98", // Lavender gray
    "#C9ADA7", // Dusty mauve

    // ☕ Dark academia
    "#3D2B1F", // Espresso
    "#795548", // Mocha
    "#A98467", // Camel
    "#DDBEA9", // Sand
    "#F5EBE0", // Antique white

    // 🫧 Cool / Minimalist
    "#D6E6F2", // Ice blue
    "#A9BCD0", // Steel blue
    "#7C9CB5", // Muted blue
    "#6C91BF", // Cornflower blue
    "#344966", // Deep navy

    // 🌷 Soft accents
    "#FFC8DD", // Cotton candy
    "#CDB4DB", // Soft lilac
    "#BDE0FE", // Baby blue
    "#A2D2FF", // Sky blue
    "#CAFFBF", // Pastel mint
  ];
  let randomBackgroundColorID;

  if (!image || !button || !backgroundButton) {
    console.error("Buttons or image not found");
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

  backgroundButton.addEventListener("click", () => {
    randomBackgroundColorID = Math.floor(
      Math.random() * aestheticColors.length,
    );
    document.body.style.backgroundColor =
      aestheticColors[randomBackgroundColorID];
  });

  image.addEventListener("animationend", resetAnimation);
})();

(function () {
  const HTML_IDS = {
    ANIMATED_IMAGE: "ex6_element_img",
    MOVE_BUTTON: "ex6_animate_button",
    BACKGROUND_BUTTON: "ex4_button",
    PHONE_INPUT: "ex2_text",
    PHONE_INPUT_COUNTER: "ex2_text_counter",
    TIMER_BUTTON: "ex6_button",
    TIMER_CONTENT: "ex6_content",
  } as const;

  const MOVE_ANIMATION_CLASS = "move";

  const image = getElement<HTMLImageElement>(HTML_IDS.ANIMATED_IMAGE);
  const button = getElement<HTMLButtonElement>(HTML_IDS.MOVE_BUTTON);
  const backgroundButton = getElement<HTMLButtonElement>(
    HTML_IDS.BACKGROUND_BUTTON,
  );
  const textElement = getElement<HTMLInputElement>(HTML_IDS.PHONE_INPUT);
  const textCounterElement = getElement<HTMLSpanElement>(
    HTML_IDS.PHONE_INPUT_COUNTER,
  );
  const timerButton = getElement<HTMLButtonElement>(HTML_IDS.TIMER_BUTTON);
  const timerContent = getElement<HTMLSpanElement>(HTML_IDS.TIMER_CONTENT);

  const MOVE_BUTTON_VALUES = ["Przesuń", "Stop"] as const;
  const aestheticColors: string[] = [
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
  ] as const;
  let randomBackgroundColorID: number;
  let timerInterval: ReturnType<typeof setInterval> | null = null;
  let counter: number = 0;

  function getElement<T extends HTMLElement>(elementId: string): T {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Nie znaleziono elementu o ID: ${elementId}`);
    }
    return element as T;
  }
  function setTextCounterElement(textCounter: number): void {
    textCounterElement.textContent = String(textCounter);
  }

  function resetAnimation(): void {
    image.classList.remove(MOVE_ANIMATION_CLASS);
    button.textContent = MOVE_BUTTON_VALUES[0];
  }

  function handleTimer(): void {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerButton.textContent = "Start";
    } else {
      timerButton.textContent = "Stop";
      timerInterval = setInterval(() => {
        counter++;
        timerContent.textContent = String(counter);
      }, 1000);
    }
  }

  timerButton.addEventListener("click", handleTimer);

  textElement.addEventListener("input", (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    setTextCounterElement(input.value.length);
  });
  button.addEventListener("click", () => {
    const isAnimating = image.classList.contains(MOVE_ANIMATION_CLASS);

    if (isAnimating) {
      resetAnimation();
    } else {
      image.classList.add(MOVE_ANIMATION_CLASS);
      button.textContent = MOVE_BUTTON_VALUES[1];
    }
  });

  backgroundButton.addEventListener("click", () => {
    randomBackgroundColorID = Math.floor(
      Math.random() * aestheticColors.length,
    );
    const randomColor = aestheticColors[randomBackgroundColorID];
    if (randomColor !== undefined) {
      document.body.style.backgroundColor = randomColor;
    }
  });

  image.addEventListener("animationend", resetAnimation);
})();

import * as COLORS from "./colors";

const collections = [
  "RED",
  "PINK",
  "PURPLE",
  "DEPP_PURPLE",
  "INDIGO",
  "BLUE",
  "LIGHT_BLUE",
  "CYAN",
  "TEAL",
  "GREEN",
  "LIGHT_GREEN",
  "LIME",
  "YELLOW",
  "AMBER",
  "ORANGE",
  "DEEP_ORANGE",
  "BROWN",
  "GREY",
  "BLUE_GREY",
];

function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorDice() {
  return collections[dice(0, collections.length - 1)];
}

export default function colorDiceGen({ isLight = false, isDark = false } = {}) {
  const mainSelectedColor = COLORS[colorDice()];

  let from = 0;
  let to = mainSelectedColor.length - 1;

  if (isLight) {
    to = 4;
  } else if (isDark) {
    from = 4;
  }

  return mainSelectedColor[dice(from, to)];
}

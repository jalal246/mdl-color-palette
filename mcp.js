import { COLORS, COLORS_JSON } from './constants';

// https://stackoverflow.com/a/1527820/6348157

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorDice() {
  return COLORS[dice(0, COLORS.length - 1)];
}

function getColor(color) {
  const ar = COLORS_JSON[color.trim().toUpperCase()];
  return Array.isArray(ar) ? ar : [];
}

export default function colorGen({
  color,
  islight = false,
  isDark = false
} = {}) {
  let selected;
  if (color) {
    selected = getColor(color);
    if (selected.length === 0) {
      selected = colorDice();
    }
  } else {
    selected = colorDice();
  }

  let from = 0;
  let to = selected.length - 1;
  if (islight) {
    to = 4;
  } else if (isDark) {
    from = 4;
  }

  return selected[dice(from, to)];
}

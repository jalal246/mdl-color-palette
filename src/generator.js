// Used once to generate json file

import fs from "fs";
import * as colors from "./colors";

const colorKeys = Object.keys(colors);

const numbers = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const allPallet = {};

(function gen() {
  colorKeys.forEach((colorKey) => {
    const name = colorKey.toLowerCase().replace("_", "-");

    colors[colorKey].forEach((colorHex, i) => {
      allPallet[`${name}-${numbers[i]}`] = colorHex;
    });
  });

  fs.writeFileSync("./src/colors.json", JSON.stringify(allPallet));
})();

import * as colorsJson from "../src/colors.json";
import * as colorsArray from "../src/colors";

import { colorDice } from "../dist/mdlColorPalette.cjs";
import colors from "../dist/colors.json";

describe("Test all palette in source", () => {
  it("Tests palette generated in JSON", () => {
    expect(colorsJson).toMatchSnapshot();
  });
  it("Tests palette exists in row data", () => {
    expect(colorsArray).toMatchSnapshot();
  });
});

describe("Test randomness in color dice", () => {
  it("Gets random color", () => {
    expect(colorDice()).toBeTruthy();
  });

  it("Gets random light color", () => {
    expect(colorDice({ isLight: true })).toBeTruthy();
  });

  it("Gets random dark color", () => {
    expect(colorDice({ isDark: true })).toBeTruthy();
  });
});

describe("Test colors pallet in Json", () => {
  it("returns correct value", () => {
    expect(colors["amber-300"]).toBe("#ffd54f");
  });
});

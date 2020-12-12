/* eslint-env mocha */

import chai from "chai";

import { colorGen, colors } from "./src";

const all = RED.concat(
  PINK,
  PURPLE,
  DEPP_PURPLE,
  INDIGO,
  BLUE,
  LIGHT_BLUE,
  CYAN,
  TEAL,
  GREEN,
  LIGHT_GREEN,
  LIME,
  YELLOW,
  AMBER,
  ORANGE,
  DEEP_ORANGE,
  BROWN,
  GREY,
  BLUE_GREY
);

const { expect } = chai;

describe.only("#color", () => {
  it("array of targeted color", () => {
    expect(RED).to.be.an("array").that.includes("#d32f2f");
  });
  it("random color", () => {
    // wrong color
    expect(colorGen({ color: "redy" })).to.be.oneOf(all);

    // empty color
    expect(colorGen()).to.be.oneOf(all);
  });

  it("random gradient for wrong color input", () => {
    expect(colorGen({ color: "red" })).to.be.oneOf(RED);
  });
  it("light random gradient for specific color", () => {
    expect(colorGen({ color: "red", islight: true })).to.be.oneOf(
      RED.slice(0, RED.length / 2)
    );
  });
  it("dark random gradient for specific color", () => {
    expect(colorGen({ color: "red", isDark: true })).to.be.oneOf(
      RED.slice(0 / 2, RED.length)
    );
  });
});

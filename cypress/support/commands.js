import { rgbToHex } from "../../utils";

Cypress.Commands.add("checkThemeColor", (rgb, themeColor) => {
  const hexColor = rgbToHex(rgb);
  expect(hexColor).to.equal(themeColor);
});

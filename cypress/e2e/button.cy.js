describe("button spec", () => {
  const pramary = "#409EFF";
  const success = "#67C23A";
  const warning = "#E6A23C";
  const danger = "#F56C6C";
  const info = "#909399";

  it("check button color", () => {
    cy.visit("/component/button");
    cy.get(".example").eq(0).as("content");

    cy.get("@content")
      .find("button")
      .eq(1)
      .should("have.css", "background-color")
      .then((color) => {
        cy.checkThemeColor(color, pramary);
      });

    cy.get("@content")
      .find("button")
      .eq(2)
      .should("have.css", "background-color")
      .then((color) => {
        cy.checkThemeColor(color, success);
      });

    cy.get("@content")
      .find("button")
      .eq(3)
      .should("have.css", "background-color")
      .then((color) => {
        cy.checkThemeColor(color, info);
      });

    cy.get("@content")
      .find("button")
      .eq(4)
      .should("have.css", "background-color")
      .then((color) => {
        cy.checkThemeColor(color, warning);
      });

    cy.get("@content")
      .find("button")
      .eq(5)
      .should("have.css", "background-color")
      .then((color) => {
        cy.checkThemeColor(color, danger);
      });
  });
});

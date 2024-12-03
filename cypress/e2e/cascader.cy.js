describe("cascader spec", () => {
  it("open cascader page", () => {
    cy.visit("/component/cascader");

    cy.get(".example").last().as("content");
    cy.get("@content").find(".el-cascader-panel").as("panel");

    cy.get("@panel")
      .find(".el-cascader-menu")
      .eq(0)
      .find("ul")
      .then((el) => {
        cy.wrap(el[0].children[0]).click();
        cy.wait(1000);
        cy.wrap(el[0].children[1]).click();
        cy.wait(1000);
        cy.wrap(el[0].children[2]).click();
      });
  });
});

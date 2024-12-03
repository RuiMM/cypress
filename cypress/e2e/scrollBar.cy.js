describe("scrollBar spec", () => {
  it("open scrollBar page", () => {
    cy.visit("/component/scrollbar");
    cy.get(".example")
      .eq(0)
      .as("content")
      .scrollIntoView({ easing: "linear", offset: { top: 60 } });
    cy.get("@content")
      .find(".el-scrollbar__wrap")
      .then((el) => {
        expect(Cypress.dom.isScrollable(el)).to.be.true;
      })
      .scrollTo("bottom", { easing: "linear", duration: 1000 });
  });
});

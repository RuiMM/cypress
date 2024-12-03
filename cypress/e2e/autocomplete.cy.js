describe("autocomplete spec", () => {
  it("open autocomplete page", () => {
    cy.visit("/component/autocomplete");
    cy.get(".example").eq(0).as("content");
    cy.get("@content").find(".el-autocomplete").eq(0).as("autocomplete");
    cy.get("@autocomplete")
      .type("vue")
      .then(() => {
        cy.get(".el-autocomplete-suggestion__list")
          .eq(0)
          .should("be.visible")
          .find("li")
          .then((el) => {
            expect(el[0].innerText).to.be.equal("vue");
            expect(el[1].innerText).to.be.equal("vuex");
            expect(el[2].innerText).to.be.equal("vue-router");
          });
      });
  });
});

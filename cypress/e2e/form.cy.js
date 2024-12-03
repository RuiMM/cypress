import dayjs from "dayjs";

describe("Form spec", () => {
  it("should submit the form", () => {
    cy.visit("/component/form");
    cy.get("#表单校验").scrollIntoView();

    cy.get(".example").eq(3).as("content");

    cy.log("start Activity name");
    cy.get("@content")
      .find(".el-form-item")
      .eq(0)
      .find(".el-input__inner")
      .as("activityName");
    cy.get("@activityName").clear().type("hello");
    cy.log("end Activity name");

    cy.log("start Activity zone");
    cy.get("@content")
      .find(".el-form-item")
      .eq(1)
      .find(".el-select__wrapper")
      .click();
    cy.get(".el-select-dropdown__item").eq(4).click({ force: true });
    cy.log("end Activity zone");

    cy.log("start Activity Count");
    cy.get("@content")
      .find(".el-form-item")
      .eq(2)
      .find(".el-select__wrapper")
      .click();
    cy.get(".el-select-dropdown__item").eq(8).click({ force: true });
    cy.log("end Activity Count");

    cy.log("start Activity time");
    cy.get("@content").find(".el-form-item").eq(3).as("activityTime");
    const date = dayjs().format("YYYY-MM-DD");
    const time = dayjs().format("HH:mm:ss");
    cy.get("@activityTime")
      .find(".el-input__inner")
      .eq(0)
      .clear()
      .type(`${date}`);
    cy.get("@activityTime")
      .find(".el-input__inner")
      .eq(1)
      .clear()
      .type(`${time}`);
    cy.log("end Activity time");

    cy.log("start Activity location");
    cy.get("@content")
      .find(".el-form-item")
      .eq(7)
      .find(".el-segmented__item")
      .eq(1)
      .click();
    cy.log("end Activity location");

    cy.log("start Activity type");
    cy.get("@content")
      .find(".el-form-item")
      .eq(8)
      .find(".el-checkbox")
      .eq(2)
      .click();
    cy.log("end Activity type");

    cy.log("start Resources");
    cy.get("@content")
      .find(".el-form-item")
      .eq(9)
      .find(".el-radio")
      .eq(0)
      .click();
    cy.log("end Resources");

    cy.log("start Activity form");
    cy.get("@content")
      .find(".el-form-item")
      .eq(10)
      .find(".el-textarea__inner")
      .clear()
      .type("cypress");
    cy.log("end Activity form");

    cy.log("start Create");
    cy.get("@content").contains("Create").click();
    cy.log("end Create");
  });
});

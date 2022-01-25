import SkillPage from "../../pages/DevSkills";

const InputLabels = Object.freeze([
  "Skill Name",
  "Developers",
  "Technologies",
  "Roles",
]);

const API = "https://61ef27ddd593d20017dbb332.mockapi.io/skills";

describe("Skills Page", () => {
  beforeEach(() => {
    SkillPage.load();
  });

  it("should assert page title", () => {
    SkillPage.getPageTitle().should("be.visible").contains("Developers App");
  });

  it("should validate input labels", () => {
    SkillPage.getAllLabels().each(($el) => {
      expect(InputLabels).to.contain($el.text());
    });
  });

  it("should assert if inputs does not exceed the maximum character value", () => {
    SkillPage.getAllInputs().each(($el) => {
      cy.wrap($el)
        .type(
          "foo buzz fizzz foo buzz fizzz foo buzz fizzz foo buzz fizzz foo buzz fizzz"
        )
        .invoke("val")
        .should("have.length", 60);
    });
  });

  it("should fill all form fields and add a new skill", () => {
    cy.intercept("POST", API).as("addNewSkill");
    cy.intercept("GET", API).as("getAllSkills");

    SkillPage.getAllInputs().each(($el, index) => {
      cy.wrap($el).type(`test_${index}`);
    });
    SkillPage.getSubmitButton().click();

    cy.wait("@addNewSkill");
    cy.wait("@getAllSkills");

    SkillPage.getSkillListContainer().should("be.visible");

    SkillPage.getSkillListContent()
      .last()
      .find("span")
      .each(($el, index) => {
        cy.wrap($el).should("have.text", `test_${index}`);
      });
  });
});

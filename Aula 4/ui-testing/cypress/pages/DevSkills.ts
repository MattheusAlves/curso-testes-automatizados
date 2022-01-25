import AbstractPage from "./AbstractPage";

class SkillPage extends AbstractPage {
  load() {
    cy.visit("http://localhost:3000/");

    return this;
  }

  getPageTitle() {
    return this.getByTestId("page-title");
  }

  getFormContainer() {
    return cy.get("[data-testid='skill-container'");
  }

  getAllLabels() {
    return this.getFormContainer().find("label");
  }

  getAllInputs() {
    return this.getFormContainer().find("input");
  }

  getSubmitButton() {
    return this.getByTestId("btn-add-skill");
  }

  getSkillListContainer() {
    return this.getByTestId("skills-list");
  }

  getSkillListContent() {
    return this.getSkillListContainer().find(">div");
  }
}

export default new SkillPage();

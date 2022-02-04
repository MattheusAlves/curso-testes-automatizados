class SkillPage {
  load() {
    cy.visitLocalHost();

    return this;
  }

  getPageTitle() {
    return cy.getPageTitle();
  }

  getFormContainer() {
    return cy.getByTestId("skill-container");
  }

  getAllLabels() {
    return this.getFormContainer().find("label");
  }

  getAllInputs() {
    return this.getFormContainer().find("input");
  }

  getSubmitButton() {
    return cy.getByTestId("btn-add-skill");
  }

  getSkillListContainer() {
    return cy.getByTestId("skills-list");
  }

  getSkillListContent() {
    return this.getSkillListContainer().find(">div");
  }
}

export default new SkillPage();

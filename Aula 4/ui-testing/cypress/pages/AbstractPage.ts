class AbstractPage {
  getByTestId(testId: string) {
    return cy.get(`[data-testid="${testId}"]`);
  }
}
export default AbstractPage;

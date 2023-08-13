/// <>
describe("Login test cases", () => {
  before(() => {
    cy.fixture("example.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Login with valid email & valid password", () => {
    cy.LoginToAcc(data.username, data.password);
  });
});

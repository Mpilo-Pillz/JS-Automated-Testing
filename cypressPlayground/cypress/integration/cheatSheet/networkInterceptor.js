import { When } from "cypress-cucumber-preprocessor/steps";

When(
  "I intercept the {string} on application to get {string} as status code and {string} as message",
  (button, statusCode, message) => {
    cy.intercept(
      "https://localhost:3000/todo",
      {
        statusCode: parseInt(statusCode),
        body: [`${message}`],
      }
    );

    cy.getElementByDataTestId(button).click();
  }
);

When(
  "I click {string} to intercept the request with mock object {string}",
  (element, jsonFile) => {
    cy.intercept(
      "POST",
      "https://localhost:3000/todo/",
      {
        statusCode: 201,
        fixture: `${jsonFile}.json`,
      }
    ).as("todoAdded");

    cy.getElementByDataTestId(element).click();
    cy.wait("@todoAdded");
  }
);

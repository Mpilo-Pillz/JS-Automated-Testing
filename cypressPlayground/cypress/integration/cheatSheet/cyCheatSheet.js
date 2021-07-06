describe("List of Commands to test effectivly", () => {
  it("should invoke the browser and visit page", () => {
    cy.visit("https://test.villageweb.co.za/");
    cy.get("tagnmae#idNAme");

    cy.get("tagname.className.classNAme");
    cy.get("tagNAme[attribute=value]").type("smething");
    cy.get("tagNAme childTagname"); //"- traversing"
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4); // incase there are some invisible elements
    cy.wait(2000);
    cy.get(".products").find(".fruit").should("have.lenth", 10); // inside products, find 'fruit' should have a list of 4 fruits
    cy.pause();
    cy.get(".products")
      .find(".fruit")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .debug(); // checks for the second (might click the 3rd) item on the search and gets  it add to card button
  });
});

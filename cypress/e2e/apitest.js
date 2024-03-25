///<reference types="Cypress"/>

describe("API TESTING", () => {
    
  it("GET CALL", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("POST CALL", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "test post",
        body: "this is post call",
        userId: 2,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("PUT CALL", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "test post",
        body: "this is post call",
        userId: 2,
        id: 1,
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("DELETE CALL", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });
});

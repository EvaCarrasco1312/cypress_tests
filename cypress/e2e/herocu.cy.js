describe('template spec', () => {
  it('test de login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")

  })
  it('test de login no valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith") 
    cy.get('#password').type("SuperSecretPassword")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  })
  it('test de login no valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  })
  it('test de login no valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
    

  }) 

})
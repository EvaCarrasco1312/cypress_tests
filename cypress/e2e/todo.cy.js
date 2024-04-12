describe("agregar tareas", () => {
 it("agregar una tarea a la lista", () => {
       cy.visit("https://todomvc.com/examples/react/dist/")
       cy.get('[data-testid="text-input"]').type('Tarea 01{enter}')
       
    })
it("marcar tarea como completa", () => {
  cy.visit("https://todomvc.com/examples/react/dist/")
  cy.get('[data-testid="text-input"]').type('Tarea 01{enter}')
  cy.get('[data-testid="todo-item-toggle"]').click()
  
})
it("desmarcar tarea completa", () => {
    cy.visit("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type('Tarea 01{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()

})
it("editar tarea", () => {
    cy.visit("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type('Tarea 02{enter}')

})

it.only("borrar tarea", () => {
    cy.visit("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type('Peppa Pig{enter}')
    cy.get('button.destroy').click({force:true})
    
})

it("filtrar tarea", () => {
    cy.visit("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type('Peppa Pig{enter}')
    cy.get('[data-testid="text-input"]').type('George{enter}')
    cy.get('[data-testid="text-input"]').type('Mamá Pig{enter}')
    cy.get('[data-testid="text-input"]').type('Papá Pig{enter}')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get(':nth-child(2) > a').click()
    cy.get(':nth-child(1) > a').click()


})  


})


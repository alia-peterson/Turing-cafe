describe('Turing Cafe', () => {
  const baseURL = 'http://localhost:3000'

  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations')
      .get('input[name="name"]')
      .get('input[name="date"]')
      .get('input[name="time"]')
      .get('input[name="guests"]')
  })

  it('Should be able to enter reservation information', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations')
      .get('input[name="name"]').type('Alia').should('have.value', 'Alia')
      .get('input[name="date"]').type('02/25').should('have.value', '02/25')
      .get('input[name="time"]').type('6:30').should('have.value', '6:30')
      .get('input[name="guests"]').type(2).should('have.value', 2)
  })
})

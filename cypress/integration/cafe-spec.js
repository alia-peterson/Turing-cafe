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
})

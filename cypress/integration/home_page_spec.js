describe('Aukro poject', () => {
  it('successfully loads', () => {
    cy.visit('https://aukro.cz/') // change URL to match your dev URL

    cy.get('scg-icon').should('id', 'logo')

        cy.get('#scrollable-both').scrollTo('75%', '25%')
  })
})

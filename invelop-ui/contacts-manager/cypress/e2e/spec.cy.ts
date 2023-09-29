describe('Contact Details', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Contact details')
  })

  it('Creates a contact detail', () => {
    cy.visit('/');
    cy.get('[data-test-id="btn-new"]').click();
    cy.contains('Create contact detail');
    cy.get('[data-test-id="add-first-name"]').type('Velina Test');
    cy.get('[data-test-id="add-surname"]').type('Tasheva Test');
    cy.get('[data-test-id="btn-add-contact-detail"]').click();
    cy.contains('Velina Test');
    cy.contains('Tasheva Test');
  });

  it('Deletes a contact detail', () => {
    cy.visit('/');
    cy.get('[data-test-content="Velina Test"]').parent().find('[data-test-id="btn-delete"]').click();

  });
})

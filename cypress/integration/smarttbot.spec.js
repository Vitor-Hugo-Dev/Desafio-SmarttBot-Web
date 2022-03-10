describe('Teste da pagina inicial, proposta no desafio', () => {
  it('visita a pagina inicial',() => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('to.exist');
  })
}); 
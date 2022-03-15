/* eslint-disable no-undef */
describe('Teste da pagina inicial, proposta no desafio', () => {
  describe('verifica o header',() => {
    
    it('verifica se a um header', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.header').should('to.exist').should('be.visible');
    })

    it('verifica o titulo', () => {
      const p1 = cy.get('#p1');
      p1.should('to.exist').should('be.visible');
      p1.should('contain','Análise Geral');
    })
  })
  describe('verifica o componente Resume', () => {
    it('verifica se há um componente de resumo', () => {
      cy.visit('http://localhost:3000/');
      const resume = cy.get('.resume');
      resume.should('to.exist').should('be.visible');
    })
    it('verifica o titulo', () => {
      const title = cy.get('#info1-title');
      title.should('to.exist').should('be.visible');
      title.should('contain','Resumo geral operações');
    })
  })

  describe('verifica o componente RobotCard', () => {
    it('verifica se há um componente RobotCard', () => {
      const card = cy.get('#container-card');
      card.should('to.exist').should('be.visible');
    })
    it('verifica o titulo', () => {
      const title = cy.get('#card-title');
      title.should('to.exist').should('be.visible');
    })
  })
  describe('verifica o componente Add', () => {
    it('verifica se há um componente', () => {
      const add = cy.get('#add-robot');
      add.should('to.exist').should('be.visible');
    })
    it('verifica se ao clicar em "adicionar novo robo" abre uma janela para criar o robo', () => {
      const button = cy.get('#add-robot-button')
      button.should('to.exist').should('be.visible');
      button.click();
      cy.get('.sub-container').should('to.exist').should('be.visible');
    })
  })
});
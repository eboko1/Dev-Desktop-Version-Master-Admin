class DirectoriesPage {

    checkButton= (nameButton) => {
        cy.get('.ant-btn')
          .contains(nameButton)
          .click({force: true});
        cy.get('h1')
          .should('have.text',nameButton);
    }

    checkHeader = (nameButton, nameHeader) => {
        cy.get('.ant-btn')
          .contains(nameButton)
          .click({force: true});
        cy.get('h1')
          .should('have.text',nameHeader);
    }

  
}

export default DirectoriesPage
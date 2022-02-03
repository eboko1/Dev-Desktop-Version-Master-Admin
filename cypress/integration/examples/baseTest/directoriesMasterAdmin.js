/// <reference types="cypress" />

import DirectoriesPage from '../../../support/pageObject/directoriesPage';

const directiries = new DirectoriesPage();
const baseUrl = 'https://'+Cypress.env('url')+'my.carbook.pro';



describe ('Directories & Settings|Master|Admin|Desktop|UA|', function(){
  beforeEach('User LogIn ', function(){
    cy.viewport(1240,960)  
    cy.visit(baseUrl)
      .then( function(){
          cy.get('#login.ant-input').type(Cypress.env('Login'));
          cy.get('#password').type(Cypress.env('Password')); 
        })
    cy.get('button').click()
    cy.get('img').eq(0).click({force: true}) //menu
  });

    it('Контрагенти. Клієнти', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Клієнти';  
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Автомобілі', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Автомобілі';
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Працівники', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Працівники';   
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Постачальники', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Постачальники';
      directiries.checkButton(nameButton);
    });

    it('Товари.', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Товари'; 
      directiries.checkButton(nameButton);
    });

    it('Товари. Групи товарів', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Групи товарів'; 
      directiries.checkButton(nameButton);
    });
    
    it('Товари. Цінові групи', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Цінові групи';
      directiries.checkButton(nameButton);
    });

    // // it('Товари. Повязані групи', function(){
    // //   var nameButton = 'Повязані групи';
    // //    
    // //   directiries.checkButton(nameButton);;
    // // });

    it('Товари. Склади', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Склади'; 
      directiries.checkButton(nameButton);
    });

    it('Товари. Комірки', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Комірки';
      var nameHeader = 'WMS'
      directiries.checkHeader(nameButton, nameHeader);
    });

    // // it('Товари. Одиниці виміру', function(){
    // //   var nameButton = 'Одиниці виміру';
    // //   directiries.checkButton(nameButton);;
    // // });

    it('НЗ. Роботи', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Роботи'; 
      directiries.checkButton(nameButton);
    });

    it('НЗ. Мої нормативи', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Мої нормативи'; 
      directiries.checkButton(nameButton);
    });

    // // it('НЗ. Комплекси', function(){
    // //   var nameButton = 'Комплекси';
    // //    
    // //   directiries.checkButton(nameButton);
    // // });

    // // it('НЗ. Повязані роботи', function(){
    // //   var nameButton = 'Повязані роботи';
    // //    
    // //   directiries.checkButton(nameButton);
    // // });

    it('НЗ. Карта ремонту', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Карта ремонту'; 
      directiries.checkButton(nameButton);
    });

    it('НЗ. Статуси', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Статуси';
      var nameHeader = 'Налаштування статусів запчастини'
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('НЗ. Локації', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Локації';
      directiries.checkButton(nameButton);
    });

    it('НЗ. Діагностика', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Діагностика';
      var nameHeader = 'Шаблони діагностики'
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('Бухгалтерія. Каси', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Каси';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Реквізити', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Реквізити';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Аналітика', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Аналітика';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Нумерація', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Нумерація';
      directiries.checkButton(nameButton);
    });

    it('Налаштування. Прайси постачальників', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'Прайси постачал.';
      var nameHeader = 'Налаштування наявності';
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('Налаштування. API постачальників', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'API постачальників';
      directiries.checkButton(nameButton);
    });

    it('Налаштування.СМС', function(){
      cy.visit(baseUrl+'/directories')
      var nameButton = 'СМС';
      var nameHeader = 'Налаштування SMS';
      directiries.checkHeader(nameButton, nameHeader);
    });
})


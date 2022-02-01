/// <reference types="cypress" />

import DirectoriesPage from '../../../support/pageObject/directoriesPage';

const directiries = new DirectoriesPage();
const baseUrl = 'https://'+Cypress.env('url')+'my.carbook.pro';



describe ('Directories & Settings|Master|Admin|Desktop|UA|', function(){
  beforeEach('User LogIn ', function(){
    cy.viewport(1240,960)  
    cy.login(baseUrl, Cypress.env('Login'), Cypress.env('Password'))
    cy.visit(baseUrl+'/directories');
  });

    it('Контрагенти. Клієнти', function(){
      var nameButton = 'Клієнти';  
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Автомобілі', function(){
      var nameButton = 'Автомобілі';
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Працівники', function(){
      var nameButton = 'Працівники';   
      directiries.checkButton(nameButton);
    });

    it('Контрагенти. Постачальники', function(){
      var nameButton = 'Постачальники';
      directiries.checkButton(nameButton);
    });

    it('Товари.', function(){
      var nameButton = 'Товари'; 
      directiries.checkButton(nameButton);
    });

    it('Товари. Групи товарів', function(){
      var nameButton = 'Групи товарів'; 
      directiries.checkButton(nameButton);
    });
    
    it('Товари. Цінові групи', function(){
      var nameButton = 'Цінові групи';
      directiries.checkButton(nameButton);
    });

    // // it('Товари. Повязані групи', function(){
    // //   var nameButton = 'Повязані групи';
    // //    
    // //   directiries.checkButton(nameButton);;
    // // });

    it('Товари. Склади', function(){
      var nameButton = 'Склади'; 
      directiries.checkButton(nameButton);
    });

    it('Товари. Комірки', function(){
      var nameButton = 'Комірки';
      var nameHeader = 'WMS'
      directiries.checkHeader(nameButton, nameHeader);
    });

    // // it('Товари. Одиниці виміру', function(){
    // //   var nameButton = 'Одиниці виміру';
    // //   directiries.checkButton(nameButton);;
    // // });

    it('НЗ. Роботи', function(){
      var nameButton = 'Роботи'; 
      directiries.checkButton(nameButton);
    });

    it('НЗ. Мої нормативи', function(){
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
      var nameButton = 'Карта ремонту'; 
      directiries.checkButton(nameButton);
    });

    it('НЗ. Статуси', function(){
      var nameButton = 'Статуси';
      var nameHeader = 'Налаштування статусів запчастини'
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('НЗ. Локації', function(){
      var nameButton = 'Локації';
      directiries.checkButton(nameButton);
    });

    it('НЗ. Діагностика', function(){
      var nameButton = 'Діагностика';
      var nameHeader = 'Шаблони діагностики'
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('Бухгалтерія. Каси', function(){
      var nameButton = 'Каси';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Реквізити', function(){
      var nameButton = 'Реквізити';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Аналітика', function(){
      var nameButton = 'Аналітика';
      directiries.checkButton(nameButton);
    });

    it('Бухгалтерія. Нумерація', function(){
      var nameButton = 'Нумерація';
       
      directiries.checkButton(nameButton);
    });

    it('Налаштування. Прайси постачальників', function(){
      var nameButton = 'Прайси постачал.';
      var nameHeader = 'Налаштування наявності';
      directiries.checkHeader(nameButton, nameHeader);
    });

    it('Налаштування. API постачальників', function(){
      var nameButton = 'API постачальників';
      directiries.checkButton(nameButton);
    });

    it('Налаштування.СМС', function(){
      var nameButton = 'СМС';
      var nameHeader = 'Налаштування SMS';
      directiries.checkHeader(nameButton, nameHeader);
    });
})


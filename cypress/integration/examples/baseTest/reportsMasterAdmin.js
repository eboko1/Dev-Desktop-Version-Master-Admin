/// <reference types="cypress" />

const baseUrl = 'https://'+Cypress.env('url')+'my.carbook.pro';
const appointments = 'https://'+Cypress.env('url')+'my.carbook.pro/orders/appointments';
const approve = 'https://'+Cypress.env('url')+'my.carbook.pro/orders/approve';
const progress = 'https://'+Cypress.env('url')+'my.carbook.pro/orders/progress';
const success = 'https://'+Cypress.env('url')+'my.carbook.pro/orders/success';
const cancel = 'https://'+Cypress.env('url')+'my.carbook.pro/orders/cancel';
const path = require("path");
var date = new Date();

describe ('Reports|Master|Admin|Desktop|UA|', function(){
  beforeEach('User LogIn ', function(){
    cy.viewport(1240,960)  
    cy.login(baseUrl, Cypress.env('Login'), Cypress.env('Password'))
  });

    it('Товари. Універсальний', function(){
        cy.contains('Звіти').first().click({force: true})
        cy.wait(1000)
        cy.get('.ant-menu-item').contains('Звіти').click({force: true})
        cy.get('.ant-btn').contains('Універсальний').click({force: true})
        cy.get('.ant-modal-body').should('exist')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'Orders report'+'.xlsx')).should("exist")
    })

    it('Товари. Залишки по товарам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Залишки по товарам').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Залишки по товарам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'balance_by_products_without_detailing'+'.xlsx')).should("exist")
    })

    it('Товари. Залишки по складам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Залишки по складам').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Залишки по складам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'balance_by_warehouses_without_detailing'+'.xlsx')).should("exist")
    })

    it('Товари. Залишки по коміркам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Залишки по коміркам').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Залишки по коміркам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'balance_by_cells_without_detailing'+'.xlsx')).should("exist")
    })

    it('Товари. Рух по товару', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Рух по товару').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Рух по товару')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'products_movement_without_detailing'+'.xlsx')).should("exist")
    })

    it('Товари. Інвентаризація', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Інвентаризація').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Інвентаризація')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'balance_stocktaking_blind'+'.xlsx')).should("exist")
    })

    it('Товари. Закупівлі за пост.', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Закупівлі за пост.').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Закупівлі за пост.')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'purchases_by_supplier_without_detailing'+'.xlsx')).should("exist")
    })

    // it('Товари. Списання', function(){
    //     cy.contains('Звіти').first().click({force: true})
    //     cy.wait(1000)
    //     cy.get('.ant-menu-item').contains('Звіти').click({force: true})
    //     cy.get('.ant-btn').contains('Списання').click({force: true})
    //     cy.wait(1000)
    //     cy.get('.ant-modal-header').should('exist')
    //     cy.get('.ant-modal-header').should('have.text', 'Списання')
    //     cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
    //     cy.readFile(path.join('cypress/downloads', ''+'.xlsx')).should("exist")
    // })

    it('НЗ. Універсальний по н/з', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Універсальний по н/з').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Універсальний по н/з')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_report_universal'+'.xlsx')).should("exist")
    })

    it('НЗ. Універсальний по роботам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Універсальний по роботам').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Універсальний по роботам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_report_universal_by_labors'+'.xlsx')).should("exist")
    })

    it('НЗ. Універсальний по з/ч', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Універсальний по з/ч').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Універсальний по з/ч')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_report_universal_by_products'+'.xlsx')).should("exist")
    })

    it('НЗ. Зведений по н/з', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Зведений по н/з').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Зведений по н/з')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_summary_report'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по днях', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('По днях').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по днях')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_date_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по працівникам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('По працівникам').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по працівникам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_employees_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі за статусами', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('За статусами').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі за статусами')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_statuses_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по клієнтах', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('За клієнтами').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по клієнтах')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_clients_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по а/м', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('За автомобілями').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по а/м')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_vehicles_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі за постами', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('За постами').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі за постами')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_stations_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по роботам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Роботи').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по роботам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_labors_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по групам товарів', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Групи товарів').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по групам товарів')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_product_groups_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по брендам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Бренди').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по брендам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_brands_without_detailing'+'.xlsx')).should("exist")
    })

    it('НЗ. Звіт по продажі по товарах', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Товари').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по товарах')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_products_without_detailing'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Універсальний по оплатам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Універсальний по оплатам').click({force: true})
         cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Універсальний по оплатам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'balance_by_store_docs'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Звіт по дебіторці', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Дебіторка').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по дебіторці')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'accounts_receivable_report_without_detailing'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Звіт по кредиторці', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Кредиторка').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по кредиторці')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'accounts_payable_report'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Звіт по касам', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Каси').click({force: true})
        cy.wait(1000)
        cy.get('.ant-modal-header').should('exist')
        cy.get('.ant-modal-header').should('have.text', 'Звіт по касам')
        cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'orders_by_cash_box_without_detailing'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Грошовий потік', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Грошовий потік').click({force: true})
        cy.wait(1000)
        //// cy.get('.ant-modal-header').should('exist')
        //// cy.get('.ant-modal-header').should('have.text', 'Грошовий потік')
        ////cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'cash_flow_report'+'.xlsx')).should("exist")
    })

    it('Бухгалтерія. Звіт по продажі по товарах', function(){
        cy.visit(baseUrl+'/reports')
        cy.get('.ant-btn').contains('Зарплати').click({force: true})
        cy.wait(1000)
        ////cy.get('.ant-modal-header').should('have.text', 'Звіт по продажі по товарах')
        ////cy.get('.ant-modal-footer > div > .ant-btn-primary').last().click({force: true})
        cy.readFile(path.join('cypress/downloads', 'Employees salaries report from'+'.xlsx')).should('not.exist')
    })

})


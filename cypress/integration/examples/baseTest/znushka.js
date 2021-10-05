/// <reference types="cypress" />
const url = ''   //test-   // dev-  //
const baseUrl = 'https://'+url+'my.carbook.pro';

const appointments = 'https://'+url+'my.carbook.pro/orders/appointments';
const approve = 'https://'+url+'my.carbook.pro/orders/approve';
const progress = 'https://'+url+'my.carbook.pro/orders/progress';
const success = 'https://'+url+'my.carbook.pro/orders/success';
const cancel = 'https://'+url+'my.carbook.pro/orders/cancel';

var date = new Date();
const idClient =''+date.getDate()+date.getMinutes();
var second = parseInt(date.getSeconds())+10
var minute = parseInt(date.getMinutes())+10
//const idClient ='830'

var notZnuzhka = '';
var pidsymok = '';
var prubutok = '';

describe('Н/З модалка Робота', function () {
  
    before(function() {
        cy.visit(baseUrl)
        cy.get('#login.ant-input').type('0683781977');
        cy.get('#password').type('Vika_qa_prod_admin_access');
        cy.get('button').click()
        cy.get('.styles-m__title---Nwr2X').contains('Календар Завантаження');
        cy.wait(4000);
        cy.visit(approve)

        .then(()=>{
            cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
            cy.log('Вибір Запису');
        })
        
        .then(()=>{
            cy.log('Вкладка Роботи');
            cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').click();
            cy.wait(2000)
        })

        cy.get('input[class="ant-input-number-input"]').eq(3).invoke ('val')
          .then (val => {const text = val; 
           notZnuzhka = notZnuzhka + Number(text)       
        })
        cy.get('input[class="ant-input-number-input"]').eq(4).invoke ('val')
          .then (val => {const text = val; 
           pidsymok = pidsymok + Number(text)       
        })
        cy.get('input[class="ant-input-number-input"]').eq(5).invoke ('val')
          .then (val => {const text = val; 
           prubutok = prubutok + Number(text)       
        })
    });

    it('Перевірка суми без знижки', function () {
        cy.log('Без знижки ' + notZnuzhka)
        if (notZnuzhka>800){
            cy.log('TESTtttttttttttt')
        }
    });

    it('Перевірка суми зі знижкою', function () {
        cy.log('Підсумок ' + pidsymok)
        var newNotZnuzhka = notZnuzhka
        cy.get('#servicesDiscount').clear().type('10')
        if (notZnuzhka < pidsymok){
            cy.log('Error')
        }

    });

    it('Надбавка до нормо-годинин', function () {
        cy.log('Прибуток: ' + prubutok); //WORKS
    });
 })
describe('3', function () {
    it('3.1', function () {
        cy.log('#3: ' + notZnuzhka); //WORKS
    });
});


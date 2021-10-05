/// <reference types="cypress" />

//"viewportWidth": 414,
//"viewportHeight": 736   

const url = 'test-'   //test-   // dev-  //
const baseUrl = 'https://'+url+'my.carbook.pro';
const appointments ='https://'+url+'my.carbook.pro/orders/appointments' // нові
const approve = 'https://'+url+'my.carbook.pro/orders/approve'; //записи
const progress = 'https://'+url+'my.carbook.pro/orders/progress'; //ремонт
const success = 'https://'+url+'my.carbook.pro/orders/success'; //виконані
const profile ='https://'+url+'my.carbook.pro/profile'
const clients = 'https://'+url+'my.carbook.pro/clients'

var date = new Date();
const idClient =''+date.getDate()+date.getMonth()+date.getMinutes()
var second = parseInt(date.getSeconds())+10
var minute = parseInt(date.getMinutes())+10

describe ('BaseTest|UA|CarBook', function(){
  beforeEach('User LogIn ', () => {
    cy.log('User LogIn');
    cy.visit('https://'+url+'my.carbook.pro/')
        .then(()=>{
            //*************TEST************************** */
            cy.get('#login.ant-input').type('0930473717');
            cy.get('#password').type('ACBf4W7G');
            //************DEV**************************** */
            // cy.get('#login.ant-input').type('0680000077');
            // cy.get('#password').type('0680000077');
            // //**************PROD*************************** */
            // cy.get('#login.ant-input').type('0683781977');
            // cy.get('#password').type('Vika_qa_prod_admin_access');
            // //***************************************** */
            cy.get('button').click();
        })
  });

    it('1.Профіль вибір СТО', function(){
        cy.visit(profile)
        .then (()=>{
            cy.get('.drawer-handle').click()
            cy.wait(1000)
            cy.get('#language').click()
            cy.contains('Українська').click();
            cy.wait(1000)
        })
        .then (()=>{
            cy.get('#businessTypes').click();
            cy.wait(2000)
            cy.get('.ant-select-dropdown-menu-item-active').contains('СТО').click();
            cy.wait(2000)
        })
        .then (()=>{
            cy.get('.ant-btn').click();
        })
    })

    it('2.+Клієнта для клієнта:'+idClient, function(){
        // відкрити меню
       // cy.get('.styles-m__carBookHeaderBlock---1pz36 > .anticon > svg > path').click()
        cy.contains('Ремонти').click()
        .then(()=>{
            cy.log('Вибір Меню ремонти');
            cy.get('a > .ant-btn').first().click({ force: true }); // add н/з
        })
        .then(()=>{
            cy.log('Додати клієнта через +');
            cy.get('.anticon-plus > svg').click()
        })
        .then(()=>{
            cy.log('Модалка Додати Клієнта')
            cy.get('#name').type('Клієнт' + idClient)
            cy.get('#surname').type('Прізвище')
            .then(()=>{
                cy.log('Номер телефону клієнта');
                cy.get('.ant-input-number-input').eq(1).type(second+'0'+minute+''+second+''+minute)
            })
            .then(()=>{
                cy.log('Рік авто');
                cy.get(':nth-child(1) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder > span').click()
                cy.wait(1000)
                cy.contains('2014').click()
            })
            .then(()=>{
                cy.log('Марка авто')
                cy.get(':nth-child(2) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('niss')
                cy.wait(1000)
            })
            .then(()=>{
                cy.get('.ant-select-dropdown-menu-item-active').click();
            })
            .then(()=>{
                cy.log('Модель авто');
                cy.get(':nth-child(3) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('micra')
                cy.wait(1000)
                cy.get('.ant-select-dropdown-menu-item-active').click()
            })
            .then(()=>{
                cy.log('Модифікація авто');
                cy.get(':nth-child(4) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('1')
                cy.get('.ant-select-dropdown-menu-item-active').click()
            })
            .then(()=>{
                cy.log('Державний номер авто');
                cy.get('#number').type('AO6028DO');
            })
            .then(()=>{
                cy.log('VIN авто');
                cy.get('#vin').type('MDHFBUK13U0107589');
            })
            .then(()=>{
                cy.log('Додати автомобіль');
                cy.get('.styles-m__addButtonWrapper---3f3n3 > .ant-btn').click();
            })
        })
        .then(()=>{
            cy.log('АВТО ДОДАНО');
        })
        .then(()=>{
            cy.get('.ant-modal-footer > div > .ant-btn-primary').click();
        })
    });

    it('3.Редагування мобільного номера для клієнта:'+idClient, function(){
        cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
        cy.wait(1000)
        cy.visit(clients)
          .then(()=>{
                cy.get('.drawer-handle').click()
           })
          .then(()=>{
              cy.log('Пошук клієнта');
              cy.get('.ant-input').type('Клієнт'+idClient)  //
              cy.wait(3000)
          })
          .then(()=>{
            cy.get('.ant-table-row > :nth-child(1)').first().click()
          })
          .then(()=>{
            cy.get('.ant-input-number-input').clear().type('0683781977')
            cy.get('.ant-input-number-input').clear().type('0683781977')
          })
          .then(()=>{
            cy.get('.styles-m__editClientForm---2hdWi > .ant-btn').click()
          })
          .then(()=>{
            cy.wait(5000)
          })
        })

    it('4.Додати Н/З, додавання клієнта через пошук, для клієнта:'+idClient, function(){
        cy.contains('Ремонти').click()
          .then(()=>{
              cy.log('Вибір Меню ремонти');
              cy.get('a > .ant-btn').first().click({ force: true }); // add н/з

          })
          .then(()=>{
            cy.wait(3000)
            cy.get('#searchClientQuery').clear().type('Клієнт8231')//+idClient
          })
          .then(()=>{
              cy.get('.ant-table-row > :nth-child(1)').first().click();
          })
          .then(()=>{
              cy.get('.ant-btn').first().click();
          })
          .then(()=>{
              cy.log('Ремонт ДОДАНО');
          })
    });

    it('5.Редагування н/з та додавання Поста, Механіка, Готівки, Реквізити STO', function(){
        cy.log('Вибір Меню ремонти');
        cy.contains('Ремонти').click()
          .then(()=>{
              cy.get('.styles-m__ordernLink---T-qWz').first().click({ force: true });//Нові н/з
              cy.wait(3000);
          })
          .then(()=>{
              cy.log('Вибір Пост');
              cy.get('.ant-select-selection').contains('пост').click();
              cy.get('.ant-select-dropdown-menu-item-active').click();
          })
          .then(()=>{
              cy.wait(3000);
              cy.log('Додавання коментарів в н/з');
              cy.get('#comment').clear().type('Не заляпать авто')  
          })
          .then(()=>{
              cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
          })
          .then(()=>{
              cy.log('Процес Збереження н/з ');
          })
          .then(()=>{
            cy.log('Перевід у статус Запис');
            cy.get(':nth-child(17) > .ant-btn-primary').click()
            cy.wait(2000);
        })
    });

    it('6.Створення Діагностики', function(){
        cy.visit(approve)
            .then(()=>{
                cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
                cy.log('Вибір Запису');
                cy.get('.drawer-handle').click()
            })
            .then(()=>{
                cy.wait(2000)
                cy.log('Кнопка Діагностики');
                cy.get(':nth-child(15) > .ant-btn').click()
            })
            .then(()=>{
                cy.log('Клік на випливаюче меню');
               // cy.get('.styles-m__diagnosticTableHeader---1_8Bu > :nth-child(2) > .ant-select > .ant-select-selection').click();
            })
            .then(()=>{
                cy.log('Вибір діагностики');
         
            })
            .then(()=>{
                cy.log('Звершити діагностику');
                cy.get('.styles-m__diagnostic_header---1Tw4G > :nth-child(3) > .ant-btn').click()
            })
            .then(()=>{
              //  cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
            })
            .then(()=>{
               /// cy.log('Процес Збереження н/з ');
              ///  cy.wait(2000)
            })
      });



})



    

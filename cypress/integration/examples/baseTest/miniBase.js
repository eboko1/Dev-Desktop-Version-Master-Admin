/// <reference types="cypress" />

const url = ''   //test-   // dev-  //
const baseUrl = 'https://'+url+'my.carbook.pro';
const appointments ='https://'+url+'my.carbook.pro/orders/appointments' // нові
const approve = 'https://'+url+'my.carbook.pro/orders/approve'; //записи
const progress = 'https://'+url+'my.carbook.pro/orders/progress'; //ремонт
const success = 'https://'+url+'my.carbook.pro/orders/success'; //виконані

var date = new Date();
//const idClient =''+date.getDate()+date.getMinutes();
var second = parseInt(date.getSeconds())+10
var minute = parseInt(date.getMinutes())+10

const idClient ='1939'

describe ('miniBaseTest|UA|CarBook', function(){
  beforeEach('User LogIn ', () => {
    cy.log('User LogIn');
    cy.visit('https://'+url+'my.carbook.pro/')
        .then(()=>{
        ////**************PROD************************/
        cy.get('#login.ant-input').type(Cypress.env('ProdLogin'));  // TestLogin     DevLogin      ProdLogin
        cy.get('#password').type(Cypress.env('ProdPassword'));      // TestPassword  DevPassword   ProdPassword

        ////******************************************/
            cy.get('button').click();
        })
        .then(()=>{
            cy.get('.styles-m__title---Nwr2X').contains('Календар Завантаження');
        })
  });

    it('1.Профіль вибір Ш/М', function(){
        cy.get('.styles-m__userName---h3mg1').click()
        .then (()=>{
            cy.get('#language').click()
            cy.contains('Українська').click();
            cy.wait(1000)
        })
        .then (()=>{
            cy.get('#businessTypes').click();
            cy.contains('Шиномонтаж').click();
            cy.wait(2000)
        })
        .then (()=>{
            cy.get('.ant-btn').click();
        })
    })



//   it('2.Додати Клієнта ч/з + '+idClient, function(){
//       cy.contains('Ремонти').click()
//         .then(()=>{
//             cy.log('Вибір Меню ремонти');
//             cy.get('a > .ant-btn').click(); // add н/з
//         })
//         .then(()=>{
//             cy.wait(5000)
//             cy.log('Додати клієнта через +');
//             cy.get('.styles-m__client---1mUz8 > .anticon > svg').click()
//             cy.wait(1000)
//         })
//         .then(()=>{
//             cy.log('Модалка Додати Клієнта '+idClient);
//             cy.get('#name').type('Клієнт' + idClient);
//             cy.get('#patronymic').type('По батькові');
//             cy.get('#surname').type('Прізвище');
//             cy.get('#sex').click();
//             cy.contains('Чоловіча').click();
//             cy.get('#status').click();
//             cy.contains('Преміум').click();
//             cy.log('Дата народження клієнта ');
//             cy.get('#birthday').click();
//             cy.contains('10').click();
//             cy.get('#source').click();
//             cy.contains('CarBook').click()
//             cy.get('.ant-input-number-input').first().type('5');
//             cy.log('Номер телефону клієнта');
//             cy.get('.ant-input-number-input').eq(1).type(minute+'0'+second+''+minute+''+second)
//             cy.log('Рік авто');
//             cy.get(':nth-child(1) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder > span').click()
//             cy.contains('2014').click()
//             cy.wait(2000)
//             cy.log('Марка авто');
//             cy.get(':nth-child(2) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('niss')
//             cy.get('.ant-select-dropdown-menu-item-active').click();
//             cy.wait(2000)
//             cy.log('Модель авто');
//             cy.get(':nth-child(3) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('micra')
//             cy.get('.ant-select-dropdown-menu-item-active').click()
//             cy.log('Модифікація авто');
//             cy.get(':nth-child(4) > .ant-col-18 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('1')
//             cy.get('.ant-select-dropdown-menu-item-active').click()
//             cy.log('Державний номер авто');
//             cy.get('#number').type('AO6028DO');
//             cy.log('VIN авто');
//             cy.get('#vin').type('MDHFBUK13U0107589');
//             cy.log('Додати автомобіль');
//             cy.get('.styles-m__addButtonWrapper---3f3n3 > .ant-btn').click();
//         })
//         .then(()=>{
//             cy.log('АВТО ДОДАНО');
//             cy.wait(6000)
//         })
//         .then(()=>{
//             cy.get('.ant-modal-footer > div > .ant-btn-primary').click();
//             cy.wait(6000)
//         })
//         .then(()=>{
//             cy.get('#searchClientQuery').clear().type('Клієнт'+idClient)
//         })  
//         .then(()=>{
//             cy.wait(6000)
//             cy.get('[data-row-key="0"] > :nth-child(1)').first().click();
//         })  
//         .then(()=>{
//             cy.get('.ant-btn').first().click();
//         })        
//         .then(()=>{
//             cy.log('Ремонт ДОДАНО');
//         })
//   });

//   it('3.Редагування н/з та додавання Поста, Механіка, Готівки', function(){
//       cy.visit(appointments)
//       .then(()=>{
//         cy.get('a.styles-m__ordernLink---2V9V3').first().click({force: true});
//         cy.log('Вибір Запису');
//       })
//       .then(()=>{
//             cy.log('Вибір Пост');
//             cy.get('.ant-select-selection > :nth-child(1)').eq(0).click();
//             cy.get('.ant-select-dropdown-menu-item-active').click();
//             cy.log('Вибір Механіка');
//             cy.get('#employee').click();
//             cy.get('.ant-select-dropdown-menu-item-active').click();
//             cy.log('Вибір Готівка');
//             cy.get('#paymentMethod').click();
//             cy.get('.ant-select-dropdown-menu-item-active').click();
//             cy.wait(1000)
//             cy.get('#clientVehicleTypeId').click();
//             cy.get('.ant-select-dropdown-menu-item-active').click();
//             cy.wait(2000)
//             cy.get('#comment').clear().type('Не заляпать авто')
//         })
//         .then(()=>{
//             cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
//         })
//         .then(()=>{
//             cy.log('Процес Збереження н/з ');
//         })
//   });

//   it('4.Перевід у статус Запис', function(){
//       cy.visit(appointments)
//       .then(()=>{
//         cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true });//Нові н/з
//       })
//       .then(()=>{
//         cy.get('.styles-m__dropdownTitle---3Vlog > :nth-child(2) > span').click(); // Статус Запис
//         cy.get('.ant-dropdown-menu-item').contains('Запис').click()
//         cy.log('Перевести н/з в статус Запис');
//       })
//       .then(()=>{
//         cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
//       })
//       .then(()=>{
//         cy.log('Процес Збереження н/з ');
//       })
//       .then(()=>{
//         cy.get('.anticon-close').first().click({ force: true });// закрити картку
//       })
//   });


  it('5.Вкладка Роботи', function(){
    cy.visit(approve)
    .then(()=>{
        cy.log('Вибір Запису');
        cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true });//Нові н/з
    })
    .then(()=>{
        cy.log('Вкладка Роботи');
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(1)').click();
    })
    .then(()=>{
        cy.log('Модалка Комплекси');
        cy.get('.styles-m__headerActions---2ZRi3 > .ant-btn').click()
        cy.wait(5000)
    })
    .then(()=>{
        cy.get('.styles-m__laborsList---3qgUM > .styles-m__listRow---2lt3h > .styles-m__nameField---3rhCH > .ant-select > .ant-select-selection').click()
        cy.get('#rcDialogTitle0').contains('Комплекси')

    })
    .then(()=>{
        cy.log('Група товару');
        cy.get('.styles-m__complexSelect---22Viw > .ant-select > .ant-select-selection').click()
        cy.get('.ant-select-dropdown-search > .ant-select-search__field__wrap > .ant-select-search__field').type('Заміна підшипника')
        cy.wait(1000)
        cy.get('.ant-select-tree-title').eq(1).click()  
    })
    .then(()=>{
        cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({ force: true });
        cy.wait(5000)
    })
    .then(()=>{
        cy.log('Комплекси додано');
        cy.wait(5000)
    })
  });

  it('6.Вкладка Запчастини ', function(){
    cy.visit(approve)
    .then(()=>{
        cy.log('Вибір Запису');
        cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true });  //Записи
    })
    .then(()=>{
        cy.log('Вкладка Запчастини');
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click();
        cy.log('Модалка Вузол/деталь');
        cy.get('.ant-tabs-tabpane-active > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-body > table > .ant-table-tbody > [data-row-key="1"] > :nth-child(1) > [style="display: flex; justify-content: space-evenly;"] > .ant-btn').click()
     
        cy.get('.ant-table-row > :nth-child(1) > .ant-select > .ant-select-selection').click()
        cy.get('.ant-select-search__field').type('Шини для легкових автомобілів')
        cy.get('.ant-select-tree-child-tree-open').eq(1).click()
        cy.get(':nth-child(3) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('300')
        cy.get(':nth-child(4) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('5')
    })
    .then(()=>{
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    })
  });

  it('7.Статус Ремонт ', function(){
    cy.visit(approve)
    .then(()=>{
        cy.log('Вибір Запису');
        cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true });
    })
    .then(()=>{
        cy.log('Вибір статусу РЕМОНТ');
        cy.get('.styles-m__dropdownTitle---3Vlog > :nth-child(2) > span').click(); // Статус Ремонт
        cy.wait(3000)
        cy.get('.ant-dropdown-menu-item').contains('Ремонт').click()
        cy.log('Перевести н/з в статус РЕМОНТ');

    })
    .then(()=>{
        cy.wait(3000)
        cy.get('.styles-m__title---Nwr2X').contains('Ремонт')
    })

})

  it('8.Модалка Виконати наряд-замовлення', function(){
    cy.visit(progress)
    .then(()=>{
        cy.log('Вибір Запису');
        cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true }); 
    })
    .then(()=>{
        cy.get('.styles-m__dropdownTitle---3Vlog > :nth-child(2) > span').click(); // Статус Завершено
        cy.get('.ant-dropdown-menu-item').contains('Завершено').click()
    })
    .then(()=>{
        cy.log('Модалка Виконати наряд-замовлення?');
        cy.log('Сплатити радіо-кнопка Так');
        cy.get('#withPayment > :nth-child(1) > :nth-child(2)').click();
        cy.log('Вибір Каси');
        cy.get('#cashBoxId').click();
        cy.get('.ant-select-dropdown-menu-item').eq(1).click();
    })
    .then(()=>{
        cy.get('.styles-m__submit---2hKgG > .ant-btn-primary').click();
    })
    .then(()=>{
        cy.wait(5000)
        cy.get('.styles-m__title---Nwr2X').contains('Виконано')
    })
  });

  it('Виконані Н/З друк ', function(){
    cy.visit(success)
    .then(()=>{
        cy.get('.styles-m__ordernLink---2V9V3').first().click({ force: true });  //Виконані
    })
    .then(()=>{
        cy.get('.anticon-printer > svg').click();
        cy.get('.ant-dropdown-menu-item').eq(5).click();
    })
    .then(()=>{
        cy.log('Завантаження результату діагностики');
    })
  });

})
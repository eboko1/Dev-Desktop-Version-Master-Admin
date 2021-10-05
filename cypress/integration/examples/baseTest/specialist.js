/// <reference types="cypress" />



const url = 'test-'   //test-   // dev-  // ''

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

//const idClient ='1630'


describe ('BaseTest|UA|CarBook', function(){
  beforeEach('User LogIn ', () => {
    cy.visit(baseUrl)
    .then(()=>{
        ////**************PROD************************/
        cy.get('#login.ant-input').type(Cypress.env('TestSpecialistLogin'));   //  TestSpecialistLogin
        cy.get('#password').type(Cypress.env('TestSpecialistPassword'));      // TestSpecialistPassword

        ////******************************************/
    })
    .then(()=>{
        cy.get('button').click()
    })
    .then(()=>{
        cy.wait(3000);
        cy.get('.styles-m__title---Nwr2X').contains('Календар Завантаження').should('exist');
    })
    .then(()=>{
        cy.wait(1000);
    })
  });
  
  it('Профіль вибір українського інтерфейсу', function(){
    cy.get('.styles-m__userName---h3mg1').click()
    .then (()=>{
        cy.get('.styles-m__title---Nwr2X > span').should('exist')
        cy.get('#language').click()
        cy.contains('Українська').click();
        cy.wait(1000)
    })
    .then (()=>{
        cy.get('.ant-btn').click();
    })
 })

    it('1. Додавання нового Клієнта: '+idClient, function(){
        cy.contains('Ремонти').click()
        .then(()=>{
            cy.log('Вибір Меню ремонти');
            cy.get('a > .ant-btn').click(); // add н/з
        })
        .then(()=>{
            cy.wait(3000)
            cy.log('Додати клієнта через +');
            cy.get('.anticon-plus > svg').click()
            
        })
        .then(()=>{
            cy.log('Модалка Додати Клієнта')
            cy.get('#name').type('БазовийКлієнт' + idClient)
            cy.get('#patronymic').type('По батькові')
            cy.get('#surname').type('Прізвище')
            .then(()=>{
                cy.get('#sex').click();
                cy.contains('Чоловіча').click();
            })
            .then(()=>{
                cy.get('#status').click();
                cy.contains('Преміум').click();
            })
            .then(()=>{
                cy.log('Дата народження клієнта ');
                cy.get('#birthday').click();
                cy.contains('10').click();
            })
            .then(()=>{
                cy.get('#source').click();
                cy.contains('CarBook').click()
            })
            .then(()=>{
                cy.get('#paymentRespite').first().type('5');

            })
            .then(()=>{
                cy.log('Номер телефону клієнта');
                cy.get('.ant-input-number-input').eq(2).type(second+'0'+minute+''+second+''+minute) 
            })
           .then(()=>{
                cy.log('Кнопка ОК');
                cy.get('.ant-btn-primary').last().click()  // first()      .first().click({ force: true })
            })
        })
        .then(()=>{
            cy.get('.ant-table-row > :nth-child(1)').contains('БазовийКлієнт' + idClient).should('exist')
            cy.wait(3000)
        })
    });

     
  it('3.Редагування мобільного номера Клієнта:'+idClient, function(){
    cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
    cy.contains('Клієнти').click()
      .then(()=>{
          cy.wait(5000)
          cy.log('Пошук клієнта');
          cy.get('.ant-input').type('БазовийКлієнт'+idClient)  //
          
      })
      .then(()=>{
        cy.wait(2000)
        cy.get('.styles-m__clientLink---1JZdU').first().click()
      })
      .then(()=>{
        cy.get('.ant-input-number-input').eq(1).focus().clear('0').type('0683781977')
        cy.get('.ant-input-number-input').eq(1).focus().clear().type('0683781977')
      })
      .then(()=>{
        cy.get('.styles-m__editClientForm---2hdWi > .ant-btn').click()
      })
      .then(()=>{
        cy.wait(5000)
      })
    })
    it('4.Додавання а/м через сторінку Клієнта'+idClient, function(){
        cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
        cy.contains('Клієнти').click()
          .then(()=>{
              cy.log('Пошук клієнта');
              cy.get('.ant-input').type('БазовийКлієнт'+idClient)  //
              cy.wait(5000)
          })
          .then(()=>{
            cy.get('.styles-m__clientLink---1JZdU').first().click()
          })
          .then(()=>{
            cy.get('.ant-input-number-input').eq(1).focus().clear('0').type('0683781977')
            cy.get('.ant-input-number-input').eq(1).focus().clear().type('0683781977')
          })
          .then(()=>{
            cy.get('.styles-m__editClientForm---2hdWi > .ant-btn').click()
          })
          .then(()=>{
            cy.wait(5000)
          })
          .then(()=>  {
            cy.log('Додавання АВТО')
            cy.get(':nth-child(2) > .ant-btn').click()
            })
            .then(()=>{
                cy.log('Додавання Держ.номера а/м');
                cy.get('#vehicle_add_from_number').clear().type('TE0000ST')
            })
            .then(()=>{
                cy.log('VIN авто');
                cy.get('#vehicle_add_from_vin').type('MDHFBUK13U0107589');
            })
            .then(()=>{
                cy.log('Рік авто');
                cy.get(':nth-child(3) > .ant-col-12').click().type('2014')
                cy.wait(2000)
                cy.get('.ant-select-dropdown-menu-item-active').click()
                cy.wait(2000)
            })
            .then(()=>{
                cy.log('Марка авто')
                cy.get(':nth-child(4) > .ant-col-12').click().type('NISSAN')
                cy.wait(2000)
                cy.get('.ant-select-dropdown-menu-item-active').click()
                cy.wait(2000)
            })
            .then(()=>{
                cy.log('Модель авто');
                cy.get(':nth-child(5) > .ant-col-12').click().type('MICRA')
                cy.wait(2000)
                cy.get('.ant-select-dropdown-menu-item-active').click()
                cy.wait(2000)
                
            })
            .then(()=>{
                cy.log('Модифікація авто');
                cy.get(':nth-child(6) > .ant-col-12').click().type('1.4 16V')
                cy.wait(2000)
                cy.get('.ant-select-dropdown-menu-item-active').click()
            })
            .then(()=>{
                cy.wait(3000)   
                cy.get('.ant-btn-primary').last().click({ force: true })  // first()      .first().click({ force: true })
                cy.wait(3000)
            })
            .then(()=>{
                cy.reload()
                cy.wait(3000)
                cy.log('АВТО ДОДАНО');
                cy.get('.ant-list-item').contains('MICRA').should('exist');
                cy.wait(3000)
            })
        })

    it('4.Додати Н/З з Клієнтом:'+idClient, function(){
        cy.contains('Ремонти').click()
          .then(()=>{
              cy.log('Вибір Меню ремонти');
              cy.get('a > .ant-btn').click(); // add н/з
          })
          .then(()=>{
            cy.wait(3000)
            cy.get('#searchClientQuery').clear().type('Клієнт'+idClient)
          })
          .then(()=>{
              cy.get('.styles-m__clientBlock---1yPc8 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-body > table > .ant-table-tbody > .ant-table-row > :nth-child(1)').first().click();
            })
          .then(()=>{
            cy.get('.ant-btn').first().click();
          })
          .then(()=>{
            cy.wait(7000)
            cy.log('Ремонт ДОДАНО');
          })
    });

  it('5.Редагування н/з та додавання Поста, Механіка, Готівки, Реквізити STO', function(){
      cy.log('Вибір Меню ремонти');
      cy.contains('Ремонти').click()
        .then(()=>{
            cy.get('.styles-m__ordernLink---T-qWz').first().click({ force: true });//Нові н/з
           // cy.wait(3000);
        })
        .then(()=>{
           //// cy.get('#ЗК > .styles-m__mapChildsBlock---1oGYD > :nth-child(2) > .ant-btn').click(); // menu tech map position 2
          // // cy.wait(3000);
        })
        .then(()=>{
         ////   cy.log('Вибір Пост');
         ////   cy.get('.ant-select-dropdown-menu > :nth-child(1)').click();
            cy.wait(2000);
            cy.log('Вибір Механіка');
            cy.get('#employee').click();
            cy.wait(1000);
            cy.get('.ant-select-dropdown-menu-item-active').click();
        })
        .then(()=>{
            cy.log('Вибір Готівка');
            cy.get('#paymentMethod').click();
        })
        .then(()=>{
            cy.get('.ant-select-dropdown-menu-item-active').click();
            cy.log('Вибір Реквізити');
            cy.get ('#requisite').click();
        })
        .then(()=>{
            cy.get('.ant-select-dropdown-menu-item-active').click();
            cy.wait(1000);
            cy.log('Вибір Запчастист');
            cy.get ('#appurtenanciesResponsible').click();
            cy.get('.ant-select-dropdown-menu-item-active').click();
            cy.wait(1000);
        })
        .then(()=>{
            cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
        })
        .then(()=>{
            cy.log('Процес Збереження н/з ');
            cy.wait(3000);
        })
        cy.pause()
  });

    it('Перевірка Інфо по автомобілю ', function(){
        cy.visit(appointments);
        cy.wait(3000);
        cy.log('Вибір Н/З');
        cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
        cy.wait(4000);
        cy.get('[title="Інфо по автомобілю"] > .anticon > svg').click()
        cy.wait(5000);
        cy.get('.styles-m__tableHeader---1i3oL').should('exist')
        cy.get('.styles-m__tableHeader---1i3oL').contains('Спецификации масел и технических жидкостей')
    });

  it('7.Перевід у статус Запис', function(){
      cy.log('Вибір Меню ремонти'+ cy.url());
      cy.contains('Ремонти').click()
        .then(()=>{
         // cy.get('.styles-m__ordernLink---T-qWz').invoke('attr', 'href').then( href => {cy.visit(baseUrl+href); });
         cy.get('.styles-m__ordernLink---T-qWz').first().click({ force: true });
         cy.url().should('include', '/order/')
        })
        .then(()=>{
         cy.wait(5000);
         cy.get('.styles-m__dropdownTitle---3Vlog > :nth-child(2) > span').click(); // Статус Запис
        })
        .then(()=>{
            cy.get('.ant-dropdown-menu-item').contains('Запис').click()
            cy.log('Перевести н/з в статус Запис');
            cy.wait(3000);
        })
        .then(()=>{
            cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
        })
        .then(()=>{
            cy.wait(3000);
            cy.log('Процес Збереження н/з ');
        })
        .then(()=>{
            cy.get('.anticon-close').first().click({ force: true }); // закрити картку
        })
        .then(()=>{
            cy.wait(2000);
        })
        cy.pause()
  });

  it('8.0. Створення Діагностики', function(){
    cy.visit(approve)
        .then(()=>{
            cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
            cy.log('Вибір Запису');
        })
        .then(()=>{
            cy.wait(2000)
            cy.log('Перехід до діагностики');
            cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click(); //клік на вкладку діагностики
        })
        .then(()=>{
            cy.log('Клік на випливаюче меню');
            cy.get('.styles-m__diagnosticTableHeader---1_8Bu > :nth-child(2) > .ant-select > .ant-select-selection').click();
        })
        .then(()=>{
            cy.log('Вибір діагностики');
            cy.get('.ant-select-dropdown-menu > :nth-child(2)').click();
        })
        .then(()=>{
            cy.log('Клік на +');
            cy.get('.styles-m__diagnosticTableHeader---1_8Bu > :nth-child(3) > :nth-child(1)').click();
            cy.wait(2000)
        })
        .then(()=>{
            cy.log('Клік на  all checkbox');
            cy.get('[style="width: 5%; padding: 5px 15px;"] > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
            cy.wait(2000)
        })
        .then(()=>{
            cy.log('Клік на all OK ');
            cy.get('.styles-m__diagnosticTableHeader---1_8Bu > .styles-m__diagnostic_status_button_wrap---ucmHY > [title="Вузол / все гаразд"]').click();
            cy.wait(5000)
        })
        .then(()=>{      
            cy.log('Клік на Редагувати');
            cy.get('[data-row-key="1"] > :nth-child(7) > .styles-m__diagnostic_status_button_wrap---ucmHY > .ant-btn').first().click({force: true});;//редагувати
            cy.wait(2000)
        })
        .then(()=>{
            cy.log('Клік на Критично!');
            cy.get('[data-row-key="1"] > :nth-child(7) > .styles-m__diagnostic_status_button_wrap---ucmHY > .ant-btn-danger').first().click({force: true});
            cy.wait(3000)
        })
        .then(()=>{
            cy.get('[data-row-key="1"] > :nth-child(5) > div > .ant-btn').click(); // click message icon
            cy.wait(2000)
        })
        .then(()=>{
            cy.log('модалка Додати коментар!');
            cy.get(':nth-child(1) > .styles-m__blockButtonsWrap---1vfJT > :nth-child(3)').click(); // Що?
            cy.get(':nth-child(2) > .styles-m__blockButtonsWrap---1vfJT > :nth-child(1)').click(); //Де?
            cy.get('.ant-modal-footer > .ant-btn-primary').click();//зберегти модалка Додати коментар
        })
        .then(()=>{
            cy.log('Створити калькуляцію');
            cy.get('[style="width: 35%; margin-right: 5px;"]').click();//кнопка Створити калькуляцію
        })
        .then(()=>{
            cy.get('.styles-m__confirm_diagnostic_modal_row_button---36VYf > [title="Створити роботи і з/ч автоматично"]').click();
            cy.wait(3000)
        })
        .then(()=>{
            cy.log('Звершити діагностику');
            cy.get('button').contains('Завершити діагностику').click({force: true});
        })
        .then(()=>{
           //// cy.get('.anticon-save').click() // зберегти картку
        })
        .then(()=>{
            cy.log('Процес Збереження н/з ');
            cy.wait(2000)
        })
        cy.pause()
  });
  it('8.1 Редагування ціни для доданої з діагностики Роботи ', function(){
    cy.visit(approve);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Запису');
    cy.wait(4000);
    cy.log('Вкладка Роботи');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').click();
    cy.wait(1000);

   // cy.get('.styles-m__headerActions---2S-7g > [title="Додати"]').click()
    /////cy.get('[data-row-key="0"] > :nth-child(1) > [style="display: flex; justify-content: space-evenly;"] > [title="Додати / редагувати роботу"]').click();
     cy.wait(1000);
     cy.get('[data-row-key="0"] > :nth-child(2) > [style="display: flex; justify-content: space-evenly;"] > [title="Швидке редагування"]').click()
    cy.wait(1000);
    cy.log('Закупочна ціна');
    cy.get(':nth-child(4) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('200');
    cy.wait(1000);
    // // //cy.log('Перевірити ОЕ норматив');
    // // //cy.get(':nth-child(11) > .ant-btn').click();
    // // // cy.wait(1000);
   /// cy.get('[data-row-key="0"] > :nth-child(7) > .ant-btn').click();
    cy.wait(1000);
    cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({force: true});
    cy.wait(1000);
    cy.log('Встановлення знижки на роботи');
    cy.pause()
    cy.get('#servicesDiscount').clear().type('20');
    cy.wait(2000);
    //Надбавка
    cy.get('.styles-m__servicesMarkup---3myJY > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('120');
    cy.wait(1000);
    cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
    cy.log('Процес Збереження н/з ');
    cy.wait(5000);
  });

  it('8.2. Додавання Робіт через групи Товарів', function(){
    cy.pause()
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
        .then(()=>{
            cy.get('.styles-m__headerActions---2S-7g > [title="Додати"]').click()
        })
        .then(()=>{
            cy.get('.styles-m__modalSectionTitle---3iMcZ > div > span').contains('Робота')
            cy.wait(1000)
        })
        .then(()=>{
            cy.get(':nth-child(2) > .styles-m__groupsTreeSelect---2fLMB > .ant-select-selection').click()
            cy.wait(1000)
        })
        .then(()=>{
            cy.get('.ant-select-dropdown-search > .ant-select-search__field__wrap > .ant-select-search__field').type('Фільтри повітряні')
            cy.get('.ant-select-tree-child-tree-open').eq(1).click()
        })
        .then(()=>{
            cy.get('.ant-table-content > .ant-table-body > table > .ant-table-tbody > .ant-table-row > :nth-child(4) > .ant-select > .ant-select-selection').click()
            cy.get('.ant-select-dropdown-menu-item-active').click();
            cy.wait(1000)
        })
        .then(()=>{
            cy.get(':nth-child(8) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('200')
            cy.wait(1000)
            cy.get(':nth-child(10) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('2')
            //додати механіка
        })
        .then(()=>{
            cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({force: true});
            cy.wait(1000)
        })
        cy.pause()
  })
  it('8.3. Додавання Робіт через поле Робіт', function(){
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
        .then(()=>{
            cy.get('.styles-m__headerActions---2S-7g > [title="Додати"]').click()
        })
        .then(()=>{
            cy.get('.ant-table-content > .ant-table-body > table > .ant-table-tbody > .ant-table-row > :nth-child(4) > .ant-select > .ant-select-selection').type('Заміна')
            cy.wait(4000)
            cy.get('.ant-select-dropdown-menu-item-active').first().click({force: true});
            cy.wait(2000)
            cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({force: true});
            // додати закуп ціну 
            // додати Механіка
            // витягти поля для знижки 
            // зробити перевірку знижки
            // зробити перевірку 
        })
        cy.pause()
    })
  
    it('9. Додавання вручну Запчастин', function(){
        cy.visit(approve)
            .then(()=>{
                cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
                cy.log('Вибір Запису');
            })
            .then(()=>{
                cy.log('Вкладка Запчастин');
                cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)').click()
            })
            .then(()=>{
                cy.get('#detailsDiscount').clear().type('15')
            })
            .then(()=>{
                cy.get('.ant-table-align-left > :nth-child(1) > :nth-child(1) > :nth-child(1) > [title="Додати"]').click()
              /////  cy.get('.styles-m__headerActions---2S-7g > [title="Додати"]').click()
             /// cy.get('[style="padding: 0px 8px; font-size: 18px;"]').click();
             ////// //  cy.get('[data-row-key="1"] > :nth-child(1) > [style="display: flex; justify-content: space-evenly;"] > [title="Додати / редагувати запчастину"]').click()
            })
            
            .then(()=>{
                cy.get('.styles-m__groupsTreeSelect---29Nf2 > .ant-select-selection').click()
            })
            .then(()=>{
                cy.get('.ant-select-dropdown-search > .ant-select-search__field__wrap > .ant-select-search__field').type('Мастила (оливи) моторні')
                cy.get('.ant-select-tree-child-tree-open').eq(1).click()
            })
            .then(()=>{
                cy.get(':nth-child(10) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('300')
                cy.get(':nth-child(11) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('350')
            })
            .then(()=>{
                cy.wait(3000);
                cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({force: true});
                cy.wait(3000);
            })
            cy.pause()
        })

 
  it('10.Вкладка Запчастини > Пряме редагування', function(){
    cy.visit(approve);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Запису');
    cy.wait(10000);
    cy.log('Вкладка Запчастини');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)').click();
    cy.wait(2000);
    cy.log('Пряме редагування');
    cy.get('.ant-table-align-left > :nth-child(1) > :nth-child(1) > :nth-child(1) > [title="Додати"]').click()
  
    cy.wait(1000);
    cy.get('.ant-radio-group > :nth-child(2)').click(); //радіо кнопка
    cy.wait(1000);
    cy.get('.ant-table-row > :nth-child(4) > .ant-input').clear().type('генератор')
    cy.wait(3000);
    cy.log('Вибір Постачальника');
    cy.get('[style="display: flex;"] > .ant-select > .ant-select-selection').click();
    cy.wait(1000);
    cy.get('.ant-select-dropdown-menu-item').contains('Exist').click();//вибір постачальника з випливаючого списка
    cy.wait(3000);
    cy.get(':nth-child(10) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('400');
    cy.wait(1000);
    cy.get(':nth-child(11) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('600');
    cy.wait(1000);
    cy.get(':nth-child(12) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear();
    cy.wait(1000);
    cy.get(':nth-child(12) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('3');
    cy.wait(1000);
    cy.pause()
    cy.get('.ant-btn-primary').first().click({force: true});//ОК;
    cy.wait(3000);
    cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
    cy.log('Процес Збереження н/з ');
    cy.wait(7000);
    cy.log('Вкладка Запчастини');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)').click();
    cy.wait(2000);
    cy.log('Пряме редагування');
    cy.get('.ant-table-align-left > :nth-child(1) > :nth-child(1) > :nth-child(1) > [title="Додати"]').click()

    cy.wait(2000);
    cy.get('.ant-radio-group > :nth-child(2)').click(); //радіо кнопка
    cy.wait(3000);
    cy.log('Повторно Пряме редагування');
    cy.get('.ant-radio-group > :nth-child(2)').click(); //радіо кнопка
    cy.wait(1000);
    cy.log('Вибір VIN');
    cy.get('.ant-table-row > :nth-child(3) > .ant-btn').click();
    cy.wait(5000);
    cy.get('[style="display: flex; justify-content: space-between; margin: -16px 0px 8px;"] > .ant-radio-group > :nth-child(2)').click();
    cy.wait(1000);
  });

  it('11.Вкладка Запчастини > Швидке редагування запчастин', function(){
    cy.visit(approve);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Запису');
    cy.wait(10000);
    cy.log('Вкладка Запчастини');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4)').click();
    cy.wait(1000);
    cy.log('Швидке редагування запчастин');
 
    cy.get(':nth-child(4) > .ant-btn > div').first().click({force: true});
    cy.log('Вибір Запису');
    //********************************** */
    cy.wait(1000);
    cy.get(':nth-child(4) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('555');
    cy.wait(1000);
    cy.get(':nth-child(5) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('777');
    cy.wait(1000);
    cy.get(':nth-child(6) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type('2');
    cy.wait(1000);
    //cy.get('.ant-btn-primary').click({force: true});//ОК;
    //cy.get('button').first().click({force: true});
    cy.pause()
    cy.get('.ant-modal > .ant-modal-content > .ant-modal-footer > div > .ant-btn-primary').first().click({force: true});
    cy.wait(1000);
    cy.get('.styles-m__headerContorls---2pU_V > .anticon-save').click() // зберегти картку
    cy.log('Процес Збереження н/з ');
    cy.wait(5000);
  });

  it('12.Узгодження замовлення', function(){
    cy.visit(approve)
        .then(()=>{
            cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
            cy.log('Вибір Н/З');
            cy.wait(5000);
        })
        .then(()=>{
            cy.get('#У > .styles-m__mapChildsBlock---1oGYD > :nth-child(1) > .ant-btn').click();
            cy.wait(5000);
            cy.log('Очікування Повідомлення відправлено на номер клієнту');
            ////cy.get('.ant-notification-notice-message').contains('Повідомлення відправлено');
        })
        .then(()=>{
            cy.log('Підтвердіть замовлення ч/з мобільний телефон');
        })
        .then(()=>{
            cy.get('#У > .styles-m__mapChildsBlock---1oGYD > :nth-child(3) > .ant-btn').click();
            cy.wait(1000);
            cy.pause()
        })
  });


// //  it('13.Перед ремонтом', function(){
// //     cy.visit(approve);
// //     cy.wait(3000);
// //     cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
// //     cy.log('Вибір Н/З');
// //     cy.wait(4000);
// //     cy.log('Прийміть а/м, завантаження файлу');
// //     cy.get(':nth-child(7) > .styles-m__mapChildsBlock---1oGYD > .styles-m__YELLOW---1ZijW > .ant-btn').click();
// //     cy.wait(1000);
// //     cy.log('Видайте з/ч механіку');
// //     cy.get(':nth-child(7) > .styles-m__mapChildsBlock---1oGYD > .styles-m__GREEN---3ajU1 > .ant-btn').click();

// //     cy.log('Видайте спецінструмент механіку');
// //     cy.get(':nth-child(7) > .styles-m__mapChildsBlock---1oGYD > :nth-child(3) > .ant-btn').click();
// //     cy.wait(3000);
// //     cy.log('Модалка складу');
// //     cy.get('[style="position: relative;"] > .ant-select > .ant-select-selection').click();
// //     cy.wait(2000);
// //     cy.get('.ant-select-dropdown-menu-item-active').click();
// //     cy.wait(1000);
// //     cy.get('.ant-badge > .anticon > svg').click();
// //     cy.wait(1000);
// //     cy.log('Видача інструменту кнопка+');
// //     cy.get('.ant-table-row > :nth-child(1) > .ant-btn').click()
// //     cy.wait(3000);
// //     cy.get('.ant-btn > div').click()
// //     cy.wait(1000);
// //     cy.log('Каталог');
// //     cy.get('#rcDialogTitle3 > span').contains('Каталог')
// //     cy.wait(2000);
// //     cy.get('[data-row-key="0"] > :nth-child(9) > .ant-btn').click()
// //     cy.wait(2000);
  
// //     cy.get('[style="min-width: 140px;"] > .ant-select > .ant-select-selection').click()
// //     cy.wait(1000);
// //     cy.get('[style="min-width: 140px;"] > .ant-select > .ant-select-selection').type('100');
// //     cy.wait(1000);
// //     cy.get('.ant-select-dropdown-menu > :nth-child(2)').click();
    
// //     cy.wait(2000);
// //     cy.get('.ant-input-number-input').clear().type('2')
// //     cy.wait(1000);
// //     cy.get('.ant-modal-footer > div > .ant-btn-primary').first().click({force: true});

// //     cy.wait(1000);
// //     cy.log('Перевести в статус Враховано');
// //     cy.get('.ant-dropdown-trigger > span').click();// Статус Враховано
// //     cy.wait(1000);
// //     cy.get('.ant-dropdown-menu-item').contains('Врах.').click()
// //     cy.wait(2000);
// //     cy.get('.ant-btn').first().click({force: true});
// //     cy.wait(4000);
// //     cy.log('Друк документа');
// //     cy.get('.styles-m__headerContorls---2pU_V > :nth-child(1) > div > .anticon > svg').click();
// //     cy.wait(2000);
// //     cy.log('Закрити модалку');
// //     cy.get('.anticon-close > svg').first().click();
// //     ///
// //     //cy.log('Роздрукуйте н/з в цех');
// //     //cy.get(':nth-child(7) > .styles-m__mapChildsBlock---1oGYD > :nth-child(4) > .ant-btn').click();
// //     cy.pause()
// //   })

it('13.1 Перевід у статус Ремонту', function(){
    cy.visit(approve);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Н/З');
    cy.wait(4000);
    cy.wait(7000);
    cy.log('Переведіть н/з в статус Ремонт');
    cy.get('.styles-m__dropdownTitle---3Vlog > :nth-child(2) > span').click();
    cy.wait(1000);
    cy.get('.ant-dropdown-menu-item').contains('Ремонт').click()
    cy.wait(3000);
    cy.pause()
})

it('14.Ремонт (Р)', function(){
  cy.visit(progress);
  cy.wait(3000);
  cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
  cy.log('Вибір Н/З');
  cy.wait(4000);
  ////cy.log('Перемістіть а/м в цех')
  ////cy.get('#Р > .styles-m__mapChildsBlock---1oGYD > :nth-child(1) > .ant-btn').click();
  ////cy.log('Модалка видача авто клієнту');
  ///cy.get('.styles-m__locationToLocationWrapper---IH58W > :nth-child(2) > .ant-select > .ant-select-selection').click();
  ////cy.wait(2000);
  ////cy.get('.ant-select-dropdown-menu-item').eq(2).click();
  ////cy.wait(2000);
  ////cy.get('.styles-m__modalButton---zblVE').click();
  cy.wait(7000);
  cy.log('Розпочніть ремонт');
  cy.get('#Р > .styles-m__mapChildsBlock---1oGYD > :nth-child(2) > .ant-btn').click();
  cy.wait(2000);
  cy.log('Клік Старт');
  cy.get('[data-row-key="0"]> :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(1)').click()
  cy.wait(1000);
  cy.get('[data-row-key="1"] > :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(1)').click()
  cy.wait(1000);
  cy.get('[data-row-key="2"] > :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(1)').click()
  cy.wait(1000);
  cy.log('Клік Фініш');
  cy.get('[data-row-key="0"]> :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(2)').first().click({force: true});
  cy.wait(1000);
  cy.get('[data-row-key="1"] > :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(2)').click()
  cy.wait(1000);
  cy.get('[data-row-key="2"] > :nth-child(9) > .styles-m__laborStageButtonsGroup---1naL1 > :nth-child(2)').click()
  cy.wait(1000);
  cy.log('Клік Завершити');
  cy.get('[style="display: flex; justify-content: space-between; margin: 12px 0px;"] > :nth-child(3) > .ant-btn').click();
  cy.wait(2000);
  cy.pause()
})

  it('Оплата і видача (ОВ)', function(){
    cy.visit(progress);
    cy.wait(4000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Н/З');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(1)').click();
    cy.wait(1000);
    cy.log('Модалка Виконати наряд-замовлення?');
    cy.get('#ОВ > .styles-m__mapChildsBlock---1oGYD > :nth-child(3) > .ant-btn').click();
    cy.wait(1000);
    cy.log('Сплатити радіо-кнопка Так');
    cy.get('#withPayment > :nth-child(1) > :nth-child(2)').click();
    cy.wait(1000);
    cy.log('Вибір Каси');
    cy.get('#cashBoxId').click();
    cy.wait(1000);
    cy.get('.ant-select-dropdown-menu-item').eq(1).click();
    cy.wait(1000);
    cy.get('.styles-m__submit---2hKgG > .ant-btn-primary').click();
    cy.wait(9000);
    cy.get('.styles-m__title---Nwr2X').contains('Виконано')
    cy.wait(4000);
  });

it('Виконані Н/З друк ', function(){
    cy.visit(success);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Н/З');
    cy.wait(4000);
    cy.get('.anticon-printer > svg').click();
    cy.log('Завантаження результату діагностики');
    cy.get('.ant-dropdown-menu-item').eq(5).click();
    cy.wait(1000);
  }); 

  it('Додавання Коментарів', function(){
    let commentClients = 'Не заляпать';
    let commentVehical = 'Без царапин';
    let comment = 'Коментарі клієнта'
    cy.visit(success);
    cy.wait(4000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Н/З');
    cy.wait(4000);
    cy.log(comment);
    cy.get('#ОВ > .styles-m__mapChildsBlock---1oGYD > :nth-child(2) > .ant-btn').click();
    cy.wait(1000);
    cy.get('.ant-tabs-tabpane-active > :nth-child(2) > .ant-form-item-label > label').should('exist');
    cy.get('#comment').type(commentClients);
    cy.wait(1000);
    cy.get('#comment').contains(commentClients);
    cy.get('.styles-m__commentsBlock---vzjO9 > .ant-row > .ant-form-item-label > label').contains(comment);
    cy.log('Стан автомобіля');
    cy.get('#vehicleCondition').type(commentVehical);
    cy.get('.ant-tabs-tabpane-active > :nth-child(3) > .ant-form-item-label').should('exist');
    cy.get('#vehicleCondition').contains(commentVehical);
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(6)').contains('2')
    });

  it('Вкладка Історія в н/з', function(){
    cy.visit(success);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Запису');
    cy.wait(4000);
    cy.log('Для нового клієнта історія містить 1 елемент');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(7)').click();
    cy.get('.ant-table-row > :nth-child(2) > a').should('exist');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(7)').contains('1');
  });

// // //   it('Вкладка Дзвінки в н/з', function(){
// // //     cy.visit(success);
// // //     cy.wait(3000);
// // //     cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
// // //     cy.log('Вибір Запису');
// // //     cy.wait(4000);
// // //     cy.log('Вкладка Дзвінки');
// // //     cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(9)').click();
// // //     cy.log('В розробці....');
// // //   });

  it('Вкладка Пост в н/з', function(){
    cy.visit(success);
    cy.wait(3000);
    cy.get('a.styles-m__ordernLink---T-qWz').first().click({force: true});
    cy.log('Вибір Запису');
    cy.wait(4000);
    cy.log('Вкладка Пост');
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(9)').contains('Пост')
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(9)').click();
    cy.get('.styles-m__staticStationLoadsRow---MnLCJ > :nth-child(1)').should('exist');
  });

 })
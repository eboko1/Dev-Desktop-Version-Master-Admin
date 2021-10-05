/// <reference types="cypress" />
const url = 'test-'  // test-  //-dev // prod _
const date = new Date();
const month = date.getMonth()+1;

const numSTO = 1; //змінювати від 1 до 5
////const nameNewSTO = +date.getDate()+'-'+month+'-'+date.getFullYear()+'-'+numSTO;
////const nameNewSTO = '22022021-'+numSTO
const nameSTO ='Нове СТО '
const nameNewSTO = 'off-435678'   // test off-435678 // dev   /// prod QA test

const cb24 = 'https://my.cb24.eu/'
const baseUrl = 'https://'+url+'my.carbook.pro/';
const appointments = 'https://'+url+'my.carbook.pro/orders/appointments';
const approve = 'https://'+url+'my.carbook.pro/orders/approve';
const progress = 'https://'+url+'my.carbook.pro/orders/progress';
const success = 'https://'+url+'my.carbook.pro/orders/success';

const login = Cypress.env('TestLogin')    // TestLogin     DevLogin      ProdLogin
const pw =   Cypress.env('TestPassword')    // TestPassword  DevPassword   ProdPassword

describe ('СreateSTOTest|UA|CarBook', async () =>{
  //Створити СТО за адресою 'https://cb24.eu/' // Нове СТО дата-1// support@carbook.ua // 0672333355  //київська обл
  beforeEach('User LogIn ', () => {
    cy.log('User LogIn');
    cy.visit(baseUrl)
      .then(() => {
          ////**************PROD************************/
          cy.get('#login.ant-input').clear().type(login);  
          cy.get('#password').clear().type(pw);      
          ////******************************************/
        cy.wait(2000)
        cy.clearCookies()
     })
     .then(() => {
        cy.get('button').click()
      })
      .then(() => {
        cy.get('.styles-m__title---Nwr2X').contains('Календар Завантаження')
       })
      .then(() => {
        cy.get('.anticon-home').click()
      .then(() => {
        cy.get('#searchQuery').type(nameNewSTO)
        cy.wait(3000)
       })
       .then(() => {
        cy.get('.ant-list-item-meta-title').click()
       })
     })
     })

//    it('1. Профіль Вибір Українського ІНТЕРФЕЙСУ', function () {
//     cy.get('.styles-m__userName---h3mg1').click()
//     .then(() => {
//       cy.get('.ant-select-selection-selected-value').click()
//      })
//      .then(() => {
//       cy.contains('Українська').click();
//      })
//      .then(() => {
//       cy.get('.ant-btn').click();
//      })
//      .then(() => {
//       return cy.contains('Українська');
//      })
//     })

//    it('2. Додавання складів головного, резервного, інструменти, зона ремонту', function ()  {
//       cy.log('Вибір меню Довідник');
//       cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//       cy.wait(2000)
//       cy.contains('Довідники').click()
//       cy.get(':nth-child(3) > .styles-m__blockItems---dbKX4 > :nth-child(5) > .styles-m__buttonLink---yByDs > .ant-btn').click()
      
//       .then(() => {
//         cy.log('+Головний склад')
//         cy.get('.ant-btn').first().click();
//         cy.get('.ant-input').type('Склад');
//         cy.get('.ant-select-selection').click()
//         cy.get('.ant-select-dropdown-menu-item').eq(1).click()
//        })
//        .then(() => {
//         cy.log('Кнопка ОК');
//         cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//        })
//         .then(() => {
//           cy.log('+Резерв')
//           cy.get('.ant-btn').first().click();
//           cy.get('.ant-input').type('Резерв');
//           cy.get('.ant-select-selection').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(2).click()
//          })
//          .then(() => {
//           cy.log('Кнопка ОК');
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//          })
//          .then(() => {
//           cy.log('+Інструменти');
//           cy.get('.ant-btn').first().click();
//           cy.get('.ant-input').type('Інструменти');
//           cy.get('.ant-select-selection').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(3).click()
//          })
//          .then(() => {
//           cy.log('Кнопка ОК');
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//          })
//          .then(() => {
//           cy.log('+Склад Зона ремонту');
//           cy.get('.ant-btn').first().click();
//           cy.get('.ant-input').type('Зона ремонту');
//           cy.get('.ant-select-selection').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(4).click()
//          })
//          .then(() => {
//           cy.log('Кнопка ОК');
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//          })
//   });

//   it('3. Додавання Цінових груп: 1.2, 1.3, 1.4, 1.5, 1.6, 2  ', function ()  {
//       cy.log('Вибір меню Довідник');
//       cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//       cy.contains('Довідники').click()
//       cy.contains('Цінові групи').click()
//         .then(() => {
//           cy.get('#multiplier').click().type(1.2)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//          .then(() => {
//           cy.get('#multiplier').click().type(1.3)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//          .then(() => {
//           cy.get('#multiplier').click().type(1.4)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//          .then(() => {
//           cy.get('#multiplier').click().type(1.5)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//          .then(() => {
//           cy.get('#multiplier').click().type(1.6)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//          .then(() => {
//           cy.get('#multiplier').click().type(2)
//          })
//          .then(() => {
//           cy.get('.ant-btn').click();
//          })
//   });

//    it('4. Додаваня Локацій: робочий пост, зовнішня парковка, внутрішня парковка, тест-драйв, інші', function ()  {
//       cy.log('Вибір меню Довідник');
//       cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//       cy.contains('Довідники').click()
//       cy.contains('Довідник локацій').click()
//         .then(() => {
//           cy.get('.styles-m__headerContorls---2pU_V > .ant-btn').click();
//          })
//          .then(() => {
//           var n = 5
//           cy.get('.ant-input').type('Цех. Робочий пост')
//           cy.get('.ant-select-selection__rendered').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(0).click()
//           cy.get(':nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(n)
//           cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(2*n)
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//          })
//          .then(() => {
//           cy.get('.styles-m__headerContorls---2pU_V > .ant-btn').click();
//          })
//          .then(() => {
//          var n = 10
//          cy.get('.ant-input').type('Внутрішня парковка')
//          cy.get('.ant-select-selection__rendered').click()
//          cy.get('.ant-select-dropdown-menu-item').eq(1).click()
//          cy.get(':nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(n)
//          cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(2*n)
//          cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//         })
//         .then(() => {
//           cy.get('.styles-m__headerContorls---2pU_V > .ant-btn').click();
//          })

//         .then(() => {
//          var n = 15
//          cy.get('.ant-input').type('Зовнішня парковка')
//          cy.get('.ant-select-selection__rendered').click()
//          cy.get('.ant-select-dropdown-menu-item').eq(2).click()
//          cy.get(':nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(n)
//          cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(2*n)
//          cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//         })
//         .then(() => {
//           cy.get('.styles-m__headerContorls---2pU_V > .ant-btn').click();
//          })
//         .then(() => {
//          var n = 20
//          cy.get('.ant-input').type('Тест-драйв')
//          cy.get('.ant-select-selection__rendered').click()
//          cy.get('.ant-select-dropdown-menu-item').eq(3).click()
//          cy.get(':nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(n)
//          cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(2*n)
//          cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//         })
//         .then(() => {
//          cy.get('.styles-m__headerContorls---2pU_V > .ant-btn').click();
//          })
//         .then(() => {
//          var n = 25
//          cy.get('.ant-input').type('Інші')
//          cy.get('.ant-select-selection__rendered').click()
//          cy.get('.ant-select-dropdown-menu-item').eq(4).click()
//          cy.get(':nth-child(1) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(n)
//          cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(2*n)
//          cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//         })
//   });

//    it('5. Додавання Каси: готівкова, безготівкова, картка', function ()  {
//       cy.log('Вибір меню Налаштування');
//       cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//       cy.contains('Довідники').click()
//       cy.contains('Налаштування каси').click()
//         .then(() => {
//           cy.log('Каса Готівкова');
//           cy.get('.ant-btn').click()
//           cy.get('#name').type('КасаГотівкова')
//           cy.get('.ant-select-selection').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(0).click()
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//           cy.wait(2000)
//           })
//         .then(() => {
//           cy.log('Каса Безготівкова');
//           cy.get('.ant-btn').click()
//           cy.get('#name').type('КасаБезготівкова')
//           cy.get('.ant-select-selection').click()
//           cy.get('.ant-select-dropdown-menu-item').eq(2).click()
//           cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//           cy.wait(2000)
//           })
//         .then(() => {
//             cy.log('Каса РРО');
//             cy.get('.ant-btn').click()
//             cy.get('#name').type('КасаГотівковаРРО')
//             cy.get('.ant-select-selection').click()
//             cy.get('.ant-select-dropdown-menu-item').eq(0).click()
//             cy.get('#fiscalNumber').clear().type('4000055245')
//             cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//             cy.wait(2000)
//           })
//           .then(() => {
//               cy.log('Каса РРО');
//               cy.get('.ant-btn').click()
//               cy.get('#name').type('КасаБезготівковаРРО')
//               cy.get('.ant-select-selection').click()
//               cy.get('.ant-select-dropdown-menu-item').eq(2).click()
//               cy.get('#fiscalNumber').clear().type('4000055245')
//               cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
//               cy.wait(2000)
//           })
//     })

//   it('6. Додавання Реквізитів', function ()  {
//   cy.log('Вибір меню Налаштування');
//   cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//   cy.contains('Довідники').click()
//   cy.contains('Реквізити').click()
//     .then(() => {
//       cy.log('+Реквізити_без_ПДВ');
//       cy.get('.ant-btn').first().click();
//       cy.get('#name').type('Реквізити_без_ПДВ')
//       cy.get('#address').type('01015, Київ, вулиця Лаврська, 15')
//       cy.get('#ifi').type('000000')
//       cy.get('#ca').type('UA000000000000000000')
//       cy.get('#bank').type('ПриватБанк')
//       cy.get(':nth-child(2) > .ant-col-12 > .ant-form-item-control > .ant-form-item-children > .ant-btn').click();
//     })
//     .then(() => {
//       cy.log('+Реквізити з ПДВ');
//       cy.get('.ant-btn').first().click();
//       cy.get('#name').type('Реквізити_з_ПДВ')
//       cy.get('#address').type('01015, Київ, вулиця Лаврська, 15')
//       cy.get('#ifi').type('000000')
//       cy.get('#ca').type('UA000000000000000000')
//       cy.get('#bank').type('ПриватБанк')
//       cy.get('#isTaxPayer > :nth-child(1)').click()
//       cy.get(':nth-child(2) > .ant-col-12 > .ant-form-item-control > .ant-form-item-children > .ant-btn').click();
//     })
//   })


//   it('7. Додавання націнки для Групи товарів', function ()  {
//     cy.log('Вибір меню Довідник');
//     cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//     cy.contains('Довідники').click()
//       .then(() => {
        
//          cy.contains('Групи товарів').click()
//       })
//       .then(() => {
//         cy.log('Додавання націнки для автозапчастин');
//         cy.get(':nth-child(1) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//         cy.get('.anticon-edit').click()
//         cy.get('#priceGroupNumber > .ant-select-selection').click()
//         cy.wait(2000)
//         cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
//         cy.get('.sc-bxivhb').click()
//         cy.get('.ant-btn-primary').click()
//         cy.wait(2000)
//      })
//      .then(() => {
//       cy.log('Додавання націнки Кузов, оптика');
//       cy.get(':nth-child(2) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(2000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//       })
//     .then(() => {
//       cy.log('Додавання націнки Мастила, оливи');
//       cy.get(':nth-child(3) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(1000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//       })
//     .then(() => {
//       cy.log('Додавання націнки Шини, диски');
//       cy.get(':nth-child(4) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(1000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(4)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//     })
//     .then(() => {
//       cy.log('Додавання націнки Аудіо та Електроніка');
//       cy.get(':nth-child(5) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(2000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(5)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//     })
//     .then(() => {
//       cy.log('Додавання націнки Авто аксесуари');
//       cy.get(':nth-child(6) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(1000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(6)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//     })
//     .then(() => {
//       cy.log('Додавання націнки Інструменти та обладнання');
//       cy.get(':nth-child(7) > .ant-tree-node-content-wrapper > .ant-tree-title > :nth-child(1)').click()
//       cy.get('.anticon-edit').click()
//       cy.get('#priceGroupNumber > .ant-select-selection').click()
//       cy.wait(1000)
//       cy.get('.ant-select-dropdown-menu > :nth-child(6)').click()
//       cy.get('.sc-bxivhb').click()
//       cy.get('.ant-btn-primary').click()
//       cy.wait(2000)
//     })
//   })

// // //   it('8. Налаштування наявності', function ()  {
// // //     cy.log('Вибір меню Адміністрування');
// // //     cy.get(':nth-child(8) > .ant-menu-submenu-title').click()
// // //       .then(() => {
// // //          cy.contains('Налаштування наявності').click()
// // //       })
// // //       .then(() => {
// // //         cy.get('[data-row-key="0"] > :nth-child(1) > .ant-select > .ant-select-selection').type('Авто Стандарт Груп (АСГ)')
// // //         cy.get('.ant-select-dropdown-menu > :nth-child(1)').first().click({ force: true })
// // //       })
// // //       .then(() => {
// // //         cy.get('[data-row-key="1"] > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').type('АНД')
// // //         cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //       })
// // //      .then(() => {
// // //         cy.get('[data-row-key="2"] > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').type('Омега')
// // //         cy.get('.ant-select-dropdown-menu > :nth-child(1)').first().click({ force: true })
// // //       })
// // //       .then(() => {
// // //         cy.get('[data-row-key="3"] > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').type('Интеркарс')
// // //         cy.get('.ant-select-dropdown-menu > :nth-child(1)').first().click({ force: true })
// // //       })
// // //       .then(() => {
// // //         cy.get('[data-row-key="4"] > :nth-child(1) > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').type('Зип-АВТО')
// // //         cy.get('.ant-select-dropdown-menu > :nth-child(1)').first().click({ force: true })
// // //       })
// // //      .then(() => {
// // //       cy.get('[data-row-key="0"] > :nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type(40)
// // //       cy.get('[data-row-key="1"] > :nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type(40)
// // //       cy.get('[data-row-key="2"] > :nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type(40)
// // //       cy.get('[data-row-key="3"] > :nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type(40)
// // //       cy.get('[data-row-key="4"] > :nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').clear().type(10)
// // //     })
// // //     .then(() => {
// // //       cy.get('[data-row-key="0"] > :nth-child(3) > .ant-select > .ant-select-selection').type('CKV (ЦС Київ)')
// // //       cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //       cy.get('[data-row-key="1"] > :nth-child(3) > .ant-select > .ant-select-selection').type('CKV (ЦС Київ)')
// // //       cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //       cy.get('[data-row-key="2"] > :nth-child(3) > .ant-select > .ant-select-selection').type('CKV (ЦС Київ)')
// // //       cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //       cy.get('[data-row-key="3"] > :nth-child(3) > .ant-select > .ant-select-selection').type('CKV (ЦС Київ)')
// // //       cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //       cy.get('[data-row-key="4"] > :nth-child(3) > .ant-select > .ant-select-selection').type('CKV (ЦС Київ)')
// // //       cy.get('.ant-select-dropdown-menu > :nth-child(2)').first().click({ force: true })
// // //     })
  
// // // //*********************************переробити*************************************************** */
// // //     .then(() => {
// // //         cy.get('[data-row-key="0"] > :nth-child(4) > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
// // //         cy.get('.ant-select-dropdown-menu-item-active').click()
// // //         cy.wait(1000)
// // //         cy.get('[data-row-key="1"] > :nth-child(4) > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
// // //         cy.get('.ant-select-dropdown-menu-item-active').eq(38).click({force: true })
// // //         cy.wait(1000)
// // //         cy.get('[data-row-key="2"] > :nth-child(4) > .ant-select > .ant-select-selection').click()
// // //         cy.get('.ant-select-dropdown-menu-item-active').eq(5).click({force: true })
// // //         cy.get('[data-row-key="3"] > :nth-child(4) > .ant-select > .ant-select-selection').click()
// // //         cy.get('.ant-select-dropdown-menu-item-active').eq(26).click({force: true })
// // //         cy.get('[data-row-key="4"] > :nth-child(4) > .ant-select > .ant-select-selection').click()
// // //         cy.get('.ant-select-dropdown-menu-item-active').eq(23).click({force: true })
// // //     })
// // // })

// /////************************************************************************************ */
//   it('9. Імпорт Шаблонів діагностики', function ()  {
//       cy.log('Вибір меню Довідник');
//       cy.get(':nth-child(2) > .ant-menu-submenu-title').click()
//       cy.contains('Довідники').click()
//       cy.contains('Шаблони діагностики').click()
//         .then(() => {
//           cy.get('button').first().click();
//           cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
//           cy.wait(3000)
//          })
//   });
 
//   it('10*. Перемикання СТО на cb24.eu ', function ()  {
//     cy.log('Вибір Налаштування в carbook');
//     cy.get(':nth-child(7) > .ant-menu-submenu-title').click()
//     cy.wait(2000)
//     cy.contains('Основні').click()
//     //cy.get('.user-block__button').click()
//     cy.wait(3000)
//         .then(() => {
//           cy.log('Вхід на cb24.eu');
//           cy.get('#login.ant-input').type(login);  
//           cy.get('#password').type(pw);       
//           cy.wait(2000)
//           cy.clearCookies()
//           cy.get('.form__button').click()
//           cy.wait(2000)
//         })
//       .then(() => {
//           cy.log('Перемикання СТО на cb24.eu');
//           cy.get('.source-block__relogin-icon').click()
//           cy.wait(2000)
//           cy.get('#_search').clear().type(nameNewSTO)
//           cy.get('.change-business-modal__table-td > a').click()
//       })
//       .then(() => {
//         cy.log('Вибір Налаштування в cb24.eu, + URL');
//         cy.get('.modules-menu__item_settings > div.modules-menu__link > .modules-menu__link-inner').click()
//         cy.contains('Основні').click()
//         cy.wait(4000)
//         cy.get('#_synonym').clear().type(nameNewSTO)
//       })
//       .then(() => {
//         cy.log('Чек-бокс СТО');
//         cy.get('._isGarage > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.wait(4000)
//       })
//       .then(() => {
//         cy.log('Кнопка зберегти');
//         cy.get('.tab-panel_selected > .settings-page__form > .settings-page__form-footer > .form__button-wrap > .form__button').click()
//         cy.wait(3000)
//         cy.reload()
//       })
//       .then(() => {
//         cy.log('Контакти Київ, + мобільний');
//         cy.wait(3000)
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=10.$/=11"] > .tabs-list__tab-link').click()
//         cy.wait(3000)
//         cy.get('.gm-style > :nth-child(6) > .undefined').clear().type('Київ')
//         cy.wait(3000)
//         cy.get('.pac-container > :nth-child(1)').click()
//         cy.wait(3000)
//         cy.get('#_phones0').clear().type('0672333355')
//         cy.get('.tab-panel_selected > .settings-page__form > .settings-page__form-footer > .form__button-wrap > .form__button').click()
//         cy.wait(3000)
//         cy.get('.gm-style > :nth-child(6) > .undefined').clear().type('Тут буде адрес нової СТО')
//         cy.get('.tab-panel_selected > .settings-page__form > .settings-page__form-footer > .form__button-wrap > .form__button').click()
//         cy.wait(3000)
//       })
//       .then(() => {
//         cy.log('+ Час роботи');
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=10.$/=13"] > .tabs-list__tab-link').click()
//         cy.wait(1000)
//         cy.get('._startTimeHours > .form__select-rel > .Select > .Select-control > .Select-placeholder').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=14.0.$/=10.1:$0.1.1.0.0.0.2.0.$option-09"]').click()
//         cy.get('._stopTimeHours > .form__select-rel > .Select > .Select-control > .Select-placeholder').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=14.0.$/=10.1:$0.1.1.3.0.0.2.0.$option-18"]').click()
//         cy.get('._stopTimeMinutes > .form__select-rel > .Select > .Select-control > .Select-placeholder').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=14.0.$/=10.1:$0.1.1.4.0.0.2.0.$option-00"]').click()
//         cy.get('#_minimalTimeOrder').clear().type(48)
//         cy.wait(1000)
//         cy.get('#_timeToEndWorkingDay').clear().type(2)
//         cy.wait(1000)
//         cy.get('.tab-panel_selected > .settings-page__form > .settings-page__form-footer > .form__button-wrap > .form__button').click()
//       })
//       .then(() => {
//         cy.log('+ Пости');
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=10.$/=14"] > .tabs-list__tab-link').click()
//         cy.get('.settings-page__stations-table_add-link-text').click()
//         cy.get('#_stationName').clear().type('№1')
//         cy.get('.settings-page__stations-save-button').click()
//         cy.get('.settings-page__stations-table_add-link-text').click()
//         cy.get('#_stationName').clear().type('№2')
//         cy.get('.settings-page__stations-save-button').click()
//         cy.get('.settings-page__stations-table_add-link-text').click()
//         cy.get('#_stationName').clear().type('№3')
//         cy.get('.settings-page__stations-save-button').click()
//       })
//       .then(() => {
//         cy.log('Особливості');
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=10.$/=16"] > .tabs-list__tab-link').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=17.0.$/=10.$free_wifi/=11=2$free_wifi"] > .form__checkbox-wrap > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=17.0.$/=10.$cafe/=11=2$cafe"] > .form__checkbox-wrap > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=17.0.$/=10.$rest/=11=2$rest"] > .form__checkbox-wrap > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=17.0.$/=10.$warranty/=11=2$warranty"] > .form__checkbox-wrap > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=17.0.$/=10.$autoparts/=11=2$autoparts"] > .form__checkbox-wrap > .form__checkbox-label > .form__checkbox-inner > .icheckbox > .iCheck-helper').click()
//         cy.wait(3000)
//         cy.get('.tab-panel_selected > .settings-page__form > .settings-page__form-footer > .form__button-wrap > .form__button').click()
//       })
//    })

//   it('11. Спеціалізація та ціни на cb24.eu ', function ()  {
//     cy.clearCookies()
//     cy.wait(2000)
//     cy.log('Вибір Налаштування в carbook');
//     cy.get(':nth-child(7) > .ant-menu-submenu-title').click()
//     cy.wait(2000)
//     cy.contains('Основні').click()
//     cy.wait(3000)
//         .then(() => {
//           cy.log('Вхід на cb24.eu');
//           cy.clearCookies()
//           cy.get('#login.ant-input').type(login);  
//           cy.get('#password').type(pw);      
//           cy.get('.form__button').click()
//           cy.wait(2000)
//           cy.clearCookies()
//           cy.wait(2000)
//         })
//         .then(() => {
//           cy.log('Меню Спеціалізація та ціни');
//           cy.get('.modules-menu__item_settings > div.modules-menu__link > .modules-menu__link-inner').click()
//           cy.contains('Спеціалізація та ціни').click()
//           cy.wait(4000)
//         })
//       .then(() => {
//           cy.log('Перемикання СТО на cb24.eu');
//           cy.get('.source-block__relogin-icon').click()
//           cy.wait(2000)
//           cy.get('#_search').clear().type(nameNewSTO)
//           cy.get('.change-business-modal__table-td > a').click()
//           cy.wait(2000)
//       })
//       .then(() => {
//           cy.log('+ American cars, ...');
//           cy.get('._serveVehicleGroups > .form__select-rel > .Select > .Select-control > .Select-placeholder').click()
//           cy.wait(2000)
//           cy.get('.Select-menu > .is-focused').click()
//           cy.wait(1000)
//           cy.get('._serveVehicleGroups > .form__select-rel > .Select > .Select-control').click()
//           cy.wait(2000)
//           cy.get('[data-reactid=".0.0.2.0.1.1.4.0.0.2.0.$option-2"]').click()
//           cy.wait(1000)
//           cy.get('._serveVehicleGroups > .form__select-rel > .Select > .Select-control').click('right')
//           cy.wait(3000)
//           cy.get('[data-reactid=".0.0.2.0.1.1.4.0.0.2.0.$option-4"]').click()
//           cy.wait(2000)
//           cy.get('._serveVehicleGroups > .form__select-rel > .Select > .Select-control').click('right')
//           cy.wait(2000)
//           cy.get('[data-reactid=".0.0.2.0.1.1.4.0.0.2.0.$option-3"]').click()
//       })
//       .then(() => {
//         cy.log('Вартість нормо годин');
//         cy.get('[data-reactid=".0.0.2.0.1.0.$/=10.$/=11"] > .tabs-list__tab-link').click()
//         cy.wait(2000)
//         cy.get('#_generalCost').clear().type(300)
//       })
//   })

//  it('12. + Послуг на cb24.eu ', function ()  {
//     cy.log('Вибір Налаштування в carbook');
//     cy.get(':nth-child(7) > .ant-menu-submenu-title').click()
//     cy.wait(2000)
//     cy.contains('Основні').click()
//     cy.wait(3000)
//         .then(() => {
//           cy.log('Вхід на cb24.eu');
//           cy.pause()
//          // cy.get('#login.ant-input').type(login);  
//          //cy.get('#password').type(pw);   
//           cy.get('#_identity').type(login); 
//           cy.get('#_password').type(pw);      
//           cy.wait(2000)
//           cy.clearCookies()
//           cy.get('.form__button').click()
//           cy.wait(2000)
//         })
//         .then(() => {
//           cy.log('Меню Налаштування/Послуги');
//           cy.get('.modules-menu__item_settings > div.modules-menu__link > .modules-menu__link-inner').click()
//           cy.contains('Послуги').click()
//           cy.wait(4000)
//         })
//       .then(() => {
//           cy.log('Перемикання СТО на cb24.eu');
//           cy.get('.source-block__relogin-icon').click()
//           cy.wait(2000)
//           cy.get('#_search').clear().type(nameNewSTO)
//           cy.get('.change-business-modal__table-td > a').click()
//           cy.wait(2000)
//       })
//        .then(() => {
//         cy.log('+ Послуг');
//         for (let i=0; i<13; i++){
//          cy.get('.service-categories__table_add-link-text').click()
//          cy.wait(1000) 
//         } 
//        })
//       })

      it('12.1 + Діагностика ', function ()  {
        cy.log('Вибір Налаштування в carbook');
        cy.get(':nth-child(7) > .ant-menu-submenu-title').click()
        cy.wait(2000)
        cy.contains('Основні').click()
        cy.wait(3000)
            .then(() => {
              cy.log('Вхід на cb24.eu');
              cy.pause()
              // cy.get('#login.ant-input').type(login);  
              // cy.get('#password').type(pw); 
              // cy.get('#_identity').type(login); 
              // cy.get('#_password').type(pw);        
              // cy.wait(2000)
              // cy.clearCookies()
              // cy.get('.form__button').click()
              // cy.wait(2000)
            })
            .then(() => {
              cy.log('Меню Налаштування/Послуги');
              cy.get('.modules-menu__item_settings > div.modules-menu__link > .modules-menu__link-inner').click()
              cy.contains('Послуги').click()
              cy.wait(4000)
            })
          .then(() => {
              cy.log('Перемикання СТО на cb24.eu');
              cy.get('.source-block__relogin-icon').click()
              cy.wait(2000)
              cy.get('#_search').clear().type(nameNewSTO)
              cy.get('.change-business-modal__table-td > a').click()
              cy.wait(2000)
          })
  
         .then(() => {
       ///********************************1**СЕРВІСНЕ ТО***t24**************************************** */
        // cy.log('+підкатегорій СЕРВІСНЕ ТО');
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$0"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //     for (let i=0; i<40; i++){
        //       cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //       cy.wait(1000) 
        //      } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()
         })
         .then(() => {  
       /////*****************************2**ГАЛЬМІВНА СИСТЕМА***t31************************************************ */
        //  cy.log('+підкатегорій ГАЛЬМІВНА СИСТЕМА');
        //   cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$1"] > [style="text-align:center;"] > a').click()
        //   cy.get('.form__button').click()
        //       for (let i=0; i<45; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        //     cy.log('Клік до списку категорій');
        //     cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()
           ///**************************3**ПІДВІСКА***t39*************************************************** */
          //  cy.log('+підкатегорій ПІДВІСКА');
          //  cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$2"] > [style="text-align:center;"] > a').click()
          //  cy.get('.form__button').click()
          //      for (let i=0; i<48; i++){
          //        cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
          //        cy.wait(1000) 
          //      } 
          //    cy.log('Клік до списку категорій');
          //    cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
               /**************************4*РУЛЬОВЕ КЕРУВАННЯ**t16********************************************** */
          //  cy.log('+підкатегорій РУЛЬОВЕ КЕРУВАННЯ');
          //   cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$3"] > [style="text-align:center;"] > a').click()
          //   cy.get('.form__button').click()
          //         for (let i=0; i<20; i++){
          //           cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
          //           cy.wait(1000) 
          //         } 
          //       cy.log('Клік до списку категорій');
          //       cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
           /**************************5**ДВИГУН**t43**************************************************** */
            // cy.log('+підкатегорій ПІДВІСКА');
            // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$4"] > [style="text-align:center;"] > a').click()
            // cy.get('.form__button').click()
            //       for (let i=0; i<60; i++){
            //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
            //         cy.wait(1000) 
            //       } 
            //     cy.log('Клік до списку категорій');
            //     cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
          /**************************6*ПАЛИВНА СИСТЕМА**t23**************************************** */
          // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$5"] > [style="text-align:center;"] > a').click()
          // cy.get('.form__button').click()
          //       for (let i=0; i<28; i++){
          //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
          //         cy.wait(1000) 
          //       } 
          //     cy.log('Клік до списку категорій');
          //     cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
         // //**************************7**ЕЛЕКТРИКА**t32**************************************************** */
          // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$6"] > [style="text-align:center;"] > a').click()
          // cy.get('.form__button').click()
          //       for (let i=0; i<41; i++){
          //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
          //         cy.wait(1000) 
          //       } 
          // cy.log('Клік до списку категорій');
          // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()      
        ////**************************8**ВИХЛОПНА СИСТЕМА**t16**************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$7"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<22; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
        ////**************************9*ЗЧЕПЛЕННЯ**t10***************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$8"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<11; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()    
       // //**************************10*ТРАНСМІСІЯ*t31****************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$9"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<33; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click() 
       //**************************11*КЛІМАТ-КОНТРОЛЬ**t26***************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$10"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<30; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()   
         //**************************12**КУЗОВ**t47**************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$11"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<68; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()   
        //**************************13**ГБО***t11*************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$12"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<11; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()   
        //**************************14**ДОДАТКОВО**22**************************************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$13"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<27; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()   
        ////**************************15**ОБОВ'ЯЗКОВИЙ ТЕХНІЧНИЙ КОНТРОЛЬ***t14***************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$14"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<14; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()   
        //**************************16**СТРАХУВАННЯ***t6***************************** */
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$15"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<7; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
        //**************************17**СЕРВІС ЕЛЕКТРОМОБІЛІВ***t11***************************/
        // cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$16"] > [style="text-align:center;"] > a').click()
        // cy.get('.form__button').click()
        //       for (let i=0; i<11; i++){
        //         cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //         cy.wait(1000) 
        //       } 
        // cy.log('Клік до списку категорій');
        // cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
         //**************************18**РЕМОНТ ДВИГУНА**t88*********************/
        //  cy.get('[data-reactid=".0.0.2.0.1.2.0.1.1:$17"] > [style="text-align:center;"] > a').click()
        //  cy.get('.form__button').click()
        //        for (let i=0; i<87; i++){
        //          cy.get('[data-reactid=".0.0.2.0.1.1.0.1.1:$'+i+'"] > [style="text-align:center;width:60px;"]').click()
        //          cy.wait(1000) 
        //        } 
        //  cy.log('Клік до списку категорій');
        //  cy.get('[data-reactid=".0.0.2.0.0.1.0.1"]').click()  
        
    })
  })
})
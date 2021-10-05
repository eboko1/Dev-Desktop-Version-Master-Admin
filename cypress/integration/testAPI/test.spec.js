const baseApiUrl= Cypress.env('baseApiUrl')   //test-  // dev-  //
var user = 'test@admin.com'                         //test    // dev   //prod
var password='456789'

Cypress.config('baseUrl', baseApiUrl)     
        
describe ('Carbook', ()=>{
    
        it('Login', ()=>{
            cy.request('POST', '/login',  {login: user ,password: password })   //.request({ url:'/login', method:'POST',  body: {login: user ,password: password })
               .then((res) => {
                    localStorage.setItem('jwt',res.body.token)
                    expect(res.status).to.eq(200)  
                    expect(res).to.have.property('status',200)
                    expect(res.body).to.not.be.null })
                //cy.getCookie('cypress-session-cookie').should('exist')
        })

        it('Список клієнтів', ()=>{
            cy.request({
                 url:'/store_products',
                 method:'GET' 
                 //  auth: {login: user ,password: password }
                }).then((res) => {
                        cy.log(res)
                    })
                
        })
})
            


  
      

    

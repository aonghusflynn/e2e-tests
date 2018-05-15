describe('These are the tests for the homepage prospect version', () => {
    
    const locales = ['eu', 'fr', 'uk', 'de', 'it', 'se', 'fi', 'nl', 'es', 'dk'];
    for (let i = 0; i < locales.length; ++i) {
        before(function() {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('https://www.salesforce.com/' + locales[i] + '/?forceprofile=prospect');
        })
       //page renders
        it('should not be a 404 page', function() {
            cy.title().should('not.include', '404')
        })

       
        
        //Page has visible free trial
        it('Page has visible free trial', function() {
            
          
            cy.get('.navbar_free_trial>.btn-container a')
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', /*'https://www.salesforce.com/'+locales[i]+ */'/form/signup/freetrial-sales-pe.jsp')
            .then((href) => {
                cy.request(href).its('status').should('equal', 200)     
              })
          
          
        })

         //Page has login Button & goes to correct location
         it('page has login button', function() {
          
            cy.get('.nav_login>.btn-container a')
            .should('have.attr', 'href')
            .and('include', 'https://login.salesforce.com/' /*?locale='+ locales[i]*/)
            .then((href) => {
                cy.request(href).its('status').should('equal', 200)     
              })
          
        })


         //Page has nav
         it('Page has nav', function() {
            
            cy.get('.expandableNavigationBarComponent')
            .should('be.visible')

        })

       




      
           //DEMO CTA appears & goes to correct location
           it('DEMO CTA appears & goes to correct location', function(){
            cy.get('.jumbo-content-wrap').find('.cta_0>.btn-container a').should('have.attr', 'href')
            .and('include', /*'https://www.salesforce.com/'+locales[i]+*/'/form/demo/demo-overview.jsp')
            .then((href) => {
                cy.request(href).its('status').should('equal', 200)     
              })
          
          
        })

          //Free Trial CTA in jumbotron goes to correct location - not required - place keeping code as reference
         it('Free Trial CTA goes to correct location', function() {
            
            cy.get('.cta_1>.btn-container a').then(($myUrl) => {
                const href = $myUrl.prop('href')
                let url = href
                cy.request(url).its('status').should('equal', 200)              
            })
          
        })

 

   
    }
   
    
    })

        

     


describe('These are the tests for the homepage prospect version', () => {
    
    const locales = ['eu'/*, 'fr', 'uk', 'de', 'it', 'se', 'fi', 'nl', 'es', 'dk'*/];
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

       
         

        //Free Trial CTA goes to correct place
        it('Free Trial CTA goes to correct place', function() {
            
            cy.get('.cta_1>.btn-container a').then(($myUrl) => {
                const href = $myUrl.prop('href')
                let url = href
                cy.request(url).its('status').should('equal', 200)              
            })
          
        })

         //Page has login Button
         it('page has login button', function() {
          
            cy.get('.nav_login>.btn-container a')
            .should('have.attr', 'href')
            .and('include', 'login')
            .then((href) => {
                cy.request(href).its('status').should('equal', 200)     
              })
          
        })



   
    }
   
    
    })

        

     


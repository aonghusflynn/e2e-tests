const locales = ['nl', 'fr', 'uk', 'eu', 'de'];



describe('These are the tests for the EMEA core Sales Cloud SEM pages', () => {
    
    for (let i = 0; i < locales.length; ++i) {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            
            console.log('Error message: ' + err)
            return false
            })
        /*before(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('https://www.salesforce.com/' + locales[i] + '/campaign/sem/sales-cloud/');
          })*/
        //page renders
        it('should not be a 404 page ' + locales[i], function() {
            cy.visit('https://www.salesforce.com/' + locales[i] + '/campaign/sem/sales-cloud/');
            cy.title().should('not.include', '404')
        
        })

        //Check if Nav is not existing
        it('should not have a nav '+ locales[i], function() {
            cy.get('nav')
            .should('not.have.class', 'navbar')
            
        })

        //Check if Login button is not existing
        it('should not have a log in btn '+ locales[i], function() {
            cy.get('.nav_login>.btn-container a')
            .should('not.exist')
            
        })

        //Free Trial CTA in jumbotron should be visible and going to correct location
        it('Visible Free Trial CTA goes to correct location '+ locales[i], function() {
            cy.get('#main > div > div:nth-child(2) > div > div.container > div.row.columns-wrapper > div.col.text-left.col-xs-6.col-sm-9.col-md-9.col-lg-9 > div.parbase.buttonCTAComponent.section > div > div > div > a').then(($myUrl) => {
                const href = $myUrl.prop('href')
                let url = href
                cy.request(url).its('status').should('equal', 200)
            })    
        })

        // Check if Demo CTAs point to proper demo pages
        it('Check if demo ctas point to proper demo page', function() {
            cy
            // Find the el with id 'demo-sales in it'
                .get('a[href*="demo-sales"]').each(($url, index) => {
                // ...massage the subject with some arbitrary code
    
                // grab its href property
                let href = $url.prop('href')
                //console.log("href : " + href)
                
                
                }).then(($href) => {
                    //let href = $url.prop('href')
                    cy.get($href).should('contain', '/' + locales[i] + '/') 
                    
                }
            ) 
            
        })
       
    }
       
})


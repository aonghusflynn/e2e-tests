describe('These are the tests for the EMEA core Sales Cloud SEM pages', () => {
    
    const locales = ['nl', 'fr', 'uk', 'eu', 'de'];
    for (let i = 0; i < locales.length; ++i) {
        before(function() {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('https://www.salesforce.com/' + locales[i] + '/campaign/sem/sales-cloud/');
        })
       //page renders
        it('should not be a 404 page', function() {
            cy.title().should('not.include', '404')
            
        })
     }
   
    
})

        

     


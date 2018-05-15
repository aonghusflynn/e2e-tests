describe('These are the tests for the homepage customer version', () => {
    cy.viewport(2999, 2999)
    const locales = ['eu', 'fr', 'uk', 'de', 'it', 'se', 'fi', 'nl', 'es', 'dk'];
    for (let i = 0; i < locales.length; ++i) {
        before(function() {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('https://www.salesforce.com/' + locales[i] + '/?forceprofile=customer');
        })
        it('should not be a 404 page', function() {
            cy.title().should('not.include', 'Kitchen Sink')
        })
    }
})
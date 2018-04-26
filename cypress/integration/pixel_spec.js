describe('Check for pixels', function() {
    let i = 0;
    while (i < 50) {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test

            console.log('Error message: ' + err)
            return false
        })
        before(function() {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('https://www.salesforce.com/de/form/signup/freetrial-sales-pe.jsp');
        })
        it('should find Google pixel on the page', function() {
            cy.get('img[src*="1040284089"]')
        })
        it('should find LinkedIn pixel on the page', function() {
            cy.get('img[src*="pid=543"]')
        })
        it('should find Facebook pixel on the page', function() {
            cy.get('img[src*="883713368341051"]')
        })

        i++
    }
});
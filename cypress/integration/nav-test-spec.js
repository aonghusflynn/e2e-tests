describe("test the nav for broken links", function() {
    before(function() {
        cy.viewport(1400, 800)
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
        cy.visit('https://www-stg.salesforce.com/eu/?forceprofile=prospect');
    })
    it("should check the links and none should go to error page on Prod", function() {
        cy
        // Find the el with id 'some-link'
            .get('nav a').each(($myElement, index, $list) => {
            // ...massage the subject with some arbitrary code

            // grab its href property
            const href = $myElement.prop('href')
            console.log("href : " + href)

            // strip out the 'hash' character and everything after it
            const listOfAnchors = href.replace(/https:\/\/www-stg/, 'https://www')


            return listOfAnchors
        }).then(($anchors) => {
            for (const key in $anchors) {
                if ($anchors.hasOwnProperty(key)) {
                    const element = $anchors[key];

                    // make sure the anchor tags href is not undefined or empty or a phone number
                    if (element.href !== undefined && element.href !== "" && element.href.indexOf("tel:") === -1) {
                        let url = element.href.replace(/https:\/\/www-stg/, 'https://www')

                        cy.request(url).its('status').should('equal', 200)

                    }



                }
            }
        })
    });
});
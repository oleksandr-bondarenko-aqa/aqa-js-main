describe('Homework test suite', () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com')

        // navigate to Form Layouts page

        cy.get('nb-card-header:contains("Material Dark")').click()
        cy.get('a[class="ng-tns-c141-9 ng-star-inserted"]').click()
        cy.get('span[class="menu-title ng-tns-c141-11"]').click()
        cy.get('svg[class="eva eva-menu-outline"]').click()
    })

    const inputParams = [
        {user: ['Oleksandr', 'oleksandr@email.test'], expected: ['Oleksandr', 'oleksandr@email.test']}
    ]

    inputParams.forEach(({user, expected}) => {
        it("Fill Inline form", {retries: 2}, () => {

            cy.get('input[placeholder="Jane Doe"]').type(user[0])
            cy.get('input[placeholder="Jane Doe"]').should('contain.value', expected[0])
            cy.get('nb-card-body > form > input[placeholder="Email"]').type(user[1])
            cy.get('nb-card-body > form > input[placeholder="Email"]').should('contain.value', expected[1])
            cy.get('form > nb-checkbox > label > span[class="custom-checkbox"]').click()
            cy.get('form > button[class="appearance-filled size-medium shape-rectangle status-primary nb-transition"]').click()

        })
    })
})


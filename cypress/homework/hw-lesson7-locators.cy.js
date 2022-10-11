it("Homework Lesson 12",() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com')

        // navigate to Form Layouts page

        cy.get('nb-card-header:contains("Material Dark")').click()
        cy.get('a[class="ng-tns-c141-9 ng-star-inserted"]').click()
        cy.get('span[class="menu-title ng-tns-c141-11"]').click()
        cy.get('svg[class="eva eva-menu-outline"]').click()

        // Inline forms

        cy.get('input[placeholder="Jane Doe"]')
        cy.get('nb-card-body > form > input[placeholder="Email"]')
        cy.get('form > nb-checkbox > label > span[class="custom-checkbox"]')
        cy.get('form > button[class="appearance-filled size-medium shape-rectangle status-primary nb-transition"]')

        // Using the Grid

        cy.get('#inputEmail1')
        cy.get('#inputPassword2')
        cy.get('nb-radio span:contains("Option 1")')
        cy.get('nb-radio span:contains("Option 2")')
        cy.get('nb-radio input[disabled]')

        // Basic form

        cy.get('#exampleInputEmail1')
        cy.get('#exampleInputPassword1')
        cy.get('div[class="form-group"] span[class="custom-checkbox"]')
        cy.get('form[class="ng-untouched ng-pristine ng-valid"] button[class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]')

        // Form without labels

        cy.get('[placeholder="Recipients"]')
        cy.get('[placeholder="Subject"]')
        cy.get('textarea')
        cy.get('form[class="ng-untouched ng-pristine ng-valid"] button[class="status-success appearance-filled size-medium shape-rectangle nb-transition"]')

        // Block form

        cy.get('#inputFirstName')
        cy.get('#inputLastName')
        cy.get('#inputEmail')
        cy.get('#inputWebsite')
        cy.get('nb-card-body button[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]')

        // Horizontal form

        cy.get('#inputEmail3')
        cy.get('#inputPassword3')
        cy.get('div[class="offset-sm-3 col-sm-9"] span[class="custom-checkbox"]')
        cy.get('div[class="form-group row"] button[class="appearance-filled size-medium shape-rectangle status-warning nb-transition"]')
})


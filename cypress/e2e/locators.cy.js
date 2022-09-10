it.skip("CSS Locator Learning", () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying')

    //locator css by tag name
    cy.get('nav')

    //locator css by attribute
    cy.get('[placeholder]')

    //locator css by attribute value
    cy.get('[placeholder="Email"]')

    //search element by id
    cy.get('#query-btn')
    cy.get('[id="query-btn"]')

    //search element by class value
    cy.get('.btn-default')
    cy.get('.btn.btn-default')
    cy.get('[class="btn btn-default"]')

    cy.get('.nav.navbar-nav.pull-right')

    //search element by tag name and attribute name
    cy.get('input[placeholder]')

    //search element by tag name and attribute with value
    cy.get('input[placeholder="Email"]')

})

it.skip("lesson 4-5 Rozetka", function () {

    cy.visit('https://rozetka.com.ua')

    // search element by tag and 2 attributes
    cy.get('div[class="tile__inner"][data-goods-id="347871891"]')

    // search element by parent-child of direct child tag
    cy.get('rz-sidebar-fat-menu > div > ul > li')

    // search element by parent-child of indirect child tag
    cy.get('rz-sidebar-fat-menu div ul li')

    // search elements by last part of attribute
    cy.get('a > img[src$=".jpg"]')


});

it('lesson 4-5 automationteststore', function () {

    cy.visit('https://automationteststore.com/')

    // search by DOM hierarchy
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12')

    // search by attribute first part
    cy.get('a[title^="Benefit"]')

    // search by attribute full value
    cy.get('a[title*="Girl"]')

    // search element by first of the same type
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:first-of-type')

    // search element by last of the same type
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:last-of-type')

    // search element by number of the same type
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:nth-child(2)')

    // search element by text inside tag
    cy.get('a:contains("Skinsheen")')

});
// before(() => {
//     ;
// })

beforeEach(() => {
    cy.visit('https://google.com')
})

after(() => {
    cy.log('This is log from after method')
})

afterEach(() => {
    cy.log('This is log from after method')
})

describe('Test suite for Google', () => {
    describe('Positive scenarios', {retries: 3}, () => {


        it("Google Search", () => {
            cy.get('input.gLFyf.gsfi').type('Cypress');
        })
    })
    describe('Negative scenarios', () => {

        it("Google Search 2", () => {
            cy.get('input.gLFyf.gsfi').type('Cypress');
        })

        it("Google Search 3", {retries: 3},() => {
            cy.get('input.gLFyf.l').type('Cypress');
        })

        it("Google Search 4", () => {
            cy.get('input.gLFyf.l').type('Cypress');
        })

        it("Google Search 5", () => {
            cy.get('input.gLFyf.gsfi').type('Cypress');
        })
    })
})

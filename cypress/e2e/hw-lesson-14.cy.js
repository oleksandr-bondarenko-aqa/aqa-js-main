/**
 * #домашка на 4.10.22
 * Написати параметризований тест.
 * Кроки:
 * 1. Відкрити https://sanitarskyi-ngx-admin.herokuapp.com/
 * 2. Клікнути на пункт меню Modal & Overlays
 * 3. Клікнути на підпункт Toastr
 * 4. Вибрати позицію тосту
 * 5. Заповнити title довільним текстом
 * 6. заповнити content довільним текстом
 * 7. Обрати тип тоста
 * 8. Клікнути на кнопку "Show toast"
 * Очікуваний результат: тост містить текст, що був ведений в тайтл та контент поля,
 * знаходиться у місці, відповідному до обраної позиції, має колір та містить іконку відповідні до обраного типу тоста.
 *
 * Тест має містити метод before() з відповідними і необхідними кроками в ньому.
 * Приклад аргументів, що передаються в тест:
 *
 * args: {
 *       position: 'top-right',
 *       title: 'test title',
 *       content: 'test content',
 *       time: '1000',
 *       type: 'primary'
 *     }
 *
 * Приклад очікуваного результату, котрий передається теж в якості аргументу:
 *
 * expected: {
 *       icon: 'email',
 *       title: 'test title',
 *       content: 'test content',
 *       color: ' ... ',
 *       position: ...
 *     }
 *
 * color - містить значення rgb
 * position - може бути обʼєктом з усіма неохідними параметрами для визначення фактичної позиції тоста.
 *
 * Перевірити 4 кейса, кожний кейс має містити унікальну позицію та унікальний тип тоста
 *
 *
 * UPD: написати 3 тест кейса на для цього сайту, або для будь-якого іншого, які б ви хотіли автоматизувати.
 * Тест кейси де потрібно просто поклікати, або ввести текст нас не цікавлять.
 * Кейси мають бути не тривіальними, або такими які ви не знаєте як автоматизувати.
 */

describe('Homework test suite lesson 14', () => {

    // Agrs and assertions for tests

    const testData = [
        {
            args: {
                position: 'top-left',
                title: 'Test top-left',
                content: 'With success type',
                time: '1000',
                type: 'success'
            },
            expected: {
                icon: 'checkmark',
                title: 'Test top-left',
                content: 'With success type',
                color: 'rgb(96, 175, 32)',
                position: 'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z'
            }
        },
        {
            args: {
                position: 'bottom-left',
                title: 'Test bottom-left',
                content: 'With info type',
                time: '1000',
                type: 'info'
            },
            expected: {
                icon: 'question-mark',
                title: 'Test bottom-left',
                content: 'With info type',
                color: 'rgb(4, 149, 238)',
                position: 'M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z'
            }
        },
        {
            args: {
                position: 'top-end',
                title: 'Test top-end',
                content: 'With warning type',
                time: '1000',
                type: 'warning'
            },
            expected: {
                icon: 'alert-triangle',
                title: 'Test top-end',
                content: 'With warning type',
                color: 'rgb(255, 159, 5)',
                position: 'M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z'
            }
        },
        {
            args: {
                position: 'bottom-end',
                title: 'Test bottom-end',
                content: 'With danger type',
                time: '1000',
                type: 'danger'
            },
            expected: {
                icon: 'flash',
                title: 'Test bottom-end',
                content: 'With danger type',
                color: 'rgb(176, 0, 32)',
                position: 'M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z'
            }
        }
    ]

    // Test action methods

    const selectToastPosition = (args) => {
        cy.get('.mat-ripple.position-select.appearance-outline.size-medium.status-basic.shape-rectangle.nb-transition button').click()
        cy.get(`nb-option[ng-reflect-value="${args.position}"]`).click();
    }

    const inputTitle = (args) => {
        cy.get('div .form-group')
            .contains('Title:')
            .siblings()
            .click()
            .clear()
            .type(args.title);
    }

    const inputContent = (args) => {
        cy.get('div .form-group')
            .contains('Content:')
            .siblings()
            .click()
            .clear()
            .type(args.content);
    }

    const selectDisplayTime = (args) => {
        cy.get('div .form-group')
            .contains('Time to hide toast, ms. 0 to persistent toast:')
            .siblings()
            .click()
            .clear()
            .type(args.time);
    }

    const selectToastType = (args) => {
        cy.get('label').contains('Toast type:').siblings().click()
        cy.get(`nb-option[ng-reflect-value="${args.type}"]`).click();
    }

    const showToast = () => {
        cy.get('button').contains('Show toast').click();
    }

    const verifyToast = (expected) => {
        cy.get('nb-toast g > g')
            .should('have.attr', 'data-name')
            .and('eq', `${expected.icon}`);

        cy.get('nb-toast span')
            .should('include.text', `${expected.title}`);

        cy.get('nb-toast div')
            .should('contain.text', `${expected.content}`);

        cy.get('nb-toast > div')
            .should('have.css', 'color')
            .and('eq', `${expected.color}`);

        cy.get('nb-toast path')
            .should('have.attr', 'd')
            .and('eq', `${expected.position}`)
    }

    // Tests

    before(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

        // navigate to Toastr page

        cy.get('nb-card-header:contains("Material Dark")').click();
        cy.get('a[class="ng-tns-c141-9 ng-star-inserted"]').click();
        cy.get('span[class="menu-title ng-tns-c141-19"]').click();
        cy.get('span[class="menu-title ng-tns-c141-23"]').click();
    })

    testData.forEach(({args, expected}) => {
        it((`Check toast position: ${args.position} and toast type: ${args.type}`), () => {

            selectToastPosition(args);
            inputTitle(args);
            inputContent(args);
            selectDisplayTime(args);
            selectToastType(args);
            showToast();
            verifyToast(expected);

        })
    })
})

/**
 * Test case 1:
 * Convert jpg to pdf through Upload button
 *
 * Precondition: prepare sample jpg file
 *
 * Step 1:
 * Go to https://jpg2pdf.com/
 *
 * Expected result:
 * JPG to FDF site opened successfully
 *
 * Step 2:
 * Press 'Upload Files' button
 *
 * Expected result:
 * Upload window opens
 *
 * Step 3:
 * Select sample jpg file, press 'Open' button
 *
 * Expected result:
 * File uploaded successfully
 *
 * Step 4:
 * On converted file press 'Download' button
 *
 * Expected result:
 * File downloaded successfully
 *
 * Step 5:
 * Verify file format - it should be .pdf
 *
 * Expected result:
 * File format is .pdf
 *
 *===============================================================================
 *
 * Test case 2:
 * Convert jpg to pdf through drag and drop file
 *
 * Precondition: prepare sample jpg file
 *
 * Step 1:
 * Go to https://jpg2pdf.com/
 *
 * Expected result:
 * JPG to FDF site opened successfully
 *
 * Step 2:
 * Drag sample file from your computer into drop zone
 *
 * Expected result:
 * File uploaded successfully
 *
 * Step 3:
 * On converted file press 'Download' button
 *
 * Expected result:
 * File downloaded successfully
 *
 * Step 4:
 * Verify file format - it should be .pdf
 *
 * Expected result:
 * File format is .pdf
 *
 *==================================================================================
 *
 * Test case 3:
 * Convert several jpg files to pdf
 *
 * Precondition: prepare several sample jpg files
 *
 * Step 1:
 * Go to https://jpg2pdf.com/
 *
 * Expected result:
 * JPG to FDF site opened successfully
 *
 * Step 2:
 * Drag sample files from your computer into drop zone
 *
 * Expected result:
 * Files uploaded successfully
 *
 * Step 3:
 * On every converted file press 'Download' button
 *
 * Expected result:
 * Files downloaded successfully
 *
 * Step 4:
 * Verify files format - it should be .pdf
 *
 * Expected result:
 * Files format is .pdf
 */
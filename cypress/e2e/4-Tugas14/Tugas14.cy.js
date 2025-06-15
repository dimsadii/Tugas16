describe('Test login', ()=>{
    it('TS-001-user menginput Username dan Password dengan benar', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[normalize-space()="Login"]').click();
        
    })
    it('TS-002-user memilih forgot password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('.orangehrm-login-forgot').click();
        cy.xpath('//h6[normalize-space()="Reset Password"]').should('have.text','Reset Password');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');

    })    
    it('TS-003-user memilih About', ()=>{  
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[normalize-space()="Login"]').click();
        cy.get('.oxd-userdropdown-tab').click();
        cy.xpath('//a[normalize-space()="About"]').click();
        


    })

     })



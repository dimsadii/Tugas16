describe('Test login', ()=>{
    it('TS-001-user menginput Username dan Password dengan benar', ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#user-name').type('standard_user');
        cy.xpath('//input[@id="password"]').type('secret_sauce');
        cy.get('.btn_action').click();
    
    })
    
    it('TS-002-user menginput Username dan Password dengan salah', ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#user-name').type('user');
        cy.xpath('//input[@id="password"]').type('sauce');
        cy.get('.btn_action').click();
    
    })

    it('TS-003-user menginput Username tanpa Password', ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#user-name').type('user');
        cy.get('.btn_action').click();
    
    })
    



})


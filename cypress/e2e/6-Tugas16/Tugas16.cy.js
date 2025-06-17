import loginpage from "../../support/support16/loginpage";

describe('Test login', ()=>{
    beforeEach(() =>{
        loginpage.visit();
    })
    it('TS-001-Verifikasi Username, password dan tombol login akan tampil pada layar masuk', ()=>{
        loginpage.verifybaseURL();
        loginpage.verifyusername();
        loginpage.verifypassword();
        loginpage.verifybutton();
           
    })
    it('TS-002-user menginput Username dan Password dengan benar', ()=>{
        loginpage.verifybaseURL();
        loginpage.inputUsername();
        loginpage.inputPassword();
        loginpage.login_button();
        loginpage.verifyloginsuccess();
        loginpage.verifydashboard();
    
    })
    it('TS-003-user menginput Username dan Password dengan kredensial tidak valid', ()=>{
        loginpage.verifybaseURL()
        loginpage.inputUsernameinvalid();
        loginpage.inputpasswordinvalid();
        loginpage.login_button();
        loginpage.verifylogininvalid();
        


        cy.xpath('//input[@placeholder="Password"]').type('jabrik1234');
        cy.xpath('//button[normalize-space()="Login"]').click();
        // Assertion: Pastikan URL tetap di halaman login
        cy.url().should('include', '/auth/login');
        // Assertion: Pesan error muncul
        cy.get('.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
    })

     it('TS-004-User tidak dapat masuk dengan kredensial yang tidak valid dengan kombinasi kapital', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('ADmin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[normalize-space()="Login"]').click();
        // Assertion: Pastikan URL tetap di halaman login
        cy.url().should('include', '/auth/login');
        // Assertion: Pesan error muncul
        cy.get('.oxd-alert-content-text').should('be.visible').and('contain.text', 'Invalid credentials');
    })
    
    it('TS-005-User tidak dapat masuk dengan Username tanpa Password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//button[normalize-space()="Login"]').click();
        // Atau: Assertion berdasarkan pesan error (jika tersedia)
        cy.get('.oxd-input-field-error-message').should('be.visible').and('contain.text', 'Required');
    })

    it('TS-006-User tidak dapat masuk dengan Password tanpa Username', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[normalize-space()="Login"]').click();
        // Atau: Assertion berdasarkan pesan error (jika tersedia)
        cy.get('.oxd-input-field-error-message').should('be.visible').and('contain.text', 'Required');
    })
      
    it('TS-007-User tidak dapat masuk tanpa menggunakan username dan Password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//button[normalize-space()="Login"]').click();
        // Atau: Assertion berdasarkan pesan error (jika tersedia)
        cy.get('.oxd-input-field-error-message').should('be.visible').and('contain.text', 'Required');
    })
})

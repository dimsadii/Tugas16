describe('Test login', ()=>{
    it('TS-001-Verifikasi Username, password dan tombol login akan tampil pada layar masuk', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        // Assertion: Pastikan URL benar
        cy.url().should('include', 'orangehrmlive.com');
        // Assertion: Pastikan input username, password, tombol login muncul
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
        
    })
    it('TS-002-user menginput Username dan Password dengan benar', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('Admin');
        cy.xpath('//input[@placeholder="Password"]').type('admin123');
        cy.xpath('//button[normalize-space()="Login"]').click();
         // Assertion: URL berubah ke /dashboard atau mengandung dashboard
        cy.url().should('include', '/dashboard');
        // Assertion: Header Dashboard muncul
        cy.contains('Dashboard').should('be.visible');
    })

     it('TS-003-user menginput Username dan Password dengan kredensial tidak valid', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.xpath('//input[@placeholder="Username"]').type('jabrik');
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

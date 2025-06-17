class loginpage{
    visit(){
         cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    verifybaseURL(){
          cy.url().should('include', 'opensource-demo.orangehrmlive.com');
    }

    inputUsername(){
         cy.xpath('//input[@placeholder="Username"]').type('Admin');
         cy.get('input[name="username"]').should('be.visible');
    }

    inputPassword(){
         cy.xpath('//input[@placeholder="Password"]').type('admin123');
         cy.get('input[name="password"]').should('be.visible');
    }

    login_button(){
         cy.get('button[type="submit"]').should('be.visible');
         cy.xpath('//button[normalize-space()="Login"]').click();
         
    }

    verifyloginsuccess(){
         cy.url().should('include', '/dashboard');
    }

    verifylogininvalid(){
         cy.url().should('include', '/auth/login');
       
    }
    verifyusername(){
         cy.get('input[name="username"]').should('be.visible')
    }

    verifypassword(){
         cy.get('input[name="password"]').should('be.visible');
    }

    verifybutton(){
         cy.get('button[type="submit"]').should('be.visible');
    }

    inputUsernameinvalid(){
         cy.xpath('//input[@placeholder="Username"]').type('jabrik');
         cy.get('input[name="username"]').should('be.visible');
    }

    inputpasswordinvalid(){
         cy.xpath('//input[@placeholder="Username"]').type('jabrik1234');
         cy.get('input[name="username"]').should('be.visible');
    }

    verifydashboard(){
         cy.contains('Dashboard').should('be.visible');
    }
    
   inputUsernamekombinasi(){
         cy.xpath('//input[@placeholder="Username"]').type('ADmin')
         cy.get('input[name="username"]').should('be.visible');
    }

    verifypesanerror(){
         cy.get('.oxd-input-field-error-message').should('be.visible').and('contain.text', 'Required');
    }
    
}   

export default new loginpage()
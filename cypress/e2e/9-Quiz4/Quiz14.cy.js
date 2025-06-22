import loginpage from "../../support/supportQuiz4/login";

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
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionsumary');
        loginpage.login_button();
        cy.wait('@actionsumary');
        loginpage.verifyloginsuccess();
        loginpage.verifydashboard();
    
    })
    it('TS-003-user menginput Username dan Password dengan kredensial tidak valid', ()=>{
        loginpage.verifybaseURL()
        loginpage.inputUsernameinvalid();
        loginpage.inputpasswordinvalid();
        loginpage.login_button();
        loginpage.verifylogininvalid();
        
    })
     it('TS-004-User tidak dapat masuk dengan kredensial yang tidak valid dengan kombinasi kapital', ()=>{
        loginpage.verifybaseURL()
        loginpage.inputUsernamekombinasi();
        loginpage.inputPassword();
        loginpage.login_button();
        loginpage.verifylogininvalid();
    })
    
    it('TS-005-User tidak dapat masuk dengan Username tanpa Password', ()=>{
        loginpage.verifybaseURL();
        loginpage.inputUsername();
        loginpage.login_button();
        loginpage.verifypesanerror();
        loginpage.verifylogininvalid();
    })

    it('TS-006-User tidak dapat masuk dengan Password tanpa Username', ()=>{
        loginpage.verifybaseURL();
        loginpage.inputPassword();
        loginpage.login_button();
        loginpage.verifypesanerror();
        loginpage.verifylogininvalid();
    })
      
    it('TS-007-User tidak dapat masuk tanpa menggunakan username dan Password', ()=>{
        loginpage.verifybaseURL();
        loginpage.login_button();
        loginpage.verifypesanerror();
        loginpage.verifylogininvalid();

    })

    it('TS-008-User melakukan lupa password', () =>{
        loginpage.verifybaseURL();
        loginpage.clickforgotpassword();
        loginpage.verifyheaderresetpassword();
        loginpage.inputUsername();
        loginpage.clickresetpassword();
        loginpage.verifyresetpasswordsuccess();
    })
    
    it('TS-009-User memilih opsi dashboard directory', () =>{
       loginpage.verifybaseURL();
        loginpage.inputUsername();
        loginpage.inputPassword();
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionsumary');
        loginpage.login_button();
        cy.wait('@actionsumary');
        loginpage.verifyloginsuccess();
        loginpage.verifydashboard();
        loginpage.clickdirectory();

    })
})
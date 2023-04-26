class LoginPage{


    uname = "input[placeholder='Username']"
    Password= "input[placeholder='Password']"
    loginbtnn="button[type='submit']"
    dashboard=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"


    SetUsername(username){

        return cy.get(this.uname).type(username);
    }
     
    SetPassword(password){

        return cy.get(this.Password).type(password);
    }

    clickSignIn(){

        return cy.get(this.loginbtnn).click();
    }

    verifylogin(expected){
        return cy.get(this.dashboard).should('have.text',expected);
    }


}

export default LoginPage
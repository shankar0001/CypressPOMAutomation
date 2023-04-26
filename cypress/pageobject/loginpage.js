class LoginPage{


    uname = "input[placeholder='Username']"
    Password= "input[placeholder='Password']"
    loginbtnn="button[type='submit']"
    dashboard=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    PassowrdError=".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
    RedPassword= ".oxd-input oxd-input--active oxd-input--error"


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

    verifyerror(requireerr){
        return cy.get(this.PassowrdError).should('have.text',requireerr);

    }

    VerifyredPasswordField(){
        return cy.get(this.RedPassword).should('be.visible');

    }


}

export default LoginPage
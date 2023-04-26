import LoginPage from "../pageobject/loginpage";

describe('login', function(){
    const login = new LoginPage()



    it('Login to Orange HRMS website',function(){

     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     
     cy.fixture('login').then((data)=>{
     login.SetUsername(data.username);
     login.SetPassword(data.password);
     login.clickSignIn();
     cy.pause();
     login.verifylogin(data.expected);


     })

      })





})
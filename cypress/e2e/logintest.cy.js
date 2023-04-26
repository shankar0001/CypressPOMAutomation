import LoginPage from "../pageobject/loginpage";

describe('login', function(){
    const login = new LoginPage()

    beforeEach(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })



    it('Successful Login to Orange HRMS website',{ tags : ['Smoke']},function(){

     //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     
     cy.fixture('login').then((data)=>{
     login.SetUsername(data.username);
     login.SetPassword(data.password);
     login.clickSignIn();
     login.verifylogin(data.expected);


     })

      })

      it('Verify the error message in case of Only enter the username and click on login button',{ tags : ['Smoke']},function(){

        cy.fixture('login').then((data)=>{
        login.SetUsername(data.username);
        login.clickSignIn();
        login.verifyerror(data.error);
   
   
        })
   
         })





})
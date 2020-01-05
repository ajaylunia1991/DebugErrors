
describe('angularjs homepage', function() {
    it('should greet the named user', function() {

    browser.get('https://app.reelit.ninja/user/login');

    //   browser.waitForAngularEnabled(false);
      
    //   browser.get("https://www.facebook.com/")


    browser.sleep("5000") 

    element(by.css(".form-input.ng-untouched.ng-pristine.ng-valid[placeholder='Email']").sendKeys("Yathartha"))
     
    //   element(by.id('#email')).sendKeys("Yatthu bhai")

    //   element(by.css/('.inputtext.login_form_input_box[name="email"]')).sendKeys('Hi')
      
    //   var greeting = element(by.css('.inputtext.login_form_input_box[name="email"]'))
      
    //   console.log(greeting.getText().getTitle())

    //   greeting.getText().then(function (text) {
    //     console.log(text);
    //     });
        
    //   expect(greeting.getText()).toEqual('Hi');
      
    
  
    //   element(by.model('yourName')).sendKeys('Julie');
  
    //   var greeting = element(by.binding('yourName'));
  
    //   expect(greeting.getText()).toEqual('Hello Julie!');
})
})


// Doi tuong 'validator'
function Validator(options){

    var formElement = document.querySelector(options.form);

    // ham thuc hien validate
    function validate(inputElement, rule){
        
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message')

        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else{
            errorElement.innerText =''
            inputElement.parentElement.classList.remove('invail')
        }
    }
    //console.log(options.rules);
    // Lay element cua form can validate
    var formElement = document.querySelector(options.form);


    if(formElement){
        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector)
          //  var errorElement = inputElement.parentElement.querySelector('.form-message')
            if(inputElement){
                // Xu li truong hop blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                     // value: inputElement.value
                     // test func: rule.test
                     //var errorMessage = rule.test(inputElement.value)
                    
                    // console.log(errorMessage)
                    
                    //console.log(inputElement.parentElement.querySelector('.form-message'))

                }

                // xu li khi nguoi dung nhap vao input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message')
                    errorElement.innerText =''
                    inputElement.parentElement.classList.remove('invail')
                }
            }
        })
    }
}
// dinh nghia rules
// nguyen tac cua rules
// 1. Khi co loi=> tra ra messae loi
// 2. khi ko co loi=> khong tra ra cj ca
//Validator.isRequired = function (selector){
   // return {
     //   selector :selector,
      //  test: function () {
      //      test : function (value){
       //         return value.trim() ? undefined :'Vui long nhap truong nay'
      //      }
      //  }
  //  };
//}

Validator.isEmail = function(selector){
    return {
        selector :selector,
        test :function (value){
            var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
            return regex.test(value) ? undefined:' Truong nay phai la email'
        }
    }
}

Validator.minLength = function (selector, min){
    return {
        selector :selector,
        test :function (value) {
           
            return value.length >= min ? undefined:' Vui long nhap toi thieu $(min) ki tu'
        }
    }
}
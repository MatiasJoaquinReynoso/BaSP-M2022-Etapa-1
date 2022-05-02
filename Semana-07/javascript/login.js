window.onload = function () {
    //DOM elements
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('btn-login');
    //email REGEX
    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    email.addEventListener('blur', function() {
        // email validation
        validation(email);
    });

    email.addEventListener('focus', function() {
        //reset properties
        reset(email);
    })

    password.addEventListener('blur', function() {
        // password validation
        validation(password);
    });

    password.addEventListener('focus', function() {
        //reset properties
        reset(password);
    })

    //Does the validation based on the element
    function validation (type) {
        if (type == email) {
            if (checkInput(email)) {
                return 'Email field incomplete';
            } else if (!emailFormat.test(email.value)){
                //show error with message
                showError(email,'Please insert a valid email.');
                return 'Invalid email';
            } else {
                return '';
            };
        } else {
            if (checkInput(password)) {
                return 'Password field incomplete';
            } else if (!formatValidator(password.value) || !isNaN(password.value) || isASymbol(password.value)){
                //show error with message
                showError(password,'Please insert a valid password. It must contain numbers and letters.');
                return 'Invalid password';
            } else {
                return '';
            };
        };
    };

    //Check if the inputs are incomplete
    function checkInput (input) {
        if (input.value === '') {
            //show error with message
            showError(input,'Please complete this field.');
            return true;
        };
    };

    //Check if there are digits in the string
    function formatValidator (string) {
        string = string.split(" ").join(""); //remove spaces
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            };
        };
        //returns true if the string contains digits
        return (control !== 0);
    };

    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'"+" ";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (symbols.includes(string[i])) {
                    control ++;
            };
        };
        //returns true if the string contains a special character
        return (control !== 0);  
    };

    function showError (input,message) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        //add error message
        text.textContent = message;
        //add error class
        container.className = 'status-control error';
    }

    function reset (input) {
        var container = input.parentElement;
        //reset class name
        container.className = 'status-control';
    }

    //Button login functionality
    button.addEventListener('click', function(e){
        e.preventDefault();
        //run the validations
        validation(email);
        validation(password);
        //alerts in case of error or success

        var idNew = 'rose@radiumrocket.com'
        var newPassword = 'BaSP2022';

        if (validation(email) == '' && validation(password) == '') {
            alert('Succesful login! \n Email: '+idNew +'\n Password: '+newPassword );
            
            // API Request
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + idNew
            + '&password=' + newPassword)
            .then(function (response) {
                return response.json()
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse)
                if (jsonResponse.success) {
                    //Success message
                    alert('API Response: '+jsonResponse.msg)
                } else {
                throw jsonResponse
                }
            })
            .catch(function (error) {
                var alertError = [];
                //if there is more than one error show them all, if not show that one only.
                if (error.hasOwnProperty('errors')) {
                    Object.entries(error.errors).forEach(element => {
                        alertError += '\n' + element[1].msg;
                        // alert('API Response: '+ element[1].msg);
                    });
                alert('Sorry, an error has occurred. Please check this items:'+alertError)               
                } else {
                    alert('API Response: '+ error.msg);
                };
            });
        } else {
            alert('An error has ocurred. Please enter the data correctly.'+'\n'+validation(email) +'\n'+ validation(password));
        };
        
    });
}

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
            } else if (!formatValidator(password.value) || !isNaN(password.value)){
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
        if (control == 0) {
            return false;
        } else {
            return true;
        };
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
        if (validation(email) == '' && validation(password) == '') {
            alert('Succesful login! \n Email: '+email.value+'\n Password: '+password.value);
        } else {
            alert('An error has ocurred. Please enter the data correctly.'+'\n'+validation(email) +'\n'+ validation(password));
        }
    });
}
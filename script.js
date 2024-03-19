var facebookSpan = document.getElementById('facebook');
var iosSpan = document.getElementById('ios');
var googleSpan = document.getElementById('google');

facebookSpan.addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/';
});

iosSpan.addEventListener('click', function() {
    window.location.href = 'https://www.icloud.com/';
});

googleSpan.addEventListener('click', function() {
    window.location.href = 'https://www.google.com/';
});



function seterror(id, error) {
    var element = document.getElementById(id);
    element.innerHTML = error;
    element.classList.add('error');
    if(element.classList.contains('error')){
        element.classList.remove('error');
    }
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validatelogin();
})

function validatelogin(){
    var loginemail = document.forms['loginForm']['email'].value;
    var loginpassword = document.forms['loginForm']['password'].value;
    if (loginemail === '' || loginpassword === '') {
        alert("Please fill out all fields");
        returnval = false;
    }
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        alert("No user registered yet");
        return false;
    }
    var foundUser = userData.find(function(user) {
        return user.email === loginemail;
    });
    if (!foundUser) {
        seterror('loginemailError', 'Email not found');
        return false;
    }
    if (foundUser.password !== loginpassword) {
        seterror('loginPasswordError', 'Password does not match');
        return false;
    }
    alert("Login successful");
    return true;

}

function validateForm() {
    var returnval = true;
    var firstname = document.forms['registerForm']['firstname'].value;
    var lastname = document.forms['registerForm']['lastname'].value;
    var email = document.forms['registerForm']['email'].value;
    var password = document.forms['registerForm']['password'].value;
    var passwordconf = document.forms['registerForm']['passwordConf'].value;
    var checkbox = document.forms['registerForm']['isagreed'].value;



    if (firstname === '' || lastname === '' || email === '' || password === '' || passwordconf === '') {
        alert("Please fill out all fields");
        returnval = false;
    }
   
    if (password !== passwordconf) {
        seterror('passwordConfError', 'Passwords do not match');
        returnval = false;
    }
   

    if (returnval) {
        var userData = JSON.parse(localStorage.getItem('userData')) || []; 
        userData.push({ 'firstname': firstname, 'lastname': lastname, 'email': email, 'password': password }); 
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Registration done successfully');
    }

    return returnval;
}




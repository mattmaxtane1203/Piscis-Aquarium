let form = document.getElementById('register-form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let username = document.getElementById('username')
    let age = document.getElementById('age')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let passwordChecker = document.getElementById('confirm-password')
    let gender = document.getElementsByName('gender')
    let termsAndConditions = document.getElementById('terms-and-conditions')
    let error = document.getElementById('error')

    error.innerHTML = ""

    // Validate username
    if(username.value.length < 5 || username.value.length > 30){
        error.innerHTML = 'Username must be between 5 and 30 characters'
        return
    }

    // Validate age
    if(age.value <= 17){
        error.innerHTML = 'You are underaged'
        return
    }

    // Validate email
    if(!validateEmail(email.value)){
        error.innerHTML = 'Invalid email'
        return
    }

    // Validate password
    if(!validatePassword(password.value)){
        error.innerHTML = 'Password must contain numbers and characters'
        return
    }

    // Validate confirm password
    if(password.value !== passwordChecker.value){
        error.innerHTML = 'Password is not the same'
        return
    }

    // Validate gender
    if(!gender[0].checked && !gender[1].checked){
        error.innerHTML = "Please select a gender"
        return
    }

    // Validate terms and conditions
    if(!termsAndConditions.checked){
        error.innerHTML = "Please agree with terms and conditions"
    }

    // Confirmation
    let confirmation = confirm('Are you sure you want to submit this form?')

    if(confirmation){
        alert('Successfully registered! Please confirm by checking your email.')
    } else {
        alert('Registration cancelled!')
    }

})

function validateEmail(email){
    return email.indexOf('@') != -1 && email.endsWith('.com')
}

function validatePassword(password) {
    let length = password.length

    let hasCharacters = false
    let hasNumbers = false

    for (let index = 0; index < length; index++) {
        let charCode = password.charCodeAt(index)

        if(!isNaN(password[index])){
            hasNumbers = true
        }

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
            hasCharacters = true
        }
    }

    if(hasCharacters && hasNumbers){
        return true
    } else {
        return false
    }
}
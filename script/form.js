let form = document.getElementById('contact-form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let name = document.getElementById("name")
    let subject = document.getElementById("subject")
    let body = document.getElementById("body")
    let error = document.getElementById("error")
    error.innerHTML = ""

    if(name.value.length < 2){
        error.innerHTML = "Name is too short!"
        return
    }

    if(name.value.length > 50){
        error.innerHTML = "Name is too long!"
        return
    }

    if(subject.value.length < 5){
        error.innerHTML = "Subject is too short!"
        return
    }

    if(subject.value.length > 50){
        error.innerHTML = "Subject is too long!"
        return
    }

    if(body.value.length < 10){
        error.innerHTML = "Body is too short!"
        return
    }

    if(body.value.length > 1000){
        error.innerHTML = "Body is too long!"
        return
    }

    let confirmation = confirm("Are you sure you want to send this email?")

    if(confirmation){
        alert("Email sent! Thank you for taking the time to contact us!")
    }

    alert("Email cancelled!")
})
const names = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = []
    if (names.value === '' || names.value == null) {
        messages.push("Name is required")
    }
    if (names.value.length <= 11){
        messages.push('name must be longer than width:30cm & height:25cm ')
    }
    if (names.value.length >= 22){
        messages.push('name must be longer than width:30cm & height:25cm ')
    }
    if(password.value.length <= 20) {
        messages.push("password must be longer than 10 characters")
    } 
       if(password.value.length >= 22) {
        messages.push("password must be less than 11 characters")
    }

    if(password.value === "password") {
        messages.push("password canot be password")
    }
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(", ")
    }
})

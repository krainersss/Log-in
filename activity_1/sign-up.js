let pw_input = document.getElementById("pw_inp")
let pw_confirm = document.getElementById("pw_confirm")
let error = document.getElementById("error")
let form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    authenticate()
    if (error.style.display === "block"){
        event.preventDefault()
    }
})

function authenticate() {
    error.style.display="none"
    if (pw_input.value === ""){
        error.style.display="block"
        error.textContent="Please enter your password"
    }
    if (pw_input.value.length < 8) { 
        error.style.display="block"
        error.textContent="Password must be at least 8 characters"
    }
    if (!(/[A-Z]/.test(pw_input.value))) {
        error.style.display="block"
        error.textContent="Password must contain a capital letter."
    }
    if (!(/[0-9]/.test(pw_input.value))) { 
        error.style.display="block"
        error.textContent="Password must contain a number"
    }
    if (!(pw_input.value === pw_confirm.value)) {
        error.style.display="block"
        error.textContent="New Password and Password Confirm do not MATCH"
    }    
}
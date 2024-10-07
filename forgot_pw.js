let uname = document.getElementById("name")
let error = document.getElementById('error')
error.style.display="none"
input.addEventListener("input", (event) => {
    forgot_pw()
    if (error.style.display === "block"){
        event.preventDefault()
    }
})
function forgot_pw(){
    if (uname.value === ""){
        error.style.display="block"
        error.textContent="Please fill the blank"
        event.preventDefault()
    }
}
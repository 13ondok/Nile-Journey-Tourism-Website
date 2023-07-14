let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".conf_pass");
let submit = document.querySelector("input[type=submit]");

let form = document.querySelector("form");

let error = document.querySelector(".error");

submit.addEventListener("click", (e) => {
    if (password.value != confirmPassword.value) {
        error.innerHTML = "Passwords doesn't match";
        e.preventDefault();
    }
})

////////////////////////////////////////////////////////////
let inputs = document.querySelectorAll("[required]");


// inputs.forEach((inputs) => {
//     if(inputs.value.length == 0) {
//         console.log("hello");
//     }
// })

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        if(!input.value.length == 0) {
            for (let index = 0; index < inputs.length; index++) {
                const inputLast = inputs[index];
                if(inputLast.value.length != 0) {
                    var test = [inputLast];
                }
            }
            console.log(test);
        }
    })
})


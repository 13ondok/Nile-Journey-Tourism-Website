let passEye = document.querySelector(".eye");
let passEyeSlash = document.querySelector(".eye_slash");

let password = document.querySelector("input[type=password]");


passEyeSlash.addEventListener("click", () => {
    passEye.style.display = "block";
    passEyeSlash.style.display = "none";

    password.type = "text";
})


passEye.addEventListener("click", () => {
    passEye.style.display = "none";
    passEyeSlash.style.display = "block";

    password.type = "password";
})

/////////////////////////////////////////////////////////
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


const clickSound = document.getElementById('click-sound');
function validateForm() {
    var a = document.getElementById("name");
    var b = document.getElementById("email");
    var c = document.getElementById("password");
    if(a==" " || b==" " || c==" "){
        alert("Please fill all fields");
        return false;
        }
    }

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    clickSound.play(); 
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    clickSound.play();
});
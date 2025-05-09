let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
let copyMsg = document.getElementById("copyMsg");

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()_+{}[]|:;<>,.?/";

// Function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars === "") return genPassword;

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;
}

// Copy password to clipboard and show both check icon and "Password Copied" message
copyIcon.addEventListener('click', () => {
    if (passBox.value) {
        navigator.clipboard.writeText(passBox.value);
        
        // Show "Password Copied!" message
        copyMsg.textContent = "Password Copied!";
        copyMsg.style.display = "block";
        
        // Change icon to check
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        // Reset icon and hide message after a delay
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "Copy Password";
            copyMsg.style.display = "none";
        }, 3000);
    }
});
const handleSumbit = () => {
    const password = document.querySelector(".password");
    const passwordRepeat = document.querySelector(".confirm-password");
    console.log(password);
    if (password !== passwordRepeat) {
        let errorSel = document.querySelector(".error");
        console.log(errorSel);
        errorSel.style.display = "block";
        password.style.border = "2px solid red";
        passwordRepeat.style.border = "2px solid red";
    }
}
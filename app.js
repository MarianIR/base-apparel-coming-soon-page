const sendEmail = document.querySelector(".send-email");
const emailInput = document.querySelector(".email-input");
const sendBtn = document.querySelector(".send-button");
const provideEmail = document.querySelector(".provide-email");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value < 1) {
    provideEmail.style.display = "flex";
    provideEmail.innerHTML = "The file cannot be empty";
    emailInput.style.border = "1px solid red";
  } else {
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(emailInput.value.toLowerCase()) === false) {
      provideEmail.style.display = "flex";
      provideEmail.innerHTML = "Invalid email format";
    } else {
      provideEmail.style.display = "flex";
      provideEmail.textContent = "Success! You send the email!";
      emailInput.style.border = "none";
      emailInput.value = "";
    }
  }
});

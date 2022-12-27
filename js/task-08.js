const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handleEventForm);

function handleEventForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Error:  " + "Input fields are empty. Please fill in these fields.");
    return;
  }
  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );
  event.currentTarget.reset();
}

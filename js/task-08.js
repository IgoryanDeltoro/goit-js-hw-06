const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handleEventForm);

function handleEventForm(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const password = elements.password.value;
  const email = elements.email.value;

  if (password === "" || email === "") {
    alert("Error:  " + "Input fields are empty. Please fill in all fields.");
    return;
  }

  const user = { password, email };

  console.log(user);
  event.currentTarget.reset();
}

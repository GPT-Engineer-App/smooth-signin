const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // Here you would normally submit the form to a backend
  // But for this example, just log the values
  console.log("Username:", username);
  console.log("Password:", password);
});

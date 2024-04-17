// script.js
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; // New password field

    // Create user object
    var user = {
      fullName: fullName,
      email: email,
      mobile: mobile,
      username: username,
      password: password, // Include password in user object
    };

    // Store user data in session storage
    sessionStorage.setItem(username, JSON.stringify(user));

    // Redirect to login page
    window.location.href = "login.html";
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Check if the user exists in session storage
    var userData = JSON.parse(sessionStorage.getItem(loginUsername));
    if (userData && userData.password === loginPassword) {
      // Redirect to dashboard page
      window.location.href = "dashboard.html";
    } else {
      // Display error message or handle invalid login
      alert("Invalid username or password!");
    }
  });

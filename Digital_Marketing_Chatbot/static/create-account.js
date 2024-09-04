document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user input
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;

    // Store the username and password in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Simulate success and redirect to login page
    alert("Account created successfully! Redirecting to login page.");
    window.location.href = "index.html"; // Redirect to login page
});

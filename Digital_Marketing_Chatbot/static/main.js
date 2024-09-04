document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Validate the entered credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to chat page if credentials match
        window.location.href = "chat.html";
    } else {
        alert("Login failed. Please try again.");
    }
});

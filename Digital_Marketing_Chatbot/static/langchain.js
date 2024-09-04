document.getElementById("sendBtn").addEventListener("click", sendMessage);

document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessageToChatBox("YOU: " + userInput);

        // Generate a response from the chatbot
        const response = generateResponse(userInput);
        addMessageToChatBox("AI: " + response);

        // Clear the input field
        document.getElementById("userInput").value = "";
    }
}

function addMessageToChatBox(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateResponse(input) {
    // A simple set of predefined responses
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm a bot, so I'm always good!",
        "what's your name": "I'm Chatbot, nice to meet you!",
        "bye": "Goodbye! Have a great day!",
        "can you suggest some marketing ideas":"Yes sure I can",
        "can you suggest some marketing strategies for improving website performance":"To improve your website performance concentrate on SEO",
        "default": "I'm not sure how to respond to that. Can you ask something else?"
    };

    // Normalize input to lower case for matching
    const normalizedInput = input.toLowerCase();

    // Return a response based on the input, or a default response if none match
    return responses[normalizedInput] || responses["default"];
}

document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        { text: "Wiadomość 1", date: "2024-10-19", time: "12:00" },
        { text: "Wiadomość 2", date: "2024-10-20", time: "15:30" },
        { text: "Wiadomość 3", date: "2024-10-21", time: "10:00" }
        // Dodaj kolejne wiadomości w tym formacie
    ];

    function showMessages() {
        const now = new Date();
        const today = now.toISOString().split('T')[0]; // Pobiera dzisiejszą datę
        const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

        const messagesContainer = document.getElementById("messages-container");
        messagesContainer.innerHTML = ""; // Czyści kontener

        messages.forEach(message => {
            if (message.date === today && message.time <= currentTime) {
                const messageElement = document.createElement("div");
                messageElement.classList.add("message");
                messageElement.textContent = `${message.time} - ${message.text}`;
                messagesContainer.appendChild(messageElement);
            }
        });
    }

    showMessages();
    setInterval(showMessages, 60000); // Aktualizuje co minutę
});

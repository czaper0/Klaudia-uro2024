document.addEventListener("DOMContentLoaded", function () {
    const countdownElements = document.querySelectorAll(".countdown");

    function updateCountdown() {
        const now = new Date();

        countdownElements.forEach(element => {
            const unlockTime = new Date(element.getAttribute("data-unlock-time"));
            const remainingTime = unlockTime - now;

            if (remainingTime > 0) {
                const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                element.textContent = `Szczegóły za ${hours}h ${minutes}m ${seconds}s`;
            } else {
                element.textContent = "Odblokowano!";
                element.classList.add("hidden");
                element.nextElementSibling.classList.remove("hidden"); // Pokaż treść
            }
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Aktualizuj odliczanie co sekundę
});

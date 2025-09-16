document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const flipButton = document.getElementById('flip-button');
    const resultText = document.getElementById('result-text');
    let headsCount = 0;
    let tailsCount = 0;
    
    flipButton.addEventListener('click', () => {
        // Disable button during flip to prevent spamming
        flipButton.disabled = true;

        // Randomly decide the outcome
        const isHeads = Math.random() < 0.5;
        
        // Add a random number of full spins + the final turn
        const randomSpins = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
        const finalRotation = isHeads ? 0 : 180;
        const totalRotation = (randomSpins * 360) + finalRotation;

        // Apply the rotation
        coin.style.transform = `rotateY(${totalRotation}deg)`;
        
        // After the animation finishes, update the text and re-enable the button
        setTimeout(() => {
            if (isHeads) {
                resultText.textContent = "It's Heads!";
            } else {
                resultText.textContent = "It's Tails!";
            }
            flipButton.disabled = false;
        }, 1000); // Must match the transition time in CSS
    });
});
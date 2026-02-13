const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');
const shyText = document.getElementById('shy-text');
const successGif = document.getElementById('success-gif');
const headerImg = document.querySelector('.header-img');
const buttonContainer = document.querySelector('.button-container');

// Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Change position to fixed so it moves relative to the whole screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Handle the "Yes" click
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "YAY! 🎉";
    buttonContainer.style.display = 'none'; // Hide buttons
    shyText.style.display = 'none'; // Hide shy text
    headerImg.style.display = 'none'; // Hide cat emoji
    successGif.style.display = 'block'; // Show the GIF
});
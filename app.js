
// 1. Select all images and set the starting index
const slides = document.querySelectorAll(".slide");
let counter = 0; 

// 2. Function to move to the NEXT slide
function goNext() {
    // Hide the current image by removing 'active' class
    slides[counter].classList.remove("active");
    
    // Increase counter
    counter++;
    
    // If we go past the last image, loop back to the first
    if (counter >= slides.length) {
        counter = 0;
    }
    
    // Show the new image
    slides[counter].classList.add("active");

    // CELEBRATION: If it's the last slide, fire confetti!
    if (counter === slides.length - 1) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#49111c', '#ffffff', '#ffb6c1']
        });
    }
}

// 3. Function to move to the PREVIOUS slide
function goPrev() {
    // Hide the current image
    slides[counter].classList.remove("active");
    
    // Decrease counter
    counter--;
    
    // If we go before the first image, loop to the last
    if (counter < 0) {
        counter = slides.length - 1;
    }
    
    // Show the new image
    slides[counter].classList.add("active");
}

// 4. Initial Celebration when the page first opens
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
});
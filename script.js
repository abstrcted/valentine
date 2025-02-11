// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Play celebration sound
        const celebrateSound = new Audio('celebrate.mp3');
        celebrateSound.play()
            .catch(error => {
                console.log('Error playing sound:', error);
            });
            
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to create a smooth color transition and execute a callback function
function flashRainbowColors(callback) {
    // Define gradient colors (softer, more romantic palette)
    const colors = [
        { background: 'linear-gradient(45deg, #ffebee, #ffffff)', duration: 500 }, // Soft red to white
        { background: 'linear-gradient(45deg, #ffe4e1, #fff0f0)', duration: 500 }, // Misty rose
        { background: 'linear-gradient(45deg, #ffc0cb, #ffffff)', duration: 500 }, // Pink to white
        { background: 'linear-gradient(45deg, #ffb6c1, #fff5f5)', duration: 500 }  // Light pink
    ];
    
    let currentIndex = 0;
    let startTime = null;
    const totalDuration = 2000; // Total animation duration (2 seconds)

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        if (elapsed < totalDuration) {
            // Calculate which color pair to show based on elapsed time
            const colorIndex = Math.floor((elapsed / totalDuration) * colors.length) % colors.length;
            
            // Apply the current gradient
            document.body.style.background = colors[colorIndex].background;
            document.body.style.transition = 'background 0.5s ease-in-out';
            
            // Continue animation
            requestAnimationFrame(animate);
        } else {
            // Reset to original background and execute callback
            document.body.style.background = '#FADADD';
            document.body.style.transition = 'background 0.5s ease-in-out';
            if (callback) {
                callback();
            }
        }
    }

    // Start the animation
    requestAnimationFrame(animate);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    // Clear any existing content
    imageContainer.innerHTML = '';
    
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    // Add a class to the image for styling if needed
    catImage.className = 'cat-image';
    // Set style to ensure the image stays visible
    catImage.style.display = 'block';
    catImage.style.maxWidth = '100%';
    catImage.style.height = 'auto';
    
    // Append the image immediately
    imageContainer.appendChild(catImage);
    
    // Additional onload handler to ensure proper loading
    catImage.onload = function() {
        // Ensure the image is still visible after loading
        catImage.style.display = 'block';
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    // Clear existing content
    imageContainer.innerHTML = '';
    
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    // Add a class to the image for styling if needed
    catHeartImage.className = 'cat-heart-image';
    // Set style to ensure the image stays visible
    catHeartImage.style.display = 'block';
    catHeartImage.style.maxWidth = '100%';
    catHeartImage.style.height = 'auto';
    
    // Append the image immediately
    imageContainer.appendChild(catHeartImage);
    
    // Additional onload handler to ensure proper loading
    catHeartImage.onload = function() {
        // Ensure the image is still visible after loading
        catHeartImage.style.display = 'block';
    };
    
    // Hide the options container
    document.getElementById('options').style.display = 'none';
}

// Display the cat.gif initially
displayCat();
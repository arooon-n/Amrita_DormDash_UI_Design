// Function to close the window
function closeWindow() {
    window.close();
}

// Get the GIF element
var gif = document.getElementById("paymentGif");

// Calculate the duration of the GIF in milliseconds (change this value to the correct duration)
var gifDuration = 2000; // example duration in milliseconds

// Number of times to play the GIF
var playCount = .75;

// Set a timeout to close the window after the GIF has played twice
setTimeout(closeWindow, gifDuration * playCount);



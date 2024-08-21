document.addEventListener("DOMContentLoaded", function() {
    var rocket = document.getElementById("rocket");
    var rocketHeight = rocket.offsetHeight;
    var stopOffset = 50;
    var maxBottom = window.innerHeight - rocketHeight - stopOffset;

    function handleScroll() {
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = window.scrollY / scrollHeight;
        var newTop = scrollPercent * maxBottom;
        rocket.style.top = newTop + "px";
    }

    window.addEventListener("scroll", handleScroll);

    rocket.addEventListener('click', function() {
        // Scroll to the top of the page instantly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const totalFrames = 21; // Total number of rocket images
        let currentFrame = 1;

        // Function to animate the rocket
        function animateRocket() {
            // Ensure the image path is correct
            rocket.src = `/images/Rocket/Rocket${currentFrame}.png`;
            currentFrame++;

            // If the last frame is reached, stop the animation
            if (currentFrame > totalFrames) {
                clearInterval(animationInterval);
                // Apply the rotation and move rocket to the top of the page
                rocket.style.transform = 'rotate(360deg)';
                rocket.style.top = '0px';  // Move to the top of the page
            }
        }

        // Start the animation
        const animationInterval = setInterval(animateRocket, 50); // Adjust the interval to control speed
    });
});

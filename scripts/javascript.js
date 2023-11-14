const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var hoverElement = document.getElementById("hoverElement");

    hoverElement.addEventListener("mouseover", function () {
        audio.play();
    });

    hoverElement.addEventListener("mouseout", function () {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    });
});

const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

//gallery section

// gallery.js

document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs in your repository
    var imageRepository = [
        "/images/gallery/GuitarRender.webp",
        "/images/gallery/realGuitar1.webp",
        "/images/gallery/RealGuitar2.webp",
        // Add more image URLs as needed
    ];

    // Function to shuffle the array randomly
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Get the gallery section
    var gallerySection = document.querySelector('.gallery');

    // Shuffle the imageRepository array
    shuffleArray(imageRepository);

    // Display the first 3 images
    for (var i = 0; i < 3; i++) {
        var imgElement = document.createElement('img');
        imgElement.src = imageRepository[i];
        gallerySection.appendChild(imgElement);
    }
});



// Music section 

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    var audioSource = document.getElementById("audioSource");
    var hoverElement = document.getElementById("hoverElement");

    var songs = [
        { name: "Heart and Soul", src: "music/Heart and Soul.mp3" },
        { name: "Random song March 9th, 2023", src: "music/Random Freestyle loop Mar9.mp3" },
        // Add more songs as needed
    ];

    hoverElement.addEventListener("mouseover", function () {
        var randomIndex = Math.floor(Math.random() * songs.length);
        var randomSong = songs[randomIndex];

        audioSource.src = randomSong.src;
        audio.load();
        audio.play();

        // Display the name of the song
        console.log("Now playing: " + randomSong.name);
    });

    hoverElement.addEventListener("mouseout", function () {
        audio.pause();
        audio.currentTime = 0;
    });
});


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
        "./images/gallery/GuitarRender.webp",
        "./images/gallery/realGuitar1.webp",
        "./images/gallery/RealGuitar2.webp",
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

    var originalSongs = [
        { name: "Heart and Soul", src: "/music/Heart and Soul.mp3" },
        { name: "Random Freestyle Mar 9th, 2023", src: "/music/Random Freestyle loop Mar9.mp3" },
        { name: "Random Freestyle Mar 10th, 2023", src: "music/Freestyle loop mar10.mp3" },
        { name: "Random Freestyle Mar 11th, 2023", src: "/music/freestyle loop mar 11.mp3" },
        { name: "Random Freestyle Mar 11th, 2023", src: "/music/Freestyle loop mar11 part 2.mp3" },
        { name: "Random Freestyle Mar 12th, 2023", src: "/music/freestyle loop mar 12.mp3" },
        { name: "Random Freestyle Apr 5th, 2023", src: "/music/freestyle april 5th.mp3" },
        { name: "Poor Wayfaring Man of Grief", src: "/music/Poor Wayfaring Man of Grief.mp3" },

        // Add more songs as needed
    ];

    // Create a copy of the original array
    var songs = originalSongs.slice();

    function playRandomSong() {
        if (songs.length > 0) {
            var randomIndex = Math.floor(Math.random() * songs.length);
            var randomSong = songs[randomIndex];

            audioSource.src = randomSong.src;
            audio.load();
            audio.play();

            // Display the name of the song
            console.log("Now playing: " + randomSong.name);

            // Remove the played song from the array
            songs.splice(randomIndex, 1);
        } else {
            // If all songs have been played, reset the array
            songs = originalSongs.slice();
        }
    }

    hoverElement.addEventListener("mouseover", playRandomSong);

    hoverElement.addEventListener("mouseout", function () {
        audio.pause();
        audio.currentTime = 0;
    });
});



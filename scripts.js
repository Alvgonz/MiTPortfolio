console.log('Hello world');

let introVideo = document.getElementById('introduction-video-overlay');
let bio = document.getElementById('bio');

function showVideo() {
    introVideo.style.display = "flex";
}

function hideVideo() {
    introVideo.style.display = "none";
}

function showBio() {
    bio.style.display = "flex";
}

function hideBio() {
    bio.style.display = "none";
}
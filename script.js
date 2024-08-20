function redirectToInstagram() {
    window.open("https://www.instagram.com", "_blank");
}

function redirectToFigma() {
    window.open("https://www.figma.com", "_blank");
}

function redirectToGitHub() {
    window.open("https://www.github.com", "_blank");
}

function redirectToLinkedIn() {
    window.open("https://www.linkedin.com", "_blank");
}

function redirectToSpotify() {
    window.open("https://www.spotify.com", "_blank");
}

function redirectToLetterboxd() {
    window.open("https://letterboxd.com/", "_blank");
}

function redirectToSkoob() {
    window.open("https://www.skoob.com.br", "_blank");
}

function toggleDrawer() {
    var drawer = document.getElementById('drawer');
    if (drawer.style.display === "none" || drawer.style.display === "") {
        drawer.style.display = "flex";
    } else {
        drawer.style.display = "none";
    }
}

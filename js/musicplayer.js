let currentSong = 0;

let art = {
    "mysticToaster Vol. 9": "images/album/vol9.png",
    "mysticToaster Vol. 8": "images/album/vol8.png",
    "mysticToaster Vol. 7": "images/album/vol7.jpg",
    "mysticToaster Vol. 6": "images/album/vol6.png",
    "mysticToaster Vol. 5.5": "images/album/vol5.5.png",
    "mysticToaster Vol. 5": "images/album/vol5.png",
    "mysticToaster Vol. 4": "images/album/vol4.png",
    "toastercrowd": "images/album/toastercrowd.png",
};

let songs = getSongs();

function changeMusic(amount){
    if( (currentSong === songs.length - 1 & amount === 1) || (currentSong === 0 & amount === -1) ){
        console.log("Reached end.");
    } else {
        currentSong += amount;
        updatePlayer(currentSong);
    }
}

function atFirstSong(currentSong){
    return currentSong === 0;
}

function atLastSong(currentSong){
    return currentSong === songs.length - 1;
}

function updatePlayer(currentSong){
    console.log("Now playing: " + songs[currentSong].source);

    document.getElementById('musicplayer-deincrement').disabled = atFirstSong(currentSong);
    document.getElementById('musicplayer-deincrement').className = atFirstSong(currentSong) ? "cis button" : "trans button";
    document.getElementById('musicplayer-increment').disabled = atLastSong(currentSong);
    document.getElementById('musicplayer-increment').className = atLastSong(currentSong) ? "cis button" : "trans button";

    document.getElementById('musicplayer-title').innerHTML = songs[currentSong].source.replace(/-/g, " ")
    document.getElementById('musicplayer-album').innerHTML = songs[currentSong].album;
    document.getElementById('musicplayer-art').src = art[songs[currentSong].album];
    document.getElementById('musicplayer-source').src = "audio/" + songs[currentSong].source + ".mp3";
    document.getElementById('musicplayer-player').load();
    document.getElementById('musicplayer-player').play();
}

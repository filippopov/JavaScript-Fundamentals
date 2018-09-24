let nowPlaying = ([artistName, trackName, duration]) => {
    return `Now Playing: ${trackName} - ${artistName} [${duration}]`;
};

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));
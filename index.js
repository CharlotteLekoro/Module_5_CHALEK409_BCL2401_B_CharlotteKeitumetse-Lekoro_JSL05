
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Lose Yourself", artist: "Eminem", genre: "Rap/Hip-Hop" },
    { title: "Juicy", artist: "The Notorious B.I.G.", genre: "Rap/Hip-Hop" },
    { title: "Alright", artist: "Kendrick Lamar", genre: "Rap/Hip-Hop" },
    { title: "Rapper's Delight", artist: "The Sugarhill Gang", genre: "Rap/Hip-Hop" },
    { title: "Empire State of Mind", artist: "Jay-Z ft. Alicia Keys", genre: "Rap/Hip-Hop" },
    { title: "Take Five", artist: "Dave Brubeck Quartet", genre: "Jazz" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": ["Rock"],
    "Gamora":  ["Rock", "Hip Hop"],
    "Drax": ["R&B", "Rap/Hip-Hop"],
    "Rocket": ["Jazz", "Pop"],
    "Groot": ["Rap/Hip-Hop", "Pop"]
};

function generatePlaylist(guardians, songs) {
    const playlists =  Object.keys(guardians).reduce((playlists, guardian) => {
      const preferredGenres = guardians[guardian];
      const filteredSongs = songs.filter(song => preferredGenres.includes(song.genre));
  
      playlists[guardian] = filteredSongs.map(song => ({
        title: song.title,
        artist: song.artist
      }));
  
      return playlists;
    }, {});

    return GuardianPlaylist(playlists);
  }

function GuardianPlaylist(playlists) {

    const playListContainer = document.getElementById("playlists"),
    getAllGuardians = Object.keys(guardians);

    getAllGuardians.forEach(guardianName => {
        let divContainer = document.createElement("div"),
        listContainer = document.createElement("ul"),
        divTitle = document.createElement("h1");
        divContainer.classList.add("playlist");
        
        const getGuardianGenre = Object.values(guardians[guardianName]);

        divTitle.textContent = `${guardianName}'s Playlist`;
        
        const getSongs = Object.values(playlists[guardianName]);
        getSongs.forEach(song => {
            const title = song.title,
            artist = song.artist;
            let listSong = document.createElement("li"),
            titleSpan = document.createElement("span");
            
            titleSpan.classList.add("song-title");
            titleSpan.textContent = title;
            
            listSong.classList.add("song");
            listSong.textContent = ` by ${artist}`;
            listSong.prepend(titleSpan);
            
            // listSong.innerHTML = `${titleSpan} by ${artist}`;
            listContainer.appendChild(listSong);
        });
        
        divContainer.appendChild(divTitle);
        divContainer.appendChild(listContainer);
        playListContainer.appendChild(divContainer);
        
    });
    
}
  


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



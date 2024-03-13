// MY favorite songs list
const songs = [
    { song: "Bohemian Rhapsody", artist: "Queen", releaseYear: 1975 },
    { song: "Ain't No Sunshine", artist: "Bill Withers", releaseYear: 1971 },
    { song: "The Sound of Silence", artist: "Simon & Garfunkel", releaseYear: 1965 },
    { song: "Help!", artist: "The Beatles", releaseYear: 1965 },
    { song: "Stand By Me", artist: "Ben E. King", releaseYear: 1961 },
    { song: "Rolling In the Deep", artist: "Adele", releaseYear: 2010 },
    { song: "Eye of the Tiger", artist: "Survivor", releaseYear: 1982 },
    { song: "I saw a Tiger", artist: "Joe Exotic", releaseYear: 2013 },
    { song: "Godzilla", artist: "Eminem", releaseYear: 2019 },
    { song: "I Can See Clearly Now", artist: "Johnny Nash", releaseYear: 1972 },
    { song: "Sara", artist: "Fleetwood Mac", releaseYear: 1979 },
    { song: "What a Wonderful World", artist: "Louis Armstrong", releaseYear: 1967 },
    { song: "Three Little Birds", artist: "Bob Marley", releaseYear: 1980 }
];

function renderAllSongs() {
    // Sort songs by release year
    const sortedSongs = songs.sort((a, b) => a.releaseYear - b.releaseYear);

    // Clear existing list
    $('#allSongsList').empty();

    // Append songs to the listview
    sortedSongs.forEach(song => {
        $('#allSongsList').append(`<li>${song.song} (${song.releaseYear}) - ${song.artist}</li>`);
    });

    // Refresh listview to apply styles
    $('#allSongsList').listview('refresh');
}

// Call renderAllSongs when pageseven is shown
$(document).on('pageshow', '#pageseven', function () {
    renderAllSongs();
});

$('#genreForm').submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input values
    var song = $('#songName').val();

    // Get existing favorites or initialize as empty array
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Add the song to favorites
    favorites.push(song);

    // Store updated favorites list in web storage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert("Song added to favorites successfully!");
});

function displayFavorites() {
    // Get favorites from storage
    var favorites = JSON.parse(localStorage.getItem('favorites'));

    // Clear existing favorites list
    $('#favoritesList').empty();

    // Display favorites
    if (favorites && favorites.length > 0) {
        favorites.forEach(song => {
            $('#favoritesList').append(`<li>${song}</li>`);
        });
    } else {
        $('#favoritesList').append(`<li>No favorites yet!</li>`);
    }

    // Refresh listview to apply styles
    $('#favoritesList').listview('refresh');
}

//// Call displayFavorites when pageseven is shown
//$(document).on('pageshow', '#pageseven', function () {
//    displayFavorites();
//});

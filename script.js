let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let total = 0;

    document.write("<p>");
    for (let i = 0; i < allMovies.length; i++) {
        let watched = allMovies[i].haveWatched ? "Yes :)" : "No :(";
        document.write(`${allMovies[i].title} - Rating: ${allMovies[i].rating} - Watched? ${watched}<br>`);
        total++;
    }
    document.write("</p>");
    document.write("<h3><u>Total Movies: " + total +"</u></h3>");
}



// Display only the movies that have a rating higher than the specified rating
// Display the total number of matches
let highRatings = (rating) => {
    let total = 0;
    let ratedMovies = [];
    
    document.write("<h2><i><u>High-rated movies:</u></i></h2>");
    
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            total++;
            ratedMovies.push(allMovies[i]);
            document.write(`${allMovies[i].title} - Rating: ${allMovies[i].rating}<br>`);
        }
    }
    
    document.write("<h3><u>Total high-rated movies: " + total + "</u></h3>");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    if (this.haveWatched == true) {
        this.haveWatched = false;
    } else {
        this.haveWatched = true;
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
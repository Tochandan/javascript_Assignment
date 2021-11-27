const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here

    if (operation==="add"){
        movies.push(movie);
    }
     else if(operation==="remove" && movies.length>=1){
        movies.pop();
    }
    return movies
}


    




module.exports = favouriteMovie;

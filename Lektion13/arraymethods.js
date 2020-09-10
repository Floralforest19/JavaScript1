const movies = [
    {
        name: 'Titanic',
        genere: 'Drama'
    },
    {
        name: '27 Dresses',
        genere: 'Comedy'
    },
    {
        name: 'Green Lantern',
        genere: 'Action'
    },
    {
        name: 'Wreckit Ralph',
        genere: 'Child'
    }
]
const familyFriendly = ['Comedy', 'Child']

function addFriendlyness(movie) {
    return {
        movie: movie.name,
        genere: movie.genere,
        familyFriendly: familyFriendly.includes(movie.genere)
    }
}

function filterFamilyFriendly(movie) {
    return movie.familyFriendly
}
function mapToNames(movie) {
    return movie.name
}
const familyFriendlyMovies = movies.map(addFriendlyness)
    .filter(filterFamilyFriendly)
    .map(mapToNames)
console.log(familyFriendlyMovies)
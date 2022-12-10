function fetchMovies(){
    fetch("http://localhost:3000/films/1").then((response) => {
        return response.json()
    }).then((movieData) => {
        console.log (movieData)
        const array = document.getElementById("array")
        array.innerHTML = `<div><img src="${movieData.poster}" alt=""> </div>
        <div id="titles">
        <h1>${movieData.title}</h1>
        <ul>
            <li>${movieData.runtime}</li>
            <li>${movieData.showtime}</li>
            <li>${movieData.capacity - movieData.tickets_sold}</li>
        </ul>
    </div>`
    })
}
document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
})
function fetchMovies(){
    fetch("http://localhost:3000/films/1")
    .then((response) => {
        return response.json()
    })
    .then((movieData) => {
        console.log (movieData)
        const array = document.getElementById("array")
        array.innerHTML = `<div><img src="${movieData.poster}" alt=""> </div>
        <div id="titles">
        <h1>${movieData.title}</h1>
        <ul>
            <li>${movieData.runtime}</li>
            <li>${movieData.showtime}</li>
            <li>${movieData.capacity - movieData.tickets_sold}</li>
            <li>${movieData.description}</li>
        </ul>
    </div>`
    })
}
document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
})

// get the list of all films and display them on the page
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // create an HTML list of films
    const filmsHTML = data.map(film => `
      <li class="film item">
        ${film.title}
      
      </li>
      <li class="film item">
      <img src="${film.poster}" alt="">
    
    </li>
    `).join('');

    // add the list of films HTML to the page
    document.getElementById('films').innerHTML = filmsHTML;
  });

// Define a function that decreases the number of available tickets
// by 1 and updates the frontend to reflect the change
function buyTicket() {
  // Get the current number of available tickets
  let tickets = document.getElementById('tickets').innerText
 // tickets = parseInt(tickets, 10);

  // Check if the showing is sold out (if there are 0 tickets left)
  if (tickets === 0) {
    alert('Sorry, this showing is sold out.');
    return;
  }
else if(tickets > 0){
  tickets --
}
  // Decrease the number of available tickets by 1
  

  // Update the frontend to reflect the change
  //document.getElementById('tickets').innerText = tickets;
}

// Attach the "buyTicket" function to the "Buy Ticket" button's click event
document.getElementById('buy-ticket-button').addEventListener('click', buyTicket);

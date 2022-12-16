const films = document.getElementById('films'); // selects the element with the id 'films'
const poster = document.getElementById('poster'); // selects the element with the id 'poster'
const title = document.getElementById('title'); // selects the element with the id 'title'
const runtime = document.getElementById('runtime'); // selects the element with the id 'runtime'
const showtime = document.getElementById('showtime'); // selects the element with the id 'showtime'
const description = document.getElementById('film-info'); // selects the element with the id 'film-info'
const ticketSpan = document.getElementById('ticket-num'); // selects the element with the id 'ticket-num'
const buyTicketButton = document.getElementById('buy-ticket'); // selects the element with the id 'buy-ticket'

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);

document.addEventListener("DOMContentLoaded", () => { // listens for the DOMContentLoaded event, which fires when the initial HTML document has been completely loaded and parsed
  const fetchTitle = fetch("http://localhost:3000/films"); // sends a GET request to the specified endpoint
  fetchTitle.then(response => response.json()).then(data => list(data)); // parses the response as JSON and passes it to the 'list' function
});

function list(data) { // 'list' function takes in the data returned from the API request

  for (let i = 0; i < data.length; i++) { // loop through each element in the data array
    const mov = document.createElement('h5'); // create an h5 element
    mov.textContent = data[i].title; // set the text content of the h5 element to the title of the current film in the loop

    films.appendChild(mov); // append the h5 element to the 'films' element
    mov.addEventListener('click', () => { // listen for a click event on the h5 element
      poster.src = data[i].poster; // set the src attribute of the 'poster' element to the poster image of the current film in the loop
      title.textContent = data[i].title; // set the text content of the 'title' element to the title of the current film in the loop
      runtime.textContent = data[i].runtime; // set the text content of the 'runtime' element to the runtime of the current film in the loop
      showtime.textContent = data[i].showtime; // set the text content of the 'showtime' element to the showtime of the current film in the loop
      description.textContent = data[i].description; // set the text content of the 'description' element to the description of the current film in the loop
      ticketSpan.textContent = (data[i].capacity - data[i].tickets_sold); // set the text content of the 'ticketSpan' element to the number of available tickets for the current film in the loop
      updateBuyTicketButton(); // call the 'updateBuyTicketButton' function
    });
    // show the first film when the page loads
    // set the values of the elements to the corresponding values of the first film in the 'data' array
    poster.src = data[0].poster;
    title.textContent = data[0].title;
    runtime.textContent = data[0].runtime;
    showtime.textContent = data[0].showtime;
    description.textContent = data[0].description;
    ticketSpan.textContent = (data[0].capacity - data[0].tickets_sold);
    updateBuyTicketButton(); // update the state of the 'buyTicketButton'
  }
}

function updateBuyTicketButton() { // 'updateBuyTicketButton' function
  const currentTicketCount = ticketSpan.textContent; // get the current ticket count from the 'ticketSpan' element

  if (currentTicketCount === 'Sold Out') { // if the current ticket count is 'Sold Out'
    buyTicketButton.disabled = true; // disable the 'buyTicketButton'
  } else { // if the current ticket count is not 'Sold Out'
    buyTicketButton.disabled = false; // enable the 'buyTicketButton'
  }
}

buyTicketButton.addEventListener('click', () => { // listen for a click event on the 'buyTicketButton'
  const currentTicketCount = parseInt(ticketSpan.textContent, 10); // get the current ticket count from the 'ticketSpan' element and parse it as an integer

  if (currentTicketCount > 0) { // if the current ticket count is greater than 0
    ticketSpan.textContent = currentTicketCount - 1; // decrease the ticket count by 1
  } else if(currentTicketCount <= 0) { // if the current ticket count is less than or equal to 0
    ticketSpan.textContent = 'Sold Out'; // set the ticket count to 'Sold Out'
  }
  updateBuyTicketButton(); // call the 'updateBuyTicketButton' function
});

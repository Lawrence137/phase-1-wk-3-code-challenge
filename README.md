# Phase-1-wk-3-code-challenge

For this assessment, you'll be working on Flatdango.

Flatiron Movie Theater is open for business! You will be building out an
application, Flatdango, that allows a user to purchase movie tickets from the
theater.

# Objectives

 See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`.

   See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads.

   Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available).

# Getting Started


Getting started In order for you to use the content on this repo ensure you have the following:

A computer that runs on either of the following; (Windows 7+, Linux, Mac OS) nodejs 9.0+ Installation To use this repo on your machine requires some simple steps;

Open a terminal / command line interface on your computer

Clone the repo by typing the following:

`git clone https://github.com/Lawrence137/phase-1-wk-3-code-challenge`

Be patient as it creates a copy on your local machine for you.

Change directory to the repo folder by typing the following in the terminal:

    `cd phase-1-wk-3-code-challenge`

(Option 1) Open it in Visual Studio Code by typing;

    `code .`

Then type;

    `npm install`

After its done installing type the following;

    `npm install -g json-server`


# Running the Application

After launching the application on Visual Studio Code, go to the top on the part written Terminal and right click on it.

Select new terminal and a terminal should open at the bottom of the page.

In the terminal, type the following

``json-server --watch db.json``.

 If its working, it should load and say 'watching...' on the last line.

 Click on the link under resources which looks like this:

  ``http://localhost:3000/films``.

   You should see the same details listed in the file named db.json.

 After making sure that the server is running click on the following link:
 
  `https://lawrence137.github.io/phase-1-wk-3-code-challenge/`

 The poster and details of the first movie should be displayed together with the list of films.


 # Authors
This project was contributed to by;

       -Lawrence kimani

# License
This project is licensed under GNU General Public License v2.0 










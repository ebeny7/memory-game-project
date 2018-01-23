/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

var symbols = [
    "fa fa-diamond", 
    "fa fa-paper-plane-o",
    "fa fa-bolt", 
    "fa fa-anchor", 
    "fa fa-cube", 
    "fa fa-leaf", 
    "fa fa-bicycle",
    "fa fa-bomb" 
];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function addCardsToDeck() {
    var decker = document.getElementsByClassName("deck");
    shuffle(symbols);
    symbols.forEach(function(symbol) {
        var cardElem = '<li class="card"><i class="' + symbol + '"></i></li>';
        //decker.append(cardElem);
        decker.push(cardElem);
    })
}

addCardsToDeck();

document.addEventListener("click", function () {
    displayCardOnDeck();
})

function displayCardOnDeck () {
    symbols.forEach(function (e) {
            function displayCard () {
                var open = this.addClass("open show");//display card
            }

            function OpenCards () {
                var openList = [];
                openList.push(open);//adding card to a list of open cards
            }
         
            function lockCards () {
                while (openList.length === 2) {
                    if (openList[0] === openList[1]) { //checking if two cards match
                      var lockCards = openList.addClass("match");//lock cards in open position
                    }
                }
            }

            function removeCard () {
                if (!(openList[0] === openList[1])) {
                    var removeList = openList.removeChild(open); //remove card from list of open cards if they do not match
                      removeList.hide();
                }
            }

        //displayCard();
        //OpenCards();
        //lockCards();
        //removeCard();
        })
}   

//function moveCounter () {
    //var counter = document.getElementsByClassName('move');
    //counter.addEventListener("click", function moveOn () {
       // for (var i = 0; i <= 18; i++) {
        //    count = 0;
      //      count =+ 1;
    //    }
  //  })
//}

//moveCounter();







           //increment move counter
           //display message if all cards match


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
  
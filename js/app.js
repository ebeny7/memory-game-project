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
    var decker = $(".deck");
    shuffle(symbols);
    symbols.forEach( function(symbol) {
        var cardElem = '<li class="card"><i class="' + symbol + '"></i></li>';
        //decker.append(cardElem);
        //decker.push(cardElem);
        //$(".deck").append(cardElem);
        decker =+ cardElem;
        console.log(decker);
    })
}

addCardsToDeck();

//document.addEventListener("click", function () {
    //displayCardOnDeck();
//})

//function displayCardOnDeck () {
    //r(".card").click(function () {
        //for (var i = 0; i < r(".card").length; i++) {
            //function displayCard () {
                //var open = $(".card")[0];
              //  var openDeck = this.addClass("open show");//display card
                //console.log(openDeck);
            //}
            //displayCard();

            $(".card").forEach( function (e) {
                function displayCard() {
                    var open = this.addClass('open show');
                }
            })
            displayCard();

            function openCards () {
                var openList = [];
                var openedCards = openList.push(openDeck);//adding card to a list of open cards
                console.log(openedCards);
            }
            openedCards();


            function lockCards () {
                while (openedCards.length === 2) {
                    if (openedCards[0] === OpenedCards[1]) {//checking if two cards match
                        var lockCard = openedCards.addClass("match");//lock cards in open position
                console.log(lockCard);
                    }        
                }
            }
            lockCards();

            function removeCard () {
                if (!(openedCards[0] === openedCards[1])) {
                    var removeList = openedCards.remove(openDeck); //remove card from list of open cards if they do not match
                        var removeListCards = removeList.hide();
                    console.log(removeListCards);
                }
            }
            removeCard();

            function moveCounter () {
                var counter = document.getElementsByClassName('move');
                //counter.addEventListener("click", function moveOn () {
                    for (var i = 0; i <= $(".card").length; i++) {
                        counter = 0;
                        counter =+ 1;
                    console.log(counter);
                    }    
            }
            moveCounter();


            function allCardsMatch () {
                while (lockCards = true) {
                    console.log("You Won!!!!!!!!");
                }
            }
            allCardsMatch();

        //}
    //})        
//}

//displayCardOnDeck();
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
  
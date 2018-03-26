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

function addCardsToDeck () {
    var decker = $(".deck");
    shuffle(symbols);
    symbols.forEach( function(symbol) {
        var cardElem = '<li class="card"><i class="' + symbol + '"></i></li>';
        //decker.append(cardElem);
        //decker.push(cardElem);
        //$(".deck").append(cardElem);
        decker =+ cardElem;
    })
}

addCardsToDeck();

//function displayCard () {
    //for (var i = 1; i <= $(".card").length; i++) {
        //$(".card").click( function (card) {
        //  var open = $(".card:nth-child(i)").addClass("open show");
        //  console.log(open);
        //})
    //}
//}

function displayCard () {
    $(".card").click(function (card) {
        open = $(this).addClass("open show");
    //openCards();
    })
}

    function openCards () {
        if ($(".card.open.show").length = 2) {
            if ($(".card.open.show")[0] = $(".card.open.show")[1]) { 
                openMatch = $(".card.open.show").addClass("match");
            }
        }else if (!($(".card.open.show")[0] = $(".card.open.show")[1])) {
                removeCard =  $(".card.open.show").remove();
                    removeCard.hide();  
        }    
    }
    
    function lockCards () {
       
    }
                    
                    
    function moveCounter () {
        var mCount = $(".moves");
        var addCount = "<span class="moves" value>1</span>";
        mCount =+ addCount;
        $(".card").click(function (card) {
            mCount =+ 1; //check for authenticity
        })   
    }
                


    function allCardsMatch () {
        if ($(".card.open.match").length = $(".card").length) {
            console.log("I came out reCoverEd!!!!!!!!!!!!!!!");
        }
    }


//displayCard();
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
  
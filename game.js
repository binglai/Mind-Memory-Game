var symbolArray = ['☯', '☯', '➀', '➀', '◔', '◔', '☹', '☹', '⚯', '⚯', '✮', '✮', '✱', '✱', '☻', '☻'];
var values = [];
var cards = [];
var turned = 0;
var tries = 0;

Array.prototype.shuffleCards = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

var new_array = [];

//document.getElementById("score").innerHTML = "" ;

function newBoard(){

var numOfSymbols = document.getElementById("numSymbols").value;

    document.getElementById("game").innerHTML = "";
    document.getElementById("try").innerHTML = "?!#'s: ";


        if (numOfSymbols > 9)
        {
            numOfSymbols = 8;
        }

        //var new_array = [];
        //based on number of symbols...
        for (var i = 0; i < (numOfSymbols*2); i++){
            new_array.push(symbolArray[i]);
        }

        turned = 0;
        var output = '';

        new_array.shuffleCards();

        for(var i = 0; i < new_array.length; i++)
        {
            output += '<div id="card_'+ i +'" onclick="turnCards(this,\'' + new_array[i]+'\')"></div>';
        }
        document.getElementById('game_board').innerHTML = output;
}

document.getElementById("startButton").addEventListener("click", newBoard);

function turnCards(card,val)
{

    if(card.innerHTML == "" && values.length < 2){
        card.innerHTML = val;
        if(values.length == 0){
            values.push(val);
            cards.push(card.id);
        } else if(values.length == 1){
            tries++;
            document.getElementById("tryNum").innerHTML = tries;
            

            values.push(val);
            cards.push(card.id);
            
            if(values[0] == values[1]){

                turned += 2;
               
                values = [];
                cards = [];
                
                if(turned == new_array.length){
                    document.getElementById('game_board').innerHTML = "<br><font size = 21><center>You are done! Thanks for playing! :)</center></font>";
                    newBoard();
                }
            } 
            else {
                function flipBack()
                {
                    var card1 = document.getElementById(cards[0]);
                    var card2 = document.getElementById(cards[1]);
                    card1.innerHTML = "";
                    card2.innerHTML = "";
                    
                    values = [];
                    cards = [];
                }

                setTimeout(flipBack, 3000);
            }
        }
    }
}
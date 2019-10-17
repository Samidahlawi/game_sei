
//Setting the varaibles 
var game = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
    ["2", "5", "8"],
    ["1", "4", "7"],
    ["3", "6", "9"]
]

var flag = true;
var player1= [];
var player2 = [];
var playerO = "O";
var playerX = "X";


//Starting the game
$(document).ready(function(){
    $(".game").hide();
    $("button").click(function(){
        $(".game").show();
        $("#front").hide();
    });


    $("button").css({
        "color": "blue",
        "background-color": "pink", 
        "display": "block",
        "width": "100%",
        "font-size": "20px",
        "font-weight":"bolder"});

    //When the game is over 
    $("#inside").click(function(){

    $('.col').removeClass('click')

    $('.col').text(' ');
    
    $(".col").css('color' , 'black')
    player1 = [];
    player2 = [];
    
});
    //Swithcing players 
    $(".col").click(function (e) {

        var click = $(this).hasClass("click")
        if (!click) {
    
    
            $(this).addClass("click")
            if (flag) {
    
                $(this).text(playerX);
                player1.push(this.id);
                game.forEach(win => {
    
                    if (player1.includes(win[0]) && player1.includes(win[1]) && player1.includes(win[2])) {
                        alert("You Won!");
                        $(".col").addClass("click")
                        $("#"+win[0]).css('color' , 'red')
                        $("#"+win[1]).css('color' , 'red')
                        $("#"+win[2]).css('color' , 'red')
                    }
    
                });
                flag = !flag
            }
            else {
                $(this).text(playerO);
                player2.push(this.id);
                game.forEach(win => {
    
                    if (player2.includes(win[0]) && player2.includes(win[1]) && player2.includes(win[2])) {
                        alert("You Won!");
                        $(".col").addClass("click")
                        $("#"+win[0]).css('color' , 'red')
                        $("#"+win[1]).css('color' , 'red')
                        $("#"+win[2]).css('color' , 'red')
                    }
    
                });
                flag = !flag
    
            }
        }
       
    });
    
    //Adding a hover effect 
    $(".col").hover(function () {
    
        $(this).css("background-color", "#B9B9B9");
        
      
    }, function () {
    
    }
    );

});





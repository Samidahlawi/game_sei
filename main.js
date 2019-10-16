
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
var playerHuman= [];
var playerPablo = [];
var human = "O";
var pablo = "X";



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

$("#inside").click(function(){


    $('.col').text(' ');
    

 $('.col').removeClass('click')
    
    $(".col").css('color' , 'black')
    playerHuman = [];
    playerPablo = [];
    
});

    $(".col").click(function (e) {

        var click = $(this).hasClass("click")
        if (!click) {
    
    
            $(this).addClass("click")
            if (flag) {
    
                $(this).text(human);
                playerHuman.push(this.id);
                game.forEach(win => {
    
                    if (playerHuman.includes(win[0]) && playerHuman.includes(win[1]) && playerHuman.includes(win[2])) {
                        alert("You are winning!");
                        $(".col").addClass("click")
                        $("#"+win[0]).css('color' , 'red')
                        $("#"+win[1]).css('color' , 'red')
                        $("#"+win[2]).css('color' , 'red')
                    }
    
                });
                flag = !flag
            }
            else {
                $(this).text(pablo);
                playerPablo.push(this.id);
                game.forEach(win => {
    
                    if (playerPablo.includes(win[0]) && playerPablo.includes(win[1]) && playerPablo.includes(win[2])) {
                        alert("You are winning!");
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
    
    $(".col").hover(function () {
    
        $(this).css("background-color", "#B9B9B9");
        //$(this).css('z-index', 1)
      
    }, function () {
    
    //    $(this).css("background-color", "none");
    //    console.log($(this).hasClass('click'))
    //    if (!$(this).hasClass('click')){

    //    $(this).css('z-index', -1)
    //    }

    
    }
    );


    



});





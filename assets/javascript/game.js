$(document).ready(function(){
    // let's start by creating some variables to keep track of everything that I will need
    var headerText = $("#header-text"),
    directionsText = $("#directions-text"),
    targetScoreText = $("#target-score"),
    winsText = $("#wins-text"),
    lossesText = $("#losses-text"),
    button1 = $("#btn-1"),
    button2 = $("#btn-2"),
    button3 = $("#btn-3"),
    button4 = $("#btn-4"),
    button5 = $("#btn-5"),
    totalScoreText = $("#total-score-text"),
    scoreText = $("#score-text"),
    wins = 0,
    losses = 0,
    targetScore = 0,
    totalScore = 0;
    buttonValue1 = 0,
    buttonValue2 = 0,
    buttonValue3 = 0,
    buttonValue4 = 0,
    buttonValue5 = 0;

    // let's add the header into the document
    headerText.text("Gemstone Collector!");

    // let's go ahead and add some directions
    var text1 = "You will be given a random number at the start of the game.",
        text2 = "There are five crystals below. By clicking on a crystal you will add a specific amount of points to your total score.",
        text3 = "You win the game by matching you total score to the random number, you lose the game if your total score goes above the random number.",
        text4 = "The value of each crystal is hidden from you until you click on it.",
        text5 = "Each time the game starts, the game will change the values of each crystal.",
        linebreak = "<br>";
    directionsText.text(text1).append(linebreak).append(linebreak);
    directionsText.append(text2).append(linebreak).append(linebreak);
    directionsText.append(text3).append(linebreak).append(linebreak);
    directionsText.append(text4).append(linebreak).append(linebreak);
    directionsText.append(text5).append(linebreak).append(linebreak);

    // let's go ahead and add some images into the button tags
    button1.html("<img src='assets/images/diamond.png' alt='diamond' style='width: 100px;'>");
    button2.html("<img src='assets/images/emerald.png' alt='emerald' style='width: 100px;'>");
    button3.html("<img src='assets/images/ruby.png' alt='ruby' style='width: 100px;'>");
    button4.html("<img src='assets/images/sapphire.png' alt='sapphire' style='width: 100px;'>");
    button5.html("<img src='assets/images/topaz.png' alt='topaz' style='width: 100px;'>");

    // let's play the game!
    // let's start off by creating the initial setup as a function
    initialize = function() {
        // creating a random number between 19 and 120 and adding it to the element with the id target-score-text
        targetScore = Math.floor(Math.random() * 101) + 19;
        targetScoreText.text(targetScore);
        // creates a random number to between 1 and 12 to assign to the value of button 1
        buttonValue1 = Math.floor(Math.random() * 11) + 1;
        button1.attr("value", buttonValue1);
        // creates a random number to between 1 and 12 to assign to the value of button 2
        buttonValue2 = Math.floor(Math.random() * 11) + 1;
        button2.attr("value", buttonValue2);
        // creates a random number to between 1 and 12 to assign to the value of button 3
        buttonValue3 = Math.floor(Math.random() * 11) + 1;
        button3.attr("value", buttonValue3);
        // creates a random number to between 1 and 12 to assign to the value of button 4
        buttonValue4 = Math.floor(Math.random() * 11) + 1;
        button4.attr("value", buttonValue4);
        // creates a random number to between 1 and 12 to assign to the value of button 5
        buttonValue5 = Math.floor(Math.random() * 11) + 1;
        button5.attr("value", buttonValue5);
        // displays the current wins
        winsText.text("Wins: " + wins);
        // displays the current losses
        lossesText.text("Losses: " + losses);
        // displays the total score before the user clicks any button
        totalScore = 0;
        totalScoreText.text("Your total score is: ");
        scoreText.text(totalScore);
    }
    initialize();

    // create a function that will grab a button on click
    $(".btn-choice").on("click", function(){
        // add code to determine which button was clicked
        var userGuess = $(this).attr("value");
        // update the total score depending on which button is clicked
        totalScore = totalScore + parseInt(userGuess);
        scoreText.text(totalScore);
        // time to compare the total score against the target score
        if ( totalScore == targetScore ) {
            wins++;
            initialize();
        } else if ( totalScore > targetScore ) {
            losses++;
            initialize();
        }
    });
});

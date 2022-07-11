///aufgabe 1
const color = "yellow";
switch (color) {
    case "red":
        console.log("Q1: Red's a great color on you");
        break;
    case "green":
        console.log("Q1: Ok. Green it is.");
        break;
    case "yellow":
        console.log("Q1: Not what I would have picked, but yellow is fine.");
        break;
    case "":
        console.log("Q1: The aim of the game is to pick a color.");
        break;
    default:
        break;
}
//aufgabe 2

const grad = "D";
switch (grad) {
    case "A":
        "A - Well done!";
        break;
    case "B":
        console.log("B - Good on you!");
        break;
    case "C":
        console.log("Good effort");
        break;
    case "D":
        console.log("Try harder next time...");
        break;

    default:
        break;
}

///aufgabe 3
const fruit = "orange";
switch (fruit) {
    case "apple":
        console.log("An apple a day keeps the doctor away.");
        break;
    case "banana":
        console.log(" Bananas are full of potassium");
        break;
    case "orange":
        console.log("Yep, oranges. Great choice.");
        break;
    case "strawberry":
        console.log("Mmmm...nothing better than strawberries.");
        break;
    default:
        console.log("PICK A FRUIT");
}
//augabe 4

const percentageComplete = "100";
if (percentageComplete < 30) {
    console.log("Still a long way to go");
} else if (percentageComplete > 30 && percentageComplete < 50) {
    console.log("Slowly getting there");
} else if (percentageComplete > 51 && percentageComplete < 80) {
    console.log("You can do it");
}
else if (percentageComplete > 81 && percentageComplete < 99) {
    console.log("This is the last push!");
}
else if(percentageComplete == 100 ) {
    console.log("well done");
}



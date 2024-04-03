let favMovie= "MS Dhoni"
let guess = prompt("enter movie name")
while ((guess != favMovie)){
    if (guess == "quit") {
        console.log("You Quit")
        break;
    }
guess = prompt("please try again");

}
if (guess == favMovie) {
    console.log("Congrats you won")
} 
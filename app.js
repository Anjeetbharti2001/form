const max = prompt("Enter the max number ");
 
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number ");

while(true){
    if(guess == "quit"){
        console.log("user quit");
    }
    if(guess == random){
        console.log("you are right! congrates! random number was", random);
        break;
    }else{
      guess = prompt("your guess was wrong . please try again ");
    }
}
// guess the random number 
const choices = document.querySelectorAll(".box");

let rock = document.querySelector("#rock"); 
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");



let youu =  document.querySelector(".user");
let compu =  document.querySelector(".comp");
let winner =  document.querySelector(".winner");

let count=0,you;

const comp = () =>{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const playGame = (choiceYou) => {
    console.log(`Your choice is ${choiceYou}`);
    let choiceComp = comp();
    console.log(`Computer choice is ${choiceComp}`);
    if(choiceYou=="rock" && choiceComp=="rock"){
        console.log("It's a Draw"); 
    }
    else if(choiceYou=="rock" && choiceComp=="paper"){
        console.log("Comp wins"); 
        compu.innerText++;
    }
    else if(choiceYou=="rock" && choiceComp=="scissors"){
        console.log("You won"); 
        youu.innerText++;
    }
    else if(choiceYou=="paper" && choiceComp=="rock"){
        console.log("You won");
        youu.innerText++;
    }
    else if(choiceYou=="paper" && choiceComp=="paper"){
        console.log("It's a draw");
    }
    else if(choiceYou=="paper" && choiceComp=="scissors"){
        console.log("Comp wins"); 
        compu.innerText++;
    }
    else if(choiceYou=="scissors" && choiceComp=="rock"){
        console.log("comp wins"); 
        compu.innerText++;
    }
    else if(choiceYou=="scissors" && choiceComp=="paper"){
        console.log("you won"); 
        youu.innerText++;
    }
    else if(choiceYou=="scissors" && choiceComp=="scissors"){
        console.log("It's a Draw");
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const choiceYou = choice.getAttribute("id");
        playGame(choiceYou);
    });
});


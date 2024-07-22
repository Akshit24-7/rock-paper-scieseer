let userscore = 0 ;
let computerscore = 0;

 let choice = document.querySelectorAll(".choice") 
 let move =document.querySelector("#move")

 let scoreP = document.querySelector("#person");
let compP = document.querySelector("#computer");


const getcomchoice = () => { 
    const  options = ["rock" , "paper" , "Scissor"];
    const  randidx = Math.floor(Math.random() * 3)
     return options[randidx]
};

const showwinner = (userwin , userchoice ,comchoice) => {
    if(userwin) {
        userscore++;
        scoreP.innerText = userscore;
        console.log("you win !")
        move.innerText = `you win  your [${userchoice}] beats  [${comchoice}]`

    } else {
        computerscore++;
        compP.innerText = computerscore;
        console.log("you loos !")
        move.innerText = `you lose  [${comchoice} ] beats [${userchoice} ]`
        
    }
}

const drawGame = () => {
    console.log("Game has been draw")
    move.innerText = "Game has been draw!"
    // move.Style.background = ""
}


const gamecomt = (userchoice) => {
    console.log("user choice = " , userchoice)
    // genrate computer choice 
    const comchoice = getcomchoice()
    console.log("computer choice = ", comchoice)

    if (userchoice === comchoice) {
        drawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            //paper , scissor
          userwin =  comchoice === "paper" ? false : true;
        } else if  (userchoice === "paper") {
            userwin = comchoice === "scissor" ? false : true ;
        } else {
            userwin = comchoice === "rock" ? false : true
        }
        showwinner(userwin , userchoice , comchoice);
        }
};



choice.forEach((choice)  => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id")
       gamecomt(userchoice)
    });
});
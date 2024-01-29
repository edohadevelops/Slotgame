const ROWS = 3
const COLUMNS = 3

const SYMBOLS_AVAILABLE = {
    A: 3,
    B: 5,
    C: 7,
    D: 9,
    E: 17
}

const SYMBOLS_VALUE = {
    A: 12,
    B: 10,
    C: 8,
    D: 7,
    E: 5
}

//Deposit money to account
//Ask user for the numer of lines they wish to bet on
//Collect the amount user wishes to bet on
// Spin the slot machine
// check if the user won
//give the user the winnings
// Play again???
let initialBalance = document.getElementsByClassName("actual-balance");
for(const element of initialBalance){
    element.innerHTML = 0
}
const usernameValues = document.getElementsByClassName("users-name");
let balance = 0
let lines = 1;
let bet = 0;
const line1 = document.getElementById("lines1");
const line2 = document.getElementById("lines2");
const line3 = document.getElementById("lines3");
let congrats = document.getElementById("congrats");
let win = document.getElementById("win");
let goAgain = document.getElementById("again");




let step1 = document.getElementById("step-1");
let step2 = document.getElementById("step-2");
let step3 = document.getElementById("step-3");
let step4 = document.getElementById("step-4");
let step5 = document.getElementById("step-5");
let step6 = document.getElementById("step-6");
let step7 = document.getElementById("step-7");
let step8 = document.getElementById("step-8");
let step9 = document.getElementById("step-9");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

const getUsername = () => {
    const userinput = document.getElementById("user-input").value;
    if(userinput != ""){
        for(const user of usernameValues){
            user.innerHTML = userinput
        }
        step1.classList.add("hide")
        step2.style.transition = "1s"
        step2.classList.add("show")
    }
    
}

const toStep3 = () => {
    step2.classList.remove("show")
    step3.style.transition = "1s"
    step3.classList.add("show")
}
const getDeposit = () => {
    const initialDeposit = document.getElementById("deposit");
    const depositValue = parseFloat(initialDeposit.value);
    if(!isNaN(depositValue) || depositValue > 0){
        balance += depositValue
        for(element of initialBalance){
            element.innerHTML = balance
        }
        step3.classList.remove("show")
        step4.style.transition = "1s"
        step4.classList.add("show")
    }
    initialDeposit.value = "0"
    
}
const toLines = () => {
    step4.classList.remove("show")
    step5.style.transition = "1s"
    step5.classList.add("show")
}
const getLines = () => {
    const initialLines = document.getElementById("lines");
    const linesValue = parseFloat(initialLines.value);
    if(linesValue >= 1 && linesValue <= 3){
        lines = linesValue
        step5.classList.remove("show")
        step6.style.transition = "1s"
        step6.classList.add("show")
    }
    initialLines.value ="1"
    
}
const placeBet = (balance,lines) => {
    const initialBet = document.getElementById("bet");
    const betValue = parseFloat(initialBet.value);
    if(betValue <= balance / lines && !isNaN(betValue) && betValue > 0){
        bet = betValue
        step6.classList.remove("show")
        step7.style.transition = "1s"
        step7.classList.add("show")
        balance -= bet * lines
        for(element of initialBalance){
            element.innerHTML = balance
        }
    }
    initialBet.value = "0"
    console.log(balance , " at placebet")
    
}
const viewBet = () => {
    step7.classList.remove("show")
    step8.style.transition = "1s"
    step8.classList.add("show")
    spin()
}

const spin = () => {
    const symbols = [];
    for(const[symbol,available] of Object.entries(SYMBOLS_AVAILABLE) ){
        for(let i = 0; i < available; i++){
            symbols.push(symbol);
        }
    }
    const spinReels = [];
    for(let i = 0;i < COLUMNS; i++){
        spinReels.push([])
        const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex]
            spinReels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1)
        }
    }
    for(let i = 0; i < COLUMNS;i++){
        const symbol = document.createElement("p")
        symbol.innerHTML = spinReels[0][i]
        if(symbol.innerHTML == "A"){
            symbol.style.color = "red"
        }
        else if(symbol.innerHTML == "B"){
            symbol.style.color = "purple"
        }
        else if(symbol.innerHTML == "C"){
            symbol.style.color = "orangered"
        }
        else if(symbol.innerHTML == "D"){
            symbol.style.color = "blue"
        }
        else if(symbol.innerHTML == "E"){
            symbol.style.color = "green"
        }
        line1.appendChild(symbol)
    }
    for(let i = 0; i < COLUMNS;i++){
        const symbol = document.createElement("p")
        symbol.innerHTML = spinReels[1][i]
        if(symbol.innerHTML == "A"){
            symbol.style.color = "red"
        }
        else if(symbol.innerHTML == "B"){
            symbol.style.color = "purple"
        }
        else if(symbol.innerHTML == "C"){
            symbol.style.color = "orangered"
        }
        else if(symbol.innerHTML == "D"){
            symbol.style.color = "blue"
        }
        else if(symbol.innerHTML == "E"){
            symbol.style.color = "green"
        }
        line2.appendChild(symbol)
    }
    for(let i = 0; i < COLUMNS;i++){
        const symbol = document.createElement("p")
        symbol.innerHTML = spinReels[2][i]
        if(symbol.innerHTML == "A"){
            symbol.style.color = "red"
        }
        else if(symbol.innerHTML == "B"){
            symbol.style.color = "purple"
        }
        else if(symbol.innerHTML == "C"){
            symbol.style.color = "orangered"
        }
        else if(symbol.innerHTML == "D"){
            symbol.style.color = "blue"
        }
        else if(symbol.innerHTML == "E"){
            symbol.style.color = "green"
        }
        line3.appendChild(symbol)
    }
    const newRows = []
    for(let i = 0;i < ROWS;i++){
        newRows.push([])
        for(let j = 0; j < COLUMNS;j++){
            newRows[i].push(spinReels[j][i])
        }
    }
    let winnings = 0;
    let completeRows = 0;
    for(let row = 0; row < newRows.length; row++){
        const symbols = newRows[row]
        let allSame = true
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if(allSame){
            winnings = winnings + (bet * SYMBOLS_VALUE[symbols[0]])
            completeRows += 1
        }
        if(completeRows >= lines){
            break;
        }
    }
    if(winnings > 0){
        balance += winnings;
        for(element of initialBalance){
            element.innerHTML = balance
        }
        congrats.innerHTML = "Congrats you won "
        congrats.style.color = "green"
        win.innerHTML = winnings
        goAgain.innerHTML = "Would you like to play again?"
        btn9.innerHTML = "PLAY AGAIN"
        console.log(balance , " at won")

    }
    else{
        congrats.innerHTML = "WHAT IS CASHOUT? "
        congrats.style.color = "red"
        win.innerHTML = ""
        balance -= bet * lines
        if (balance > 0) {
            goAgain.innerHTML = "No Guts, No Glory! GO again!"
            btn9.innerHTML = "PLAY AGAIN"
        }
        else{
            btn9.innerHTML = "DEPOSIT"
        }
        console.log(balance , " at lost")

    }
}
const claimWin = () =>{
    step8.classList.remove("show")
    step9.style.transition = "1s"
    step9.classList.add("show")
    line1.innerHTML = ""
    line2.innerHTML = ""
    line3.innerHTML = ""

}
const proceed = () =>{
    if(balance <= 0){
        step9.classList.remove("show")
        step3.style.transition = "1s"
        step3.classList.add("show")
    }
    else{
        step9.classList.remove("show")
        step5.style.transition = "1s"
        step5.classList.add("show")
    }

}

/*
const getUser = () => {
    const User = prompt("Hey there, Welcome to Edoha's Spin game, What should we call you? ");
    console.log("Welcome, ", User)
    return User
}

const deposit = () =>{
    while(true){
        const initialDeposit = prompt("How much would you like to deposit? ");
        const depositValue = parseFloat(initialDeposit);
        if(isNaN(depositValue) || depositValue <= 0){
            console.log("Invalid deposit, please try again");
        }
        else{
            console.log("Your current balance is: $", depositValue)
            return depositValue
        }
    }  
}
const lines = () =>{
    while(true){
        const initiallines = prompt("How many lines would you like to bet on?(1-3) ");
        const lineValue = parseFloat(initiallines);
        if(isNaN(lineValue) || lineValue <= 0 || lineValue >3){
            console.log("Invalid number of lines, please try again");
        }
        else{
            console.log("Great let's proceed")
            return lineValue
        }
    }  
}
const bet = (balance,numberOfLines) =>{
    while(true){
        const initialbet = prompt("How much would you like to bet per line? ");
        const betValue = parseFloat(initialbet);
        if(isNaN(betValue) || betValue <= 0){
            console.log("Invalid bet amount, please try again");
        }
        else if(betValue > balance / numberOfLines){
            console.log("Insufficient funds!!!, please try again");
        }
        else{
            console.log("Bet successful!")
            console.log("Your current balance is: $", balance - betValue * numberOfLines)
            return betValue
        }
    }  
}
const spin = () => {
    const symbols = [];
    for(const[symbol,available] of Object.entries(SYMBOLS_AVAILABLE) ){
        for(let i = 0; i < available; i++){
            symbols.push(symbol);
        }
    }
    const spinReels = [];
    for(let i = 0;i < COLUMNS; i++){
        spinReels.push([])
        const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex]
            spinReels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1)
        }
    }
    return spinReels;
}
const transposeReels = (reels) => {
    const newRows = []
    for(let i = 0;i < ROWS;i++){
        newRows.push([])
        for(let j = 0; j < COLUMNS;j++){
            newRows[i].push(reels[j][i])
        }
    }
    return newRows;
}
const printRows = (newRows) => {
    console.log("Here is the result of your game")
    for(const row of newRows){
        let rowString = ""
        for(const[i,symbol] of row.entries()){
            rowString += symbol
            if(i != row.length - 1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
    
}
const winOrLose = (rows,bet,lines,balance) =>{
    let winnings = 0;
    let completeRows = 0
    for(let row = 0; row < rows.length; row++){
        const symbols = rows[row]
        let allSame = true
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if(allSame){
            winnings = winnings + (bet * SYMBOLS_VALUE[symbols[0]])
            completeRows += 1
        }
        if(completeRows >= lines){
            break;
        }
    }
    if(winnings > 0){
        console.log("Congratulations, You've won $",winnings)
        console.log("Your new balance is now: ",balance + winnings)

    }
    else{
        console.log("WHAT IS CASHOUT")
        console.log("Your balance is: $",balance)
        if (balance > 0) {
            console.log("No guts No glory, Go again?")
        }
    }
    return winnings;
}
const game = () => {
    const user = getUser();
    let balance = deposit();
    while(true){
        const numberOfLines = lines();
        const stake = bet(balance,numberOfLines);
        balance -= stake * numberOfLines
        const spinnedReel = spin();
        const transpose = transposeReels(spinnedReel);
        printRows(transpose);
        const gameOutcome = winOrLose(transpose,stake,numberOfLines,balance)
        balance += gameOutcome;
        if(balance <= 0){
            console.log("You don't have any money chai");
            break;
        }
        const playAgain = prompt("Do you wish to play again? (y/n)");
        if(playAgain != "y") break;
    }
}
game();





/*const prompt = require("prompt-sync")();

const ROWS = 3
const COLUMNS = 3

const SYMBOLS_AVAILABLE = {
    A: 3,
    B: 6,
    C: 9,
    D: 11,
    E: 12
}

const SYMBOLS_VALUE = {
    A: 12,
    B: 10,
    C: 8,
    D: 7,
    E: 5
}

//Deposit money to account
//Ask user for the numer of lines they wish to bet on
//Collect the amount user wishes to bet on
// Spin the slot machine
// check if the user won
//give the user the winnings
// Play again???
const getUser = () => {
    const User = prompt("Hey there, Welcome to Edoha's Spin game, What should we call you? ");
    console.log("Welcome, ", User)
    return User
}

const deposit = () =>{
    while(true){
        const initialDeposit = prompt("How much would you like to deposit? ");
        const depositValue = parseFloat(initialDeposit);
        if(isNaN(depositValue) || depositValue <= 0){
            console.log("Invalid deposit, please try again");
        }
        else{
            console.log("Your current balance is: $", depositValue)
            return depositValue
        }
    }  
}
const lines = () =>{
    while(true){
        const initiallines = prompt("How many lines would you like to bet on?(1-3) ");
        const lineValue = parseFloat(initiallines);
        if(isNaN(lineValue) || lineValue <= 0 || lineValue >3){
            console.log("Invalid number of lines, please try again");
        }
        else{
            console.log("Great let's proceed")
            return lineValue
        }
    }  
}
const bet = (balance,numberOfLines) =>{
    while(true){
        const initialbet = prompt("How much would you like to bet per line? ");
        const betValue = parseFloat(initialbet);
        if(isNaN(betValue) || betValue <= 0){
            console.log("Invalid bet amount, please try again");
        }
        else if(betValue > balance / numberOfLines){
            console.log("Insufficient funds!!!, please try again");
        }
        else{
            console.log("Bet successful!")
            console.log("Your current balance is: $", balance - betValue * numberOfLines)
            return betValue
        }
    }  
}
const spin = () => {
    const symbols = [];
    for(const[symbol,available] of Object.entries(SYMBOLS_AVAILABLE) ){
        for(let i = 0; i < available; i++){
            symbols.push(symbol);
        }
    }
    const spinReels = [];
    for(let i = 0;i < COLUMNS; i++){
        spinReels.push([])
        const reelSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex]
            spinReels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1)
        }
    }
    return spinReels;
}
const transposeReels = (reels) => {
    const newRows = []
    for(let i = 0;i < ROWS;i++){
        newRows.push([])
        for(let j = 0; j < COLUMNS;j++){
            newRows[i].push(reels[j][i])
        }
    }
    return newRows;
}
const printRows = (newRows) => {
    console.log("Here is the result of your game")
    for(const row of newRows){
        let rowString = ""
        for(const[i,symbol] of row.entries()){
            rowString += symbol
            if(i != row.length - 1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
    
}
const winOrLose = (rows,bet,lines,balance) =>{
    let winnings = 0;
    let completeRows = 0
    for(let row = 0; row < rows.length; row++){
        const symbols = rows[row]
        let allSame = true
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if(allSame){
            winnings = winnings + (bet * SYMBOLS_VALUE[symbols[0]])
            completeRows += 1
        }
        if(completeRows >= lines){
            break;
        }
    }
    if(winnings > 0){
        console.log("Congratulations, You've won $",winnings)
        console.log("Your new balance is now: ",balance + winnings)

    }
    else{
        console.log("WHAT IS CASHOUT")
        console.log("Your balance is: $",balance)
        if (balance > 0) {
            console.log("No guts No glory, Go again?")
        }
    }
    return winnings;
}
const game = () => {
    const user = getUser();
    let balance = deposit();
    while(true){
        const numberOfLines = lines();
        const stake = bet(balance,numberOfLines);
        balance -= stake * numberOfLines
        const spinnedReel = spin();
        const transpose = transposeReels(spinnedReel);
        printRows(transpose);
        const gameOutcome = winOrLose(transpose,stake,numberOfLines,balance)
        balance += gameOutcome;
        if(balance <= 0){
            console.log("You don't have any money chai");
            break;
        }
        const playAgain = prompt("Do you wish to play again? (y/n)");
        if(playAgain != "y") break;
    }
}
game();

*/


function fun() {
    const randomNumber = Math.floor(Math.random() * 10);

    let computerMove = '';
    
    let min = Math.pow(10, 4);
    let max = Math.pow(10, 7) - 1;

    let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log("Random Number:", randomNumbers);
    document.getElementById("write").innerHTML = randomNumbers;

}

fun();
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = ""
let passwordTwo = ""

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function generate() {
    for (i=0; i < 15; i++) {
        passwordOne += characters[getRandomInt(91)]
        passwordTwo += characters[getRandomInt(91)]
    }
    
    const boxOne = document.getElementById("password-one") 
    const boxTwo = document.getElementById("password-two") 
    
    boxOne.innerHTML = `${passwordOne}`
    boxTwo.innerHTML = `${passwordTwo}`

    passwordOne = ""
    passwordTwo = ""
}

document.getElementById("pressed").addEventListener("click", generate)

// EXTRA // 
// add 'copy on click'
// toggle symbols and numbers on/off
// ability to set password length
const letters = "abcdefghijklmnopqrstuvwxyz"

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters")
console.log(lettersContainer)

lettersArray.forEach(letter => {
  let span = document.createElement("span")
  let TheLetter = document.createTextNode(letter)
  span.appendChild(TheLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
})

const data = {
  film: [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Fight Club",
    "Forrest Gump"
  ],
  names: [
    "Ahmed",
    "Nada",
    "Mohamed",
    "Gamela",
    "Mohammed",
    "Sanaa",
    "Menna",
    "Alsaid"
  ],
  cities: [
    "Cairo",
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Dubai",
    "Sydney",
    "Rome"
  ],
  hobbies: [
    "reading",
    "coding",
    "swimming",
    "drawing",
    "hiking",
    "photography",
    "cooking",
    "gaming"
  ]
};

console.log(data);

let allKeys = Object.keys(data);
let randomKey = allKeys[Math.floor(Math.random() * allKeys.length)] // important
let randomValues = data[randomKey]
let randomValue = randomValues[Math.floor(Math.random() * randomValues.length)] // important

let categorySpan = document.querySelector(".category span");
categorySpan.innerHTML = `${randomKey} `

console.log(randomKey)
console.log(randomValues)
console.log(randomValue)




let letteGuessedContainer = document.querySelector(`.letters-guess`);
let userWordArray = [...randomValue]
userWordArray.forEach(letter => {
  let span = document.createElement("span")
  if (letter === ' ') { span.className = 'with-space' }
  letteGuessedContainer.appendChild(span)
})
console.log(userWordArray)
let guessSpan = document.querySelectorAll(`.letters-guess span`);

let numOfTires = 0 ;
let hangmanDraw = document.querySelector(".hangman-draw")

document.addEventListener("click", function (e) {
  let guessStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked")
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // console.log(clickedLetter)
    // console.log(choosenWord)
    userWordArray.forEach((letter, wordindex) => {
      if (clickedLetter == letter.toLowerCase())
      {
        guessStatus = true;
        guessSpan.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = letter;
          }
       
        })
      }
      })
    
      if(guessStatus !== true){
        numOfTires++;
        hangmanDraw.classList.add(`wrong-${numOfTires}`);
        // Play fail sound
         document.getElementById("fail").play();
         if(numOfTires === 8){
          document.getElementById("end").play();
          endGame();
          lettersContainer.classList.add("finished")
         }
      }
      else{
        document.getElementById("success").play();
      }
  }
})

function endGame(){
  // Popup div
 let popDiv =  document.createElement("div");
let popText = document.createTextNode(`Game Over , The Word Is ${randomValue}`)
popDiv.className = `popup`
popDiv.appendChild(popText)
document.body.appendChild(popDiv)
}




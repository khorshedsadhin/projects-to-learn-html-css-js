
const container = document.querySelector(".container");
const CAREERS = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    isVowel = CAREERS[careerIndex].slice(0,1) === "I" ? "an" : "a";
    container.innerHTML = `<h1>I am ${isVowel} ${CAREERS[careerIndex].slice(0,characterIndex)}</h1>`;

    if (characterIndex == CAREERS[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex == CAREERS.length) {
        careerIndex = 0;
    }

    setTimeout(updateText, 400)
}

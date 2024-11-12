/**
* Magic Eight Ball
* 
* This program simulates a Magic Eight Ball that gives random answers to questions.
*
* SOLUTION CODE - your code may vary

*/

// Define possible answers for the Magic Eight Ball
const magicEightBallAnswers: string[] = [ 
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Better not tell you now.",
    "Concentrate and ask again.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Function to get a random answer from the answers array
function getRandomAnswer(): string {
    const randomIndex = Math.floor(Math.random() * magicEightBallAnswers.length);
    return magicEightBallAnswers[randomIndex];
}

// Function to update the answer in the DOM
function updateAnswer(answer: string): void {
    const answerElement = document.getElementById("answer");
    if (answerElement) {
        answerElement.textContent = answer;
    }
}

// Function to handle the click event of the 'ask' button
function handleAskButtonClick(): void {
    const answer = getRandomAnswer();
    updateAnswer(answer);
}

// Function to initialize event listeners
function initializeEventListeners(): void {
    const askButton = document.getElementById("ask");
    if (askButton) {
        askButton.addEventListener("click", handleAskButtonClick);
    }
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeEventListeners);
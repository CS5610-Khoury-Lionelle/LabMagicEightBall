# Lab Magic Eight Ball

For this lab, you will be a simple webpage that will randomly generate an answer based on the famous 'magic eight ball'. 

## :star: Learning Outcomes :star:
* Be able to write back HTML focusing on semantic markup
* Be able to write basic CSS for styling
* Be able to write basic typescript -> javascript to manipulate the DOM. 


## :fire: Tasks

### HTML framing, semantic  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic Eight Ball</title>
</head>
<body>
    
</body>
</html>
```


```html
<body> <!-- note this is showing you are in the body, don't duplicate -->
    <h1>Magic 8 Ball</h1>
    <p>Add a description here</p>
    <!-- you will add a div and paragraph here, see below -->
    <footer>&copy; Your Name</footer>
</body>
```

```html
<!-- to be added between the P and footer element -->
    <div>    
        <button type="button" id="ask">Ask</button>
    </div>
    <p id="answer"></p>
```

### Functionality / Typescript
```html
<script src="eightball.js"></script>
```

```ts
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
```

```ts
// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeEventListeners);
```


### Styling with CSS

```html
<link rel="stylesheet" href="style.css">
```


## 🚨 Submission Instructions

Submit via the assignment link in canvas. You will submit a link to your github repository for this assignment.  

## :memo: Rubric

For labs, TAs will check to see if you completed the lab, but the grade is you completed it or not. 
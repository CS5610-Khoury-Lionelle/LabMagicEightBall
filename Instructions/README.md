# Lab Magic Eight Ball

For this lab, you will be a simple webpage that will randomly generate an answer based on the famous 'magic eight ball'. 

- [Lab Magic Eight Ball](#lab-magic-eight-ball)
  - [:star: Learning Outcomes :star:](#star-learning-outcomes-star)
  - [:fire: Tasks](#fire-tasks)
    - [HTML framing, semantic markup](#html-framing-semantic-markup)
    - [Functionality / Typescript](#functionality--typescript)
      - [Compile your Typescript into Javascript](#compile-your-typescript-into-javascript)
      - [Run the webpage](#run-the-webpage)
    - [Styling with CSS](#styling-with-css)
  - [🚨 Submission Instructions](#-submission-instructions)
  - [:memo: Rubric](#memo-rubric)


## :star: Learning Outcomes :star:
* Be able to write back HTML focusing on semantic markup
* Be able to write basic CSS for styling
* Be able to write basic typescript -> javascript to manipulate the DOM. 


## :fire: Tasks

To better understand a web page - we will break down the page into the three major components. 

Throughout the lab, you will have discussion questions. You should fill out your answers in assignment [README.md](../README.md) in the discussion section. This will give you a study guide for future understanding, and help solidify the information.

:memo: [Discussion Item]: Define the differences between HTML, Javascript, and CSS - make sure you use the terms semantic, functional, and style - and how they relate to each component of a webpage. 


### HTML framing, semantic markup

HTML is designed to setup the semantics of the webpage (even though it's purpose has been muddied over the years). Most notably, it breaks up a text document by
defining `head` information about the document itself. `body` is content to display. That content to display can have `header`, `footer`, `headings` (as H1, H2, etc), `div` for divisions, `p` for paragraphs and more! While there are many designs that don't follow this pattern, good designers attempt to keep to it as strictly as possible. 

However, as you will quickly find, it doesn't look "pretty" by default. 

:fire: Take the following bit of HTML, and copy it into [eightball.html](../eightball.html). 

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

This setups the basic layout for the webpage, though there is very little information in it (just a blank page!).  However, if you open eightball.html in your browser, you will see the blank page (you should do that now). We recommend using your browser instead of the preview window in VSCode for now. 

![File Explorer](file_explorer.png)

Note: on a mac, it may say Finder.  Once the file appears, go ahead and double click, and it should open in your preferred browser. 


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

#### Compile your Typescript into Javascript

To compile (convert) typescript into javascript run the following command. It is assuming you are running in the default assignment directory.

```terminal
tsc src/eightball.ts --outDir .
```
To break down the command:
* `tsc` is the typescript compiler command (installed by `npm`)
* `src/eightball.ts` - files you want to convert to javascript
* `outDir` - by default it saves the files in the same location of the .ts files, 
  but it is common to keep .ts separate from the .js. Since we were running from the 
  assignment home directory, this should create the .js file in the same directory as the .html file. 

> [!WARNING]
> Make sure the `.js` is in the same file as your `.html` file - if not, go ahead and move it. 

As we start working with full projects, you will find this will be setup by configuration files. 


#### Run the webpage

Inside the `<head>` section of your html file, add the following line. (often added just before the `</head>`). 

```html
<script src="eightball.js"></script>
```

This will link the javascript file to be loaded when the webpage loads into a browser

Make sure you you refresh/reload the webpage, and try it out! If done correctly, every
time you click the button, it should randomly update the page with a new message.

> [!IMPORTANT]
> You will notice the page isn't "refreshing/reloading" between button clicks. 
> That is the power of javascript. We will continue to 
> explore throughout the semester on when it is 
> better to update on the server / create a new page, and when it is better to update in
> the page itself via javascript. 


### Styling with CSS

```html
<link rel="stylesheet" href="style.css">
```

```html
 <div class="center-block">   
```




> [!NOTE]
> While this lab didn't follow the 'common' directory structures, it is common
> to keep javascript and css located in separate folders from the 
> html files. You then reference those locations as part of the file location
> in your link or script tag. 


## 🚨 Submission Instructions

Submit via the assignment link in canvas. You will submit a link to your github repository for this assignment.  

## :memo: Rubric

For labs, TAs will check to see if you completed the lab, but the grade is you completed it or not. 


[Discussion Item]: ../README.md#Discussion%20Items
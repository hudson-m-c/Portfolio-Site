// here we will create all of the necessary components

// add the header
let headerScript = document.createElement('script');
headerScript.src = './scripts/components/header.js';
document.head.appendChild(headerScript);

// add the straight script
let straightScript = document.createElement('script');
straightScript.src = './scripts/components/straight_to_the_point.js';
document.head.appendChild(straightScript);

// add the questions
let questionsScript = document.createElement('script');
questionsScript.src = './scripts/components/questions/main_script.js';
document.head.appendChild(questionsScript);
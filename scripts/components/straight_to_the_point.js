const straight = createStraight();

document.querySelector('.container').appendChild( straight );

console.log(document.getElementsByClassName('question-text-Who')[0]);

function createStraight() {
    // this function will return the html element for straight to the point section
    const straight = document.createElement('div');
    straight.classList.add('straight-container');

    // Create the header text
    const headerText = document.createElement('h2');
    headerText.classList.add('straight-header');
    headerText.textContent = "Straight to the point...";
    straight.appendChild(headerText);

    // Create the peek text
    const peekText = document.createElement('p');
    peekText.classList.add('peek-text');

    // Create the questions
    const questions = [
        {
            question: "Who?",
            text: "Hudson Chamberlain"
        }, 
        {
            question: "What?",
            text: "Full-Stack Developer"
        },
        {
            question: "When?",
            text: "On call"
        },
        {
            question: "Where?",
            text: "Remote"
        },
        {
            question: "Why?",
            text: "To get the job done"
        }
    ]
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    // function to create question and attach hover
    function createQuestion(questionObj) {
        const question = document.createElement('div');
        question.classList.add('question-text');

        // get id
        const id = questionObj.question.slice(0, questionObj.question.length - 1);
        // console.log('id: ', id);
        let individ = "question-text-".concat(id);
        question.classList.add(individ);
        // console.log('classNames for ', questionObj.question, ': ', question.classList);

        // set the text
        question.textContent = questionObj.question;

        // set mouseenter
        question.addEventListener('mouseenter', () => hoverEventHandler(id, questionObj.text, true) );

        // set mouseleave
        question.addEventListener('mouseleave', () => hoverEventHandler(id, "", false));

        function hoverEventHandler(id, textToShow, toShow) {
            // grab reference
            const temp_peek_text = document.querySelector('.peek-text');

            // bold or unbold the text
            let className = "question-text-".concat(id);
            // console.log('className: ', className);
            if(toShow) {
                document.getElementsByClassName(className)[0].style.fontWeight = "bold";
            } else {
                console.log('setting text to invisible');
                document.getElementsByClassName(className)[0].style.fontWeight = "normal";
            }
            
            if(temp_peek_text.classList.contains('invisible')) {
                // if we aren't visible
                if(toShow) {
                    // but want to be, toggle
                    temp_peek_text.classList.toggle('invisible');
                } else {
                    // but we dont want to be, do nothing
                }   
            } else {
                // we are visible
                if(!toShow) {
                    // but don't want to be
                    temp_peek_text.classList.toggle('invisible');
                } else {
                    // we want to be, do nothing
                }
            }
            
            // display the text
            document.querySelector('.peek-text').textContent = textToShow;
        }

        return question;
    }

    // add questions to question container
    questions.forEach( curr => {
        // console.log( createQuestion(curr) );
        questionContainer.appendChild( createQuestion(curr) );
    });

    // default the Who to display
    peekText.textContent = questions[0].text;

    // append the questionContainer
    straight.appendChild(questionContainer);

    // append the peek text
    straight.appendChild(peekText);

    // TODO: add divider

    return straight;
}
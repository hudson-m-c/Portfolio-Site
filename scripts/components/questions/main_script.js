// create the questions container
const questionsContainer = document.createElement('div');
questionsContainer.classList.add('main-questions-container');
document.querySelector('.container').appendChild(questionsContainer);

const mainQuestions = [
    generateQuestion("Who?", "Hudson Chamberlain"),
    generateQuestion("What?", "Full-Stack Developer"),
    generateQuestion("When?", "On call"),
    generateQuestion("Where?", "Remote"),
    generateQuestion("Why?", "To get the job done")
];

function generateQuestion(toAsk, answer) {
    return {
        question: toAsk,
        answer
    }
}

mainQuestions.forEach( curr => {
    // create a base card for this element
    questionsContainer.appendChild( createQuestion(curr) );
});

function createQuestion(info) {
    /*
        skeleton:

        <div className="main-question">

            <p>Q: {info.question}</p>
            <div className = "main-question-answer">
                <p>A: {info.answer}</p>
            </div>

        </div>

    */

    // create container
    const question = document.createElement('div');
    question.classList.add('main-question');
    
    // create and add the question text
    const q = document.createElement('p');
    const qToDisplay = `Q: ${info.question}`;
    q.textContent = qToDisplay;
    question.appendChild(q);

    // create and add the answer container
    const answer = document.createElement('div');

    answer.classList.add('main-question-answer');
    const a = document.createElement('p');
    const aToDisplay = `A: ${info.answer}`;
    a.textContent = aToDisplay;
    answer.appendChild(a);

    // add answer container to question
    question.appendChild(answer);

    
    return question;
}
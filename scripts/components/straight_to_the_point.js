modifyButton();

// const straight = createSimpleStraight();

// document.querySelector('#particles-js').appendChild( straight );

// document.querySelector('.question-text-Who').style.fontWeight = 'bold';
// document.querySelector('.peek-text').textContent = 'Hudson Chamberlain';

function modifyButton() {
    // create the button
    const findOutMore = document.querySelector('.find-out-more');
    console.log(findOutMore);

    const pointDownDiv = document.querySelector('.point-down-container');
    console.log(pointDownDiv);

    let tween = TweenMax.to(pointDownDiv, 0.4, {y:"+=10", yoyo:true, repeat:3});
    tween.pause();
    findOutMore.addEventListener('mouseenter', () => {
        tween.resume();
        // console.log(tween);
        if(!tween.isActive()) {
            tween = TweenMax.to(pointDownDiv, 0.4, {y:"+=10", yoyo:true, repeat:3});
        }
    })

    findOutMore.addEventListener('click', () => {
        // this is the clickhandler
        console.log('findOutMore clicked');
        const el = document.querySelector('.container');
        el.scrollIntoView({behavior: "smooth"});
    })
}

function createStraight() {

    /*
        skeleton: Straight

        <div class='straight-container'>
            <h2 class='straight-header'>Straight to the point...</h2>
            <div class='question-container'>
                <div class='question-text question-text-Who'>
                    Who?
                </div>
                <div class='question-text question-text-What'>
                    What?
                </div>
            </div>
            <p class='peek-text'>**Text to display**</p>
            <div class='see-more'>
                <span>Read More</span>
                <div 'point-down-container'>
                    <img src='point-down-img'/>
                </div>
            </div>
        </div>
    */

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
    
    var tl = new TimelineMax({repeat:0})

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
        question.addEventListener('mouseleave', () => hoverEventHandler(id, questionObj.text, false));

        function hoverEventHandler(id, textToShow, toShow) {
            // grab reference

            // bold or unbold the text
            let className = "question-text-".concat(id);
            let el = document.querySelector('.peek-text');
            // console.log('className: ', className);
            if(toShow) {

                Array.from(document.getElementsByClassName("question-text")).forEach(
                    function(element, index, array) {
                        // do stuff
                        element.style.fontWeight = "normal";
                    }
                );
                 
                document.getElementsByClassName(className)[0].style.fontWeight = "bold";
            
                
                // display the text
                el.textContent = textToShow;
                
                if(tl.isActive()) {
                    // we need to add the tween and set a callback for the text
                    // console.log(tl.getActive(true, true, false));
                    tl.add(TweenLite.fromTo(el, .25, { opacity: 0, ease:Linear.ease}, {opacity: 1}));
                } else {
                    tl.fromTo(el, .25, {opacity: 0, ease: Linear.ease }, {opacity: 1 })
                }
            } else {
                Array.from(document.getElementsByClassName("question-text")).forEach(
                    function(element, index, array) {
                        // do stuff
                        element.style.fontWeight = "normal";
                    }
                );
                // push peek text to the right and fade out
                if(tl.isActive()) {
                    tl.add(TweenLite.fromTo(el, .25, {opacity: 1, ease: Linear.ease }, { opacity: 0}));
                    // tl.add( () => { el.textContent = textToShow }, .75)
                } else {
                    tl.fromTo(el, .25, {opacity: 1, ease: Linear.ease }, { opacity: 0});
                }
            }
            
            
        }

        return question;
    }

    // add questions to question container
    questions.forEach( curr => {
        // console.log( createQuestion(curr) );
        questionContainer.appendChild( createQuestion(curr) );
    });

    // append the questionContainer
    straight.appendChild(questionContainer);

    // append the peek text
    straight.appendChild(peekText);

    // default the Who to display
    // peekText.textContent = questions[0].text;
    
    // add the button stuff
    /*
        <div class='see-more'>
            <span>Read More</span>
            <div 'point-down-container'>
                <img src='point-down-img'/>
            </div>
        </div>
    */
   const seeMore = document.createElement('div');
   seeMore.classList.add('see-more');
   
   const readMore = document.createElement('span');
   readMore.textContent = "Read More";
   seeMore.appendChild(readMore);

    const pointDownDiv = document.createElement('div');
    pointDownDiv.classList.add('point-down-container');

    const pointDownImg = document.createElement('img');
    pointDownImg.src = './img/arrow_point_down.png';

    pointDownDiv.appendChild(pointDownImg);
    seeMore.appendChild(pointDownDiv);

    let tween = TweenMax.to(pointDownDiv, 0.4, {y:"+=10", yoyo:true, repeat:3});
    tween.pause();
    seeMore.addEventListener('mouseenter', () => {
        tween.resume();
        // console.log(tween);
        if(!tween.isActive()) {
            tween = TweenMax.to(pointDownDiv, 0.4, {y:"+=10", yoyo:true, repeat:3});
        }
    })

    seeMore.addEventListener('click', () => {
        // this is the clickhandler
        console.log('seeMore clicked');
        const el = document.querySelector('.container');
        el.scrollIntoView({behavior: "smooth"});
    })



    straight.appendChild(seeMore);

    return straight;
}

function createSimpleStraight() {
    /*
        skeleton: Simple Straight

        <div class='simple-straight-container'>
            <p>Hi, my name is <span>Hudson Chamberlain</span></p>
            <p>and I am <span ></span>.</p>

            <div class='find-out-more'>
                <span>Find out more</span>
                <div class='img-container'>
                    <img src='img src' />
                </div>
            </div>
        </div>
    */

    // overall container
    const simpleStraight = document.createElement('div');
    simpleStraight.classList.add('simple-straight-container');

    const firstP = document.createElement('p');
    firstP.textContent = "Hi, my name is ";
    const firstS = document.createElement('span');
    firstS.textContent = "Hudson Chamberlain";
    firstS.classList.add('text');
    firstP.appendChild(firstS);
    simpleStraight.appendChild(firstP);
    
    const secondP = document.createElement('p');
    secondP.textContent = 'and I am a ';
    const secondS = document.createElement('span');
    secondS.textContent = 'Full-Stack developer';
    secondS.classList.add('text');
    const thirdS = document.createElement('span');
    thirdS.textContent = '.';
    secondP.appendChild(secondS);
    secondP.appendChild(thirdS);
    simpleStraight.appendChild(secondP);


    

    return simpleStraight;
}
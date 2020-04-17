// this script will focus on putting passions and education, languages known and for how long

// grab the answer
const answerWhat = document.querySelectorAll('.main-question-What .main-question-answer')[0];

// we need to put lists under this
const passions = [
    "Leadership in tech", "Finding creative solutions", "Finishing a project with a team"
];

const education = [
    "Lambda Inc.'s - Web Development: (10/19 to current)", "Tennessee Technological University - Electrical Engineering: (08/15 to 08/18)", "University of Alabama at Huntsville - Electrical Engineering: (01/19 to 08/19)"
]

answerWhat.appendChild( createList("Passion:", passions));
answerWhat.appendChild( createList("Education: ", education));

function createList(headerText, listItems) {
    /*
        skeleton: List

        <div class='list'>
            <h4>{headerText}</h4>
            <ul>
                <li>{listItems[0]}</li>
                ...
            </ul>
        </div>
    */

    const listContainer = document.createElement('div');
    listContainer.classList.add('list');

    const header = document.createElement('h4');
    header.textContent = headerText;

    listContainer.appendChild(header);

    const unorderedList = document.createElement('ul');

    listItems.forEach(item => {
        let element = document.createElement('li');
        element.textContent = item;

        unorderedList.appendChild(element);
    })

    listContainer.appendChild(unorderedList);

    return listContainer;
}

// create a list and put it under why

const answerWhy = document.querySelectorAll('.main-question-Why .main-question-answer')[0];
experiences = [
    "Team Lead @ Lambda Inc. from 01/20 for 6 months", "Embedded Systems Intern @ Sanmina from 05/18 for 2 years"
]
answerWhy.appendChild( createList("Experience", experiences))

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
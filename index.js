//here we will setup an object to be prepared and add components into our project list.

const projects = [
    {
        imgsrc: 'img/hudson-img.jpg',
        title: 'Hello',
        date: 'date',
        description: 'desc'
    },
    {
        imgsrc: 'img/hudson-img.jpg',
        title: 'Hello',
        date: 'date',
        description: 'desc'
    },
    {
        imgsrc: 'img/hudson-img.jpg',
        title: 'Hello',
        date: 'date',
        description: 'desc'
    },
    {
        imgsrc: 'img/hudson-img.jpg',
        title: 'Hello',
        date: 'date',
        description: 'desc'
    }
];

const projectsEl = document.querySelector('#projects');
console.log(projectsEl);

projects.forEach( obj => { 
    projectsEl.appendChild( createProject(obj) );
});

function createProject(obj) {
    // <div class="project">
    //     <div class="content-img">
    //         <img src="src"/>
    //     </div>
    //     <div class="project-info">
    //         <h3>Title</h3>
    //         <h5>Date</h5>
    //         <p>description</p>
    //     </div>
    // </div>

    const project = document.createElement('div');
    project.classList.add('project');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('content-img');
    project.appendChild(imgDiv);

    const img = document.createElement('img');
    img.src = obj.imgsrc;
    imgDiv.appendChild(img);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    project.appendChild(projectInfo);

    const title = document.createElement('h3');
    title.textContent = obj.title;
    projectInfo.appendChild(title);

    const date = document.createElement('h5');
    date.textContent = obj.date;
    projectInfo.appendChild(date);

    const desc = document.createElement('p');
    desc.textContent = obj.description;
    projectInfo.appendChild(desc);

    return project;
}
//here we will setup an object to be prepared and add components into our project list.

const projects = [
    {
        imgsrc: 'img/school-in-the-cloud.png',
        title: 'School in the Cloud',
        titleLink: 'https://github.com/School-in-the-Cloud/UI',
        date: '11/20/2019',
        languages: 'HTML, CSS',
        description: 'Online service for students wanting to learn from volunteers. The website is responsive and backend setup to support users.'
    },
    {
        imgsrc: 'img/school-in-the-cloud.png',
        title: 'School in the Cloud',
        titleLink: 'https://github.com/School-in-the-Cloud/UI',
        date: '11/20/2019',
        languages: 'HTML, CSS',
        description: 'Online service for students wanting to learn from volunteers. The website is responsive and backend setup to support users.'
    },
    {
        imgsrc: 'img/school-in-the-cloud.png',
        title: 'School in the Cloud',
        titleLink: 'https://github.com/School-in-the-Cloud/UI',
        date: '11/20/2019',
        languages: 'HTML, CSS',
        description: 'Online service for students wanting to learn from volunteers. The website is responsive and backend setup to support users.'
    },
    {
        imgsrc: 'img/school-in-the-cloud.png',
        title: 'School in the Cloud',
        titleLink: 'https://github.com/School-in-the-Cloud/UI',
        date: '11/20/2019',
        languages: 'HTML, CSS',
        description: 'Online service for students wanting to learn from volunteers. The website is responsive and backend setup to support users.'
    },
];

const projectsEl = document.querySelector('#projects');
console.log(projectsEl);

projects.forEach( obj => { 
    projectsEl.appendChild( createProject(obj) );
});

function createProject(obj) {
    // <div class="project">
    //     <div class="content-img">
    //         <a href="">
    //             <img src="src"/>
    //         </a>
    //     </div>
    //     <div class="project-info">
    //         <a href="">
    //             <h3>Title</h3>
    //         </a>
    //         <h5>Date</h5>
    //         <p>languages</p>
    //         <p>description</p>
    //     </div>
    // </div>

    const project = document.createElement('div');
    project.classList.add('project');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('content-img');
    project.appendChild(imgDiv);

    const imgAnchor = document.createElement('a');
    imgAnchor.href = obj.titleLink;
    imgAnchor.target = "_blank";
    imgDiv.appendChild(imgAnchor);

    const img = document.createElement('img');
    img.src = obj.imgsrc;
    imgAnchor.appendChild(img);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    project.appendChild(projectInfo);

    const titleAnchor = document.createElement('a');
    titleAnchor.href = obj.titleLink;
    titleAnchor.target = "_blank";
    projectInfo.appendChild(titleAnchor);
    
    const title = document.createElement('h3');
    title.textContent = obj.title;
    titleAnchor.appendChild(title);

    const date = document.createElement('h5');
    date.textContent = obj.date;
    projectInfo.appendChild(date);

    const languages = document.createElement('p');
    languages.textContent = obj.languages;
    projectInfo.appendChild(languages);

    const desc = document.createElement('p');
    desc.textContent = obj.description;
    projectInfo.appendChild(desc);

    return project;
}
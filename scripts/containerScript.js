// this will populate Projects, and Articles
const projectList = [
    {
        title: 'School in the Cloud',
        desc: 'An online admin for Mentors-Mentee relationships.',
        imgSrc: '',
        type: 
            {
                id: "Front-End",
                languages: ["Javascript", "HTML5", "CSS3"],
                libraries: ["React","Material-UI"]
            }
        ,
        link: ''
    },
    {
        title: 'DevDeskQueue',
        desc: 'Development ticket system',
        imgSrc: '',
        type: 
            {
                id: "Back-End",
                languages: ["Javascript"],
                libraries: ["Express"]
            }
        ,
        link: ''
    },
    {
        title: 'Clinical Controller',
        desc: 'A mobile controller for clinical descision hardware.',
        imgSrc: '',
        type: 
            {
                id: "Mobile",
                languages: ["Java", "XML"],
                libraries: ["Android", "GraphView", "XZing Scanner"]
            }
        ,
        link: ''
    },
    {
        title: 'Phone Call Transcriber',
        desc: 'A script to take phone call files and transcibe them to text for analysis.',
        imgSrc: '',
        type: 
            {
                id: "Other",
                languages: ["Python"],
                libraries: []
            }
        ,
        link: ''
    }
]

const articleList = [
    {
        title: 'Redux Cheatsheet',
        desc: 'A quick reference for the basics of Redux and its React library.',
        type: {
                id: "Front-End",
                languages: ["Javascript"],
                libraries: ["React"]
        },
        link: ''
    }
]

document.querySelector('body').appendChild( createContainer() );

document.querySelector('#Button-All').click();


function createContainer() {

    function createAbout() {
        const about = document.createElement('div');
        about.classList.add('about');
        const text = document.createElement('h2');
        text.textContent = "About";
        about.appendChild(text);
        const aboutText = document.createElement('p');
        aboutText.textContent = "My interest and skills happen to be one in the same: software engineering!"
        about.appendChild(aboutText);
        return about;
    }

    function createProjects() {
        const projects = document.createElement('div');
        projects.classList.add('projects-container');
        const header = document.createElement('h2');
        header.textContent = "Projects";
        projects.appendChild(header);

        projects.appendChild( createProjectNav() );
        
        const projectDisplay = document.createElement('div');
        projectDisplay.classList.add('projects');
        
        function createProjectNav() {
            /*
                <div class='project-nav'>
                    <div class='project-button'>All</div>
                    <div class='project-button'>Front-End</div>
                    <div class='project-button'>Back-End</div>
                    <div class='project-button'>Mobile</div>
                    <div class='project-button'>Other</div>
                </div>
            */
            const nav = document.createElement('div');
            nav.classList.add('project-nav');

            nav.appendChild( createButton("All", projectList));
            nav.appendChild( createButton("Front-End", projectList.filter(
                item => {
                    // return the item that matches text
                    return item.type.id === "Front-End";
                }
            )));
            nav.appendChild( createButton("Back-End", projectList.filter(
                item => {
                    return item.type.id === "Back-End";
                }
            )))
            nav.appendChild( createButton("Mobile", projectList.filter(
                item => {
                    return item.type.id === "Mobile";
                }
            )))
            nav.appendChild( createButton("Other", projectList.filter(
                item => {
                    return item.type.id === "Other";
                }
            )))
            
            function createButton(text, list) {
                console.log('createButton', text, list);
                const button = document.createElement('div');
                button.textContent = text;
                button.id = "Button-".concat(text);
                button.classList.add('project-button');

                button.addEventListener('click', () => {
                    // display the list on the main projects container
                    console.log('project-nav clicked', text);
                    // de-toggle class name from other projectbuttons
                    const buttons = document.querySelectorAll('.project-button');
                    // console.log(buttons);
                    buttons.forEach(item => {
                        // console.log('item: ', item);
                        item.classList.remove('pressed');
                    })

                    // set class for this button being pressed
                    document.querySelector("#Button-".concat(text)).classList.add('pressed');

                    // remove children from projects
                    const myNode = document.querySelector(".project-list");
                    if(myNode !== null) {
                        while (myNode.firstChild) {
                            myNode.removeChild(myNode.lastChild);
                        }
                        // populate with list
                        list.forEach( project => {
                            myNode.appendChild( createChild(project) )
                        })
                    }

                    function createChild(item) {
                        // console.log('createChild', item);
                        /*
                            <div class='project'>
                                <h3>Title</h3>
                                <div class="project-img-container">
                                    <img src="project.imgSrc" />
                                </div>
                                <p>Desc</p>
                            </div>
                        */

                       console.log('createChild', item);
                        
                        const project = document.createElement('div');
                        project.classList.add('project');

                        const title = document.createElement('h3');
                        title.textContent = item.title;
                        project.appendChild(title);

                        const imgContainer = document.createElement('div');
                        imgContainer.classList.add('project-img-container');
                        const img = document.createElement('img');
                        img.src = ""; (item.imgSrc === '') ? "./img/github-logo.png" : item.imgSrc;
                        imgContainer.appendChild(img);
                        project.appendChild(imgContainer);

                        const desc = document.createElement('p');
                        desc.textContent = item.desc;
                        project.appendChild(desc);
                            
                        return project;
                    }
                }) 

                return button;
            }

            return nav;
        }

        const projectListDiv = document.createElement('div');
        projectListDiv.classList.add('project-list');
        projects.appendChild(projectListDiv);

        return projects;
    }

    function createArticles() {
        const articles = document.createElement('div');
        articles.classList.add('articles-container');
        const header = document.createElement('h2');
        header.textContent = "Articles";
        articles.appendChild(header);

        const articleContainer = document.createElement('div');

        for(article in articleList) {
            articleContainer.appendChild( createArticle(article) )
        }

        articles.appendChild(articleContainer);

        function createArticle(item) {
            const article = document.createElement('div');
            article.classList.add('article');

            const title = document.createElement('h3');
            title.textContent = item.title;
            article.appendChild(title);

            const desc = document.createElement('p');
            desc.textContent = item.desc;
            article.appendChild(desc);

            return article;
        }

        return articles;
    }
    
    /*
        skeleton: container

        <div class='container'>
            <div class='overview'>
                <h2>A Brief Introduction</h2>
                <p></p>
            </div>
            <div class='projects-container'>
                <h2>Projects</h2>
                <div class='project-nav'>
                </div>
                <div class='projects'>
                </div>
            </div>
            <div class='articles-container'>
                <h2>Articles</h2>
                <div class='articles'>
                </div>
            </div>
        </div>
    */
    
    const container = document.createElement('div');
    container.classList.add('container');

    container.appendChild( createAbout() );

    container.appendChild( createProjects() );

    container.appendChild( createArticles() );

    console.log('returning container', container);

    return container; 
}
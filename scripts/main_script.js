/*

    <div class='container'>
        ...
      <div class='contact-me-container main-container'>
        <h2>Contact Me</h2>
        <!-- this will be populated by a script, will allow direct email to me-->
      </div>
    </div>

*/

const container = document.querySelector('.container');

function createStraight() {
    /*
        <div class='simple-straight-container'>
            <p>Hi, my name is <span class='text'>Hudson Chamberlain</span></p>
            <p>and I am a <span class='text'>Full-Stack developer</span>.</p>

            <div class='find-out-more'>
                <span>Find out more</span>
                <div class='point-down-container'>
                    <img src='./img/arrow_point_down.png' />
                </div>
            </div>
        </div>
    */

    //// main container
    const ssc = document.createElement('div');
    ssc.classList.add('simple-straight-container');
    // p tags with spans
    const p1 = document.createElement('p');
    p1.innerHTML = "Hi, my name is <span class='text'>Hudson Chamberlain</span>";
    ssc.appendChild(p1);
    const p2 = document.createElement('p');
    p2.innerHTML = "and I am a <span class='text'>Full-Stack developer</span>.";
    ssc.appendChild(p2);

    //// button div
    const fom = document.createElement('div');
    fom.classList.add('find-out-more');
    // button text
    const s = document.createElement('span');
    s.textContent = "Find out more";
    fom.appendChild(s);
    // button img
    const ic = document.createElement('div');
    ic.classList.add('point-down-container');
    ic.innerHTML = "<img src='./img/arrow_point_down.png' />";
    fom.appendChild(ic);
    ssc.appendChild(fom);

    console.log('ssc', ssc);

    return ssc;
}
container.appendChild( createStraight() );
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
        const el = document.querySelector('header');
        el.scrollIntoView({behavior: "smooth"});
    })
}
modifyButton();



function addHeader() {
    document.querySelector('body').insertBefore( createHeader(), document.querySelector('body').childNodes[2] );

    let options = {
        root: null, // relative to document viewport 
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0.01 // visible amount of item shown in relation to root
    };

    var tween = TweenLite.to( document.querySelector('header'), 1, {
        width: 300,
        paused: true,
        reversed: false,
        ease: Expo.ease
        });
    const observer = new IntersectionObserver((entry, observer) => {
        console.log('entry isIntersecting:', entry[0].isIntersecting);
        // console.log('observer:', observer);

        if(entry[0].isIntersecting) {
            // populate the header
            // pull the header out
            tween.reverse();
        } else {
            // remove the header
            // put the header back in
            tween.play();
        }
    }, options);

    observer.observe(document.querySelector('header'));

    function createHeader() {

        /*
            skeleton: Header

            <div class='header-container'>
                <header className='header'>
                    <h2 classList='name'>Hudson Chamberlain</h2>
                    <div class='link-container>
                        <div class='link-Home'>Home</div>
                        <div class='link-Projects>Projects</div>
                        <div class='link-Articles'>Articles</div>
                    </div>
                </header>
            </div>
        */

        // create the header
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header-container');

        const header = document.createElement('header');
        header.classList.add('header');
        headerContainer.appendChild(header);
        // create the name
        const name = document.createElement('h2');
        name.classList.add('name');
        name.textContent = "H.C.";
        header.appendChild(name);
        
        // create the links

        // setup and return link
        function createLink(name, text) {
            let className = `link-${name}`;
            
            const link = document.createElement('div');
            link.classList.add(className);
            link.textContent = text;
            link.addEventListener('click', () => {
                console.log(`clicked link: ${name}`);
                let el;
                if(name === "About-Me") {
                    el = document.querySelector('.about-me-container');
                } else if(name === "Projects") {
                    el = document.querySelector('.projects-container');
                } else if(name === 'Contact') {
                    el = document.querySelector('.contact-container');
                }

                if(el != undefined) {
                    el.scrollIntoView({behavior: "smooth"});
                }
            });
            
            return link;
        }

        // create link container
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('link-container');

        // add links to link container
        let links = ["About-Me", "Projects", "Contact"];
        let texts = ["About Me", "Projects", "Contact"];
        links.forEach( (link, i) => {
            linkContainer.appendChild( createLink(link, texts[i]) );
        })

        // add link container to header
        header.appendChild(linkContainer);

        // TODO: add divider

        return headerContainer;
    }
}
addHeader();

function createAboutMe() {
    /*
        <div class='about-me-container main-container'>
            <h2>About Me</h2>
            <p>I'm a software engineer based in Birmingham, AL. As a current student of Lambda's Web Development curriculumn, some of my skills are still in development. However, my Mobile and Embedded Systems skills have been molded through professional and hobby projects.</p>
            <h3>Familiar technology</h3>
            <div class='familiar-container'>
                <div class='familiar'>
                    <h4>Web:</h4>
                    <ul>
                        <li>Vanilla Javascript</li>
                        <li>React.js</li>
                        <li>Express</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div class='familiar'>
                    <h4>Mobile:</h4>
                    <ul>
                        <li>Java</li>
                        <li>XML</li>
                    </ul>
                </div>
                <div class='familiar'>
                    <h4>Embedded:</h4>
                    <ul>
                        <li>C/C++</li>
                    </ul>
                </div>
            </div>
        </div>
    */
    //// create main container
    const amc = document.createElement('div');
    amc.classList.add('about-me-container');
    amc.classList.add('main-container');
    // header
    const headerText = document.createElement('h2');
    headerText.textContent = "About Me";
    amc.appendChild(headerText);
    const desc = document.createElement('p');
    desc.textContent = "I'm a software engineer based in Birmingham, AL. As a current student of Lambda's Web Development curriculumn, some of my skills are still in development. However, my Mobile and Embedded Systems skills have been molded through professional and hobby projects.";
    amc.appendChild(desc);

    function createTechnology(id, text) {
        //// create main container
        const c = document.createElement('div');
        let className = id.concat("-container");
        c.classList.add(className);
        const headerText = document.createElement('h3');
        headerText.textContent = text;
        headerText.classList.add('chart-header');
        c.appendChild(headerText);
        const canvas = document.createElement('canvas');
        canvas.id = id;
        c.appendChild(canvas);
        return c;
    }

    //// create familiar container
    const fc = document.createElement('div');
    fc.classList.add('familiar-container');
    
    // create buttons to display certain skills
    function createCanvasButton(text, labels, data) {
        const button = document.createElement('div');
        button.classList.add('tech-button');
        button.textContent = text;
        button.addEventListener('mouseenter', (evt) => {
            // bold text of the button
            console.log('mouseenter', text);
            Array.from(document.getElementsByClassName('tech-button')).forEach( el => el.style.fontWeight="normal");
            evt.target.style.fontWeight = "bold";

            modifyCanvas(labels, data, dims);
        })
        return button;
    }
    // const buttons = document.createElement('div');
    // buttons.classList.add('tech-buttons');
    // buttons.appendChild( createCanvasButton('Web', ["Javascript", "React.js", "Express", "HTML5", "CSS3"], [4,4,3,4,3]) );
    // buttons.appendChild( createCanvasButton('Mobile', ["Java", "XML"], [3,2]) );
    // buttons.appendChild( createCanvasButton('Embedded', ["C/C++"], [4]) );
    // fc.appendChild(buttons);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    const title = document.createElement('h2');
    title.textContent = "Knowledge of Technology";
    title.classList.add('chart-title');
    titleContainer.appendChild(title);
    fc.appendChild(titleContainer);

    fc.appendChild( createTechnology('web-tech-chart', 'Web'));
    fc.appendChild( createTechnology('mobile-tech-chart', 'Mobile'));
    fc.appendChild( createTechnology('embedded-tech-chart', 'Embedded'));

    amc.appendChild(fc);

    return amc;
}
container.appendChild( createAboutMe() )
const technologies = [
    {
        header: "Web",
        items: [
            {
                tech: "Javascript", level: "1"
            },
            {
                tech: "React.js", level: "1"
            },
            { 
                tech: "Express", level: "1"
            },
            {
                tech: "HTML5", level: "1"
            },
            {
                tech: "CSS3", level: "1"
            },
            {
                tech: "Python", level: "1"
            }
        ]
    },
    {
        header: "Mobile",
        items: [
            {
                tech: "Java", level: "1"
            },
            { 
                tech: "XML", level: "1"
            }
        ]
    },
    {
        header: "Embedded",
        items: [
            {
                tech: "C/C++", level: "1"
            }
        ]
    }
]
let techChart;
modifyChart('web-tech-chart', ["Javascript", "React.js", "Express", "HTML5", "CSS3"], [4,4,3,4,3], "300px")
modifyChart('mobile-tech-chart', ["Android", "Java", "XML"], [3,3,2], "150px");
modifyChart('embedded-tech-chart', ["C/C++"], [4], "75px")


function modifyChart(id, labels, data, height) {
    console.log('modifyCanvas', labels[0]);
    let chart = document.getElementById(id);
    console.log(id, chart);
    let selector = "." + id.concat('-container');
    console.log('selector', selector);
    let chartContainer = document.querySelector(selector);
    
    // console.log('chartContainer', chartContainer.style, 'dims', dims);
    let ctx = chart.getContext('2d');
    // chartContainer.width = dims.width;
    // chartContainer.height = height;
    // chartContainer.style.width = dims.width;
    chartContainer.style.height = height;
    Chart.defaults.global.defaultFontColor = '#FFFFFF';
    console.log('techChart', techChart);
    // if(techChart != null || techChart != undefined) {
    //     techChart.destroy();
    // }
    techChart = new Chart(ctx, {
        type: 'horizontalBar',
        // scaleFontColor: "#BFA169",
        data: {
            labels,
            datasets: [
              {
                // fontColor: "#BFA169",
                color: "#BFA169",
                barThickness: 16,
                maxBarThickness: 18,
                backgroundColor: "#BFA169",
                borderColor: "#BFA169",
                data
              }
            ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            hover: {mode: null},
            tooltips: {enabled: false},
            // hover: {mode: null},
            defaultFontColor: "#000000",
            legend: { 
                display: false, 
                labels: { 
                    fontColor: "#BFA169" 
                } 
            },
            title: {
                display: false,
                text: 'Knowledge of Technology',
                fontColor: "#FFFFFF",
                fontSize: "16"
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    position: "top",
                    gridLines: {
                        // zeroLineColor: "black",
                        // zeroLineWidth: 2
                    },
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        fontColor: "#FFFFFF"
                    }
                }]
            }
        }
    });
    // console.log(techChart);
}
// modifyCanvas('web-chart', ["Javascript", "React.js", "Express", "HTML5", "CSS3"], [4,4,3,4,3]);
// modifyCanvas('mobile-chart', ["Java", "XML"], [3,2]);
// modifyCanvas('embedded-chart', ["C/C++"], [4]);


function somethingElse() {
    /*
        <div class='projects-container main-container'>
            <h2>Projects</h2>
            <div class='projects-nav-bar'>
                <!-- this will be populated by a script, on click will sort the projects -->
            </div>
            <div class='projects'>
                <!-- this will be populated with a script-->
            </div>
        </div>
    */
    //// create main container
    const pc = document.createElement('div');
    pc.classList.add('projects-container');
    pc.classList.add('main-container');
    // create header
    const header = document.createElement('h2');
    header.textContent = "Projects";

   return pc;
}

let projects = [
    {
        title: "School in the Cloud",
        desc: "An online meeting place for students to connect with mentors.",
        imgsrc: "./img/undraw_online_connection.svg",
        technologies: [
            "Javascript",
            "React.js",
            "Material-UI",
            "HTML5",
            "CSS3"
        ],
        github: "https://github.com/School-in-the-Cloud/UI"
    },{
        title: "Bluetooth LE Controller",
        desc: "An Android app that interfaces with copyrighted technology to display dynamic information and control the connected device.",
        imgsrc: "./img/undraw_personal_finance.svg",
        technologies: [
            "Android",
            "Bluetooth Low-Energy",
            "Java",
            "GraphView",
            "XML"
        ],
        github: ""
    },{
        title: "Software Portfolio Site",
        desc: "The site you are looking at right now!",
        imgsrc: "./img/undraw_master_plan.svg",
        technologies: [
            "Javascript",
            "Particles.js",
            "Greensock",
            "LESS",
            "CSS3",
            "HTML5"
        ],
        github: ""
    }
]

function createProjects(projs) {
    console.log('projs', projs);
    /* 
        <div class='projects-container main-container'>
            <h2>Projects</h2>
            <p>Below are my hobby projects. Each one has a description and a list of technologies used when developing.</p>
            <div class='all-projects-container'>
                <div class='project'>
                    <div class='project-img-container'>
                        <img src={project.imgsrc} />
                    </div>
                    <div class='project-info-container'>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</h3>
                        <h4>Technologies</h4>
                        <ul>
                            <li>{project.technologies[i]}</li>
                            ...
                        </ul>
                    </div>
                </div>

                ...

            </div>
        </div>
    */

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container', 'main-container');

    const header = document.createElement('h2');
    header.textContent = "Projects";
    projectsContainer.appendChild(header);

    const text = document.createElement('p');
    text.textContent = "Below are my hobby projects. Each one has a description and a list of technologies used when developing.";
    projectsContainer.appendChild(text);

    const allProjectsContainer = document.createElement('div');
    allProjectsContainer.classList.add('all-projects-container');

    // add all projects to project container
    function createProject(project) {
        console.log('project', project);
        /*
            <div class='project'>
                    <div class='project-img-container'>
                        <img src={project.imgsrc} />
                    </div>
                    <div class='project-info-container'>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</h3>
                        <h4>Technologies</h4>
                        <ul>
                            <li>{project.technologies[i]}</li>
                            ...
                        </ul>
                    </div>
                </div>
        */

        function openInNewTab(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }

        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        projectContainer.addEventListener('click', () => {
            if(project.github.length != 0) {
                openInNewTab(project.github);
            }
        })

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-img-container');
        if(project.imgsrc.length != 0) {
            let img = document.createElement('img');
            img.src = project.imgsrc;
            imgContainer.appendChild(img);
        }
        projectContainer.appendChild(imgContainer);

        const projectInfoContainer = document.createElement('div');
        projectInfoContainer.classList.add('project-info-container');
        const header = document.createElement('h3');
        header.textContent = project.title;
        projectInfoContainer.appendChild(header);

        const desc = document.createElement('p');
        desc.textContent = project.desc;
        projectInfoContainer.appendChild(desc);

        // const tHeader = document.createElement('h4');
        // tHeader.textContent = "Technologies";
        // projectInfoContainer.appendChild(tHeader);

        const list = document.createElement('ul');
        project.technologies.forEach( tech => {
            const item = document.createElement('li');
            item.textContent = tech;
            list.appendChild(item);
        })
        projectInfoContainer.appendChild(list);

        projectContainer.appendChild(projectInfoContainer);

        return projectContainer;
        
    }
    
    projs.forEach( (proj) => {
        allProjectsContainer.appendChild( createProject(proj) );
    });

    projectsContainer.appendChild(allProjectsContainer);

    return projectsContainer;
}
container.appendChild( createProjects(projects) );

let emailInfo = {
    email: "",
    company_name: "",
    interest: ""
}

function createContactMe() {
    /*

        <div class='contact-container main-container'>
            <h2>Contact Me</h2>
            <p>Fill out this form and we can get in touch!</p>
            <form onSubmit={submitHandler}>
                <input placeholder="Email" />
                <input placeholder="Company Name" />
                <input placeholder="Interested for..." />
                <button type="submit">Send it!</button>
            </form>
        </div>

    */

    let stillDev = true;

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container', 'main-container');

    const header = document.createElement('h2');
    header.textContent = "Contact";
    contactContainer.appendChild(header);
    
    const touch = document.createElement('p');
    if(stillDev) {
        touch.textContent = "Email me at hudson.m.chamberlain@gmail.com for business inquiries!";
    } else {
        touch.textContent = "Fill out this form and we can get in touch!";
    }
    
    contactContainer.appendChild(touch);

    if(!stillDev) {

        const form = document.createElement('form');
        form.onsubmit = (evt) => {
            evt.preventDefault();
            console.log('onsubmit', emailInfo);

            Email.send({
                SecureToken : "<your generated token>",
                To : 'recipient@example.com',
                From : "sender@example.com",
                Subject : "Test Email",
                Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
                }
            ).then(
                message => alert("mail sent successfully")
            );
        }

        function handleChange(evt) {
            emailInfo = {
                ...emailInfo,
                [evt.target.name]: evt.target.value
            }
        }

        const emailInput = document.createElement('input');
        emailInput.placeholder = "Email";
        emailInput.name="email";
        emailInput.value = emailInfo.email;
        emailInput.onchange = (evt) => handleChange(evt);
        form.appendChild(emailInput);

        const companyInput = document.createElement('input');
        companyInput.placeholder = "Company Name";
        companyInput.name = "company_name";
        companyInput.value = emailInfo.company_name;
        companyInput.onchange = (evt) => handleChange(evt);
        form.appendChild(companyInput);

        const interestInput = document.createElement('input');
        interestInput.placeholder = "Interested for...";
        interestInput.name = "interest";
        interestInput.value = emailInfo.interest;
        interestInput.onchange = (evt) => handleChange(evt);
        form.appendChild(interestInput);

        const sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.style.width = "100px";
        sendButton.style.height = "50px";
        sendButton.textContent = "Send it!";
        form.appendChild(sendButton);

        contactContainer.appendChild(form);
    }

    return contactContainer;
}
container.appendChild( createContactMe() );
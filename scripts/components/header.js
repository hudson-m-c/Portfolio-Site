document.querySelector('.container').appendChild( createHeader() );

function createHeader() {

    /*
        skeleton: Header

        <header className='header'>
            <h2 classList='name'>Hudson Chamberlain</h2>
            <div class='link-container>
                <div class='link-Home'>Home</div>
                <div class='link-Projects>Projects</div>
                <div class='link-Articles'>Articles</div>
            </div>
        </header>
    */

    // create the header
    const header = document.createElement('header');
    header.classList.add('header');

    // create the name
    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = "Hudson Chamberlain";
    header.appendChild(name);
    
    // create the links

    // setup and return link
    function createLink(name) {
        let className = `link-${name}`;
        
        const link = document.createElement('div');
        link.classList.add(className);
        link.textContent = name;
        link.addEventListener('click', () => console.log(`clicked link: ${name}`));
        
        return link;
    }

    // create link container
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');

    // add links to link container
    let links = ["Home", "Projects", "Articles"];
    links.forEach( link => {
        linkContainer.appendChild( createLink(link) );
    })

    // add link container to header
    header.appendChild(linkContainer);

    // TODO: add divider

    return header;
}
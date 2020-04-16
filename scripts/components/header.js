document.querySelector('.container').appendChild( createHeader() );

function createHeader() {

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

    return header;
}
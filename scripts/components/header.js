document.querySelector('.container').appendChild( createHeader() );

let options = {
    root: null, // relative to document viewport 
    rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 0.1 // visible amount of item shown in relation to root
  };

  var tween = TweenLite.from( document.querySelector('header'), 1, {
    width: 0,
    paused: true,
    reversed: true,
    ease: Expo.ease
    });
const observer = new IntersectionObserver((entry, observer) => {
    console.log('entry isIntersecting:', entry[0].isIntersecting);
    // console.log('observer:', observer);

    if(entry[0].isIntersecting) {
        // populate the header
        // pull the header out
        tween.play();
        document.querySelector('header').classList.add('sticky');
    } else {
        // remove the header
        // put the header back in
        tween.reverse();
        document.querySelector('header').classList.remove('sticky');
    }
}, options);

observer.observe(document.querySelector('div.container'));

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

    return headerContainer;
}
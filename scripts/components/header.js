const container = document.querySelector('body');
console.log(container);
container.insertBefore( createHeader(), container.childNodes[2]);

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
    name.textContent = "H.C.";
    header.appendChild(name);
    
    // create the links

    // setup and return link
    function createLink(name, text) {
        let className = `link-${name}`;
        
        const link = document.createElement('div');
        link.classList.add(className);
        link.textContent = text;
        link.addEventListener('click', () => console.log(`clicked link: ${name}`));
        
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
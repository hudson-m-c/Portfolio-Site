// this is where we will add the email and linkedIn logo

// grab the answer container

const answer = document.querySelectorAll('.main-question-Who .main-question-answer')[0];

answer.appendChild( createLogoLink('hudson.m.chamberlain@gmail.com', "https://www.gmail.com", './img/email-logo.jpg'));
answer.appendChild( createLogoLink('hudson-m-c', "https://github.com/hudson-m-c", './img/github-logo.png'));

function createLogoLink(textToDisplay, linkSrc, logoSrc) {
    /*
        skeleton: LogoLink

        <a class='logo-link-container' target='_blank' href={linkSrc}>
            <div>
                <img src={logoSrc} />
            </div>
            <p>{textToDisplay}</p>
        </a>

    */
    // we need to add an email logo
    const logoLinkContainer = document.createElement('a');
    logoLinkContainer.target="_blank";
    logoLinkContainer.href= linkSrc;
    logoLinkContainer.classList.add('logo-link-container');

    const logoContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = logoSrc;
    logoContainer.appendChild(img);
    // img is now inside div

    logoLinkContainer.appendChild(logoContainer);
    
    // add the text
    const text = document.createElement('p');
    text.textContent = textToDisplay;
    logoLinkContainer.appendChild(text);

    return logoLinkContainer;
    
}
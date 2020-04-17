// create the footer
console.log('adding footer');
document.querySelector('.container').appendChild( createFooter() );

function createFooter() {
    /*
        Skeleton:

        <footer>

            <div className="top-footer">
                <div/> // empty for spacing
                <div> // for name
                    Hudson Chamberlain
                </div>
                <div className="links-footer">
                    <div className="link">Home</div>
                    <div className="link">Projects</div>
                    <div className="link">Articles</div>
                </div>
            </div>

            <div className="bottom-footer">
                <p className="copyright">&copy Hudson Chamberlain 2020</p>
            </div>

        </footer>

    */
    
    const footer = document.createElement('footer');

    // create top half
    const topFooter = document.createElement('div');
    topFooter.classList.add('top-footer');

    // empty div
    // topFooter.appendChild( document.createElement('div') ); // empty div
    
    // // name div
    // const name = document.createElement('div');
    // name.textContent = "Hudson Chamberlain";
    // topFooter.appendChild(name);

    // link div
    const links = document.createElement('div');
    links.classList.add('links-footer');
    linksText = ["Home", "Projects", "Articles"];
    linksText.forEach( curr => {
        const link = document.createElement('div');
        link.textContent = curr;
        link.addEventListener('click', (curr) => {
            console.log('clicked footer: ', curr);
        })
        links.appendChild(link);
    })
    topFooter.appendChild(links);

    // add top footer
    footer.appendChild(topFooter);

    //bottom footer
    const bottomFooter = document.createElement('div');
    bottomFooter.classList.add('bottom-footer');
    
    const copy = document.createElement('p');
    copy.classList.add("copyright");
    copy.innerHTML = "&copy; Hudson Chamberlain 2020";
    bottomFooter.appendChild(copy);

    // add bottom footer
    footer.appendChild(bottomFooter);


    return footer;
}
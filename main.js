let links = document.querySelectorAll(".itemLinks");
let wrapper = document.querySelector("#wrapper");
let cont = document.querySelector("#contentContainer");
let next = document.querySelector("#next");
let img = document.querySelector("#img");
let sectionTitle = document.querySelector('#sectionTitle');

let activeLink = 0;
let starty = 0;
let dist = 0;
let pos = 0;

cont.addEventListener('touchstart', function(e) {
    let touchobj = e.changedTouches[0]; 
    starty = parseInt(touchobj.clientY); 
}, false);

cont.addEventListener('touchmove', function(e) {
    let touchobj = e.changedTouches[0];
    dist = parseInt(touchobj.clientY) - starty
    e.preventDefault();
}, false);

cont.addEventListener('touchend', function(e) {
    change();
    e.preventDefault();
}, false);


function change() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    if(dist < 0) {
        pos -= 768;
        activeLink += 1;
        if(pos < -1536 && activeLink > 2) {
            pos = -1536;
            activeLink = 2;
        }
        
    } else {
        pos += 768;
        activeLink -= 1;
        if(pos > 0 && activeLink < 0) {
            pos = 0;
            activeLink = 0;
        }
    }

    wrapper.style.top = pos + 'px';
    img.style.top = 768 + pos + 'px';
    sectionTitle.style.top = 1018 + pos + 'px';
    links[activeLink].classList.add("active");
    activeLink > 1 ?next.style.opacity = 0 : next.style.opacity = 1;
}


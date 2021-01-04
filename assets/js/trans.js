const options = {
  containers: ["#left", "#right", "#full"]
};
const swup = new Swup(options);

function imgHover() {
    var img = document.querySelector("img.frame-img");
    var imgMobileContainer = document.querySelector("div.frame-img-mobile-container");
    var imgMobile = document.querySelector("img.frame-img-mobile");
    var posterContainer = document.querySelector("div.poster-container");
    var hover = document.querySelectorAll("a.hover-img");
    var workNumber = document.querySelectorAll("span.work-number");

    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseover", function () {
            img.src = `/assets/img/portfolio/${hover[i].dataset.img}`;
            imgMobile.src = `/assets/img/portfolio/${hover[i].dataset.img}`;
            imgMobileContainer.classList.toggle('closed');
        });
        
        hover[i].addEventListener("mouseleave", function () {
            img.src = `/assets/img/po.png`;
            imgMobile.src = `/`;
            imgMobile.classList.toggle('closed');
        });


        hover[i].addEventListener("touchstart", function () {
            imgMobile.src = `/assets/img/portfolio/${hover[i].dataset.img}`;
            imgMobileContainer.classList.toggle('closed');
            posterContainer.classList.toggle('pointer-none');
        });
        
        imgMobile.addEventListener("mouseleave", function () {
            posterContainer.classList.remove('pointer-none');
            imgMobileContainer.classList.toggle('closed');
            imgMobile.src = ``;
        });
    }
    for (let j = 0; j < workNumber.length; j++) {
        workNumber[j].innerHTML = j;
    }
};

function navHighlight() {
    const posters = document.getElementById('posters');
    const uf = document.getElementById('uf');
    const cade = document.getElementById('cade');
    switch (window.location.pathname) {
        case "/":
            posters.classList.toggle('active');
            uf.classList.toggle('inactive');
            cade.classList.toggle('inactive');
            break;
        case "/uf":
            posters.classList.toggle('inactive');
            uf.classList.toggle('active');
            cade.classList.toggle('inactive');
            break;
        case "/cade":
            posters.classList.toggle('inactive');
            uf.classList.toggle('inactive');
            cade.classList.toggle('active');
            break;
        default:
            console.log('we on default');
            break;
    }
};

imgHover();
navHighlight();

// this event runs for every page view after initial load
swup.on('contentReplaced', imgHover);
swup.on('contentReplaced', navHighlight);
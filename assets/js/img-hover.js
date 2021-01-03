var img = document.querySelector("img.frame-img");

var hover = document.querySelectorAll("a.hover-img");
//var leave = document.querySelector("a.hover-leave");

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
        img.src = `/assets/img/portfolio/${hover[i].dataset.img}`;
        console.log(img.src);
    });

    hover[i].addEventListener("mouseleave", function () {
        img.src = `/assets/img/po.png`;
    });
}



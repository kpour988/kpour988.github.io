const swupOptions = {
  containers: ["#left", "#right", "#full"],
};
const swup = new Swup(swupOptions);

function imgHover() {
  var breakpoint;
  var getBreakpoint = function () {
    return window
      .getComputedStyle(document.body, ":before")
      .content.replace(/\"/g, "");
  };

  breakpoint = getBreakpoint();

  window.addEventListener(
    "resize",
    function () {
      breakpoint = getBreakpoint();
    },
    false
  );

  if (window.location.pathname === "/") {
    var workNumber = document.querySelectorAll("span.work-number");
    for (let ii = 0; ii < workNumber.length; ii++) {
      workNumber[ii].innerHTML = ii;
    }
    // Breakpoint Environments
    if (breakpoint != "small") {
      var imgList = document.querySelector("div.poster-container");
      var hover = document.querySelectorAll("a.hover-img");
      var img = document.querySelector("img.frame-img");

      for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseover", function () {
          img.src = `/assets/img/portfolio/posters/${hover[i].dataset.img}`;
        });

        imgList.addEventListener("mouseleave", function () {
          img.src = `/assets/img/po.png`;
        });
      }
    } else {
      const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
      });
    }
  }
}

function navHighlight() {
  const posters = document.getElementById("posters");
  const uf = document.getElementById("uf");
  const cade = document.getElementById("cade");
  switch (window.location.pathname) {
    case "/":
      posters.classList.toggle("active");
      uf.classList.toggle("inactive");
      cade.classList.toggle("inactive");
      break;
    case "/uf":
      posters.classList.toggle("inactive");
      uf.classList.toggle("active");
      cade.classList.toggle("inactive");
      break;
    case "/cade":
      posters.classList.toggle("inactive");
      uf.classList.toggle("inactive");
      cade.classList.toggle("active");
      break;
    default:
      break;
  }
}

imgHover();
navHighlight();

// this event runs for every page view after initial load
swup.on("contentReplaced", imgHover);
swup.on("contentReplaced", navHighlight);

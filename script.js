const container = document.querySelectorAll(".container");

let length = container.length;
let index = 0;
container[index].style.display = "block";

const next_btn = document.getElementById("next");
const previous_btn = document.getElementById("previous");
const images = document.querySelectorAll("image");

let indexes = document.querySelectorAll(".container1 li");
indexes.forEach((ind) => {
  ind.addEventListener("click", () => {
    container[index].style.display = "none";
    index = ind.value;
    container[index].style.display = "block";
    document.getElementById("page").textContent = index;
    let bgpath = "./public/asset/bg" + index + ".jpeg";
    document.body.style.backgroundImage = "url(" + bgpath + ")";
  });
});

indexes.forEach((ind) => {
  ind.addEventListener("mouseenter", () => {
    ind.style.backgroundColor = "rgb(0,0,0,0.5)";
    ind.style.color = "white";
  });
});
indexes.forEach((ind) => {
  ind.addEventListener("mouseleave", () => {
    ind.style.color = "black";
    ind.style.backgroundColor = "rgb(255, 255, 255, 0.282)";
  });
});

document.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    if (event.target.closest("button") !== null) {
      return;
    }

    const image = event.target;

    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.mozRequestFullScreen) {
      image.mozRequestFullScreen();
    } else if (image.webkitRequestFullscreen) {
      image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) {
      image.msRequestFullscreen();
    }
  }
});

next_btn.addEventListener("click", () => {
  if (index < length - 1) {
    index++;
    container[index].style.display = "block";
    container[index - 1].style.display = "none";
    let bgpath = "./public/asset/bg" + index + ".jpeg";
    document.body.style.backgroundImage = "url(" + bgpath + ")";
    document.getElementById("page").textContent = index;
  }
});
previous_btn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    container[index].style.display = "block";
    container[index + 1].style.display = "none";
    let bgpath = "./public/asset/bg" + index + ".jpeg";
    document.body.style.backgroundImage = "url(" + bgpath + ")";
    document.getElementById("page").textContent = index;
  }
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      previous_btn.click();
      break;
    case "ArrowRight":
      next_btn.click();
      break;
    case " ":
      if (!document.fullscreenElement) {
        openFullscreen(document.documentElement); // Fullscreen the entire page
      } else {
        closeFullscreen();
      }
      break;
    case "h":
      showHideButton();
      break;
    case "0":
      container[index].style.display = "none";
      index = 0;
      container[index].style.display = "block";
      document.getElementById("page").textContent = index;
      let bgpath = "./public/asset/bg" + index + ".jpeg";
      document.body.style.backgroundImage = "url(" + bgpath + ")";
      break;
    case "e":
      container[index].style.display = "none";
      index = 12;
      container[index].style.display = "block";
      document.getElementById("page").textContent = index;
      bgpath = "./public/asset/bg" + index + ".jpeg";
      document.body.style.backgroundImage = "url(" + bgpath + ")";
      break;
    default:
      break;
  }
});

function showHideButton() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // Internet Explorer/Edge
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // Internet Explorer/Edge
    document.msExitFullscreen();
  }
}

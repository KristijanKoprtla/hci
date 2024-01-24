document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-icon");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
  });

  // Fetching data
  fetch("./imageCarusel.json")
    .then((response) => response.json())
    .then((data) => {
      slide(data);
    });

  const slider = document.querySelector(".image-slider");
  const arrLeft = document.querySelector(".arrow-left");
  const arrRight = document.querySelector(".arrow-right");
  const heading = document.querySelector(".caption h1");
  const description = document.querySelector(".caption p");

  function showSlide(slide) {
    slider.style.backgroundImage = `url(${slide[index].path})`;
    slider.classList.add("image-fade");
    setTimeout(() => {
      slider.classList.remove("image-fade");
    }, 550);
    heading.innerText = slide[index].title;
    description.innerHTML = insertLineBreaks(slide[index].description, 11);
  }

  function insertLineBreaks(text, wordsPerLine) {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines.join("<br>");
  }

  let index = 0;
  function slide(data) {
    showSlide(data);

    arrRight.addEventListener("click", () => {
      if (index >= data.length - 1) {
        index = data.length - 1;
        return showSlide(data);
      } else {
        index++;
        return showSlide(data);
      }
    });

    arrLeft.addEventListener("click", () => {
      if (index === 0) {
        index = 0;
        return showSlide(data);
      } else {
        index--;
        return showSlide(data);
      }
    });
  }
});

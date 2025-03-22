const imgSlider = document.querySelector(".slider-img");
const images = document.querySelectorAll(".slider-img img");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
let currentIndex = 0;

// Button controls for selecting previous image
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    console.log(`Current Index: ${currentIndex}`);
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
});

// Button controls for selecting next image
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    console.log(`Current Index: ${currentIndex}`);
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
});

// Sets the automatic slider
setInterval(()=>{
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
},2000);

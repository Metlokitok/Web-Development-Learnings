const imgSlider = document.querySelector(".slider-img");
const images = document.querySelectorAll(".slider-img img");
const dots = document.querySelectorAll(".dot")
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
let currentIndex = 0;

// function for dots
function activeDot() {
    for (let i=0;i<dots.length;i++) {
        if (i===currentIndex) {
            dots[i].classList.add("active")
        } else {
            dots[i].classList.remove("active")
        }
    }
}

// Makes the dots interactive
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        currentIndex = i;
        imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`;
        activeDot();
    });
}

// Ensure that the first dot has the active class when the page loads
dots[currentIndex].classList.add("active") 


// Button controls for selecting previous image
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    console.log(`Current Index: ${currentIndex}`);
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
    activeDot()
});

// Button controls for selecting next image
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    console.log(`Current Index: ${currentIndex}`);
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
    activeDot()
});

// Sets the automatic slider
setInterval(()=>{
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    } 
    imgSlider.style.transform = `translateX(${-currentIndex * 60}rem)`
    activeDot()
},2000);

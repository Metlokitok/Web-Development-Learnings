
// Moved to JavaScript for easier navigation
// I can use JavaScript now!

const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');

box1.addEventListener("mouseover", ()=> {
    box1.style.transform = "scale(1.4)";
})
box1.addEventListener("mouseout", ()=> {
    box1.style.transform = "none";
})

box2.addEventListener("mouseover", ()=> {
    box2.style.transform = "rotate(180deg)";
})
box2.addEventListener("mouseout", ()=> {
    box2.style.transform = "none";
})

box3.addEventListener("mouseover",()=>{
    box3.style.transform = "skew(20deg, 10deg)";
})
box3.addEventListener("mouseout",()=>{
    box3.style.transform = "none";
})

box4.addEventListener("mouseover",()=>{
    box1.style.transform = "translateX(20px)";
    box2.style.transform = "translateY(-30px) rotate(10deg)";
    box3.style.transform = "scale(1.2)";
    box4.style.transform = "translateY(-50px)";
})
box4.addEventListener("mouseout",()=>{
    box1.style.transform = "none";
    box2.style.transform = "none";
    box3.style.transform = "none";
    box4.style.transform = "none";
})


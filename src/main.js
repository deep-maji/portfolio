
document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
});


// let main = document.querySelector("main");
// window.addEventListener("resize", (event) => {
//     window.location.reload();
// })

let loader = document.querySelector("#loader");
setTimeout(()=>{
    loader.style.top = "-200%"
},3000)


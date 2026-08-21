
const nav = document.getElementById("nav");
window.addEventListener('scroll',()=>{
    const currPos = window.scrollY;
    if(currPos>75){
        nav.classList.add('active');

    }else{
        nav.classList.remove('active');
    }
})

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const carouselItems = document.getElementsByClassName("carouselItem");
leftBtn.addEventListener("click",()=>{
    for(let i = 0;i<carouselItems.length;i++){
        if(carouselItems[i].classList.contains("active")){
            if(i === 0){
                carouselItems[i].classList.remove("active");
                carouselItems[3].classList.add("active");
            }else{
                carouselItems[i].classList.remove("active");
                carouselItems[i-1].classList.add("active");
            }
            break;
        }
    }
})
rightBtn.addEventListener("click",()=>{
    for(let i = 0;i<carouselItems.length;i++){
        console.log(carouselItems.length)
        if(carouselItems[i].classList.contains("active")){
            if(i === carouselItems.length - 1){
                carouselItems[i].classList.remove("active");
                carouselItems[0].classList.add("active");
            }else{
                carouselItems[i].classList.remove("active");
                carouselItems[i+1].classList.add("active");
            }
            break;
        }
    }
})


//Grab DOM element

const images = document.querySelector(".carousel__img")
const image = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
prevBtn.addEventListener("click",prevSlide)
nextBtn.addEventListener("click",nextSlide)


// Utility vars

let index = 0

let interval = setInterval(startInterval,2000);

// Set insterval

function resetInterval () {
    clearInterval(interval)
    interval = setInterval(startInterval,2000)


}


function startInterval () {
    index++
    moveCarousel()
}


function moveCarousel (){
    if(index > (image.length -1)){
        index = 0
    }else if ( index <0){
        index = image.length-1
    }
    images.style.transform = `translateX(-${index * 800}px)`
}

// nav button

function prevSlide () {
    index--
    resetInterval()
    moveCarousel()
}

function nextSlide () {
    index++
    resetInterval()
    moveCarousel()

}






// carousel 

const carousel = document.querySelector('.carousel');
let sliders = []
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex++].image;
  

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length -2)}px)`;

    }
}
for (let i = 0; i < 6; i++) {
   createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);

// video cards
const videoCard =document.querySelectorAll('.video-card');

videoCard.forEach(item => {
    item.addEventListener('mouseover' ,() => {
        let video =item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',() => {
        let video =item.children[1];
        video.pause();
    })
})

// card sliders
let cardContainer=document.querySelectorAll('.card-container');
let prebtns=document.querySelectorAll('.pre-btn');
let nxtbtns=document.querySelectorAll('.nxt-btn');

cardContainer.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth= containerDimensions.width
    nxtbtns[i].addEventListener('click', ()=>{
        item.scrollLeft+= containerWidth-200;
    })
    prebtns[i].addEventListener('click', ()=>{
        item.scrollLeft-= containerWidth+200;
    })
})
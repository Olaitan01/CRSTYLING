/**Hero Slider Animation */
let slideIndex=0;
showIndex()
function showIndex(){
    let i;
    let slide=document.getElementsByClassName("hero__img")
    for(let i=0;i<slide.length;i++){
        slide[i].style.display="none"
    }
    slideIndex++
    if(slideIndex>slide.length){
        slideIndex=1
    }
    slide[slideIndex - 1].style.display="block"
    setTimeout(showIndex,4000)
}



/**Flex Show */
let flexIndex=0;
expandIndex()

export  function expandIndex(){
    let i;
    let flexSlide=document.getElementsByClassName("flex__img")
    for(let i=0;i<flexSlide.length;i++){
        flexSlide[i].style.flex="1"
       
    }
    flexIndex++
    if(flexIndex > flexSlide.length){
        flexIndex=1;
    }
    if(window.innerWidth < 600 ){
      
    }
    flexSlide[flexIndex - 1].style.flex="8"
    

    const observer = new IntersectionObserver((entries,self)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                setTimeout(expandIndex,2000);
                self.unobserve(entry.target)
            console.log("yeah")
            }
        })
    })
    
const flexShow=document.querySelector(".flex__show")
observer.observe(flexShow)

}





























// const options = {

//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
//   }
  
//   const observer = new IntersectionObserver(callback, options);
//   const images = document.querySelectorAll('.lazy');

//   images.forEach(image => {
//     observer.observe(image);
//   });
    
//   function callback(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.src;
//         image.setAttribute('src', src);
//         observer.unobserve(image);
//       }
//     });
//   }
  

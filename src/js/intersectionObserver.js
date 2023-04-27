


/**General fade in/fade out and slide right and slide left element observer */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationName = entry.target.dataset.animation;
        entry.target.classList.add(animationName);
        observer.unobserve(entry.target);
          }
    });
  });
  
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach((element) => {
    observer.observe(element);
    
  });
  
  
  /**Nav On scroll effect */
window.onscroll=function(){
    scrollFunction()
};

function scrollFunction(){
    const headerTop=document.querySelector(".header-top")
    if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
        headerTop.style.background="rgba(178,130,40,0.8)"
    }
    else{
        headerTop.style.background="initial"
    }
}

/**Stop loading the images in the expandIndex function when not in view */

const images=document.querySelectorAll("[data-src]");
const config={
  root:null,
  rootMargin:"0px 0px 50px 0px",
  threshold:0.5
}
const observers=new IntersectionObserver((entries,self)=>{
  
  entries.forEach(entry=>{
    if(entry.isIntersecting){

      preloadImage(entry.target)
      self.unobserve(entry.target)
    }else{
      
      return
      
    }
  })
}, config)

function preloadImage(img){
  const src= img.getAttribute("data-src");
  if(!src){return}
  img.src=src
}

images.forEach(image=>{
  observers.observe(image)
})
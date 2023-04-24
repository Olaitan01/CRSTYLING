/** Mobile Menu button functionality */
const burgerBtn=document.querySelector('.burger__menu')
let openMenu=document.querySelector('.open-menu')
let closeMenu=document.querySelector('.close-menu')
const menuNav=document.querySelector('.mobile-nav')

burgerBtn.addEventListener("click",()=>{
    if(closeMenu.style.display==="block"){
        openMenu.style.display="block"
        closeMenu.style.display="none"
        menuNav.style.transform="translateX(-100%)"
        
    }else{
        openMenu.style.display="none"
        closeMenu.style.display="block"
        menuNav.style.transform="translateX(0%)"
        
    }
})

/**Remove the menu when any nav item is clicked on */
const mobileNav=document.querySelectorAll(".mobile-nav__item")
mobileNav.forEach(item=>{
    item.addEventListener("click",()=>{
       if(window.innerWidth < 600){
        menuNav.style.transform="translateX(-100%)"
        openMenu.style.display="block"
        closeMenu.style.display="none"
        console.log("yup")
       }else{
        menuNav.style.transform="translateX(0%)"
        console.log("nope")
       }
    })
})

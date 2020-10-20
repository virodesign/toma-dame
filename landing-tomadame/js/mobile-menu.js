const navSlide =()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.menu-list li');
    
    
    burger.addEventListener('click',()=>{
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation =''
            } else {
                link.style.animation = `navItemsFade 0.3s ease forwards ${index / 7 + 0}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
   

}   


navSlide();
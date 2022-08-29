burger= document.querySelector( '.burger')
navbar= document.querySelector(''.navbar')
navList= document.querySelector(''.navList')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})
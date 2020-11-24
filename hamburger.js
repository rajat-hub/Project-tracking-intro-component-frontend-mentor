let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
// let devicesImage=document.getElementById("devices");
let hr=document.getElementById("hr");

function changing(){
    let hamburgerImage=document.getElementById("hamburger").src;

    if(hamburgerImage.indexOf('icon-close.svg')!=-1){
        console.log("hi")
      document.getElementById('hamburger').src = 'Images/icon-hamburger.svg';
    }
    
      if (hamburgerImage.indexOf('icon-hamburger.svg')!=-1) {
          console.log("hello")
        document.getElementById('hamburger').src  = 'Images/icon-close.svg';
    }
}
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  // devicesImage.classList.toggle("change_margin");
  hr.classList.toggle("hr_active")

  
 
});
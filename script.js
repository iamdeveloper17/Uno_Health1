let menu = document.querySelector('#menu');
let links = document.querySelector('#links');

menu.addEventListener('click',()=>{
    if (links.style.display === "none") {
        links.style.display = "block";
      } else {
        links.style.display = "none";
      }
})
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  })
})

hiddenElements.forEach((el) => observer.observe(el));

/* ---- NOT AVAILABLE ---- */
function notAvaSer(){
    alert("The requested profile is currently not available.\nWe apologize for the inconvenience.");
  }
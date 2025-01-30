/* ---- TRANSITION ---- */
const hiddenElements = document.querySelectorAll(".hiddenTransit");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add("showTransit");
    }
  })
})

hiddenElements.forEach((el) => observer.observe(el));


/* ---- NOT AVAILABLE ---- */
function notAvaSer(){alert("The requested profile is currently not available.");}
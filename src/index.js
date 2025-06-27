// * nav elements
const openImg = document.getElementById("mobNavOpen");
const closeImg = document.getElementById("mobNavClose");
const navButton = document.getElementById("navMobilButton");
const navMobile = document.getElementById("navMobile");

// * nav envets
navButton.addEventListener("click", (e) => {
  mobileNavHnadle();
});

function mobileNavHnadle(open = null) {
  if (open == null) {
    openImg.classList.toggle("hidden");
    closeImg.classList.toggle("hidden");
    navMobile.classList.toggle("h-[90vh]");
    navMobile.classList.toggle("pt-10");
    navMobile.classList.toggle("h-0");
    document.body.classList.toggle("overflow-hidden");
    return;
  }
  if (open) {
    document.body.classList.add("overflow-hidden");
    openImg.classList.add("hidden");
    closeImg.classList.remove("hidden");
    navMobile.classList.add("h-[90vh] pt-10");
    navMobile.classList.remove("h-[0]");
  } else {
    document.body.classList.remove("overflow-hidden");
    navMobile.classList.remove("h-[90vh] pt-10");
    navMobile.classList.add("h-[0]");
    openImg.classList.remove("hidden");
    closeImg.classList.add("hidden");
  }
}
// *

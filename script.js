function myFunction(path) {
    document.getElementById('myIframe').src = path;
    console.log(document.getElementById('myIframe').src);
  }

  document.body.onscroll = function myFunction2() {  
    const scrolltotop = document.scrollingElement.scrollTop;
    const target = document.getElementById("main1");
    const xvalue = "center";
    const factor = 0.5;
    const yvalue = scrolltotop * factor;

    const scrolltotop2 = document.scrollingElement.scrollTop;
    const target2 = document.getElementById("html");
    const xvalue2 = "center";
    const factor2 = 0.2;
    const yvalue2 = scrolltotop2 * factor2;

    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    target2.style.backgroundPosition = xvalue2 + " " + yvalue2 + "px";
  }

function clicks(pa) {
  document.getElementById('pdf').src = pa;
  console.log("clicked!")
}

function letIt() {
  document.querySelector(".music2").style.display = "none";
  document.querySelector(".music1").style.display = "block"
  console.log("hey!");
}

function snow() {
  document.querySelector(".music1").style.display = "none";
  document.querySelector(".music2").style.display = "block"
  console.log("hey!");
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active2";
}




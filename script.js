// ==========================
// TEA HOUSE WEBSITE
// script.js
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
    menuBtn.classList.remove("active");
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth"
                });
        });
    });

});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {

    item.addEventListener("click", function(){

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }

    });

});

const image = document.querySelectorAll(".gallery-grid img");

let current = 0;

function openImage(img){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=img.src;
    
    current = Array.from(image).indexOf(img);
    
}

function closeImage(){

    document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

    current += step;

    if(current<0){

        current=image.length-1;

    }

    if(current>=image.length){

        current=0;

    }
    
    document.getElementById("lightbox-img").src = image[current].src;

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeImage();

    }

    if(e.key==="ArrowRight"){

        changeImage(1);

    }

    if(e.key==="ArrowLeft"){

        changeImage(-1);

    }

});
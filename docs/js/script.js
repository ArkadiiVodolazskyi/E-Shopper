// Spinner .......................................

let spinner = document.querySelector(".spinner");

window.addEventListener("load", function() {

    spinner.remove();

});

// Global variables
let b = 0;  // Banner variable
let a = 0;  // Recom variable

// Banner interaction .................................

// Get buttons pointers
let barrowBtns = document.querySelectorAll(".wrapper > .arrow"); 

// Get modal windows pointers
let cards = document.querySelectorAll(".wrapper > .card");

// Set default states
cards[b].classList.add("active");

// Set listeners
barrowBtns[0].addEventListener("click", function(e) {

    for(let i = 0; i < cards.length; i++) {

        cards[i].classList.remove("active");

    }

    b--;

    if (b < 0) {
        b = cards.length - 1;
    }
    
    cards[b].classList.add("active");

    e.preventDefault();

});


barrowBtns[1].addEventListener("click", function(e) {

    for(let i = 0; i < cards.length; i++) {

        cards[i].classList.remove("active");

    }

    b++;

    if (b > (cards.length - 1)) {
        b = 0;
    }
    
    cards[b].classList.add("active");

    e.preventDefault();
});

// Header drops interaction ............................

// Pointers: buttons, uls
let headDropsBtn = document.querySelectorAll("header .drops li.drop > a");
let headDropsList = document.querySelectorAll("header .drops li.drop > ul");

headDropsBtn[0].addEventListener("click", function() {

    if (headDropsList[0].classList.contains("active")) {
        headDropsList[0].classList.remove("active");
    }
    else if (headDropsList[1].classList.contains("active")) {
        for(let i = 0; i < headDropsList.length; i++) {
            headDropsList[i].classList.remove("active");
        }
        headDropsList[0].classList.add("active");
    } else {
        headDropsList[0].classList.add("active");
    }

});

headDropsBtn[1].addEventListener("click", function() {

    if (headDropsList[1].classList.contains("active")) {
        headDropsList[1].classList.remove("active");
    }
    else if (headDropsList[0].classList.contains("active")) {
        for(let i = 0; i < headDropsList.length; i++) {
            headDropsList[i].classList.remove("active");
        }
        headDropsList[1].classList.add("active");
    } else {
        headDropsList[1].classList.add("active");
    }

});




// Aside drops interaction ............................

// Get buttons pointers
let catOpenBtns = document.querySelectorAll(".category-open"); 

// Get drops pointers
let catDrops = document.querySelectorAll(".category-drop");

// Set listeners
for(let i = 0; i < catDrops.length; i++) {
    
    catOpenBtns[i].addEventListener("click", function(e) {

        for(let i = 0; i < catDrops.length; i++) {
            catDrops[i].classList.remove("active");
        }
        
        catDrops[i].classList.add("active");

        e.preventDefault();

    })
    
}



// Range bar interaction ..................................

// Get pointers: range, price set
let range = document.querySelector("input[type='range");
let priceSet = document.querySelector(".prices span.set");

// Set initial states: min, max and current + write them into spans
range.setAttribute("min", 0);
let rangeMin = document.querySelector(".prices span.min").innerHTML = "$" + range.getAttribute("min");

range.setAttribute("max", 1000);
let rangeMax = document.querySelector(".prices span.max").innerHTML = "$" + range.getAttribute("max");

// Set current price
range.setAttribute("value", range.getAttribute("max") / 2)
priceSet.innerHTML = "$" + range.value;

// Set listeners: write range position into span
range.addEventListener("input", function() {

    priceSet.innerHTML = "$" + range.value;

});


// Tab interaction .....................................

// Get buttons pointers
let openBtns = document.querySelectorAll(".btns .btn"); 

// Get modal windows pointers
let tabs = document.querySelectorAll(".tab");

// Set default states
openBtns[0].classList.add("active");
tabs[0].classList.add("active");

// Set listeners
for(let i = 0; i < openBtns.length; i++) {
    
    openBtns[i].addEventListener("click", function(e) {

        for(let i = 0; i < openBtns.length; i++) {
            openBtns[i].classList.remove("active");
            tabs[i].classList.remove("active");
        }
        
        openBtns[i].classList.add("active");
        tabs[i].classList.add("active");

        e.preventDefault();

    })
    
}




// Recom slider interaction ..............................

// Get buttons pointers
let arrowBtns = document.querySelectorAll(".wrap-slider > .arrow"); 

// Get modal windows pointers
let sliders = document.querySelectorAll(".wrap-slider .slider");

// Set default states
sliders[a].classList.add("active");

// Set listeners

arrowBtns[0].addEventListener("click", function(e) {

    for(let i = 0; i < sliders.length; i++) {

        sliders[i].classList.remove("active");

    }

    a--;

    if (a < 0) {
        a = sliders.length - 1;
    }
    
    sliders[a].classList.add("active");

    e.preventDefault();

});


arrowBtns[1].addEventListener("click", function(e) {

    for(let i = 0; i < sliders.length; i++) {

        sliders[i].classList.remove("active");

    }

    a++;

    if (a > (sliders.length - 1)) {
        a = 0;
    }
    
    sliders[a].classList.add("active");

    e.preventDefault();
});

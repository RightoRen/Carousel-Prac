// Defining our const variables this is always first

const carousel = document.querySelector(".carousel");

let isDragging = false, startX, startScrollLeft;

// Declaring functions
// Defining the dragging function here
// JavaScript methods are actions that can be performed on objects =>

const dragStart = (e) => {
    isDragging = true;
    // classList.add adds a new class to your html while doing the event
    carousel.classList.add("dragging");


    // This is storing the X coordinate of the carousel when first clicked
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // e.pageX returns the horizontal coordinate of the mouse pointer
    if(!isDragging) return; // if isDragging is false return from here
    
    // scrollLeft sets or returns the number of pixels, an elements content is scrolled horizontally
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};


// When the dragging stops we remove the dragging class
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging"); 
}


// Making a listener so that when the mouse drags the pictures left or right it will slide correctly, this is always last
// In this case the function is actually dragging, mouse move is just the descriptor used
// Always defining the second thing in the event listener

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

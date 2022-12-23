//  Week Three
// Assignments By Ayman Taha 23/12/2022 



// set the title attribute for an HTML element dynamically by code javascript.
let list = document.querySelectorAll("ul li a");
list.forEach( function(ele) {
    let sValue = ele.innerHTML;
    ele.setAttribute("title", sValue);

    // Add behavior Smooth 
    ele.addEventListener("click", clickHandler);
        function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
        behavior: "smooth"
        });
    };
});






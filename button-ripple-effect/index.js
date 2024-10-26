// access the button
const button = document.querySelector(".btn");

// add functionality to it
button.addEventListener("mouseover", (event)=> {
    const x = (event.pageX - button.offsetLeft);
    const y = (event.pageY - button.offsetTop);

    button.style.setProperty("--xPos", x + "px");
    button.style.setProperty("--yPos", y + "px");
});

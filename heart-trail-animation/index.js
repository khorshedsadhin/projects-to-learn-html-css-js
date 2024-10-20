const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=> {
    const x = event.offsetX;
    const y = event.offsetY;

    // create span element as we move cursor in screen
    const spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    bodyEl.appendChild(spanEl);

    // random height width each time
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // remove image after some time
    setTimeout(() => {
       spanEl.remove();
    }, 3000);
});

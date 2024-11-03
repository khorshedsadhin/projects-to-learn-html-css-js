
const imageContainer = document.querySelector(".image-container");
const button = document.querySelector(".btn");

button.addEventListener("click", ()=> {
    let imageNum = 10;
    addNewImages(imageNum);
});

function addNewImages(imageNum) {
    for(let i = 0; i < imageNum; i++) {
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainer.appendChild(newImage);
    }
}
